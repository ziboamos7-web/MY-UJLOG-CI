/* ===== Messagerie directe synchronisée (conversations, conversation_members, messages) =====
 * Remplace l'ancienne messagerie locale pour les discussions entre étudiants :
 *  - liste des discussions, demandes de discussion (accepter / refuser), non lus ;
 *  - envoi et réception de messages texte en temps réel ;
 *  - nouvelle discussion : recherche d'un étudiant par nom ou pseudo.
 * Les messages vers une page (data-msgpage) restent gérés par l'ancien module.
 */
(function(){
const doc=document,
SB=()=>{try{const a=window.parent&&window.parent.UJ_AUTH;return a&&a.sb||null}catch(e){return null}},
SES=async()=>{const s=SB();if(!s)return null;try{const r=await s.auth.getSession();return r&&r.data&&r.data.session||null}catch(e){return null}},
say=m=>{try{toast(m)}catch(e){}},
E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
nameOf=p=>p?([p.prenom,p.nom].filter(Boolean).join(' ')||p.pseudo||'Étudiant(e)'):'Étudiant(e)',
hhmm=t=>{const d=new Date(t),n=new Date();return d.toDateString()==n.toDateString()?('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2):('0'+d.getDate()).slice(-2)+'/'+('0'+(d.getMonth()+1)).slice(-2)};
const COL=['#0EA5E9','#F59E0B','#F43F5E','#8B5CF6','#14B8A6','#EC4899'];
const col=n=>{let h=0;for(let i=0;i<n.length;i++)h+=n.charCodeAt(i);return COL[h%COL.length]};
const ini=n=>n.split(' ').map(w=>w[0]||'').join('').slice(0,2).toUpperCase();
const av=(n,s)=>'<span style="display:inline-flex;align-items:center;justify-content:center;flex:none;width:'+(s||44)+'px;height:'+(s||44)+'px;border-radius:50%;background:'+col(n)+';color:#fff;font-weight:700;font-size:'+((s||44)*.38)+'px">'+E(ini(n))+'</span>';

let root=null,V='list',me='',list=[],cur=null,msgs=[],target=null,pre='',chan=null,timer=0,unread=0;
const q=s=>root&&root.querySelector(s);

function ensureRoot(){
 if(root)return;
 root=doc.createElement('div');root.id='ujmsg';root.hidden=true;
 root.style.cssText='position:fixed;inset:0;z-index:9000;background:var(--paper,#fff);color:var(--ink,#111);display:flex;flex-direction:column;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)';
 doc.body.appendChild(root);
 root.addEventListener('click',onClick);
 root.addEventListener('input',e=>{if(e.target.id=='ujq'){pre=e.target.value;clearTimeout(timer);timer=setTimeout(search,300)}});
 root.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.id=='ujt'&&!e.shiftKey){e.preventDefault();send()}});
}
const hd=(t,right)=>'<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid var(--ln,#e5e7eb)"><button data-m="back" aria-label="Retour" style="font-size:24px;line-height:1;background:none;border:0;padding:4px 8px;transform:scaleX(-1)">➜</button><b style="flex:1;font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+t+'</b>'+(right||'')+'</div>';
const body=h=>'<div id="ujb" style="flex:1;overflow-y:auto">'+h+'</div>';

function render(){
 ensureRoot();
 if(V=='list'){
  const req=list.filter(c=>c.st=='invited'),rest=list.filter(c=>c.st!='invited');
  const item=c=>'<button data-m="open:'+c.id+'" style="display:flex;gap:12px;align-items:center;width:100%;text-align:left;padding:12px 14px;background:none;border:0;border-bottom:1px solid var(--ln,#f0f0f0)">'+av(c.n)+'<span style="flex:1;min-width:0"><b style="display:block">'+E(c.n)+'</b><span style="display:block;color:var(--mu,#667);font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+(c.st=='pending'?'En attente d’acceptation · ':'')+E(c.last||'Dites bonjour 👋')+'</span></span><span style="text-align:right;font-size:12px;color:var(--mu,#667)">'+(c.at?hhmm(c.at):'')+(c.unread?'<br><i style="display:inline-block;min-width:18px;padding:0 5px;border-radius:9px;background:#15803D;color:#fff;font-style:normal;font-weight:700">'+c.unread+'</i>':'')+'</span></button>';
  root.innerHTML=hd('Messages','<button data-m="new" aria-label="Nouvelle discussion" style="font-size:26px;line-height:1;background:none;border:0;padding:4px 8px">＋</button>')+body((req.length?'<p style="padding:10px 14px 0;font-weight:700">Demandes de discussion</p>'+req.map(item).join(''):'')+(rest.length?rest.map(item).join(''):'<p style="padding:24px;text-align:center;color:var(--mu,#667)">Aucune discussion pour l’instant.<br>Appuie sur ＋ pour écrire à un étudiant.</p>'));
 }else if(V=='new'){
  root.innerHTML=hd('Nouvelle discussion')+'<div style="padding:10px 12px"><input id="ujq" value="'+E(pre)+'" placeholder="Nom ou pseudo de l’étudiant" autocomplete="off" style="width:100%;box-sizing:border-box;padding:11px 14px;border:1px solid var(--ln,#ddd);border-radius:22px;font:inherit;background:var(--paper,#fff);color:inherit"></div>'+body('<div id="ujres"></div>');
  const i=q('#ujq');if(i){i.focus();i.setSelectionRange(pre.length,pre.length)}search();
 }else if(V=='chat'){
  const nm=cur?cur.n:target?target.n:'';
  const inv=cur&&cur.st=='invited';
  root.innerHTML=hd(E(nm))+body('<div id="ujm-l" style="padding:12px;display:flex;flex-direction:column;gap:6px">'+bubbles()+'</div>')+
   (inv?'<div style="padding:12px;border-top:1px solid var(--ln,#e5e7eb);display:flex;gap:8px;align-items:center"><span style="flex:1;font-size:14px">'+E(nm)+' souhaite discuter avec toi.</span><button data-m="acc:1" style="background:#15803D;color:#fff;border:0;font-weight:700;cursor:pointer;width:auto;flex:none;padding:8px 14px;border-radius:18px">Accepter</button><button data-m="acc:0" style="padding:8px 14px;border:1px solid var(--ln,#ddd);border-radius:18px;background:none">Refuser</button></div>'
   :'<div style="display:flex;gap:8px;padding:10px 12px;border-top:1px solid var(--ln,#e5e7eb)"><textarea id="ujt" rows="1" maxlength="2000" placeholder="Écrire un message…" style="flex:1 1 0;width:100%;min-width:0;box-sizing:border-box;resize:none;padding:10px 14px;border:1px solid var(--ln,#ddd);border-radius:20px;font:inherit;max-height:120px;background:var(--paper,#fff);color:inherit"></textarea><button data-m="send" style="background:#15803D;color:#fff;border:0;font-weight:700;cursor:pointer;width:auto;flex:none;padding:0 18px;min-height:42px;border-radius:21px">Envoyer</button></div>');
  const l=q('#ujb');if(l)l.scrollTop=l.scrollHeight;
 }
}
function bubbles(){
 if(!msgs.length)return '<p style="text-align:center;color:var(--mu,#667);padding:20px">Aucun message. Écris le premier !</p>';
 return msgs.map(m=>{const mine=m.sender_id===me;
  return '<div style="align-self:'+(mine?'flex-end':'flex-start')+';max-width:80%;padding:8px 12px;border-radius:16px;background:'+(mine?'#15803D':'var(--g2,#eef2f0)')+';color:'+(mine?'#fff':'inherit')+'"><div style="white-space:pre-wrap;word-break:break-word">'+(m.deleted?'<i>Message supprimé</i>':E(m.body))+'</div><div style="font-size:11px;opacity:.7;text-align:right">'+hhmm(m.created_at)+'</div></div>'}).join('');
}

async function loadList(){
 const s=SB(),se=await SES();if(!s||!se)return false;me=se.user.id;
 const cm=await s.from('conversation_members').select('conversation_id,status,last_read_at').eq('user_id',me).in('status',['active','pending','invited']);
 if(cm.error||!cm.data){return false}
 const ids=cm.data.map(x=>x.conversation_id);
 if(!ids.length){list=[];unread=0;return true}
 const cv=await s.from('conversations').select('id,type,name,last_message_at').in('id',ids);
 const ot=await s.from('conversation_members').select('conversation_id,user_id').in('conversation_id',ids).neq('user_id',me);
 const uids=[...new Set((ot.data||[]).map(x=>x.user_id))],pm={};
 if(uids.length){const p=await s.from('profiles').select('id,nom,prenom,pseudo').in('id',uids);(p.data||[]).forEach(x=>pm[x.id]=x)}
 const ms=await s.from('messages').select('conversation_id,body,kind,sender_id,created_at,deleted').in('conversation_id',ids).order('created_at',{ascending:false}).limit(300);
 const last={},cnt={},st={};cm.data.forEach(x=>st[x.conversation_id]=x);
 (ms.data||[]).forEach(m=>{if(!last[m.conversation_id])last[m.conversation_id]=m;const rd=st[m.conversation_id].last_read_at;if(m.sender_id!==me&&(!rd||m.created_at>rd))cnt[m.conversation_id]=(cnt[m.conversation_id]||0)+1});
 const cvm={};(cv.data||[]).forEach(c=>cvm[c.id]=c);
 list=ids.map(id=>{const c=cvm[id]||{},o=(ot.data||[]).find(x=>x.conversation_id===id),l=last[id];
  return{id,st:st[id].status,type:c.type,uid:o&&o.user_id,n:c.type=='dm'?nameOf(o&&pm[o.user_id]):(c.name||'Groupe'),last:l?(l.deleted?'Message supprimé':l.kind=='text'?l.body:'['+l.kind+']'):'',at:l?l.created_at:c.last_message_at,unread:cnt[id]||0}});
 list.sort((a,b)=>String(b.at||'').localeCompare(String(a.at||'')));
 unread=list.reduce((n,c)=>n+c.unread,0);return true;
}
async function openList(){ensureRoot();root.hidden=false;V='list';cur=null;target=null;render();try{await loadList()}catch(e){console.warn('[My UJLoG] liste :',e&&e.message||e)}if(V=='list')render();subscribe()}
async function openChat(id){
 const s=SB();if(!s)return;cur=list.find(c=>c.id==id)||{id,n:'Discussion',st:'active'};target=null;V='chat';msgs=[];render();
 const r=await s.from('messages').select('id,sender_id,body,kind,deleted,created_at').eq('conversation_id',id).order('created_at',{ascending:true}).limit(300);
 if(V!='chat'||!cur||cur.id!=id)return;
 msgs=r.data||[];render();
 s.from('conversation_members').update({last_read_at:new Date().toISOString()}).eq('conversation_id',id).eq('user_id',me).then(()=>{});
 const c=list.find(x=>x.id==id);if(c)c.unread=0;
}
async function send(){
 const i=q('#ujt'),v=i&&i.value.trim();if(!v)return;
 const s=SB(),se=await SES();if(!s||!se){say('Connecte-toi pour envoyer un message');return}
 i.disabled=true;
 try{
  if(!cur&&target){
   const ok=await s.rpc('can_message',{_to:target.id});
   if(ok.data===false){say('Cet étudiant n’accepte pas les messages pour le moment');i.disabled=false;return}
   const r=await s.rpc('start_dm',{p_other:target.id,p_first:v});
   if(r.error)throw r.error;
   await loadList();await openChat(r.data);return;
  }
  const r=await s.from('messages').insert({conversation_id:cur.id,sender_id:se.user.id,kind:'text',body:v.slice(0,2000)});
  if(r.error)throw r.error;
  msgs.push({id:'tmp'+Date.now(),sender_id:se.user.id,body:v,kind:'text',created_at:new Date().toISOString()});
  render();const t=q('#ujt');if(t)t.focus();
 }catch(e){console.warn('[My UJLoG] message non envoyé :',e&&e.message||e);say('Message non envoyé');const t=q('#ujt');if(t){t.disabled=false;t.value=v}}
}
async function search(){
 const s=SB(),box=q('#ujres');if(!s||!box)return;
 const t=pre.trim().replace(/[%,()]/g,' ');
 if(t.length<2){box.innerHTML='<p style="padding:16px;color:var(--mu,#667)">Tape au moins 2 lettres.</p>';return}
 const r=await s.from('profiles').select('id,nom,prenom,pseudo').or('nom.ilike.%'+t+'%,prenom.ilike.%'+t+'%,pseudo.ilike.%'+t+'%').neq('id',me).limit(20);
 if(!q('#ujres'))return;
 const d=r.data||[];
 q('#ujres').innerHTML=d.length?d.map(p=>'<button data-m="to:'+E(p.id)+':'+E(nameOf(p))+'" style="display:flex;gap:12px;align-items:center;width:100%;text-align:left;padding:10px 14px;background:none;border:0;border-bottom:1px solid var(--ln,#f0f0f0)">'+av(nameOf(p),40)+'<span><b>'+E(nameOf(p))+'</b>'+(p.pseudo?'<br><small style="color:var(--mu,#667)">@'+E(p.pseudo)+'</small>':'')+'</span></button>').join(''):'<p style="padding:16px;color:var(--mu,#667)">Aucun étudiant trouvé.</p>';
}
async function onClick(e){
 const b=e.target.closest('[data-m]');if(!b)return;
 const p=b.dataset.m.split(':'),a=p.shift();
 if(a=='back'){if(V=='list'){root.hidden=true;return}V='list';cur=null;target=null;render();await loadList();if(V=='list')render();return}
 if(a=='new'){V='new';pre='';render();return}
 if(a=='open'){openChat(p[0]);return}
 if(a=='to'){target={id:p[0],n:p.slice(1).join(':')};cur=list.find(c=>c.uid===target.id)||null;if(cur){openChat(cur.id);return}msgs=[];V='chat';render();return}
 if(a=='send'){send();return}
 if(a=='acc'){const s=SB();if(!s||!cur)return;const r=await s.rpc('respond_conversation',{p_conv:cur.id,p_accept:p[0]=='1'});if(r.error){say('Action impossible');return}
  await loadList();if(p[0]=='1')openChat(cur.id);else{V='list';cur=null;render()}}
}
function subscribe(){
 if(chan)return;const s=SB();if(!s)return;
 try{chan=s.channel('uj-msgs').on('postgres_changes',{event:'INSERT',schema:'public',table:'messages'},async pl=>{
   const n=pl.new||{};
   if(V=='chat'&&cur&&n.conversation_id===cur.id){if(n.sender_id!==me&&!msgs.some(m=>m.id===n.id)){msgs.push(n);render();s.from('conversation_members').update({last_read_at:new Date().toISOString()}).eq('conversation_id',cur.id).eq('user_id',me).then(()=>{})}}
   else{await loadList();if(!root.hidden&&V=='list')render();else if(n.sender_id!==me)say('Nouveau message')}
  }).subscribe()}catch(e){}
}

/* Entrée : remplace l'ancienne messagerie pour les discussions entre étudiants. */
window.addEventListener('click',e=>{
 const t=e.target.closest&&e.target.closest('[data-msgto],[data-msg],[data-soon="Messages directs"]');
 if(!t||t.closest('#ujmsg'))return;
 if(!SB())return; /* hors connexion : on laisse l'ancien module */
 e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
 const who=t.getAttribute('data-msgto');
 openList().then(()=>{if(who){V='new';pre=String(who);render()}});
},true);

window.UJMSGS={open:openList,unread:()=>unread};
(async()=>{try{for(let i=0;i<40;i++){if(await SES())break;await new Promise(r=>setTimeout(r,1500))}if(SB()){await loadList();subscribe()}}catch(e){console.warn('[My UJLoG] messagerie :',e&&e.message||e)}})();
})();
