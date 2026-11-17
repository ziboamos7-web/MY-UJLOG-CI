/* ===== UJ30 · Page des 30 jours (trophées + soutien 500 FCFA via GeniusPay) =====
 * Chargé par parts/app.html après 20-crjs.js.
 * - Identité (prénom, nom, profil vérifié) : window.UJP, injecté par la page d'inscription.
 * - Paiement GeniusPay : opérateurs et logos repris de window.UJ_GP (exposé par 15-v102MarketJs.js) ;
 *   création et vérification via les Edge Functions uj30-support-create / uj30-support-status
 *   (session de l'étudiant envoyée, montant fixé côté serveur, confirmation par webhook signé).
 * - Serveur (SQL ujlog_30_jours.sql) : date d'inscription (profiles.created_at), parcours terminé
 *   (profiles.uj30_done_at) et soutien confirmé (uj_support, lecture seule) relus au démarrage.
 * - Données locales par compte (clé + _UJ-ID) : uj_since, uj_act, uj_trophies, uj_support, uj_monlog, uj_30_done.
 * - Console : UJ30.open() (parcours complet) · UJ30.support() (écran « Soutenir 500 FCFA »).
 */
(function(){
const LS=localStorage,UID=String((window.UJP&&window.UJP.id)||'').replace(/[^A-Za-z0-9]/g,''),K=k=>UID?k+'_'+UID:k,g=(k,d)=>{try{const v=JSON.parse(LS.getItem(K(k)));return v==null?d:v}catch(e){return d}},sv=(k,v)=>{try{LS.setItem(K(k),JSON.stringify(v))}catch(e){}},DAY=864e5,WA='2250506172317';
let since=g('uj_since',0);if(!since){since=Date.now();sv('uj_since',since)}
let A=g('uj_act',{pts:0});const PT={l:1,c:3,r:3,fv:1,s:5,p:10,pg:2};
function add(t){A[t]=(A[t]||0)+1;A.pts=(A.pts||0)+(PT[t]||0);sv('uj_act',A)}
window.UJACT={add:add,get:()=>A};
/* ===== Serveur Supabase : session de l'étudiant (parent = page d'inscription) ===== */
const DB=()=>{try{return window.UJ_DB||(window.parent&&window.parent.UJ_DB)||null}catch(e){return null}},
SB=()=>{try{const a=window.parent&&window.parent.UJ_AUTH;return a&&a.sb||null}catch(e){return null}},
SES=async()=>{const s=SB();if(!s)return null;try{const r=await s.auth.getSession();return r&&r.data&&r.data.session||null}catch(e){return null}},
ERR=c=>Object.assign(new Error(''),{code:c}),
FN=async(fn,body)=>{const d=DB(),se=await SES();if(!d||!d.url||!d.key)throw ERR('unavailable');let r,j={};
 try{r=await fetch(String(d.url).replace(/\/+$/,'')+'/functions/v1/'+fn,{method:'POST',headers:{'Content-Type':'application/json',apikey:d.key,Authorization:'Bearer '+(se?se.access_token:d.key)},body:JSON.stringify(body)})}catch(e){throw ERR('network')}
 try{j=await r.json()}catch(e){}
 if(r.status===404||r.status===503)throw ERR('unavailable');if(r.status===401)throw ERR('auth');if(!r.ok)throw ERR(j.code||'failed');return j};
let synced=false;
/* Relit au démarrage : date d'inscription, parcours terminé, soutien confirmé. Sans le SQL ou sans session : on garde les valeurs de l'appareil. */
async function sync(){try{const s=SB(),se=await SES();if(!s||!se)return;
 const pr=await s.from('profiles').select('created_at,uj30_done_at').eq('id',se.user.id).maybeSingle();
 if(!pr.error&&pr.data){const t0=Date.parse(pr.data.created_at);if(t0>0){since=t0;sv('uj_since',t0)}if(pr.data.uj30_done_at)sv('uj_30_done',1)}
 const su=await s.from('uj_support').select('ref,confirmed_at').eq('status','success').order('confirmed_at',{ascending:false}).limit(1);
 if(!su.error&&su.data&&su.data.length){sv('uj_support',{t:Date.parse(su.data[0].confirmed_at)||Date.now(),a:500,ref:su.data[0].ref});sv('uj_monlog',1)}
 renderBlock()}catch(e){}finally{synced=true;check()}}
async function srvDone(){try{const s=SB(),se=await SES();if(!s||!se)return;await s.from('profiles').update({uj30_done_at:new Date().toISOString()}).eq('id',se.user.id).is('uj30_done_at',null)}catch(e){}}
/* Détection des gestes : à remplacer par UJACT.add('l'|'c'|'r'|'fv'|'s'|'p'|'pg') si l’appli les expose directement */
let lastT=0,lastE=null;
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('button,[role=button]');if(!b||b.closest('#uj30'))return;if(b===lastE&&Date.now()-lastT<500)return;
const t=((b.getAttribute('aria-label')||'')+' '+(b.className&&b.className.baseVal===undefined?b.className:'')+' '+(b.textContent||'').slice(0,30)).toLowerCase(),off=b.getAttribute('aria-pressed')!=='true';let k='';
if(b.id==='ppub')k='p';else if(/lkb|j’aime|j'aime|like/.test(t)&&off)k='l';else if(/republi|repost/.test(t))k='r';else if(/enregistr|favori|bkm|bookmark/.test(t)&&off)k='fv';else if(/comment/.test(t)&&/envoy|publi|send/.test(t))k='c';else if(/story/.test(t)&&/publi|partag|ajout/.test(t))k='s';else if(/^suivre$|follow/.test(t.trim()))k='pg';
if(k){lastE=b;lastT=Date.now();add(k)}},true);
const TR=[['Éclaireur','#CD7F32'],['Bâtisseur','#94A3B8'],['Phare','#F59E0B'],['Pilier','#7C3AED'],['Légende','#E11D48']],
cup=c=>`<svg viewBox="0 0 64 64" width="96" height="96" aria-hidden="true"><path d="M18 8h28v14a14 14 0 01-28 0z" fill="${c}"/><path d="M18 12H8v4a10 10 0 0010 10M46 12h10v4a10 10 0 01-10 10" fill="none" stroke="${c}" stroke-width="4"/><rect x="28" y="34" width="8" height="10" fill="${c}"/><rect x="20" y="46" width="24" height="8" rx="3" fill="${c}"/><path d="M26 14v8" stroke="#fff" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"/></svg>`,
TIERS=[[10000,'Que ferais-je My UJLoG sans toi dans le mood ?'],[5000,'Impossible de t’ignorer ici.'],[2000,'Tu es dans la place, et ça se voit.'],[500,'La communauté te suit de très près.'],[100,'C’est toi le boss du moment !'],[0,'Ton aventure ne fait que commencer.']],
fm=n=>String(n).replace(/\B(?=(\d{3})+$)/g,'\u202f'),dt=t=>new Date(t).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}),
esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
acct=()=>window.UJP||{},nm=()=>((acct().pre||'')+' '+(acct().nom||'')).trim()||'un étudiant',
verified=()=>{try{if(window.UJCREATOR&&UJCREATOR.info().b>0)return true}catch(e){}return !!acct().ver},
CT=()=>{let st={f:0,p:0};try{st=UJCREATOR.stats()}catch(e){}return[['Abonnés',st.f||0],['Publications',Math.max(A.p||0,st.p||0)],['Republications',A.r||0],['J’aime',A.l||0],['Favoris',A.fv||0],['Commentaires',A.c||0],['Stories',A.s||0],['Pages suivies',A.pg||0]]},
model=p=>p>=10000?4:p>=5000?3:p>=2000?2:p>=500?1:0;
const rings=function(cx,cy,n,st,r0){let s='';for(let i=0;i<n;i++){let r=r0+i*st,d='';for(let a=0;a<=64;a++){let t=a/64*6.2832,k=r*(1+.07*Math.sin(3*t+i*.7)+.04*Math.sin(5*t+i)),x=cx+k*Math.cos(t),y=cy+k*.8*Math.sin(t);d+=(a?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}s+=`<path d="${d}Z"/>`}return s};
const css=document.createElement('style');css.id='uj30-css';css.textContent=`
#uj30{position:fixed;inset:0;z-index:2147483000;overflow:hidden;color:#3F352B;font-family:'Trebuchet MS',system-ui,sans-serif;background:radial-gradient(120% 90% at 50% 0%,#5FB89B 0%,#12877A 45%,#0C5F58 100%);-webkit-tap-highlight-color:transparent}
#uj30 [hidden]{display:none!important}
#uj30 .rg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;animation:ujb 8s ease-in-out infinite}
#uj30 .rg g{fill:none;stroke:#fff;stroke-width:1.4;opacity:.2;transform-box:fill-box;transform-origin:center}
#uj30 .rg .a{animation:ujr 80s linear infinite}#uj30 .rg .b{animation:ujr 100s linear infinite reverse}
@keyframes ujr{to{transform:rotate(360deg)}}@keyframes ujb{50%{opacity:.55}}
#uj30 .rp{position:absolute;left:50%;top:45%;width:40px;height:40px;margin:-20px;border:2px solid #fff;border-radius:50%;opacity:0;pointer-events:none;animation:ujp 1.2s ease-out}
@keyframes ujp{0%{opacity:.55;transform:scale(1)}100%{opacity:0;transform:scale(16)}}
#uj30 .p{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:calc(24px + env(safe-area-inset-top,0px)) 22px calc(24px + env(safe-area-inset-bottom,0px));transform:translateX(100%);transition:transform .5s cubic-bezier(.2,.9,.25,1);overflow:auto}
#uj30 .p.in{transform:none}#uj30 .p.out{transform:translateX(-100%)}
#uj30 .p.in .st{animation:ujs .65s cubic-bezier(.2,1.1,.3,1) both;animation-delay:calc(var(--i,0)*85ms + 160ms)}
@keyframes ujs{from{opacity:0;transform:translateY(24px) scale(.96)}}
#uj30 .cd{width:100%;max-width:420px;background:#FBF1DF;border-radius:30px;padding:28px 22px;text-align:center;box-shadow:0 10px 0 #D9C5A2,0 34px 50px -24px #0007;display:grid;gap:14px;position:relative}
#uj30 h2{margin:0;font:800 24px/1.18 'Trebuchet MS',system-ui;color:#3F352B}#uj30 p{margin:0;font-size:16px;line-height:1.45;font-weight:700;color:#4A4036}
#uj30 small{font-size:13px;opacity:.8;font-weight:700}#uj30 .cap{letter-spacing:.14em;font-size:11px;font-weight:800;color:#12877A;opacity:1}
#uj30 .bt{position:relative;overflow:hidden;width:100%;max-width:420px;height:56px;border:0;border-radius:18px;background:#F2B33D;color:#3B2A06;font:800 18px 'Trebuchet MS',system-ui;box-shadow:0 6px 0 #B9801A;cursor:pointer;transition:transform .12s,box-shadow .12s}
#uj30 .bt:active{transform:translateY(5px);box-shadow:0 1px 0 #B9801A}#uj30 .bt:disabled{opacity:.55;transform:none;box-shadow:0 6px 0 #B9801A;cursor:default}
#uj30 .bt::after{content:'';position:absolute;top:0;bottom:0;width:35%;left:-50%;background:linear-gradient(100deg,transparent,#fff8,transparent);transform:skewX(-20deg);animation:ujh 3.2s 1.4s infinite}
@keyframes ujh{to{left:140%}}
#uj30 .lk{background:none;border:0;color:#fff;font:800 15px 'Trebuchet MS',system-ui;text-decoration:underline;cursor:pointer}
#uj30 .x{position:absolute;top:calc(14px + env(safe-area-inset-top,0px));left:14px;width:40px;height:40px;border-radius:50%;border:0;background:#fff3;color:#fff;font-size:20px;cursor:pointer;z-index:3}
#uj30 .md{position:relative;width:var(--sz);height:var(--sz);margin:0 auto}#uj30 .md svg{width:100%;height:100%}
#uj30 .md .arc{stroke-dashoffset:100;animation:uja 1.5s .6s cubic-bezier(.3,.7,.2,1) forwards}@keyframes uja{to{stroke-dashoffset:var(--to)}}
#uj30 .md span{position:absolute;inset:0;display:grid;place-items:center;font:800 var(--fs) 'Trebuchet MS',system-ui;color:#0C5F58}
#uj30 .gr{display:grid;grid-template-columns:1fr 1fr;gap:8px}
#uj30 .gr div{background:#fff9;border-radius:14px;padding:10px 8px 9px}#uj30 .gr b{display:block;font:800 22px 'Trebuchet MS',system-ui}#uj30 .gr .ok b{color:#0C8A5F}
#uj30 .p.in .gr div{animation:ujs .5s calc(.5s + var(--i)*70ms) both}
#uj30 .gr i{display:block;height:5px;border-radius:3px;background:#12877A22;margin-top:7px;position:relative;overflow:hidden}
#uj30 .gr i::after{content:'';position:absolute;inset:0;border-radius:3px;background:#F2B33D;transform-origin:left;transform:scaleX(0);animation:ujw .9s calc(.8s + var(--i,0)*70ms) cubic-bezier(.3,.7,.2,1) forwards}
#uj30 .gr .ok i::after{background:#0C8A5F}@keyframes ujw{to{transform:scaleX(var(--w))}}
#uj30 .cupw{position:relative;display:inline-block;overflow:hidden;border-radius:24px;margin:0 auto}#uj30 .cupw svg{width:124px;height:124px;display:block}
#uj30 .cup{animation:ujd 1.1s .35s cubic-bezier(.3,1.4,.4,1) both}@keyframes ujd{0%{transform:translateY(-140px) scale(.6) rotate(-14deg);opacity:0}55%{opacity:1}100%{transform:none}}
#uj30 .cupw::after{content:'';position:absolute;top:0;bottom:0;width:40%;left:-60%;background:linear-gradient(100deg,transparent,#fffa,transparent);transform:skewX(-20deg);animation:ujh 2.8s 1.6s infinite}
#uj30 .cf{position:absolute;left:50%;top:36%;width:9px;height:15px;border-radius:2px;pointer-events:none;animation:ujc 1.6s var(--d) cubic-bezier(.2,.7,.3,1) both}
@keyframes ujc{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(var(--x),var(--y)) rotate(var(--r));opacity:0}}
#uj30 .hrw svg{width:58px;animation:ujq2 1.3s ease-in-out infinite}@keyframes ujq2{0%,100%{transform:scale(1)}20%{transform:scale(1.2)}40%{transform:scale(.97)}60%{transform:scale(1.1)}}
#uj30 .ops{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:8px}
#uj30 .op{display:grid;justify-items:center;gap:6px;padding:12px 4px;border-radius:16px;border:2px solid #D9C5A2;background:#fff;color:#3F352B;font:800 12px 'Trebuchet MS',system-ui;cursor:pointer;transition:transform .15s,border-color .15s,box-shadow .15s}
#uj30 .op img,#uj30 .op i{width:38px;height:38px;border-radius:12px;object-fit:cover;background:var(--c)}
#uj30 .op[aria-pressed=true]{border-color:var(--c);box-shadow:0 0 0 4px color-mix(in srgb,var(--c) 25%,transparent);transform:translateY(-2px)}
#uj30 .ph{display:flex;align-items:center;height:54px;border-radius:16px;border:2px solid #D9C5A2;background:#fff;overflow:hidden}#uj30 .ph:focus-within{border-color:#12877A}
#uj30 .ph span{padding:0 12px;font-weight:800;background:#F1E4CB;height:100%;display:grid;place-items:center}
#uj30 .ph input{flex:1;min-width:0;border:0;outline:0;height:100%;padding:0 12px;font:700 18px 'Trebuchet MS',system-ui;color:#3F352B;background:transparent}
#uj30 .pe{color:#B42318;font-size:14px}#uj30 .pc{font-size:13px}
#uj30 .spn{position:relative;width:104px;height:104px;margin:0 auto}#uj30 .spn i{position:absolute;inset:0;border-radius:50%;border:3px solid #12877A;opacity:0;animation:ujq 2.4s infinite}
#uj30 .spn i:nth-child(2){animation-delay:.8s}#uj30 .spn i:nth-child(3){animation-delay:1.6s}@keyframes ujq{0%{transform:scale(.25);opacity:.9}100%{transform:scale(1);opacity:0}}
#uj30 .spn::after{content:'';position:absolute;left:50%;top:50%;width:22px;height:22px;margin:-11px;border-radius:50%;background:#12877A;animation:ujq2 1.3s infinite}
#uj30 .ck{width:100px;margin:0 auto}#uj30 .ck circle,#uj30 .ck path{stroke-dashoffset:100;animation:ujk .7s .5s ease forwards}#uj30 .ck path{animation-duration:.5s;animation-delay:1s}@keyframes ujk{to{stroke-dashoffset:0}}
#uj30 .ko{width:64px;height:64px;border-radius:50%;margin:0 auto;display:grid;place-items:center;background:#FBE3E0;color:#B42318;font:800 34px 'Trebuchet MS',system-ui}
@media(prefers-reduced-motion:reduce){#uj30 *,#uj30 *::after{animation-duration:.01ms!important;animation-delay:0s!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
.ujtr{display:grid;gap:10px}.ujtr .it{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--ln,#E0E6F2);border-radius:18px;padding:10px 14px}.ujtr .it b{display:block}.ujtr .it small{color:var(--mu,#5A6580)}.ujtr button.it{width:100%;text-align:left;font:inherit;color:inherit}`;
document.head.appendChild(css);
let ov=null,ctx={},kill=()=>{};
const reduce=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
function page(h,bind){const old=ov.querySelector('.p.in'),p=document.createElement('div');p.className='p';p.innerHTML=h;
p.querySelectorAll('.cd,.cd>*,.bt,.lk').forEach((e,i)=>{e.classList.add('st');e.style.setProperty('--i',i)});ov.appendChild(p);
if(!reduce()){const r=document.createElement('i');r.className='rp';ov.appendChild(r);setTimeout(()=>r.remove(),1300)}
if(bind)bind(p);requestAnimationFrame(()=>requestAnimationFrame(()=>{p.classList.add('in');if(old){old.classList.remove('in');old.classList.add('out');setTimeout(()=>old.remove(),550)}}))}
const btn=(t,id,c)=>`<button class="bt ${c||''}" id="${id}">${t}</button>`,go=(p,id,f)=>{const b=p.querySelector('#'+id);if(b)b.onclick=f};
const ring=(pc,sz,fs,col,txt,id)=>`<div class="md" style="--sz:${sz}px;--fs:${fs}px"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" fill="none" stroke="#12877A24" stroke-width="10"/><circle class="arc" cx="60" cy="60" r="52" fill="none" stroke="${col}" stroke-width="10" stroke-linecap="round" pathLength="100" stroke-dasharray="100" style="--to:${(100-pc).toFixed(1)}" transform="rotate(-90 60 60)"/></svg><span${id?` id="${id}"`:''}>${txt}</span></div>`;
function burst(p){if(reduce())return;const C=['#F2B33D','#fff','#12877A','#E11D48','#7C3AED'];for(let i=0;i<30;i++){const e=document.createElement('i'),a=Math.random()*6.283,d=110+Math.random()*190;e.className='cf';e.style.cssText=`--x:${Math.cos(a)*d|0}px;--y:${(Math.sin(a)*d-70)|0}px;--r:${(Math.random()*720-360)|0}deg;--d:${(Math.random()*.25).toFixed(2)}s;background:${C[i%5]}`;p.appendChild(e)}}
const wa=()=>'https://wa.me/'+WA+'?text='+encodeURIComponent('Bonjour l’équipe My UJLoG, c’est une belle initiative de mettre en place cette application pour faciliter le quotidien des étudiants. Je souhaite apporter mon soutien à l’évolution de l’application en contribuant avec 500 FCFA. — '+nm());
const S1=()=>page(`<div class="cd">${ring(100,132,46,'#F2B33D','30')}<small class="cap">JOURS ENSEMBLE</small><h2>Merci d’avoir rejoint la communauté My UJLoG</h2><p>Ça fait 30 jours que tu fais vivre l’application, du déploiement jusqu’aux innovations qui continuent. Merci d’avoir contribué à son amélioration.</p></div>${btn('Continuer','n')}`,p=>go(p,'n',S2));
const S2=()=>{const pts=A.pts||0,msg=TIERS.find(t=>pts>=t[0])[1],pc=Math.min(100,Math.sqrt(pts/1e4)*100);page(`<div class="cd"><small class="cap">TON SCORE D’UTILISATION</small>${ring(pc,172,34,'#12877A','0','sc')}<h2>${msg}</h2><small>Chaque j’aime, commentaire, republication, favori, story et publication te rapporte des points, en arrière-plan.</small></div>${btn('Continuer','n')}`,p=>{go(p,'n',S3);const e=p.querySelector('#sc');let t0=null;const f=ts=>{t0=t0||ts;const k=Math.min(1,(ts-t0)/1400);e.textContent=fm(Math.round(pts*(1-Math.pow(1-k,3))));if(k<1)requestAnimationFrame(f)};setTimeout(()=>requestAnimationFrame(f),550)})};
const S3=()=>{const c=CT(),n=c.filter(x=>x[1]>=10).length,need=Math.ceil(c.length*.8);ctx.ok=n>=need;page(`<div class="cd"><h2>Ton activité en chiffres</h2><div class="gr">${c.map((x,i)=>`<div class="${x[1]>=10?'ok':''}" style="--i:${i}"><b>${fm(x[1])}${x[1]>=10?' ✓':''}</b><small>${x[0]}</small><i style="--w:${Math.min(1,x[1]/10)};--i:${i}"></i></div>`).join('')}</div><small>${n} compteur${n>1?'s':''} sur ${c.length} dépasse${n>1?'nt':''} 10. Il en faut ${need} pour décrocher un trophée.</small></div>${btn('Continuer','n')}`,p=>go(p,'n',S4))};
const S4=()=>{sv('uj_30_done',1);srvDone();const m=model(A.pts||0),q=ctx.ok;if(q){const L=g('uj_trophies',[]);L.unshift({m:m,t:Date.now(),p:A.pts||0});sv('uj_trophies',L.slice(0,20));renderBlock()}
page(q?`<div class="cd"><small class="cap">NOUVEAU TROPHÉE</small><div class="cupw"><div class="cup">${cup(TR[m][1])}</div></div><h2>Trophée ${TR[m][0]}</h2><p>Il est rangé dans « Mes trophées », dans Mon espace.</p></div>${btn('Continuer','n')}`:`<div class="cd"><h2>Pas encore de trophée</h2><p>Continue d’aimer, commenter, republier et publier : il te faut au moins 10 dans la plupart des compteurs. Ton score est conservé.</p></div>${btn('Continuer','n')}`,p=>{go(p,'n',S5);if(q)setTimeout(()=>burst(p),700)})};
const S5=()=>page(`<div class="cd"><div class="hrw"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.2C.4 8.4 2.3 4.5 6 4.2c2-.2 3.9.7 6 2.8 2.1-2.1 4-3 6-2.8 3.7.3 5.6 4.2 4 7.6C19.5 16.4 12 21 12 21z" fill="#E11D48"/></svg></div><h2>Merci pour votre engagement</h2><p>Vous faites partie de la communauté My UJLoG depuis le ${dt(since)}.</p><p>Vous pouvez soutenir votre appli du moment avec 500 FCFA. En créditant ce montant, vous soutenez directement My UJLoG et contribuez à son évolution.</p></div>${btn('Soutenir avec 500 FCFA','n')}<a class="lk" href="${wa()}" target="_blank" rel="noopener">Contacter l’équipe My UJLoG sur WhatsApp</a><button class="lk" id="l">Plus tard</button>`,p=>{go(p,'n',S6);go(p,'l',close)});
/* Paiement GeniusPay : create → check via les Edge Functions uj30-support-* (opérateurs repris de l’abonnement) */
const GP=()=>{const P=window.UJ_GP||window.UJPAY||{};return{operators:P.operators||[],create:o=>FN('uj30-support-create',o),check:ref=>FN('uj30-support-status',{ref:ref})}},OPS=()=>{const G=GP();return G&&G.operators&&G.operators.length?G.operators:[{id:'orange',name:'Orange Money',short:'Orange',c:'#FF7900'},{id:'wave',name:'Wave',c:'#1DC8FF'}]},tel=x=>String(x||'').replace(/\D/g,'').slice(0,10).replace(/(\d{2})(?=\d)/g,'$1 ');
const S6=()=>{const O=OPS();let op=O[0];page(`<div class="cd"><h2>Soutenir My UJLoG</h2><p>500 FCFA · paiement sécurisé GeniusPay</p><div class="ops">${O.map((o,i)=>`<button type="button" class="op" data-o="${esc(o.id)}" aria-pressed="${i==0}" style="--c:${esc(o.c||'#12877A')}">${o.img?`<img src="${esc(o.img)}" alt="">`:'<i></i>'}<span>${esc(o.short||o.name)}</span></button>`).join('')}</div><label class="ph" id="pw"><span>+225</span><input id="ph" type="tel" inputmode="numeric" autocomplete="tel-national" placeholder="07 00 00 00 00" aria-label="Numéro Mobile Money"></label><p class="pc" id="cn" hidden>Tu seras redirigé vers la page sécurisée pour saisir ta carte. Les informations de carte ne passent jamais par l’application.</p><p class="pe" id="er" role="alert"></p></div>${btn('Payer 500 F','n')}<button class="lk" id="l">Retour</button>`,p=>{
const b=p.querySelector('#n'),ph=p.querySelector('#ph'),er=p.querySelector('#er'),pw=p.querySelector('#pw'),cn=p.querySelector('#cn'),upd=()=>{pw.hidden=!!op.card;cn.hidden=!op.card;b.disabled=!op.card&&ph.value.replace(/\D/g,'').length!=10};
p.querySelectorAll('.op').forEach(x=>x.onclick=()=>{op=O.find(o=>String(o.id)===x.dataset.o)||op;p.querySelectorAll('.op').forEach(y=>y.setAttribute('aria-pressed',y===x));er.textContent='';upd()});
ph.oninput=()=>{ph.value=tel(ph.value);upd()};upd();go(p,'l',S5);
b.onclick=()=>{er.textContent='';const G=GP();if(!(G&&G.create&&G.check)){er.textContent='Paiement indisponible : service non configuré.';return}S6w(G,op,op.card?'':'+225'+ph.value.replace(/\D/g,''))}})};
const S6w=(G,o,phone)=>{let live=1,t0=Date.now(),tk,pl;const stop=()=>{live=0;clearInterval(tk);clearInterval(pl)};kill=stop;
const order={orderId:'UJ30-'+Date.now().toString(36),amount:500,currency:'XOF',plan:'SOUTIEN',operator:o.id,phone:phone,description:'Soutien My UJLoG'};
page(`<div class="cd"><div class="spn"><i></i><i></i><i></i></div><h2>${o.card?'Termine sur la page sécurisée':'Confirme sur ton téléphone'}</h2><p>${o.card?'Une page GeniusPay s’est ouverte. Reviens ici une fois le paiement fait.':'Valide la demande de 500 F reçue via '+esc(o.name)+'.'}</p><small id="cl">0:00</small></div><button class="lk" id="l">Annuler</button>`,p=>{
const cl=p.querySelector('#cl');tk=setInterval(()=>{const s=Math.floor((Date.now()-t0)/1e3);cl.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0')},1e3);go(p,'l',()=>{stop();S6()});
const fail=m=>{if(!live)return;stop();S6k(m)};
G.create(order).then(r=>{if(!live)return;if(r&&/^https:\/\//.test(r.url||''))try{window.open(r.url,'_blank','noopener')}catch(e){}
pl=setInterval(async()=>{if(!live)return;if(Date.now()-t0>15e4)return fail('Délai dépassé. Si tu as été débité, contacte l’équipe.');
try{const c=await G.check(r.ref);if(!live)return;if(c.status=='failed')return fail('Paiement refusé. Réessaie.');if(c.status=='success'){stop();sv('uj_support',{t:Date.now(),a:500,ref:r.ref});sv('uj_monlog',1);renderBlock();S7()}}catch(e){}},3e3)
}).catch(e=>{const c=e&&e.code;if(c=='already_supported'){stop();sync().then(S7);return}fail(c=='unavailable'?'Paiement indisponible : service non configuré.':c=='auth'?'Reconnecte-toi pour effectuer ce paiement.':c=='network'?'Connexion perdue. Vérifie ton réseau et réessaie.':'Paiement non abouti. Réessaie.')})})};
const S6k=m=>page(`<div class="cd"><div class="ko">!</div><h2>Paiement non abouti</h2><p>${esc(m)}</p></div>${btn('Réessayer','n')}<a class="lk" href="${wa()}" target="_blank" rel="noopener">Contacter l’équipe sur WhatsApp</a><button class="lk" id="l">Plus tard</button>`,p=>{go(p,'n',S6);go(p,'l',close)});
const S7=()=>page(`<div class="cd"><svg class="ck" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="23" fill="none" stroke="#0C8A5F" stroke-width="4" pathLength="100" stroke-dasharray="100"/><path d="M15 27l8 8 14-16" fill="none" stroke="#0C8A5F" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" pathLength="100" stroke-dasharray="100"/></svg><h2>Bienvenue, ${esc(acct().pre||'')} !</h2><p>Merci pour votre contribution à l’évolution de My UJLoG. Nous espérons que l’application facilite votre quotidien et vous donne un avantage grâce à ses nombreuses fonctionnalités.</p><p>Et ce n’est pas tout : vous débloquez maintenant les MONLoG.</p></div>${btn('Découvrir les MONLoG','n')}`,p=>{go(p,'n',()=>{close();try{if(window.UJ_OPEN_SOLDE)window.UJ_OPEN_SOLDE()}catch(e){}});setTimeout(()=>burst(p),900)});
function open(from){if(ov)return;ov=document.createElement('div');ov.id='uj30';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.innerHTML=`<svg class="rg" viewBox="0 0 390 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g class="a">${rings(330,100,10,30,26)}</g><g class="b">${rings(50,720,9,32,24)}</g></svg><button class="x" aria-label="Fermer">✕</button>`;document.body.appendChild(ov);ov.querySelector('.x').onclick=close;ctx={};(from==5?S5:S1)()}
function close(){kill();kill=()=>{};if(ov){ov.remove();ov=null}}
document.addEventListener('keydown',e=>{if(e.key=='Escape'&&ov)close()});
window.UJ30={open:()=>open(),support:()=>open(5)};
function renderBlock(){document.querySelectorAll('#ujtrb').forEach(x=>x.remove());const lb=[...document.querySelectorAll('.mx-lb')].find(x=>/Mes espaces/.test(x.textContent));if(!lb)return;const L=g('uj_trophies',[]),sup=g('uj_support',0);
lb.insertAdjacentHTML('beforebegin',`<div id="ujtrb"><div class="mx-lb"><h3>Trophées et récompenses</h3></div><div class="ujtr">${L.length?L.map(x=>`<div class="it">${cup(TR[x.m][1]).replace(/width="96" height="96"/,'width="40" height="40"')}<span><b>Trophée ${TR[x.m][0]}</b><small>${dt(x.t)} · ${fm(x.p)} points</small></span></div>`).join(''):'<div class="it"><span><b>Aucun trophée pour l’instant</b><small>Le premier arrive après 30 jours d’utilisation.</small></span></div>'}${sup?`<div class="it"><span><b>Soutien à My UJLoG</b><small>Merci ! MONLoG débloqués le ${dt(sup.t)}</small></span></div>`:(g('uj_30_done',0)?'<button class="it" id="ujsup"><span><b>Soutenir My UJLoG · 500 FCFA</b><small>Contribue à l’évolution de l’application</small></span></button>':'')}</div></div>`);const s=document.getElementById('ujsup');if(s)s.onclick=()=>UJ30.support()}
let raf=0;new MutationObserver(()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;if(!document.getElementById('ujtrb')&&document.querySelector('.mx-lb'))renderBlock()})}).observe(document.documentElement,{childList:true,subtree:true});
function check(){if(!synced)return;if(!ov&&verified()&&!g('uj_30_done',0)&&Date.now()-since>=30*DAY)open()}
let tries=0;const boot=()=>{if(SB()||++tries>8)return sync();setTimeout(boot,1000)};setTimeout(boot,800);setInterval(check,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)check()});
})();
