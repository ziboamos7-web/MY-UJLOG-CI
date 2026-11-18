/* ===== Publications synchronisées avec Supabase (table posts + stockage « posts ») =====
 * - Publier : la photo est réduite, envoyée dans le stockage, puis la ligne est écrite dans posts.
 * - Fil : au démarrage, toutes les 60 s et en temps réel, les publications visibles de tous les
 *   étudiants (règle can_see_post côté serveur) sont affichées en haut de l'accueil.
 * - Hors ligne ou sans session : l'appli se comporte comme avant (publication locale seulement).
 * Appelé par 03-script.js (UJFEED.publish) ; expose UJFEED = { publish, refresh }.
 */
(function(){
const SB=()=>{try{const a=window.parent&&window.parent.UJ_AUTH;return a&&a.sb||null}catch(e){return null}},
SES=async()=>{const s=SB();if(!s)return null;try{const r=await s.auth.getSession();return r&&r.data&&r.data.session||null}catch(e){return null}},
say=m=>{try{toast(m)}catch(e){}},
E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
sleep=ms=>new Promise(r=>setTimeout(r,ms));
let busy=false,again=false,timer=0,chan=null,uid='';

/* Photo (data URL) -> JPEG réduit (1600 px max) */
function shrink(d){return new Promise(res=>{const im=new Image();im.onload=()=>{try{const k=Math.min(1,1600/Math.max(im.naturalWidth,im.naturalHeight)),w=Math.max(1,Math.round(im.naturalWidth*k)),h=Math.max(1,Math.round(im.naturalHeight*k)),c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(im,0,0,w,h);c.toBlob(b=>res(b),'image/jpeg',.82)}catch(e){res(null)}};im.onerror=()=>res(null);im.src=d})}

async function publish(o){
 try{
  const s=SB(),se=await SES();
  if(!s||!se){console.warn('[My UJLoG] pas de session : publication non synchronisée');say('Publication enregistrée sur ce téléphone seulement (connecte-toi pour la partager)');return}
  const u=se.user.id,urls=[];
  for(let i=0;i<(o.imgs||[]).length;i++){
   const b=await shrink(o.imgs[i]);if(!b)throw new Error('photo');
   const p=u+'/'+Date.now()+'-'+i+'.jpg',up=await s.storage.from('posts').upload(p,b,{contentType:'image/jpeg',upsert:false});
   if(up.error)throw up.error;
   urls.push(s.storage.from('posts').getPublicUrl(p).data.publicUrl);
  }
  const row={author_id:u,body:String(o.t||'').slice(0,5000),bg:o.bg>=0?o.bg:-1,photos:urls,ratio:o.pr||'3/2',video:o.vi?(o.vi.pl+':'+o.vi.id):null,mood:o.mood||null,place:o.place||null,aud:o.aud|0};
  const r=await s.from('posts').insert(row).select('id').single();
  if(r.error)throw r.error;
  if(o.el)o.el.dataset.pid=r.data.id;
  say('Publication partagée');
  refresh();
 }catch(e){console.error('[My UJLoG] publication non envoyée :',e&&e.message||e);say('Publication non envoyée : elle reste sur ce téléphone')}
}

function ago(t){const d=(Date.now()-Date.parse(t))/1e3;if(!(d>=0)||d<60)return'À l’instant';if(d<3600)return'Il y a '+Math.floor(d/60)+' min';if(d<86400)return'Il y a '+Math.floor(d/3600)+' h';if(d<604800)return'Il y a '+Math.floor(d/86400)+' j';return new Date(t).toLocaleDateString('fr-FR')}

function card(R,p,pr,mine){
 const col=p.bg>=0&&R.PBG&&R.PBG[p.bg],ph=p.photos||[];
 const bgc=col?R.PBG[p.bg]:(ph[0]?'url("'+ph[0]+'") center/cover no-repeat':'var(--g)');
 const nm=pr?([pr.prenom,pr.nom].filter(Boolean).join(' ')||pr.pseudo||'Étudiant(e)'):'Étudiant(e)',
 ttl=col?(p.body||''):((p.body||'').split('\n')[0]||'Publication').slice(0,60);
 const wrap=document.createElement('div');
 wrap.innerHTML=R.ig(bgc,'Publication',E(ttl),'','',ago(p.created_at),col?'1/1':(p.ratio||'3/2'),0);
 const a=wrap.firstElementChild;if(!a)return null;
 a.dataset.pid=p.id;a.dataset.uid=p.author_id;a._tx=p.body||'';
 if(mine)a.classList.add('igme');
 if(col)a.classList.add('igcl');else if(!ph.length&&!p.video)a.classList.add('igtx');
 const av=a.querySelector('.ih .av'),pic=pr&&(pr.avatar_url||pr.photo);
 if(av){if(pic){av.innerHTML='';av.style.background='url("'+String(pic).replace(/"/g,'%22')+'") center/cover'}else if(R.I)av.innerHTML=R.I('usr',22)}
 const nb=a.querySelector('.ih .fl b');if(nb)nb.textContent=nm;
 const vb=a.querySelector('.ih .fl svg.vb');if(vb&&!(pr&&pr.verifie))vb.remove();
 const fw=a.querySelector('.ih .fwb');if(fw&&mine)fw.remove();
 const lv=a.querySelector('.ih .fl .mu');
 if(lv){const x=[];if(p.mood)x.push(p.mood);if(p.place)x.push('📍 '+p.place);x.push('Étudiant(e)');lv.textContent=x.join(' · ')}
 const cp=a.querySelector('.cp p');
 if(cp){if(p.body)cp.innerHTML='<b>'+E(nm)+'</b> '+E(p.body).replace(/\n/g,'<br>');else cp.style.display='none'}
 a.dataset.lk=p.likes_count|0;a.dataset.cmn=p.comments_count|0;a.dataset.liked=p._liked?'1':'0';a.dataset.emo=p._emo||'';
 const lb=a.querySelector('.lkb');if(lb){lb.setAttribute('aria-pressed',p._liked?'true':'false');if(p._liked&&p._emo&&p._emo!='❤️'){const i=document.createElement('i');i.className='rxe';i.textContent=p._emo;lb.insertBefore(i,lb.firstChild);lb.dataset.rx=p._emo}}
 paint(a);
 if(ph.length>1&&R.mkCar){try{R.mkCar(a.querySelector('.md'),ph)}catch(e){}}
 if(p.video&&R.ytF){try{const i=p.video.indexOf(':'),pl=p.video.slice(0,i),id=p.video.slice(i+1),md=a.querySelector('.md');md.classList.add('vd');if(pl=='tt')md.classList.add('tt');md.style.aspectRatio=pl=='tt'?'9/16':'16/9';md.insertAdjacentHTML('afterbegin',R.ytF(id,pl))}catch(e){}}
 return a;
}

async function refresh(){
 if(busy){again=true;return}busy=true;
 try{
  const s=SB(),se=await SES();if(!s||!se)return;uid=se.user.id;
  const R=window.UJFEEDR&&window.UJFEEDR();if(!R||!R.ig)return;
  const r=await s.from('posts').select('id,author_id,body,bg,photos,ratio,video,mood,place,aud,created_at,likes_count,comments_count').is('archived_at',null).order('created_at',{ascending:false}).limit(30);
  if(r.error||!r.data)return;
  const ids=[...new Set(r.data.map(x=>x.author_id))],pm={};
  if(ids.length){const q=await s.from('profiles').select('id,nom,prenom,pseudo,avatar_url,photo,verifie').in('id',ids);if(!q.error&&q.data)q.data.forEach(x=>pm[x.id]=x)}
  const mine=new Map();
  if(r.data.length){const lk=await s.from('post_likes').select('post_id,emoji').eq('user_id',uid).in('post_id',r.data.map(x=>x.id));if(!lk.error&&lk.data)lk.data.forEach(x=>mine.set(x.post_id,x.emoji||'❤️'))}
  const host=document.querySelector('#a1 .sc');if(!host)return;
  const cards=r.data.map(p=>{p._liked=mine.has(p.id);p._emo=mine.get(p.id)||'';return card(R,p,pm[p.author_id],p.author_id===uid)}).filter(Boolean);
  host.querySelectorAll('.ig[data-pid]').forEach(n=>n.remove());
  const pend=new Set([...host.querySelectorAll('.ig.igme')].map(n=>n.dataset.pid).filter(Boolean));
  const anchor=host.querySelector('.stories');
  /* ordre : stories, puis publications du serveur (récentes d'abord), puis le reste */
  let at=anchor;cards.forEach(c=>{if(at)at.insertAdjacentElement('afterend',c);else host.prepend(c);at=c});
  try{await userState(s,uid,host);watchViews(host,uid);await loadStories(s,uid)}catch(e){console.warn('[My UJLoG] état utilisateur :',e&&e.message||e)}
 }catch(e){console.warn('[My UJLoG] fil non chargé :',e&&e.message||e)}
 finally{busy=false;if(again){again=false;setTimeout(refresh,300)}}
}

async function boot(){
 for(let i=0;i<40;i++){const se=await SES();if(se)break;await sleep(1500)}
 const s=SB();if(!s)return;
 await refresh();
 try{chan=s.channel('uj-feed').on('postgres_changes',{event:'*',schema:'public',table:'posts'},()=>{clearTimeout(timer);timer=setTimeout(refresh,800)}).on('postgres_changes',{event:'*',schema:'public',table:'stories'},()=>{clearTimeout(timer);timer=setTimeout(refresh,800)}).subscribe()}catch(e){}
 setInterval(refresh,60000);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});
}

/* ---- J'aime et compteurs ---- */
function paint(a){const n=+a.dataset.lk||0,c=+a.dataset.cmn||0,lc=a.querySelector('.cp .lc'),cc=a.querySelector('.cbn .cc');
 if(lc)lc.textContent=n?(n+' J’aime'):'Soyez le premier à aimer';
 if(cc)cc.textContent=c?String(c):''}
function emojiOf(b){return b.getAttribute('aria-pressed')=='true'?(b.dataset.rx||'❤️'):null}
async function likeSync(a,b,e){
 if(e===undefined)e=emojiOf(b);
 const on=!!e,was=a.dataset.liked=='1',wasE=a.dataset.emo||'❤️';
 if(on===was&&(!on||e===wasE))return;
 const prevN=+a.dataset.lk||0;
 a.dataset.liked=on?'1':'0';a.dataset.emo=on?e:'';
 if(on!==was)a.dataset.lk=Math.max(0,prevN+(on?1:-1));
 paint(a);
 try{
  const s=SB(),se=await SES();if(!s||!se)throw new Error('session');
  const r=on?await s.from('post_likes').upsert({post_id:a.dataset.pid,user_id:se.user.id,emoji:e},{onConflict:'post_id,user_id'}):await s.from('post_likes').delete().eq('post_id',a.dataset.pid).eq('user_id',se.user.id);
  if(r.error)throw r.error;
 }catch(err){console.warn('[My UJLoG] like non enregistré :',err&&err.message||err);
  a.dataset.liked=was?'1':'0';a.dataset.emo=was?wasE:'';a.dataset.lk=prevN;b.setAttribute('aria-pressed',was?'true':'false');paint(a);say('Action non enregistrée')}
}
function like(b,e){const a=b&&b.closest&&b.closest('.ig[data-pid]');if(a)setTimeout(()=>likeSync(a,b,e),0)}
document.addEventListener('dblclick',e=>{const m=e.target.closest&&e.target.closest('.ig[data-pid] .md');if(!m)return;const a=m.closest('.ig'),b=a.querySelector('.lkb');if(b)setTimeout(()=>likeSync(a,b),0)},true);

/* ---- Commentaires ---- */
let sheet=null;
function closeSheet(){if(sheet){sheet.remove();sheet=null}}
async function loadComments(a){
 const s=SB(),box=sheet&&sheet.querySelector('.ujcm-l');if(!s||!box)return;
 const r=await s.from('post_comments').select('id,author_id,body,created_at').eq('post_id',a.dataset.pid).order('created_at',{ascending:true}).limit(200);
 if(r.error||!r.data){box.innerHTML='<p class="mu" style="padding:12px">Commentaires indisponibles.</p>';return}
 const ids=[...new Set(r.data.map(x=>x.author_id))],pm={};
 if(ids.length){const q=await s.from('profiles').select('id,nom,prenom,pseudo').in('id',ids);if(!q.error&&q.data)q.data.forEach(x=>pm[x.id]=x)}
 const se=await SES(),me=se&&se.user.id,owner=a.classList.contains('igme');
 box.innerHTML=r.data.length?r.data.map(c=>{const p=pm[c.author_id]||{},nm=[p.prenom,p.nom].filter(Boolean).join(' ')||p.pseudo||'Étudiant(e)';
  return '<div class="ujcm-c"><b>'+E(nm)+'</b> <span class="mu" style="font-size:12px">'+E(ago(c.created_at))+'</span><p>'+E(c.body).replace(/\n/g,'<br>')+'</p>'+((c.author_id===me||owner)?'<button class="mu" data-cmdel="'+E(c.id)+'" style="font-size:12px;background:none;border:0;padding:0">Supprimer</button>':'')+'</div>'}).join(''):'<p class="mu" style="padding:12px">Aucun commentaire. Lance la discussion !</p>';
 a.dataset.cmn=r.data.length;paint(a);box.scrollTop=box.scrollHeight;
}
function openComments(a){
 closeSheet();
 sheet=document.createElement('div');
 sheet.style.cssText='position:fixed;inset:0;z-index:9999;background:rgba(5,10,25,.5);display:flex;align-items:flex-end';
 sheet.innerHTML='<div style="width:100%;max-height:80dvh;display:flex;flex-direction:column;background:var(--paper,#fff);color:var(--ink,#111);border-radius:20px 20px 0 0;padding:14px 14px calc(14px + env(safe-area-inset-bottom,0px))"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><b>Commentaires</b><button data-cmx aria-label="Fermer" style="font-size:26px;line-height:1;background:none;border:0">×</button></div><div class="ujcm-l" style="flex:1;overflow-y:auto;min-height:120px"><p class="mu" style="padding:12px">Chargement…</p></div><div style="display:flex;gap:8px;margin-top:10px"><input class="ujcm-i" maxlength="500" placeholder="Ajouter un commentaire…" style="flex:1 1 0;width:100%;min-width:0;box-sizing:border-box;padding:10px 14px;border:1px solid var(--ln,#ddd);border-radius:21px;font:inherit;background:var(--paper,#fff);color:inherit"><button data-cmsend style="background:#15803D;color:#fff;border:0;font-weight:700;width:auto;flex:none;padding:0 18px;min-height:42px;border-radius:21px">Envoyer</button></div></div>';
 document.body.appendChild(sheet);
 sheet.addEventListener('click',async e=>{
  if(e.target===sheet||e.target.closest('[data-cmx]')){closeSheet();return}
  const d=e.target.closest('[data-cmdel]');
  if(d){const s=SB();if(!s)return;const r=await s.from('post_comments').delete().eq('id',d.dataset.cmdel);if(r.error)say('Suppression impossible');loadComments(a);return}
  if(e.target.closest('[data-cmsend]')){
   const i=sheet.querySelector('.ujcm-i'),v=i.value.trim();if(!v)return;
   const s=SB(),se=await SES();if(!s||!se){say('Connecte-toi pour commenter');return}
   i.disabled=true;
   const r=await s.from('post_comments').insert({post_id:a.dataset.pid,author_id:se.user.id,body:v.slice(0,500)});
   i.disabled=false;
   if(r.error){console.warn('[My UJLoG] commentaire refusé :',r.error.message);say('Commentaire non envoyé');return}
   i.value='';loadComments(a);
  }
 });
 loadComments(a);
}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-act="cm"]');if(!b)return;const a=b.closest('.ig[data-pid]');if(!a)return;e.stopPropagation();e.preventDefault();openComments(a)},true);


/* ---- Stories ---- */
const AUDM=['all','followers','private'],sseen=new Set();
async function story(obj,o){
 try{
  const s=SB(),se=await SES();
  if(!s||!se){say('Story visible sur ce téléphone seulement (connecte-toi pour la partager)');return}
  const u=se.user.id;let media=null;
  if(!o.msg&&o.photo){
   const m=/url\(["']?(data:[^"')]+)["']?\)/.exec(o.photo);
   if(m){const b=await shrink(m[1]);if(!b)throw new Error('photo');
    const p=u+'/'+Date.now()+'.jpg',up=await s.storage.from('stories').upload(p,b,{contentType:'image/jpeg',upsert:false});
    if(up.error)throw up.error;media=s.storage.from('stories').getPublicUrl(p).data.publicUrl}
  }
  const row={author_id:u,kind:o.msg?'message':'photo',media_url:media,bg:o.msg?o.bg:null,caption:String(o.txt||'').slice(0,300),filter:o.msg?null:(o.fl||null),font:o.msg?o.f:null,audience:AUDM[o.au]||'all',expires_at:new Date(Date.now()+864e5).toISOString()};
  const r=await s.from('stories').insert(row).select('id').single();
  if(r.error)throw r.error;
  if(obj){obj.sid=r.data.id;obj.mine=true}
 }catch(e){console.error('[My UJLoG] story non envoyée :',e&&e.message||e);say('Story non envoyée : elle reste sur ce téléphone')}
}
function toLocal(x,mine,liked){
 const R=window.UJFEEDR&&window.UJFEEDR()||{},ea=R.eA||E,msg=x.kind!=='photo';
 return msg?{c:x.bg||'var(--g)',cap:ea(x.caption||'').replace(/\n/g,'<br>'),t:ago(x.created_at),live:true,f:x.font||undefined,sid:x.id,mine:mine,lk:liked}
  :{c:'url("'+String(x.media_url||'').replace(/"/g,'%22')+'") center/cover no-repeat',cap:ea(x.caption||''),t:ago(x.created_at),live:true,fl:x.filter||undefined,sid:x.id,mine:mine,lk:liked};
}
async function loadStories(s,me){
 const R=window.UJFEEDR&&window.UJFEEDR();if(!R||!R.MB||!R.rowH)return;
 const r=await s.from('stories').select('id,author_id,kind,media_url,bg,caption,filter,font,created_at').eq('archived',false).gt('expires_at',new Date().toISOString()).order('created_at',{ascending:false}).limit(120);
 if(r.error||!r.data)return;
 const L=await s.from('story_likes').select('story_id').eq('user_id',me),liked=new Set((L.data||[]).map(x=>x.story_id));
 const ids=[...new Set(r.data.map(x=>x.author_id).filter(x=>x!==me))],pm={};
 if(ids.length){const q=await s.from('profiles').select('id,nom,prenom,pseudo').in('id',ids);if(!q.error&&q.data)q.data.forEach(x=>pm[x.id]=x)}
 const MB=R.MB,mine=r.data.filter(x=>x.author_id===me).map(x=>toLocal(x,true,liked.has(x.id)));
 const keep=(MB[0].pub||[]).filter(x=>!x.sid&&x.live);
 MB[0].pub=keep.concat(mine);
 for(let i=MB.length-1;i>0;i--)if(MB[i].uid)MB.splice(i,1);
 const by={};r.data.forEach(x=>{if(x.author_id!==me)(by[x.author_id]=by[x.author_id]||[]).push(x)});
 Object.keys(by).forEach(id=>{const p=pm[id]||{},n=[p.prenom,p.nom].filter(Boolean).join(' ')||p.pseudo||'Étudiant(e)';
  MB.push({n:n,g:'',uid:id,h:'etudiant.'+MB.length,pub:by[id].reverse().map(x=>toLocal(x,false,liked.has(x.id)))})});
 const row=document.querySelector('#a1 .stories');if(row){row.innerHTML=R.rowH();try{R.renderMy&&R.renderMy()}catch(e){}}
}
function sview(p){
 if(!p||!p.sid||p.mine||sseen.has(p.sid))return;sseen.add(p.sid);
 (async()=>{const s=SB(),se=await SES();if(!s||!se)return;
  const r=await s.from('story_views').upsert({story_id:p.sid,viewer_id:se.user.id},{onConflict:'story_id,viewer_id',ignoreDuplicates:true});
  if(r.error)console.warn('[My UJLoG] vue de story :',r.error.message)})();
}
async function slike(p,on){
 if(!p||!p.sid)return;
 try{const s=SB(),se=await SES();if(!s||!se)return;
  const r=on?await s.from('story_likes').upsert({story_id:p.sid,user_id:se.user.id,emoji:'❤️'},{onConflict:'story_id,user_id'}):await s.from('story_likes').delete().eq('story_id',p.sid).eq('user_id',se.user.id);
  if(r.error)throw r.error}catch(e){console.warn('[My UJLoG] like de story :',e&&e.message||e)}
}

/* ---- Enregistrer, republier, suivre, vues des publications ---- */
document.addEventListener('click',e=>{
 const sv=e.target.closest&&e.target.closest('.ig[data-pid] .svb');
 if(sv){const a=sv.closest('.ig');setTimeout(async()=>{const on=sv.getAttribute('aria-pressed')=='true',s=SB(),se=await SES();if(!s||!se)return;
  const r=on?await s.from('saved_posts').upsert({user_id:se.user.id,post_id:a.dataset.pid},{onConflict:'user_id,post_id',ignoreDuplicates:true}):await s.from('saved_posts').delete().eq('user_id',se.user.id).eq('post_id',a.dataset.pid);
  if(r.error)console.warn('[My UJLoG] enregistrement :',r.error.message)},0);return}
 const fw=e.target.closest&&e.target.closest('.ig[data-pid] .fwb');
 if(fw){const a=fw.closest('.ig'),au=a.dataset.uid;if(!au)return;(async()=>{const s=SB(),se=await SES();if(!s||!se||au===se.user.id)return;
  const r=await s.from('follows').upsert({follower_id:se.user.id,followed_id:au},{onConflict:'follower_id,followed_id',ignoreDuplicates:true});
  if(r.error)console.warn('[My UJLoG] abonnement :',r.error.message)})()}
},true);
async function repost(a,on){
 if(!a||!a.dataset||!a.dataset.pid)return;
 try{const s=SB(),se=await SES();if(!s||!se)return;
  const r=on?await s.from('reposts').insert({user_id:se.user.id,post_id:a.dataset.pid,target:'profile'}):await s.from('reposts').delete().eq('user_id',se.user.id).eq('post_id',a.dataset.pid).eq('target','profile');
  if(r.error)throw r.error}catch(e){console.warn('[My UJLoG] republication :',e&&e.message||e)}
}
const pseen=new Set();let io=null;
function watchViews(host,me){
 if(!('IntersectionObserver' in window))return;
 if(io)io.disconnect();
 io=new IntersectionObserver(es=>es.forEach(en=>{
  const a=en.target;if(!en.isIntersecting)return;
  const id=a.dataset.pid;if(!id||pseen.has(id)||a.dataset.uid===me)return;
  setTimeout(async()=>{if(pseen.has(id)||!a.isConnected)return;const r2=a.getBoundingClientRect();if(r2.bottom<0||r2.top>innerHeight)return;
   pseen.add(id);const s=SB();if(!s)return;
   const r=await s.from('post_views').upsert({post_id:id,viewer_id:me},{onConflict:'post_id,viewer_id',ignoreDuplicates:true});
   if(r.error)console.warn('[My UJLoG] vue :',r.error.message)},1200);
 }),{threshold:.6});
 host.querySelectorAll('.ig[data-pid]').forEach(n=>io.observe(n));
}
async function userState(s,me,host){
 const fo=await s.from('follows').select('followed_id').eq('follower_id',me),fs=new Set((fo.data||[]).map(x=>x.followed_id));
 const ids=[...host.querySelectorAll('.ig[data-pid]')].map(n=>n.dataset.pid);
 let sv=new Set();
 if(ids.length){const q=await s.from('saved_posts').select('post_id').eq('user_id',me).in('post_id',ids);sv=new Set((q.data||[]).map(x=>x.post_id))}
 host.querySelectorAll('.ig[data-pid]').forEach(n=>{
  const b=n.querySelector('.svb');if(b&&sv.has(n.dataset.pid))b.setAttribute('aria-pressed','true');
  const f=n.querySelector('.fwb');if(f&&fs.has(n.dataset.uid))f.hidden=true;
 });
}
window.UJFEED={publish,refresh,like,story,sview,slike,repost};
boot();
})();
