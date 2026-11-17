/* =====================================================================
   uj-sync.js v2 : synchronisation temps réel du fil My UJLoG
   Schéma : ujlog_sync_complet.sql (posts, comments, likes, views + RPC)
   - utilise la session du chargeur (window.parent.UJ_AUTH.sb) : pas de 2e connexion
   - publications, J'aime, commentaires, vues : base + temps réel
   - compteurs : fournis par la base (triggers) via les mises à jour de `posts`
   - cache local : le fil s'affiche tout de suite, puis se met à jour
   - reprise automatique au retour dans l'appli (Gmail, veille, réseau)
   ===================================================================== */
(() => {
'use strict';
const CACHE_KEY = 'uj_feed_cache_v2';
const SB_SRC = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js';
let sb = null, me = null, channel = null, retry = 0, started = false, sheet = null;
const stats = new Map();   // post_id -> {l, c, v, liked}
const posts = new Map();   // post_id -> ligne posts
const profs = new Map();   // user_id -> {prenom, nom, pseudo, photo}
const viewed = new Set();

/* ---------- utilitaires ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const toast = m => { try { (window.toast || console.log)(m); } catch (_) {} };
const ago = t => { const s = (Date.now() - new Date(t)) / 1000;
  return s < 60 ? 'À l’instant' : s < 3600 ? Math.floor(s / 60) + ' min' : s < 86400 ? Math.floor(s / 3600) + ' h' : Math.floor(s / 86400) + ' j'; };
const jget = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (_) { return d; } };
const jset = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} };
const loadScript = src => new Promise((ok, ko) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = ko; document.head.appendChild(s); });
const feed = () => $('#a1 .sc');
const safeBg = v => /^[#a-zA-Z0-9(),.%\s\-]+$/.test(v || '') ? v : 'var(--g)';
const pname = p => p ? (((p.prenom || '') + ' ' + (p.nom || '')).trim() || p.pseudo || 'Étudiant(e)') : 'Étudiant(e)';
const myName = () => { const u = window.UJP || {}; return ((u.pre || '') + ' ' + (u.nom || '')).trim() || (me && me.email ? me.email.split('@')[0] : 'Étudiant(e)'); };

/* ---------- client Supabase : celui du chargeur, sinon un client à nous (même session) ---------- */
async function getClient() {
  for (let i = 0; i < 67; i++) {                       // ~20 s : le chargeur charge Supabase en arrière-plan
    try { const A = window.parent && window.parent.UJ_AUTH; if (A && A.sb) return A.sb; } catch (_) {}
    await sleep(300);
  }
  let C = window.UJ_DB; try { C = C || window.parent.UJ_DB; } catch (_) {}
  if (!C || !C.url || !C.key) return null;
  if (!window.supabase) await loadScript(SB_SRC);
  return window.supabase.createClient(C.url, C.key, { auth: { persistSession: true, autoRefreshToken: true } });
}

/* ---------- profils (nom + photo des auteurs) ---------- */
async function ensureProfiles(ids) {
  const need = [...new Set(ids)].filter(i => i && !profs.has(i));
  if (!need.length) return;
  const { data } = await sb.from('profiles').select('id,prenom,nom,pseudo,photo').in('id', need);
  (data || []).forEach(p => profs.set(p.id, p));
}

/* ---------- images : compression + envoi dans le bucket « media » ---------- */
async function shrink(dataUrl, max = 1280, q = .82) {
  const img = await new Promise((ok, ko) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ko; i.src = dataUrl; });
  const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
  const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
  c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
  const blob = await new Promise(ok => c.toBlob(ok, 'image/jpeg', q));
  return { blob, w: c.width, h: c.height };
}
async function upload(dataUrl) {
  const { blob, w, h } = await shrink(dataUrl);
  const path = `${me.id}/posts/${crypto.randomUUID()}.jpg`;
  const { error } = await sb.storage.from('media').upload(path, blob, { contentType: 'image/jpeg', cacheControl: '31536000' });
  if (error) throw error;
  return { url: sb.storage.from('media').getPublicUrl(path).data.publicUrl, type: 'image', w, h };
}

/* ---------- rendu d'une publication (mêmes classes que l'appli : le style existant s'applique) ---------- */
const icon = (n, z) => `<svg class="i" aria-hidden="true"${z ? ` style="width:${z}px;height:${z}px"` : ''}><use href="#${n}"/></svg>`;
const initials = p => ((p.prenom || '')[0] || '') + ((p.nom || '')[0] || '') || (p.pseudo || '?')[0];
function postHTML(p) {
  const prof = profs.get(p.author_id) || {};
  const med = Array.isArray(p.media) ? p.media : [];
  const img = med.find(m => m && m.url), bgm = med.find(m => m && m.type === 'bg');
  const ratio = img && img.w && img.h ? `${img.w}/${img.h}` : '1/1';
  const bg = img ? `url('${esc(img.url)}') center/cover` : esc(safeBg(bgm && bgm.value));
  const nm = esc(pname(prof));
  const av = prof.photo ? `style="background:url('${esc(prof.photo)}') center/cover"` : 'style="display:grid;place-items:center;font-weight:700;font-size:14px"';
  // même structure que les publications natives de l'appli (mêmes classes, mêmes icônes) pour garder le style existant
  return `<article class="ig" data-pid="${p.id}"><div class="row ih"><span class="rg s"><span class="av" ${av}>${prof.photo ? '' : esc(initials(prof).toUpperCase())}</span></span>
  <div class="fl"><b>${nm}</b><div class="mu" style="font-size:12px">Étudiant(e)</div></div></div>
  <div class="md" style="background:${bg};aspect-ratio:${ratio}">${img ? '' : `<b class="mt">${esc(p.caption)}</b>`}</div>
  <div class="acts2"><button class="cbn" data-act="cm" aria-label="Commenter">${icon('cht', 22)}<span>Commenter</span><span class="cc"></span></button><button class="lkb" aria-pressed="false" aria-label="J’aime">${icon('hrt', 24)}<span>J’aime</span></button><span class="fl"></span></div>
  <div class="cp"><b class="lc">Soyez le premier à aimer</b>${p.caption ? `<p><b>${nm}</b> ${esc(p.caption)}</p>` : ''}<button class="mu cv" data-act="cm">Ajouter un commentaire…</button><span class="mu ujv" style="font-size:12px"></span></div></article>`;
}
function paint(pid) {
  const a = $(`.ig[data-pid="${pid}"]`); if (!a) return;
  const s = stats.get(pid) || { l: 0, c: 0, v: 0, liked: false }, p = posts.get(pid);
  const set = (sel, t) => { const e = $(sel, a); if (e) e.textContent = t; };
  const k = $('.lkb', a); if (k) k.setAttribute('aria-pressed', s.liked);
  set('.lc', s.l ? (s.l === 1 ? '1 J’aime' : s.l + ' J’aime') : 'Soyez le premier à aimer');
  set('.cc', s.c || '');
  set('.cv', s.c ? (s.c > 1 ? `Voir les ${s.c} commentaires` : 'Voir le commentaire') : 'Ajouter un commentaire…');
  set('.ujv', (p ? ago(p.created_at) : '') + (s.v ? ' · ' + s.v + (s.v > 1 ? ' vues' : ' vue') : ''));
}
const setStats = (p, liked) => {
  const o = stats.get(p.id) || { l: 0, c: 0, v: 0, liked: false };
  stats.set(p.id, { l: p.likes_count ?? o.l, c: p.comments_count ?? o.c, v: p.views_count ?? o.v, liked: liked ?? o.liked });
};
function insertPost(p) {
  const f = feed(); if (!f || $(`.ig[data-pid="${p.id}"]`)) return;
  const first = $('.ig', f), html = postHTML(p);
  if (first) first.insertAdjacentHTML('beforebegin', html); else f.insertAdjacentHTML('afterbegin', html);
  paint(p.id); watch($(`.ig[data-pid="${p.id}"]`));
}
async function addPost(p, fresh) {
  if (p.deleted_at) return;
  posts.set(p.id, p); setStats(p);
  await ensureProfiles([p.author_id]);
  insertPost(p);
  if (fresh && me && p.author_id !== me.id) toast('Nouvelle publication');
}
const removePost = id => { const a = $(`.ig[data-pid="${id}"]`); if (a && !a._mine) a.remove(); posts.delete(id); };

/* ---------- chargement + cache ---------- */
async function loadFeed() {
  const cached = jget(CACHE_KEY, null);
  if (cached && !$('.ig[data-pid]')) {
    (cached.profs || []).forEach(p => profs.set(p.id, p));
    cached.posts.slice().reverse().forEach(p => { posts.set(p.id, p); setStats(p, !!(cached.liked || []).includes(p.id)); insertPost(p); });
  }
  const { data: rows, error } = await sb.rpc('feed', { _limit: 30 });
  if (error) { console.error('[uj-sync] feed', error.message); return; }
  const ids = rows.map(r => r.id);
  await ensureProfiles(rows.map(r => r.author_id));
  const lk = ids.length ? await sb.from('likes').select('target_id').eq('user_id', me.id).eq('target_type', 'post').in('target_id', ids) : { data: [] };
  const liked = new Set((lk.data || []).map(x => x.target_id));
  rows.forEach(p => { posts.set(p.id, p); setStats(p, liked.has(p.id)); });
  const cur = $$('.ig[data-pid]').filter(a => !a._mine).map(a => a.dataset.pid);
  if (JSON.stringify(cur) !== JSON.stringify(ids.filter(i => !$(`.ig[data-pid="${i}"]`)?._mine))) {
    $$('.ig[data-pid]').filter(a => !a._mine).forEach(a => a.remove());
    rows.slice().reverse().forEach(p => insertPost(p));
  }
  ids.forEach(paint);
  jset(CACHE_KEY, { posts: rows.slice(0, 20), profs: [...profs.values()].slice(0, 60), liked: [...liked] });
}

/* ---------- temps réel ---------- */
function subscribe() {
  if (channel) { try { sb.removeChannel(channel); } catch (_) {} }
  channel = sb.channel('uj-feed')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' }, e => addPost(e.new, true))
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'posts' }, e => {
      const p = e.new;
      if (p.deleted_at) return removePost(p.id);
      if (!posts.has(p.id)) return;
      posts.set(p.id, p); setStats(p); paint(p.id);                      // compteurs calculés par la base
    })
    .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'posts' }, e => removePost(e.old.id))
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, async e => {
      if (!sheet || sheet.pid !== e.new.post_id || (me && e.new.author_id === me.id)) return;
      await ensureProfiles([e.new.author_id]); addCommentRow(e.new);
    })
    .subscribe(st => {
      if (st === 'SUBSCRIBED') retry = 0;
      else if ((st === 'CHANNEL_ERROR' || st === 'TIMED_OUT') && ++retry <= 6) setTimeout(subscribe, Math.min(60000, 2000 * 2 ** retry));
    });
}

/* ---------- J'aime ---------- */
async function toggleLike(pid) {
  if (!me) return toast('Reconnecte-toi pour aimer cette publication');
  const s = stats.get(pid); if (!s) return;
  const was = s.liked; s.liked = !was; s.l = Math.max(0, s.l + (was ? -1 : 1)); paint(pid);   // affichage instantané
  const { data, error } = await sb.rpc('toggle_like', { _type: 'post', _id: pid });
  if (error) { s.liked = was; s.l = Math.max(0, s.l + (was ? 1 : -1)); paint(pid); toast('Action impossible, réessaie'); }
  else if (data !== !was) { s.liked = !!data; paint(pid); }
}

/* ---------- commentaires ---------- */
function addCommentRow(c) {
  if (!sheet) return;
  const l = $('.ujcl', sheet.el); if (!l || l.querySelector(`[data-cid="${c.id}"]`)) return;
  l.insertAdjacentHTML('beforeend', `<div data-cid="${c.id}" style="padding:8px 0"><b>${esc(pname(profs.get(c.author_id)))}</b> <span style="opacity:.6;font-size:12px">${ago(c.created_at)}</span><div>${esc(c.body)}</div></div>`);
  l.scrollTop = l.scrollHeight;
}
async function openComments(pid) {
  if (sheet) sheet.el.remove();
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,.5);display:flex;align-items:flex-end;justify-content:center';
  el.innerHTML = `<div style="background:var(--paper,#fff);color:var(--ink,#111);width:100%;max-width:480px;max-height:80vh;border-radius:20px 20px 0 0;padding:16px;display:flex;flex-direction:column">
    <div style="display:flex;justify-content:space-between"><b>Commentaires</b><button class="ujx" style="background:none;border:0;font-size:22px;color:inherit" aria-label="Fermer">×</button></div>
    <div class="ujcl" style="overflow:auto;flex:1;min-height:120px"></div>
    <div style="display:flex;gap:8px;padding-top:8px"><input class="uji" maxlength="2000" placeholder="Ajouter un commentaire…" style="flex:1;padding:11px;border-radius:12px;border:1px solid #8884;background:transparent;color:inherit;font-size:16px"><button class="ujs" style="border:0;border-radius:12px;padding:0 16px;background:var(--g,#15803D);color:#fff;font-weight:700">Envoyer</button></div></div>`;
  document.body.appendChild(el); sheet = { pid, el };
  const close = () => { el.remove(); if (sheet && sheet.el === el) sheet = null; };
  $('.ujx', el).onclick = close; el.addEventListener('click', e => { if (e.target === el) close(); });
  const { data } = await sb.from('comments').select('*').eq('post_id', pid).order('created_at');
  await ensureProfiles((data || []).map(c => c.author_id)); (data || []).forEach(addCommentRow);
  const send = async () => {
    const i = $('.uji', el), body = i.value.trim(); if (!body) return;
    if (!me) return toast('Reconnecte-toi pour commenter');
    const { data: c, error } = await sb.from('comments').insert({ post_id: pid, author_id: me.id, body }).select().single();
    if (error) return toast('Commentaire non envoyé');
    i.value = ''; const u = window.UJP || {};
    if (!profs.has(me.id)) profs.set(me.id, { id: me.id, prenom: u.pre, nom: u.nom, pseudo: u.pse, photo: u.ph });
    addCommentRow(c);
  };
  $('.ujs', el).onclick = send; $('.uji', el).addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
}

/* ---------- vues : visible 1 s à 60 % => mark_viewed (la base compte une fois par personne) ---------- */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  const a = e.target, pid = a.dataset.pid;
  if (e.isIntersecting) a._vt = setTimeout(() => {
    if (viewed.has(pid) || !me) return; viewed.add(pid);
    sb.rpc('mark_viewed', { _type: 'post', _id: pid }).then(() => {}, () => viewed.delete(pid));
  }, 1000); else clearTimeout(a._vt);
}), { threshold: .6 }) : null;
const watch = a => { if (io && a) io.observe(a); };

/* ---------- publication : branchement sur le hook UJADDPOST de l'appli ---------- */
async function pushPost(a) {
  if (!sb || !me) return toast('Publication enregistrée sur ce téléphone seulement (hors connexion)');
  try {
    const md = $('.md', a), urls = [];
    const bgs = [md, ...md.querySelectorAll('[style*="url("]')].map(n => n.style.background || n.style.backgroundImage || '');
    for (const b of bgs) { const m = b.match(/url\(["']?(data:image[^"')]+)["']?\)/); if (m && !urls.includes(m[1])) urls.push(m[1]); }
    const media = []; for (const u of urls.slice(0, 20)) media.push(await upload(u));
    const bg = !media.length ? (md.style.background || '') : '';
    if (bg) media.push({ type: 'bg', value: bg });
    const mu = $('.ih .fl .mu', a);
    const row = { author_id: me.id, kind: urls.length ? 'photo' : 'texte', caption: a._tx || '', media,
                  visibility: /Priv/i.test(mu ? mu.textContent : '') ? 'prive' : 'public' };
    const { data, error } = await sb.from('posts').insert(row).select().single();
    if (error) throw error;
    a.dataset.pid = data.id; a._mine = true; posts.set(data.id, data); setStats(data, false); paint(data.id); watch(a);
  } catch (e) { console.error('[uj-sync] publication', e); toast('Publication enregistrée sur ce téléphone seulement (réseau ?)'); }
}
/* L'appli définit elle-même window.UJADDPOST : on la « enveloppe » quel que soit l'ordre de chargement. */
let inner = typeof window.UJADDPOST === 'function' ? window.UJADDPOST : null;
const wrapped = function (t, a) { try { inner && inner.apply(this, arguments); } finally { pushPost(a); } };
Object.defineProperty(window, 'UJADDPOST', { configurable: true, get: () => wrapped, set: f => { inner = typeof f === 'function' ? f : null; } });

/* ---------- clics sur les publications synchronisées ---------- */
/* Ce fichier est chargé AVANT app.js : son écouteur (window, capture) passe donc avant tous ceux de l'appli. */
window.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('.ig[data-pid]'); if (!a) return;
  const pid = a.dataset.pid;
  if (e.target.closest('.lkb')) { e.stopImmediatePropagation(); e.preventDefault(); toggleLike(pid); }
  else if (e.target.closest('.cbn, .cv')) { e.stopImmediatePropagation(); e.preventDefault(); openComments(pid); }
}, true);

/* ---------- démarrage et reprise ---------- */
async function start() {
  if (started) return; started = true;
  try { sb = await getClient(); } catch (e) { console.warn('[uj-sync] Supabase injoignable', e); }
  if (!sb) { started = false; setTimeout(start, 15000); return; }
  const { data } = await sb.auth.getSession(); me = data && data.session ? data.session.user : null;
  sb.auth.onAuthStateChange((_e, s) => { me = s ? s.user : null; });
  if (!me) { console.info('[uj-sync] pas de session : fil local uniquement'); return; }
  const u = window.UJP || {}; profs.set(me.id, { id: me.id, prenom: u.pre, nom: u.nom, pseudo: u.pse, photo: u.ph });
  await loadFeed().catch(console.error);
  subscribe();
  const resync = () => { if (document.visibilityState === 'visible' && me) { loadFeed().catch(() => {}); subscribe(); } };
  document.addEventListener('visibilitychange', resync);
  window.addEventListener('online', resync);
  window.addEventListener('pageshow', e => { if (e.persisted) resync(); });
}
window.UJSync = { reload: () => loadFeed(), get user() { return me; } };
const boot = () => { const t = setInterval(() => { if (feed()) { clearInterval(t); start(); } }, 200); };
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot) : boot();
})();
