/* ===== Creator · badges payés via GeniusPay + règle des 15 jours =====
 * Chargé par parts/app.html après 21-uj30.js (20-crjs.js contient l'écran Creator).
 * - Le mode Creator n'apparaît qu'après 15 jours d'utilisation : décidé par le serveur
 *   (fonction SQL uj_creator_eligible, d'après la date d'inscription). Hors ligne ou sans le SQL :
 *   repli sur la date d'ouverture enregistrée sur l'appareil (uj_since, créée par 21-uj30.js).
 * - Les badges Argent / Or / Premium sont lus dans la table uj_badge (lecture seule).
 * - Paiement : Edge Functions ujcr-badge-create (prix et ordre fixés côté serveur)
 *   et ujcr-badge-status ; la confirmation vient du webhook GeniusPay signé.
 * - Expose window.UJ_BADGE = { eligible(), create(o), sync(), msg(e) }.
 */
(function(){
const LS=localStorage,DAY=864e5,MIN=15,UID=String((window.UJP&&window.UJP.id)||'').replace(/[^A-Za-z0-9]/g,''),
DB=()=>{try{return window.UJ_DB||(window.parent&&window.parent.UJ_DB)||null}catch(e){return null}},
SB=()=>{try{const a=window.parent&&window.parent.UJ_AUTH;return a&&a.sb||null}catch(e){return null}},
SES=async()=>{const s=SB();if(!s)return null;try{const r=await s.auth.getSession();return r&&r.data&&r.data.session||null}catch(e){return null}},
ERR=c=>Object.assign(new Error(c),{code:c}),sleep=ms=>new Promise(r=>setTimeout(r,ms)),
FN=async(fn,body)=>{const d=DB(),se=await SES();if(!d||!d.url||!d.key)throw ERR('unavailable');let r,j={};
 try{r=await fetch(String(d.url).replace(/\/+$/,'')+'/functions/v1/'+fn,{method:'POST',headers:{'Content-Type':'application/json',apikey:d.key,Authorization:'Bearer '+(se?se.access_token:d.key)},body:JSON.stringify(body)})}catch(e){throw ERR('network')}
 try{j=await r.json()}catch(e){}
 if(r.status===404||r.status===503)throw ERR('unavailable');if(r.status===401)throw ERR('auth');if(!r.ok)throw ERR(j.code||'failed');return j};
let ok=null;
const localOk=()=>{try{const t=+JSON.parse(LS.getItem(UID?'uj_since_'+UID:'uj_since'))||0;return t>0&&Date.now()-t>=MIN*DAY}catch(e){return false}};
const apply=()=>{try{if(window.UJCREATOR&&UJCREATOR.refresh)UJCREATOR.refresh()}catch(e){}};
async function sync(){
 try{
  const s=SB(),se=await SES();
  if(!s||!se){ok=localOk();return}
  const e=await s.rpc('uj_creator_eligible');
  ok=(!e.error&&typeof e.data==='boolean')?e.data:localOk();
  if(!ok)return;
  const r=await s.from('uj_badge').select('code,expires_at').eq('status','success');
  if(!r.error&&r.data){const m={};r.data.forEach(x=>{const t=Date.parse(x.expires_at);if(t>(m[x.code]||0))m[x.code]=t});if(window.UJCREATOR&&UJCREATOR.setBadges)UJCREATOR.setBadges(m)}
 }catch(e){if(ok===null)ok=localOk()}
 finally{apply()}
}
async function create(o){
 const op=/wave/i.test(String(o.operator))?'wave':'orange';
 const r=await FN('ujcr-badge-create',{badge:o.badge,operator:op,phone:'+225'+String(o.phone||'').replace(/\D/g,''),orderId:'CR-'+Date.now().toString(36)});
 if(!r||!r.ref)throw ERR('failed');
 for(let i=0;i<60;i++){
  await sleep(3000);let s;
  try{s=await FN('ujcr-badge-status',{ref:r.ref})}catch(e){if(e.code==='auth')throw e;continue}
  if(s.status==='success'){await sync();return{status:'paid',ref:r.ref}}
  if(s.status==='failed')throw ERR('failed');
 }
 throw ERR('timeout');
}
const MSG={too_early:'Le mode Creator s’ouvre après 15 jours d’utilisation.',already_active:'Ce badge est déjà actif.',previous_required:'Obtiens d’abord le badge précédent.',previous_active:'Le badge précédent est encore actif : attends sa fin.',too_many:'Trop de tentatives, réessaie dans quelques minutes.',invalid_input:'Numéro ou opérateur invalide.',auth:'Reconnecte-toi puis réessaie.',network:'Pas de connexion, réessaie.',unavailable:'Paiement indisponible pour le moment.',failed:'Paiement refusé ou annulé.',timeout:'Pas de confirmation reçue. Si tu as payé, ton badge apparaîtra dans quelques minutes.'};
window.UJ_BADGE={eligible:()=>ok===true,create:create,sync:sync,msg:e=>MSG[e&&e.code]||'Paiement impossible, réessaie.'};
let tries=0;const boot=()=>{if(SB()||++tries>8)return sync();setTimeout(boot,1000)};setTimeout(boot,900);
setInterval(sync,300000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)sync()});
})();
