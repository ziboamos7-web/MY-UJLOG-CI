window.__MKTXT={};window.__mkP={};window.__mkLoad=function(id){if(__MKTXT[id])return Promise.resolve();var u=(id==='mkConsoleSrc'?'src/console.html.txt':'src/boutique.html.txt')+'?v=41a38839';return __mkP[id]||(__mkP[id]=fetch(u).then(function(r){if(!r.ok)throw new Error(r.status);return r.text()}).then(function(t){__MKTXT[id]=t}).catch(function(e){delete __mkP[id];throw e}))};
/* ==== bloc0 (global) ==== */

const LOGO='assets/c9f84889854b.webp';
const I=(n,s)=>`<svg class="i" aria-hidden="true"${s?` style="width:${s}px;height:${s}px"`:''}><use href="#${n}"/></svg>`;
const fwLbl=f=>f?`${I('chk',15)}Abonné(e)`:`${I('plus',15)}Suivre`;
function rings(cx,cy,n,st,r0){let s='';for(let i=0;i<n;i++){let r=r0+i*st,d='';for(let a=0;a<=64;a++){let t=a/64*6.2832,k=r*(1+.07*Math.sin(3*t+i*.7)+.04*Math.sin(5*t+i)),x=cx+k*Math.cos(t),y=cy+k*.8*Math.sin(t);d+=(a?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}s+=`<path d="${d}Z"/>`}return s}
function rects(cx,cy,n,st,r0,k){let s='';for(let i=0;i<n;i++){const w=r0+i*st,h=w*k;s+=`<rect x="${(cx-w).toFixed(1)}" y="${(cy-h).toFixed(1)}" width="${(2*w).toFixed(1)}" height="${(2*h).toFixed(1)}"/>`}return s}
const BG=(cx=340,cy=40)=>`<svg class="bgc" aria-hidden="true"><g>${rings(cx,cy,9,26,30)}</g></svg>`;
const nav=a=>{const it=[['nhome','Accueil','a1'],['ncamp','Mon campus','a2'],['nguide','Mon guide','a3'],['nuser','Profil','a4']].map(([i,l,t],k)=>`<button data-go="${t}"${k==a?' aria-current="page"':''}>${I(i,20)}${l}${k==0&&a!=0?'<span class="dot" style="right:22px;top:6px;min-width:10px;height:10px;padding:0"></span>':''}</button>`);return `<nav class="nav" aria-label="Navigation principale">${it.join('')}</nav>`};
const chips=(l,a=0)=>`<div class="chips" role="group">${l.map((t,k)=>`<button class="chip" aria-pressed="${k==a}">${t}</button>`).join('')}</div>`;
const vInfo=u=>{u=(u||'').trim();let m=u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/);if(m)return{pl:'yt',id:m[1]};m=u.match(/tiktok\.com\/(?:@[\w.-]+\/)?video\/(\d{8,25})/);if(m)return{pl:'tt',id:m[1]};return null};
const ytF=(id,pl='yt')=>`<button class="ytf ${pl}" data-pl="${pl}" data-yt="${id}" aria-label="Lire la vidéo" style="${id&&pl=='yt'?`background-image:url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`:''}"><i></i></button>`;
const VC=(id,t,m,pl='yt')=>`<article class="card vcd"><div class="vp">${ytF(id,pl)}${id?'':'<span class="vt">[Aperçu de la vidéo]</span>'}</div><div class="pad"><b style="font:700 18px/1.3 var(--h);display:block">${t}</b><span class="mu row" style="margin-top:4px;gap:6px">${m}</span></div></article>`;
const igv=(pl,id,t,x,tm,ai)=>ig('#0b0f1a','Vidéo',t,x,'Voir la vidéo',tm,pl=='tt'?'9/16':'16/9',ai).replace('<div class="md" style="','<div class="md vd'+(pl=='tt'?' tt':'')+'" style="').replace(/(<div class="md vd[^>]*>)/,'$1'+ytF(id,pl)).replace(/<button class="cta"[\s\S]*?<\/button>/,'');
/* ===== Activités (masquables : ACT_SEED=false cache les exemples ; une activité lancée depuis le menu + apparaît dans le fil) ===== */
const ACT_SEED=false,UFR=['[UFR 1]','[UFR 2]','[UFR 3]'],NIV=['Licence 1','Licence 2','Licence 3','Master 1','Master 2'];const GEN=['Tous','Filles','Garçons'];let ME={ufr:UFR[0],niv:NIV[0],g:'Fille'},CE=null,AN=0;const ACTS={};
const A_T={po:['Sondage','#0E7C8C'],qz:['Quiz','#7C3AED'],el:['Élection','#1E40AF'],co:['Concours','#C26A00'],ev:['Événement','#16A34A'],id:['Boîte à idées','#BE185D'],vm:['Vote du meilleur','#B0306A'],de:['Débat','#0B7285'],pe:['Pétition','#9A3412'],cd:['Compte à rebours','#4338CA']},A_I={po:'cht',qz:'flm',el:'shd',co:'cam',ev:'cal',id:'pen',vm:'hrt',de:'cht',pe:'edt',cd:'clk'};
const aHue=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))%360;return h},aGr=s=>{const h=aHue(s);return `linear-gradient(135deg,hsl(${h} 68% 34%),hsl(${(h+55)%360} 78% 52%))`};
const cav=(a,i)=>`<span class="cav" style="background:${a.ph&&a.ph[i]||aGr(a.id+i)}">${I('usr',24)}</span>`;
const aHero=(a,lb,m)=>{const h=aHue(a.id+a.ttl),bg=a.img?`linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.68)),${a.img}`:`radial-gradient(circle at 86% 24%,rgba(255,255,255,.3) 0 20px,transparent 21px),radial-gradient(circle at 86% 24%,rgba(255,255,255,.15) 0 50px,transparent 51px),linear-gradient(135deg,hsl(${h} 68% 34%),hsl(${(h+55)%360} 78% 52%))`;return `<div class="ahero" style="background:${bg}"><span class="ahg">${I(A_I[a.t],96)}</span><div class="ah"><span class="tag" style="background:rgba(0,0,0,.38)">${lb}</span>${m?`<span class="am">${m}</span>`:''}</div><h3>${aE(a.ttl)}</h3></div>`};
const aE=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mkAct=(t,o={})=>{const id='ac'+(++AN),D={po:{o:[['[Réponse A]',46],['[Réponse B]',32],['[Réponse C]',22]]},co:{o:[['[Candidat 1]',12],['[Candidat 2]',9],['[Candidat 3]',5]]},qz:{o:[['[Réponse A]',0],['[Réponse B]',0],['[Réponse C]',0]],ok:0},el:{o:[['[Candidat 1]',0],['[Candidat 2]',0],['[Candidat 3]',0]],ufr:UFR[0],niv:NIV[0],g:'Tous'},ev:{dt:'[Date, lieu]',cap:50,n:32},id:{n:14},vm:{o:[['[Nom 1]',14],['[Nom 2]',9],['[Nom 3]',6],['[Nom 4]',3]]},de:{o:[['Pour',0],['Contre',0]]},pe:{n:128,goal:200},cd:{d:Date.now()+12*864e5}};const a={id,t,ttl:'[Titre]',my:null,sel:null,...D[t],...o};ACTS[id]=a;return a};
const gTxt=a=>a.g&&a.g!='Tous'?' · '+a.g:'',elOk=a=>a.ufr==ME.ufr&&a.niv==ME.niv&&(!a.g||a.g=='Tous'||a.g==(ME.g=='Fille'?'Filles':'Garçons')),aTot=a=>a.o.reduce((n,x)=>n+x[1],0);
const aBars=(a,so)=>{const T=aTot(a)||1,L=a.o.map((x,i)=>[x,i]);if(so)L.sort((p,q)=>q[0][1]-p[0][1]);return L.map(([x,i])=>{const r=Math.round(x[1]*100/T);return `<div class="opt" style="--w:${r}%"><i></i><span>${aE(x[0])}${a.my===i?' ✓':''}</span><b>${r} %</b></div>`}).join('')};
const coGrid=a=>{const d=a.my!=null,T=aTot(a)||1,L=a.o.map((x,i)=>[x,i]);if(d)L.sort((p,q)=>q[0][1]-p[0][1]);return `<div class="cg">${L.map(([x,i],r)=>{const bg=`background:${aGr(a.id+i)}`;return d?`<div class="ctl${a.my==i?' me':''}${r==0?' first':''}" style="${bg}">${I('cam',34)}<em>${Math.round(x[1]*100/T)} %</em><b>${aE(x[0])}${a.my==i?' ✓':''}</b></div>`:`<button class="ctl" data-a="v" data-id="${a.id}" data-i="${i}" style="${bg}">${I('cam',34)}<span class="ctv">${I('hrt',16)}</span><b>${aE(x[0])}</b></button>`}).join('')}</div>${d?`<span class="mu" style="font-size:12px">${aTot(a)} votes</span>`:''}`};
const aBody=a=>{if(a.t=='co'||a.t=='vm')return coGrid(a);if(a.t=='po'||a.t=='de')return a.my==null?a.o.map((x,i)=>`<button class="opt" data-a="v" data-id="${a.id}" data-i="${i}"><span>${aE(x[0])}</span></button>`).join(''):aBars(a,a.t=='co')+`<span class="mu" style="font-size:12px">${aTot(a)} votes</span>`;
return a.o.map((x,i)=>{const d=a.my!=null,c=d&&i==a.ok?' ok':d&&i==a.my?' ko':'';return `<button class="opt${c}" data-a="q" data-id="${a.id}" data-i="${i}"${d?' disabled':''}><span>${aE(x[0])}</span>${d&&i==a.ok?'<b>✓</b>':d&&i==a.my?'<b>✗</b>':''}</button>`}).join('')+(a.my!=null?`<span class="mu" style="font-size:13px">${a.my==a.ok?'Bonne réponse !':'Raté : la bonne réponse est en vert.'}</span>`:'')};
const actCard=a=>{const [lb,c]=A_T[a.t];let m='',b='';
if(a.t=='el'){const k=elOk(a);m=aE(a.ufr)+' · '+a.niv+gTxt(a);b=`<div class="mu row" style="gap:6px;font-size:13px">${k?'Vous pouvez voter':'Réservé à cette classe : consultation seule'}</div><button class="btn${k&&a.my==null?'':' s'}" data-a="el" data-id="${a.id}">${a.my!=null?'Vote enregistré ✓':k?'Voter':'Voir les candidats'}</button>`}
else if(a.t=='ev'){m=aE(a.dt);const f=a.n>=a.cap&&!a.my;b=`<div class="mu" style="font-size:13px">${a.n}/${a.cap} inscrits</div><button class="btn${a.my?' s':''}" data-a="ev" data-id="${a.id}"${f?' disabled':''}>${a.my?'Inscrit ✓ · Annuler':f?'Complet':'S’inscrire'}</button>`}
else if(a.t=='id'){m=a.n+' idées reçues';b=`<input class="ain" maxlength="160" placeholder="Votre idée ou suggestion" autocomplete="off"><button class="btn" data-a="id" data-id="${a.id}">Envoyer</button>`}
else if(a.t=='pe'){m=a.n+' signatures';const r=Math.min(100,Math.round(a.n*100/a.goal));b=`<div class="opt" style="--w:${r}%"><i></i><span>${a.n} / ${a.goal} signatures</span><b>${r} %</b></div><button class="btn${a.my?' s':''}" data-a="pe" data-id="${a.id}">${a.my?'Signée ✓ · Retirer':'Signer la pétition'}</button>`}
else if(a.t=='cd'){const j=Math.max(0,Math.ceil((a.d-Date.now())/864e5));m='';b=`<div class="cdn"><b>${j}</b><span>jour${j>1?'s':''} restant${j>1?'s':''}</span></div>`}
else b=aBody(a);
return `<article class="card act" data-aid="${a.id}">${aHero(a,lb,m)}<div class="abody">${b}</div></article>`};
const aRe=id=>document.querySelectorAll('[data-aid="'+id+'"]').forEach(n=>n.outerHTML=actCard(ACTS[id]));
const SD_=ACT_SEED?{el1:mkAct('el',{ttl:'Élection du délégué de classe'}),po:mkAct('po',{ttl:'[Question du sondage ?]'}),id:mkAct('id',{ttl:'Boîte à idées de l’université'}),qz:mkAct('qz',{ttl:'[Question du quiz de la semaine ?]'}),el2:mkAct('el',{ttl:'Élection du délégué de classe',ufr:UFR[1],niv:NIV[1]}),el3:mkAct('el',{ttl:'Élection de la déléguée adjointe',g:'Filles'}),co:mkAct('co',{ttl:'Concours photo : [thème]'}),ev:mkAct('ev',{ttl:'[Nom de l’événement]'}),vm:mkAct('vm',{ttl:'Meilleur enseignant de l’année'}),de:mkAct('de',{ttl:'Débat de la semaine : [question ?]'}),pe:mkAct('pe',{ttl:'Pétition : [sujet]'}),cd:mkAct('cd',{ttl:'Examens du semestre'})}:null;
const A=k=>SD_?actCard(SD_[k]):'';
const seg=(l,a=0)=>`<div class="seg" role="group">${l.map((t,k)=>`<button aria-pressed="${k==a}">${t}</button>`).join('')}</div>`;
const ico=(i,c)=>`<div class="ic" style="background:${c}">${I(i)}</div>`;
const SH=(t,l,g)=>`<div class="row sh"><b class="fl">${t}</b><button class="lk" data-go="${g}">${l}</button></div>`;
const act=`<div class="acts"><button aria-label="J’aime">${I('hrt')}0</button><button aria-label="Commenter">${I('cht')}0</button><span class="fl"></span><button aria-label="Partager" style="width:44px;justify-content:center;padding:0">${I('shr')}</button></div>`;
const S=[];
const seen=new Set();
const MB=(()=>{const col=['#0E7C8C','#C26A00','#F08A24','#15803D','#B0306A','#16A34A'],tm=['Il y a 1 h','Il y a 3 h','Hier'];
const mk=(n,g,lv,tot,o)=>({n,g,pub:Array.from({length:tot},(_,i)=>({c:col[(i+o)%6],cap:'[Légende de la publication]',t:i<lv?tm[i]:'[Date]',live:i<lv}))});
return [mk('Vous','',0,0,3)]})();
MB.forEach((M,i)=>M.h=i?'etudiant.'+i:'vous');
const live=m=>((MB[m]||{}).pub||[]).filter(p=>p.live);
const rowH=()=>{const a=MB.map((M,m)=>{const L=live(m).length;
if(m==0)return `<button class="st me" ${L?'data-story="0" aria-label="Voir votre story"':'data-go="a8" aria-label="Ajouter à votre story"'}><span class="rg${L?'':' none'}"><span class="av"${MB[0].av?` style="background:url('${MB[0].av}') center/cover"`:''}>${MB[0].av?'':I('usr',26)}</span><span class="add" data-go="a8" aria-label="Ajouter à votre story">${I('plus',12)}</span></span></button>`;
if(!L)return '';
return `<button class="st" data-story="${m}" aria-label="Story de ${M.n}"><span class="rg${seen.has(m)?' seen':''}"><span class="av">${I('usr',26)}</span></span>${M.n}</button>`});return a[0]+pgRow()+a.slice(1).join('')};
const tiles=(m,lv)=>MB[m].pub.map((p,i)=>lv&&!p.live?'':`<button class="tl" style="background:${p.c}" data-story="${m}" data-i="${i}" data-prof="1" aria-label="Voir la publication ${i+1}">${I('cam',28)}${p.live?'<span class="tag k">Story en cours</span>':''}</button>`).join('');
const CVG=['linear-gradient(135deg,#15803D,#3DBE6A 70%,#F08A24)','linear-gradient(135deg,#1E40AF,#0E7C8C)','linear-gradient(135deg,#B0306A,#F08A24)','linear-gradient(135deg,#0B1630,#44506A)','linear-gradient(135deg,#7C3AED,#3DBE6A)'];
const cvBg=m=>MB[m].cv||'';
const STK='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="8" y="3" width="13" height="13" rx="3" fill="#fff"/><path d="M5 8v8a4 4 0 0 0 4 4h8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>';
const RPI='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/></svg>';
const SRT=['Vient d’être vue','Populaires','Plus anciennes'];
const CNS=[0,0,0,0,0,0,0,0];
const CN=(m,i)=>CNS[(i+m*3)%8];
const fmt=n=>n>=10000?(n/1000).toFixed(1).replace('.',',')+' K':String(n).replace(/\B(?=(\d{3})+$)/g,' ');
const EYE='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const CARET='<svg viewBox="0 0 24 24" style="width:10px;height:10px;fill:currentColor;stroke:none" aria-hidden="true"><path d="M5 9l7 8 7-8z"/></svg>';
const SKR='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h10a4 4 0 0 1 4 4v6l-6 6H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M19 14h-4a2 2 0 0 0-2 2v4M9 9h.01M14 9h.01M9.5 13.5c1 1 2.5 1 3.5 0"/></svg>';
const ptile=(m,i,p)=>`<button class="pt" style="background:${p.c}" data-story="${m}" data-i="${i}" data-prof="1" aria-label="Voir la photo ${i+1}">${I('cam',28)}${i%2==0?`<span class="mc2">${STK}</span>`:''}<span class="cn">${EYE}${fmt(CN(m,i))}</span></button>`;
const ptiles=(m,lv)=>{const M=MB[m];let ix=M.pub.map((_,i)=>i);if(M.sort==1)ix.sort((a,b)=>CN(m,b)-CN(m,a));else if(M.sort==2)ix.reverse();return ix.map(i=>lv&&!M.pub[i].live?'':ptile(m,i,M.pub[i])).join('')};
const myGrid=()=>(MB[0].posts&&MB[0].posts.length)?MB[0].posts.map((p,i)=>`<button class="pt" data-mypost="${i}" aria-label="Voir la publication ${i+1}">${p.c&&p.c.includes('url(')?'':I('cam',28)}</button>`).join(''):pempty(I('cam',34),'Aucune publication','Tes publications apparaîtront ici.');
const pempty=(ic,t,x)=>`<div class="pemp">${ic}<p style="margin-top:8px"><b>${t}</b></p><p class="mu">${x}</p></div>`;
const tkEnd='<p class="tkend">Vous avez vu toutes les publications</p>';
let myT=0;
const tkBar=(m,l,r)=>`<div class="tkbar${MB[m].cv?' hascv':''}"${MB[m].cv?` id="mycv" style="background:${MB[m].cv}"`:''}>${l}<span class="fl"></span>${r}</div>`;
const tkHead=(m,own)=>{const M=MB[m],L=live(m).length,nt=M.note,nm=own?myNm():M.n,st=own?[String((MB[0].posts||[]).length),String(window.UJFWN?UJFWN():0),'0','0']:[String(M.pub.length),'0',String(M.fw?1:0),'0'];
const _d=String(M.dp||'').toLowerCase(),_pc=/agro/.test(_d)?'#16A34A':/environ/.test(_d)?'#0284C7':/jurid/.test(_d)?'#9F1239':/humain|social/.test(_d)?'#C2255C':/(é|e)co|gest/.test(_d)?'#1E3A8A':'#15803D';
const sl=[['Publications','grid'],['Suivis','usr'],['Followers','usrs'],['J’aime','hrt']];
return `<div class="tkh" style="--pc:${_pc}"><div class="v69id"><div class="tkn fl">${own?(nm?`<h2 class="tkt">${eA(((f,l)=>{const q=(f||'').trim().split(/\s+/).filter(Boolean);return q.length?((q.length>2?q[0][0].toUpperCase()+'.':q.join(' '))+(l?' '+l:'')):nm})(M.fn,M.ln))}</h2>`:''):`<span class="v69k">${eA('Étudiant(e) UJLoG')}</span><h2 class="tkt">${nm}</h2>`}<span class="tkhd">@${M.h}</span>${own?`<span class="v69bio">${eA(M.bio||'[Bio, en une ligne]')}</span>`:''}</div>
<div class="tkav">${!own&&nt?`<button class="tkbub"${own?' data-note="1"':''}>${eA(nt||'À quoi penses-tu ?')}</button>`:''}<button class="tkrg" ${L?`data-story="${m}" aria-label="Voir la story de ${nm}"`:'tabindex="-1" aria-hidden="true"'}><span class="rg${L?'':' none'}"><span class="av"${own&&M.av?` style="background:url('${M.av}') center/cover"`:''}>${own&&M.av?'':I('usr',40)}</span></span></button>${own?`<button class="tkplus" data-go="a8" aria-label="Ajouter une photo">${I('plus',16)}</button>`:''}</div></div>
<div class="tkst">${st.map((v,i)=>`<div><i>${I(sl[i][1],17)}</i><b>${v}</b><span>${sl[i][0]}</span></div>`).join('')}</div></div>`};
const tkHl=(m,own)=>{const hl=MB[m].pub.slice(0,4).map((p,i)=>`<button data-story="${m}" data-i="${i}" data-prof="1" aria-label="Voir : [Titre]"><i style="background:${p.c}">${I('cam',24)}</i><span>[Titre]</span></button>`).join('');return own||MB[m].pub.length?`<p class="v68t">À la une</p><div class="tkhl">${own?`<button data-hlnew="1" aria-label="Nouvelle à la une"><i class="nw">${I('plus',28)}</i><span>Nouveau</span></button>`:''}${hl}</div>`:''};
const tabsH=(l,t,att)=>`<div class="tabs" role="tablist">${l.map(([ic,lb],k)=>`<button role="tab" ${att}="${k}" aria-selected="${k==t}" aria-label="${lb}"><span class="tki">${ic}${k==0&&t==0?CARET:''}</span></button>`).join('')}</div>`;
const myTab=t=>t==0?`${MB[0].bnx?'':`<div class="tkbn">${I('eyx',22)}<span class="fl">Retrouvez vos stories expirées dans « Mes photos privées »</span><button data-bnx="1" aria-label="Fermer">×</button></div>`}<div class="gd tk" id="mygrid">${myGrid()}</div>${tkEnd}`:
t==1?pempty(I('eyx',34),'Photos privées','Vous seul(e) voyez ces photos.'):t==2?(window.UJPROFTAB&&UJPROFTAB(2)||pempty(RPI.replace('class="i"','class="i" style="width:34px;height:34px"'),'Republications','Les photos que vous republiez apparaîtront ici.')):(window.UJPROFTAB&&UJPROFTAB(4)||pempty(I('hrt',34),'Photos aimées','Les photos que vous aimez apparaîtront ici.'));
const myPr=t=>{const M=MB[0];t=t==null?myT:t;
return `${tkBar(0,`<button class="ib" data-pedit="1" aria-label="Modifier le profil">${I('pen')}</button><button class="ib" data-pshr="1" aria-label="Partager le profil">${I('shr')}</button>`,`<button class="ib" data-friends="1" aria-label="Demandes d’amis"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/></svg></button><button class="ib ujm-pf" data-msg="1" aria-label="Messages"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg><span class="ujmb" hidden></span></button><button class="ib" data-menu="1" aria-label="Réglages et menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>`)}
${tkHead(0,true)}
${tkHl(0,true)}
${tabsH([[I('grid',23),'Publications'],[I('eyx',23),'Privé'],[RPI,'Republications'],[I('bkm',23),'Enregistrées'],[I('hrt',23),'Aimées']],t,'data-mtab')}
<div id="mytab">${myTab(t)}</div>`};
const mmR=(i,t,x,a)=>`<button class="li" ${a||`data-soon="${t}"`} style="width:100%;text-align:left">${I(i)}<div class="fl"><b>${t}</b></div>${x?`<span class="mu" style="font-size:13px">${x}</span>`:''}${I('chv')}</button>`;
const mmC=r=>`<div class="card">${r.join('')}</div>`,mmS=t=>`<p class="mms">${t}</p>`;
const MQG={"qr": "<rect x=\"3.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"2\" fill=\"#fff\" fill-opacity=\".35\"/><rect x=\"13.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"2\" fill=\"#fff\" fill-opacity=\".35\"/><rect x=\"3.5\" y=\"13.5\" width=\"7\" height=\"7\" rx=\"2\" fill=\"#fff\" fill-opacity=\".35\"/><path d=\"M14 14h2.5v2.5H14zM18.5 14H21M14 18.5v2M17.5 18h3.5v3\"/>", "bkm": "<path d=\"M7 3.5h10A1.5 1.5 0 0 1 18.5 5v15.5L12 16.2 5.5 20.5V5A1.5 1.5 0 0 1 7 3.5z\" fill=\"#fff\" fill-opacity=\".35\"/><path d=\"M12 7.2l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z\" fill=\"#fff\" stroke-width=\"1.2\"/>", "bell": "<path d=\"M6 16.5V11a6 6 0 0 1 12 0v5.5l1.8 1.8H4.2z\" fill=\"#fff\" fill-opacity=\".35\"/><path d=\"M10 21h4\"/><circle cx=\"18\" cy=\"5.5\" r=\"2.8\" fill=\"#fff\" stroke=\"none\"/>", "gear": "<circle cx=\"12\" cy=\"12\" r=\"3.2\" fill=\"#fff\" fill-opacity=\".35\"/><path d=\"M10.3 3.5h3.4l.5 2.2 1.7.8 1.9-1.2 2.4 2.4-1.2 1.9.8 1.7 2.2.5v3.4l-2.2.5-.8 1.7 1.2 1.9-2.4 2.4-1.9-1.2-1.7.8-.5 2.2h-3.4l-.5-2.2-1.7-.8-1.9 1.2-2.4-2.4 1.2-1.9-.8-1.7-2.2-.5v-3.4l2.2-.5.8-1.7-1.2-1.9 2.4-2.4 1.9 1.2 1.7-.8z\"/>"};const mmQ=(i,t,a)=>`<button class="mmq" ${a}><span class="mmqi"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${MQG[i]||''}</svg></span><span>${t}</span></button>`;
const mmSw=(i,t)=>`<button class="li" role="switch" aria-checked="false" style="width:100%;text-align:left">${I(i)}<div class="fl"><b>${t}</b></div><span class="sw"></span></button>`;
const mmP=(k,t,b)=>`<div class="mmpage" id="mmp-${k}" hidden><div class="mmh"><button class="ib" data-mmb="1" aria-label="Retour" style="transform:scaleX(-1)">${I('chv',22)}</button><h2>${t}</h2></div>${b}</div>`;
const mmShow=k=>{const m=document.getElementById('mymenu');if(!m)return;m.querySelectorAll('.mmpage,#mmhome').forEach(p=>p.hidden=true);const t=document.getElementById(k=='home'?'mmhome':'mmp-'+k);if(t)t.hidden=false;m.classList.toggle('full',k!='home');m.scrollTop=0;if(k=='qr'){const q=document.getElementById('mmqr');if(q)q.innerHTML=`<svg viewBox="0 0 235 235" width="200" height="200" fill="currentColor">${qrS}</svg>`}};
const myNm=()=>{const M=MB[0];return(M.fn||M.ln)?`${M.fn||''} ${M.ln||''}`.trim():'[NOM Prénom]'};
const mmPf=()=>{const M=MB[0];return `<button class="mmp" data-pedit="1" aria-label="Modifier le profil"><span class="mma"${M.av?` style="background:url('${M.av}') center/cover"`:''}>${M.av?'':I('usr',26)}</span><span class="fl"><b data-ownh="1">${eA(myNm())}</b><small>${eA(M.bio||'[Bio, en une ligne]')}</small>${M.dp?`<small>${eA(M.dp)}</small>`:''}</span><span class="mmo">Modifier le profil</span></button>`};
const renderMy=()=>{const e=document.getElementById('mypr');if(e)e.innerHTML=myPr(myT);const f=document.getElementById('mmpf');if(f)f.innerHTML=mmPf();if(window.UJENH)UJENH()};
const memb=(m,t)=>{t=t||0;if(!MB[m])return'';const M=MB[m],L=live(m).length,fw=!!M.fw;
const body=t==1&&!L?pempty(I('cam',34),'Aucune story en cours',`Les stories de ${M.n} apparaîtront ici.`):t==2?pempty(RPI.replace('class="i"','class="i" style="width:34px;height:34px"'),'Aucune republication',`${M.n} n’a rien republié pour le moment.`):`<div class="gd tk">${ptiles(m,t==1)}</div>${tkEnd}`;
return `${tkBar(m,`<button class="ib" data-go="a1" aria-label="Retour"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H4M10 6l-6 6 6 6"/></svg></button>`,`<button class="ib" data-bell="${m}" aria-pressed="${!!M.bell}" aria-label="Activer les alertes"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><use href="#bell"/></svg></button><button class="ib" data-pshare="${m}" aria-label="Partager le profil">${I('shr',23)}</button>`)}
${tkHead(m,false)}
<div class="pact"><button class="btn${fw?' s':''}" data-pfw="${m}" aria-pressed="${fw}">${fw?'Suivi(e)':'Suivre'}</button><button class="btn s" data-msgpage="${String(M.n).replace(/"/g,'&quot;')}">Message</button><button class="ib sq" data-sugg="1" aria-label="Suggestions de profils"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/></svg></button></div>
<div class="pbio">[Bio de l’étudiant(e), en une ligne]</div>
<div class="tkp"><button data-about="${m}"><span class="tkdot"></span>${M.g} · [Niveau]</button></div>
${tkHl(m,false)}
${tabsH([[I('grid',23),'Publications'],[SKR,'Stories en cours'],[RPI,'Republications']],t,'data-tab')}
${body}${t==0?`<button class="vchip" data-sort="${m}">${SRT[M.sort||0]}<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l6 6 6-6M6 13l6 6 6-6"/></svg></button>`:''}`};
const BG2=[['Officiel',[['N','Université','Compte officiel de l’UJLoG','#F97316'],['DI','Direction','Direction de l’UJLoG','#111827'],['R','Département','Département de l’UJLoG','#0D9488'],['D','Association','Association étudiante de l’UJLoG','#7C3AED']]],['Professionnel',[['PN','Page professionnelle','Page professionnelle de l’UJLoG','#000000']]],['UFR',[['UA','Agroforesterie','UFR Agroforesterie de l’UJLoG','#16A34A'],['UE','Environnement','UFR Environnement de l’UJLoG','#0EA5E9'],['UJ','Sciences juridiques','UFR Sciences juridiques de l’UJLoG','#9F1239'],['UH','Sciences humaines et sociales','UFR Sciences humaines et sociales de l’UJLoG','#EC4899'],['UG','Sciences éco. et gestion','UFR Sciences économiques et gestion de l’UJLoG','#1E3A8A']]],['Services',[['SC','Crew','Crew de l’UJLoG','#2563EB'],['SR','Restaurant','Restaurant universitaire de l’UJLoG','#84CC16','#14230A'],['SH','Hôpital','Hôpital de l’UJLoG','#DC2626'],['SB','Bibliothèque','Bibliothèque de l’UJLoG','#92400E']]],['Groupes et partenaires',[['GO','Organisation','Organisation reconnue par l’UJLoG','#4F46E5'],['GC','Club','Club de l’UJLoG','#C026D3'],['GP','Partenaire','Partenaire de l’UJLoG','#475569']]],['Étudiants',[['EC','Certifié','Étudiant certifié de l’UJLoG','#FFFFFF','#9CA3AF'],['EA','Argent','Étudiant · niveau Argent','#94A3B8'],['EO','Or','Étudiant · niveau Or','#EAB308','#3B2300'],['EP','Premium','Étudiant · niveau Premium','#3B0764','#EAB308']]]];
const LV={},LD={},BC={},BK={};BG2.forEach(([,a])=>a.forEach(([k,n,d,c,x])=>{LV[k]=n;LD[k]=d;BC[k]=c;if(x)BK[k]=x}));
let ACC=[{n:'UJLoG',l:'N'}];
const PS={'UJLoG':[{c:'var(--g)',cap:'[Légende de la story]',t:'Il y a 2 h'},{c:'#B0306A',cap:'[Légende de la story]',t:'Il y a 5 h'}]};const pseen=new Set();
const pgRow=()=>ACC.filter(p=>(PS[p.n]||[]).length).map(p=>{const n=eA(p.n);return `<button class="st" data-pgst="${n}" aria-label="Story de ${n}"><span class="rg${pseen.has(p.n)?' seen':''}"><span class="av"><img class="lg" alt="" src="${LOGO}"></span></span><span style="max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</span></button>`}).join('');
let PGS={n:'',from:'a1'};
const eA=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const SEAL=(()=>{let d='';for(let i=0;i<=120;i++){const t=i/120*Math.PI*2,r=34*(1+.075*Math.cos(t*10));d+=(i?'L':'M')+(r*Math.cos(t)).toFixed(2)+' '+(r*Math.sin(t)).toFixed(2)}return d+'Z'})();
const bdg=(l,sz=18)=>{const k=BK[l]||'#fff',r=l=='N'?'<circle r="29" fill="none" stroke="#fff" stroke-width="2"/><circle r="23" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>':l=='EP'?'<circle r="29" fill="none" stroke="#EAB308" stroke-width="2.5"/><circle r="23" fill="none" stroke="#EAB308" stroke-opacity=".7" stroke-width="2"/>':'',o=l=='EC'?' stroke="#CBD5E1" stroke-width="2.5"':(l=='DI'||l=='PN')?' stroke="#64748B" stroke-width="2"':'';return `<svg class="vb" width="${sz}" height="${sz}" viewBox="-38 -38 76 76" role="img" aria-label="${LV[l]}"><path d="${SEAL}" fill="${BC[l]}"${o}/>${r}<path d="M-13 1L-4 10L14 -9" fill="none" stroke="${k}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>`};window.UJBDG=bdg;
const ig=(c,tg,t,x,cta,tm,r='1/1',ai=0)=>`<article class="ig"><div class="row ih"><span class="rg s"><span class="av"><img class="lg" alt=""></span></span><div class="fl"><b>${eA(ACC[ai].n)}</b>${bdg(ACC[ai].l)}<div class="mu" style="font-size:12px">${LV[ACC[ai].l]}</div></div><button class="fwb lnk" data-act="fw" aria-pressed="false" aria-label="Suivre cette page">Suivre</button><button class="ibn" data-act="op" aria-label="Plus d’options"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div><div class="md" style="background:${c};aspect-ratio:${r}">${c.includes('url(')?'':I('cam',44)}<span class="tag">${tg}</span><b class="mt">${t}</b></div><div class="acts2"><button class="shr2" data-act="sh" aria-label="Republier"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg></button><button class="cbn" data-act="cm" aria-label="Commenter">${I('cht',22)}<span>Commenter</span><span class="cc"></span></button><button class="lkb" aria-pressed="false" aria-label="J’aime">${I('hrt',24)}<span>J’aime</span></button><span class="fl"></span><button class="svb" aria-pressed="false" aria-label="Enregistrer">${I('bkm',26)}</button></div><div class="cp"><b class="lc">Soyez le premier à aimer</b><p><b>${eA(ACC[ai].n)}</b> ${x||t}</p><button class="mu cv" data-act="cm">Ajouter un commentaire…</button><span class="mu" style="font-size:12px">${tm}</span></div></article>`;
// Banderole d'accueil (à brancher plus tard sur le backend) : k = type ('pr' promotion, 'im' image/actualité, 'in' info), t = étiquette, x = titre, s = sous-titre (optionnel),
// v = remise affichée en badge (promo), c = texte du bouton (optionnel), bg = dégradé de remplacement OU image réelle : "url(banniere1.jpg) center/cover", go = écran ouvert au clic ('' = pas encore d'écran)
const BND=[];
// Marketplace (à brancher plus tard sur le backend) : t = type (Étudiant, Promo, Offre étudiants), n = nom, v = prix ou remise, s = vendeur ou partenaire, bg = visuel de remplacement
const MK=[];
const MKF=i=>{const m=MK[i];if(!m)return'';const pr=m.t!='Étudiant',pt=m.s.split(' · '),who=pt[0],rest=pt.slice(1).join(' · '),ch=pr?['Carte étudiante','Sur le campus']:['Bon état','Remise sur le campus'];return `<article class="card mkf" aria-label="Marketplace"><div class="mfh"><span class="mfl" aria-hidden="true">${pr?'P':'É'}</span><div class="fl"><b>${who}</b><div class="mu" style="font-size:12px">${pr?'Promotion · sponsorisé':'Annonce d’étudiant · [Il y a 2 h]'}</div></div><button class="lk" data-mk="sell">Vendre</button></div><div class="mki mfc" style="background:${m.bg}">${I('cam',44)}<span class="mkp">${m.t}</span><span class="mpr${pr?' p':''}">${m.v}</span><button class="mfo" data-mk="${i}" aria-label="Voir ${eA(m.n)}"></button><button class="msv" data-mksv="1" aria-pressed="false" aria-label="Enregistrer">${I('bkm',20)}</button></div><div class="mfb"><b class="mkn" style="font-size:16px;-webkit-line-clamp:2">${m.n}</b><small class="mu">${rest}</small><div class="mfch">${ch.map(c=>`<span class="tag">${c}</span>`).join('')}</div></div><div class="mfa"><button class="btn" data-mk="${i}">${pr?'Profiter de l’offre':'Contacter le vendeur'}</button><button class="btn s" data-mk="${i}" aria-label="Voir les détails">Détails</button></div></article>`};
const MKH=()=>!MK.length?'':`<section class="mk" aria-label="Marketplace"><div class="row sh"><b class="fl">Marketplace</b><button class="lk" data-mk="sell">Vendre un article</button></div><div class="mkh">${MK.map((m,i)=>`<button class="mkc" data-mk="${i}"><span class="mki" style="background:${m.bg}">${I('cam',30)}<span class="mkp">${m.t}</span></span><b class="mkn">${m.n}</b><span class="mkv">${m.v}</span><small class="mu">${m.s}</small></button>`).join('')}</div></section>`;
const BNDH=(c='')=>!BND.length?`<div class="bnd${c}" hidden></div>`:`<div class="bnd${c}" role="status" aria-live="polite"><div class="vw">${BND.map((b,k)=>`<button class="it${k?'':' on'}" data-k="${b.k}" style="background:${b.bg}" ${b.go?`data-go="${b.go}"`:b.mk!=null?`data-mk="${b.mk}"`:`data-soon="${eA(b.t)}"`}${k?' tabindex="-1" aria-hidden="true"':''}>${b.k=='pr'||b.bg.includes('url(')?'':`<span class="bni">${I('cam',44)}</span>`}<span class="bnk">${b.t}</span>${b.v?`<span class="bnv">${b.v}</span>`:''}<b class="bnt">${b.x}</b>${b.s?`<span class="bns">${b.s}</span>`:''}${b.c?`<span class="bnc">${b.c}${I('chv',14)}</span>`:''}</button>`).join('')}</div><span class="dts">${BND.map((_,k)=>`<i${k?'':' class="on"'}></i>`).join('')}</span></div>`;
// 1 Accueil
S.push(['a1','Accueil',`${BG()}
<header class="hx"><div class="row hd4"><img class="lg" alt="" hidden><span class="wm" role="img" aria-label="My UJLoG"><em class="my">My</em><b>UJL</b><i>o</i><b>G</b><svg viewBox="0 0 80 10" aria-hidden="true" preserveAspectRatio="none"><path d="M4 2Q40 11 76 2"/></svg></span><div class="fl"></div><button class="ib" data-plus="1" aria-label="Créer">${I('plus',24)}</button><button class="ib" data-gbell="1" aria-pressed="false" aria-label="Activer les alertes de toutes les pages suivies">${I('bell',24)}</button><button class="ib pf" data-go="a50" aria-label="Mon espace étudiant">${I('usr',20)}</button></div></header>
<div class="stories">${rowH()}</div>
${BNDH()}
${A('el1')}
${MKF(0)}
<div id="rec">${SH('Pages à découvrir','Voir tout','a17')}<div class="rl"></div></div>
${A('po')}
${MKF(1)}
${A('id')}
${A('qz')}
${A('el2')}
${A('el3')}
${MKF(2)}
${A('co')}
${A('ev')}
${A('vm')}
${A('de')}
${A('pe')}
${A('cd')}
${nav(0)}`]);
// 2 Mon campus
const MCB=[['cal','Emploi du temps','Rappels de cours','#0E8A5F','c1'],['se','Perdu / trouvé','Objets signalés','#5B3FB3','lf1'],['book','Supports de cours','Cours des enseignants','#0E7C8C','sup1'],['pen','Travaux dirigés','Séries et corrigés','#C26A00','sup2'],['doc','Anciens sujets','Sujets à télécharger','#16A34A','']].map(([i,t,x,c,g,lk])=>`<button class="m28-qb" style="--c:${c}" ${g?`data-go="${g}"`:`data-soon="${t}"`} aria-label="${t} : ${x}"><span class="m24-ic">${I(i,22)}</span><span class="m28-tx"><b>${t}</b><small class="m28-sub">${x}</small></span></button>`).join('');
const G=(i,c,t,s,g)=>`<button class="gr"${g?` data-go="${g}"`:` data-soon="${t}"`}><span class="ic" style="background:${c}">${I(i)}</span><span><b>${t}</b><span>${s}</span></span></button>`;
S.push(['a2','Mon campus',`${BG(60,30)}
<div id="edh"></div>
<div class="m28-qg" id="mcb">${MCB}</div>
${nav(1)}`]);
// 3 CROU-D — module logement (version professionnelle)
const CROUD='assets/194d99c5edad.webp',CROUA='assets/257bce4351d2.webp';
const CRS=[['Inscription en ligne','Formulaire d’admission ou de réadmission sur croudaloa.ci','Vous'],['Impression des fichiers','Connexion à l’espace étudiant, puis impression de tous vos fichiers renseignés','Vous'],['Dépôt du dossier','Dossier physique complet remis au service logement du CROU-D','Vous'],['Sélection des dossiers','Selon les critères du Ministère de l’Enseignement supérieur et de la Recherche scientifique','CROU-D'],['Commission d’hébergement','Elle statue sur les dossiers complets et publie la liste des candidats retenus','CROU-D'],['Paiement du loyer','À l’Agence comptable, avant l’admission définitive et la citation par le service logement · 54 000 FCFA, à partir du 9 novembre 2026','Vous']];
const crTl=n=>`<div class="crt">${CRS.map(([t,x,w],k)=>`<div class="crs${k<n?' dn':k==n?' on':''}"><span class="crd">${k<n?I('chk',14):k+1}</span><div class="card pad"><div class="row" style="gap:8px"><b class="fl" style="font:700 15px/1.25 var(--h)">${t}</b><span class="tag${w=='Vous'?'':' cro'}">${w}</span></div><p class="mu" style="margin:6px 0 0;font-size:13px">${x}</p></div></div>`).join('')}</div>`;
const crHd=(t,b)=>`<div class="row"><button class="ib" data-go="${b}" aria-label="Retour" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">${t}</h1></div>`;
const PRT=[['UJLoG','Université Jean Lorougnon Guédé','data:image/webp;base64,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'],['CROU-A1','Abidjan 1','data:image/webp;base64,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'],['CROU-A2','Abidjan 2','data:image/webp;base64,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'],['CROU-B','Bouaké','data:image/webp;base64,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'],['CROU-KORHOGO','Korhogo','data:image/webp;base64,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'],['CROU-SP','San Pedro','data:image/webp;base64,UklGRigNAABXRUJQVlA4IBwNAADwNgCdASpuAGwAPmkmj0WkIiEafH4cQAaEtQBoYBD+O/JX2rqz/a/wpy3BSu23OV/mPUr+MvYA+zf2q/3X1P/zr0Afrt+1Xu9/5j9jveN6AH619Yp6AHlv/tn8Ln7pel9d5H4nwX8Tnpf3E9YLHv086i/yv7Z/nPy39c+8f4M/y3qBfjX82/wH5g+5U9o0C9Aj13+a/6/+5/vD/kfKk9E/rx7AH6vf7b80vW58Gjzn2Av6H/bf+/7MX9j/4PL7+c/5z/0/6P4Cv5j/Yf+d/gP3p75/7X+0yvOkyppjUFfYk/J3gbusv8eHc80oGLB6O2VSjP3yxjll0eggnYJYJK1bb/4+ee1k/mFQMjY9Dc3ihOw/KeFGe7YHN/Od8A+4zfKRIKKSemg2JqCXDoQDhuIFDkdTVbPNaPYv5C5fp+BTxAV/amExWEaJPKAzQLtgs+iZ5xYX+0zFJ/hVelBqVr4C8OfnL6XwVQCGDfagmwj6QvN9zGhxU5F5X0kMW4vVTEmokAW0I3UZ6/WvDUV1eD4aXjPkQ01oWsgbYptHm0CXyTTIVjcDyQFGK7J+j2fd8S0HFqr47pesrNRgjlJGyFgAAP79wIMiPQDk4+KmviiT7DBGjzELD0Xe/YgufUH7+wviFSXtKs68Ybi2EZIZ7ElbmgfWvs59xWgsBnREzHG/a9+gro7qdkWGwThBfbbMsUjIVMNbLlsSXUujJq3DaGjQHXaKVElAlvewLgAS9iEEN4bfOJ9yc14tmDW2bybwfrrzT/9X50IJ4dizVLrzdz3xLuqweyHT8MPSpRZHSOz5JtnMGkeMQwiQKEMLitMO40FEE6wRRGUXmDOOIyL6B0F0UZ//nwrdNY4p5u/DyLabZgRolNHWLlob/DU7nz2sgIlOWZE1+J5AENE5iwEMpoy9JP5YW2/f+F6cZiMpR7qfGxMYErg+mE6/5ao/IVnoNre0hM9MldPNjmf5AunDa8z0/pur04f3HrkiNQ9wL/6UTo91g/2wb/WjJkKo1szLoyG9ZtAmavTGZ+9fMKS3kzfCFjoZWVPJAXP6mdzLFLaecnOR/Vy9+VNt9qa1Io7fHcv2udDpUsWmGGq1Eh2w/mimqHVer7WyyrpHHT3Gpwgdya4QPNmrH1AZB7YoA6YKJjcR1AeU7zECxAgeZZZq90p4oo7MP+/zSDqhsl+t5G2KcPtl4eLP4y661QHTVdiqcImEqIEIBGCETZ150Jo+Hj9M6+Cy63YtNMG+TaLkMp84uMxZVCqcmYM6KeSu+poMmvlD4eMLoeGH5F4es6AN3ig/vxRroKa7/OTPhtMee/dDR/y+C9An74a9XPP3rrx8gtQ7XDTNF4krTRcOeAgvvwQABAmwF7QtpGlNMbynjXVBcQ/PX7vCrQt6oXtTocL7Y+LdkIT6/0jihYhG4FOaCds2M0iUz8P0jvhGjPf9jM+w7JumoRtFgvfrPKWCRzWdpvIQdVOtEx6R7zyQMz6DkPI4q8jwA1jl95OzTNn8kSyMVPafbmNOyYiZb/psbvsbQ8QCySN4tlQiOsOxBi/8AwV1rfdb+junuKk0okxygvPRdgo4/lqFsPkq/qMfjf+9Ra5eW/qOJyLoP89gDTf0TLRKbzKerJxXhf/nd2OXVMEdX+jkpLNzAy0CfWVk/qzA/WSQwjNusQ8bBI+2MGd4WPzCRA4nl/yBngWbjOnmnJYYjfS+Rp8+imyZcTq8ykzt/Jm282uONUB30t2G5DiJJsgt59PAUIBEam6JGoc+4HfkwkQhK25gU9I15wgknG1Xbbj0QMymNKwHdKkFWSE7pjQKIVB0pLa60+Xy5ZdMEVlxAroPJk3r1NoFBJIpBZmFPNY/ajUs+OUCGe3T9zypVig/q0WqT4QWq3ghhhDBEQ1eqrTxSYP79+6xpUQyqsk1duYBTMH1I4fUx/9Wi8ipaH7bmvP/jY6R58/n132qRzMkmAXC1HqmeOzPl/ij1IKo/PfFN7zKWnApPn0o2tKJhXRMrEyG6JI1CXy3FPKMOi6+8g9qVo3oW/9gyX4rS/vSr8uUJ391wJJPxnIE4lD1rzIPicQMMD2zJg6SgdnyhC0jSIrk5XXDm7wxd2xNGu7qnnaDU9RXXmc45sGCbdMZ8GN/rX0c4EOr9QeGYbdqzO3i9KuQTRUD1vEtk2tmdr0RWEvZzkFXHm0Op/zHU+Mud88BqA2QIfrHWNHkiVvtnhGBK0Bgp3rbaImemgDc7a3gmqUvOtQrcODu7zsm94vcdteNpDTyKaTwH7ch9wPDgZ4lvBWhJMLY7FfpPrj/1brod2tnrGXG8L3aANKxPrUMd+hZYqwb7lEp5quAqnql70S6Zx7YjfB0wceyaX5CXZbfciDpceLHlJ9rlNj9Y6UpofqQ1pkeA2QS54UlfaYlxk+Rrc4F0gVXN91xdk2Hw2MwPIQMh4B6jopOUOq7Ps8c46NMHc7XHffUSWu9+lePwmhNT6LkuUJk3crwN7wVyAPz2sETFWdvVAD8USnKDQYOACM6TqgWKNoQttHyLMnulnpQ6PpMqtXwXD0fMNSqtpLZb1qfe6nnHTPqe9r0neUwP6hAQ11OpJI552dd4CbW3Yq4L/z8D/DYKa5uuA5qs0tf8dLas+kGux/+UZ4dgLb4DPmmStyrlgKva4WM2iCK+IotoQ43btLhuCHJjHO9Rvj/D3f8eMXYr+bAE6nI09lJ75NO7skTWalpeKsUs4KRvatGVyQ3qSE8ofOU71K0HTWPkHlADJk/7wcro6IF4byBWUodEvVk282j+r1J8ey6+YvmwX5SQ/dNy2hf/iXsfZL/elEF1RiqTd2vNXUfFyEjXJ/r26kt1GFvNAHps4gEC6V8AGBlhTJ6srr0WGXZomjO1SUv59DBu/5x96YoeeoDDR/o3U6knPbswLUcuKN13nricfU820S28TeVl26Rw3Ggs+F/0bYfhItzbw7CCoKmolV1SltkIa2u6vQu5/KWEvzfPbJBTNt1cDePYCNua9WkSJjAoF756zspNeAgzVMKaFLwiPhmg+yJNxfaZkAbHig3ohevVY8TPS2KaF2zljRRERG7zHik4adcGI8z6ras43cIuR3/YyCBYTRQazMT27ZFjWIEpNL2O1uBP9VBhL66Xh4yyv+MNj7XPBuANzUgQcZE54xEspFjgNnWqu/Nafll8VF9CyLJIFl1HcoEriKZdajV4hILzIOJjQFERJ8weeE3fYIX9ueN/k2E2IMabCiwwuyC9Z7ol371s97+BJTbK/TtzF+ZpAjJEfwe99T6HTvrF0bNYIkdG+byLkJmJnDAX7ZlZ4w8r/LO6bCSly9WUwX5FJia6cjBvEAEP8NUS3XeemlKRab6WL0sFHwFvrKQSvW6aa+VqpoqVYqaVRs9QJmYTMhrfA50tmFmRUIASpd6MmkFZqFtYFl83UXClIASSVE4MZ1SmGA015iPLWpDP3m/lqG2nWvQvBjxsatJOMAOGZyUzLHeyUdlPOQVUA9pyI/pfPIw+OGTz9ge68iQf46aUKnKgjZ1PYJawcKUxE5j8WHNgujtvYSyJfq2RXETRscE6dIAXeHNfw9eIbROKW8d9GiTmC32nxD/cDr+mKGD2SQfg3w3Qgf/NVKWxb3FZvLr5UsJ5RT6HoxOg6G2cFI2WF6YLhMWcuOD9mDgnrReb8+6nPulupwEnztofHXo7T7Ls3/NosEvx87Mt/rpcqDgyrsK/I/hVHIlHBH7Gr8Om80pwQAxP1I+tMXD8bRhkPMD523Ezr+pUxhnxV3Aa5BCgPWCmXfdcGMavtWhDQ866h6aYm9+KkSOdydsm/H+WhvJfldcnXRFMfdvpiSZgstYN1ELWG0jwy5Xznfwu10kV30zOA+8JnDY2LH1zT7ZqQveHcuxqG/CgCz+LsRr3ahbYJRcnYcLOzkg6G3csyeB/yLm30ivnR/ckvg2hDyQz6sTC2pBelb3pmpp4o9q9riK+uMnIp7iC/QORWLY/81uODcCo4aEfD6MfMzoap/C8gG9agHJbFEtu5MFMs/oUaWJpT/fAbT86mtfpz5C05/RpIUGv3DewCE6/0FDygMP0/twlQhPwb40gKjktHD1nZrFbaecmonQmH8TlX/mmI2VgavNxPQMV6qBewamWjXnl3HReRJRU2N16TT+D9cI57zw3IkBS1qb4QT9bv9gQRWK1TmCmGL1cL5C+tpoq+yZn59VQ29GpYfw6esB00hsYDb6eE/1XFGvmBLeKZ3CqIeT2GV7zkrlrLP4WdGwaVJofwPjNjPBA1fB8MQD+K7aGgWzWEbW8caJseOtRLn4xCa1bH6XgNGnBJlq7aP/Q39X4pD01NwbkW93XqebSxy3ox3+UEg3aAQCoRrhTKVQVlLGuLlFlAAEzmQMQ/mnVykhfgmaV3MbqMicfPo39KfQFEYbfoWU95Au2Wc/uy8DTPyrjJ0Bp/Zgw6pWqYCzPOGrF+LcAjx15gAAAAAAAA=='],['CROU-MAN','Man','data:image/webp;base64,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'],['CROU-BDG','Bondoukou','data:image/webp;base64,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'],['DOUVAG','Direction des Œuvres Universitaires, de la Vie Associative et du Genre','data:image/webp;base64,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']];
const cxHead=()=>`<header class="cxh"><div class="r1"><span class="lw"><img class="cxl" src="${CROUD}" alt="Logo officiel CROU-D"></span><div class="tx"><h1>CENTRE RÉGIONAL</h1><h2>DES ŒUVRES UNIVERSITAIRES DE DALOA</h2><p>Votre portail pour les services universitaires</p></div><span class="lw"><img class="cxl" src="${CROUA}" alt="Armoiries de Côte d’Ivoire"></span></div><button class="sr" data-soon="Recherche"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6"/><path d="M15 15l5 5"/></svg>Rechercher un service, une démarche…</button></header>`;
const cxBc=(t,c)=>`<div class="cxbc"><span><b>Accueil</b> › ${t}</span>${c?`<h2>${c}</h2>`:''}</div>`;
const cxDt=(t,b,o)=>`<details class="cxd"${o?' open':''}><summary>${t}</summary><div>${b}</div></details>`;
const cxUl=a=>`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const PO=['assets/787640cbbdb4.webp','assets/c604328735f2.webp'];
const cxAv=`<div class="cxav">${I('bell',20)}<div><b>Avis du Directeur</b><p>Le dépôt physique des dossiers de demande d’admission se poursuit jusqu’à nouvel ordre.</p><p>Étudiants dont la demande est validée en ligne : le paiement du loyer débute le <b style="display:inline;font-size:13px">lundi 9 novembre 2026</b> au guichet de l’Agent Comptable du CROU (<b style="display:inline;font-size:13px">54 000 FCFA</b>).</p></div></div>`;
const cxOp=()=>[['International','Programme Erasmus+ mobilité étudiante','Mobilité d’études d’un semestre en Europe (Erasmus+).','11/12/2026',0,0],['Bourse d’études','Bourse d’excellence Campus France 2026','Bourse pour poursuivre un master en France dans les filières scientifiques et technologiques.','11/11/2026',1,1]].map(([t,n,d,dl,k,r])=>`<article class="cxop"><img src="${PO[k]}" alt="" style="object-position:50% ${k?18:50}%"><div><div class="tg"><b${k?' class="bl"':''}>${t}</b>Général</div><h4>${n}</h4><p>${d}</p><span class="dl${r?' r':''}">Date limite : ${dl}</span><button data-soon="Détails de l’opportunité">Voir détails</button></div></article>`).join('');
const ESP=[
{id:'a41',n:'CROU-D',f:'Centre Régional des Œuvres Universitaires de Daloa',u:'https://www.croudaloa.ci',i:'bld',c:'#0E8F73',g:'linear-gradient(135deg,#3CCFA6,#0E8F73)',d:'Logement, restauration, santé, bourses et carte de bénéficiaire.',r:[['Horaires','07h30 – 12h30 · 13h30 – 16h30, du lundi au vendredi'],['Où nous trouver','Daloa, quartier Tazibouo Université']],x:['a28','Découvrir le CROU-D']},
{id:'a42',n:'DOB',f:'Direction de l’Orientation et des Bourses',u:'https://inscription.mesrs-ci.net/dob',i:'cap',c:'#0E7490',g:'linear-gradient(135deg,#0891B2,#0E7490)',d:'Attribution et renouvellement des bourses d’études, secours financiers.',r:[['Horaires','Lundi au vendredi, 7h30 – 16h30'],['Où nous trouver','Plateau, Abidjan']],x:['a32','Bourses et secours']},
{id:'a43',n:'UJLoG',f:'Université Jean Lorougnon Guédé',u:'https://ujlog.edu.ci',i:'grp',c:'#15803D',g:'linear-gradient(135deg,#22A055,#15803D)',d:'Site officiel de l’université.',r:[['Où nous trouver','BP 150 Daloa, Côte d’Ivoire']],x:['a2','Aller à Mon campus']}];

ESP[0].dk='#07423A';ESP[1].dk='#0A3550';ESP[2].dk='#064E2B';
ESP[0].qa=['Service logement','Restauration','Bourses et secours','Résidences'];ESP[1].qa=['Bourses en Côte d’Ivoire','Secours financiers','Orientation des bacheliers','Publications'];ESP[2].qa=['UFR','Inscription et réinscription','Composition en ligne · Licences','Bibliothèque'];
// Liens réels relevés sur croudaloa.ci, inscription.mesrs-ci.net/dob et ujlog.edu.ci (novembre 2026).
ESP[0].un=[['Paiement du loyer · 54 000 FCFA','À partir du lundi 9 novembre 2026, au guichet de l’Agent Comptable.','https://www.croudaloa.ci/service-logement','Échéance'],['Admissions 2026-2027','Le dépôt physique des dossiers se poursuit jusqu’à nouvel ordre.','https://www.croudaloa.ci/service-logement','Logement'],['Bourse d’excellence Campus France','Master en France, filières scientifiques : date limite le 11/11/2026.','https://www.croudaloa.ci/opportunites/bourse-excellence-campus-france-2026','Opportunité'],['Erasmus+ mobilité étudiante','Mobilité d’études d’un semestre en Europe : date limite le 11/12/2026.','https://www.croudaloa.ci/opportunites/programme-erasmus-mobilite-etudiante-2026','Opportunité']];
ESP[0].sv=[['usr','Espace étudiant','Connexion et suivi','https://www.croudaloa.ci/login'],['bed','Demande de logement','Admission en ligne','https://www.croudaloa.ci/hebergement'],['home','Service logement','Dépôts et avis','https://www.croudaloa.ci/service-logement'],['apt','Résidences','Cités et résidences','https://www.croudaloa.ci/View/PHP/Residence.php'],['fork','Restauration','Restaurants universitaires','https://www.croudaloa.ci/service-restauration'],['coin','Bourses et secours','Service des bourses','https://www.croudaloa.ci/service-bourses-secours'],['chk','Critères d’admission','Admission et réadmission','https://www.croudaloa.ci/criteres-admission-readmission'],['doc','Procédure de demande','Étapes et formalités','https://www.croudaloa.ci/procedure-demande'],['med','Soins médicaux','Centre médical','https://www.croudaloa.ci/View/PHP/Soin-Medical.php'],['hrt','Service social','Accompagnement social','https://www.croudaloa.ci/service-social'],['trophy','Sports','Activités sportives','https://www.croudaloa.ci/service-sport'],['tent','Vie associative','Culture et associations','https://www.croudaloa.ci/service-culturel-vie-associative'],['bkm','Opportunités','Bourses, mobilité','https://www.croudaloa.ci/opportunites'],['news','Actualités','Informations du CROU-D','https://www.croudaloa.ci/actualites'],['star','Avis par QR Code','Donnez votre avis sur les services','https://qrcode.croudaloa.ci/']];
ESP[1].un=[['Bourses 2026-2027','Attribution et renouvellement : session ouverte du 6 octobre au 6 novembre.','https://inscription.mesrs-ci.net/dob','Échéance'],['Secours financiers','Attribution de secours financiers hors Côte d’Ivoire, année 2026-2027.','https://inscription.mesrs-ci.net/dob/bhci/sf','Secours']];
ESP[1].sv=[['coin','Bourses en Côte d’Ivoire','Attribution et renouvellement','https://inscription.mesrs-ci.net/dob'],['hrt','Secours financiers','Hors Côte d’Ivoire','https://inscription.mesrs-ci.net/dob/bhci/sf'],['compass','Orientation des bacheliers','Affectation post-BAC','https://inscription.mesrs-ci.net/enseignement-superieur/orientation'],['usr','Consulter mon dossier','Recherche et suivi','https://inscription.mesrs-ci.net/options/recherche'],['pen','S’inscrire','Inscription en ligne','https://inscription.mesrs-ci.net/inscription/paiement'],['doc','Publications','Textes officiels','https://inscription.mesrs-ci.net/publications'],['news','Actualités','Annonces du ministère','https://inscription.mesrs-ci.net/actualites'],['chk','Vérifier un établissement','Répertoire officiel','https://inscription.mesrs-ci.net/repertoire/verifier'],['bld','Directions et services','Annuaire du ministère','https://inscription.mesrs-ci.net/directions'],['cht','Contact et aide','Joindre le service','https://inscription.mesrs-ci.net/contact-aide']];
ESP[2].un=[['Appel à candidature · Licence et Master','L’UJLoG ouvre les candidatures pour ses formations de Licence et de Master.','https://ujlog.edu.ci/appel-a-candidature-licence-master/','Candidature'],['Préinscription en ligne','Où et comment se préinscrire à l’UJLoG, étape par étape.','https://ujlog.edu.ci/ufr-efc/scolarite/inscription-et-reinscription/','Scolarité'],['Info UJLoG','Les dernières informations officielles de l’université.','https://ujlog.edu.ci/category/info-ujlog/','Actualités']];
ESP[2].sv=[['pen','Inscription et réinscription','Procédure en ligne','https://ujlog.edu.ci/ufr-efc/scolarite/inscription-et-reinscription/'],['chk','Conditions d’accès','Filières, BAC, âge','https://ujlog.edu.ci/ufr-efc/scolarite/conditions-dacces-aux-formations/'],['doc','Actes académiques','Pièces à fournir','https://ujlog.edu.ci/ufr-efc/scolarite/modalite-concernant-la-scolarite/'],['bld','UFR','Cinq UFR','https://ujlog.edu.ci/ufr-efc/ufr/'],['cap','Formation doctorale','Écoles doctorales','https://ujlog.edu.ci/ufr-efc/ecole-doctorale/'],['lap','Formation à distance','FOAD','https://ujlog.edu.ci/ufr-efc/formation-ouverte-a-distance/'],['pc','Composition en ligne · Licences','Examens et quiz FOAD (Moodle)','https://licences.foad-ujlog.com/'],['pc','Composition en ligne · Masters','Examens et quiz FOAD (Moodle)','https://masters.foad-ujlog.com/'],['leaf','Plateforme Tech Agricole','FOAD Technicien Agricole','https://ujlog.uvci.edu.ci/'],['book','Bibliothèque','Ressources et inscription','https://ujlog.edu.ci/vie-universitaire/bibliotheque/'],['dl','Bibliothèque numérique','Ressources en ligne','https://dicames.online/jspui/handle/20.500.12177/3655'],['arch','Dépôt institutionnel','Travaux de l’université','https://ujlog.edu.ci/depot-institutionnel/'],['flask','Recherches et découvertes','Laboratoires et projets','https://ujlog.edu.ci/recherches-et-decouvertes/'],['news','Actualités','Info UJLoG','https://ujlog.edu.ci/category/info-ujlog/'],['cht','Contact','Joindre l’université','https://ujlog.edu.ci/contact/']];
const PRES='assets/923bdf1142b4.webp';
const PRN='Professeure ADOHI KROU Viviane';
const espPres=()=>`${spSl('Mot de la Présidente')}<section class="pmc"><div class="r"><img src="${PRES}" alt="${PRN}"><div class="fl"><b>${PRN}</b><small>Présidente de l’Université</small><p>À l’entame de mes propos, je voudrais tout d’abord témoigner ma reconnaissance à S.E.M. Alassane OUATTARA, Président de la République dont ma nomination porte le sceau. Depuis ma prise de fonction à la tête de l’Université Jean Lorougnon Guédé le 22 juin 2023, je me suis engagée à pérenniser et améliorer les efforts consentis par mes prédécesseurs.</p></div></div><button class="btn" data-go="a44">Lire le mot complet</button></section>`;
Object.assign(ESP[0],{c:'#2F4B76',dk:'#142540',ac:'#E08A2E',sf:'#E8EEF7',hx:'07h30 – 16h30 · Lun – Ven',lx:'Daloa, Tazibouo'});
Object.assign(ESP[1],{c:'#1F58C4',dk:'#0E2C6B',ac:'#0FA0AE',sf:'#E6EEFB',hx:'7h30 – 16h30 · Lun – Ven',lx:'Plateau, Abidjan'});
Object.assign(ESP[2],{c:'#1E6B45',dk:'#0C3A28',ac:'#C9A02F',sf:'#E6F2EB',hx:'',lx:'Daloa'});
const UJLOG2='assets/82d15cb160fa.webp';
const DOBLG='data:image/webp;base64,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';
const SPL={a41:CROUD,a42:DOBLG,a43:UJLOG2};
const MESRSLG='assets/171a8cb6fb32.webp';
SPL.a45=MESRSLG;
ESP.push({id:'a45',n:'MESRS',f:'Ministère de l’Enseignement Supérieur et de la Recherche Scientifique',u:'https://inscription.mesrs-ci.net',i:'bld',c:'#17387A',dk:'#0E2656',ac:'#2E9B3A',sf:'#E6ECF8',d:'Portail officiel de l’enseignement supérieur ivoirien : inscriptions, bourses, demandes en ligne et répertoire des établissements reconnus.',r:[['Horaires','Lundi au vendredi, 7h30 – 16h30'],['Où nous trouver','Plateau, Abidjan']],hx:'7h30 – 16h30 · Lun – Ven',lx:'Plateau, Abidjan',x:['a42','Voir l’espace DOB'],qa:[],sv:[],
un:[['Réclamations sur les inscriptions','Dossiers d’inscription des étudiants des universités publiques.','https://inscription.mesrs-ci.net/reclamation','Avis'],['Vérifiez avant de payer','Une formation absente du répertoire officiel n’est pas reconnue par l’État.','https://inscription.mesrs-ci.net/repertoire/verifier','Avis'],['Orientation des bacheliers','Guide et procédures pour être orienté après le BAC.','https://bac.mesrs-ci.net/guide/orientation','Scolarité']],
gp:[['DESUP','Enseignement supérieur',[['pen','Demandes en ligne','Étudiants, enseignants, établissements','https://inscription.mesrs-ci.net/desup']]],
['DEXCO','Examens et concours',[['chk','Authentification de diplôme','Édition et relevés','https://inscription.mesrs-ci.net/dexco']]],
['DOB','Orientation et bourses',[['coin','Bourse Côte d’Ivoire','Demande de bourse nationale','https://inscription.mesrs-ci.net/dob/bci'],['globe','Bourse hors Côte d’Ivoire','Demande de bourse internationale','https://inscription.mesrs-ci.net/dob/bhci'],['compass','Orientation des bacheliers','Guide et procédures','https://bac.mesrs-ci.net/guide/orientation']]],
['Inscriptions','Universités publiques',[['clip','Inscription en ligne','Nouveaux étudiants','https://inscription.mesrs-ci.net/inscription/paiement'],['usrc','Réinscription','Étudiants du public','https://inscription.mesrs-ci.net/inscription/paiement'],['se','Consulter mon dossier','Recherche et suivi','https://inscription.mesrs-ci.net/options/recherche'],['alrt','Réclamation','Dossier d’inscription','https://inscription.mesrs-ci.net/reclamation']]],
['Demandes administratives','UFHB',[['doc','Demandes en ligne','Équivalences, autorisations, régularisation','https://inscription.mesrs-ci.net/universites']]],
['Répertoire officiel','Établissements reconnus',[['chk','Vérifier un établissement','Avant toute inscription','https://inscription.mesrs-ci.net/repertoire/verifier'],['bld','Établissements homologués','Liste officielle','https://inscription.mesrs-ci.net/repertoire/etablissements'],['cap','Formations accréditées','Liste officielle','https://inscription.mesrs-ci.net/repertoire/formations'],['alrt','Signaler une fraude','Contact et aide','https://inscription.mesrs-ci.net/contact-aide/signalement']]]]});
const GPN={a41:[['Logement','Demande et résidences',['Demande de logement','Service logement','Résidences','Critères d’admission','Procédure de demande']],['Vie quotidienne','Repas, santé et loisirs',['Restauration','Soins médicaux','Service social','Sports','Vie associative']],['Bourses et infos','Aides et actualités',['Bourses et secours','Opportunités','Actualités']]],
a42:[['Bourses','Demandes et secours',['Bourses en Côte d’Ivoire','Secours financiers']],['Mon dossier','Suivi et inscription',['Consulter mon dossier','S’inscrire','Orientation des bacheliers']],['Ressources','Textes et annuaires',['Publications','Actualités','Vérifier un établissement','Directions et services','Contact et aide']]],
a43:[['Scolarité','Inscription et démarches',['Inscription et réinscription','Conditions d’accès','Actes académiques']],['Formations','UFR, doctorat et FOAD',['UFR','Formation doctorale','Formation à distance','Composition en ligne · Licences','Composition en ligne · Masters','Plateforme Tech Agricole']],['Bibliothèque et recherche','Ressources et travaux',['Bibliothèque','Bibliothèque numérique','Dépôt institutionnel','Recherches et découvertes']],['Université','Informations',['Actualités','Contact']]]};
GPN.a41&&GPN.a41.push(['Votre avis','Services du CROU-D',['Avis par QR Code']]);ESP.forEach(e=>{if(GPN[e.id])e.gp=GPN[e.id].map(([t,x,N])=>[t,x,N.map(n=>e.sv.find(v=>v[1]==n)).filter(Boolean)])});
const PAL=['#15803D','#1D4ED8','#C2410C','#7C3AED','#0E7490','#BE185D','#B45309','#475569'];
const espGp=e=>{let k=0;return e.gp.map(([t,x,L])=>{const c0=PAL[k%PAL.length];return `<div class="m33g" style="--c:${c0}">${spSl(t,x)}<div class="sps m33">${L.map(([i,a,b,u])=>{const c=PAL[k++%PAL.length];return `<button data-web="${u}" data-wt="${a}" style="--c:${c}"><span class="si">${I(i,22)}</span><b>${a}</b><small>${b}</small></button>`}).join('')}</div></div>`}).join('')};

ESP[0].un[1][4]=0;ESP[0].un[2][4]=1;
const UI={'Échéance':'clk','Logement':'bed','Opportunité':'star','Secours':'hrt','Candidature':'pen','Scolarité':'doc','Actualités':'news','Avis':'bell'};
const MOIS=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
const dJ=iso=>{const[a,b,c]=iso.split('-').map(Number),t=new Date();return Math.round((new Date(a,b-1,c)-new Date(t.getFullYear(),t.getMonth(),t.getDate()))/864e5)};
const dSt=n=>n<0?['Terminé','off']:n==0?['Aujourd’hui','hot']:n==1?['Demain','hot']:n<=7?['Dans '+n+' jours','soon']:['Dans '+n+' jours','ok'];
const spSl=(t,n)=>`<div class="sp-sl"><h3>${t}</h3>${n?`<span>${n}</span>`:''}</div>`;
const spLogo=(e,z)=>SPL[e.id]?`<img src="${SPL[e.id]}" alt="">`:I(e.i,z||26);
const spHost=u=>u.replace('https://','').replace('www.','');
const espHd=(e,o={})=>`<header class="sph"><div class="sph-bn"><svg class="mxp" viewBox="0 0 390 108" preserveAspectRatio="xMaxYMin slice" aria-hidden="true"><g>${rects(300,10,10,34,36,.32)}</g></svg><button class="sph-b" data-go="${o.back||'a3'}" aria-label="Retour" style="transform:scaleX(-1)">${I('chv')}</button>${o.nx?'':`<button class="sph-b" data-web="${e.u}" data-wt="${e.n}" aria-label="Ouvrir le site ${e.n}">${I('ext',20)}</button>`}</div><div class="sph-id"><span class="sph-lg${SPL[e.id]?' img':''}">${spLogo(e,36)}</span><div class="sph-tx"><h1>${o.t||e.n}</h1><p>${o.s||e.f}</p></div></div></header>${o.nf?'':`<div class="sph-fx"><div><small>${I('globe')}Site</small><b>${spHost(e.u)}</b></div><div><small>${I('pin')}Lieu</small><b>${e.lx}</b></div>${e.hx?`<div><small>${I('clk')}Horaires</small><b>${e.hx}</b></div>`:''}</div>`}`;
const espUne=e=>`${spSl('À la une',e.un.length+' infos')}<div class="spu-w">${e.un.map(([t,d,u,g,im])=>`<button class="spu" data-web="${u}" data-wt="${t}"><span class="spu-v">${im!=null?`<img src="${PO[im]}" alt="" style="object-position:50% ${im?18:50}%">`:`<span class="spu-ic">${I(UI[g]||'news',26)}</span>`}<span class="spu-tg">${g}</span></span><span class="spu-t"><b>${t}</b><span>${d}</span><em>Consulter${I('chv',14)}</em></span></button>`).join('')}</div>`;
const espSv=e=>{const a=e.qa.map(t=>e.sv.find(x=>x[1]==t)).filter(Boolean);return `${spSl('Accès rapide')}<div class="sps">${a.map(([i,t,x,u])=>`<button data-web="${u}" data-wt="${t}"><span class="si">${I(i,22)}</span><b>${t}</b><small>${x}</small><span class="ar">${I('chv',16)}</span></button>`).join('')}</div>`};
const espInf=e=>`${spSl('Infos pratiques')}<section class="spi"><p>${e.d}</p>${e.r.map(([a,b])=>`<div class="ir"><span class="si">${I(a=='Horaires'?'clk':'pin',18)}</span><div><small>${a}</small><b>${b}</b></div></div>`).join('')}<div class="ir"><span class="si">${I('globe',18)}</span><div><small>Site web</small><b>${spHost(e.u)}</b></div></div></section>`;
const LGS={p:3,n:6,t:'Dépôt du dossier'};
const MEDL=[['2026-11-06','Clôture des bourses DOB','Attribution et renouvellement 2026-2027',1,'a32'],['2026-11-09','Paiement du loyer','54 000 FCFA · guichet de l’Agent Comptable',0,'a22'],['2026-11-11','Bourse d’excellence Campus France','Date limite de candidature',0,'a25'],['2026-12-11','Erasmus+ mobilité étudiante','Date limite de candidature',0,'a25']];
const spRows=L=>L.map(([iso,t,x,k,g])=>{const e=ESP[k],n=dJ(iso),[lb,st]=dSt(n),[,m,d]=iso.split('-').map(Number);return{n,h:`<button class="ex ${st}" data-go="${g}" data-s="${e.id}"><span class="ex-d"><b>${String(d).padStart(2,'0')}</b><small>${MOIS[m-1]}</small></span><span class="ex-b"><b>${t}</b><span class="ex-x">${x}</span><span class="ex-m"><span class="ex-s">${e.n}</span><span class="ex-l">${lb}</span></span></span>${I('chv',16)}</button>`}}).sort((a,b)=>(a.n<0)-(b.n<0)||(a.n<0?b.n-a.n:a.n-b.n));
const spEch=L=>`<div class="exw">${spRows(L).map(r=>r.h).join('')}</div>`;
const spNb=L=>L.filter(r=>dJ(r[0])>=0).length;
document.addEventListener('scroll',e=>{const t=e.target;if(!t||!t.classList||!t.classList.contains('m24-sc'))return;const d=t.nextElementSibling;if(!d||!d.classList.contains('m28-dots'))return;const c=t.firstElementChild;if(!c)return;const k=Math.round(t.scrollLeft/(c.offsetWidth+10));[...d.children].forEach((x,i)=>x.classList.toggle('on',i===Math.min(k,d.children.length-1)))},true);
const SPO=[0,1,2,3];
const QA=[['bld','UFR','Les six UFR','https://ujlog.edu.ci/ufr-efc/ufr/','a43'],['book','Bibliothèque','Ressources et inscription','https://ujlog.edu.ci/vie-universitaire/bibliotheque/','a43'],['coin','Bourses','Attribution et renouvellement','a32','a42'],['fork','Restauration','Restaurants universitaires','a23','food'],['apt','Résidences','Cités et résidences','https://www.croudaloa.ci/View/PHP/Residence.php','a41'],['clip','Inscription','Inscription et réinscription','https://ujlog.edu.ci/ufr-efc/scolarite/inscription-et-reinscription/','a43'],['pc','Compos','Examens en ligne','https://licences.foad-ujlog.com/','cmp'],['se','Consultations','Notes, dossiers, bibliothèque','https://ujlog.net/universite/','cns']];
const espB=()=>{const nx=MEDL.map(r=>({r,n:dJ(r[0])})).filter(o=>o.n>=0).sort((a,b)=>a.n-b.n)[0],E=SPO.map(k=>ESP[k]);
const hd='';
const nxd=nx?(([a,b,c])=>new Date(a,b-1,c).toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'}))(nx.r[0].split('-').map(Number)):'';
const qa=QA.map(([i,l,x,g,s],k)=>`<div class="m24-sp" data-s="${s}"><button class="m24-top" data-go="q${k}" data-s="${s}"><span class="m24-ic">${I(i,24)}</span><b>${l}</b><small>${x}</small></button><button class="m24-op" data-go="q${k}" data-s="${s}">${I('chv',16)}Ouvrir</button></div>`).join('');
const qk=QA.map(([i,l,x,g,s],k)=>`<button class="m28-qb" data-go="q${k}" data-s="${s}" aria-label="${l} : ${x}"><span class="m24-ic">${I(i,22)}</span><span class="m28-tx"><b>${l}</b><small class="m28-sub">${x}</small></span></button>`).join('');
const sp=E.map(e=>`<div class="m24-sp" data-s="${e.id}"><button class="m24-top" data-go="${e.id}"><span class="m24-ic${SPL[e.id]?' lg':''}">${SPL[e.id]?`<img src="${SPL[e.id]}" alt="">`:I(e.i,24)}</span><b>${e.n}</b><small>${e.f}</small></button><button class="m24-op" data-web="${e.u}" data-wt="${e.n}" aria-label="Ouvrir le site ${e.n}">${I('chv',16)}Ouvrir le site</button></div>`).join('');
return `${hd}${nx?`<button class="mx-hero" data-go="${nx.r[4]}">${BG(330,60)}<span class="mx-hl"><span>${I('cal',17)}Prochaine échéance</span><span class="mx-nxd">${dSt(nx.n)[0]}</span></span><span class="mx-ht">${nx.r[1]}</span><span class="mx-hx">${nx.r[2]}</span><span class="mx-hf"><span class="mx-hd">${nxd}</span><span class="mx-hs">${ESP[nx.r[3]].n}</span></span></button>`:`<section class="mx-hero">${BG(330,60)}<span class="mx-ht">Aucune échéance à venir</span></section>`}
<div class="mx-lb"><h3>Accès rapide</h3></div>\n<div class="m28-qg">${qk}</div>\n<div class="mx-lb"><h3>Mes espaces</h3></div>\n<div class="m24-sc">${sp}</div><div class="m28-dots" aria-hidden="true">${E.map((_,k)=>`<i${k?'':' class="on"'}></i>`).join('')}</div>\n<div class="mx-lb"><h3>Échéances</h3><span>${spNb(MEDL)} à venir</span></div>\n${spEch(MEDL)}`};
S.push(['a3','Mon guide',`${BG(330,40)}
${espB()}
${nav(2)}`]);S.push(['c1','Emploi du temps',`${BG(330,40)}
${crHd('Emploi du temps','a2')}
<div id="edm"></div>
${nav(1)}`]);



/* ---------- Pages des accès rapides de Mon espace (infos relevées sur ujlog.edu.ci, croudaloa.ci, portail DOB, novembre 2026) ---------- */
const QPG=[
{l:'UFR',i:'cap',k:['#064E2B','#15803D'],d:'Six unités de formation et de recherche de l’UJLoG, en présentiel et à distance.',st:[['6','UFR'],['FOAD','à distance'],['L · M · D','cycles']],
 r:[['grp','UFR Agroforesterie','Sciences agronomiques et technologies : la spécialité phare de l’université','https://ujlog.edu.ci/ufr-efc/ufr/','#15803D'],['grp','UFR Environnement','Sciences et technologies de l’environnement','https://ujlog.edu.ci/ufr-efc/ufr/','#0E7490'],['grp','UFR Sciences économiques et de gestion','Économie, gestion, finance, marketing','https://ujlog.edu.ci/ufr-efc/ufr/','#C26A00'],['grp','UFR Sciences juridiques','Droit, sciences administratives et politiques','https://ujlog.edu.ci/ufr-efc/ufr/','#2F4B76'],['grp','UFR Sciences sociales et humaines','Sciences de l’homme et de la société','https://ujlog.edu.ci/ufr-efc/ufr/','#7C3AED'],['globe','UFR Géosciences et Environnement','Géosciences, eau et environnement, en formation à distance','https://ujlog.edu.ci/ufr-efc/formation-ouverte-a-distance/','#0F766E']],
 r2:[['cap','Formation doctorale','Écoles doctorales','https://ujlog.edu.ci/ufr-efc/ecole-doctorale/','#B45309'],['grp','Formation à distance','Formation ouverte à distance (FOAD)','https://ujlog.edu.ci/ufr-efc/formation-ouverte-a-distance/','#0891B2'],['chk','Conditions d’accès','Filières, BAC, âge','https://ujlog.edu.ci/ufr-efc/scolarite/conditions-dacces-aux-formations/','#16A34A']],t2:'Aller plus loin',
 u:'https://ujlog.edu.ci/ufr-efc/ufr/',ul:'Ouvrir la page des UFR sur ujlog.edu.ci',src:'ujlog.edu.ci'},
{l:'Bibliothèque',i:'bkm',k:['#064E2B','#15803D'],d:'Ressources sur place et en ligne pour vos études et vos recherches.',st:[['Sur place','consultation'],['En ligne','DICAMES'],['Dépôt','institutionnel']],
 r:[['bkm','Bibliothèque universitaire','Ressources et inscription à la bibliothèque','https://ujlog.edu.ci/vie-universitaire/bibliotheque/','#15803D'],['dl','Bibliothèque numérique','Ressources en ligne (DICAMES)','https://dicames.online/jspui/handle/20.500.12177/3655','#0891B2'],['arch','Dépôt institutionnel','Travaux et publications de l’université','https://ujlog.edu.ci/depot-institutionnel/','#C26A00'],['flask','Recherches et découvertes','Laboratoires et projets de recherche','https://ujlog.edu.ci/recherches-et-decouvertes/','#7C3AED']],
 u:'https://ujlog.edu.ci/vie-universitaire/bibliotheque/',ul:'Ouvrir la bibliothèque sur ujlog.edu.ci',src:'ujlog.edu.ci'},
{l:'Bourses',i:'coin',k:['#0A3550','#0E7490'],d:'Campagne DOB 2026-2027 : attribution et renouvellement des bourses d’études.',st:[['6 nov.','clôture en ligne'],['9 – 27','novembre : dépôt'],['2026-27','campagne']],
 al:['Dépôt physique : délai de rigueur','La demande en ligne est close depuis le 6 novembre. Déposez votre dossier du 9 au 27 novembre. Le seul site officiel est inscription.mesrs-ci.net/dob : méfiez-vous des intermédiaires payants.'],
 r:[['cal','Demande en ligne','Du 6 octobre au 6 novembre 2026 · clôturée','https://inscription.mesrs-ci.net/dob','#6B7280'],['pin','Dépôt des dossiers','Du 9 au 27 novembre 2026, auprès du CROU','','#0E7490'],['doc','Pièces à fournir','Fiche d’inscription 2026-2027 du ministère, carte d’étudiant ou certificat de scolarité, relevés de notes','','#C26A00'],['usr','Consulter mon dossier','Recherche et suivi sur le portail DOB','https://inscription.mesrs-ci.net/options/recherche','#2F4B76'],['hrt','Secours financiers','Demande hors Côte d’Ivoire','https://inscription.mesrs-ci.net/dob/bhci/sf','#B45309']],
 u:'https://inscription.mesrs-ci.net/dob',ul:'Ouvrir le portail DOB',g:'a32',gl:'Voir Bourses et secours dans l’app',src:'inscription.mesrs-ci.net/dob'},
{l:'Restauration',i:'fork',k:['#7A3E0C','#B45F1A'],d:'Restaurants universitaires du CROU-D : un repas à 200 FCFA avec la Restocarte.',st:[['200','FCFA / repas'],['500','places en tout'],['1 600','FCFA = 8 repas']],
 r:[['fork','Cité Kalilou','200 places · 2 services','','#B45F1A'],['fork','Pavillon 01','150 places','','#B45F1A'],['fork','Pavillon 03','150 places','','#B45F1A'],['chk','Ma Restocarte','Carte à puce rechargeable, rechargement à la caisse du restaurant','','#16A34A'],['shd','Conditions d’accès','Être étudiant, détenir la carte de bénéficiaire, respecter horaires et règles d’hygiène','','#2F4B76']],
 u:'https://www.croudaloa.ci/service-restauration',ul:'Ouvrir croudaloa.ci',g:'a23',gl:'Voir le menu de la semaine dans l’app',src:'croudaloa.ci'},
{l:'Résidences',i:'bld',k:['#07423A','#0E8F73'],d:'Cités et résidences universitaires du CROU-D, à Daloa.',st:[['16','bâtiments'],['784','chambres'],['1 514','lits']],
 al:['Paiement du loyer · 54 000 FCFA','À partir du lundi 9 novembre 2026, au guichet de l’Agent Comptable, pour les demandes validées en ligne.'],
 r:[['bed','Demande de logement','Admission en ligne sur croudaloa.ci','https://www.croudaloa.ci/hebergement','#0E8F73'],['home','Service logement','Dépôts et avis','https://www.croudaloa.ci/service-logement','#C26A00'],['chk','Critères d’admission','Admission et réadmission','https://www.croudaloa.ci/criteres-admission-readmission','#16A34A'],['doc','Procédure de demande','Étapes et formalités','https://www.croudaloa.ci/procedure-demande','#2F4B76']],
 r2:[['chk','Documents à fournir','Liste interactive selon votre profil','a20','#16A34A'],['shd','Règlement intérieur','Droits, obligations, sanctions','a30','#B45309']],t2:'Dans l’application',
 u:'https://www.croudaloa.ci/View/PHP/Residence.php',ul:'Ouvrir les résidences sur croudaloa.ci',g:'a22',gl:'Voir mon logement dans l’app',src:'croudaloa.ci'},
{l:'Inscription',i:'pen',k:['#064E2B','#15803D'],d:'Les étapes pour s’inscrire ou se réinscrire à l’UJLoG.',st:[['4','étapes'],['Mobile','money'],['UFR','validation']],
 al:['Étapes à confirmer','Procédure résumée à partir des informations publiques. Vérifiez toujours les dates et conditions sur le site officiel de l’UJLoG.'],
 r:[['usr','1 · Préinscription MESRS','Pour les néo-bacheliers, sur inscription.mesrs-ci.net','https://inscription.mesrs-ci.net/inscription/paiement','#2F4B76'],['doc','2 · Paiement des frais','Par mobile money, depuis la plateforme','','#C26A00'],['pen','3 · Inscription en ligne','Sur le portail de l’UJLoG, rubrique Scolarité','https://ujlog.edu.ci/ufr-efc/scolarite/inscription-et-reinscription/','#15803D'],['chk','4 · Validation','À la scolarité de l’UFR','','#16A34A']],
 r2:[['doc','Appel à candidature','Licence et Master','https://ujlog.edu.ci/appel-a-candidature-licence-master/','#0891B2'],['chk','Conditions d’accès','Filières, BAC, âge','https://ujlog.edu.ci/ufr-efc/scolarite/conditions-dacces-aux-formations/','#16A34A'],['doc','Actes académiques','Pièces à fournir','https://ujlog.edu.ci/ufr-efc/scolarite/modalite-concernant-la-scolarite/','#B45309']],t2:'Aussi utile',
 u:'https://ujlog.edu.ci/ufr-efc/scolarite/inscription-et-reinscription/',ul:'Ouvrir la page d’inscription',src:'ujlog.edu.ci'},
{l:'Compos',i:'pc',k:['#312E81','#4F46E5'],d:'Les plateformes en ligne de l’UJLoG où se passent cours, quiz et compositions : Licences, Masters et formations à distance.',st:[['6','plateformes'],['Moodle','cours et quiz'],['S1 · S2','sessions']],
 al:['Chaque formation a sa plateforme','Les compositions se trouvent dans les cours (Session 1, Session 2), après connexion avec vos identifiants. L’ancienne plateforme IFOAD peut ne plus être utilisée : vérifiez auprès de votre formation.'],
 r:[['book','Licences · FOAD','Cours, quiz et examens des Licences','https://licences.foad-ujlog.com/','#15803D'],['cap','Masters · FOAD','Master QHSE, GEE, EHA, GG, MGE, Certificat DD&RSE','https://masters.foad-ujlog.com/','#1D4ED8'],['pc','Plateforme CN UJLoG','Master QHSE, Certificat DD&RSE, Licence 3 ST, examens du semestre','https://cnujlog.com/','#7C3AED'],['leaf','FOAD Technicien Agricole','Technicien Agricole en Ressources Végétales','https://ujlog.uvci.edu.ci/','#C26A00'],['arch','IFOAD · Licences','Ancienne plateforme : cours et examens Licences','https://licences.ifoad-ujlog.net/','#0891B2'],['arch','IFOAD · Masters','Ancienne plateforme : liens directs aux examens, sessions 1 et 2','https://ifoad-ujlog.net/master/','#BE185D']],
 u:'https://licences.foad-ujlog.com/',ul:'Ouvrir la plateforme Licences',src:'ujlog.edu.ci et plateformes FOAD'},
{l:'Consultations',i:'se',k:['#134E4A','#0F766E'],d:'Consulte tes notes, ton dossier de bourse ou de logement et les ressources en ligne, sans quitter l’app.',st:[['3','établissements'],['Notes','et bulletins'],['Dossiers','bourse, logement']],
 r:[['doc','Notes et bulletins','Portail numérique de l’UJLoG, espace étudiant','https://ujlog.net/universite/','#0F766E'],['se','Mon dossier de bourse','Recherche et suivi sur le portail du ministère','https://inscription.mesrs-ci.net/options/recherche','#1D4ED8'],['usr','Mon dossier de logement','Espace étudiant du CROU-D','https://www.croudaloa.ci/login','#0E8F73'],['bkm','Bibliothèque numérique','Ressources en ligne de l’université','https://dicames.online/jspui/handle/20.500.12177/3655','#B45309'],['book','Mémoires de Master','Travaux des étudiants de l’UJLoG','https://ujlog.edu.ci/master-ujlog/','#7C3AED'],['cap','Thèses','Thèses de l’UJLoG','https://ujlog.edu.ci/vie-universitaire/bibliotheque/these-ujlog/','#BE185D']],
 u:'https://ujlog.net/universite/',ul:'Ouvrir le portail numérique',src:'ujlog.net, inscription.mesrs-ci.net, croudaloa.ci'}];
const qpRow=([i,t,s,e,c])=>{const w=/^http/.test(e),g=/^a\d+$/.test(e),at=w?`data-web="${e}" data-wt="${t}"`:g?`data-go="${e}"`:'';return `<${at?'button':'div'} class="li" ${at} style="width:100%;text-align:left">${ico(i,c)}<div class="fl"><b>${t}</b><span class="mu" style="display:block">${s}</span></div>${at?I('chv'):''}</${at?'button':'div'}>`};
const qpTile=([i,t,s,e,c])=>{const w=/^http/.test(e),g=/^a\d+$/.test(e),at=w?`data-web="${e}" data-wt="${t}"`:g?`data-go="${e}"`:'disabled';return `<button ${at} style="--c:${c}"><span class="si">${I(i,22)}</span><b>${t}</b><small>${s}</small></button>`};
QPG.forEach((q,n)=>S.push(['q'+n,q.l,`${BG(330,40)}
${crHd(q.l,'a3')}
<section class="cxr" style="background:linear-gradient(135deg,${q.k[0]},${q.k[1]});box-shadow:0 6px 16px ${q.k[1]}55"><div class="rt"><span class="ri" style="background:#fff;color:${q.k[1]}">${I(q.i,22)}</span><div><h2 style="font-size:19px">${q.l}</h2><p>${q.d}</p></div></div><div class="rs">${q.st.map(([b,s])=>`<div><b>${b}</b><span>${s}</span></div>`).join('')}</div></section>
${q.al?`<div class="cxav">${I('bell',20)}<div><b>${q.al[0]}</b><p>${q.al[1]}</p></div></div>`:''}
<section class="cxbx"><h3>Passer à l’action</h3><button class="g1" data-web="${q.u}" data-wt="${q.l}">${q.ul}</button>${q.g?`<button class="btn s" data-go="${q.g}" style="margin-top:8px">${q.gl}</button>`:''}</section>
<div class="cxsec"><h3>Aperçu</h3><span class="mu" style="font-size:12.5px">${q.r.length} éléments</span></div>
<div class="sps m33">${q.r.map(qpTile).join('')}</div>
${q.r2?`<div class="cxsec"><h3>${q.t2}</h3></div><div class="card">${q.r2.map(qpRow).join('')}</div>`:''}
<p class="mu" style="font-size:12px;text-align:center;margin:4px 0 0">Source : ${q.src}</p>
${nav(2)}`]));

{const q=QPG[6],TG=['Licences','Masters','Plusieurs formations','Technicien Agricole','Ancienne plateforme','Ancienne plateforme'],
 cc=(r,k)=>`<button class="cmp-c" data-web="${r[3]}" data-wt="${r[1]}" style="--v:${r[4]}"><span class="cmp-i">${I(r[0],24)}</span><span class="cmp-t"><em>${TG[k]}</em><b>${r[1]}</b><small>${r[2]}</small></span><span class="cmp-go">Ouvrir la plateforme${I('chv',16)}</span></button>`,
 gp=(t,a)=>`<h3 class="cmp-g">${t}</h3>${a.map(k=>cc(q.r[k],k)).join('')}`,
 h=`${crHd('Compos','a3')}
<section class="cmp-hero"><span class="cmp-hi">${I('pc',28)}</span><span class="cmp-k">COMPOSITIONS EN LIGNE</span><h2>Choisis ta plateforme</h2><p>${q.d}</p><div class="cmp-ch"><span>Session 1</span><span>Session 2</span><span>Quiz</span></div></section>
<ol class="cmp-st"><li><b>${I('cap',16)}</b>Choisis ta formation</li><li><b>${I('usr',16)}</b>Connecte-toi</li><li><b>${I('quiz',16)}</b>Ouvre le cours « Examens »</li></ol>
<div class="cxav">${I('bell',20)}<div><b>${q.al[0]}</b><p>${q.al[1]}</p></div></div>
${gp('Licences',[0])}${gp('Masters',[1])}${gp('Autres formations',[2,3])}${gp('Anciennes plateformes',[4,5])}
<p class="mu" style="font-size:12px;text-align:center;margin:4px 0 0">Source : ${q.src}</p>
${nav(2)}`,k=S.findIndex(x=>x[0]==='q6');if(k>-1)S[k][2]=h}
{const UF=[
{n:'UFR Agroforesterie',s:'Sciences agronomiques et technologies',c:'#15803D',i:'leaf',u:'https://ujlog.edu.ci/agroforesterie/',mo:'https://ujlog.uvci.edu.ci/course/index.php?categoryid=45',
 tc:['Tronc commun Agroforesterie – Environnement'],td:'Biologie, géologie, physique, chimie et mathématiques : la base commune avant la spécialisation en L3.',
 l1:['Sciences de la Vie et de la Terre','Bioressources-Agronomie','Biotechnologies agroalimentaires','Biologie – santé'],l1t:'Licences classiques',
 l2:['Nouvelles Technologies d’Agriculture (LP N-TechAgri)','Métiers de Technicien Agricole en Ressources Végétales (MTARV)'],l2t:'Licences professionnelles',
 ms:['Bioressources-Agronomie · options : Amélioration des ressources agricoles, Défense de cultures, Foresterie','Biosécurité alimentaire','Biotechnologies agroalimentaires','Phytothérapie et pharmacopée des substances naturelles'],
 dn:'Formation doctorale Agroforesterie et Environnement Tropical (FD AET)',dm:['Agriculture et Foresterie Tropicale (AGRITROP)','Biologie et Santé (BioSanté)','Écologie, Biodiversité et Évolution (EBE)','Géosciences et Environnement (GE)']},
{n:'UFR Environnement',s:'Sciences et technologies de l’environnement',c:'#0E7490',i:'globe',u:'https://ujlog.edu.ci/12803-2/',mo:'https://ujlog.uvci.edu.ci/course/index.php?categoryid=45',
 tc:['Tronc commun Agroforesterie – Environnement'],td:'Même base commune que l’UFR Agroforesterie pour les deux premières années.',
 l1:['Biodiversité et gestion durable des écosystèmes','Productions animale et Halieutique','Sciences de la terre','Génie de l’eau et de l’environnement (GEE)','Environnement et Gestion Durable des Ressources Naturelles (EGERNA)'],l1t:'Licences issues du tronc commun',
 l2:['Physique – chimie','Qualité Hygiène Sécurité Environnement (QHSE) en FOAD'],l2t:'Autres licences',
 ms:['Physique-chimie','Géo-matériaux et géotechnique','Mines et énergies','Productions aquacoles','QHSE en FOAD','Génie de l’eau et de l’environnement (GEE)','Environnement et Gestion Durable des Ressources Naturelles (EGERNA)','Environnement minier et développement durable','Ingénierie et certification agricole en zone tropicale'],
 dn:'Formation doctorale Agroforesterie et Environnement Tropical (FD AET)',dm:['Géosciences et Environnement (GE)','Écologie, Biodiversité et Évolution (EBE)']},
{n:'UFR Sciences Sociales et Humaines',s:'Sciences de l’homme et de la société',c:'#7C3AED',i:'grp',u:'https://ujlog.edu.ci/ufr-efc/ufr/science-sociales-et-humaines/',
 tc:['Tronc commun Histoire – Géographie','Tronc commun Sociologie – Anthropologie'],td:'Deux troncs communs : histoire, géographie, sociologie et anthropologie.',
 l1:['Histoire','Géographie','Histoire – Géographie','Sociologie – Anthropologie'],l1t:'Licences',
 ms:['Anthropologie du développement communautaire','Histoire des civilisations-sociétés-environnement','Histoire politique et économique','Géographie de la population et du développement rural','Géographie physique, de l’environnement et des eaux','Sociologie du développement rural'],
 dn:'Formation doctorale Sciences Juridiques, Économiques, Sociales et Humaines (FD SJESH)',dm:['Anthropologie du développement communautaire (ADC)','Sciences Historiques (HIS)','Sciences Géographiques (SG)','Sciences Sociologiques (SOC)']},
{n:'UFR Sciences Économiques et de Gestion',s:'Économie, gestion, finance, marketing',c:'#C26A00',i:'coin',u:'https://ujlog.edu.ci/ufr-efc/ufr/sciences-economiques-et-gestions/',
 tc:['Tronc commun en sciences économiques et de gestion'],td:'Deux premières années communes avant la spécialisation en économie ou en gestion.',
 l1:['Économie','Modélisation, statistique, économique et financière','Économie agricole et agroforestière','Gestion','Marketing','Management des organisations','Gestion comptable et financière'],l1t:'Licences',
 ms:['Management des organisations','Gestion comptable et financière','Économie agricole et agroforestière','Économie du travail et des ressources humaines'],
 dn:'Formation doctorale Sciences Juridiques, Économiques, Sociales et Humaines (FD SJESH)',dm:['Sciences Économiques (ECO)','Sciences de Gestion (GES)']},
{n:'UFR Sciences Juridiques',s:'Droit, sciences administratives et politiques',c:'#2F4B76',i:'shd',u:'https://ujlog.edu.ci/ufr-efc/ufr/science-juridique/',
 tc:['Tronc commun en sciences juridiques'],td:'Quatre semestres communs avant la spécialisation en droit privé ou en droit public.',
 l1:['Droit public','Droit privé'],l1t:'Licences',
 ms:['Master Recherche Droit Privé','Master Recherche Droit Public','Master Professionnel Droit de l’Environnement et du Développement Durable','Master Professionnel Droit des Affaires'],
 dn:'Formation doctorale Sciences Juridiques, Économiques, Sociales et Humaines (FD SJESH)',dm:['Droit public (DPU)','Droit privé (DPV)']},
{n:'UFR Géosciences et Environnement',s:'Géosciences, eau et environnement, en formation à distance',c:'#0F766E',i:'globe',u:'https://ujlog.edu.ci/ufr-efc/formation-ouverte-a-distance/',mo:'https://licences.foad-ujlog.com/',
 tc:['Licence FOAD Géosciences et Environnement'],td:'Licence à distance ouverte dès la première année aux bacs C et D : cours, quiz et examens sur la plateforme FOAD.',
 l1:['Géosciences et Environnement (Licence FOAD)','Sciences de la Terre (ST)'],l1t:'Licences',l2:['Eau, Hygiène, Assainissement (LP EHA)'],l2t:'Licence professionnelle',
 ms:['QHSE (Qualité, Hygiène, Sécurité, Environnement)','Génie de l’eau et de l’environnement (GEE)','Eau, Hygiène, Assainissement (EHA)','GG','MGE','Certificat DD&RSE'],
 dn:'Formation doctorale Agroforesterie et Environnement Tropical (FD AET)',dm:['Géosciences et Environnement (GE)']}];
const LV=[['L1','Licence 1'],['L2','Licence 2'],['L3','Licence 3'],['M1','Master 1'],['M2','Master 2'],['D','Doctorat']];
const ul=a=>`<ul class="ufr-ul">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const meta=(a,b,c)=>`<div class="ufr-mt"><span>${I('cal',14)}${a}</span><span>${I('star',14)}${b}</span>${c?`<span>${I('chk',14)}${c}</span>`:''}</div>`;
const ues=`<div class="ufr-ue"><b>Structure d’un semestre</b><div><span>UEF<small>fondamentales</small></span><span>UEM<small>méthodologie</small></span><span>UES<small>spécialité</small></span><span>UET<small>transversales</small></span></div><p>Chaque UE regroupe des ECUE. Socle commun à tous les niveaux : anglais, informatique, entrepreneuriat.</p></div>`;
['Agroforesterie','Environnement','Sociales et humaines','Éco. et gestion','Juridiques','Géosciences'].forEach((x,i)=>UF[i].sh=x);
[['Biologie','Géologie','Physique','Chimie','Mathématiques'],['Biologie','Géologie','Physique','Chimie','Mathématiques'],['Histoire','Géographie','Sociologie','Anthropologie'],['Économie','Gestion','Statistique et modélisation','Marketing','Comptabilité et finance'],['Droit public','Droit privé'],['Géosciences','Environnement']].forEach((x,i)=>UF[i].mt=x);
const SOC=['Anglais','Informatique','Entrepreneuriat'];
const chp=(a,c)=>`<div class="ufr-cp${c?' '+c:''}">${a.map(x=>`<span>${x}</span>`).join('')}</div>`;
const tdp=`<div class="ufr-td"><div><b>CM</b><span>Cours magistral</span><small>Amphithéâtre</small></div><div><b>TD</b><span>Travaux dirigés</span><small>Exercices en groupes</small></div><div><b>TP</b><span>Travaux pratiques</span><small>Laboratoire, salle machines</small></div></div><h4>Créneaux de la journée</h4>${chp(['08h – 10h','10h – 12h','14h – 16h','16h – 18h'])}<p class="ufr-tx">Contrôle continu 40 %, examen terminal 60 %. Salles et enseignants s’affichent dans l’emploi du temps.</p><button class="ufr-lk" data-go="c1">${I('cal',16)}Ouvrir l’emploi du temps</button>`;
const pn=(u,k)=>{let p='',m='';
 if(k=='L1'||k=='L2'){p=meta(k=='L1'?'Semestres 1 et 2':'Semestres 3 et 4','60 CECT par an',k=='L2'?'120 CECT cumulés pour passer en L3':'')+`<h4>Tronc commun</h4>${ul(u.tc)}<p class="ufr-tx">${u.td}</p>`+ues;m=`<h4>Disciplines du tronc commun</h4>${chp(u.mt)}<h4>Socle commun à tous les niveaux</h4>${chp(SOC,'s')}`}
 else if(k=='L3'){p=meta('Semestres 5 et 6','180 CECT cumulés = Licence')+ues;m=`<h4>${u.l1t}</h4>${ul(u.l1)}`+(u.l2?`<h4>${u.l2t}</h4>${ul(u.l2)}`:'')}
 else if(k=='M1'||k=='M2'){p=meta(k=='M1'?'Semestres 1 et 2':'Semestres 3 et 4',k=='M1'?'60 CECT par an':'120 CECT cumulés = Master','Admission sélective')+ues;m=`<h4>Masters de l’UFR</h4>${ul(u.ms)}`}
 else{p=meta('6 semestres après le Master','École doctorale');m=`<h4>${u.dn}</h4>${ul(u.dm)}`}
 return `<div class="ufr-p" data-lv="${k}"${k=='L1'?'':' hidden'}><div class="ufr-tb" role="group" aria-label="Rubrique"><button data-tb="pg" aria-pressed="true">Programme</button><button data-tb="mt" aria-pressed="false">Matières</button><button data-tb="td" aria-pressed="false">TD · TP</button></div><div class="ufr-t" data-tb="pg">${p}</div><div class="ufr-t" data-tb="mt" hidden>${m}</div><div class="ufr-t" data-tb="td" hidden>${tdp}</div></div>`};
const un=u=>`<details class="ufr-d" data-n="${u.n}" style="--v:${u.c}"><summary><span class="ufr-lg"><img src="${UJLOG2}" alt=""><b>${u.sh}</b></span><span class="ufr-s"><b>${u.n}</b><small>${u.s}</small><em>${u.l1.length+(u.l2?u.l2.length:0)} licences · ${u.ms.length} masters · ${u.dm.length} spécialités doctorales</em></span><span class="ufr-c">${I('chv',18)}</span></summary><div class="ufr-b"><div class="ufr-ac"><button data-go="c1">${I('cal',18)}Emploi du temps</button>${u.mo?`<button data-web="${u.mo}" data-wt="Cours en ligne">${I('lap',18)}Cours en ligne</button>`:''}<button data-web="${u.u}" data-wt="${u.n}">${I('ext',18)}Site de l’UFR</button></div><div class="ufr-lv" role="group" aria-label="Niveau">${LV.map(([k,t],j)=>`<button data-lv="${k}" aria-pressed="${j==0}">${t}</button>`).join('')}</div>${LV.map(([k])=>pn(u,k)).join('')}</div></details>`;
const K=u=>[u.n,u.s,u.dn].concat(u.tc||[],u.l1||[],u.l2||[],u.ms||[],u.dm||[],u.mt||[]).join(' ').toLowerCase().replace(/"/g,'');
const uc=(u,i)=>`<button class="ufr-d ufr-cd" data-go="ufrp${i}" data-k="${K(u)}" style="--v:${u.c}"><span class="ufr-lg"><img src="${UJLOG2}" alt=""><b>${u.sh}</b></span><span class="ufr-s"><b>${u.n}</b><small>${u.s}</small><em>${u.l1.length+(u.l2?u.l2.length:0)} licences · ${u.ms.length} masters · ${u.dm.length} spécialités doctorales</em></span><span class="ufr-c">${I('chv',18)}</span></button>`;
const ub=u=>`<div class="ufr-b"><div class="ufr-ac"><button data-go="c1">${I('cal',18)}Emploi du temps</button>${u.mo?`<button data-web="${u.mo}" data-wt="Cours en ligne">${I('lap',18)}Cours en ligne</button>`:''}<button data-web="${u.u}" data-wt="${u.n}">${I('ext',18)}Site de l’UFR</button></div><div class="ufr-lv" role="group" aria-label="Niveau">${LV.map(([k,t],j)=>`<button data-lv="${k}" aria-pressed="${j==0}">${t}</button>`).join('')}</div>${LV.map(([k])=>pn(u,k)).join('')}</div>`;
const UXC=['#15803D','#1D4ED8','#C2410C','#7C3AED','#0E7490','#BE185D','#B45309','#475569'];
const uxS=(c,ic,ti,su,b)=>`<section class="ux-s" style="--c:${c}"><div class="ux-sh"><i>${I(ic,20)}</i><div><b>${ti}</b>${su?`<small>${su}</small>`:''}</div></div><div class="ux-b">${b}</div></section>`;
const uxSt=a=>`<div class="ux-st">${a.map(([b,s,c,m])=>`<div${c?` style="--c:${c}"`:''}><b>${b}</b><span>${s}</span>${m?`<small>${m}</small>`:''}</div>`).join('')}</div>`;
const uxL=a=>`<ul class="ux-ul">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const uxC=(a,m)=>`<div class="ux-cp">${a.map((x,n)=>`<span${m?` style="--c:${UXC[(n+1)%UXC.length]}"`:''}>${x}</span>`).join('')}</div>`;
const uxE=f=>`<div class="ux-ue">${[['UEF','fondamentales','#15803D'],['UEM','méthodologie','#1D4ED8'],['UES','spécialité','#C2410C'],['UET','transversales','#7C3AED']].map(([a,b,c])=>`<div style="--c:${c}"><b>${a}</b><span>${b}</span></div>`).join('')}</div><p class="ux-tx">Chaque UE regroupe des ECUE.${f?' Socle commun à tous les niveaux : anglais, informatique, entrepreneuriat.':''}</p>`;
const uxLv=(u,k,j)=>{let s='',n=0;const add=(ic,ti,su,b)=>{s+=uxS(UXC[(j+n++)%UXC.length],ic,ti,su,b)};
 if(k=='L1'||k=='L2'){
  add('clk','Durée et crédits',k=='L1'?'Première année de licence':'Deuxième année de licence',uxSt([[k=='L1'?'S1 · S2':'S3 · S4','Semestres'],['60','CECT par an']].concat(k=='L2'?[['120','CECT cumulés']]:[]))+(k=='L2'?`<p class="ux-tx">Il faut 120 CECT cumulés pour passer en L3.</p>`:''));
  add('book','Tronc commun',null,uxL(u.tc)+`<p class="ux-tx">${u.td}</p>`);
  add('flask','Disciplines du tronc commun',u.mt.length+' disciplines',uxC(u.mt,1));
  add('star','Socle commun à tous les niveaux','Pour toutes les UFR',uxC(SOC,1));
  add('grid','Structure d’un semestre','UE et ECUE',uxE(0));
 }else if(k=='L3'){
  add('clk','Durée et crédits','Troisième année de licence',uxSt([['S5 · S6','Semestres'],['180','CECT cumulés = Licence']]));
  add('cap',u.l1t,u.l1.length+' parcours',uxL(u.l1));
  if(u.l2)add('pen',u.l2t,u.l2.length+' parcours',uxL(u.l2));
  add('grid','Structure d’un semestre','UE et ECUE',uxE(1));
 }else if(k=='M1'||k=='M2'){
  add('clk','Durée et crédits',k=='M1'?'Première année de master':'Deuxième année de master',uxSt([[k=='M1'?'S1 · S2':'S3 · S4','Semestres'],[k=='M1'?'60':'120',k=='M1'?'CECT par an':'CECT cumulés = Master'],['Sélective','Admission']]));
  add('trophy','Masters de l’UFR',u.ms.length+' masters',uxL(u.ms));
  add('grid','Structure d’un semestre','UE et ECUE',uxE(1));
 }else{
  add('clk','Durée','Après le Master',uxSt([['6','Semestres après le Master'],['École','doctorale']]));
  add('arch',u.dn,u.dm.length+' spécialités',uxL(u.dm));
 }
 return s};
const uxT=uxS('#0E7490','grp','Types de cours','CM · TD · TP',uxSt([['CM','Cours magistral','#C2410C','Amphithéâtre'],['TD','Travaux dirigés','#1D4ED8','Exercices en groupes'],['TP','Travaux pratiques','#15803D','Laboratoire, salle machines']]))+uxS('#BE185D','cal','Créneaux et évaluation','Une journée type',uxC(['08h – 10h','10h – 12h','14h – 16h','16h – 18h'])+`<p class="ux-tx">Contrôle continu 40 %, examen terminal 60 %. Salles et enseignants s’affichent dans l’emploi du temps.</p><button class="ux-cta s" data-go="c1">${I('cal',16)}Ouvrir l’emploi du temps</button>`);
window.UJACC=[["UFR Agroforesterie", "Licence Agroforesterie – Environnement", "C, D, E (F7 : Maths 13, Physique 12)", "22 ans", "Anglais, Maths, Physique, SVT et Français : 11 minimum", "Techniciens et ingénieurs en agriculture durable ou en agroforesterie, techniciens de laboratoire, nutritionnistes, conseillers agricoles"], ["UFR Agroforesterie", "Licence FOAD Métiers de Technicien Agricole en Ressources Végétales", "C, D (F7 : Maths 12, Physique 12)", "22 ans", "Anglais, Maths, Physique, SVT et Français : 11 minimum", ""], ["UFR Géosciences et Environnement", "Licence FOAD Géosciences et Environnement", "C, D", "22 ans", "Anglais, Maths, Physique, SVT et Français : 11 minimum", "Conservateurs de la biodiversité, gestionnaires d’aires protégées, techniciens en traitement des eaux et assainissement, animateurs QHSE"], ["UFR Environnement", "Licence Physique – Chimie", "C, D, E", "", "Anglais 11, Maths 12, Physique 11, SVT 11 (Bac E : 10), Français 11", ""], ["UFR Sciences Économiques et de Gestion", "Licence Économie et Gestion", "A1, B, C, D, G2", "22 ans", "Français 11, Anglais 11, Maths : A1 et B 14, C et D 12, G2 15", "Économistes, contrôleurs de gestion, comptables, managers, chefs de projets, analystes de données"], ["UFR Sciences Économiques et de Gestion", "Licence Administration Économique et Sociale", "A1, B, C, D, G2", "22 ans", "Français 12, Anglais 11 ; Maths 11 (C, D) ou 13 (A, B, G2) ; Philo 12 (C, D) ou 11 (A, B)", ""], ["UFR Sciences Juridiques", "Licence Sciences juridiques", "A, B, C, D, G1", "23 ans", "Français 12, Philo 12, Histoire-Géographie 12", "Magistrats, avocats, notaires, juristes, administrateurs"], ["UFR Sciences Sociales et Humaines", "Licence Histoire – Géographie", "Toutes séries", "23 ans", "Philo 10, Histoire-Géographie 12, Maths 10 (Bac D)", "Assistants en suivi-évaluation de projets, en études d’impact environnemental et social, en prévention des conflits"], ["UFR Sciences Sociales et Humaines", "Licence Sociologie et Anthropologie", "Toutes séries", "23 ans", "Français 10, Philo 12, Histoire-Géographie 10", ""]];
const uxA=u=>{const a=window.UJACC.filter(x=>x[0]==u.n);return a.length?uxS(u.c,'chk','Accès et débouchés','Conditions d’admission en Licence 1 · MESRS, rentrée 2024-2025',a.map(x=>`<div class="ux-ac"><b>${x[1]}</b><p class="ux-tx">Bac : ${x[2]}${x[3]?` · Âge maximum : ${x[3]}`:''}<br>Moyennes exigées : ${x[4]}${x[5]?`<br>Débouchés : ${x[5]}`:''}</p></div>`).join('')):''};
const up=(u,i)=>['ufrp'+i,u.n,`${crHd(u.n,'q0').replace('font-size:24px','font-size:19px;line-height:1.2')}
<section class="ux-hero" style="--v:${u.c}"><div class="ux-ht"><span class="ux-lg"><img src="${UJLOG2}" alt=""><b>${u.sh}</b></span><div><small>Unité de formation et de recherche</small><h2>${u.s}</h2></div></div><div class="ux-rs"><div><b>${u.l1.length+(u.l2?u.l2.length:0)}</b><span>Licences</span></div><div><b>${u.ms.length}</b><span>Masters</span></div><div><b>${u.dm.length}</b><span>Spécialités doctorales</span></div></div></section>
<h3 class="ux-h" style="--c:#1D4ED8">Accès rapide</h3>
<div class="ux-qa"><button data-go="c1" style="--c:#1D4ED8"><i>${I('cal',22)}</i><b>Emploi du temps</b><small>Cours de la semaine</small></button>${u.mo?`<button data-web="${u.mo}" data-wt="Cours en ligne" style="--c:#7C3AED"><i>${I('lap',22)}</i><b>Cours en ligne</b><small>Plateforme UJLoG</small></button>`:''}<button data-web="${u.u}" data-wt="${u.n}" style="--c:#C2410C"><i>${I('ext',22)}</i><b>Site de l’UFR</b><small>ujlog.edu.ci</small></button></div>
${uxA(u)}
<h3 class="ux-h" style="--c:${u.c}">Choisis ton niveau<span>De la L1 au doctorat</span></h3>
<div class="ux-lv" role="group" aria-label="Niveau">${LV.map(([k,x],j)=>`<button data-ulv="${k}" aria-pressed="${j==0}" style="--c:${UXC[j]}">${x}</button>`).join('')}</div>
${LV.map(([k],j)=>`<div class="ux-p" data-ulv="${k}"${j?' hidden':''}>${uxLv(u,k,j)}</div>`).join('')}
<h3 class="ux-h" style="--c:#0E7490">Cours, TD et TP<span>Tous niveaux</span></h3>
${uxT}
<button class="ux-cta" style="--c:${u.c}" data-web="${u.u}" data-wt="${u.n}">${I('ext',17)}Ouvrir le site de l’UFR</button>
<p class="mu" style="font-size:12px;text-align:center;margin:4px 0 0">Source : Livret de l’étudiant 2024-2025, ujlog.edu.ci.</p>
${nav(2)}`];
const hh=`${crHd('UFR','a3')}
<section class="ufr-hero"><span class="cmp-k">UNITÉS DE FORMATION ET DE RECHERCHE</span><h2>Les UFR de l’UJLoG</h2><p>Touche une UFR pour voir ses niveaux, ses formations et ses semestres, sans quitter l’app.</p><label class="ufr-sr"><input id="ufr-q" type="search" placeholder="Rechercher une filière, un master…" autocomplete="off"></label><div class="cmp-ch"><span>L1 → Doctorat</span><span>S1 à S6</span><span>60 CECT / an</span></div></section>
<details class="ufr-d ufr-lmd" style="--v:#4F46E5"><summary><span class="ufr-i">${I('cap',24)}</span><span class="ufr-s"><b>Comment sont organisées les études</b><small>Licence, Master, Doctorat (LMD)</small></span><span class="ufr-c">${I('chv',18)}</span></summary><div class="ufr-b"><div class="ufr-g3"><div><b>Licence</b><span>6 semestres</span><small>180 CECT</small></div><div><b>Master</b><span>4 semestres</span><small>120 CECT</small></div><div><b>Doctorat</b><span>6 semestres</span><small>après le Master</small></div></div>${ues}<p class="ufr-tx">Un semestre vaut 30 CECT. Une UE est validée avec une moyenne d’au moins 10/20. Contrôle continu 40 %, examen terminal 60 %, deux sessions par semestre.</p></div></details>
${UF.map(uc).join('')}
<p class="mu ufr-none" id="ufr-none" hidden style="font-size:13px;text-align:center;margin:4px 0">Aucune filière trouvée dans les UFR. Essaie un autre mot.</p>
<p class="mu" style="font-size:12px;text-align:center;margin:4px 0 0">Source : Livret de l’étudiant 2024-2025, ujlog.edu.ci. Les intitulés d’UE et d’ECUE par semestre sont dans les cours de la plateforme.</p>
${nav(2)}`,k0=S.findIndex(x=>x[0]==='q0');if(k0>-1){S[k0][2]=hh;S.splice(k0+1,0,...UF.map(up))}}

S.push(['a41','CROU-D',`${espHd(ESP[0])}
${espUne(ESP[0])}
<div class="cxsec"><h3>Accès rapide</h3></div>
<div class="qk">${[['bed','Logement','a22'],['fork','Restauration','a23'],['coin','Bourses','a32'],['med','Santé','a27']].map(([i,l,g])=>`<button ${g?`data-go="${g}"`:`data-soon="${l}"`}><i>${I(i,24)}</i>${l}</button>`).join('')}</div>
<div class="cxsec"><h3>Échéances</h3><span class="mu" style="font-size:12.5px">${spNb(MEDL)} à venir</span></div>
${spEch(MEDL)}
<div class="cxsec"><h3>Opportunités</h3><button data-go="a25">Voir tout</button></div>
<div class="cxsc">${[['Programme Erasmus+ mobilité étudiante','11/12/2026',0],['Bourse d’excellence Campus France 2026','11/11/2026',1]].map(([t,d,k])=>`<figure data-go="a25"><img src="${PO[k]}" alt="" style="object-position:50% ${k?18:50}%"><figcaption>${t}<br><span class="mu" style="font-size:12px">Date limite : ${d}</span></figcaption></figure>`).join('')}</div>
${espGp(ESP[0])}
<button class="spcta" data-web="https://www.croudaloa.ci" data-wt="CROU-D">Ouvrir le site croudaloa.ci${I('ext',17)}</button>
<div class="card"><button class="li" data-go="a28" style="width:100%">${ico('grp','#2F4B76')}<div class="fl"><b>Découvrir le CROU-D</b><span class="mu">Histoire, organisation, qui fait quoi</span></div>${I('chv')}</button></div>
<section class="cxbx"><h3>Nous contacter</h3><div class="cxct"><div><span>Horaires de service</span>07h30 – 12h30 · 13h30 – 16h30, du lundi au vendredi</div><div><span>Où nous trouver</span>Daloa, quartier Tazibouo Université</div></div><button class="g3" style="background:var(--c)" data-soon="Écrire au CROU-D">Écrire au CROU-D</button></section>
${nav(2)}`]);
S.push(['a19','Procédure de demande',`${BG(330,40)}
${crHd('Procédure de demande','a41')}
<div class="mu" style="padding:0 4px">Votre parcours, de l’inscription à l’admission définitive.</div>
${crTl(0)}
<div class="cxav">${I('bell',20)}<div><b>Dossier incomplet</b><p>Un dossier incomplet n’est pas pris en compte par le CROU-D.</p></div></div>
<button class="btn" data-web="https://www.croudaloa.ci/procedure-demande" data-wt="Procédure de demande">Voir la procédure sur croudaloa.ci</button>
<button class="btn s" data-go="a20">Voir les documents à fournir</button>
${nav(2)}`]);
const CRD=[['Formulaire de demande renseigné en ligne et imprimé',''],['Fiche d’engagement renseignée, imprimée et signée, avec la mention « lu et approuvé »',''],['Photocopie de la CNI',''],['Photocopie de la carte d’étudiant ou du reçu d’inscription de l’année en cours',''],['Photocopie du relevé de notes du Bac (1re année), de l’attestation de réussite du niveau antérieur ou du PV (N-1), pièces justifiant l’admission','Admission'],['Photocopie de la fiche d’inscription du Ministère (année en cours)','1re année'],['Être à jour du paiement du loyer antérieur','Réadmission'],['Chemise à rabat : bleue pour les filles, rouge pour les garçons',''],['Photocopie de la carte du bénéficiaire des œuvres universitaires (Restocarte)',''],['Copie du règlement intérieur signée, avec la mention « lu et approuvé »',''],['Photocopie du reçu d’inscription à l’université','Doctorants'],['Photocopie de l’attestation de réussite au test de sélection en master 1 ou doctorat 1','Master 1 / Doctorat 1']];
S.push(['a20','Documents à fournir',`${BG(330,40)}
${crHd('Documents à fournir','a41')}
<div class="chips" role="group" aria-label="Filtrer par profil">${['Tous','Admission','Réadmission','1re année','Master / Doctorat'].map((c,k)=>`<button class="chip" data-cf="${c}" aria-pressed="${k==0}">${c}</button>`).join('')}</div>
<article class="card pad"><div class="row"><b class="fl" id="ckn" style="font:700 16px var(--h)">0 / 12 prêts</b><span class="mu" style="font-size:12px">Touchez pour cocher</span></div><div class="crp dk" style="margin-top:10px"><i id="ckp" style="width:0"></i></div></article>
<div class="card">${CRD.map(([t,g])=>`<button class="crk" data-ck data-g="${g}" aria-pressed="false"><span class="crx">${I('chk',16)}</span><div class="fl"><b style="font-weight:600;font-size:15px">${t}</b>${g?`<div style="margin-top:6px"><span class="tag" style="background:var(--paper);color:var(--mu)">${g}</span></div>`:''}</div></button>`).join('')}</div>
${nav(2)}`]);
const PH=['assets/0b7f0947297f.webp', 'assets/cb8578b9a0e0.webp', 'assets/caf3f10e4d07.webp', 'assets/6b1b32aba02e.webp'];
S.push(['a22','Logement',`${BG(330,40)}
${crHd('Logement','a41')}
<div class="cxst"><div><b>16</b><span>Bâtiments</span></div><div><b>784</b><span>Chambres</span></div><div><b>1514</b><span>Lits</span></div></div>
<div class="cxav">${I('bell',20)}<div><b>Paiement du loyer · 54 000 FCFA</b><p>À partir du <b style="display:inline;font-size:13px">lundi 9 novembre 2026</b>, au guichet de l’Agent Comptable, pour les demandes validées en ligne.</p><p>Inscription en ligne : 6 au 23 octobre · Dépôt physique : jusqu’à nouvel ordre.</p></div></div>
<div class="cxsec"><h3>Ma demande</h3></div>
${crTl(2)}
<section class="cxbx"><h3>Faire la demande</h3><p class="mu" style="font-size:13px;margin:0 0 10px">Tout se passe directement sur le site officiel du CROU-D.</p><button class="g1" data-web="https://www.croudaloa.ci/hebergement" data-wt="Demande de logement">Ouvrir croudaloa.ci</button></section>
<div class="card"><button class="li" data-go="a20" style="width:100%">${ico('chk','#16A34A')}<div class="fl"><b>Documents à fournir</b><span class="mu">Liste interactive selon votre profil</span></div>${I('chv')}</button><button class="li" data-go="a19" style="width:100%">${ico('doc','#C26A00')}<div class="fl"><b>Procédure de demande</b><span class="mu">Six étapes, de l’inscription au loyer</span></div>${I('chv')}</button><button class="li" data-go="a30" style="width:100%">${ico('shd','#B45309')}<div class="fl"><b>Règlement intérieur</b><span class="mu">Droits, obligations, sanctions, âge maximum</span></div>${I('chv')}</button></div>
${nav(2)}`]);
S.push(['a23','Restauration',`${BG(330,40)}
${crHd('Restauration','a41')}
<section class="cxr rst" id="rst" data-o="1"><div class="seg" role="group" aria-label="Restaurant">${['Cité Kalilou','Campus UJLoG'].map((n,k)=>`<button data-rs="${k}" aria-pressed="${k==0}">${n}</button>`).join('')}</div><div><div class="stt"><i class="sd"></i><b id="rsT">Ouvert</b></div><p class="ss" id="rsS"></p></div><div class="rs"><div><b id="rsP">200</b><span>places</span></div><div><b id="rsN">2</b><span>services</span></div><div><b>200</b><span>FCFA / repas</span></div></div><p id="rsH" style="font-size:12.5px"></p></section>
<section class="cxrc"><span style="font-size:12px;font-weight:700;opacity:.9">MA RESTOCARTE · carte à puce rechargeable</span><div style="display:flex;align-items:baseline;gap:8px"><b>1 600 FCFA</b><span>soit 8 repas</span></div><p>Porte-monnaie électronique : 200 FCFA par repas. Le rechargement se fait pour l’instant à la caisse du restaurant.</p><div class="row" style="gap:8px"><button class="btn em" style="flex:1" data-soon="Recharge en ligne">Recharger</button></div></section>
<section class="card pad" id="rmm"><h3 class="cxh3">Menu de la semaine</h3><div class="cxdy" id="rmd"></div><div class="seg" style="margin-top:10px"><button data-ml="0" aria-pressed="true">Déjeuner</button><button data-ml="1" aria-pressed="false">Dîner</button></div><div class="rmw"><img id="rmp" src="${PH[3]}" alt="Tchèpe au poulet" hidden><b id="rmn"></b><span class="mu" id="rmx"></span></div><p class="mu" style="font-size:12px;margin-top:10px">Exemple de menu : le service restauration pourra le publier ici chaque semaine.</p></section>
<section class="card pad"><h3 class="cxh3">Votre avis sur le repas</h3><div class="seg">${['Très bon','Correct','À améliorer'].map(x=>`<button data-rate aria-pressed="false">${x}</button>`).join('')}</div><button class="btn s" data-soon="Signalement hygiène ou quantité" style="margin-top:10px">Signaler un problème</button><p class="mu" style="font-size:12px;margin-top:8px">Qualité, quantité, hygiène : vos retours aident le service restauration.</p></section>
<div class="cxsec"><h3>Les restaurants</h3></div>
<div class="cxsc">${[['Cité Kalilou · 200 places',0],['Pavillon 01 · 150 places',1],['Pavillon 03 · 150 places',2]].map(([t,k])=>`<figure><img src="${PH[k]}" alt="${t}"><figcaption>${t}</figcaption></figure>`).join('')}</div>
<section class="card pad"><h3 class="cxh3">Conditions d’accès</h3><div class="cxck">${['Être étudiant','Détenir la carte de bénéficiaire (Restocarte)','Respecter les horaires d’ouverture','Observer les règles d’hygiène et de sécurité alimentaire'].map(x=>`<div><i>${I('chk',13)}</i><span>${x}</span></div>`).join('')}</div></section>
${cxDt('À propos du service','<p>Mission : offrir des repas sains, variés et équilibrés aux étudiants. Restaurant moderne livré par l’État, inauguré le 23 février 2021 et rattaché à la S/DAF du CROU-D.</p>')}
${nav(2)}`]);
S.push(['a24','Réseau des CROU',`${BG(330,40)}
${crHd('Réseau des CROU','a41')}
<div class="mu" style="padding:0 4px">Les centres régionaux et structures partenaires du réseau des œuvres universitaires.</div>
<div class="cxg2">${PRT.map(([c,n,u])=>`<div class="cxn"><img src="${u}" alt="Logo ${c}"><b>${n}</b><i>${c}</i></div>`).join('')}</div>
${nav(2)}`]);
S.push(['a25','Opportunités estudiantines',`${BG(330,40)}
${crHd('Opportunités','a41')}
<div class="mu" style="padding:0 4px">Des opportunités pour accompagner votre réussite universitaire.</div>
${cxOp()}
${nav(2)}`]);
// 5 Bourses, secours et suivi (source : DOB-MESRS, www.dob-mesrs.ci)
const DOBX='https://inscription.mesrs-ci.net';
const BSC=[
{t:'Université ou grande école privée',l:[],o:DOBX+'/dob/bci',pdf:DOBX+'/web/content/991420?unique=8735ae90710a5a1a2600dff5263463a4a843d413&download=true'},
{t:'Université publique : Man, San Pédro, Bondoukou',l:['Université de Man : École des mines et de l’énergie, École de la métallurgie des métaux','Université de San Pédro : EBTP, EPGE, EICN','Université de Bondoukou : ENSAU'],a:DOBX+'/dob/bci/att/univ',r:DOBX+'/dob/bci/reno/public',pdf:DOBX+'/web/content/990565?unique=738934035f752c644b14905c18e9c31305ea0f0f&download=true'},
{t:'Grande école publique : ENS, INP-HB',l:['École Normale Supérieure (ENS)','Institut National Polytechnique Félix Houphouët-Boigny (INP-HB)'],a:DOBX+'/dob/bci/att/gep',r:DOBX+'/dob/bci/ren/gep',pdf:DOBX+'/web/content/991127?unique=e7dca8cd178a3d31a158033a2ad3703df714dd9b&download=true'},
{t:'Grande école publique : ESATIC, INJS, INSAAC, ASTRM, ENSEA',l:['ESATIC, INJS, INSAAC','Académie Régionale des Sciences et Techniques de la Mer (ASTRM)','ENSEA'],a:DOBX+'/dob/bci/autre/att',r:DOBX+'/dob/bci/autre/reno',pdf:DOBX+'/web/content/990869?unique=4c3d8072ded7f873ce8913a7eb065a315271938b&download=true'},
{t:'Mon établissement n’est pas cité',none:1}];
const SFX={a:DOBX+'/dob/bhci/sf',pdf:DOBX+'/web/content/897652?unique=cd71f322fb8d5789d7dbf5f4c755f095189c84e7&download=true'};
const bsA=(h,t,s)=>`<a class="bsl${s?' s':''}" href="${h}" target="_blank" rel="noopener">${t}</a>`;
const bsRes=k=>{const c=BSC[k];if(c.none)return `<h3 class="cxh3">${c.t}</h3><p class="mu" style="font-size:13.5px;margin:0 0 10px">Le communiqué de la DOB ne cite pas tous les établissements. Posez la question au service Bourses et secours financiers : la démarche se fait directement sur le site de la DOB.</p>`;
return `<h3 class="cxh3">${c.t}</h3>${c.l.length?`<ul class="bsu">${c.l.map(x=>`<li>${x}</li>`).join('')}</ul>`:'<p class="mu" style="font-size:13.5px;margin:0 0 4px">Étudiants et élèves des universités et grandes écoles privées.</p>'}<div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">${c.o?bsA(c.o,'Postuler'):bsA(c.a,'Postuler pour attribution')+bsA(c.r,'Postuler pour renouvellement')}${bsA(c.pdf,'Lire le communiqué (PDF)',1)}</div><p class="mu" style="font-size:12.5px;margin:10px 0 0">[Pièces à fournir et critères : résumé à ajouter depuis le communiqué]</p>`};
const bsSt=()=>{const a=new Date(2026,9,6),b=new Date(2026,10,7),n=new Date();return{pct:Math.round(Math.min(1,Math.max(0,(n-a)/(b-a)))*100),open:n<b}};
const TSB=[['Demande en ligne','Votre demande est enregistrée'],['Dossier reçu','Le service vérifie vos pièces'],['Examen','Étude de votre dossier'],['Décision','Réponse publiée'],['Clôture','Paiement ou notification']];
const tsTl=(L,n)=>`<div class="crt">${L.map(([t,x],k)=>`<div class="crs${k<n?' dn':k==n?' on':''}"><span class="crd">${k<n?I('chk',14):k+1}</span><div class="card pad"><b style="font:700 14px/1.25 var(--h)">${t}</b><p class="mu" style="margin:4px 0 0;font-size:12.5px">${x}</p></div></div>`).join('')}</div>`;
const tsPr=(n,t)=>`<div class="tsp">${Array.from({length:t},(_,i)=>`<i class="${i<n?'d':i==n?'c':''}"></i>`).join('')}</div>`;
const tsCard=(ic,c,t,s,tg,tc,pr,lb,tl,rel)=>`<article class="card pad"><div class="row" style="gap:10px">${ico(ic,c)}<div class="fl"><b style="font:700 15px/1.2 var(--h);display:block">${t}</b><span class="mu" style="font-size:12.5px">${s}</span></div><span class="tag${tc}">${tg}</span></div>${pr}<small class="mu">${lb}</small>${tl?`<details class="og" style="margin-top:8px"><summary><b>Voir le détail</b><span>Étapes de la demande</span></summary><div style="padding:4px 12px 12px">${tl}</div></details>`:''}${rel}</article>`;
S.push(['a32','Bourses et secours',`${BG(330,40)}
${crHd('Bourses et secours','a42')}
<section class="cxb bsh"><span class="pill"><i></i>Campagne 2026-2027</span><h2>Bourses et secours financiers</h2><p>Attribution et renouvellement des bourses d’études, secours financiers : les démarches de la Direction de l’Orientation et des Bourses (DOB).</p><div><div class="bsd"><span>6 oct.</span><i><b style="width:${bsSt().pct}%"></b></i><span>6 nov.</span></div><small style="display:block;margin-top:6px">${bsSt().open?'Sessions ouvertes jusqu’au vendredi 6 novembre 2026':'Sessions clôturées le vendredi 6 novembre 2026'}</small></div><button class="btn em" data-web="https://inscription.mesrs-ci.net/dob" data-wt="Bourses 2026-2027">Ouvrir le site de la DOB</button></section>
<div class="seg" role="group" aria-label="Type d’aide"><button data-bs="0" aria-pressed="true">Bourses</button><button data-bs="1" aria-pressed="false">Secours financiers</button></div>
<div class="bsp" id="bsB"><section class="card pad"><h3 class="cxh3">Où étudiez-vous ?</h3><p class="mu" style="font-size:13px;margin:0 0 10px">La DOB publie un communiqué par groupe d’établissements. Choisissez le vôtre.</p><div class="bso" role="radiogroup" aria-label="Établissement">${BSC.map((c,k)=>`<button role="radio" data-bsc="${k}" aria-checked="${k==0}"><span class="bsr"></span><span class="fl"><b style="font-weight:600">${c.t}</b></span></button>`).join('')}</div></section>
<section class="card pad" id="bsr" aria-live="polite">${bsRes(0)}</section>
${cxDt('Attribution ou renouvellement ?','<p><b>Attribution :</b> première demande de bourse.</p><p><b>Renouvellement :</b> vous êtes déjà boursier(ère) et reconduisez votre bourse pour 2026-2027.</p>')}</div>
<div class="bsp" id="bsS" hidden><section class="cxr" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);box-shadow:0 6px 16px rgba(109,40,217,.28)"><div class="rt"><span class="ri">${I('wal',26)}</span><div><h2>Secours financiers hors Côte d’Ivoire</h2><p>Session d’attribution 2026-2027, ouverte aux étudiants et à leurs parents</p></div></div></section>
<section class="card pad"><div style="display:flex;flex-direction:column;gap:8px">${bsA(SFX.a,'S’inscrire')}${bsA(SFX.pdf,'Lire le communiqué (PDF)',1)}</div><p class="mu" style="font-size:12.5px;margin:10px 0 0">[Conditions d’attribution : résumé à ajouter depuis le communiqué]</p></section></div>
<section class="cxbx" style="border-color:#1D4ED8"><h3 style="color:#1D4ED8">Direction de l’Orientation et des Bourses</h3><div class="cxct"><div><span>Horaires</span>Lundi au vendredi, 7h30 – 16h30</div><div><span>Où nous trouver</span>Plateau, Abidjan</div></div>${bsA('https://www.dob-mesrs.ci','Ouvrir le site de la DOB')}</section>
${nav(2)}`]);
// 4 Profil
const ogr=([n,g])=>g?`<button class="li" ${/^a\d/.test(g)?`data-go="${g}"`:`data-soon="${g}"`} style="width:100%"><span class="fl">${n}</span>${I('chv')}</button>`:`<div class="li"><span class="fl">${n}</span></div>`;
const OGS=[['Direction','Ordonnateur principal, avec ses services rattachés',[['Service Administratif'],['Service Juridique'],['Service Informatique'],['Service Communication'],['Coopération et relations extérieures'],['Bourses et secours financiers','a32'],['Gestion des ressources humaines'],['Centre médical','a27'],['Contrôle budgétaire'],['Agence comptable']]],['S/DAF','Sous-direction de l’Administration et des Finances',[['Service Financier'],['Contrats et marchés'],['Service Restauration','a23']]],['S/DAL','Sous-direction de l’Accueil et des Logements',[['Service Accueil'],['Service Logement','a22'],['Sécurité et environnement']]],['S/DASCS','Sous-direction des Activités sociales, culturelles et sportives',[['Service Social'],['Service Sports'],['Culture et vie associative']]],['S/DPM','Sous-direction du Patrimoine et de la Maintenance',[['Maintenance du patrimoine'],['Magasins et petits commerces']]]];
S.push(['a27','Santé',`${BG(330,40)}
${crHd('Santé','a41')}
<section class="cxr" style="background:linear-gradient(135deg,#0E7490,#0891B2);box-shadow:0 6px 16px rgba(14,116,144,.28)"><div class="rt"><span class="ri">${I('hrt',26)}</span><div><h2>Centre médical</h2><p>Prévention, diagnostic et traitement des maladies, suivi de la santé et gestion des urgences</p></div></div><div class="rs"><div><b>1</b><span>cabinet dentaire</span></div><div><b>1</b><span>laboratoire</span></div><div><b>1</b><span>pharmacie</span></div></div></section>
<div class="row" style="gap:8px"><button class="btn" data-soon="Rendez-vous au centre médical">Prendre rendez-vous</button><button class="btn" style="background:var(--red)" data-soon="Urgence médicale">Urgence</button></div>
<section class="card"><div style="padding:12px 14px 4px"><h3 class="cxh3" style="margin:0">Prestations</h3></div>${[['shd','Consultations préventives','#0E7490'],['plus','Consultations curatives','#15803D'],['hrt','Consultations dentaires','#7B3FA0'],['doc','Examens de laboratoire','#C26A00']].map(([i,n,c])=>`<div class="li">${ico(i,c)}<div class="fl"><b>${n}</b></div></div>`).join('')}</section>
<section class="card pad"><h3 class="cxh3">Sur le terrain</h3><div class="cxch" style="margin-top:0">${['Sensibilisations','Visites des étudiants sportifs','Visites des étudiants résidents','Visites des étudiants en stage','Assistance aux manifestations','Assistance aux compétitions'].map(x=>`<span style="background:#E0F2FE;color:#075985">${x}</span>`).join('')}</div></section>
<article class="card pad"><div class="row"><b class="fl" id="skn" style="font:700 16px var(--h)">0 / 3 prêts</b><span class="mu" style="font-size:12px">Avant de venir</span></div><div class="crp dk" style="margin:10px 0 6px"><i id="skp" style="width:0"></i></div><p class="mu" style="font-size:12.5px;margin-bottom:6px">Accès avec la carte CMU, la carte de bénéficiaire (Restocarte) ou la carte d’étudiant.</p>${['Carte d’étudiant','Justificatif d’inscription','Photo d’identité'].map(x=>`<button class="crk" data-sk aria-pressed="false" style="padding-left:0;padding-right:0"><span class="crx">${I('chk',16)}</span><div class="fl"><b style="font-weight:600;font-size:15px">${x}</b></div></button>`).join('')}</article>
<section class="cxbx" style="border-color:#0E7490"><h3 style="color:#0E7490">Contacter le centre</h3><div class="cxct"><div><span>Téléphone</span>[Numéro du centre médical]</div><div><span>Horaires</span>[Horaires de consultation]</div></div><button style="background:#0E7490" data-soon="Écrire au centre médical">Écrire au centre médical</button></section>
${nav(2)}`]);
S.push(['a28','Le CROU-D',`${BG(330,40)}
${crHd('Le CROU-D','a41')}
<section class="cxr" style="background:linear-gradient(135deg,#475569,#2D3A4F);box-shadow:0 6px 16px rgba(45,58,79,.28)"><div class="rt"><span class="ri" style="background:#fff"><img class="cxl" src="${CROUD}" alt="" style="width:36px;height:34px"></span><div><h2 style="font-size:19px">Centre Régional des Œuvres Universitaires</h2><p>Établissement public national à caractère administratif, à Daloa</p></div></div><div class="rs"><div><b>1997</b><span>création</span></div><div><b>4</b><span>sous-directions</span></div><div><b>COGES</b><span>conseil de gestion</span></div></div></section>
<div class="cxsec"><h3>Repères</h3></div>
<section class="card">${[['1997','création','Création du CROU-D','Décret n° 97-21 du 15 janvier 1997. Le décret 97-24 fixe ses attributions, son organisation et son fonctionnement.',''],['2021','restaurant','Restaurant universitaire','Inauguration du restaurant moderne livré par l’État, le 23 février 2021.',''],['Projet','décret','Nouveau décret en préparation','Attributions et organisation alignées sur les autres CROU de Côte d’Ivoire. En attendant sa signature, le COGES a autorisé l’organigramme actuel.','background:#D97706;font-size:15px']].map(([d,s,n,x,st])=>`<div class="li" style="align-items:flex-start;padding:12px 14px"><div class="dt" style="width:58px;${st}">${d}<small>${s}</small></div><div class="fl"><b>${n}</b><span class="mu" style="font-size:13px">${x}</span></div></div>`).join('')}</section>
<div class="cxsec"><h3>Pour vous, étudiant</h3></div>
<section class="card">${[['bed','Logement','Sous-direction de l’Accueil et des Logements','a22','#16A34A'],['fork','Restauration','Sous-direction de l’Administration et des Finances','a23','#EA580C'],['hrt','Santé','Centre médical','a27','#0E7490'],['coin','Bourses et secours','Service rattaché à la Direction','a32','#1D4ED8'],['grp','Sport, culture, vie associative','Sous-direction des Activités sociales','Vie associative','#7B3FA0']].map(([i,n,s,g,c])=>`<button class="li" ${/^a\d/.test(g)?`data-go="${g}"`:`data-soon="${g}"`} style="width:100%">${ico(i,c)}<div class="fl"><b>${n}</b><span class="mu" style="font-size:13px">${s}</span></div>${I('chv')}</button>`).join('')}</section>
<div class="cxsec"><h3>Organisation</h3></div>
${OGS.map(([t,s,l],k)=>`<details class="og"${k==0?' open':''}><summary><b>${t}</b><span>${s}</span></summary>${l.map(ogr).join('')}</details>`).join('')}
${nav(2)}`]);
const RG=[['Admission et réadmission','Articles 1 à 8',['Être étudiant(e) d’un établissement d’enseignement supérieur public ou privé, régulièrement inscrit(e) en formation initiale.','Admission : anciens étudiants avec tous leurs crédits validés (80 % au moins en maths ou physique) ; nouveaux bacheliers avec une bonne moyenne au BAC.','Réadmission : 80 % au moins des crédits validés, règlement respecté, loyer de l’année précédente payé en totalité.','Inclusion : étudiants en situation de handicap, membres de clubs culturels et sportifs, cas sociaux attestés par le service social.','Les réadmissions passent avant les admissions, qui sont limitées au nombre de lits disponibles.','Exclusion immédiate : héberger un squatteur ou commettre une faute lourde sur l’espace universitaire.']],['Mes droits','Articles 9 à 16',['Inventaire du mobilier à l’attribution de la chambre, en deux exemplaires signés dont un pour vous.','Mobilier personnel autorisé s’il est enregistré au préalable auprès de la direction de la cité.','Visites décentes autorisées, sans gêner les voisins : vous répondez de vos visiteurs.','Réunions en salle commune après accord du chef de cité ; affiches après son visa.','Travaux ou changement de serrure sur autorisation du chef de cité, avec un double des clés déposé.','Assurance vol possible. Le chef de cité ou le concierge peut entrer dans les chambres pour les besoins du service.']],['Mes obligations','Articles 17 à 29',['Payer la totalité du loyer de l’année à l’agence comptable avant l’admission ou la réadmission.','Ne pas emporter le mobilier, modifier les installations, ni écrire ou afficher sur les murs, portes et meubles.','Garder la chambre propre, fermer les robinets, éteindre la lumière, signaler tout matériel défaillant.','Interdits : animaux, sous-location, réchauds et fers à repasser. Tolérés : ventilateur, télévision, petit réfrigérateur.','Après minuit, contrôle obligatoire à l’entrée. Absence de plus de deux semaines : prévenir l’administration.','Fin d’année : état des lieux avec le chef de cité, puis « bon de sortie ». Perte ou dégradation : plus de réadmission possible.']],['Vie collective','Articles 30 à 40',['Un comité de résidents par cité ; les résidents peuvent former des associations, dont les statuts sont approuvés par le Directeur.','Foyers réservés aux conférences, réunions et activités culturelles autorisées ; dates et objet communiqués 72 h à l’avance.','Attitude correcte envers le personnel et les autres résidents ; bruit, visites perturbatrices et commerce interdits.','Tenue correcte et discipline dans le restaurant, les foyers et les installations sportives et culturelles.','Pour tout problème, s’adresser d’abord au chef de cité ; la Direction n’intervient qu’en dernier ressort.']],['Sécurité et santé','Articles 41 à 46',['Maladie grave ou contagieuse : hospitalisation ou retour en famille, puis certificat médical sans contre-indication à la vie en collectivité.','À l’entrée de la cité : carte d’étudiant et carte de bénéficiaire ; les visiteurs déposent une pièce d’identité.','Aucun matériel du CROU-D ne sort sans bon visé par le chef de cité ; l’accès des véhicules est réglementé.']],['Discipline et sanctions','Articles 47 à 54',['Conseil de discipline présidé par le Sous-Directeur de l’Accueil et des Logements, avec recours possible auprès du Directeur.','Expulsion immédiate : tabac, alcool et drogues, concubinage et vie de famille, agression du personnel de la cité ou du CROU-D.','Vol en flagrant délit : perte des bénéfices des œuvres universitaires, sans appel.','Victime d’un vol ou d’une agression : prévenir l’administration de la cité, ne pas se faire justice.','Autres fautes : avertissement écrit, puis exclusion en cas de récidive dans l’année.']]];
const LVA=[['L1','Licence 1',22],['L2','Licence 2',23],['L3','Licence 3',24],['M1','Master 1',25],['M2','Master 2',26],['D1','Doctorat 1',28],['D2','Doctorat 2',29],['D3','Doctorat 3',30]];
S.push(['a30','Règlement intérieur',`${BG(330,40)}
${crHd('Règlement intérieur','a22')}
<div class="mu" style="padding:0 4px">Cités universitaires du CROU-D : 56 articles, résumés ici. À lire et à imprimer obligatoirement.</div>
<section class="card pad"><h3 class="cxh3">Âge maximum selon mon niveau</h3><div class="chips" style="margin:0 -14px 10px">${LVA.map(([c,n,a],k)=>`<button class="chip" data-lv="${k}" data-a="${a}" data-n="${n}" aria-pressed="${k==0}">${c}</button>`).join('')}</div><b id="lvr" style="font:800 22px var(--h)">22 ans</b><p class="mu" style="font-size:12.5px;margin-top:4px">pour être admis(e) en <span id="lvn">Licence 1</span>, en plus d’être inscrit(e) en formation initiale.</p></section>
${RG.map(([t,s,l],k)=>`<details class="og"${k==0?' open':''}><summary><b>${t}</b><span>${s}</span></summary><ul class="rgl">${l.map(x=>`<li>${x}</li>`).join('')}</ul></details>`).join('')}
<button class="btn" data-soon="Téléchargement du règlement (PDF)">Télécharger le PDF complet</button>
${nav(2)}`]);
S.push(['a4','Profil',`${BG(60,50)}
<div id="mypr" style="display:flex;flex-direction:column;gap:10px">${myPr(0)}</div><input type="file" id="cvfile" accept="image/*" hidden>
${nav(3)}<div id="mymenu" class="mymenu" hidden><div id="mmhome"><div class="mmtop">${BG(330,70)}<div class="mmh"><button class="ib" data-mmx="1" aria-label="Fermer le menu" style="transform:scaleX(-1)">${I('chv',22)}</button><span class="mmslot"><span class="mmlogo" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></span></span><button class="ib ujm-open" data-msg="1" aria-label="Messages"><svg class="i" viewBox="0 0 24 24" style="width:24px;height:24px"><path d="M12 3.500c4.700 0 8.500 3.400 8.500 7.700S16.700 18.900 12 18.900c-.9 0-1.700-.1-2.500-.4l-4 2 1-3.600C5 15.700 3.500 13.600 3.500 11.200c0-4.300 3.800-7.700 8.500-7.700z" fill="currentColor" fill-opacity=".28"/><path d="M8.500 11.200h.01M12 11.200h.01M15.500 11.200h.01" stroke-width="2.6"/></svg><span class="ujmb" hidden></span></button><span class="mmsp" aria-hidden="true"></span><h2>Menu</h2></div><div id="mmpf">${mmPf()}</div></div><div class="mmqs">${mmQ('qr','Code QR','data-mmp="qr"')}${mmQ('bkm','Enregistrés','data-go="a16"')}${mmQ('bell','Notifications','data-go="a10"')}${mmQ('gear','Réglages','data-mmp="set"')}</div>${mmS('Outils personnels')}${mmC([mmR('cht','Messages','','data-msg="1"'),mmR('clk','Centre des activités','','data-mmp="act"'),mmR('qr','Ton code QR','','data-mmp="qr"'),mmR('doc','Documents et démarches','','data-v72m="1"')])}${mmS('Profil')}${mmC([mmR('pen','Modifier le profil','','data-pedit="1"'),mmR('vbd','Faire vérifier mon profil'),mmR('hrt','Ajouter des éléments à la une')])}${mmS('Paramètres')}<div class="card"><button class="li" id="dmode" role="switch" aria-checked="false" style="width:100%;text-align:left"><svg class="i" viewBox="0 0 24 24" style="width:22px;height:22px"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg><div class="fl"><b>Mode sombre</b></div><span class="sw"></span></button>${mmR('bell','Notifications','','data-go="a10"')}${mmR('bkm','Publications enregistrées','','data-go="a16"')}${mmR('globe','Langue')}${mmR('usrs','Accessibilité')}${mmR('coin','Économiseur de données')}${mmR('cld','Contenus hors ligne')}</div>${mmS('Compte et confidentialité')}${mmC([mmR('usr','Compte'),mmR('usr','Compte privé'),mmR('shd','Centre de confidentialité'),mmR('shd','Comptes bloqués'),mmR('clk','Temps d’écran et bien-être')])}${mmS('Plus de paramètres')}${mmC([mmR('book','Comment ça marche'),mmR('gear','Tous les paramètres','','data-mmp="set"')])}${mmS('Aide et assistance')}${mmC([mmR('pho','Centre d’aide'),mmR('cht','Espace Assistance'),mmR('shd','Statut du compte'),mmR('flt','Signaler un problème'),mmR('book','À propos'),mmR('doc','Conditions et politiques')])}${mmC([mmR('plus','Ajouter un compte'),mmR('shd','Se déconnecter')])}</div>${mmP('sol','Solde',`<div id="solb" style="display:flex;flex-direction:column;gap:10px"></div>`)}${mmP('act','Centre des activités',`${mmC([mmR('clk','Historique de visionnage','','data-hist="1"'),mmR('hrt','Photos aimées'),mmR('doc','Commentaires'),mmR('shr','Republications'),mmR('doc','Archive')])}`)}${mmP('qr','Ton code QR',`<div class="card pad" style="text-align:center"><div id="mmqr" style="width:200px;height:200px;margin:0 auto 10px"></div><b style="font:800 18px var(--h)">@vous</b><p class="mu" style="font-size:13px">Scannez pour ouvrir mon profil</p><button class="btn" data-soon="Partager le code QR" style="margin-top:10px">Partager</button></div>`)}${mmP('pro','Tableau de bord professionnel',`<div class="chips" style="margin:0 -14px"><button class="chip" data-soon="Analytics" aria-pressed="false">Analytics</button><button class="chip" data-soon="Contenu" aria-pressed="false">Contenu</button><button class="chip" data-soon="Communauté" aria-pressed="false">Communauté</button></div><div class="card pad"><b style="font:800 18px var(--h)">@vous</b><p class="mu" style="font-size:13px">0 suivi · 0 follower</p></div><h3 style="font:800 20px var(--h);margin:8px 2px 0">Analytics</h3><div class="seg"><button aria-pressed="true">28 jours</button><button aria-pressed="false">7 jours</button><button aria-pressed="false">Aujourd’hui</button></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="card pad"><span class="mu" style="font-size:12.5px">Vues</span><div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px"><b style="font:800 21px var(--h)">335 746</b><b style="color:#16A34A;font-size:13px">↑155%</b></div></div><div class="card pad"><span class="mu" style="font-size:12.5px">Conversations démarrées</span><div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px"><b style="font:800 21px var(--h)">39</b><b style="color:#16A34A;font-size:13px">↑77%</b></div></div><div class="card pad"><span class="mu" style="font-size:12.5px">Interactions</span><div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px"><b style="font:800 21px var(--h)">19 068</b><b style="color:#16A34A;font-size:13px">↑271%</b></div></div><div class="card pad"><span class="mu" style="font-size:12.5px">Suivis gagnés</span><div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px"><b style="font:800 21px var(--h)">181</b><b style="color:#16A34A;font-size:13px">↑145%</b></div></div></div><h3 style="font:800 20px var(--h);margin:8px 2px 0">Contenu</h3><p class="mu" style="font-size:13px;margin:-6px 2px 0">Dernière publication</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="card pad"><b>[Titre de la publication]</b><p class="mu" style="font-size:12.5px;margin-top:6px">[Date] · Public</p></div><div style="display:flex;flex-direction:column;gap:8px"><div class="card pad"><span class="mu" style="font-size:12.5px">Vues</span><div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px"><b style="font:800 21px var(--h)">202</b><b style="color:#DC2626;font-size:13px">↓-89%</b></div></div><div class="card pad"><span class="mu" style="font-size:12.5px">Interaction</span><div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px"><b style="font:800 21px var(--h)">1</b><b style="color:#16A34A;font-size:13px"></b></div></div><div class="card pad"><span class="mu" style="font-size:12.5px">Suivis gagnés</span><div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px"><b style="font:800 21px var(--h)">0</b><b style="color:#16A34A;font-size:13px"></b></div></div></div></div><h3 style="font:800 20px var(--h);margin:8px 2px 0">Communauté</h3><p class="mu" style="font-size:13px;margin:-6px 2px 0">Commentaires qui sortent du lot</p><div class="card"><div class="li"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I('usr',20)}</span><div class="fl"><b>[Étudiant] · 2 j</b><span class="mu" style="font-size:13px">[Commentaire sur une publication]</span></div></div><div class="li"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I('usr',20)}</span><div class="fl"><b>[Étudiant] · 2 j</b><span class="mu" style="font-size:13px">[Commentaire sur une publication]</span></div></div></div><h3 style="font:800 20px var(--h);margin:8px 2px 0">Obtenir une aide personnalisée</h3><div class="chips" style="margin:0 -14px;flex-wrap:wrap"><button class="chip" data-soon="Comment gagner des followers ?" aria-pressed="false">Comment gagner des followers ?</button><button class="chip" data-soon="Quel est le meilleur moment pour publier ?" aria-pressed="false">Quel est le meilleur moment pour publier ?</button><button class="chip" data-soon="Consulter le statut de mon compte" aria-pressed="false">Consulter le statut de mon compte</button></div><h3 style="font:800 20px var(--h);margin:8px 2px 0">Autre</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="card pad" data-soon="Accueil de l’assistance" style="text-align:left"><b>Accueil de l’assistance</b></button><button class="card pad" data-soon="Autres outils" style="text-align:left"><b>Autres outils</b></button></div>`)}${mmP('prof','Paramètres du profil',`${mmC([mmR('pen','Modifier','','data-pedit="1"'),mmR('shd','Statut du profil'),mmR('vbd','Faire vérifier mon profil'),mmR('hrt','Ajouter des éléments à la une'),mmR('news','Examiner les publications et les identifications'),mmR('se','Rechercher','','data-go="a12"'),mmR('plus','Inviter des personnes à entrer en contact')])}<div class="card pad"><b style="font:800 18px var(--h)">Lien vers votre profil</b><p class="mu" style="font-size:13px;margin:2px 0 8px">Votre lien personnalisé sur My UJLoG.</p><b class="mono" style="font-size:13px">ujlog.app/@vous</b><button class="btn s" data-soon="Copier le lien" style="margin-top:10px">Copier le lien</button></div>`)}${mmP('set','Paramètres et confidentialité',`${mmS('Application')}<div class="card"><button class="li" data-go="a10" style="width:100%;text-align:left">${I('bell')}<div class="fl"><b>Notifications</b></div>${I('chv')}</button><button class="li" data-go="a16" style="width:100%;text-align:left">${I('bkm')}<div class="fl"><b>Publications enregistrées</b></div>${I('chv')}</button><button class="li" id="adm" role="switch" aria-checked="false" style="width:100%;text-align:left">${I('shd')}<div class="fl"><b>Aperçu responsable</b><span class="mu" style="font-size:13px">Outils du menu des publications</span></div><span class="sw"></span></button></div>${mmS('Compte')}${mmC([mmR('usr','Compte'),mmR('shd','Sécurité et autorisations'),mmR('doc','Gérer les publications')])}${mmS('Confidentialité')}${mmC([mmSw('usr','Compte privé'),mmR('plus','Messages directs'),mmR('doc','Commentaires'),mmR('shd','Comptes bloqués')])}${mmS('Assistance')}${mmC([mmR('book','Comment ça marche'),mmR('pho','Centre d’aide'),mmR('doc','Conditions et politiques')])}${mmS('Connexion')}${mmC([mmR('shd','Se déconnecter')])}<p class="mu" style="text-align:center;font-size:12px">My UJLoG v1.0</p>`)}<input type="file" id="avfile" accept="image/*" hidden></div>`]);
S.push(['a50','Mon espace étudiant',`${BG(60,50)}
<div class="row"><button class="ib" data-go="a1" aria-label="Retour" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:22px">Mon espace étudiant</h1></div>
<div style="display:flex;flex-direction:column;gap:10px">
<div class="qk">${[['wal','Ma carte','a5'],['cap','Scolarité','a6'],['clk','Emploi du temps',''],['chk','Résultats','']].map(([i,l,g])=>`<button ${g?`data-go="${g}"`:`data-soon="${l}"`}><i>${I(i,24)}</i>${l}</button>`).join('')}</div>
<button class="td" data-soon="Emploi du temps"><div class="tm">[08:00]</div><div class="fl"><small>Aujourd’hui · prochain cours</small><b>[Nom du cours]</b><small>[Salle] · [Enseignant]</small></div>${I('chv',20)}</button>
<div class="card"><div class="li">${I('pho')}<div class="fl"><span class="mu" style="font-size:13px">Mobile</span><b class="mono">[+225 00 00 00 00 00]</b></div></div><div class="li">${I('shd')}<div class="fl"><span class="mu" style="font-size:13px">UJ-ID</span><b class="mono">[ZIBD0000000000]</b></div></div></div>
<h3 style="font:800 16px var(--h);margin:10px 2px 0">Découvrir l’université</h3>
<div class="card">${[['doc','Histoire','De la création à aujourd’hui','a14'],['hrt','Partenaires','Soutiens de l’université','']].map(([i,t,x,g])=>`<button class="li" ${g?`data-go="${g}"`:`data-soon="${t}"`} style="width:100%;text-align:left">${I(i)}<div class="fl"><b>${t}</b><span class="mu" style="font-size:13px">${x}</span></div>${I('chv')}</button>`).join('')}</div>
<div id="mb"></div>

${seg(['Scolarité','Autres frais'])}
<div class="card pad" style="text-align:center;padding:14px"><div class="ic" style="background:var(--mint);color:var(--g);margin:0 auto 10px;border-radius:50%">${I('chk')}</div><b style="font-size:16px">Aucune cotisation en attente</b><p class="mu" style="margin:2px 0 14px">Vos paiements apparaîtront ici.</p><button class="btn" data-go="a6">Payer ma cotisation</button></div>
</div>
${nav(0)}`]);
// 5 Carte
const qr=(()=>{let o='',s=7;for(let y=0;y<21;y++)for(let x=0;x<21;x++){const f=(x<7&&y<7)||(x>13&&y<7)||(x<7&&y>13);let v;if(f){const a=x>13?x-14:x,b=y>13?y-14:y;v=a==0||a==6||b==0||b==6||(a>1&&a<5&&b>1&&b<5)}else{s=(s*1103515245+12345)&0x7fffffff;v=(s>>8)%2==0}o+=`<i class="${v?'':'o'}"></i>`}return o})();
const qrS=(()=>{let o='',s=7,c=235/21;for(let y=0;y<21;y++)for(let x=0;x<21;x++){const f=(x<7&&y<7)||(x>13&&y<7)||(x<7&&y>13);let v;if(f){const a=x>13?x-14:x,b=y>13?y-14:y;v=a==0||a==6||b==0||b==6||(a>1&&a<5&&b>1&&b<5)}else{s=(s*1103515245+12345)&0x7fffffff;v=(s>>8)%2==0}if(v)o+=`<rect x="${(x*c).toFixed(1)}" y="${(y*c).toFixed(1)}" width="${(c+.3).toFixed(1)}" height="${(c+.3).toFixed(1)}"/>`}return o})();
const ucRow=(l,v,y,sm)=>`<span class="ucl" style="top:${y}%">${l}</span><span class="ucv${sm?' sm':''}" style="top:${y}%">${v}</span>`;
S.push(['a5','Carte d’étudiant',`${BG(330,40)}
<div class="row"><button class="ib" data-go="a50" aria-label="Retour à mon espace" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Ma carte</h1></div>
<button class="ucw" data-flip="1" aria-label="Retourner la carte (recto)"><span class="uci">
<span class="ucf"><svg class="ucg" viewBox="0 0 1616 1024" preserveAspectRatio="none" aria-hidden="true" font-family="Arial,Helvetica,sans-serif" fill="#14181F"><defs><linearGradient id="ucGh" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".3" stop-color="#8FD27A"/><stop offset="1" stop-color="#2E9B3E"/></linearGradient><linearGradient id="ucGo" x1="0" x2="1"><stop offset="0" stop-color="#F08A24" stop-opacity="0"/><stop offset=".6" stop-color="#F08A24"/></linearGradient><path id="ucA1" d="M213,787A112,112 0 0 1 437,787"/><path id="ucA2" d="M200,787A125,125 0 0 0 450,787"/></defs>
<rect width="1616" height="1024" fill="#F5F7F9"/><g fill="none" stroke="#7C8AA5" stroke-opacity=".26" stroke-width="2">${Array.from({length:42},(_,i)=>`<circle cx="810" cy="560" r="${30+i*30}"/>`).join('')}</g>
<rect x="520" width="1096" height="192" fill="url(#ucGh)"/><rect x="880" y="203" width="736" height="50" fill="url(#ucGo)"/>
<image href="assets/c8b84d766d76.webp" x="62" y="38" width="303" height="287"/>
<g font-weight="700" text-anchor="middle"><text x="752" y="50" font-size="36"  textLength="640" lengthAdjust="spacingAndGlyphs">REPUBLIQUE DE COTE D’IVOIRE</text></g>
<text x="635" y="109" font-size="36" font-weight="700"  textLength="905" lengthAdjust="spacingAndGlyphs">MINISTERE DE L’ENSEIGNEMENT SUPERIEUR</text><text x="716" y="157" font-size="36" font-weight="700"  textLength="744" lengthAdjust="spacingAndGlyphs">ET DE LA RECHERCHE SCIENTIFIQUE</text>
<text x="672" y="252" font-size="52" font-weight="800"  textLength="863" lengthAdjust="spacingAndGlyphs">UNIVERSITE JEAN LOROUGNON GUEDE</text>
<text x="778" y="340" font-size="72" font-weight="800" fill="#E8192C"  textLength="790" lengthAdjust="spacingAndGlyphs">CARTE D’ETUDIANT 2026-2027</text>
<text x="805" y="428" font-size="46" font-weight="700" font-style="italic"  textLength="55" lengthAdjust="spacingAndGlyphs">UJ-ID :</text><text x="960" y="428" font-size="50" font-weight="700"  textLength="455" lengthAdjust="spacingAndGlyphs">[ZIBD0000000000]</text>
<rect x="38" y="388" width="380" height="372" fill="#E3E7F0"/><circle cx="228" cy="520" r="62" fill="#9AA3B5"/><path d="M98 760c0-95 60-150 130-150s130 55 130 150z" fill="#9AA3B5"/>
<text x="456" y="533" font-size="40" font-weight="700" font-style="italic"  textLength="92" lengthAdjust="spacingAndGlyphs">Nom</text><text x="668" y="533" font-size="40" font-weight="700" >:</text><text x="456" y="620" font-size="40" font-weight="700" font-style="italic"  textLength="204" lengthAdjust="spacingAndGlyphs">Prénom(s)</text><text x="668" y="620" font-size="40" font-weight="700" >:</text><text x="456" y="716" font-size="40" font-weight="700" font-style="italic"  textLength="150" lengthAdjust="spacingAndGlyphs">Né(e) le</text><text x="668" y="716" font-size="40" font-weight="700" >:</text><text x="456" y="798" font-size="40" font-weight="700" font-style="italic"  textLength="96" lengthAdjust="spacingAndGlyphs">UFR</text><text x="668" y="798" font-size="40" font-weight="700" >:</text><text x="456" y="891" font-size="40" font-weight="700" font-style="italic"  textLength="130" lengthAdjust="spacingAndGlyphs">Filière</text><text x="668" y="891" font-size="40" font-weight="700" >:</text><text x="456" y="973" font-size="40" font-weight="700" font-style="italic"  textLength="140" lengthAdjust="spacingAndGlyphs">Niveau</text><text x="668" y="973" font-size="40" font-weight="700" >:</text><text x="702" y="534" font-size="62" font-weight="800"  textLength="200" lengthAdjust="spacingAndGlyphs">[NOM]</text><text x="702" y="626" font-size="58" font-weight="800"  textLength="290" lengthAdjust="spacingAndGlyphs">[PRÉNOM(S)]</text><text x="702" y="718" font-size="56" font-weight="800"  textLength="690" lengthAdjust="spacingAndGlyphs">[JJ/MM/AAAA] À [LIEU]</text><text x="702" y="811" font-size="56" font-weight="800"  textLength="670" lengthAdjust="spacingAndGlyphs">[UFR]</text><text x="702" y="866" font-size="36" font-weight="800"  textLength="370" lengthAdjust="spacingAndGlyphs">[LICENCE FILIÈRE]</text><text x="702" y="974" font-size="56" font-weight="800"  textLength="411" lengthAdjust="spacingAndGlyphs">[Licence 1 (L1)]</text>
<g fill="none" stroke="#586A8C" stroke-opacity=".6"><circle cx="325" cy="787" r="125" stroke-width="3"/><circle cx="325" cy="787" r="82" stroke-width="2.5"/><circle cx="325" cy="787" r="118" stroke-width="1" stroke-dasharray="2 5"/></g>
<g fill="#586A8C" fill-opacity=".6" font-size="17" font-weight="700"><text><textPath href="#ucA1" startOffset="50%" text-anchor="middle">UNIVERSITE JEAN LOROUGNON GUEDE</textPath></text><text><textPath href="#ucA2" startOffset="50%" text-anchor="middle" font-size="15">BP 150 DALOA</textPath></text><text x="325" y="794" font-size="25" font-weight="400" text-anchor="middle">Le Président</text></g>
<g fill="none" stroke="#2B3A5C" stroke-linecap="round" stroke-linejoin="round"><path d="M210,741C170,748 120,775 92,800C70,820 85,848 125,855C170,862 215,840 250,818C285,805 320,800 347,798" stroke-width="5"/><path d="M205,768C170,765 140,768 125,790C110,815 125,850 150,865C175,875 205,868 235,845" stroke-width="4"/><path d="M255,812L346,798" stroke-width="9"/><path d="M312,758C308,775 304,792 298,808M300,826L322,823" stroke-width="6" stroke-opacity=".7"/><circle cx="40" cy="795" r="5" fill="#2B3A5C"/></g>
<text x="77" y="928" font-size="36" font-weight="700" fill="#2A2F3A"  textLength="242" lengthAdjust="spacingAndGlyphs">Le Président</text></svg></span>
<span class="ucf ucb" aria-hidden="true"><svg class="ucg" viewBox="0 0 1712 1088" preserveAspectRatio="none" aria-hidden="true" font-family="'Century Gothic','Trebuchet MS',Arial,sans-serif" fill="#14181F"><rect width="1712" height="1088" fill="#F3F4F6"/>
<text x="142" y="92" font-size="68" textLength="1005" lengthAdjust="spacingAndGlyphs"><tspan font-weight="500">Carte </tspan><tspan fill="#9AA0AA">strictement</tspan><tspan font-weight="500"> Personnelle</tspan></text><rect x="142" y="104" width="1005" height="4"/>
<text x="222" y="176" font-size="46"  textLength="860" lengthAdjust="spacingAndGlyphs">Elle reste la propriété de l’Université</text><text x="272" y="250" font-size="46" font-weight="700"  textLength="730" lengthAdjust="spacingAndGlyphs">JEAN LOROUGNON GUEDE</text><text x="262" y="305" font-size="46"  textLength="770" lengthAdjust="spacingAndGlyphs">En cas de perte ou si retrouvée,</text><text x="272" y="360" font-size="46"  textLength="740" lengthAdjust="spacingAndGlyphs">prière s’adresser à la scolarité.</text>
<text x="407" y="448" font-size="46"  textLength="665" lengthAdjust="spacingAndGlyphs">BP 150 Daloa - Côte d’Ivoire -</text><text x="122" y="512" font-size="46"  textLength="1305" lengthAdjust="spacingAndGlyphs">Site web : www.ujlog.edu.ci &#160; Email : info@ujlg.edu.ci</text>
<g transform="translate(1337 135)"><rect width="235" height="235" fill="#fff"/>${qrS}</g>
<rect x="372" y="585" width="365" height="365" fill="none" stroke="#14181F" stroke-width="5"/><rect x="867" y="585" width="360" height="365" fill="none" stroke="#14181F" stroke-width="5"/>
<text x="606" y="1032" font-size="62" font-weight="700"  textLength="500" lengthAdjust="spacingAndGlyphs">CI[000000000000]</text></svg></span>
</span></button>
<p class="mu" style="text-align:center;font-size:13px;margin:-2px 0 2px">Touchez la carte pour la retourner</p>
<div class="row" style="gap:10px;display:none"></div>
${nav(3)}`]);
// 6 Scolarité
const C=(t,s,tg,k)=>`<div class="li"><div class="ic" style="background:${k?'var(--mint)':'#FFF0D6'};color:${k?'var(--g)':'#8A4B00'}">${I(k?'chk':'clk')}</div><div class="fl"><b>${t}</b><span class="mu">${s}</span></div><span class="tag ${k?'':'a'}">${tg}</span></div>`;
const OP=(n,c)=>`<button class="li" style="width:100%"><div class="ic" style="background:${c};font:800 18px var(--h)">${n[0]}</div><div class="fl"><b>${n}</b><span class="mu">Paiement mobile</span></div>${I('chv')}</button>`;
S.push(['a6','Scolarité',`${BG(330,50)}
<div class="row"><button class="ib" data-go="a50" aria-label="Retour à mon espace" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Scolarité</h1></div>
<div class="hero"><div style="color:#C9D3EA;font-size:14px">Reste à payer</div><div style="font:800 34px/1.1 var(--h);margin:4px 0 14px" class="mono">[Montant] <span style="font-size:18px">FCFA</span></div><div class="bar" role="img" aria-label="Part déjà payée"><i></i></div><div style="font-size:13px;color:#C9D3EA;margin-top:8px">Frais d’inscription 2026 déjà réglés, 2 paiements à venir</div></div>
<div class="card">${C('Frais d’inscription 2026','Payée le [date]','Payée',1)}${C('Frais [période]','Échéance [date]','En attente',0)}${C('Frais [autre]','Échéance [date]','En attente',0)}</div>
<div class="mu" style="font-weight:700;padding:4px 4px 0">Payer par Mobile Money</div>
<div class="card">${OP('[Opérateur 1]','#F26B00')}${OP('[Opérateur 2]','#E6B800')}</div>
${nav(3)}`]);
// 7 Actus
const AC=(c,t,m,tg,a)=>`<article class="card"><div style="height:${a?88:60}px;background:var(--g);padding:10px;display:flex;align-items:flex-end;position:relative;overflow:hidden"><span class="tag ${c}">${tg}</span></div><div class="pad"><b style="font:700 18px/1.3 var(--h);display:block">${t}</b><span class="mu row" style="margin-top:4px;gap:6px">${I(m[0],15)}${m[1]}</span></div></article>`;
S.push(['a7','Actualités et formations',`${BG(60,40)}
<div class="row"><button class="ib" data-go="a2" aria-label="Retour" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Actualités et formations</h1></div>
<div class="pn" id="pin1" role="status"><span class="tag r">Urgent</span><div class="fl"><b>[Titre de l’annonce importante]</b><span class="m">[Changement de salle, date d’examen ou fermeture.]</span></div><button class="x" data-pnx="1" aria-label="Masquer l’annonce">×</button></div>
${seg(['Actualités','Formations'])}
${seg(['Pour vous','Abonnements','Officiel'])}
<div id="vids" style="display:none;flex-direction:column;gap:12px">${VC('','[Titre de la vidéo]','[Date] · [UFR]')}</div>
<div id="nws" style="display:contents">${AC('','[Titre de l’actualité]',['cal','[Date], [Catégorie]'],'Actualité',1)}
${AC('a','[Titre de la formation]',['clk','[Date], [Durée]'],'Formation',0)}
<button class="btn" style="height:40px">S’inscrire à la formation</button></div>
<div class="mu" style="font-weight:700;padding:4px 4px 0">Opportunités</div><div class="card op">${[['cap','Bourse','[Nom de la bourse]','Date limite : [date]'],['doc','Stage','[Intitulé du stage]','[Entreprise] · [Ville]'],['grp','Concours','[Nom du concours]','Inscriptions jusqu’au [date]']].map(([i,t,n,d])=>`<button class="li"><span class="ic">${I(i,20)}</span><div class="fl"><span class="tag a" style="padding:3px 8px;font-size:11px">${t}</span><b>${n}</b><span class="mu" style="font-size:12px">${d}</span></div>${I('chv')}</button>`).join('')}</div>
<div class="pl" id="poll"><span class="tag" style="align-self:flex-start">Sondage rapide</span><b>[Question sur la vie étudiante ?]</b>${[['[Réponse A]',46],['[Réponse B]',32],['[Réponse C]',22]].map(([t,p])=>`<button class="o" style="--w:${p}%" aria-pressed="false"><i></i><span>${t}</span><span class="pc" hidden>${p} %</span></button>`).join('')}<span class="mu" style="font-size:12px">[128] votes · résultats en direct</span></div>
${nav(1)}`]);
// 8 Nouvelle story (v27)
S.push(['a8','Nouvelle story',`<div class="stc" id="stc" data-m="Message">
<div class="stbg" id="stbg"></div><div class="ujloc" id="ujloc" hidden></div>
<div class="stt"><button class="stb" data-go="a1" aria-label="Fermer">${I('cls',24)}</button><span class="fl"></span><button class="stb" id="stchg" aria-label="Changer la photo" hidden><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg></button><button class="stb" id="stfont" aria-label="Police du texte" style="font-weight:800">Aa</button><button class="stb" id="stcol" aria-label="Couleurs du fond"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.4-1.2-1.6-1.2-2.8 0-1 .8-1.6 1.8-1.6H17a4 4 0 0 0 4-4c0-4-4-7.8-9-7.8z"/><circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10" cy="7.2" r="1" fill="currentColor"/><circle cx="15" cy="7.2" r="1" fill="currentColor"/></svg></button><button class="stb" id="stloc" aria-label="Ajouter un lieu"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg></button></div>
<div class="sthint" id="sthint" hidden></div>
<div class="stm"><div class="stw" id="stw"><div id="stx" class="stx" contenteditable="true" role="textbox" aria-label="Texte de la story" aria-multiline="true" data-ph="Écrivez un statut" spellcheck="true"></div></div>
<div class="stph" id="stph" hidden><button class="stpb" id="stcam" type="button">${I('cam',26)}<span>Prendre une photo</span></button><button class="stpb" id="stgal" type="button"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg><span>Choisir dans la galerie</span></button></div><span class="stct" id="stct" hidden></span></div>
<div class="stsw" id="stsw" role="group" aria-label="Couleur du fond"></div>
<div class="stfl" id="stfl" role="group" aria-label="Filtre de la photo" hidden></div>
<input id="stcap" class="stcap" maxlength="120" placeholder="Ajouter une légende…" autocomplete="off" aria-label="Légende" hidden>
<div class="stf"><button class="staud" id="staud" aria-label="Choisir qui voit la story">Visible par : <b>Public</b></button><button class="stsend" id="pub" aria-label="Publier dans ma story" disabled><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg></button></div>
<div class="stbar" id="stbar" role="group" aria-label="Type de story"><button type="button" data-sm="Photo" aria-pressed="false">Photo</button><button type="button" data-sm="Message" aria-pressed="true">Message</button></div>
<input type="file" id="v25pf" accept="image/*" hidden><input type="file" id="v25cf" accept="image/*" capture="environment" hidden>
</div>`]);
// 9 Profil d'un membre
S.push(['a9','Profil d’un étudiant',`${memb(1)}\n${nav(0)}`]);
// 10 Notifications
S.push(['a10','Notifications',`${BG(200,30)}
<div class="row"><button class="ib" data-go="a1" aria-label="Retour à l’accueil" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Notifications</h1></div>
<div class="mu" style="font-weight:700;padding:4px 4px 0">Nouvelles</div>
<div class="card">${['[Nom de l’étudiant] a allumé une flamme sur votre story','[Nom de l’étudiant] a commenté votre story'].map(n=>`<button class="li" style="width:100%;text-align:left"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I('flm',20)}</span><div class="fl"><b style="font-size:14px">${n}</b><span class="mu" style="font-size:12px">[Il y a 1 h]</span></div></button>`).join('')}</div>
<div class="mu" style="font-weight:700;padding:4px 4px 0">Plus tôt</div>
<div class="card">${['Nouvelle actualité publiée par UJLoG','Inscriptions ouvertes pour [nom de l’événement]'].map(n=>`<button class="li" style="width:100%;text-align:left"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I('bell',20)}</span><div class="fl"><b style="font-size:14px">${n}</b><span class="mu" style="font-size:12px">[Hier]</span></div></button>`).join('')}</div>`]);
// 11 Messages
S.push(['a11','Messages',`<div></div>`]);
// 12 Recherche
S.push(['a12','Recherche',`${BG(200,30)}
<div class="row"><button class="ib" data-go="a1" aria-label="Retour à l’accueil" style="transform:scaleX(-1)">${I('chv')}</button><div class="field fl row" style="padding:0 12px;height:44px;gap:8px;border-radius:22px">${I('se',20)}<input id="sq" placeholder="Rechercher" autocomplete="off" style="flex:1;min-width:0;background:none"></div></div>
<div id="sr"></div>`]);
// 13 Nouvelle publication (v27)
S.push(['a13','Nouvelle publication',`<div class="cmp">
<div class="cmph"><button class="ib" data-go="a1" aria-label="Fermer">${I('cls',22)}</button><h1 class="cmpt">Nouvelle publication</h1><button class="cmpn" id="ppub" disabled>Publier</button></div>
<div class="cmpid"><span class="cmpav" id="pav">${I('usr',26)}</span><div class="cmpwho"><b data-ownh="1">Vous</b><span class="cmpctx" id="pctx" hidden></span><button class="cmpaud" id="paud" type="button" aria-label="Choisir qui voit la publication">${I('globe',14)}<span>Public</span></button></div></div>
<div class="cmpcard" id="pcard"><textarea id="ptx" class="cmpta" maxlength="500" placeholder="Quoi de neuf ?" aria-label="Texte de la publication"></textarea><span class="cmpct" id="pct"></span></div>
<div class="cmpmw" id="pmw" hidden><div class="cmpmd" id="ppv"><span class="cmpfm" id="pfm"></span></div><div class="cmpth" id="pth"></div></div>
<div class="cmpvl" id="pvw" hidden><input id="pyt" type="url" placeholder="Collez un lien YouTube ou TikTok" autocomplete="off" aria-label="Lien vidéo"></div>
<div class="cmppan" id="ppan" hidden></div>
<div class="cmpadd"><span class="cmpadl">Ajouter à ta publication</span><div class="cmptl">
<button type="button" id="ppick" aria-label="Ajouter des photos"><i style="background:#15803D"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg></i>Photo</button>
<button type="button" id="pvbtn" aria-label="Ajouter une vidéo" aria-pressed="false"><i style="background:#E02020"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 11l5-3v8l-5-3z"/></svg></i>Vidéo</button>
<button type="button" id="pbgb" aria-label="Fond coloré" aria-pressed="false"><i style="background:linear-gradient(135deg,#7C3AED,#EC4899,#F08A24);font:800 20px var(--h)">A</i>Fond</button>
<button type="button" id="pmood" aria-label="Humeur" aria-pressed="false"><i style="background:#F5B83D;font-size:22px">😊</i>Humeur</button>
<button type="button" id="ploc" aria-label="Lieu" aria-pressed="false"><i style="background:#1E3FAA"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg></i>Lieu</button>
</div></div>
<input type="file" id="pfile" accept="image/*" multiple hidden>
</div>`]);
// 14 Histoire de l’université
const hEsc=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let H=[['[Année]','Fondation de l’université','[Racontez les débuts : qui, où et pourquoi.]'],['[Année]','Premières promotions','[Les premiers temps forts de l’université.]'],['[Année]','Reconnaissance officielle','[Statuts, reconnaissance, structuration.]'],['[Année]','Création des départements','[Nouveaux départements, filières et responsables.]'],['Aujourd’hui','L’université aujourd’hui','[Chiffres actuels : étudiants, départements, filières.]']];
const hKey=y=>{const n=parseInt(y);return isNaN(n)?(y.startsWith('Aujourd')?1e9:-1):n};
const hTl=()=>`<div class="tl">${H.map(([y,t,x])=>`<div class="tli"><span class="tld"></span><b class="tly">${hEsc(y)}</b><div class="tlc"><b>${hEsc(t)}</b><p class="mu">${hEsc(x)}</p></div></div>`).join('')}</div>`;
S.push(['a14','Historique',`${BG(330,40)}
<div class="row"><button class="ib" data-go="a2" aria-label="Retour à Mon campus" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Histoire de l’université</h1></div>
<div class="hero"><div style="color:rgba(255,255,255,.8);font-weight:700;font-size:12px;letter-spacing:.08em">DEPUIS [ANNÉE]</div><h2 style="font:800 24px/1.15 var(--h);margin:6px 0">L’histoire de la UJLoG</h2><p style="opacity:.92;font-size:14px;line-height:1.45">[Présentation de l’université en deux ou trois phrases.]</p></div>
<div id="hl">${hTl()}</div>
<button class="btn s" id="hadd">${I('plus',20)}Ajouter un jalon</button>`]);
// 15 Administration
S.push(['a15','Administration',`${BG(330,40)}
<div class="row"><button class="ib" data-go="a2" aria-label="Retour" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Administration</h1></div>
<div class="mu" style="font-weight:700;padding:0 4px">Badges de vérification</div>
<div class="card">${BG2.map(([g,a])=>`<div class="mu" style="font-weight:700;font-size:12px;padding:10px 14px 2px">${g}</div>${a.map(([l])=>`<div class="li">${bdg(l,34)}<div class="fl"><b>${LV[l]}</b><span class="mu" style="font-size:13px">${LD[l]}</span></div></div>`).join('')}`).join('')}</div>
<div class="mu" style="font-weight:700;padding:4px 4px 0">Comptes autorisés à publier</div>
<div class="card" id="accl"></div>

`]);
S.push(['a16','Publications enregistrées',`${BG(330,40)}
<div class="row"><button class="ib" data-go="a4" aria-label="Retour" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Publications enregistrées</h1></div>
<div class="card" id="svl"></div>`]);
const fillSv=()=>{const l=[...document.querySelectorAll('.ig')].filter(a=>a.querySelector('.svb').getAttribute('aria-pressed')=='true');document.getElementById('svl').innerHTML=l.length?l.map(a=>`<div class="li"><span class="tag" style="position:static">${eA(a.querySelector('.md .tag').textContent)}</span><div class="fl"><b>${eA(a.querySelector('.mt').textContent)}</b><span class="mu" style="font-size:13px">${eA(a.querySelector('.ih b').textContent)}</span></div></div>`).join(''):'<div class="pad mu" style="text-align:center">Aucune publication enregistrée. Touchez le marque-page sous une publication.</div>'};
S.push(['a17','Pages',`${BG(330,40)}
<div class="row"><button class="ib" data-go="a1" aria-label="Retour" style="transform:scaleX(-1)">${I('chv')}</button><h1 class="t fl" style="font-size:24px">Pages</h1></div>
<div class="v75t">Suggestions pour vous</div><div class="card" id="pgs"></div>
<div class="v75t">Mes abonnements<span id="pgac"></span></div><div class="card" id="pga"></div>`]);
S.push(['a18','Page',`${BG(330,40)}
<div id="pgp" style="display:flex;flex-direction:column;gap:14px"></div>`]);
ESP.filter(e=>e.id!='a41').forEach(e=>S.push([e.id,e.n,`${espHd(e)}
${espUne(e)}
${e.gp?espGp(e):''}
${e.id=='a43'?espPres():''}
${espInf(e)}
<button class="spcta" data-web="${e.u}" data-wt="${e.n}">Ouvrir le site complet${I('ext',17)}</button>
<button class="spcta s" data-go="${e.x[0]}">${e.x[1]}</button>
${nav(2)}`]));

S.push(['a44','Mot de la Présidente',`${crHd('Mot de la Présidente','a43')}
<figure class="pmph"><img src="${PRES}" alt="${PRN}"><figcaption>${PRN}<br><span style="font-weight:600;opacity:.9">Présidente de l’Université Jean Lorougnon Guédé</span></figcaption></figure>
<article class="pmx">
<p>À l’entame de mes propos, je voudrais tout d’abord témoigner ma reconnaissance à S.E.M. Alassane OUATTARA, Président de la République dont ma nomination porte le sceau. J’adresse mon infinie gratitude au Ministre de l’Enseignement Supérieur et de la Recherche Scientifique, Professeur Adama DIAWARA, pour l’exaltante mission qu’il a bien voulu me confier.</p>
<p>Depuis ma prise de fonction à la tête de l’Université Jean Lorougnon Guédé le 22 juin 2023, je me suis engagée à pérenniser et améliorer les efforts consentis par mes prédécesseurs.</p>
<p>Ainsi, la dynamique équipe de la Gouvernance et moi-même, nous nous attelons chaque jour à faire de UJLoG un joyau national de la Formation et de la Recherche au cœur de la région du Haut-Sassandra.</p>
<p>L’objectif ultime est de hisser notre institution parmi les meilleures au plan continental voire mondial. Pour l’atteinte de ce but, l’Université dispose de personnels (Enseignants et administratifs) dont l’expertise est sollicitée au niveau national et à l’international. J’entends avec tous ces acteurs œuvrer à instaurer la confiance chez nos apprenants quant aux formations reçues en améliorant nos offres, nos pratiques pédagogiques pour une meilleure employabilité de nos diplômés.</p>
<p>Au moment où l’Enseignement Supérieur ivoirien est régi par la loi No 2023-429 du 22 mai 2023 proposée par le Professeur Adama DIAWARA, notre Université va renforcer à compter de cette année académique 2023-2024, en plus du volet de la recherche fondamentale, ceux de la recherche appliquée, dite « recherche-développement » ou encore « recherche-action ». Ainsi, UJLoG se positionnera comme un acteur majeur dans l’accompagnement du développement local et national.</p>
<p>La nouvelle loi faisant des Universités des Etablissements Publics Administratifs à caractère Scientifique et Technologique (EPAST), je m’évertuerai à tisser pour le compte de UJLoG des partenariats tant avec le secteur public que le privé, le monde agricole, le secteur scientifique national et international.</p>
<p>À terme, ces approches nous permettront de nous positionner à différents niveaux et offrir des formations en adéquation avec le monde de l’emploi, c’est-à-dire être une Université au service du développement durable. Concrètement, au plan de la recherche, nous allons contribuer à l’atteinte des Objectifs pour le Développement Durable (ODD) suivants :</p>
<ul><li>ODD N°2, Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir une agriculture durable ;</li><li>ODD N°6, Garantir l’accès de tous à l’eau et à l’assainissement ; assurer une gestion durable des ressources en eau ;</li><li>ODD N°7, Garantir l’accès de tous à des services énergétiques fiables, durables et modernes, à un coût abordable ;</li><li>ODD N°11, Faire en sorte que les villes et les établissements humains soient ouverts à tous, sûrs, résilients et durables ;</li><li>ODD N°12, Établir des modes de consommation et de production durables ;</li><li>ODD N°13, Prendre d’urgence des mesures pour lutter contre les changements climatiques et leurs répercussions.</li></ul>
<p>Au regard de tout ce qui précède, UJLoG a donc de grands chantiers à réaliser conformément à la vision de S.E.M. le Président de la République, Docteur Alassane OUATTARA et le programme du gouvernement, auquel nous entendons apporter notre pierre pour le Développement de notre chère Côte d’Ivoire.</p>
<p style="font-weight:700">Je vous remercie.</p>
</article>
<button class="btn s" data-web="https://ujlog.edu.ci/a-propos/mot-de-la-presidente/" data-wt="Mot de la Présidente">Voir la page sur le site de l’UJLoG</button>
${nav(2)}`]);
const ap=document.getElementById('app');
ap.innerHTML=S.map(([id,t,h])=>{const k=h.indexOf('<nav class="nav"'),b=k<0?h:h.slice(0,k),n=k<0?'':h.slice(k);return `<section class="bd" id="${id}"><h2>${t}</h2><div class="ph"><div class="sc">${b}</div>${n}</div></section>`}).join('');
document.querySelectorAll('img.lg').forEach(i=>i.src=LOGO);
const mq=matchMedia('(max-width:480px)');const show=id=>{document.querySelectorAll('.bd').forEach(b=>b.classList.toggle('on',b.id==id));const s=document.querySelector('#'+id+' .sc');if(s)s.scrollTop=0;scrollTo(0,0)};show('a1');
ap.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){go(g.dataset.go);return}
if(e.target.closest('[data-pginfo]')){pgInfo(PGS.n);return}
if(e.target.closest('[data-pgshare]')){toast('Lien de la page copié');return}
const pu=e.target.closest('[data-pgune]');if(pu){const UN=[[['var(--g)','[Publication à la une]'],['#B0306A','[Publication à la une]']],[['#1E3FAA','[Photo à la une]'],['#F08A24','[Photo à la une]']],[['#7C3AED','[Meilleur moment]'],['#0D9488','[Meilleur moment]']]],k=+pu.dataset.pgune;openSV(-1,false,0,document.getElementById('pgp').dataset.n,UN[k].map(([c,cap])=>({c,cap,t:'À la une'})));return}
const pst=e.target.closest('[data-pgst]');if(pst){openSV(-1,false,+(pst.dataset.i||0),pst.dataset.pgst);return}
const ptb=e.target.closest('[data-pgtab]');if(ptb){pgOpen(PGS.n,+ptb.dataset.pgtab);return}
const ppo=e.target.closest('[data-pgpost]');if(ppo){pgOpen(PGS.n,PGS.tab||0,+ppo.dataset.pgpost);return}
if(e.target.closest('[data-pgback]')){pgOpen(PGS.n,PGS.tab||0);return}
const sb=e.target.closest('[data-story]');if(sb){openSV(+sb.dataset.story,!sb.dataset.prof,+(sb.dataset.i||0));return}
const p=e.target.closest('.seg button,.chips .chip'),s=e.target.closest('[role=switch]');
if(p){p.parentNode.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b==p))}
if(s)s.setAttribute('aria-checked',s.getAttribute('aria-checked')!='true')});
ap.addEventListener('click',e=>{const b=e.target.closest('.lkb,.svb');if(b)b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!='true')});
const sheet=document.createElement('div');sheet.className='shx';sheet.innerHTML='<div class="shx-b"></div><div class="shx-p" role="dialog" aria-modal="true"></div>';document.body.appendChild(sheet);
const shp=sheet.querySelector('.shx-p'),CM={},NT=new Set(),FW=new Set([ACC[0].n]);window.UJFWN=()=>FW.size+MB.filter((M,i)=>i>0&&M.fw).length;let cp=null,GN=false;
/* v88 : cloche et abonnements enregistrés, puis restaurés à chaque ouverture ; tous les boutons-cloches restent alignés */
const uNK='uj_notif',uNSave=()=>{try{localStorage.setItem(uNK,JSON.stringify({g:GN,n:[...NT],f:[...FW],b:MB.map(m=>!!m.bell),w:MB.map(m=>!!m.fw)}))}catch(_){}},uNUI=()=>{document.querySelectorAll('[data-gbell]').forEach(g=>{if(g.getAttribute('aria-pressed')!==String(GN)){g.setAttribute('aria-pressed',GN);g.setAttribute('aria-label',GN?'Désactiver les alertes de toutes les pages suivies':'Activer les alertes de toutes les pages suivies')}})};
try{const _n=JSON.parse(localStorage.getItem(uNK)||'null');if(_n){GN=!!_n.g;if(_n.f){FW.clear();_n.f.forEach(x=>FW.add(x))}(_n.n||[]).forEach(x=>NT.add(x));(_n.b||[]).forEach((v,i)=>{if(MB[i])MB[i].bell=!!v});(_n.w||[]).forEach((v,i)=>{if(MB[i]&&i>0)MB[i].fw=!!v})}}catch(_){}
document.addEventListener('click',()=>setTimeout(()=>{uNSave();uNUI()},0));addEventListener('pagehide',uNSave);document.addEventListener('visibilitychange',()=>{if(document.hidden)uNSave()});
let uNR=0;new MutationObserver(()=>{if(!uNR)uNR=requestAnimationFrame(()=>{uNR=0;uNUI()})}).observe(document.body,{childList:true,subtree:true});uNUI();

const opHtml=a=>{const n=a.querySelector('.ih b').textContent,sv=a.querySelector('.svb').getAttribute('aria-pressed')=='true',pn=a.dataset.pin=='1',ad=document.getElementById('adm'),adm=ad&&ad.getAttribute('aria-checked')=='true',o=(v,i,t)=>`<button class="shx-o" data-sx="${v}">${I(i,22)}${t}</button>`;
if(a.classList.contains('igme'))return `<div class="shx-h"><b>Options</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div>${o('edme','edt','Modifier la publication')}${o('sv','bkm',sv?'Retirer des enregistrements':'Enregistrer')}${o('pn','pin',pn?'Désépingler':'Épingler en haut du fil')}${o('link','shr','Copier le lien')}<button class="shx-o" data-sx="del" style="color:var(--red)"><svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:22px;height:22px"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 7V4h6v3"/></svg>Supprimer la publication</button>`;
return `<div class="shx-h"><b>Options</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div>${o('sv','bkm',sv?'Retirer des enregistrements':'Enregistrer')}${o('st','cam','Republier dans ma story')}${FW.has(n)?o('uf','usr','Ne plus suivre '+eA(n)):''}${o('link','shr','Copier le lien')}${o('rep','chk','Signaler')}${o('hide','dts','Masquer cette publication')}${adm?`<div class="shx-s">Réservé aux responsables</div>${o('ed','edt','Modifier')}${o('pn','pin',pn?'Désépingler':'Épingler en haut du fil')}${o('stt','grid','Statistiques')}`:''}`};
ap.addEventListener('click',e=>{if(e.target.closest('[data-go=a16]'))fillSv()});
const fwTog=n=>{if(FW.has(n)){FW.delete(n);NT.delete(n);toast('Vous ne suivez plus '+n)}else{FW.add(n);if(GN)NT.add(n);toast('Vous suivez '+n+(GN?' · alertes activées':''))}syncP();try{renderMy()}catch(_){}};
const ntTog=n=>{if(NT.has(n)){NT.delete(n);toast('Alertes désactivées pour '+n)}else{NT.add(n);FW.add(n);toast('Alertes activées pour '+n)}syncP();try{renderMy()}catch(_){}};
const pgc=i=>{const p=ACC[i],n=eA(p.n);return `<div class="card pgc" data-pg="${n}"><img class="lg" alt=""><div class="pgn"><b>${n}</b>${bdg(p.l,15)}</div><span class="mu" style="font-size:12px">${LV[p.l]}</span><button class="fwb" data-fw="${n}" aria-pressed="false">${fwLbl(0)}</button></div>`};
const pgr=i=>{const p=ACC[i],n=eA(p.n),f=FW.has(p.n);return `<div class="li" data-pg="${n}"><img class="lg" alt="" style="width:44px;height:44px;border-radius:14px"><div class="fl"><b>${n}</b>${bdg(p.l,16)}<span class="mu" style="font-size:13px;display:block">${LV[p.l]}</span></div><button class="fwb" data-fw="${n}" aria-pressed="${f}">${fwLbl(f)}</button></div>`};
const syncP=()=>{document.querySelectorAll('.ig').forEach(a=>{const n=a.querySelector('.ih b').textContent,f=FW.has(n),b=a.querySelector('.fwb');b.hidden=f});
const ix=ACC.map((_,i)=>i),u=ix.filter(i=>!FW.has(ACC[i].n)),r=document.getElementById('rec');
r.hidden=!u.length;r.querySelector('.rl').innerHTML=u.map(pgc).join('');
document.getElementById('pgs').innerHTML=u.map(pgr).join('')||'<div class="pad mu">Vous suivez toutes les pages.</div>';
document.getElementById('pga').innerHTML=ix.filter(i=>FW.has(ACC[i].n)).map(pgr).join('')||'<div class="pad mu">Aucun abonnement.</div>';{const c=document.getElementById('pgac');if(c)c.textContent=ix.filter(i=>FW.has(ACC[i].n)).length||''}
document.querySelectorAll('#rec img.lg,#pgs img.lg,#pga img.lg,#pgp img.lg').forEach(i=>i.src=LOGO);const pn=document.getElementById('pgp').dataset.n,pf=document.getElementById('pgf');if(pn&&pf){const f=FW.has(pn),pb=document.getElementById('pgb');pf.innerHTML=fwLbl(f);pf.setAttribute('aria-pressed',f);pb.hidden=false;pb.setAttribute('aria-pressed',NT.has(pn))}};
let uq='';const unfAsk=n=>{uq=n;shOpen(`<div class="shx-h"><b>Ne plus suivre ${eA(n)} ?</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><p class="mu" style="margin:0 0 8px">Les alertes de cette page seront désactivées.</p><button class="btn" data-sx="unf" style="background:var(--red)">Ne plus suivre</button><button class="shx-o" data-sx="x" style="justify-content:center">Annuler</button>`)};
const pgInfo=n=>{const p=ACC.find(x=>x.n==n);if(!p)return;const q=eA(n),np=[...document.querySelectorAll('#a1 .ig')].filter(a=>a.querySelector('.ih b').textContent==n).length,ns=(PS[n]||[]).length,f=(ic,l)=>`<small>${I(ic,13)}${l}</small>`;
shOpen(`<div class="shx-h"><b>Infos sur la page</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div>
<div class="pgh2"><span class="pgl"><img class="lg" alt="" src="${LOGO}"></span><div><b>${q}${bdg(p.l,18)}</b><span class="pgpill">${I('shd',13)}Compte vérifié · ${LV[p.l]}</span></div></div>
<div class="pgmini"><div><b>${np}</b><span>publications</span></div><div><b>0</b><span>abonnés</span></div><div><b>${ns}</b><span>stories</span></div></div>
<div class="pgcard"><div>${f('news','À propos')}<span>${LD[p.l]}</span></div><div>${f('pin','Siège')}<span>[Ville, quartier]</span></div></div>
<p class="pgnote">Le badge est attribué par l’administration de la UJLoG.</p>
<button class="pgrp" data-sx="pgrep">Signaler cette page</button><div class="pgpad"></div>`)};
const pgOpen=(n,tab,open)=>{const p=ACC.find(x=>x.n==n);if(!p)return;tab=tab||0;open=open==null?-1:open;const cu=document.querySelector('.bd.on'),from=cu&&cu.id!='a18'?cu.id:(PGS.from||'a1'),ps=[...document.querySelectorAll('#a1 .ig')].filter(a=>a.querySelector('.ih b').textContent==n),pp=document.getElementById('pgp'),q=eA(n),st=PS[n]||[],AL=[...document.querySelectorAll('#a1 .ig')];PGS={n,from,tab,open};pp.dataset.n=n;
const bgs=AL.map(a=>{const md=a.querySelector('.md'),cs=md.querySelector('.cs'),yt=md.querySelector('.ytf'),c=[cs&&cs.style.background,yt&&yt.style.backgroundImage&&yt.style.backgroundImage+' center/cover',md.style.background];return c.find(v=>v&&v.includes('url('))||c.find(v=>v)||'var(--g)'});
const inf=i=>{const md=AL[i].querySelector('.md'),tg=md.querySelector('.tag'),t=md.querySelector('.mt');return [eA(tg?tg.textContent:''),eA(t?t.textContent:'')]};
const tl=ix=>ix.map(i=>{const [tg,t]=inf(i);return `<button class="pgt tk v76" data-pgpost="${i}" data-bg="${i}" aria-label="Ouvrir : ${t}">${bgs[i].includes('url(')?'':`<b>${t}</b>`}<span class="v76v"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>0</span></button>`}).join('');const all=AL.map((_,i)=>i),pI=all.filter(i=>AL[i].querySelector('.ih b').textContent==n);const tiles=tl(pI);
const feat=ps.length?(()=>{const [tg,t]=inf(0);return `<button class="pgft" data-pgpost="0" data-bg="0" aria-label="Ouvrir : ${t}"><span class="pgtg">${tg}</span><b>${t}</b><small>Dernière publication · Lire →</small></button>`})():'';
const stiles=st.map((x,i)=>`<button class="pgt pgs v76" data-pgst="${q}" data-i="${i}" data-sc="${i}" aria-label="Voir la story ${i+1} sur ${st.length}"><b>${eA(x.cap)}</b><span class="v76v"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>0</span></button>`).join('');
if(open>=0&&AL[open]){
pp.innerHTML=`<div class="pgbar"><button class="ib" data-pgback aria-label="Retour aux publications" style="transform:scaleX(-1);background:none">${I('chv',24)}</button><div class="fl"><h1 style="font:800 19px var(--h)">Publication</h1><small>${eA(AL[open].querySelector('.ih b').textContent)}</small></div></div>${AL[open].outerHTML}`;
syncP();go('a18');const cl=pp.querySelector('.ig'),og=AL[open];pp.onclick=()=>setTimeout(()=>{if(!cl||!og||!cl.isConnected)return;['.lkb','.svb'].forEach(c=>{const x=cl.querySelector(c),y=og.querySelector(c);if(x&&y)y.setAttribute('aria-pressed',x.getAttribute('aria-pressed'))});['.lc','.cc'].forEach(c=>{const x=cl.querySelector(c),y=og.querySelector(c);if(x&&y)y.textContent=x.textContent})},0);return}
const lg=st.length?`<button class="pgr${pseen.has(n)?' seen':''}" data-pgst="${q}" data-i="0" aria-label="Voir la story de ${q}"><span class="pgl"><img class="lg" alt=""></span><span class="pgsb">Story</span></button>`:`<span class="pgl"><img class="lg" alt=""></span>`;
const hdl='@'+(n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'')||'page');
const TI={grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>',stry:'<circle cx="12" cy="12" r="9" stroke-dasharray="3.2 2.6"/><path d="M10 8.8v6.4l5.2-3.2z"/>',bkm:'<path d="M6.5 4h11a1 1 0 0 1 1 1v15l-6.5-4.2L5.5 20V5a1 1 0 0 1 1-1z"/>',hrt:'<path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"/>'};
const tb=[['grid','Publications'],['stry','Stories'],['bkm','Enregistrées'],['hrt','Aimées']].map(([ic,l],k)=>`<button role="tab" data-pgtab="${k}" aria-selected="${tab==k}" aria-label="${l}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${TI[ic]}</svg><span>${l}</span></button>`).join('');
const svI=all.filter(i=>AL[i].querySelector('.svb[aria-pressed=true]')),lkI=all.filter(i=>AL[i].querySelector('.lkb[aria-pressed=true]'));
const cont=[tiles,stiles,tl(svI),tl(lkI)][tab];
const nt=tab>=2?`<div class="v78n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>Visible par vous seul</div>`:'';const body=cont?nt+`<div class="gd">${cont}</div>`:'';
const emp=cont?'':nt+`<div class="pgempty">${I(['grid','cam','bkm','hrt'][tab],30)}<span>${['Aucune publication pour le moment.','Aucune story en cours.','Aucune publication enregistrée.','Aucune publication aimée.'][tab]}</span></div>`;
const hl=`${st.length?`<button data-pgst="${q}" data-i="0" aria-label="Stories de ${q}" style="--c:#2563EB"><i class="v74s"><img class="lg" alt="" src="${LOGO}"></i>Stories</button>`:''}<button data-pgune="0" aria-label="Publications à la une" style="--c:#16A34A"><i>${I('pin',24)}</i>Publications</button><button data-pgune="1" aria-label="Photos à la une" style="--c:#E11D48"><i>${I('cam',24)}</i>Photos</button><button data-pgune="2" aria-label="Meilleurs moments à la une" style="--c:#F97316"><i>${I('flm',24)}</i>Moments</button>`;
pp.innerHTML=`<div class="pgcv2" style="--cvi:url('${UJLOG2}')"><div class="row" style="gap:6px;margin:0 -6px"><button class="ib" data-go="${from}" aria-label="Retour" style="transform:scaleX(-1);background:none">${I('chv',24)}</button><div class="fl"></div><button class="ib" data-pginfo aria-label="Infos sur la page" style="background:none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.1"/></svg></button><button class="ib" data-pgshare aria-label="Partager cette page" style="background:none">${I('shr',22)}</button></div>
<div class="v29h v74h"><div class="v29t">${lg}<div style="min-width:0"><div class="v29n"><span class="nmt">${q}</span>${bdg(p.l,20)}</div><div class="v29s">${LV[p.l]} · UJLoG</div><div class="v74id">${hdl}</div></div></div>
<div class="pgbio" style="font-size:14.5px;line-height:1.4"><div>[Bio de la page]</div><div>${LD[p.l]}</div></div>
<div class="v29st"><div><b>${ps.length}</b><span>Publications</span></div><div><b>0</b><span>Abonnés</span></div><div><b>${st.length}</b><span>Stories</span></div></div>
<div class="row" style="gap:8px"><button class="fwb" id="pgf" data-fw="${q}" aria-pressed="false">${fwLbl(0)}</button><button class="btn" id="pgm" data-msgpage="${String(q).replace(/"/g,'&quot;')}">Message</button><button class="ibn bel" id="pgb" data-nt="${q}" aria-label="Activer les alertes de cette page" aria-pressed="false">${I('bell',22)}</button></div>
</div>
</div>
<div class="tabs" role="tablist">${tb}</div>${body}${emp}`;
pp.querySelectorAll('[data-bg]').forEach(t=>t.style.background=bgs[+t.dataset.bg]);pp.querySelectorAll('[data-sc]').forEach(t=>t.style.background=st[+t.dataset.sc].c);
syncP();go('a18');const sc=pp.closest('.sc');if(sc)sc.scrollTop=0};
ap.addEventListener('click',e=>{const f=e.target.closest('[data-fw]');if(f){const n=f.dataset.fw;FW.has(n)?unfAsk(n):fwTog(n);return}const t=e.target.closest('[data-nt]');if(t){ntTog(t.dataset.nt);return}
const g=e.target.closest('[data-pg]'),h=!e.target.closest('#a18 .ig,button')&&e.target.closest('.ig .ih .rg,.ig .ih .fl');
if(g)pgOpen(g.dataset.pg);else if(h)pgOpen(h.closest('.ig').querySelector('.ih b').textContent)});
addEventListener('keydown',e=>{if(e.key=='Tab')document.body.classList.add('kb')});addEventListener('pointerdown',()=>document.body.classList.remove('kb'));
syncP();
const shOpen=h=>{shp.innerHTML=h;sheet.classList.add('on')},shClose=()=>sheet.classList.remove('on');
sheet.querySelector('.shx-b').addEventListener('click',shClose);
const pi=a=>[...document.querySelectorAll('.ig')].indexOf(a);
const delPost=a=>{const A=[...document.querySelectorAll('.ig')],O=A.map((_,i)=>CM[i]),mine=a.classList.contains('igme');document.querySelectorAll('.rpb').forEach(r=>{if(r._of===a)r.remove()});if(a._vc)a._vc.remove();a.remove();const N={};[...document.querySelectorAll('.ig')].forEach((el,i)=>{const o=O[A.indexOf(el)];if(o)N[i]=o});Object.keys(CM).forEach(k=>delete CM[k]);Object.assign(CM,N);};window.UJDELPOST=delPost;
let rpI=null;
const rpOpen=o=>{rpI=o;shOpen(`<div class="shx-h"><b>Republier</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><div class="rpq"><span class="pva2">${I('usr',16)}</span><b>Vous</b></div><textarea id="rpt" class="rpt" maxlength="200" rows="2" placeholder="Dites quelque chose sur cette publication…"></textarea><div class="rpe"><span class="rpm" style="background:${eA(o.bg||'var(--g)')}"></span><div><small>${eA(o.n)}</small><b>${eA(o.ti)}</b></div></div><button class="btn" data-sx="rpgo">Republier maintenant</button><button class="shx-o" data-sx="rpst">${I('cam',22)}Republier dans ma story</button>`)};
window.UJREP=rpOpen;
let cmRep=null,cmOrd=0;
const cmT=ts=>{const t=Math.round((Date.now()-ts)/1000);return t<60?'À l’instant':t<3600?Math.round(t/60)+' min':t<86400?Math.round(t/3600)+' h':Math.round(t/86400)+' j'};
const cmAll=a=>a.reduce((n,c)=>n+1+(c.r?c.r.length:0),0);
const cmOne=(c,i,j)=>`<div class="fbc${j!=null?' rp':''}" data-i="${i}"${j!=null?` data-j="${j}"`:''}><span class="pva2">${I('usr',16)}</span><div class="fbc-b"><div class="fbc-bb"><b>Vous</b><p>${eA(c.t)}</p>${c.l?`<span class="fbc-r">${c.rx||I('hrt',12)}${c.l}</span>`:''}</div><div class="fbc-m"><span>${cmT(c.ts)}</span><button data-sx="cmlk" aria-pressed="${!!c.ld}">${c.ld&&c.rx&&c.rx!='❤️'?c.rx+' ':''}J’aime</button>${j==null?'<button data-sx="cmrp">Répondre</button>':''}<button data-sx="cmdel">Supprimer</button></div>${j==null&&c.r&&c.r.length?(c.x||c.r.length==1?`<div class="fbc-rs">${c.r.map((r,jj)=>cmOne(r,i,jj)).join('')}</div>`:`<button class="fbc-mo" data-sx="cmmore">↳ Voir les ${c.r.length} réponses</button>`):''}</div></div>`;
const cmHtml=k=>{const a=CM[k]||[],n=cmAll(a),ix=a.map((_,i)=>i).sort((x,y)=>cmOrd?a[y].ts-a[x].ts:(a[y].l||0)-(a[x].l||0)||a[x].ts-a[y].ts);return `<div class="shx-h"><b>Commentaires</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><div class="fbc-top"><span>${n?n+(n>1?' commentaires':' commentaire'):'Aucun commentaire'}</span><button data-sx="cmsort">${cmOrd?'Plus récents':'Les plus pertinents'} ▾</button></div><div class="shx-l">${n?ix.map(i=>cmOne(a[i],i)).join(''):'<p class="mu" style="text-align:center;padding:24px 0">Aucun commentaire pour le moment.<br>Soyez le premier à commenter.</p>'}</div>${cmRep!=null&&a[cmRep]?'<div class="fbc-rt"><span>Réponse à <b>Vous</b></span><button data-sx="cmq" aria-label="Annuler la réponse">×</button></div>':''}<div class="fbc-em">${['❤️','👏','🙏','😂','😮','🔥'].map(e=>`<button data-sx="cmem" data-e="${e}" aria-label="Ajouter ${e}">${e}</button>`).join('')}</div><div class="shx-f fbc-f"><span class="pva2">${I('usr',16)}</span><input id="cmi" placeholder="${cmRep!=null?'Écrire une réponse…':'Écrire un commentaire…'}" maxlength="200" autocomplete="off"><button class="fbc-s" data-sx="send" aria-label="Envoyer"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M3 20.5v-6.8l11-1.7-11-1.7V3.5L22 12z"/></svg></button></div>`};
const fill=k=>{const l=shp.querySelector('.shx-l');if(l)l.scrollTop=l.scrollHeight};
const cmRe=k=>{const f=shp.querySelector('#cmi'),v=f?f.value:'',l=shp.querySelector('.shx-l'),st=l?l.scrollTop:0;shOpen(cmHtml(k));const i=shp.querySelector('#cmi');i.value=v;if(v.trim())shp.querySelector('.fbc-s').classList.add('on');const l2=shp.querySelector('.shx-l');if(l2)l2.scrollTop=st};
const cmAct=(v,b)=>{if(!/^cm(lk|rp|del|more|sort|q|em)$/.test(v))return false;const k=pi(cp),a=CM[k]||[],it=b.closest('.fbc'),i=it?+it.dataset.i:-1,j=it&&it.dataset.j!=null?+it.dataset.j:null,c=i>=0&&a[i]?(j!=null?a[i].r[j]:a[i]):null;
if(v=='cmem'){const f=shp.querySelector('#cmi');f.value+=b.dataset.e;f.focus();shp.querySelector('.fbc-s').classList.add('on');return true}
if(v=='cmlk'&&c){const p=window.UJRXP;window.UJRXP=null;if(p){if(c.ld&&(c.rx||'❤️')==p){c.ld=false;c.l=Math.max(0,(c.l||1)-1);c.rx=null}else{if(!c.ld)c.l=(c.l||0)+1;c.ld=true;c.rx=p}}else{c.ld=!c.ld;c.l=Math.max(0,(c.l||0)+(c.ld?1:-1));if(!c.ld)c.rx=null}}
else if(v=='cmrp'&&c){cmRep=i}
else if(v=='cmq'){cmRep=null}
else if(v=='cmdel'&&c){if(j!=null)a[i].r.splice(j,1);else a.splice(i,1);if(cmRep!=null&&!a[cmRep])cmRep=null}
else if(v=='cmmore'&&c){c.x=true}
else if(v=='cmsort'){cmOrd=cmOrd?0:1}
cmRe(k);if(v=='cmdel')upd(cp);if(v=='cmrp')shp.querySelector('#cmi').focus();return true};
shp.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.id=='cmi'){e.preventDefault();shp.querySelector('[data-sx=send]').click()}});
shp.addEventListener('input',e=>{if(e.target.id=='cmi')shp.querySelector('.fbc-s').classList.toggle('on',!!e.target.value.trim())});
const done=m=>{const c=cp.querySelector('.cta');c.firstChild.textContent=m+' ';c.classList.add('ok');shClose();toast(m)};
const ctaOpen=a=>{const tg=a.querySelector('.md .tag').textContent,t=a.querySelector('.mt').textContent,x=a.querySelector('.cp p').textContent.replace(a.querySelector('.cp p b').textContent,'').trim();
const hd=`<div class="shx-h"><b>${tg}</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><b style="font:800 20px/1.2 var(--h)">${t}</b>`;
if(tg=='Formation')shOpen(`${hd}<input id="rgn" class="shx-i" placeholder="Votre nom complet" autocomplete="off"><input id="rgt" class="shx-i" placeholder="Votre téléphone" inputmode="tel" autocomplete="off"><button class="btn" data-sx="reg">Confirmer l’inscription</button>`);
else if(tg=='Événement')shOpen(`${hd}<p class="mu">${x}</p><div class="mu">[Date] · [Lieu]</div><button class="btn" data-sx="part">Je participe</button>`);
else shOpen(`${hd}<p class="mu">${x}</p><button class="btn" data-sx="x">Fermer</button>`)};

ap.addEventListener('click',e=>{const b=e.target.closest('[data-go=a10]');const d=b&&b.querySelector('.dot');if(d)d.remove()});
const upd=a=>{const n=cmAll(CM[pi(a)]||[]);a.querySelector('.cc').textContent=n||'';a.querySelector('.cv').textContent=n?(n>1?`Voir les ${n} commentaires`:'Voir le commentaire'):'Ajouter un commentaire…'};
ap.addEventListener('click',e=>{const a=e.target.closest('.ig');if(!a)return;
const l=e.target.closest('.lkb');if(l){a.querySelector('.lc').textContent=l.getAttribute('aria-pressed')=='true'?'1 J’aime':'Soyez le premier à aimer';return}
const sb=e.target.closest('.svb');if(sb){toast(sb.getAttribute('aria-pressed')=='true'?'Publication enregistrée':'Publication retirée des enregistrements');return}
const b=e.target.closest('[data-act]');if(!b)return;cp=a;const k=pi(a);
if(b.dataset.act=='cm'){cmRep=null;shOpen(cmHtml(k));fill(k)}
else if(b.dataset.act=='sh'){const pp=a.querySelector('.cp p'),nm0=a.querySelector('.ih b').textContent;rpOpen({n:nm0,ti:a.querySelector('.mt').textContent,x:pp?pp.textContent.replace(nm0,'').trim():'',bg:a.querySelector('.md').style.background||'',el:a})}
else if(b.dataset.act=='cta'){ctaOpen(a)}
else if(b.dataset.act=='op'){shOpen(opHtml(a))}
else if(b.dataset.act=='fw'){const n=a.querySelector('.ih b').textContent;if(b.classList.contains('lnk')&&!b.classList.contains('done')){b.classList.add('done');b.textContent='Suivi';b.setAttribute('aria-label','Suivi');setTimeout(()=>{fwTog(n);b.classList.remove('done');b.textContent='Suivre';b.setAttribute('aria-label','Suivre cette page')},550)}else if(!b.classList.contains('lnk')){fwTog(n)}}});
shp.addEventListener('click',e=>{const b=e.target.closest('[data-sx]');if(!b)return;const v=b.dataset.sx;
if(v=='x')shClose();
else if(v.slice(0,2)=='cm'&&cmAct(v,b));
else if(v=='pgrep'){shClose();toast('Merci, la page a été signalée')}
else if(v=='send'){const t=shp.querySelector('#cmi').value.trim();if(!t)return;const k=pi(cp),a=CM[k]=CM[k]||[];if(cmRep!=null&&a[cmRep]){(a[cmRep].r=a[cmRep].r||[]).push({t,ts:Date.now()});a[cmRep].x=true;cmRep=null}else a.push({t,ts:Date.now()});shOpen(cmHtml(k));fill(k);upd(cp)}
else if(v=='link'){try{navigator.clipboard.writeText(location.href)}catch(_){}shClose();toast('Lien copié')}
else if(v=='rep'){shClose();toast('Merci, la publication a été signalée')}
else if(v=='reg'){if(!shp.querySelector('#rgn').value.trim()||!shp.querySelector('#rgt').value.trim()){toast('Renseignez votre nom et votre téléphone');return}done('Inscription envoyée')}
else if(v=='wa'||v=='fb'||v=='cl'||v=='mo'){const t=cp.querySelector('.mt').textContent,u=location.href;shClose();if(v=='wa')window.open('https://wa.me/?text='+encodeURIComponent(t+' '+u),'_blank','noopener');else if(v=='fb')window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(u),'_blank','noopener');else if(v=='cl'){try{navigator.clipboard.writeText(u)}catch(_){}toast('Lien copié')}else if(navigator.share)navigator.share({title:'My UJLoG',text:t,url:u}).catch(()=>{});else toast('Partage non disponible sur cet appareil')}
else if(v=='hsave'){const y=shp.querySelector('#hy').value.trim(),t=shp.querySelector('#ht').value.trim(),x=shp.querySelector('#hx').value.trim();if(!t){toast('Ajoutez un titre');return}H.push([y||'[Année]',t,x||'[Description]']);H=H.map((h,i)=>[h,i]).sort((a,b)=>(hKey(a[0][0])-hKey(b[0][0]))||(a[1]-b[1])).map(a=>a[0]);document.getElementById('hl').innerHTML=hTl();shClose();toast('Jalon ajouté')}
else if(v=='n8'){shClose();go('a8')}
else if(v=='n13'){shClose();go('a13');pAv()}
else if(v=='nact'){aPick()}
else if(v=='n13v'){shClose();go('a13');pAv();setTimeout(()=>{const w=document.getElementById('pvw'),f=document.getElementById('pyt');if(w)w.hidden=false;if(f)f.focus()},250)}
else if(v=='part'){done('Participation confirmée')}
else if(v=='sv'){const s=cp.querySelector('.svb'),on=s.getAttribute('aria-pressed')!='true';s.setAttribute('aria-pressed',on);shClose();toast(on?'Publication enregistrée':'Publication retirée des enregistrements')}
else if(v=='rpgo'){const o=rpI;if(!o)return;const t=shp.querySelector('#rpt').value.trim(),f=document.querySelector('#a1 .sc .ig'),h=`<article class="rpb"><div class="rpb-h"><span class="pva2">${I('usr',16)}</span><div class="fl"><b>Vous</b> a republié<small class="mu">À l’instant</small></div><button data-rpdel>Supprimer</button></div>${t?`<p class="rpb-t">${eA(t)}</p>`:''}<div class="rpe"><span class="rpm" style="background:${eA(o.bg||'var(--g)')}"></span><div><small>${eA(o.n)}</small><b>${eA(o.ti)}</b>${o.x?`<span>${eA(String(o.x).slice(0,90))}</span>`:''}</div></div></article>`;let nw=null;if(f){f.insertAdjacentHTML('beforebegin',h);nw=f.previousElementSibling}else{const sc=document.querySelector('#a1 .sc'),an=sc&&(sc.querySelector('#rec')||sc.querySelector('.hx'));if(an){an.insertAdjacentHTML('afterend',h);nw=an.nextElementSibling}else if(sc){sc.insertAdjacentHTML('beforeend',h);nw=sc.lastElementChild}}if(nw)nw._of=o.el;if(o.el&&o.el.querySelector){const n=(+o.el.dataset.rp||0)+1;o.el.dataset.rp=n;const c=o.el.querySelector('.cp');if(c){let r=c.querySelector('.rpn');if(!r){r=document.createElement('span');r.className='rpn mu';r.style.fontSize='12px';const lc=c.querySelector('.lc');c.insertBefore(r,lc?lc.nextSibling:null)}r.textContent=n+(n>1?' republications':' republication')}}shClose();toast('Publication republiée sur votre profil')}
else if(v=='rpst'){const o=rpI;if(!o)return;MB[0].pub.unshift({c:o.bg||'var(--g)',cap:'Republié : '+o.ti,t:'À l’instant',live:true});document.querySelectorAll('.stories').forEach(s=>s.innerHTML=rowH());renderMy();shClose();toast('Ajouté à votre story')}
else if(v=='st'){MB[0].pub.unshift({c:cp.querySelector('.md').style.background||'var(--g)',cap:'Republié : '+cp.querySelector('.mt').textContent,t:'À l’instant',live:true});document.querySelectorAll('.stories').forEach(s=>s.innerHTML=rowH());renderMy();shClose();toast('Ajouté à votre story')}
else if(v=='nt'){shClose();ntTog(cp.querySelector('.ih b').textContent)}
else if(v=='edme'){const a=cp,t=a._tx!=null?a._tx:'';shOpen(`<div class="shx-h"><b>Modifier la publication</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><textarea id="edpost" class="rpt" rows="5" maxlength="2000" placeholder="Écrivez quelque chose…">${eA(t)}</textarea><button class="btn" data-sx="edmesave">Enregistrer les modifications</button>`)}
else if(v=='edmesave'){const a=cp,t=shp.querySelector('#edpost').value.trim(),col=a.classList.contains('igcl'),tx=a.classList.contains('igtx');if(!t&&(col||tx)){toast('Écrivez un texte');return}a._tx=t;const ttl=col?t:(t.split('\n')[0]||'Publication').slice(0,60),m=a.querySelector('.mt');if(m)m.textContent=ttl;const p=a.querySelector('.cp p'),me=a.querySelector('.ih .fl b').textContent;if(p){if(t){p.style.display='';p.innerHTML='<b>'+eA(me)+'</b> '+esc(t).replace(/\n/g,'<br>')}else p.style.display='none'}if(a._vc){const b=a._vc.querySelector('.pad b');if(b)b.textContent=ttl}if(window.UJEDPOST)window.UJEDPOST(a,ttl||'Publication');shClose();toast('Publication modifiée')}
else if(v=='del'){shOpen(`<div class="shx-h"><b>Supprimer la publication ?</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><p class="mu" style="margin:0 0 8px">Cette action est définitive : la publication, ses commentaires et ses mentions J’aime seront supprimés.</p><button class="btn" data-sx="delgo" style="background:var(--red)">Supprimer</button><button class="shx-o" data-sx="x" style="justify-content:center">Annuler</button>`)}
else if(v=='delgo'){const a=cp;if(!a)return;delPost(a);if(window.UJRMPOST)window.UJRMPOST(a);shClose();toast('Publication supprimée')}
else if(v=='ed'){const p=cp.querySelector('.cp p'),x=p.textContent.replace(p.querySelector('b').textContent,'').trim();shOpen(`<div class="shx-h"><b>Modifier la publication</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><input id="edt1" class="shx-i" maxlength="80" value="${eA(cp.querySelector('.mt').textContent)}"><input id="edx1" class="shx-i" maxlength="160" value="${eA(x)}"><button class="btn" data-sx="edsave">Enregistrer les modifications</button>`)}
else if(v=='edsave'){const t=shp.querySelector('#edt1').value.trim(),x=shp.querySelector('#edx1').value.trim();if(!t){toast('Ajoutez un titre');return}cp.querySelector('.mt').textContent=t;const p=cp.querySelector('.cp p'),n=p.querySelector('b').textContent;p.innerHTML=`<b>${eA(n)}</b> ${eA(x||t)}`;shClose();toast('Publication modifiée')}
else if(v=='pn'){const m=cp.querySelector('.ih .mu'),p=cp.dataset.pin=='1';if(p){delete cp.dataset.pin;m.textContent=m.textContent.replace(' · Épinglée','')}else{const A=[...document.querySelectorAll('.ig')],O=A.map((_,i)=>CM[i]),f=cp.parentNode.querySelector('.ig');cp.dataset.pin='1';m.textContent+=' · Épinglée';if(f&&f!==cp){f.parentNode.insertBefore(cp,f);const N={};[...document.querySelectorAll('.ig')].forEach((el,i)=>{const o=O[A.indexOf(el)];if(o)N[i]=o});Object.keys(CM).forEach(k=>delete CM[k]);Object.assign(CM,N)}}shClose();toast(p?'Publication désépinglée':'Publication épinglée en haut du fil')}
else if(v=='stt'){shOpen(`<div class="shx-h"><b>Statistiques</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><b style="font:800 18px/1.2 var(--h)">${eA(cp.querySelector('.mt').textContent)}</b><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">${['Vues','J’aime','Commentaires','Partages'].map(l=>`<div class="card pad" style="text-align:center"><b style="font:800 24px var(--h);display:block">0</b><span class="mu">${l}</span></div>`).join('')}</div>`)}
else if(v=='unf'){shClose();fwTog(uq)}
else if(v=='uf'){shClose();fwTog(cp.querySelector('.ih b').textContent)}
else if(v=='hide'){cp.style.display='none';shClose();toast('Publication masquée')}});
shp.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.id=='cmi')shp.querySelector('[data-sx=send]').click()});

// Marketplace : fiche article / offre, candidature vendeur
const mkShow=i=>{const m=MK[i],pr=m.t!='Étudiant';shOpen(`<div class="shx-h"><b>${m.t}</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><div class="mki mkbig" style="background:${m.bg}">${I('cam',44)}</div><b style="font:800 20px/1.2 var(--h)">${m.n}</b><b class="mkv" style="font-size:18px">${m.v}</b><span class="mu">${m.s}</span><div class="li" style="padding-left:0"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I('usr',20)}</span><div class="fl"><b>${m.s.split(' · ')[0]}</b><span class="mu" style="font-size:13px">${pr?'Partenaire de l’université':'Étudiant vérifié · [UFR]'}</span></div></div><div class="row" style="gap:6px;flex-wrap:wrap"><span class="tag">${pr?'Carte étudiante':'Bon état'}</span><span class="tag">Sur le campus</span><span class="tag">[Catégorie]</span></div><p class="mu" style="margin:0">[Description : état, taille, conditions de l’offre, lieu de remise.]</p><button class="btn" data-sx="mkgo" data-pr="${pr?1:0}">${pr?'Profiter de l’offre':'Contacter le vendeur'}</button>`)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-mk]');if(!b)return;const k=b.dataset.mk;
if(k=='sell')shOpen(`<div class="shx-h"><b>Vendre un article</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><p class="mu" style="margin:0">Postulez pour vendre : votre annonce est publiée après validation par un responsable.</p><input id="mkn" class="shx-i" placeholder="Nom de l’article" autocomplete="off"><input id="mkp" class="shx-i" placeholder="Prix (FCFA)" inputmode="numeric" autocomplete="off"><input id="mkt" class="shx-i" placeholder="Votre téléphone" inputmode="tel" autocomplete="off"><button class="btn" data-sx="mksend">Envoyer ma candidature</button>`);
else mkShow(+k)});
shp.addEventListener('click',e=>{const b=e.target.closest('[data-sx=mkgo],[data-sx=mksend]');if(!b)return;
if(b.dataset.sx=='mkgo'){shClose();toast(b.dataset.pr=='1'?'Offre enregistrée · présentez votre carte étudiante':'Demande envoyée au vendeur');return}
if(!shp.querySelector('#mkn').value.trim()||!shp.querySelector('#mkt').value.trim()){toast('Renseignez l’article et votre téléphone');return}
shClose();toast('Candidature envoyée · un responsable va la valider')});
document.addEventListener('click',e=>{const b=e.target.closest('[data-mksv]');if(!b)return;const on=b.getAttribute('aria-pressed')!='true';b.setAttribute('aria-pressed',on);toast(on?'Annonce enregistrée':'Annonce retirée des enregistrements')});
// Cloche générale : un seul réglage pour toutes les pages suivies (présentes et futures)
document.addEventListener('click',e=>{if(!e.target.closest('[data-gbell]'))return;GN=!GN;if(GN)FW.forEach(n=>NT.add(n));else NT.clear();
document.querySelectorAll('[data-gbell]').forEach(g=>{g.setAttribute('aria-pressed',GN);g.setAttribute('aria-label',GN?'Désactiver les alertes de toutes les pages suivies':'Activer les alertes de toutes les pages suivies')});
toast(GN?'Alertes activées pour toutes les pages que vous suivez':'Alertes désactivées')});
ap.addEventListener('dblclick',e=>{const m=e.target.closest('.ig .md');if(!m)return;const a=m.closest('.ig'),l=a.querySelector('.lkb');if(l.getAttribute('aria-pressed')!='true'){l.setAttribute('aria-pressed','true');a.querySelector('.lc').textContent='1 J’aime'}const f=document.createElement('span');f.className='bigfl';f.innerHTML=I('hrt',96);m.appendChild(f);setTimeout(()=>f.remove(),700)});
const sv=document.getElementById('sv'),tt=document.getElementById('toast'),rm=matchMedia('(prefers-reduced-motion:reduce)');let pm=1;const rmb=(m,t)=>{pm=m;document.querySelector('#a9 .sc').innerHTML=memb(m,t||0)};let cur=null,tmr,ttm,selCol='var(--g)';
const go=id=>{if(mq.matches){show(id)}else{const t=document.getElementById(id);t&&t.scrollIntoView({block:'start',inline:'center'})}};
const toast=m=>{tt.textContent=m;tt.classList.add('on');clearTimeout(ttm);ttm=setTimeout(()=>tt.classList.remove('on'),2400)};
const esc=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const SD=()=>[['Étudiants',[['[Nom de l’étudiant]','Étudiant(e) · [UFR], [Niveau]'],['[Nom du responsable]','Responsable de filière']],'usr'],['Événements',[['[Événement]','[Lieu] · [Dates]'],['Camp des jeunes','[Lieu] · [Dates]']],'cal'],['Publications',[...document.querySelectorAll('#a1 .ig')].map(a=>[a.querySelector('.mt').textContent,a.querySelector('.md .tag').textContent,a]),'grid']];
const sRender=q=>{q=q.trim().toLowerCase();const o=SD().map(([h,l,ic])=>{const r=l.filter(x=>!q||(x[0]+' '+x[1]).toLowerCase().includes(q));return r.length?`<div class="mu" style="font-weight:700;padding:8px 4px 0">${h}</div><div class="card">${r.map(x=>`<button class="li" style="width:100%;text-align:left" data-sq="${h}:${l.indexOf(x)}"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I(ic,20)}</span><div class="fl"><b>${esc(x[0])}</b><span class="mu" style="font-size:13px">${esc(x[1])}</span></div></button>`).join('')}</div>`:''}).join('');document.getElementById('sr').innerHTML=o||'<p class="mu" style="text-align:center;padding:32px 0">Aucun résultat</p>'};
ap.addEventListener('input',e=>{if(e.target.id=='sq')sRender(e.target.value);if(e.target.id=='ptt')document.getElementById('ppt').textContent=e.target.value||'[Titre]'});
ap.addEventListener('click',e=>{
if(e.target.closest('[data-go=a12]')){sRender('');setTimeout(()=>{const i=document.getElementById('sq');i.value='';i.focus()},60);return}
const r=e.target.closest('[data-sq]');if(r){const [h,i]=r.dataset.sq.split(':');if(h=='Publications'){const a=SD()[2][1][+i][2];go('a1');a.style.display='';a.scrollIntoView({block:'center'})}else toast('Fiche à venir')}});
ap.addEventListener('click',e=>{if(!e.target.closest('[data-plus]'))return;shOpen(`<div class="shx-h"><b>Créer</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><button class="shx-o" data-sx="n8">${I('cam',22)}Nouvelle story</button><button class="shx-o" data-sx="n13">${I('news',22)}Nouvelle publication</button><button class="shx-o" data-sx="nact">${I('chk',22)}Lancer une activité (admin)</button>`)});
function mkCar(md,bgs){const n=bgs.length;md.classList.add('hascar');const car=document.createElement('div');car.className='car';car.innerHTML=bgs.map(b=>`<div class="cs" style="background:${b}">${b.includes('url(')?'':I('cam',44)}</div>`).join('');md.prepend(car);const cn=document.createElement('span');cn.className='cn2';cn.textContent='1/'+n;md.append(cn);let dt=null;if(n<=12){dt=document.createElement('span');dt.className='cdt';dt.innerHTML=bgs.map((_,i)=>`<i${i?'':' class="on"'}></i>`).join('');md.append(dt)}
let held=false,sec=0;const ix=()=>Math.round(car.scrollLeft/(car.clientWidth||1)),gt=i=>car.scrollTo({left:i*car.clientWidth,behavior:'smooth'});
car.addEventListener('scroll',()=>{const i=ix();cn.textContent=(i+1)+'/'+n;if(dt)[...dt.children].forEach((d,k)=>d.classList.toggle('on',k==i));if(!held)sec=0},{passive:true});
['pointerdown','touchstart','mousedown'].forEach(t=>car.addEventListener(t,()=>{held=true},{passive:true}));
['pointerup','pointercancel','touchend','touchcancel','mouseup','mouseleave'].forEach(t=>car.addEventListener(t,()=>{held=false;sec=0},{passive:true}));
setInterval(()=>{if(held||document.hidden||!md.isConnected||!md.offsetParent)return;if(++sec>=5){sec=0;gt((ix()+1)%n)}},1000)}
document.querySelectorAll('.md[data-car]').forEach(m=>mkCar(m,Array.from({length:+m.dataset.car},(_,i)=>aGr('p'+i))));
let pr='3/2',pimg='',pimgs=[];const PC={'Actualité':['var(--g)','À la une','Voir les détails'],'Formation':['#1E40AF','Formation','S’inscrire à la formation'],'Événement':['#16A34A','Événement','Voir l’événement']};
/* v27 : publication personnelle (ton profil uniquement, format choisi selon la photo, fond coloré, humeur, lieu) */
const Q13={d:[],bg:-1,mo:-1,lc:-1,au:0,pan:''},g13=id=>document.getElementById(id);
const PBG=['linear-gradient(135deg,#15803D,#3DBE6A)','linear-gradient(135deg,#0E7C8C,#15803D)','linear-gradient(135deg,#1E3FAA,#7C3AED)','linear-gradient(135deg,#B0306A,#F08A24)','linear-gradient(135deg,#C26A00,#F5B83D)','linear-gradient(135deg,#0B1630,#44506A)','linear-gradient(135deg,#7C3AED,#EC4899)'];
const PMO=[['😊','content(e)'],['🤩','enthousiaste'],['📚','en révision'],['🎓','fier(e)'],['😅','stressé(e)'],['🙏','reconnaissant(e)'],['🔥','motivé(e)'],['😴','fatigué(e)']];
const PLC=['Bibliothèque universitaire','Restaurant universitaire','Résidence universitaire','Amphithéâtre','Salle de TD','Campus de l’UJLoG'];
const PAU=['Public','Mes followers','Privé'],PFN={'3/2':'Paysage 3:2','2/3':'Portrait 2:3','1/1':'Carré 1:1'};
const fitR=(w,h)=>{const k=w/h;return k>1.15?'3/2':k<.87?'2/3':'1/1'};
const pChk=()=>{g13('ppub').disabled=!(g13('ptx').value.trim()||pimgs.length||g13('pyt').value.trim())};
const pCard=()=>{const c=g13('pcard'),t=g13('ptx'),on=Q13.bg>=0;if(on){c.dataset.bg='1';c.style.background=PBG[Q13.bg];t.maxLength=130;if(t.value.length>130)t.value=t.value.slice(0,130);t.style.height='auto';t.style.height=t.scrollHeight+'px'}else{delete c.dataset.bg;c.style.background='';t.maxLength=500;t.style.height=''}const n=t.value.length;g13('pct').textContent=n>=t.maxLength*.8?n+'/'+t.maxLength:''};
const pCtx=()=>{const p=[];if(Q13.mo>=0)p.push('se sent '+PMO[Q13.mo][0]+' '+PMO[Q13.mo][1]);if(Q13.lc>=0)p.push('📍 '+PLC[Q13.lc]);const e=g13('pctx');e.textContent=p.join(' · ');e.hidden=!p.length};
const pAud=()=>{g13('paud').innerHTML=I(Q13.au==2?'usr':'globe',14)+'<span>'+PAU[Q13.au]+'</span>'};
const pTools=()=>{[['pbgb','bg'],['pmood','mood'],['ploc','loc']].forEach(([id,k])=>g13(id).setAttribute('aria-pressed',Q13.pan==k))};
const pMedia=()=>{const w=g13('pmw'),v=g13('ppv');w.hidden=!pimgs.length;if(!pimgs.length){v.style.background='';g13('pth').innerHTML='';return}v.style.background=pimg;v.style.aspectRatio=pr;v.style.width=pr=='2/3'?'62%':'100%';g13('pfm').textContent=PFN[pr]+(pimgs.length>1?' · '+pimgs.length+' photos':'');
g13('pth').innerHTML=pimgs.map((c,i)=>`<div class="th" style="background:${c}"><button data-prm="${i}" aria-label="Retirer la photo ${i+1}">${I('cls',12)}</button></div>`).join('')+(pimgs.length<20?`<button class="ad" id="padd" aria-label="Ajouter des photos">${I('plus',22)}</button>`:'')};
const pSet=()=>{pimgs=Q13.d.map(u=>'url('+u+') center/cover');pimg=pimgs[0]||'';if(!pimgs.length){pr='3/2';pMedia();pChk();return}const im=new Image();im.onload=()=>{pr=fitR(im.naturalWidth,im.naturalHeight);pMedia();pChk()};im.onerror=()=>{pr='3/2';pMedia();pChk()};im.src=Q13.d[0]};
const cAdd=k=>'<span class="ujadd"><input id="pcust" maxlength="40" placeholder="'+(k=='mood'?'Autre humeur…':'Autre lieu…')+'" autocomplete="off" enterkeyhint="done"><button type="button" class="chp" data-padd="'+k+'">Ajouter</button></span>';const pPan=k=>{const P=g13('ppan');if(!k||Q13.pan==k){Q13.pan='';P.hidden=true;P.innerHTML='';pTools();return}Q13.pan=k;P.dataset.k=k;let h='';
if(k=='bg')h=`<button class="cmpsw none" data-pbg="-1" aria-pressed="${Q13.bg<0}" aria-label="Sans fond">${I('cls',16)}</button>`+PBG.map((g,i)=>`<button class="cmpsw" data-pbg="${i}" style="background:${g}" aria-pressed="${Q13.bg==i}" aria-label="Fond ${i+1}"></button>`).join('');
else if(k=='mood')h=PMO.map((m,i)=>`<button class="chp" data-pmo="${i}" aria-pressed="${Q13.mo==i}">${m[0]} ${m[1]}</button>`).join('')+cAdd('mood');
else h=PLC.map((l,i)=>`<button class="chp" data-plc="${i}" aria-pressed="${Q13.lc==i}">${l}</button>`).join('')+cAdd('loc');
P.innerHTML=h;P.hidden=false;pTools()};
const pRe=()=>{const k=Q13.pan;Q13.pan='';if(k)pPan(k)};
const pAv=()=>{const a=g13('pav');if(!a)return;if(MB[0].av){a.innerHTML='';a.style.background="url('"+MB[0].av+"') center/cover"}else{a.style.background='';a.innerHTML=I('usr',26)}};
ap.addEventListener('click',e=>{const T=id=>e.target.closest('#'+id);
if(e.target.closest('[data-go="a13"]'))pAv();
if(T('ppick')||T('padd')){g13('pfile').click();return}
if(T('pvbtn')){const w=g13('pvw');w.hidden=!w.hidden;g13('pvbtn').setAttribute('aria-pressed',!w.hidden);if(!w.hidden)g13('pyt').focus();return}
if(T('pbgb')){if(pimgs.length){toast('Retire les photos pour utiliser un fond coloré');return}pPan('bg');return}
let ca=e.target.closest('[data-padd]');if(ca){const i=g13('pcust'),v=i.value.trim().slice(0,40);if(v){if(ca.dataset.padd=='mood'){const m=v.match(/^(\p{Extended_Pictographic}\uFE0F?)\s*(.*)$/u);PMO.push(m?[m[1],m[2]||'à ma façon']:['💭',v]);Q13.mo=PMO.length-1}else{PLC.push(v);Q13.lc=PLC.length-1}pCtx();pPan(null)}else i.focus();return}if(T('pmood')){pPan('mood');return}if(T('ploc')){pPan('loc');return}
if(T('paud')){Q13.au=(Q13.au+1)%PAU.length;pAud();return}
let b=e.target.closest('[data-pbg]');if(b){Q13.bg=+b.dataset.pbg;pCard();pChk();pRe();return}
b=e.target.closest('[data-pmo]');if(b){const i=+b.dataset.pmo;Q13.mo=Q13.mo==i?-1:i;pCtx();pPan(null);return}
b=e.target.closest('[data-plc]');if(b){const i=+b.dataset.plc;Q13.lc=Q13.lc==i?-1:i;pCtx();pPan(null);return}
b=e.target.closest('[data-prm]');if(b){Q13.d.splice(+b.dataset.prm,1);pSet();return}
if(T('ppub')){const bt=g13('ppub');if(bt.disabled)return;const t=g13('ptx').value.trim(),yv=g13('pyt').value.trim();
if(yv&&!vInfo(yv)){toast(/vm\.tiktok|tiktok\.com\/t\//.test(yv)?'Lien TikTok court : ouvrez la vidéo et copiez le lien complet (…/video/…)':'Lien non reconnu (YouTube ou TikTok)');return}
const vi=vInfo(yv),col=Q13.bg>=0,ttl=col?t:(t.split('\n')[0]||'Publication').slice(0,60),h=ig(col?PBG[Q13.bg]:(pimg||'var(--g)'),'Publication',esc(ttl),'','','À l’instant',col?'1/1':pr,0),f=document.querySelector('#a1 .ig');
if(f)f.insertAdjacentHTML('beforebegin',h);else{const _sc=document.querySelector('#a1 .sc'),_an=_sc&&(_sc.querySelector('#rec')||_sc.querySelector('.hx'));if(_an)_an.insertAdjacentHTML('afterend',h);else if(_sc)_sc.insertAdjacentHTML('beforeend',h)}
const a=document.querySelector('#a1 .ig'),me=MB[0].n;a.classList.add('igme');a._tx=t;if(col)a.classList.add('igcl');else if(!pimg&&!vi)a.classList.add('igtx');
const av=a.querySelector('.ih .av');if(av){if(MB[0].av){av.innerHTML='';av.style.background="url('"+MB[0].av+"') center/cover"}else av.innerHTML=I('usr',22)}
const vb=a.querySelector('.ih .fl svg.vb');if(vb)vb.remove();const nb=a.querySelector('.ih .fl b');if(nb){nb.textContent=me;nb.dataset.ownh='1'}const fw=a.querySelector('.ih .fwb');if(fw)fw.remove();
const lv=a.querySelector('.ih .fl .mu');if(lv){const p=[];if(Q13.mo>=0)p.push(PMO[Q13.mo][0]+' se sent '+PMO[Q13.mo][1]);if(Q13.lc>=0)p.push('📍 '+PLC[Q13.lc]);p.push(Q13.au?PAU[Q13.au]:'Étudiant(e)');lv.textContent=p.join(' · ')}
const p=a.querySelector('.cp p');if(p){if(t)p.innerHTML='<b>'+eA(me)+'</b> '+esc(t).replace(/\n/g,'<br>');else p.style.display='none'}
if(pimgs.length>1)mkCar(a.querySelector('.md'),pimgs);
if(vi){const md=a.querySelector('.md');md.classList.add('vd');if(vi.pl=='tt')md.classList.add('tt');md.style.aspectRatio=vi.pl=='tt'?'9/16':'16/9';md.insertAdjacentHTML('afterbegin',ytF(vi.id,vi.pl));const vl=g13('vids');if(vl)vl.insertAdjacentHTML('afterbegin',VC(vi.id,esc(ttl),'À l’instant · '+eA(me),vi.pl));if(vl)a._vc=vl.firstElementChild}
g13('ptx').value='';g13('pyt').value='';g13('pvw').hidden=true;g13('pvbtn').setAttribute('aria-pressed','false');g13('pfile').value='';Q13.d=[];Q13.bg=-1;Q13.mo=-1;Q13.lc=-1;Q13.au=0;Q13.pan='';g13('ppan').hidden=true;g13('ppan').innerHTML='';pCard();pCtx();pAud();pTools();pSet();
{const mq=a.querySelector('.md');MB[0].posts=MB[0].posts||[];MB[0].posts.unshift({c:(mq&&mq.style.background)||'var(--g)',el:a,t:ttl});try{renderMy()}catch(_){}}if(window.UJADDPOST)window.UJADDPOST(ttl||'Publication',a);go('a1');toast('Publication publiée')}});
ap.addEventListener('input',e=>{if(e.target.id=='ptx'){pCard();pChk()}else if(e.target.id=='pyt')pChk()});
ap.addEventListener('change',e=>{if(e.target.id!='pfile')return;const fs=[...e.target.files].slice(0,20);if(!fs.length)return;Promise.all(fs.map(f=>new Promise(ok=>{const r=new FileReader();r.onload=()=>ok(r.result);r.readAsDataURL(f)}))).then(D=>{if(Q13.bg>=0){Q13.bg=-1;pCard();pRe()}Q13.d=Q13.d.concat(D).slice(0,20);e.target.value='';pSet();toast(Q13.d.length>1?Q13.d.length+' photos : défilement automatique':'Photo ajoutée')})});
ap.addEventListener('click',e=>{const y=e.target.closest('.ytf');if(y){const id=y.dataset.yt;if(!id){toast('Collez un lien YouTube ou TikTok dans « Publier une vidéo »');return}const f=document.createElement('iframe');f.src=y.dataset.pl=='tt'?'https://www.tiktok.com/player/v1/'+id+'?autoplay=1&description=0&music_info=0&rewind=0&native_context_menu=0':'https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1';f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.allowFullscreen=true;f.title='Vidéo';const h=y.parentNode;h.classList.add('pl');h.appendChild(f);y.remove();return}
const b=e.target.closest('#a7 .seg button');if(b&&['Pour vous','Abonnements','Officiel','Vidéos'].includes(b.textContent.trim())){const v=b.textContent.trim()=='Vidéos';document.getElementById('vids').style.display=v?'flex':'none';document.getElementById('nws').style.display=v?'none':'contents'}});
const aSel=(id,L,v)=>`<select class="asel" id="${id}">${L.map(x=>`<option${x==v?' selected':''}>${aE(x)}</option>`).join('')}</select>`;
const aHd=t=>`<div class="shx-h"><b>${t}</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div>`;
const aPick=()=>shOpen(aHd('Lancer une activité')+Object.entries(A_T).map(([k,v])=>`<button class="shx-o" data-a="mk" data-t="${k}">${v[0]}</button>`).join(''));
const elSheet=a=>{CE=a.id;const k=elOk(a),vt=k&&a.my==null;shOpen(aHd(aE(a.ttl))+`<div class="mu" style="font-size:13px">Vote réservé aux étudiants de ${aE(a.ufr)} · ${a.niv}${gTxt(a)}</div>`+a.o.map((x,i)=>`<button class="opt" data-a="${vt?'ep':'no'}" data-id="${a.id}" data-i="${i}" style="${a.sel==i&&vt||a.my==i?'outline:2px solid var(--g)':''}">${cav(a,i)}<span class="cn">${aE(x[0])}</span>${a.my==i?'<b>✓</b>':''}</button>`).join('')+(vt?`<button class="btn" data-a="ec" data-id="${a.id}">Confirmer mon vote</button>`:k?'<p class="mu">Votre vote est enregistré. Les résultats seront publiés à la clôture.</p>':`<p class="mu" style="display:flex;gap:6px">${I('shd',16)}<span>Vous êtes en ${ME.niv} · ${aE(ME.ufr)} · ${ME.g=='Fille'?'Fille':'Garçon'} : vous pouvez consulter les candidats, mais pas voter.</span></p>`)+`<div class="mu" style="font-size:12px;font-weight:700;padding-top:6px">Mon profil étudiant (démo)</div><div style="display:flex;gap:8px">${aSel('mu',UFR,ME.ufr)}${aSel('mn',NIV,ME.niv)}${aSel('mg',['Fille','Garçon'],ME.g)}</div>`)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const k=b.dataset.a,a=ACTS[b.dataset.id],i=+b.dataset.i;
if(k=='v'){a.o[i][1]++;a.my=i;aRe(a.id);toast('Vote enregistré')}
else if(k=='q'){a.my=i;aRe(a.id)}
else if(k=='ev'){a.my=!a.my;a.n+=a.my?1:-1;aRe(a.id);toast(a.my?'Inscription confirmée':'Inscription annulée')}
else if(k=='id'){const f=b.parentNode.querySelector('.ain');if(!f.value.trim()){toast('Écrivez votre idée');return}a.n++;aRe(a.id);toast('Idée envoyée, merci !')}
else if(k=='pe'){a.my=!a.my;a.n+=a.my?1:-1;aRe(a.id);toast(a.my?'Merci, pétition signée':'Signature retirée')}
else if(k=='el')elSheet(a);
else if(k=='ep'){a.sel=i;elSheet(a)}
else if(k=='ec'){if(a.sel==null){toast('Choisissez un candidat');return}a.o[a.sel][1]++;a.my=a.sel;shClose();aRe(a.id);toast('Vote enregistré')}
else if(k=='mk'){const t=b.dataset.t;shOpen(aHd(A_T[t][0])+`<input class="ain" id="at" maxlength="80" placeholder="${t=='po'||t=='qz'||t=='de'?'Question':'Titre'}" autocomplete="off"><div class="mu" style="font-size:12px;font-weight:700">Image de couverture (facultatif)</div><input type="file" id="aim" accept="image/*">`+(t=='el'?`<div class="mu" style="font-size:12px;font-weight:700">Qui peut voter ?</div><div style="display:flex;gap:8px">${aSel('au',UFR,UFR[0])}${aSel('an',NIV,NIV[0])}${aSel('ag',GEN,'Tous')}</div>`:'')+`<button class="btn" data-a="go" data-t="${t}">Lancer</button>`)}
else if(k=='go'){const t=b.dataset.t,ttl=document.getElementById('at').value.trim();if(!ttl){toast('Ajoutez un titre');return}const o={ttl};if(t=='el'){o.ufr=document.getElementById('au').value;o.niv=document.getElementById('an').value;o.g=document.getElementById('ag').value}const fin=()=>{const n=mkAct(t,o);document.querySelector('#a1 .ig').insertAdjacentHTML('beforebegin',actCard(n));toast('Activité lancée : elle apparaît dans le fil')},fl=document.getElementById('aim').files[0];shClose();if(fl){const rd=new FileReader();rd.onload=()=>{o.img='url('+rd.result+') center/cover';fin()};rd.readAsDataURL(fl)}else fin()}});
document.addEventListener('change',e=>{const t=e.target.id;if(t!='mu'&&t!='mn'&&t!='mg')return;if(t=='mu')ME.ufr=e.target.value;else if(t=='mg')ME.g=e.target.value;else ME.niv=e.target.value;Object.values(ACTS).filter(x=>x.t=='el').forEach(x=>aRe(x.id));if(CE)elSheet(ACTS[CE])});
const jT=d=>{document.documentElement.dataset.theme=d?'dark':'light';const m=document.getElementById('dmode');if(m)m.setAttribute('aria-checked',d)};
let jS=null;try{jS=localStorage.getItem('jea-theme')}catch(_){}
jT(jS?jS=='dark':matchMedia('(prefers-color-scheme:dark)').matches);
ap.addEventListener('click',e=>{if(!e.target.closest('#dmode'))return;const d=document.getElementById('dmode').getAttribute('aria-checked')=='true';jT(d);try{localStorage.setItem('jea-theme',d?'dark':'light')}catch(_){}});
let pa=0;
const renderAcc=()=>{if(pa>=ACC.length)pa=0;const a=document.getElementById('accl'),c=document.getElementById('pas');if(a)a.innerHTML=ACC.map((x,i)=>`<div class="li">${bdg(x.l,28)}<div class="fl"><b>${eA(x.n)}</b><span class="mu" style="font-size:13px">${LV[x.l]}</span></div></div>`).join('');if(c)c.innerHTML=ACC.map((x,i)=>`<button class="chip" data-i="${i}" aria-pressed="${i==pa}">${bdg(x.l,16)}${eA(x.n)}</button>`).join('')};
renderAcc();
ap.addEventListener('click',e=>{const c=e.target.closest('#pas .chip');if(c){pa=+c.dataset.i;document.querySelectorAll('#pas .chip').forEach(x=>x.setAttribute('aria-pressed',x==c));return}
});
ap.addEventListener('click',e=>{if(!e.target.closest('#hadd'))return;shOpen(`<div class="shx-h"><b>Ajouter un jalon</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><input id="hy" class="shx-i" placeholder="Année (ex. 1985)" inputmode="numeric" maxlength="12" autocomplete="off"><input id="ht" class="shx-i" placeholder="Titre du jalon" maxlength="80" autocomplete="off"><input id="hx" class="shx-i" placeholder="Description" maxlength="240" autocomplete="off"><button class="btn" data-sx="hsave">Ajouter</button>`)});
const adj=(m,d)=>{for(let k=m+d;k>=0&&k<MB.length;k+=d)if(live(k).length)return k;return -1};
function openSV(m,row,i,pg,lst){cur=lst?{m:-1,row:false,pg,une:1,l:lst,i:i||0}:pg?{m:-1,row:false,pg,l:PS[pg]||[],i:i||0}:{m,row,l:row?live(m):MB[m].pub,i:i||0};if(!cur.l.length){cur=null;return}sv.classList.add('on');svPaint()}window.UJ_SV=openSV;
function svPaint(){clearTimeout(tmr);const M=cur.pg?{n:cur.pg}:MB[cur.m],p=cur.l[cur.i],n=cur.l.length,dx=cur.last==null||cur.last==cur.i?0:(cur.i>cur.last?46:-46);cur.last=cur.i;if(cur.pg){if(!cur.une)pseen.add(cur.pg)}else if(cur.row)seen.add(cur.m);
sv.innerHTML=`<div class="svp" role="dialog" aria-modal="true" aria-label="Photos de ${M.n}"><div class="svbk" style="background:${p.c}"></div>
<div class="svh"><span class="sva">${cur.pg?`<img class="lg" alt="" src="${LOGO}" style="border-radius:10px">`:I('usr',20)}</span><button class="nm" ${cur.pg?`data-pgn="${eA(cur.pg)}"`:`data-member="${cur.m}"`}><span>${M.n}</span><small>${p.t}</small></button><button class="ibn" data-close aria-label="Fermer">${I('cls')}</button></div>
<span class="svcnt" aria-live="polite">${cur.i+1} / ${n}</span>
<div class="svst" data-swipe><div class="pol" style="--tl:${cur.i%2?2:-2}deg;--dx:${dx}"><div class="polp" data-dbl style="background:${p.c}${p.fl?`;filter:${p.fl}`:''}">${I('cam',64)}${UJLOC.html(p.loc)}</div><p class="polc"${p.f?` style="font-family:${p.f}"`:''}>${p.cap}</p></div></div>
<button class="svz l" data-sv="prev" aria-label="Photo précédente">${I('chv',26)}</button><button class="svz r" data-sv="next" aria-label="Photo suivante">${I('chv',26)}</button>
<div class="svdots">${cur.l.map((_,k)=>`<i class="${k==cur.i?'on':''}"></i>`).join('')}</div>
<div class="svre" role="group" aria-label="Réagir"><button data-re="❤️" aria-label="J’adore" style="--i:0"><span>${EMO['❤️']}</span></button><button data-re="🔥" aria-label="Flamme" style="--i:1"><span>${EMO['🔥']}</span></button><button data-re="😍" aria-label="Coup de cœur" style="--i:2"><span>${EMO['😍']}</span></button><button data-re="😂" aria-label="Haha" style="--i:3"><span>${EMO['😂']}</span></button><button data-re="😮" aria-label="Waouh" style="--i:4"><span>${EMO['😮']}</span></button><button data-re="👏" aria-label="Bravo" style="--i:5"><span>${EMO['👏']}</span></button></div>
<div class="svf">${cur.m?`<button class="svr">Envoyer un message…</button>`:'<span class="svr" style="display:flex;align-items:center">Double-tap sur la photo pour aimer</span>'}<button class="lkb" aria-pressed="${!!p.lk}" aria-label="J’aime">${I('hrt',26)}</button><button class="shb" aria-label="Partager">${I('shr',26)}</button></div></div>`;
const c=sv.querySelector('[data-close]');c&&c.focus({preventScroll:true})}
function svClose(){clearTimeout(tmr);sv.classList.remove('on');sv.innerHTML='';cur=null;document.querySelector('#a1 .stories').innerHTML=rowH();document.querySelectorAll('#pgp .pgr').forEach(b=>b.classList.toggle('seen',pseen.has(b.dataset.pgst)))}
function svNext(){if(!cur)return;if(cur.i<cur.l.length-1){cur.i++;svPaint();return}
if(cur.row){const n=adj(cur.m,1);if(n>=0){cur.m=n;cur.l=live(n);cur.i=0;svPaint();return}}svClose()}
function svPrev(){if(!cur)return;if(cur.i>0){cur.i--;svPaint();return}
if(cur.row){const n=adj(cur.m,-1);if(n>=0){cur.m=n;cur.l=live(n);cur.i=cur.l.length-1}}svPaint()}
sv.addEventListener('click',e=>{if(e.target===sv||e.target.closest('[data-close]')){svClose();return}
const z=e.target.closest('[data-sv]');if(z){z.dataset.sv=='next'?svNext():svPrev();return}
const re=e.target.closest('[data-re]');if(re){fly(re.dataset.re);return}
const pn=e.target.closest('[data-pgn]');if(pn){const n=pn.dataset.pgn;svClose();pgOpen(n,PGS.n==n?PGS.tab:0);return}
const mb=e.target.closest('[data-member]');if(mb){const m=+mb.dataset.member;svClose();if(m){rmb(m);go('a9')}else go('a4');return}
const l=e.target.closest('.lkb');if(l){const on=l.getAttribute('aria-pressed')!='true';l.setAttribute('aria-pressed',on);if(cur)cur.l[cur.i].lk=on}});
const EMO={"❤️": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><defs><linearGradient id=\"eHt\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FF6A6E\"/><stop offset=\"1\" stop-color=\"#D2102A\"/></linearGradient></defs><path d=\"M32 57C10 41 3 29 3 20.500C3 12 9.500 6.500 17 6.500C24 6.500 29 10.500 32 16C35 10.500 40 6.500 47 6.500C54.500 6.500 61 12 61 20.500C61 29 54 41 32 57Z\" fill=\"url(#eHt)\" stroke=\"#A8081F\" stroke-opacity=\".5\" stroke-width=\"1\"/><ellipse cx=\"19\" cy=\"17\" rx=\"8\" ry=\"4.500\" transform=\"rotate(-32 19 17)\" fill=\"#fff\" opacity=\".5\"/></svg>", "🔥": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><defs><linearGradient id=\"eF1\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FFB22E\"/><stop offset=\".55\" stop-color=\"#FF5C1F\"/><stop offset=\"1\" stop-color=\"#E02A1B\"/></linearGradient><linearGradient id=\"eF2\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FFF08A\"/><stop offset=\"1\" stop-color=\"#FFAA1E\"/></linearGradient></defs><path d=\"M33 2C35 14 47 20 51 33C55 47 45 61 32 61C19 61 9 50 12 37C14 29 19 25 20 16C25 21 27 26 27 31C32 25 32 12 33 2Z\" fill=\"url(#eF1)\"/><path d=\"M32 61C24 61 18.500 54.500 20.500 47C22.500 40 29 38 30 30C37 35 44 42 43 50C42 57 38 61 32 61Z\" fill=\"url(#eF2)\"/></svg>", "😍": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><defs><radialGradient id=\"eFc\" cx=\".5\" cy=\".28\" r=\".85\"><stop offset=\"0\" stop-color=\"#FFEC8F\"/><stop offset=\".55\" stop-color=\"#FBC62F\"/><stop offset=\"1\" stop-color=\"#EC9818\"/></radialGradient><linearGradient id=\"eHt\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FF6A6E\"/><stop offset=\"1\" stop-color=\"#D2102A\"/></linearGradient></defs><circle cx=\"32\" cy=\"32\" r=\"29\" fill=\"url(#eFc)\"/><circle cx=\"32\" cy=\"32\" r=\"28.6\" fill=\"none\" stroke=\"#C97F0E\" stroke-opacity=\".35\" stroke-width=\"1\"/><ellipse cx=\"25\" cy=\"12.5\" rx=\"13\" ry=\"6\" fill=\"#fff\" opacity=\".28\"/><g transform=\"translate(21 26) scale(.95)\"><path d=\"M0 -3C-1 -8 -8 -8 -8 -2C-8 3 -2 6 0 9C2 6 8 3 8 -2C8 -8 1 -8 0 -3Z\" fill=\"url(#eHt)\"/><ellipse cx=\"-3\" cy=\"-3.500\" rx=\"2\" ry=\"1.200\" fill=\"#fff\" opacity=\".6\"/></g><g transform=\"translate(43 26) scale(.95)\"><path d=\"M0 -3C-1 -8 -8 -8 -8 -2C-8 3 -2 6 0 9C2 6 8 3 8 -2C8 -8 1 -8 0 -3Z\" fill=\"url(#eHt)\"/><ellipse cx=\"-3\" cy=\"-3.500\" rx=\"2\" ry=\"1.200\" fill=\"#fff\" opacity=\".6\"/></g><path d=\"M15 38Q32 41 49 38Q48 55 32 55Q16 55 15 38Z\" fill=\"#7A2514\"/><path d=\"M16 38.500Q32 41.500 48 38.500Q47.500 43.500 46 44.500Q32 47 18 44.500Q16.500 43.500 16 38.500Z\" fill=\"#fff\"/><ellipse cx=\"32\" cy=\"51.500\" rx=\"8.500\" ry=\"3.300\" fill=\"#EF5B73\"/></svg>", "😂": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><defs><radialGradient id=\"eFc\" cx=\".5\" cy=\".28\" r=\".85\"><stop offset=\"0\" stop-color=\"#FFEC8F\"/><stop offset=\".55\" stop-color=\"#FBC62F\"/><stop offset=\"1\" stop-color=\"#EC9818\"/></radialGradient></defs><circle cx=\"32\" cy=\"32\" r=\"29\" fill=\"url(#eFc)\"/><circle cx=\"32\" cy=\"32\" r=\"28.6\" fill=\"none\" stroke=\"#C97F0E\" stroke-opacity=\".35\" stroke-width=\"1\"/><ellipse cx=\"25\" cy=\"12.5\" rx=\"13\" ry=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M12 25Q19 17 26.500 24.500\" fill=\"none\" stroke=\"#4A2C12\" stroke-width=\"3.200\" stroke-linecap=\"round\"/><path d=\"M37.500 24.500Q45 17 52 25\" fill=\"none\" stroke=\"#4A2C12\" stroke-width=\"3.200\" stroke-linecap=\"round\"/><path d=\"M13 34Q32 37 51 34Q51 57 32 57Q13 57 13 34Z\" fill=\"#6E2416\"/><path d=\"M14 34.500Q32 37.500 50 34.500Q49.500 41.500 47.500 42.500Q32 44.500 16.500 42.500Q14.500 41.500 14 34.500Z\" fill=\"#fff\"/><ellipse cx=\"32\" cy=\"52.500\" rx=\"9.500\" ry=\"3.800\" fill=\"#EF5B73\"/><path d=\"M10 27C4 31 2 37 6 41C11 42.500 15 37 12.5 31Z\" fill=\"#6FD0FF\" stroke=\"#2E9BE0\" stroke-width=\".8\"/><path d=\"M54 27C60 31 62 37 58 41C53 42.500 49 37 51.5 31Z\" fill=\"#6FD0FF\" stroke=\"#2E9BE0\" stroke-width=\".8\"/></svg>", "😮": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><defs><radialGradient id=\"eFc\" cx=\".5\" cy=\".28\" r=\".85\"><stop offset=\"0\" stop-color=\"#FFEC8F\"/><stop offset=\".55\" stop-color=\"#FBC62F\"/><stop offset=\"1\" stop-color=\"#EC9818\"/></radialGradient></defs><circle cx=\"32\" cy=\"32\" r=\"29\" fill=\"url(#eFc)\"/><circle cx=\"32\" cy=\"32\" r=\"28.6\" fill=\"none\" stroke=\"#C97F0E\" stroke-opacity=\".35\" stroke-width=\"1\"/><ellipse cx=\"25\" cy=\"12.5\" rx=\"13\" ry=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M13 19Q20.500 14 28 18.500\" fill=\"none\" stroke=\"#6B4418\" stroke-width=\"2.600\" stroke-linecap=\"round\"/><path d=\"M36 18.500Q43.500 14 51 19\" fill=\"none\" stroke=\"#6B4418\" stroke-width=\"2.600\" stroke-linecap=\"round\"/><ellipse cx=\"22\" cy=\"29\" rx=\"3.400\" ry=\"4.800\" fill=\"#3E2410\"/><ellipse cx=\"42\" cy=\"29\" rx=\"3.400\" ry=\"4.800\" fill=\"#3E2410\"/><ellipse cx=\"21\" cy=\"27\" rx=\"1.100\" ry=\"1.400\" fill=\"#fff\" opacity=\".7\"/><ellipse cx=\"41\" cy=\"27\" rx=\"1.100\" ry=\"1.400\" fill=\"#fff\" opacity=\".7\"/><ellipse cx=\"32\" cy=\"46\" rx=\"6.500\" ry=\"8.500\" fill=\"#6E2416\"/><ellipse cx=\"32\" cy=\"51.500\" rx=\"4.300\" ry=\"3.200\" fill=\"#EF5B73\"/></svg>", "👏": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><defs><linearGradient id=\"eHd\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FFE27A\"/><stop offset=\"1\" stop-color=\"#F2A81F\"/></linearGradient></defs><g transform=\"translate(2 2) rotate(24 16 54)\"><rect x=\"2\" y=\"14\" width=\"7\" height=\"26\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"9.5\" y=\"6\" width=\"7\" height=\"32\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"17\" y=\"8\" width=\"7\" height=\"32\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"24.5\" y=\"15\" width=\"7\" height=\"26\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"2\" y=\"26\" width=\"29.500\" height=\"30\" rx=\"13\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/></g><g transform=\"translate(62 2) scale(-1 1) rotate(24 16 54)\"><rect x=\"2\" y=\"14\" width=\"7\" height=\"26\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"9.5\" y=\"6\" width=\"7\" height=\"32\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"17\" y=\"8\" width=\"7\" height=\"32\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"24.5\" y=\"15\" width=\"7\" height=\"26\" rx=\"3.500\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/><rect x=\"2\" y=\"26\" width=\"29.500\" height=\"30\" rx=\"13\" fill=\"url(#eHd)\" stroke=\"#C9800F\" stroke-opacity=\".55\" stroke-width=\".8\"/></g><g transform=\"translate(0 1)\" stroke=\"#9AA3B2\" stroke-width=\"2.600\" stroke-linecap=\"round\"><path d=\"M32 3V9\"/><path d=\"M20 6.500L23 11\"/><path d=\"M44 6.500L41 11\"/></g></svg>"};
const fly=em=>{const v=sv.querySelector('.svp');if(!v)return;for(let k=0;k<10;k++){const e=document.createElement('span');e.className='fe';if(EMO[em])e.innerHTML=EMO[em];else e.textContent=em;e.style.fontSize=(30+Math.random()*26)+'px';e.style.left=(20+Math.random()*60)+'%';e.style.setProperty('--fx',(Math.random()*90-45)+'px');e.style.setProperty('--fr',(Math.random()*50-25)+'deg');e.style.animationDelay=(k*70)+'ms';v.appendChild(e);setTimeout(()=>e.remove(),1900)}};
const svLike=(x,y,box)=>{const p=cur&&cur.l[cur.i];if(!p)return;p.lk=true;const b=sv.querySelector('.lkb');b&&b.setAttribute('aria-pressed','true');const h=document.createElement('span');h.className='hbp';h.style.left=x+'px';h.style.top=y+'px';h.innerHTML='<svg viewBox="0 0 24 24"><use href="#hrt"/></svg>';box.appendChild(h);setTimeout(()=>h.remove(),900)};
let tapT=0,sx=null;
sv.addEventListener('click',e=>{const d=e.target.closest('[data-dbl]');if(!d)return;const t=Date.now();if(t-tapT<340){const r=d.getBoundingClientRect();svLike(e.clientX-r.left,e.clientY-r.top,d);tapT=0}else tapT=t});
sv.addEventListener('pointerdown',e=>{sx=e.target.closest('[data-swipe]')?e.clientX:null});
sv.addEventListener('pointerup',e=>{if(sx==null)return;const dx=e.clientX-sx;sx=null;if(dx<-50)svNext();else if(dx>50)svPrev()});
sv.addEventListener('pointercancel',()=>{sx=null});

const cvSet=v=>{MB[0].cv=v||'';renderMy()};
ap.addEventListener('click',e=>{
if(e.target.closest('[data-cvedit]')){shOpen(`<div class="shx-h"><b>Photo de couverture</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><button class="shx-o" data-sx="cvph">${I('cam',22)}Choisir une photo</button><div class="mu" style="font-size:13px;padding:6px 0 0">Ou une couleur</div><div class="cvg">${CVG.map((g,i)=>`<button style="background:${g}" data-sx="cvc${i}" aria-label="Couleur ${i+1}" aria-pressed="${MB[0].cv==g}"></button>`).join('')}</div>${MB[0].cv?`<button class="shx-o" data-sx="cvrm" style="color:var(--red)">${I('cls',22)}Retirer la couverture</button>`:''}`);return}
const pf=e.target.closest('[data-pfw]');if(pf){const m=+pf.dataset.pfw;MB[m].fw=!MB[m].fw;try{renderMy()}catch(_){}const y=document.querySelector('#a9 .sc').scrollTop;rmb(m,(document.querySelector('#a9 .tabs [aria-selected=true]')||{dataset:{tab:0}}).dataset.tab|0);document.querySelector('#a9 .sc').scrollTop=y;toast(MB[m].fw?'Vous suivez '+MB[m].n:'Vous ne suivez plus '+MB[m].n);return}
const ps=e.target.closest('[data-pshare]');if(ps){shOpen(`<div class="shx-h"><b>Partager le profil</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><button class="shx-o" data-sx="pcopy">${I('shr',22)}Copier le lien du profil</button><button class="shx-o" data-sx="pwa">${I('cht',22)}Envoyer sur WhatsApp</button>${pm?`<button class="shx-o" data-sx="pmute">${I('bell',22)}Mettre en sourdine</button><button class="shx-o" data-sx="pblock">${I('shd',22)}Bloquer</button><button class="shx-o" data-sx="prep" style="color:var(--red)">${I('flt',22)}Signaler ce profil</button>`:''}`);return}
const pp=e.target.closest('[data-pop]');if(pp){const M=MB[+pp.dataset.pop];shOpen(`<div class="shx-h"><b>${M.n}</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><button class="shx-o" data-sx="pcopy">${I('shr',22)}Copier le lien du profil</button><button class="shx-o" data-sx="pmute">${I('bell',22)}Mettre en sourdine</button><button class="shx-o" data-sx="pblock">${I('shd',22)}Bloquer</button><button class="shx-o" data-sx="prep" style="color:var(--red)">${I('flt',22)}Signaler ce profil</button>`)}});
shp.addEventListener('click',e=>{const b=e.target.closest('[data-sx]');if(!b)return;const v=b.dataset.sx,n=(MB[pm]||{}).n||'ce profil';
if(v=='cvph'){shClose();document.getElementById('cvfile').click()}
else if(/^cvc\d$/.test(v)){cvSet(CVG[+v[3]]);shClose();toast('Couverture mise à jour')}
else if(v=='cvrm'){cvSet('');shClose();toast('Couverture retirée')}
else if(v=='pcopy'){try{navigator.clipboard.writeText(location.href)}catch(_){}shClose();toast('Lien du profil copié')}
else if(v=='pwa'){shClose();window.open('https://wa.me/?text='+encodeURIComponent('Profil de '+n+' sur My UJLoG '+location.href),'_blank','noopener')}
else if(v=='pmute'){shClose();toast(n+' est mis(e) en sourdine')}
else if(v=='pblock'){shClose();toast(n+' est bloqué(e)')}
else if(v=='prep'){shClose();toast('Merci, le profil a été signalé')}});
ap.addEventListener('change',e=>{if(e.target.id!='cvfile')return;const f=e.target.files[0];if(!f)return;if(!/^image\//.test(f.type)){toast('Choisissez une image');return}const r=new FileReader();r.onload=()=>{cvSet(`url(${r.result}) center/cover`);toast('Couverture mise à jour')};r.readAsDataURL(f);e.target.value=''});

ap.addEventListener('change',e=>{if(e.target.id!='avfile')return;const f=e.target.files[0];if(!f)return;if(!/^image\//.test(f.type)){toast('Choisissez une image');return}const r=new FileReader();r.onload=()=>{MB[0].av=r.result;renderMy();toast('Photo de profil mise à jour')};r.readAsDataURL(f);e.target.value=''});
shp.addEventListener('click',e=>{const b=e.target.closest('[data-sx]');if(!b)return;const v=b.dataset.sx,M=MB[0],X=h=>eA(h||'');
if(v=='edprof')shOpen(`<div class="shx-h"><b>Modifier le profil</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><button class="shx-o" data-sx="edav">${I('cam',22)}Photo de profil</button><input id="fni" class="shx-i" placeholder="Prénom" maxlength="30" value="${X(M.fn)}"><input id="lni" class="shx-i" placeholder="Nom" maxlength="30" value="${X(M.ln)}"><input id="dpi" class="shx-i" placeholder="UFR" maxlength="40" value="${X(M.dp)}"><input id="bti" class="shx-i" placeholder="[Bio, en une ligne]" maxlength="80" value="${X(M.bio)}"><button class="btn" data-sx="profsave">Enregistrer</button>`);
else if(v=='edav'){const i=document.getElementById('avfile');shClose();i&&i.click()}
else if(v=='profsave'){M.fn=shp.querySelector('#fni').value.trim();M.ln=shp.querySelector('#lni').value.trim();M.dp=shp.querySelector('#dpi').value.trim();M.bio=shp.querySelector('#bti').value.trim();renderMy();shClose();toast('Profil mis à jour')}});
const noteSheet=()=>shOpen(`<div class="shx-h"><b>Votre statut</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><input id="nti" class="shx-i" placeholder="À quoi penses-tu ?" maxlength="40" value="${eA(MB[0].note||'')}" autocomplete="off"><button class="btn" data-sx="notesave">Enregistrer</button>${MB[0].note?'<button class="btn s" data-sx="notedel">Supprimer le statut</button>':''}`);
ap.addEventListener('click',e=>{
const mt=e.target.closest('[data-mtab]');if(mt){const k=+mt.dataset.mtab;if(k==3){go('a16');return}myT=k;document.querySelectorAll('#mypr .tabs [role=tab]').forEach(b=>b.setAttribute('aria-selected',b==mt));document.getElementById('mytab').innerHTML=myTab(k);return}
if(e.target.closest('[data-bnx]')){MB[0].bnx=true;const b=e.target.closest('.tkbn');b&&b.remove();return}
if(e.target.closest('[data-pedit]')){shOpen(`<div class="shx-h"><b>Modifier le profil</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><button class="shx-o" data-sx="edpseudo">${I('usr',22)}Pseudo</button><button class="shx-o" data-sx="edbio">${I('doc',22)}Bio</button><p class="mu" style="font-size:13px">Ton nom et tes informations se modifient dans Mon espace.</p>`);return}
if(e.target.closest('[data-note]')){noteSheet();return}
if(e.target.closest('[data-friends]')){toast('Aucune nouvelle demande d’ami');return}
{const mm=document.getElementById('mymenu');if(mm&&!mm.hidden&&e.target.closest('#mymenu [data-go]')){mm.hidden=true;mmShow('home')}}
const mp=e.target.closest('[data-mmp]');if(mp){mmShow(mp.dataset.mmp);return}
if(e.target.closest('[data-mmb]')){mmShow('home');return}
if(e.target.closest('[data-mmx]')){const mm=document.getElementById('mymenu');if(mm)mm.hidden=true;return}
if(e.target.closest('[data-menu]')){const mm=document.getElementById('mymenu');if(mm){mm.hidden=false;mmShow('home')}return}
if(e.target.closest('[data-hist]')){const L=[...seen].map(m=>MB[m]&&MB[m].n).filter(Boolean).concat([...pseen]);shOpen(`<div class="shx-h"><b>Historique de consultation</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div>${L.length?L.map(n=>`<div class="li" style="padding-left:0"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I('cam',20)}</span><div class="fl"><b>${eA(n)}</b><span class="mu" style="font-size:13px">Photos consultées</span></div></div>`).join(''):`<p class="mu" style="padding:8px 0">Les photos que vous avez consultées apparaîtront ici.</p>`}`)}});
shp.addEventListener('click',e=>{const b=e.target.closest('[data-sx]');if(!b)return;const v=b.dataset.sx;
if(v=='edcv'){shClose();const t=document.createElement('button');t.dataset.cvedit='1';ap.appendChild(t);t.click();t.remove()}
else if(v=='ednote')noteSheet();
else if(v=='edbio')shOpen(`<div class="shx-h"><b>Votre bio</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><input id="bti" class="shx-i" placeholder="[Bio, en une ligne]" maxlength="80" value="${eA(MB[0].bio||'')}" autocomplete="off"><button class="btn" data-sx="biosave">Enregistrer</button>`);
else if(v=='edpseudo')shOpen(`<div class="shx-h"><b>Ton pseudo</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><div class="field"><label for="psi">Pseudo</label><input id="psi" maxlength="20" autocomplete="off" autocapitalize="none" spellcheck="false" value="${eA(M.h)}" style="display:block;width:100%;border:0;background:none;font:inherit;color:inherit;outline:0"></div><p class="mu" style="font-size:13px">3 à 20 caractères : lettres, chiffres, point et tiret bas. Il apparaît sur ton profil et dans ton lien.</p><button class="btn" data-sx="pseudosave">Enregistrer</button>`); else if(v=='pseudosave'){const p=shp.querySelector('#psi').value.trim().toLowerCase().replace(/^@/,'');if(!/^[a-z0-9._]{3,20}$/.test(p)){toast('3 à 20 caractères : lettres, chiffres, . et _');return}if(['admin','ujlog','support','moderation'].includes(p)){toast('Ce pseudo est réservé');return}M.h=p;renderMy();shClose();toast('Pseudo enregistré : @'+p)} else if(v=='notesave'){MB[0].note=shp.querySelector('#nti').value.trim();renderMy();shClose();toast('Statut mis à jour')}
else if(v=='notedel'){MB[0].note='';renderMy();shClose();toast('Statut supprimé')}
else if(v=='biosave'){MB[0].bio=shp.querySelector('#bti').value.trim();renderMy();shClose();toast('Bio mise à jour')}});

ap.addEventListener('click',e=>{
if(e.target.closest('[data-viewers]')){if(MB[0].vw){MB[0].vw=0;setTimeout(renderMy,0)}const N=[],T=['Il y a 5 min','Il y a 1 h','Il y a 3 h','Hier','Hier','Il y a 2 jours'];shOpen(`<div class="shx-h"><b>Visites du profil</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><p class="mu" style="margin:0 0 4px">Personne n’a encore vu votre profil ces 7 derniers jours.</p>${N.map((n,i)=>`<div class="li" style="padding-left:0"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${I('usr',20)}</span><div class="fl"><b>${eA(n)}</b><span class="mu" style="font-size:13px">${T[i]}</span></div></div>`).join('')}`);return}
const bl=e.target.closest('[data-bell]');if(bl){const M=MB[+bl.dataset.bell];M.bell=!M.bell;bl.setAttribute('aria-pressed',M.bell);toast(M.bell?'Alertes activées pour '+M.n:'Alertes désactivées');return}
if(e.target.closest('[data-sugg]')){toast('Profils similaires bientôt disponibles');return}
const ab=e.target.closest('[data-about]');if(ab){const M=MB[+ab.dataset.about];shOpen(`<div class="shx-h"><b>À propos de ${eA(M.n)}</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div><div class="pin2"><div class="li">${I('cap')}<div class="fl"><small>UFR</small><b>${M.g}</b></div></div><div class="li">${I('usr')}<div class="fl"><small>Niveau</small><b>[L1, L2, L3, M1…]</b></div></div><div class="li">${I('clk')}<div class="fl"><small>Membre depuis</small><b>[Mois Année]</b></div></div><div class="li">${I('grp')}<div class="fl"><small>Associations</small><b>[Association 1], [Association 2]</b></div></div></div>`);return}
const so=e.target.closest('[data-sort]');if(so){const m=+so.dataset.sort;shOpen(`<div class="shx-h"><b>Trier les publications</b><button class="ib" data-sx="x" aria-label="Fermer">×</button></div>${SRT.map((x,k)=>`<button class="shx-o" data-sx="srt${k}" data-m="${m}">${(MB[m].sort||0)==k?I('chk',22):'<span style="width:22px"></span>'}${x}</button>`).join('')}`)}});
shp.addEventListener('click',e=>{const b=e.target.closest('[data-sx]');if(!b||!/^srt\d$/.test(b.dataset.sx))return;const m=+b.dataset.m;MB[m].sort=+b.dataset.sx[3];shClose();rmb(m,0)});
document.addEventListener('keydown',e=>{if(!cur)return;if(e.key=='Escape')svClose();else if(e.key=='ArrowRight')svNext();else if(e.key=='ArrowLeft')svPrev()});
ap.addEventListener('click',e=>{
const tb=e.target.closest('[data-tab]');if(tb){rmb(pm,+tb.dataset.tab);return}
const fo=e.target.closest('[data-follow]');if(fo){const on=fo.classList.toggle('s');fo.textContent=on?'Suivi(e)':'Suivre';return}
});
/* v27 : story plein écran (Message ou Photo), ton profil uniquement */
{const stc=document.getElementById('stc');if(stc){
const BGS=['#15803D','linear-gradient(160deg,#15803D,#0B3D1F)','linear-gradient(160deg,#0E7C8C,#15803D)','linear-gradient(160deg,#0E7C8C,#1E3FAA)','linear-gradient(160deg,#1E3FAA,#7C3AED)','linear-gradient(160deg,#7C3AED,#EC4899)','linear-gradient(160deg,#B0306A,#F08A24)','linear-gradient(160deg,#C26A00,#F5B83D)','#B0306A','#0B1630'];
const FF=[['Moderne','var(--h)'],['Simple','var(--b)'],['Classique','Georgia,serif'],['Machine','ui-monospace,Menlo,monospace'],['Manuscrit','"Brush Script MT","Segoe Script",cursive']];
const FLT=[['Normal',''],['Éclat','saturate(1.4) contrast(1.1)'],['N&B','grayscale(1)'],['Chaud','sepia(.35) saturate(1.3) hue-rotate(-10deg)'],['Froid','saturate(1.1) hue-rotate(15deg) brightness(1.03)'],['Vintage','sepia(.6) contrast(.9) brightness(1.05)']],AUD=['Public','Mes followers','Privé'];
const q=s=>stc.querySelector(s),stx=q('#stx'),cap=q('#stcap'),stbg=q('#stbg'),pf=q('#v25pf'),pc=q('#v25cf');
q('#stsw').innerHTML=BGS.map((g,i)=>`<button type="button" data-bi="${i}" style="background:${g}" aria-label="Fond ${i+1}"></button>`).join('');
q('#stfl').innerHTML=FLT.map((f,i)=>`<button type="button" data-fl="${i}">${f[0]}</button>`).join('');
let mode='Message',bi=0,fi=0,fl=0,photo='',au=0,sw=true,ht;
const hint=t=>{const h=q('#sthint');h.textContent=t;h.hidden=false;clearTimeout(ht);ht=setTimeout(()=>{h.hidden=true},1100)};
const paint=()=>{const msg=mode=='Message',n=stx.textContent.length;stc.dataset.m=mode;
stbg.style.background=(!msg&&photo)?photo:BGS[bi];stbg.style.filter=(!msg&&photo)?FLT[fl][1]:'';
q('#stw').hidden=!msg;q('#stph').hidden=msg||!!photo;cap.hidden=msg||!photo;q('#stfont').hidden=!msg;q('#stcol').hidden=!msg;q('#stchg').hidden=msg||!photo;q('#stsw').hidden=!(msg&&sw);q('#stfl').hidden=msg||!photo;
stc.querySelectorAll('[data-sm]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.sm==mode));
stc.querySelectorAll('[data-bi]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.bi==bi));stc.querySelectorAll('[data-fl]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.fl==fl));
q('#stcol').setAttribute('aria-pressed',sw);q('#pub').disabled=msg?!stx.textContent.trim():!photo;
stx.style.fontFamily=FF[fi][1];stx.style.fontSize=(n<=24?40:n<=60?32:n<=100?26:22)+'px';const ct=q('#stct');ct.hidden=!(msg&&n>80);ct.textContent=n+'/120'};
const reset=()=>{window.UJLOC&&UJLOC.set(null);mode='Message';bi=0;fi=0;fl=0;photo='';au=0;sw=true;stx.innerHTML='';cap.value='';q('#staud b').textContent=AUD[0];paint()};
stc.addEventListener('mousedown',e=>{if(e.target.closest('#stsw,#stfont,#stcol'))e.preventDefault()});
stc.addEventListener('click',e=>{const m=e.target.closest('[data-sm]');if(m){mode=m.dataset.sm;paint();if(mode=='Message')stx.focus();return}
if(e.target.closest('#stcam')){pc.click();return}if(e.target.closest('#stgal,#stchg')){pf.click();return}
if(e.target.closest('#stfont')){fi=(fi+1)%FF.length;paint();hint(FF[fi][0]);return}
if(e.target.closest('#stcol')){sw=!sw;paint();return}
let b=e.target.closest('[data-bi]');if(b){bi=+b.dataset.bi;paint();return}
b=e.target.closest('[data-fl]');if(b){fl=+b.dataset.fl;paint();hint(FLT[fl][0]);return}
if(e.target.closest('#staud')){au=(au+1)%AUD.length;q('#staud b').textContent=AUD[au];return}
if(e.target.closest('#pub')){if(q('#pub').disabled)return;const msg=mode=='Message',txt=(msg?stx.innerText:cap.value).trim();
MB[0].pub.unshift(UJLOC.add(msg?{c:BGS[bi],cap:eA(txt).replace(/\n/g,'<br>'),t:'À l’instant',live:true,f:FF[fi][1]}:{c:photo,cap:eA(txt),t:'À l’instant',live:true,fl:FLT[fl][1]}));const who=AUD[au];reset();
document.querySelector('#a1 .stories').innerHTML=rowH();renderMy();toast('Story publiée. Visible par : '+who);go('a1')}});
stx.addEventListener('input',()=>{if(!stx.textContent.trim())stx.innerHTML='';else if(stx.textContent.length>120){stx.textContent=stx.textContent.slice(0,120);const r=document.createRange();r.selectNodeContents(stx);r.collapse(false);const s=getSelection();s.removeAllRanges();s.addRange(r)}paint()});
stx.addEventListener('paste',e=>{e.preventDefault();document.execCommand('insertText',false,(e.clipboardData||window.clipboardData).getData('text'))});
[pf,pc].forEach(inp=>inp.addEventListener('change',()=>{const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{photo='url('+r.result+') center/cover';mode='Photo';fl=0;paint();inp.value=''};r.readAsDataURL(f)}));
paint()}}

// Ajouts : actions
document.addEventListener('click',e=>{
const q=e.target.closest('[data-soon]');if(q){toast(q.dataset.soon+' : écran à venir');return}
if(e.target.closest('[data-pnx]')){document.getElementById('pin1').hidden=true;return}
const b=e.target.closest('[data-part]');if(b){const on=b.getAttribute('aria-pressed')!='true';b.setAttribute('aria-pressed',on);b.classList.toggle('on',on);b.textContent=on?'Inscrit ✓':'Je participe';toast(on?'Participation enregistrée':'Participation annulée');return}
const o=e.target.closest('#poll .o');if(o){const p=document.getElementById('poll');p.classList.add('v');p.querySelectorAll('.o').forEach(x=>{x.setAttribute('aria-pressed',x==o);x.querySelector('.pc').hidden=false})}
});


// Banderole : 6 s par slide, swipe gauche/droite, clic = ouvre l'écran lié
window.initBnd=bd=>{const vw=bd.querySelector('.vw');if(!vw)return;
const it=[...vw.querySelectorAll('.it')],dt=[...bd.querySelectorAll('.dts i')],N=it.length,DUR=6000;if(N<2)return;
let c=0,tm,hov=false,pid=null,x0=0,y0=0,sw=false;
const stop=()=>clearTimeout(tm),arm=()=>{stop();if(!hov)tm=setTimeout(()=>{show(c+1,1);arm()},DUR)};
const show=(n,d)=>{n=(n+N)%N;if(n==c)return;const o=it[c],w=it[n];
w.style.transition='none';w.className='it '+(d>0?'r':'l');void w.offsetWidth;w.style.transition='';w.className='it on';o.className='it '+(d>0?'l':'r');
it.forEach((e,i)=>{e.tabIndex=i==n?0:-1;e.setAttribute('aria-hidden',i!=n)});dt.forEach((e,i)=>e.classList.toggle('on',i==n));c=n};
vw.addEventListener('pointerdown',e=>{if(e.button>0)return;pid=e.pointerId;x0=e.clientX;y0=e.clientY;sw=false;stop()});
const end=e=>{if(e.pointerId!=pid)return;pid=null;const dx=e.clientX-x0,dy=e.clientY-y0;
if(e.type=='pointerup'&&Math.abs(dx)>35&&Math.abs(dx)>Math.abs(dy)){sw=true;show(c+(dx<0?1:-1),dx<0?1:-1)}arm()};
document.addEventListener('pointerup',end);document.addEventListener('pointercancel',end);
vw.addEventListener('click',e=>{if(sw){e.stopPropagation();e.preventDefault();sw=false}},true);
vw.addEventListener('pointerenter',e=>{if(e.pointerType=='mouse'){hov=true;stop()}});
vw.addEventListener('pointerleave',e=>{if(e.pointerType=='mouse'){hov=false;if(pid==null)arm()}});
vw.addEventListener('scroll',()=>{vw.scrollLeft=0});vw.addEventListener('focusin',stop);vw.addEventListener('focusout',arm);
vw.addEventListener('keydown',e=>{const d=e.key=='ArrowRight'?1:e.key=='ArrowLeft'?-1:0;if(d){e.preventDefault();show(c+d,d);it[c].focus({preventScroll:true})}});
bd._off=()=>{stop();document.removeEventListener('pointerup',end);document.removeEventListener('pointercancel',end)};arm()};document.querySelectorAll('.bnd').forEach(initBnd);

// Carte d'étudiant : toucher pour retourner (recto / verso)
document.addEventListener('click',e=>{const w=e.target.closest('.ucw');if(!w)return;const f=w.classList.toggle('f');
const [r,v]=w.querySelectorAll('.ucf');r.setAttribute('aria-hidden',f);v.setAttribute('aria-hidden',!f);w.setAttribute('aria-label',f?'Retourner la carte (verso)':'Retourner la carte (recto)')});

;
/* ==== v83-evenements ==== */
try{
(()=>{
/* Événements de Mon campus -> banderole d'accueil + bandes-annonces du fil.
   Brancher plus tard sur le backend : UJEV.push({id,src:'pub'|'edt'|'lf',t,x,s,go,c2,bg,ts}) ; UJEV.drop(id) */
const K='ujlog_ev_v1',E=v=>String(v==null?'':v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const base=BND.slice();let ev=[],lf=[],sig='';
try{ev=JSON.parse(localStorage.getItem(K)||'[]').filter(e=>Date.now()-e.ts<2592e5)}catch(_){}
const demo=[];
const sv=()=>{try{localStorage.setItem(K,JSON.stringify(ev.slice(0,10)))}catch(_){}};
const list=()=>[...ev,...lf,...demo].sort((a,b)=>b.ts-a.ts);
const ago=t=>{const m=Math.round((Date.now()-t)/6e4);return m<2?'À l’instant':m<60?'Il y a '+m+' min':m<1440?'Il y a '+Math.round(m/60)+' h':'Il y a '+Math.round(m/1440)+' j'};
const ICN={lf:'se',edt:'cal',pub:'book',spo:'cap'};
function slides(){const L=list().filter(e=>e.src!='spo').slice(0,5).map(e=>({k:e.k||'in',t:e.t,x:e.x,s:e.s,c:e.c||'Voir',bg:e.bg,go:e.go}));const hasE=L.some(b=>b.t=='Emploi du temps');return L.concat(base.filter(b=>!(hasE&&b.t=='Emploi du temps')))}
function bnd(){const S=slides(),g=JSON.stringify(S.map(b=>[b.t,b.x,b.s,b.go,(b.bg||'').length]));if(g==sig)return;sig=g;BND.splice(0,BND.length,...S);
 document.querySelectorAll('.bnd').forEach(bd=>{const t=document.createElement('div');t.innerHTML=BNDH();bd._off&&bd._off();bd.innerHTML=t.firstChild.innerHTML;bd.hidden=!BND.length;window.initBnd&&initBnd(bd)})}
const trl=e=>`<button class="trl${e.src=='spo'?' spo':''}" data-ev="${E(e.id)}"${e.go?` data-go="${e.go}"`:''} style="--c:${e.c2||'#0E7C8C'}"><span class="trl-i">${I(ICN[e.src]||'doc',24)}</span><span class="trl-m"><small>${e.src=='spo'?'<span class="trl-sp">Sponsorisé</span>'+E(e.t):E(e.t)+' · '+ago(e.ts)}</small><b>${E(e.x)}</b></span>${e.go?I('chv',18):''}</button>`;
let raf=0;const sched=()=>{if(!raf)raf=requestAnimationFrame(tick)};
function tick(){raf=0;const sc=document.querySelector('#a1 .sc');if(!sc||!sc.offsetParent)return;
 const L=list(),ids=new Set(L.map(e=>e.id));sc.querySelectorAll('.trl').forEach(t=>{if(!ids.has(t.dataset.ev))t.remove()});
 const sh=new Set([...sc.querySelectorAll('.trl')].map(t=>t.dataset.ev)),nx=L.find(e=>!sh.has(e.id));if(!nx)return;
 const vb=sc.getBoundingClientRect().bottom;let since=9;
 for(const c of sc.children){if(c.classList.contains('trl')){since=0;continue}if(c.tagName!='ARTICLE')continue;
  const r=c.getBoundingClientRect();if(r.top>vb-40&&r.top<vb+700&&since>=2){c.insertAdjacentHTML('beforebegin',trl(nx));return}since++}}
document.addEventListener('scroll',e=>{if(e.target.matches&&e.target.matches('#a1 .sc'))sched()},true);setInterval(sched,2000);
const ex=window.UJEV={
 push(e){e.ts=e.ts||Date.now();e.id=e.id||(e.src||'pub')+':'+e.ts;ev=ev.filter(x=>x.id!=e.id);ev.unshift(Object.assign({src:'pub',c2:'#0E7C8C',bg:'linear-gradient(135deg,#0E7C8C,#15803D)'},e));sv();bnd();sched()},
 drop(id){ev=ev.filter(x=>x.id!=id);sv();bnd();sched()},
 edt(t,b){if(/test/i.test(t||''))return;ex.push({id:'edt:'+t+b,src:'edt',t:'Emploi du temps',x:t,s:b,go:'c1',c2:'#7C3AED',bg:'linear-gradient(135deg,#7C3AED,#3DBE6A)'})},
 syncLF(items,h){const when=o=>o.id[0]=='u'?+o.id.slice(1):new Date(o.d+'T12:00:00').getTime(),lim=Date.now()-6048e5;
  lf=items.filter(o=>o.s=='open'&&when(o)>lim).sort((a,b)=>when(b)-when(a)).slice(0,3).map(o=>{const P=o.t=='P';return{id:'lf:'+o.id,src:'lf',t:P?'Perdu':'Trouvé',x:h.nm(o),s:(o.idc?o.n+' · ':'')+o.l+' · '+h.dl(o.d),c:P?'Voir l’avis':'Voir l’objet',go:'lf1',c2:P?'#B91C1C':'#0E8A5F',bg:(h.pic&&h.pic(o))?"linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url('"+h.pic(o)+"') center/cover no-repeat "+(P?'#7F1D1D':'#0E8A5F'):(P?'linear-gradient(135deg,#7F1D1D,#5B3FB3)':'linear-gradient(135deg,#0E8A5F,#5B3FB3)'),ts:when(o)}});bnd();sched()}};
bnd();sched();
})();
}catch(e){console.error("[ujlog] v83-evenements",e)}
/* ==== bloc2 ==== */
try{
(()=>{const q=s=>[...document.querySelectorAll(s)],M=['Doctorants','Master 1 / Doctorat 1'];
function upd(){const v=q('[data-ck]').filter(b=>!b.hidden),d=v.filter(b=>b.getAttribute('aria-pressed')=='true').length,n=document.getElementById('ckn'),p=document.getElementById('ckp');if(n)n.textContent=d+' / '+v.length+' prêts';if(p)p.style.width=(v.length?d/v.length*100:0)+'%';return[d,v.length]}
document.addEventListener('click',e=>{const c=e.target.closest('[data-ck]');if(c){c.setAttribute('aria-pressed',c.getAttribute('aria-pressed')!='true');const[d,t]=upd();if(d==t&&typeof toast=='function')toast('Dossier complet : prêt pour le dépôt');return}
const f=e.target.closest('[data-cf]');if(f){q('[data-cf]').forEach(b=>b.setAttribute('aria-pressed',b==f));const v=f.dataset.cf;q('[data-ck]').forEach(b=>{const g=b.dataset.g;b.hidden=!(v=='Tous'||!g||g==v||(v=='Master / Doctorat'&&M.includes(g)))});upd();return}
const y=e.target.closest('[data-eye]');if(y){const i=y.parentNode.querySelector('input');i.type=i.type=='password'?'text':'password'}});upd()})();
}catch(e){console.error("[ujlog] bloc2",e)}
/* ==== bloc3 ==== */
try{
(()=>{const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const SV=[[[690,870,'Déjeuner'],[1050,1170,'Dîner']],[[690,870,'Déjeuner']]],PL=['200','450'],F=m=>Math.floor(m/60)+'h'+String(m%60).padStart(2,'0');
const D=['Attiéké au poisson frit','Riz sauce N’tro','Alloco au poisson frit','Igname au poisson frit','Pommes de terre','Kabato','Tchèpe au poulet','Soupe de cabri'],ML=[[0,1,2,3,6],[4,5,6,7,0]],JN=['Lun','Mar','Mer','Jeu','Ven'],JL=['Lundi','Mardi','Mercredi','Jeudi','Vendredi'];
let rs=0,ml=0,dy=Math.min(Math.max((new Date().getDay()+6)%7,0),4);if((new Date().getDay()+6)%7>4)dy=0;
function rnR(){const r=q('#rst');if(!r)return;const n=new Date(),m=n.getHours()*60+n.getMinutes(),S=SV[rs],o=S.find(s=>m>=s[0]&&m<s[1]),x=S.find(s=>s[0]>m);
r.dataset.o=o?1:0;q('#rsT').textContent=o?'Ouvert':'Fermé';
q('#rsS').textContent=o?o[2]+' en cours · jusqu’à '+F(o[1]):x?'Prochain service : '+x[2].toLowerCase()+' à '+F(x[0]):'Réouverture demain à '+F(S[0][0]);
q('#rsP').textContent=PL[rs];q('#rsN').textContent=S.length;
q('#rsH').textContent=S.map(s=>s[2]+' '+F(s[0])+' – '+F(s[1])).join(' · ')+(rs?' · 3 pavillons de 150 places':'')}
function rnM(){const d=q('#rmd');if(!d)return;const n=new Date(),off=(n.getDay()+6)%7,mon=new Date(n);mon.setDate(n.getDate()-off+(off>4?7:0));
d.innerHTML=JN.map((j,k)=>{const x=new Date(mon);x.setDate(mon.getDate()+k);return `<button data-dy="${k}" aria-pressed="${k==dy}"${off<5&&k==off?' class="td"':''}>${j}<b>${x.getDate()}</b></button>`}).join('');
qa('[data-ml]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.ml==ml));
const no=rs==1&&ml==1,nm=D[ML[ml][dy]];q('#rmn').textContent=no?'Pas de dîner au campus':nm;
q('#rmx').textContent=no?'Le dîner est servi à la Cité Kalilou, de 17h30 à 19h30.':JL[dy]+(ml?' · dîner':' · déjeuner')+' · 200 FCFA';
const p=q('#rmp');if(p)p.hidden=no||nm!='Tchèpe au poulet'}
document.addEventListener('click',e=>{
const a=e.target.closest('[data-rs]');if(a){rs=+a.dataset.rs;qa('[data-rs]').forEach(b=>b.setAttribute('aria-pressed',b==a));rnR();rnM();return}
const b=e.target.closest('[data-dy]');if(b){dy=+b.dataset.dy;rnM();return}
const c=e.target.closest('[data-ml]');if(c){ml=+c.dataset.ml;rnM();return}
const r=e.target.closest('[data-rate]');if(r){qa('[data-rate]').forEach(x=>x.setAttribute('aria-pressed',x==r));if(typeof toast=='function')toast('Merci, votre avis est transmis au service restauration')}});
rnR();rnM();setInterval(rnR,30000)})();
}catch(e){console.error("[ujlog] bloc3",e)}
/* ==== bloc4 ==== */
try{
(()=>{const q=s=>[...document.querySelectorAll(s)];
function u(){const a=q('[data-sk]'),d=a.filter(b=>b.getAttribute('aria-pressed')=='true').length,n=document.getElementById('skn'),p=document.getElementById('skp');if(n)n.textContent=d+' / '+a.length+' prêts';if(p)p.style.width=(a.length?d/a.length*100:0)+'%';return[d,a.length]}
document.addEventListener('click',e=>{const c=e.target.closest('[data-sk]');if(!c)return;c.setAttribute('aria-pressed',c.getAttribute('aria-pressed')!='true');const[d,n]=u();if(d==n&&typeof toast=='function')toast('Vous avez tout pour être reçu')});u()})();
}catch(e){console.error("[ujlog] bloc4",e)}
/* ==== bloc5 ==== */
try{
document.addEventListener('click',e=>{const c=e.target.closest('[data-lv]');if(!c)return;document.querySelectorAll('[data-lv]').forEach(b=>b.setAttribute('aria-pressed',b==c));document.getElementById('lvr').textContent=c.dataset.a+' ans';document.getElementById('lvn').textContent=c.dataset.n});
}catch(e){console.error("[ujlog] bloc5",e)}
/* ==== bloc6 ==== */
try{
(()=>{
const R=()=>document.getElementById('dm'),E=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const D={m:'adm',s:0,done:false,v:{ad:'',em:'',ph:'',hd:'Non',cni:'',pn:'',pa:'',pt:'',pc:'',ok:false,cr:false,rg:false,lo:false,sp:'Aucune',ar:'Aucune',cl:'Aucune',mu:'Aucune'}};
const ST=()=>['Mes informations',D.m=='adm'?'Baccalauréat':'Ma situation','Engagement','Vie associative','Récapitulatif'];
const ro=(l,x)=>`<div class="li" style="padding:6px 0;min-height:0"><span class="mu fl" style="font-size:13px">${l}</span><b style="font-size:14px;text-align:right">${x}</b></div>`;
const fl=(k,l,t)=>`<label class="field"><span style="display:block;font-size:12px;color:var(--mu);font-weight:600">${l}</span><input data-dmf="${k}" type="${t||'text'}" value="${E(D.v[k])}" style="width:100%;border:0;background:none;outline:0;font:inherit;color:var(--ink);padding:4px 0 2px"></label>`;
const sg=(k,a)=>`<div class="seg">${a.map(x=>`<button data-dmsv="${k}:${x}" aria-pressed="${D.v[k]==x}">${x}</button>`).join('')}</div>`;
const tg=(k,t)=>`<button class="li" role="switch" data-dmtg="${k}" aria-checked="${D.v[k]}" style="width:100%;background:#fff;border-radius:12px"><span class="fl" style="font-size:14px">${t}</span><span class="sw"></span></button>`;
const can=()=>{const v=D.v,s=D.s;return s==0?!!(v.em.trim()&&v.ph.trim()):s==2?!!(v.cni.trim()&&v.pn.trim()&&v.pt.trim()&&v.ok):true};
const body=()=>{const v=D.v,adm=D.m=='adm';switch(D.s){
case 0:return `<section class="card pad"><h3 class="cxh3">Repris de votre inscription</h3>${ro('UJ-ID','[ZIBD0000000000]')}${ro('Nom et prénom','[Nom Prénom]')}${ro('Naissance','[Date] · [Lieu]')}${ro('Université · UFR','[Université] · [UFR]')}${ro('Niveau','[Niveau]')}</section>${fl('ad','Adresse postale')}${fl('em','E-mail','email')}${fl('ph','Téléphone','tel')}<div><span class="mu" style="font-size:13px">Situation de handicap</span><div style="margin-top:6px">${sg('hd',['Non','Oui'])}</div></div>`;
case 1:return adm?`<section class="card pad"><h3 class="cxh3">Votre baccalauréat</h3>${ro('Série','[Série du BAC]')}${ro('Numéro','[Numéro]')}${ro('Note','[Note]')}${ro('Mention','[Mention]')}<p class="mu" style="font-size:12.5px;margin-top:8px">Ces informations viennent de votre inscription. En cas d’erreur, rapprochez-vous du service Logement.</p></section>`:`<div class="mu" style="padding:0 4px">Critères exigés pour une réadmission (règlement, article 5).</div>${tg('cr','J’ai validé au moins 80 % de mes crédits')}${tg('rg','J’ai respecté le règlement intérieur')}${tg('lo','J’ai payé la totalité du loyer de l’année précédente')}${v.cr&&v.rg&&v.lo?'':`<div class="cxav">${I('bell',20)}<div><b>Conditions non remplies</b><p>Sans ces trois conditions, la réadmission risque d’être refusée.</p></div></div>`}`;
case 2:return `${fl('cni','N° de la CNI')}<section class="card pad" style="display:flex;flex-direction:column;gap:8px"><h3 class="cxh3" style="margin:0">Engagement parental</h3>${fl('pn','Père, mère ou tuteur légal')}${fl('pa','Adresse complète des parents')}${fl('pt','Téléphone','tel')}${fl('pc','Cellulaire (facultatif)','tel')}</section>${tg('ok','Je m’engage sur l’honneur à respecter le règlement intérieur des cités')}<button class="mu" data-go="a30" style="font-weight:700;color:var(--g);text-align:center">Lire le règlement intérieur</button>`;
case 3:return `<div class="mu" style="padding:0 4px">Les membres de clubs culturels et sportifs sont prioritaires (règlement, article 6).</div>${[['Sport','sp',['Football','Autres','Aucune']],['Artisanat','ar',['Autres','Aucune']],['Clubs','cl',['Autres','Aucune']],['Musique et culture','mu',['Théâtre','Autres','Aucune']]].map(([t,k,a])=>`<section class="card pad"><h3 class="cxh3" style="font-size:15px">${t}</h3>${sg(k,a)}</section>`).join('')}`;
default:return `<section class="card pad"><h3 class="cxh3">Récapitulatif</h3>${ro('Demande',adm?'Admission':'Réadmission')}${ro('E-mail',E(v.em))}${ro('Téléphone',E(v.ph))}${ro('Parent ou tuteur',E(v.pn))}${ro('Sport',v.sp)}${ro('Artisanat',v.ar)}${ro('Clubs',v.cl)}${ro('Musique et culture',v.mu)}</section><p class="mu" style="font-size:12.5px;padding:0 4px">Le CROU-D valide votre demande. Vous imprimez ensuite vos documents depuis votre espace logement, puis déposez le dossier physique.</p>`}};
function rd(){const r=R();if(!r)return;const S=ST(),s=D.s,adm=D.m=='adm',c=can();
if(D.done){r.innerHTML=`<button class="mu" data-dmed style="font-weight:700;color:var(--g);text-align:center">Modifier ma demande</button>`;return}
r.innerHTML=`<div class="seg"><button data-dmmd="adm" aria-pressed="${adm}">Admission</button><button data-dmmd="read" aria-pressed="${!adm}">Réadmission</button></div><div><div style="display:flex;gap:5px">${S.map((_,i)=>`<i style="flex:1;height:6px;border-radius:3px;background:${i<s?'var(--g)':i==s?'#F59E0B':'var(--ln)'}"></i>`).join('')}</div><small class="mu" style="display:block;margin-top:6px">Étape ${s+1} sur ${S.length} · ${S[s]}</small></div>${body()}<div class="row" style="gap:8px">${s?'<button class="btn s" data-dmpv style="flex:1">Retour</button>':''}<button class="btn" data-dmnx style="flex:2;opacity:${c?1:.45}"${c?'':' disabled'}>${s==4?'Enregistrer ma demande':'Continuer'}</button></div>`}
const up=()=>{const sc=R()&&R().closest('.sc');if(sc)sc.scrollTop=0};
document.addEventListener('click',e=>{const q=s=>e.target.closest(s);
const d=q('[data-dem]');if(d){D.m=d.dataset.dem;D.s=0;D.done=false;rd()}
const m=q('[data-dmmd]');if(m){D.m=m.dataset.dmmd;rd();return}
const sv=q('[data-dmsv]');if(sv){const[k,...x]=sv.dataset.dmsv.split(':');D.v[k]=x.join(':');rd();return}
const t=q('[data-dmtg]');if(t){const k=t.dataset.dmtg;D.v[k]=!D.v[k];rd();return}
if(q('[data-dmnx]')){if(!can())return;if(D.s==4)D.done=true;else D.s++;rd();up();return}
if(q('[data-dmpv]')){D.s=Math.max(0,D.s-1);rd();up();return}
if(q('[data-dmed]')){D.done=false;D.s=0;rd()}});
document.addEventListener('input',e=>{const f=e.target.closest('[data-dmf]');if(!f)return;D.v[f.dataset.dmf]=f.value;const b=document.querySelector('#dm [data-dmnx]');if(b){const c=can();b.disabled=!c;b.style.opacity=c?1:.45}});
rd()})();
}catch(e){console.error("[ujlog] bloc6",e)}
/* ==== bloc7 ==== */
try{
(()=>{
const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const say=m=>{typeof toast=='function'&&toast(m)};
const SV=['Service Logement (S/DAL)','Service Bourses et secours financiers','Service Bourses et secours financiers'];
const DM=['Logement','Bourse','Secours financier'];
let tk=0,tm='',tn=0;
const bsTab=k=>{qa('#a32 [data-bs]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.bs==k));const a=q('#bsB'),b=q('#bsS');if(a)a.hidden=k!=0;if(b)b.hidden=k!=1};
const pick=k=>{tk=k;qa('[data-tsk]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.tsk==k));const s=q('#tsv');if(s)s.textContent=SV[k]};
const search=()=>{const i=q('#tsq'),v=(i?i.value:'').trim(),o=q('#tsr');if(!v){say('Saisissez votre numéro de référence');return}
o.innerHTML=`<div class="card pad" style="margin-top:10px;box-shadow:inset 0 0 0 1.5px var(--ln)"><div class="row" style="gap:8px"><b class="fl" style="font:700 15px var(--h);word-break:break-all">${esc(v)}</b><span class="tag a">En cours</span></div><p class="mu" style="font-size:13px;margin:6px 0 0">Exemple de résultat · demande de logement · étape 3 sur 6 : dépôt du dossier</p>${tsPr(2,6)}</div>`};
document.addEventListener('click',e=>{const t=s=>e.target.closest(s);let x;
if(x=t('[data-bs]')){bsTab(+x.dataset.bs);return}
if(x=t('[data-bsgo]'))bsTab(+x.dataset.bsgo);
if(x=t('[data-bsc]')){qa('[data-bsc]').forEach(b=>b.setAttribute('aria-checked',b==x));const r=q('#bsr');if(r)r.innerHTML=bsRes(+x.dataset.bsc);return}
if(x=t('[data-tsrel]')){pick(+x.dataset.tsrel);const f=q('#tsf');if(f&&!t('[data-go]'))f.scrollIntoView({behavior:'smooth',block:'center'});return}
if(t('[data-ts]')){search();return}
if(x=t('[data-tsk]')){pick(+x.dataset.tsk);return}
if(x=t('[data-tsm]')){tm=x.dataset.tsm;qa('[data-tsm]').forEach(b=>b.setAttribute('aria-pressed',b==x));return}
if(t('[data-tssend]')){if(!tm){say('Choisissez un motif');return}
const m=q('#tst'),l=q('#tsl');tn++;const ref='SUIVI-2026-'+String(tn).padStart(4,'0'),hh=new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
const row=`<div class="li" style="align-items:flex-start"><div class="fl"><b>${ref}</b><span class="mu" style="font-size:13px;display:block">${DM[tk]} · ${esc(tm)} · envoyé à ${hh}</span><span class="mu" style="font-size:12.5px;display:block">${SV[tk]}</span></div><span class="tag">Envoyée</span></div>`;
if(l){if(tn==1)l.innerHTML='';l.insertAdjacentHTML('afterbegin',row)}
if(m)m.value='';tm='';qa('[data-tsm]').forEach(b=>b.setAttribute('aria-pressed','false'));say('Demande de suivi envoyée : '+ref)}});
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.id=='tsq')search()});
})();
}catch(e){console.error("[ujlog] bloc7",e)}
/* ==== bloc8 ==== */
try{
(()=>{
const ic=(n,s=18)=>`<svg class="i" aria-hidden="true" style="width:${s}px;height:${s}px"><use href="#${n}"/></svg>`;
const DJ=['Lun','Mar','Mer','Jeu','Ven','Sam'],DF=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
const CTY={CM:'#15803D',TD:'#C26A00',TP:'#0E7C8C'},CTL={CM:'Cours magistral',TD:'Travaux dirigés',TP:'Travaux pratiques'};
/* Créneaux par défaut (relevés sur l'emploi du temps officiel) : chaque UFR peut définir les siens */
const CRN=[['08:00','10:00'],['10:00','12:00'],['14:00','16:00'],['16:00','18:00']];
const MEM='Membrane plasmique, hyaloplasme et cytosquelette',BONY='Pr BONY Kotchi Yves',BROU='Dr BROU Akahoua';
/* Modèle de données (à fournir par le backend) : UFR > niveau > semaine > cours [jour 0-5, créneau, type, intitulé, salle, enseignant] */
const EDU=[
{id:'agro',n:'Agroforesterie',f:'UFR Agroforesterie',crn:CRN,niv:{L1:{f:'Licence 1 Agroforesterie / Environnement',sem:'2026-11-09',doc:1,c:[[0,1,'CM',MEM,'Amphi B',BONY],[0,3,'CM',MEM,'Amphi B',BONY],[2,1,'CM','Analyse','Amphi C',BROU],[2,3,'CM',MEM,'Amphi B',BONY],[3,3,'CM','Analyse','Amphi C',BROU],[4,1,'CM',MEM,'Amphi B',BONY],[4,3,'CM','Analyse','Amphi C',BROU]]}}},
{id:'env',n:'Environnement',f:'UFR Environnement',crn:CRN,niv:{}},
{id:'seg',n:'Éco. et gestion',f:'UFR Sciences économiques et de gestion',crn:CRN,niv:{}},
{id:'jur',n:'Juridiques',f:'UFR Sciences juridiques',crn:CRN,niv:{}},
{id:'ssh',n:'Sociales et humaines',f:'UFR Sciences sociales et humaines',crn:CRN,niv:{}}];
const MCOL=['#1B4D96','#C2410C','#0E7490','#7C3AED','#B45309','#BE185D','#15803D','#4F46E5'],SUBJ=[];
EDU.forEach(u=>Object.keys(u.niv).forEach(k=>u.niv[k].c.forEach(x=>{if(SUBJ.indexOf(x[3])<0)SUBJ.push(x[3])})));
const kc=x=>{let i=SUBJ.indexOf(x[3]);if(i<0)i=SUBJ.push(x[3])-1;return MCOL[i%MCOL.length]};
const tn=x=>x[5].split(' ').slice(0,2).join(' ');
const legend=n=>`<section class="card pad edlg">${[...new Set(n.c.map(x=>x[3]))].map(t=>{const m=n.c.filter(y=>y[3]==t),x=m[0],p=[...new Set(m.map(y=>y[5]))].join(', '),k=m.length;return `<div class="edlr"><i style="background:${kc(x)}"></i><div><b>${t}</b><small>${p}</small></div><span style="color:${kc(x)}">${k} séance${k>1?'s':''}</span></div>`}).join('')}<p class="mu edlt">${[...new Set(n.c.map(x=>x[2]))].map(k=>`<b>${k}</b> ${CTL[k]}`).join(' · ')}</p></section>`;
const NIV=[['L1','Licence 1'],['L2','Licence 2'],['L3','Licence 3'],['M1','Master 1'],['M2','Master 2']];
const LEAD=[[15,'15 min'],[30,'30 min'],[60,'1 h'],[-1,'Veille 20h']];
const K='ujlog-edt-v3';
let st={u:'agro',n:'L1',v:'j',d:null,sel:null,al:{on:true,lead:30,mute:{}}};
try{const s=JSON.parse(localStorage.getItem(K)||'null');if(s){st.u=s.u||st.u;st.n=s.n||st.n;st.v=s.v||st.v;if(s.al)st.al=Object.assign(st.al,s.al)}}catch(e){}
/* UFR et niveau sont renseignés une seule fois, à l'inscription : ils ne se choisissent plus ici (à remplacer par les données du compte) */
const PROFIL=(()=>{const P=window.UJP||{},m={'Agroforesterie':'agro','Environnement':'env','Sciences juridiques':'jur','Sciences sociales et humaines':'ssh','Sciences économiques et de gestion':'seg'},v={'Licence 1':'L1','Licence 2':'L2','Licence 3':'L3','Master 1':'M1','Master 2':'M2','Doctorat':'M2'};return{u:m[P.ufr]||'agro',n:v[P.nv]||'L1'}})();st.u=PROFIL.u;st.n=PROFIL.n;
const save=()=>{try{localStorage.setItem(K,JSON.stringify({u:st.u,n:st.n,v:st.v,al:st.al}))}catch(e){}};
const hh=t=>t.replace(':00','h').replace(':','h');
const cur=()=>{const u=EDU.find(x=>x.id==st.u),n=u&&u.niv[st.n];return {u,n}};
const wk=n=>{const [y,m,d]=n.sem.split('-').map(Number);return new Date(y,m-1,d)};
const dayDate=(n,j)=>{const w=wk(n);return new Date(w.getFullYear(),w.getMonth(),w.getDate()+j)};
const MOIS=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const label=n=>{const a=dayDate(n,0),b=dayDate(n,5);return `Semaine du ${a.getDate()} ${a.getMonth()==b.getMonth()?'':MOIS[a.getMonth()]+' '}au ${b.getDate()} ${MOIS[b.getMonth()]} ${b.getFullYear()}`};
const today0=n=>{const t=new Date(),d=new Date(t.getFullYear(),t.getMonth(),t.getDate()),k=Math.round((d-wk(n))/864e5);return k>=0&&k<=5?k:0};
const key=(j,x)=>`${st.u}|${st.n}|${j}|${x[1]}`;
const start=(u,n,j,c)=>{const d=dayDate(n,j),[h,m]=u.crn[c][0].split(':').map(Number);return new Date(d.getFullYear(),d.getMonth(),d.getDate(),h,m)};
const all=(u,n)=>n.c.map(x=>({x,j:x[0],t:start(u,n,x[0],x[1])})).sort((a,b)=>a.t-b.t);
const nextC=(u,n)=>all(u,n).find(o=>o.t>new Date());
const leadTxt=()=>st.al.lead==-1?'la veille à 20h':`${LEAD.find(l=>l[0]==st.al.lead)[1]} avant`;
const alertAt=o=>st.al.lead==-1?new Date(o.t.getFullYear(),o.t.getMonth(),o.t.getDate()-1,20,0):new Date(o.t.getTime()-st.al.lead*60000);
const msg=(u,o)=>{const x=o.x,r=u.crn[x[1]];return [st.al.lead==-1?'Cours demain':`Cours dans ${LEAD.find(l=>l[0]==st.al.lead)[1]}`,`${hh(r[0])} – ${hh(r[1])} · ${x[3]} · ${x[4]}`]};

const slot=(u,n,j,x)=>{const r=u.crn[x[1]],k=key(j,x),on=st.al.on&&!st.al.mute[k];
 return `<div class="li edsl"><div class="edh">${hh(r[0])}<br><span>${hh(r[1])}</span></div><i class="edbar" style="background:${kc(x)}"></i><div class="fl"><span class="tag" style="background:${kc(x)}1F;color:${kc(x)}">${x[2]}</span><b>${x[3]}</b><span class="mu edm">${ic('pin',14)}${x[4]} · ${x[5]}</span></div><button class="edb" data-edb="${k}" aria-pressed="${on}" aria-label="Alerte pour ce cours" ${st.al.on?'':'disabled'}>${ic('bell',18)}</button></div>`};
const dayHtml=(u,n)=>{const d=st.d==null?today0(n):st.d;st.d=d;
 const l=n.c.filter(x=>x[0]==d).sort((a,b)=>a[1]-b[1]);
 return `<div class="chips" role="group" aria-label="Choisir le jour">${DJ.map((s,j)=>`<button class="chip" data-edd="${j}" aria-pressed="${j==d}">${s} ${dayDate(n,j).getDate()}</button>`).join('')}</div>
<div class="card">${l.length?l.map(x=>slot(u,n,d,x)).join(''):`<div class="pad mu" style="text-align:center">Pas de cours ce ${DF[d].toLowerCase()}.</div>`}</div>`};
const short=x=>x[3].split(',')[0];
const selOf=(u,n)=>{let s=st.sel&&n.c.find(y=>y[0]==st.sel[0]&&y[1]==st.sel[1]);if(!s){const o=nextC(u,n);s=o?o.x:n.c[0]}return s};
const weekHtml=(u,n)=>{const t=today0(n),sx=selOf(u,n);
 return `<div class="edw"><table><thead><tr><th></th>${DJ.map((s,j)=>`<th${j==t?' class="now"':''}>${s}<small>${dayDate(n,j).getDate()}</small></th>`).join('')}</tr></thead><tbody>${u.crn.map((r,c)=>`<tr><th>${hh(r[0])}<br>${hh(r[1])}</th>${DJ.map((s,j)=>{const x=n.c.find(y=>y[0]==j&&y[1]==c);return `<td${j==t?' class="now"':''}>${x?`<button class="edc${x==sx?' sel':''}" data-edcell="${j},${c}" style="--k:${kc(x)}"><b>${x[2]}</b><span>${short(x)}</span><small>${x[4]}</small></button>`:''}</td>`}).join('')}</tr>`).join('')}</tbody></table></div>`};
const detail=(u,n)=>{const x=selOf(u,n);if(!x)return '';const r=u.crn[x[1]],j=x[0],dt=dayDate(n,j),k=key(j,x),on=st.al.on&&!st.al.mute[k];
 return `<div class="card edd" style="--k:${kc(x)}"><div class="li" style="width:100%;align-items:stretch;gap:12px"><i class="edbar" style="background:${kc(x)}"></i><div class="fl"><span class="tag" style="background:${kc(x)}1F;color:${kc(x)}">${x[2]} · ${CTL[x[2]]}</span><b style="display:block;margin-top:6px;font-size:15.5px;line-height:1.25">${x[3]}</b><span class="mu edm">${ic('clk',14)}${DF[j]} ${dt.getDate()} ${MOIS[dt.getMonth()]} · ${hh(r[0])} – ${hh(r[1])}</span><span class="mu edm">${ic('pin',14)}${x[4]}</span><span class="mu edm">${ic('usr',14)}${x[5]}</span></div></div>
<button class="edab" data-edb="${k}" aria-pressed="${on}" ${on?`style="background:${kc(x)}"`:''} ${st.al.on?'':'disabled'}>${ic('bell',18)}<span>${on?`Alerte ${leadTxt()}`:'Me prévenir pour ce cours'}</span></button></div>`};
const hero=(u,n)=>{const o=nextC(u,n),I2=ic('clk',22);
 if(!o)return `<section class="cxr edhero"><div class="rt"><span class="ri">${I2}</span><div><h2>Plus de cours cette semaine</h2><p>Le prochain emploi du temps sera publié par la scolarité.</p></div></div></section>`;
 const x=o.x,r=u.crn[x[1]],j=o.j,dt=dayDate(n,j),cc=kc(x);
 return `<section class="cxr edhero" style="background:linear-gradient(135deg,${cc},color-mix(in srgb,${cc} 76%,#053B2B))!important;box-shadow:0 6px 16px ${cc}55!important"><div class="rt"><span class="ri" style="color:${cc}">${I2}</span><div><h2>Prochain cours</h2><p>${DF[j]} ${dt.getDate()} ${MOIS[dt.getMonth()]} · ${hh(r[0])} – ${hh(r[1])}</p></div></div><div class="rs" style="grid-template-columns:2fr 1fr"><div><b style="font-size:14px;line-height:1.25">${x[3]}</b><span>${x[5]}</span></div><div><b style="font-size:15px">${x[4]}</b><span>${x[2]}</span></div></div><p class="edal">${ic('bell',15)}${st.al.on&&!st.al.mute[key(j,x)]?`Alerte ${leadTxt()}`:'Alerte désactivée pour ce cours'}</p></section>`};
const empty=(u)=>`<div class="card pad" style="text-align:center"><b style="font:700 16px var(--h)">Emploi du temps non publié</b><p class="mu" style="font-size:13px;margin:6px 0 0">${u.f} · ${NIV.find(z=>z[0]==st.n)[1]}<br>La scolarité de l’UFR le publiera ici chaque semaine, avec une alerte avant chaque cours.</p></div>`;

const weekLand=(u,n)=>{const bs=[0,1,2,3].map(c=>n.c.some(x=>x[1]==c)),R=c=>bs[c]?'1.7fr':'.5fr',bz=bs.filter(Boolean).length;const t0=new Date(),k=Math.round((new Date(t0.getFullYear(),t0.getMonth(),t0.getDate())-wk(n))/864e5),t=k>=0&&k<=5?k:-1,sx=selOf(u,n);
 const row=c=>{const r=u.crn[c];return `<div class="ew-t ${c<2?'am':'pm'}">${hh(r[0])}<br>${hh(r[1])}</div>`+DJ.map((s,j)=>{const x=n.c.find(y=>y[0]==j&&y[1]==c);
  return x?`<div class="ew-c${j==t?' now':''}" style="--k:${kc(x)}" data-edcs="${j},${c}" role="button" tabindex="0" aria-label="${DF[j]} ${hh(r[0])} – ${hh(r[1])} : ${x[3]}, ${x[4]}"><b>${x[4]}</b><span>${short(x).split(' ')[0]}</span><small>${x[2]}</small><small class="tn">${tn(x)}</small></div>`:`<div class="ew-e ${c<2?'am':'pm'}${j==t?' now':''}"></div>`}).join('')};
 return `<section class="ew" aria-label="Emploi du temps de la semaine"><div class="ew-h"><b>${label(n)}</b><span>${st.n} · ${u.n}</span></div><div class="ew-g${bz<=2?' tall':''}" style="grid-template-rows:auto ${R(0)} ${R(1)} 12px ${R(2)} ${R(3)}"><div></div>${DJ.map((s,j)=>`<div class="ew-d${j==t?' now':''}${n.c.some(x=>x[0]==j)?'':' off'}">${s}<small>${dayDate(n,j).getDate()}</small><i class="dts">${n.c.filter(x=>x[0]==j).map(x=>`<u style="background:${kc(x)}"></u>`).join('')}</i></div>`).join('')}${row(0)}${row(1)}<div class="ew-p" aria-hidden="true">Pause</div>${row(2)}${row(3)}</div></section>`};
const homeHtml=()=>{const {u,n}=cur();
 if(!n)return empty(u);
 return weekLand(u,n)};

const alertsHtml=(u,n)=>{const o=n&&nextC(u,n),m=o&&msg(u,o);
 return `<div class="cxsec"><h3>Me prévenir avant mes cours</h3></div>
<section class="card pad"><div class="row" style="gap:12px"><div class="fl"><b>Alertes de cours</b><span class="mu" style="display:block;font-size:13px">Une notification avant chaque cours coché</span></div><button class="edsw" role="switch" data-edsw aria-checked="${st.al.on}" aria-label="Activer les alertes"><i></i></button></div>
<div style="${st.al.on?'':'opacity:.45;pointer-events:none'}"><p class="mu" style="font-size:12.5px;margin:14px 0 6px">Prévenir</p><div class="chips" role="group" aria-label="Délai de l’alerte">${LEAD.map(([v,l])=>`<button class="chip" data-edl="${v}" aria-pressed="${st.al.lead==v}">${l}</button>`).join('')}</div>
${m?`<div class="ednt"><span class="ednt-i">${ic('bell',18)}</span><div><small>My UJLoG · maintenant</small><b>${m[0]}</b><span>${m[1]}</span></div></div>`:''}
<div class="row" style="gap:8px;margin-top:12px"><button class="btn s" style="flex:1" data-edtest>Tester l’alerte</button>${'Notification' in window&&Notification.permission=='default'?`<button class="btn s" style="flex:1" data-edperm>Autoriser les notifications</button>`:''}</div>
<p class="mu" style="font-size:12px;margin:10px 0 0">Touchez la cloche d’un cours pour couper son alerte. Dans l’application, la notification arrive même quand elle est fermée.</p></div></section>`};

/* v60 : écran Emploi du temps reconstruit — sélecteur compact, frise des jours, journée en timeline, semaine en agenda */
const tIdx=n=>{const t=new Date(),k=Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate())-wk(n))/864e5);return k>=0&&k<=5?k:-1};
const selector=u=>`<details class="ed2-sel card"><summary><span class="ed2-si">${ic('cap',20)}</span><span class="fl"><b>${u.n}</b><small>${NIV.find(z=>z[0]==st.n)[1]} · ${u.f}</small></span>${ic('chv',18)}</summary>
<div class="ed2-sb"><p>Mon UFR</p><div class="chips" role="group" aria-label="Choisir l’UFR">${EDU.map(x=>`<button class="chip" data-edu="${x.id}" aria-pressed="${x.id==st.u}">${x.n}</button>`).join('')}</div>
<p>Mon niveau</p><div class="chips" role="group" aria-label="Choisir le niveau">${NIV.map(([v,l])=>`<button class="chip" data-edn="${v}" aria-pressed="${v==st.n}">${l}</button>`).join('')}</div></div></details>`;
const slotN=(u,n,j,x)=>{const r=u.crn[x[1]],k=key(j,x),on=st.al.on&&!st.al.mute[k];
 return `<article class="ed4-c" style="--k:${kc(x)}"><div class="ed4-t"><b>${hh(r[0])}</b><span>${hh(r[1])}</span></div><div class="ed4-b"><div class="ed4-top"><span class="ed4-tag" data-t="${x[2]}">${x[2]} · ${CTL[x[2]]}</span><button class="edb" data-edb="${k}" aria-pressed="${on}" aria-label="Alerte pour ce cours" ${st.al.on?'':'disabled'}>${ic('bell',18)}</button></div><h4>${x[3]}</h4><div class="ed4-m"><span>${ic('pin',14)}${x[4]}</span><span>${ic('usr',14)}${x[5]}</span></div></div></article>`};
const strip=(u,n,d)=>{const t=tIdx(n);return `<div class="ed2-st" role="group" aria-label="Choisir le jour">${DJ.map((s,j)=>`<button data-edd="${j}" aria-pressed="${j==d}"${j==t?' data-today="1"':''}><span>${s}</span><b>${dayDate(n,j).getDate()}</b><i>${n.c.filter(x=>x[0]==j).map(x=>`<u style="background:${kc(x)}"></u>`).join('')}</i></button>`).join('')}</div>`};
const dayN=(u,n)=>{const d=st.d==null?today0(n):st.d;st.d=d;const l=n.c.filter(x=>x[0]==d).sort((a,b)=>a[1]-b[1]),dt=dayDate(n,d);
 let body='';if(!l.length){const nx=nextC(u,n);body=`<div class="card pad ed2-free"><span class="ed2-fi">${ic('cal',26)}</span><b>Journée libre</b><p class="mu">Pas de cours ce ${DF[d].toLowerCase()}.${nx?` Prochain cours : ${DF[nx.j].toLowerCase()} à ${hh(u.crn[nx.x[1]][0])}.`:''}</p></div>`}
 else{l.forEach((x,i)=>{if(i&&l[i-1][1]<2&&x[1]>=2)body+=`<div class="ed2-p">Pause · ${hh(u.crn[1][1])} – ${hh(u.crn[2][0])}</div>`;body+=slotN(u,n,d,x)})}
 return `${strip(u,n,d)}<div class="ed2-dh" data-d="${d}"><b>${DF[d]} ${dt.getDate()} ${MOIS[dt.getMonth()]}</b><span>${l.length?l.length+' cours':'Libre'}</span></div><div class="ed2-tl">${body}</div>`};
const agenda=(u,n)=>{const t=tIdx(n);return `<div class="ed2-ag">${DJ.map((s,j)=>{const l=n.c.filter(x=>x[0]==j).sort((a,b)=>a[1]-b[1]),dt=dayDate(n,j);
 return `<section class="ed2-ad"><div class="ed2-ah${j==t?' now':''}"><b>${DF[j]}</b><span>${dt.getDate()} ${MOIS[dt.getMonth()]}</span><em>${l.length?l.length+' cours':'Libre'}</em></div>${l.length?`<div class="card">${l.map(x=>{const r=u.crn[x[1]],k=key(j,x),on=st.al.on&&!st.al.mute[k],cc=kc(x);return `<div class="li ed2-r" style="--k:${cc}"><div class="ed2-rt">${hh(r[0])}<span>${hh(r[1])}</span></div><i class="edbar" style="background:${cc}"></i><div class="fl"><b>${short(x)}</b><span class="mu">${x[2]} · ${x[4]} · ${tn(x)}</span></div><button class="edb" data-edb="${k}" aria-pressed="${on}" aria-label="Alerte pour ce cours" ${st.al.on?'':'disabled'}>${ic('bell',18)}</button></div>`}).join('')}</div>`:`<p class="ed2-lib">Pas de cours</p>`}</section>`}).join('')}</div>`};
const lbl=n=>{const a=dayDate(n,0),b=dayDate(n,5);return a.getMonth()==b.getMonth()?`${a.getDate()} – ${b.getDate()} ${MOIS[b.getMonth()]}`:`${a.getDate()} ${MOIS[a.getMonth()]} – ${b.getDate()} ${MOIS[b.getMonth()]}`};
const bar=u=>`<div class="ed3-bar" role="note"><span class="ed3-bi">${ic('cap',18)}</span><div class="ed3-bt"><b>${u.f}</b><small>${NIV.find(z=>z[0]==st.n)[1]}</small></div><button class="ed3-al" data-edopen aria-pressed="${st.al.on}" aria-label="Régler les alertes de cours">${ic('bell',16)}<span>${st.al.on?(st.al.lead==-1?'Veille 20h':LEAD.find(l=>l[0]==st.al.lead)[1]):'Alertes off'}</span></button></div>`;
const next3=(u,n)=>{const o=nextC(u,n);
 if(!o)return `<section class="ed3-nx ed3-none"><span class="ed3-ni">${ic('clk',22)}</span><div><b>Plus de cours cette semaine</b><span>Le prochain emploi du temps sera publié par la scolarité.</span></div></section>`;
 const x=o.x,r=u.crn[x[1]],dt=dayDate(n,o.j);
 return `<section class="ed3-nx" style="--k:${kc(x)}"><div class="ed3-nt"><small>${DJ[o.j]} ${dt.getDate()}</small><b>${hh(r[0])}</b><span>${hh(r[1])}</span></div><div class="ed3-nb"><small>Prochain cours</small><b>${x[3]}</b><span>${ic('pin',14)}${x[4]} · ${x[2]}</span></div></section>`};
const mats=n=>{const k=new Set(n.c.map(x=>x[3])).size;return `<details class="ed3-mat card"><summary><b>Matières et types de cours</b><em>${k} matière${k>1?'s':''}</em>${ic('chv',18)}</summary>${legend(n)}</details>`};
const nxAl=(u,n)=>{if(!n||!st.al.on)return '';const z=all(u,n).filter(o=>!st.al.mute[key(o.j,o.x)]).map(o=>alertAt(o)).filter(a=>a>new Date())[0];if(!z)return '';const m=z.getMinutes();return `<p class="ed3-nxa">${ic('clk',16)}Prochaine alerte : ${z.getDate()} ${MOIS[z.getMonth()]} à ${z.getHours()}h${m?String(m).padStart(2,'0'):''}</p>`};
const alertsBody=(u,n)=>`<div class="ed3-swr"><div class="fl"><b>Me prévenir avant mes cours</b><span>Une notification avant chaque cours coché</span></div><button class="edsw" role="switch" data-edsw aria-checked="${st.al.on}" aria-label="Activer les alertes"><i></i></button></div>
<div style="${st.al.on?'':'opacity:.45;pointer-events:none'}"><div class="ed3-lead" role="group" aria-label="Délai de l’alerte">${LEAD.map(([v,l])=>`<button class="chip" data-edl="${v}" aria-pressed="${st.al.lead==v}">${l}</button>`).join('')}</div></div>
${nxAl(u,n)}
<div class="row" style="gap:8px"><button class="btn s" style="flex:1" data-edtest>Tester l’alerte</button>${'Notification' in window&&Notification.permission=='default'?`<button class="btn s" style="flex:1" data-edperm>Autoriser</button>`:''}</div>
<p class="mu" style="font-size:12px;margin:0">Touchez la cloche d’un cours pour couper son alerte.</p>`;
const sheetEl=()=>{let e=document.getElementById('ed3sh');if(!e){e=document.createElement('div');e.id='ed3sh';e.className='ed3-sh';e.setAttribute('role','dialog');e.setAttribute('aria-modal','true');e.setAttribute('aria-label','Alertes de cours');document.body.appendChild(e)}return e};
const sheetRender=()=>{const {u,n}=cur();if(st.cs&&n){sheetEl().innerHTML=csBody(u,n);return}sheetEl().innerHTML=`<div class="ed3-b" data-edx></div><div class="ed3-p"><div class="shx-h"><b>Alertes de cours</b><button class="ib" data-edx aria-label="Fermer">×</button></div>${alertsBody(u,n)}</div>`};
const openSh=()=>{const e=sheetEl();sheetRender();void e.offsetWidth;e.classList.add('on')};
const closeSh=()=>{st.cs=null;const e=document.getElementById('ed3sh');if(e)e.classList.remove('on')};
document.addEventListener('keydown',e=>{if(e.key=='Escape')closeSh()});
const hero5=(u,n)=>{const o=nextC(u,n),niv=NIV.find(z=>z[0]==st.n)[1];
  const top=`<div class="ed5-top"><div class="ed5-id"><small>${niv}</small><b>${u.f}</b></div><button class="ed5-al" data-edopen aria-pressed="${st.al.on}" aria-label="Régler les alertes de cours">${ic('bell',16)}<span>${st.al.on?(st.al.lead==-1?'Veille 20h':LEAD.find(l=>l[0]==st.al.lead)[1]):'Alertes off'}</span></button></div>`;
  const ctl=`<div class="ed3-ctl"><h2>${lbl(n)}</h2><div class="seg" role="group" aria-label="Affichage"><button data-edv="j" aria-pressed="${st.v!='s'}">Jour</button><button data-edv="s" aria-pressed="${st.v=='s'}">Semaine</button></div></div>`;
  let mid;if(!o)mid=`<div class="ed5-none"><b>Plus de cours cette semaine</b><span>Le prochain emploi du temps sera publié par la scolarité.</span></div>`;
  else{const x=o.x,r=u.crn[x[1]],dt=dayDate(n,o.j);mid=`<div class="ed5-nx"><small>Prochain cours · ${DF[o.j]} ${dt.getDate()} ${MOIS[dt.getMonth()]}</small><b>${x[3]}</b><div class="ed5-meta"><span class="ed5-time">${hh(r[0])} – ${hh(r[1])}</span><span>${ic('pin',14)}${x[4]}</span><span>${ic('usr',14)}${tn(x)}</span></div></div>`}
  return `<section class="ed5-hero${st.v=='s'?'':' day'}">${top}${mid}${ctl}</section>`};
 const mn=t=>{const a=t.split(':');return +a[0]*60+ +a[1]};
 const rng=u=>{const a=u.crn.map(r=>mn(r[0])),b=u.crn.map(r=>mn(r[1]));return [Math.floor(Math.min(...a)/60),Math.ceil(Math.max(...b)/60)]};
 const gut=(h0,h1,px)=>{let s='';for(let h=h0;h<h1;h++)s+=`<span style="top:${(h-h0)*px}px">${h}h</span>`;return s};
 const head6=(u,n)=>`<div class="h6"><span class="h6-i">${typeof UJLOG2!=='undefined'?`<img src="${UJLOG2}" alt="UJLoG">`:ic('cap',18)}</span><div class="h6-t"><b>${u.f}</b><small>${NIV.find(z=>z[0]==st.n)[1]}</small></div><button class="h6-al" data-edopen aria-pressed="${st.al.on}" aria-label="Régler les alertes de cours">${ic('bell',16)}<span>${st.al.on?(st.al.lead==-1?'Veille 20h':LEAD.find(l=>l[0]==st.al.lead)[1]):'Off'}</span></button></div>`;
 const si=x=>{const t=(x[3]||'').toLowerCase();return /agro|forêt|forest|sol\b|plante|cultur|environn|écolog|biodiv|climat/.test(t)?'leaf':/info|program|algor|réseau|donn|numér/.test(t)?'pc':/éco|gestion|compta|financ|market|budget/.test(t)?'coin':/droit|jurid|pénal|civil|constit|fiscal/.test(t)?'arch':/socio|histoire|géograph|philo|anthrop|psych|langue|anglais|français|commun/.test(t)?'globe':/chim|phys|biolog|labo|génétiq|micro|cyto|membran|cellul|plasm|molécul|enzym|biochim/.test(t)?'flask':/math|analyse|algèbre|statist|calcul|probab/.test(t)?'compass':/mém|stage|projet|tutorat|recherche|méthod/.test(t)?'bkm':x[2]=='TP'?'flask':x[2]=='TD'?'pen':'cap'};
 const when=(n,j)=>{const w=new Date(),k=Math.round((dayDate(n,j)-new Date(w.getFullYear(),w.getMonth(),w.getDate()))/864e5);return k<=0?'Aujourd’hui':k==1?'Demain':'Dans '+k+' j'};
 const nxt=(u,n)=>{const o=nextC(u,n);if(!o)return `<div class="n6 n6-none">${ic('clk',18)}<span>Plus de cours cette semaine</span></div>`;const x=o.x,r=u.crn[x[1]],dt=dayDate(n,o.j);return `<button class="n6" data-edcs="${o.j},${x[1]}" style="--k:${kc(x)}">${lg(si(x))}<div><small>Prochain cours · ${DF[o.j]} ${dt.getDate()} ${MOIS[dt.getMonth()]}</small><b>${x[3]}</b><span>${hh(r[0])} – ${hh(r[1])} · ${x[4]} · ${tn(x)}</span></div><em class="n6-w">${when(n,o.j)}</em></button>`};
 const dayGrid=(u,n,d)=>{const [h0,h1]=rng(u),px=66,H=(h1-h0)*px,top=m=>(m-h0*60)*px/60,l=n.c.filter(x=>x[0]==d).sort((a,b)=>a[1]-b[1]);
  const p1=mn(u.crn[1][1]),p2=mn(u.crn[2][0]),pause=p2>p1?`<div class="g6-p" style="top:${top(p1)}px;height:${top(p2)-top(p1)}px"><span>Pause</span></div>`:'';
  const bl=l.map(x=>{const r=u.crn[x[1]],k=key(d,x),on=st.al.on&&!st.al.mute[k],a=top(mn(r[0])),h=top(mn(r[1]))-a,ik=si(x);return `<article class="g6-c${h<100?' s':''}" style="--k:${kc(x)};top:${a+2}px;height:${h-4}px"><span class="g6-wm">${ic(ik,86)}</span><div class="g6-hd"><span class="g6-ic">${ic(ik,22)}</span><div class="g6-tt"><small>${x[2]} · ${hh(r[0])} – ${hh(r[1])}</small><h4>${x[3]}</h4></div><button class="edb" data-edb="${k}" aria-pressed="${on}" aria-label="Alerte pour ce cours" ${st.al.on?'':'disabled'}>${ic('bell',16)}</button></div><div class="g6-m"><span>${ic('pin',13)}${x[4]}</span><span>${ic('usr',13)}${x[5]}</span></div></article>`}).join('');
  const w=new Date(),nm=w.getHours()*60+w.getMinutes(),nl=tIdx(n)==d&&nm>=h0*60&&nm<=h1*60?`<div class="g6-now" style="top:${top(nm)}px"></div>`:'';
  const fr=l.length?'':`<div class="g6-free"><span class="g6-fi">${ic('cal',26)}</span><b>Journée libre</b><span>Pas de cours ce ${DF[d].toLowerCase()}.</span></div>`;
  return `<div class="g6o"><div class="g6" style="height:${H}px">${gut(h0,h1,px)}<div class="g6-bd">${pause}${bl}${nl}${fr}</div></div></div>`};
 const weekGrid=(u,n)=>{const [h0,h1]=rng(u),px=46,H=(h1-h0)*px,t=tIdx(n),top=m=>(m-h0*60)*px/60;
  const hd=DJ.map((s,j)=>`<button class="w6-h${j==t?' now':''}" data-edgo="${j}"><span>${s}</span><b>${dayDate(n,j).getDate()}</b></button>`).join('');
  const cols=DJ.map((s,j)=>`<div class="w6-col${j==t?' now':''}">${n.c.filter(x=>x[0]==j).map(x=>{const r=u.crn[x[1]],a=top(mn(r[0])),h=top(mn(r[1]))-a;return `<button class="w6-c" data-edgo="${j}" style="--k:${kc(x)};top:${a+1}px;height:${h-2}px" aria-label="${DF[j]} ${hh(r[0])} : ${x[3]}, ${x[4]}">${ic(si(x),h>60?20:16)}<b>${x[2]}</b><span>${x[4]}</span></button>`}).join('')}</div>`).join('');
  return `<div class="w6"><div class="w6-hd"><i></i>${hd}</div><div class="w6-bd" style="height:${H}px"><div class="w6-gu">${gut(h0,h1,px)}</div>${cols}</div></div>`};
 document.addEventListener('click',e=>{const b=e.target.closest('[data-edgo]');if(b){st.d=+b.dataset.edgo;st.v='j';save();render()}});
 const dayCards=(u,n,d)=>{const l=n.c.filter(x=>x[0]==d).sort((a,b)=>a[1]-b[1]);
  if(!l.length)return `<div class="g6-free card pad" style="position:static;padding:26px 16px"><span class="g6-fi">${ic('cal',26)}</span><b>Journée libre</b><span>Pas de cours ce ${DF[d].toLowerCase()}.</span></div>`;
  let s='';l.forEach((x,i)=>{if(i&&l[i-1][1]<2&&x[1]>=2)s+=`<div class="ed2-p">Pause · ${hh(u.crn[1][1])} – ${hh(u.crn[2][0])}</div>`;
   const r=u.crn[x[1]],k=key(d,x),on=st.al.on&&!st.al.mute[k];
   s+=`<button class="d7" style="--k:${kc(x)}" data-edcs="${d},${x[1]}" aria-label="${x[3]}, ${hh(r[0])} – ${hh(r[1])}, ${x[4]}"><span class="d7-im">${lg(si(x))}<b>${hh(r[0])}</b><small>${hh(r[1])}</small></span><span class="d7-mm"><span class="d7-tg">${x[2]} · ${CTL[x[2]]}</span><b>${x[3]}</b><small>${x[4]} · ${tn(x)}</small></span><span class="d7-r">${on?ic('bell',16):''}${ic('chv',18)}</span></button>`});
  return `<div class="d7l">${s}</div>`};
 const LG={
 leaf:'<path d="M6 25C5 12 13 5 27 4c1 13-5 20-17 21z" fill="#fff"/><path d="M7 26c5-6 9-10 15-16" stroke="var(--k)" stroke-width="1.7" fill="none" stroke-linecap="round"/><path d="M12 20.5h5.5M15.5 16.5h5" stroke="var(--k)" stroke-width="1.4" stroke-linecap="round"/><circle cx="25" cy="25" r="3.2" fill="#FCD34D"/>',
 flask:'<path d="M12 3.5h8v1.8h-1.6v6.4l6.5 11.4a2.7 2.7 0 0 1-2.3 4H9.4a2.7 2.7 0 0 1-2.3-4l6.5-11.4V5.3H12z" fill="#fff"/><path d="M10.4 19.5h11.2l3.2 5.6a1.3 1.3 0 0 1-1.1 2H8.3a1.3 1.3 0 0 1-1.1-2z" fill="var(--k)" fill-opacity=".6"/><circle cx="14" cy="23" r="1.4" fill="#fff"/><circle cx="19" cy="21.5" r="1" fill="#fff"/><circle cx="23" cy="6" r="2" fill="#FCD34D"/>',
 compass:'<rect x="4" y="5" width="24" height="22" rx="5" fill="#fff"/><path d="M9 8v16M9 24h16" stroke="var(--k)" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/><path d="M9 22c3.5 0 4.5-11 8-11s4.5 11 8 11" stroke="var(--k)" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="17" cy="11" r="2" fill="#F59E0B"/>',
 pc:'<rect x="3.5" y="6" width="25" height="17" rx="3.5" fill="#fff"/><path d="M9 11.5l3.5 3.2L9 17.9M15.5 18h6" stroke="var(--k)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 27h10M16 23v4" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>',
 coin:'<rect x="5" y="16" width="6" height="11" rx="1.8" fill="#fff"/><rect x="13" y="10" width="6" height="17" rx="1.8" fill="#fff"/><rect x="21" y="4.5" width="6" height="22.5" rx="1.8" fill="#FCD34D"/><path d="M4 28.5h24" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>',
 arch:'<path d="M16 6v19M9.5 27h13" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M5 10.5h22" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M5 11l-3.2 8h6.4zM27 11l-3.2 8h6.4z" fill="#fff"/><path d="M1.8 19a3.2 3.2 0 0 0 6.4 0zM23.8 19a3.2 3.2 0 0 0 6.4 0z" fill="#FCD34D"/><circle cx="16" cy="6" r="2.2" fill="#FCD34D"/>',
 globe:'<circle cx="16" cy="16" r="11.5" fill="#fff"/><path d="M4.5 16h23M16 4.5c-5.5 5.5-5.5 17.500 0 23M16 4.5c5.5 5.5 5.5 17.500 0 23M7 9.5h18M7 22.5h18" stroke="var(--k)" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="24" cy="8" r="3" fill="#FCD34D"/>',
 bkm:'<path d="M16 9c-3-2-7-2.6-11-2v17c4-.6 8 0 11 2z" fill="#fff"/><path d="M16 9c3-2 7-2.6 11-2v17c-4-.6-8 0-11 2z" fill="#fff" fill-opacity=".9"/><path d="M16 9v17" stroke="var(--k)" stroke-width="1.3"/><path d="M8 12.3c2-.2 4 0 6 .8M8 16.3c2-.2 4 0 6 .8M18 13.1c2-.8 4-1 6-.8M18 17.1c2-.8 4-1 6-.8" stroke="var(--k)" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M22 3.5v7l2.2-1.6 2.2 1.6v-7z" fill="#F59E0B"/>',
 pen:'<rect x="5" y="4" width="17" height="23" rx="3" fill="#fff"/><path d="M9 10h9M9 14.5h9M9 19h5" stroke="var(--k)" stroke-width="1.5" stroke-linecap="round"/><g transform="rotate(38 23 20)"><rect x="20.6" y="8" width="5" height="15" rx="1" fill="#FCD34D"/><rect x="20.6" y="8" width="5" height="3.6" rx="1" fill="#F87171"/><path d="M20.6 23h5l-2.5 5z" fill="#FDE6C4"/><path d="M22 26.2h2L23 28z" fill="#374151"/></g>',
 cap:'<path d="M16 5L2.5 11.5 16 18l13.5-6.5z" fill="#fff"/><path d="M8 15.5v5.5c0 2.300 3.600 4.500 8 4.500s8-2.200 8-4.500v-5.500L16 19.500z" fill="#fff" fill-opacity=".88"/><path d="M28 12.500v8" stroke="#FCD34D" stroke-width="2.200" stroke-linecap="round"/><circle cx="28" cy="22" r="1.800" fill="#FCD34D"/>'};
 const lg=n=>`<span class="lg7"><svg viewBox="0 0 32 32" aria-hidden="true">${LG[n]||LG.cap}</svg></span>`;
 window.UJLG={LG:LG,lg:lg,si:si,kc:kc};
 const strip7=(u,n,d)=>{const t=tIdx(n);return `<div class="s7" role="group" aria-label="Choisir le jour">${DJ.map((s,j)=>{const l=n.c.filter(x=>x[0]==j),dt=dayDate(n,j);return `<button data-edd="${j}" aria-pressed="${j==d}"${j==t?' data-today="1"':''} aria-label="${DF[j]} ${dt.getDate()} ${MOIS[dt.getMonth()]}, ${l.length?l.length+' cours':'libre'}"><span>${s}</span><b>${dt.getDate()}</b><i>${l.length?l.map(x=>`<u style="background:${kc(x)}"></u>`).join(''):'<em></em>'}</i></button>`}).join('')}</div>`};
 const csBody=(u,n)=>{const x=st.cs&&n.c.find(y=>y[0]==st.cs[0]&&y[1]==st.cs[1]);
  if(!x)return `<div class="ed3-b" data-edx></div><div class="ed3-p"><div class="shx-h"><b>Cours</b><button class="ib" data-edx aria-label="Fermer">×</button></div></div>`;
  const j=x[0],r=u.crn[x[1]],dt=dayDate(n,j),k=key(j,x),on=st.al.on&&!st.al.mute[k];
  const row=(i,l,v)=>`<div class="cs8-r"><span class="cs8-ri">${ic(i,18)}</span><div><small>${l}</small><b>${v}</b></div></div>`;
  return `<div class="ed3-b" data-edx></div><div class="ed3-p cs8" style="--k:${kc(x)}"><div class="cs8-top"><i class="cs8-gr"></i><button class="cs8-x" data-edx aria-label="Retour">${ic('chv',18)}<span>Retour</span></button><div class="cs8-hd">${lg(si(x))}<div><span class="cs8-tg">${x[2]} · ${CTL[x[2]]}</span><h3>${x[3]}</h3></div></div></div>
 <div class="cs8-bd"><div class="cs8-l">${row('cal','Jour',DF[j]+' '+dt.getDate()+' '+MOIS[dt.getMonth()])}${row('clk','Horaire',hh(r[0])+' – '+hh(r[1]))}${row('pin','Salle',x[4])}${row('usr','Enseignant',x[5])}</div>
 <p class="cs8-n">${u.f} · ${NIV.find(z=>z[0]==st.n)[1]}</p>
 <button class="cs8-al" data-edb="${k}" aria-pressed="${on}" ${st.al.on?'':'disabled'}>${ic('bell',18)}<span>${on?'Alerte '+leadTxt():(st.al.on?'Me prévenir pour ce cours':'Alertes désactivées')}</span></button>
 <button class="cs8-lk" data-go="sup1" data-edx>${ic('book',18)}Voir les supports de cours</button></div></div>`};
 document.addEventListener('click',e=>{const c=e.target.closest('[data-edcs]');if(c){st.cs=c.dataset.edcs.split(',').map(Number);openSh()}});
 const fullHtml=()=>{const {u,n}=cur();if(!n)return `${bar(u)}${empty(u)}`;const d=st.d==null?today0(n):st.d;st.d=d;const c=n.c.filter(x=>x[0]==d).length,dt=dayDate(n,d);
  return `${head6(u,n)}${nxt(u,n)}<div class="ed3-ctl"><h2>${lbl(n)}</h2><div class="seg" role="group" aria-label="Affichage"><button data-edv="j" aria-pressed="${st.v!='s'}">Jour</button><button data-edv="s" aria-pressed="${st.v=='s'}">Semaine</button></div></div>${st.v=='s'?weekLand(u,n):`${strip7(u,n,d)}<div class="ed2-dh" data-d="${d}"><b>${DF[d]} ${dt.getDate()} ${MOIS[dt.getMonth()]}</b><span>${c?c+' cours':'Libre'}</span></div>${dayCards(u,n,d)}`}${mats(n)}`};

const render=()=>{const {u,n}=cur();if(n&&st.d==null)st.d=today0(n);
 const h=document.getElementById('edh'),f=document.getElementById('edm');
 if(h)h.innerHTML=homeHtml();if(f)f.innerHTML=fullHtml();if(document.getElementById('ed3sh'))sheetRender();sched()};

/* Alerte : bannière dans l'application (+ notification du téléphone si autorisée) */
const toast=(t,b)=>{window.UJEV&&UJEV.edt(t,b);let e=document.getElementById('edt');if(!e){e=document.createElement('div');e.id='edt';e.setAttribute('role','status');document.body.appendChild(e)}
 e.innerHTML=`<span class="ednt-i">${ic('bell',18)}</span><div><small>My UJLoG · maintenant</small><b>${t}</b><span>${b}</span></div>`;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),5000);
 try{if('Notification' in window&&Notification.permission=='granted')new Notification('My UJLoG · '+t,{body:b})}catch(x){}};
let tm=null;
const sched=()=>{clearTimeout(tm);const {u,n}=cur();if(!n||!st.al.on)return;const now=new Date();
 const nx=all(u,n).filter(o=>!st.al.mute[key(o.j,o.x)]).map(o=>({o,a:alertAt(o)})).filter(z=>z.a>now).sort((a,b)=>a.a-b.a)[0];
 if(nx&&nx.a-now<2147e6)tm=setTimeout(()=>{const m=msg(u,nx.o);toast(m[0],m[1]);sched()},nx.a-now)};

document.addEventListener('click',e=>{const t=s=>e.target.closest(s);let b;
 if(t('[data-edopen]')){st.cs=null;openSh();return}
 if(t('[data-edx]')){closeSh();return}
 if(b=t('[data-edu]')){st.u=b.dataset.edu;st.d=null;st.sel=null;save();render();return}
 if(b=t('[data-edn]')){st.n=b.dataset.edn;st.d=null;st.sel=null;save();render();return}
 if(b=t('[data-edv]')){st.v=b.dataset.edv;save();render();return}
 if(b=t('[data-edd]')){st.d=+b.dataset.edd;render();return}
 if(b=t('[data-edcell]')){st.sel=b.dataset.edcell.split(',').map(Number);render();return}
 if(b=t('[data-edb]')){const k=b.dataset.edb;if(st.al.mute[k])delete st.al.mute[k];else st.al.mute[k]=1;save();render();return}
 if(t('[data-edsw]')){st.al.on=!st.al.on;save();render();return}
 if(b=t('[data-edl]')){st.al.lead=+b.dataset.edl;save();render();return}
 if(t('[data-edtest]')){const {u,n}=cur(),o=n&&nextC(u,n);if(o){const m=msg(u,o);toast(m[0],m[1])}else toast('Alerte de test','Aucun cours à venir cette semaine');return}
 if(t('[data-edperm]')){try{Notification.requestPermission().then(render)}catch(x){}}});
render();
})();

}catch(e){console.error("[ujlog] bloc8",e)}
/* ==== bloc9 ==== */
try{
(function(){const w=document.getElementById('xwb'),f=w.querySelector('iframe');let u='';
const open=(x,n)=>{const a=document.createElement('a');a.href=x;a.target='_blank';a.rel='noopener noreferrer';a.style.display='none';document.body.appendChild(a);a.click();a.remove()};
const close=()=>{u='';w.classList.remove('on');f.src='about:blank'};

w.addEventListener('click',e=>{if(e.target.closest('[data-xwx]')||e.target==w)close()});
document.addEventListener('keydown',e=>{if(e.key=='Escape'&&w.classList.contains('on'))close()});
document.addEventListener('click',e=>{const d=e.target.closest('[data-web]');if(d){e.preventDefault();open(d.dataset.web,d.dataset.wt);return}
const k=e.target.closest('a.bsl');if(k&&/^https:\/\/(www\.)?(dob-mesrs\.ci|croudaloa\.ci|ujlog\.edu\.ci)(\/|$)/.test(k.href)){e.preventDefault();open(k.href,k.textContent)}});
})()
}catch(e){console.error("[ujlog] bloc9",e)}
/* ==== bloc10 ==== */
try{
document.addEventListener('click',e=>{const c=e.target.closest('[data-esf]');if(!c)return;const v=c.dataset.esf;c.parentNode.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===c));document.querySelectorAll('#meqs button').forEach(b=>{b.hidden=v!='Tous'&&b.dataset.sp!=v})})
}catch(e){console.error("[ujlog] bloc10",e)}
/* ==== bloc11 ==== */
try{
(()=>{
const T=5000;
const PAL=[['#5A1E08','#8A3010','#C2410C'],['#0A1B3D','#0F2F66','#1B4D96'],['#064E2B','#0B6B38','#15803D'],['#3B1456','#5E2A86','#8B3FBF'],['#083D4A','#0E6177','#0E8FA8']];
const SPAL={a41:[['#064E3B','#0A7A5A','#10B981'],['#7C2D12','#C2410C','#F59E0B'],['#831843','#BE185D','#FB7185'],['#134E4A','#0F766E','#2DD4BF']],a42:[['#172554','#1D4ED8','#60A5FA'],['#312E81','#4F46E5','#A78BFA'],['#164E63','#0891B2','#22D3EE'],['#4C1D95','#7C3AED','#C084FC']],a43:[['#14532D','#15803D','#4ADE80'],['#713F12','#CA8A04','#FACC15'],['#7C2D12','#EA580C','#FDBA74'],['#064E3B','#0D9488','#5EEAD4']],a45:[['#0E2656','#17387A','#3B82F6'],['#14532D','#2E9B3A','#86EFAC'],['#7F1D1D','#DC2626','#FCA5A5']]};
const paint=(el,i)=>{const bd=el.closest&&el.closest('.bd'),L=(bd&&SPAL[bd.id])||PAL,p=L[i%L.length];el.style.setProperty('--ha',p[0]);el.style.setProperty('--hm',p[1]);el.style.setProperty('--hb',p[2])};
const dots=()=>{};
const IMG=()=>[PO[0],PO[1],PRES,PH[0],PH[1],PH[2]],POS=['50% 50%','50% 18%','50% 38%','50% 50%','50% 40%','50% 50%'];
const photo=(el,idx)=>{let p=el.querySelector('.bn-ph');if(!p){p=document.createElement('span');p.className='bn-ph';p.setAttribute('aria-hidden','true');el.prepend(p)}
 const im=IMG();if(idx!=null&&im[idx]){p.style.backgroundImage='url("'+im[idx]+'")';p.style.backgroundPosition=POS[idx];p.classList.add('on')}else p.classList.remove('on')};
const POOL={a41:[0,0,1,1],a42:[1,4],a43:[2,1,2]};
const swap=(el,fn)=>{if(!el.offsetParent){fn();return}el.classList.add('bn-f');setTimeout(()=>{fn();el.classList.remove('bn-f')},300)};
const fns=[];
/* Mon espace : échéances à venir */
const hero=document.querySelector('.mx-hero');
if(hero&&typeof dJ!=='undefined'){
 /* Recherches (novembre 2026) : AIP (3 nov.), Abidjan.net (19 sept.), portail DOB, croudaloa.ci.
    [étiquette, pastille, titre, sous-titre, ligne de date, source, cible (écran a… ou lien), photo, valable jusqu'au] */
 const J=(iso,f)=>{const n=dJ(iso);return n>0?dSt(n)[0]:f};
 const BAN=[
  ['Échéance',()=>J('2026-11-09','En cours'),'Bourses DOB : dépôt des dossiers','Demande en ligne close le 6 novembre. Dépôt physique au CROU, délai de rigueur.','Du 9 au 27 novembre','DOB','a32',null,'2026-11-27'],
  ['Échéance',()=>J('2026-11-09','Aujourd’hui'),'Paiement du loyer · 54 000 FCFA','Guichet de l’Agent Comptable, pour les demandes validées en ligne.','Lundi 9 novembre','CROU-D','a22',0,'2026-11-09'],
  ['Opportunité',()=>J('2026-11-11','Aujourd’hui'),'Bourse d’excellence Campus France','Master en France, filières scientifiques : date limite de candidature.','Mercredi 11 novembre','CROU-D','a25',1,'2026-11-11'],
  ['Événement',()=>J('2026-12-02','En cours'),'Colloque international sur l’agroforesterie tropicale','Organisé par l’UJLoG à Daloa, annoncé en conférence de presse le 3 novembre.','Du 2 au 4 décembre','UJLoG','https://www.aip.ci/cote-divoire-aip-lujlog-annonce-un-colloque-international-sur-lagroforesterie-tropicale-en-decembre/',null,'2026-12-04'],
  ['Opportunité',()=>J('2026-12-11','Aujourd’hui'),'Erasmus+ mobilité étudiante','Mobilité d’études d’un semestre en Europe : date limite de candidature.','Vendredi 11 décembre','CROU-D','a25',1,'2026-12-11'],
  ['Actualité',()=>'17 sept.','Rentrée académique 2026-2027','Lancée le 17 septembre. En 2025-2026, 939 diplômés : 617 en Licence et 322 en Master.','Cérémonie solennelle','UJLoG','https://news.abidjan.net/articles/749286/daloa-luniversite-jean-lorougnon-guede-effectue-sa-rentree-academique-2026-2027',2,'2027-06-30']
 ].filter(x=>dJ(x[8])>=0);
 if(BAN.length>1){
  hero.classList.add('bn-c');let i=0;
  const set=k=>{const [tg,ch,ti,sb,dl,sr,go,im]=BAN[k],w=/^http/.test(go);
   if(w){hero.dataset.web=go;hero.dataset.wt=ti;delete hero.dataset.go}else{hero.dataset.go=go;delete hero.dataset.web;delete hero.dataset.wt}
   hero.querySelector('.mx-hl>span:first-child').lastChild.textContent=tg;
   hero.querySelector('.mx-nxd').textContent=ch();
   hero.querySelector('.mx-ht').textContent=ti;hero.querySelector('.mx-hx').textContent=sb;
   hero.querySelector('.mx-hd').textContent=dl;hero.querySelector('.mx-hs').textContent=sr;
   paint(hero,k);photo(hero,im)};
  set(0);
  fns.push(()=>{i=(i+1)%BAN.length;swap(hero,()=>set(i))});
 }
}
/* Pages d'espace : infos « À la une » de l'espace */
document.querySelectorAll('.bd').forEach(sc=>{
 const bn=sc.querySelector('.sph-bn'),e=typeof ESP!=='undefined'&&ESP.find(x=>x.id===sc.id);
 if(!bn||!e||!e.un||e.un.length<2)return;
 const k0=ESP.indexOf(e);let i=0;
 bn.classList.add('bn-c');
 const tk=document.createElement('button');tk.className='sph-bt';bn.appendChild(tk);
 const set=k=>{const [t,d,u,g,im]=e.un[k];
  tk.innerHTML='<span class="r"><em></em><u></u></span><b></b>';
  const em=tk.querySelector('em');em.innerHTML=(typeof I==='function'&&typeof UI!=='undefined'?I(UI[g]||'news',14):'');em.append(g);
  tk.querySelector('u').innerHTML='Consulter'+(typeof I==='function'?I('chv',14):'');
  tk.querySelector('b').textContent=t;tk.dataset.web=u;tk.dataset.wt=t;tk.setAttribute('aria-label',t+' — '+d);
  paint(bn,k0+k);photo(bn,(POOL[e.id]||[])[k]??im??0)};
 set(0);
 fns.push(()=>{i=(i+1)%e.un.length;swap(bn,()=>set(i))});
});
window.__bnStep=()=>fns.forEach(f=>f());
setInterval(()=>fns.forEach(f=>f()),T);
})();
}catch(e){console.error("[ujlog] bloc11",e)}
/* ==== bloc12 ==== */
try{
document.querySelectorAll('.bd').forEach(b=>{const h=b.querySelector('.sph');if(h)h.dataset.site=b.id})
}catch(e){console.error("[ujlog] bloc12",e)}
/* ==== bloc13 ==== */
try{
document.addEventListener('click',e=>{const b=e.target.closest('.ufr-lv button');if(!b)return;const d=b.closest('.ufr-d');d.querySelectorAll('.ufr-lv button').forEach(x=>x.setAttribute('aria-pressed',x===b));d.querySelectorAll('.ufr-p').forEach(p=>{p.hidden=p.dataset.lv!==b.dataset.lv})})
}catch(e){console.error("[ujlog] bloc13",e)}
/* ==== bloc14 ==== */
try{
document.addEventListener('click',e=>{const b=e.target.closest('.ux-lv button');if(!b)return;const w=b.closest('.bd')||document;w.querySelectorAll('.ux-lv button').forEach(x=>x.setAttribute('aria-pressed',x===b));w.querySelectorAll('.ux-p').forEach(p=>{p.hidden=p.dataset.ulv!==b.dataset.ulv})});
}catch(e){console.error("[ujlog] bloc14",e)}
/* ==== bloc15 ==== */
try{
document.addEventListener('click',e=>{const b=e.target.closest('.ufr-tb button');if(!b)return;const p=b.closest('.ufr-p');p.querySelectorAll('.ufr-tb button').forEach(x=>x.setAttribute('aria-pressed',x===b));p.querySelectorAll('.ufr-t').forEach(x=>{x.hidden=x.dataset.tb!==b.dataset.tb})});
document.addEventListener('toggle',e=>{const d=e.target;if(d.matches&&d.matches('details.ufr-d:not(.ufr-lmd)')&&d.open&&!d.dataset.q)document.querySelectorAll('details.ufr-d[open]:not(.ufr-lmd)').forEach(x=>{if(x!==d)x.open=false})},true);
document.addEventListener('input',e=>{if(e.target.id!=='ufr-q')return;const q=e.target.value.trim().toLowerCase();let n=0;document.querySelectorAll('.ufr-cd').forEach(c=>{const m=!q||c.dataset.k.includes(q);c.hidden=!m;if(m)n++});const z=document.getElementById('ufr-none');if(z)z.hidden=n>0||!q});
}catch(e){console.error("[ujlog] bloc15",e)}
/* ==== v43-structures ==== */
try{

/* v43 : une page independante par structure (comme chaque UFR) + liens externes directs (DOB, MESRS) comme CROU-D */
(()=>{const app=document.getElementById('app');if(!app)return;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const host=u=>{try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return u}};
const SEL='.sps.m33 > button[data-web], button.li[data-web], .cmp-c[data-web]';
['q1','q2','q4','q5','q6','q7'].forEach(qid=>{
 const q=document.getElementById(qid);if(!q)return;
 const back=q.querySelector('.row .ib'),nav=q.querySelector('nav.nav'),hero=q.querySelector('.cxr');
 const base=(hero&&(hero.getAttribute('style').match(/#[0-9A-Fa-f]{6}/g)||[])[1])||'#15803D';
 const rows=[...q.querySelectorAll(SEL)].filter(r=>!r.closest('.cxbx'));
 const L=rows.map((r,i)=>{const cs=getComputedStyle(r);
  const c=(r.style.getPropertyValue('--c')||r.style.getPropertyValue('--v')||'').trim()||base;
  const sm=r.querySelector('small,.fl span');
  return{id:qid+'s'+i,t:r.dataset.wt||(r.querySelector('b')||r).textContent.trim(),s:sm?sm.textContent.trim():'',u:r.dataset.web,c,ic:(r.querySelector('svg')||{outerHTML:''}).outerHTML,r}});
 L.forEach(x=>{
  const others=L.filter(y=>y!==x&&y.t!==x.t);
  const h=host(x.u),mes=/mesrs-ci\.net/.test(h);
  const sec=document.createElement('section');sec.className='bd';sec.id=x.id;
  sec.innerHTML=`<h2>${esc(x.t)}</h2><div class="ph"><div class="sc">
<div class="row"><button class="ib" data-go="${qid}" aria-label="Retour" style="transform:scaleX(-1)">${back?back.innerHTML:''}</button><h1 class="t fl" style="font-size:19px;line-height:1.2">${esc(x.t)}</h1></div>
<section class="cxr" style="background:linear-gradient(135deg,${x.c},${x.c}CC);box-shadow:0 6px 16px ${x.c}55"><div class="rt"><span class="ri" style="background:#fff;color:${x.c}">${x.ic}</span><div><h2 style="font-size:19px">${esc(x.t)}</h2><p>${esc(x.s)}</p></div></div><div class="rs"><div><b style="font-size:13px">${esc(h)}</b><span>Site</span></div><div><b style="font-size:13px">Externe</b><span>Navigateur</span></div><div><b style="font-size:13px">${mes?'MESRS':'UJLoG'}</b><span>Source</span></div></div></section>
<section class="cxbx"><h3>Passer à l’action</h3><button class="g1" data-web="${esc(x.u)}" data-wt="${esc(x.t)}">Ouvrir sur ${esc(h)}</button></section>
${others.length?`<div class="cxsec"><h3>Dans ${esc(q.querySelector('h1').textContent)}</h3><span class="mu" style="font-size:12.5px">${others.length} autres</span></div><div class="sps m33">${others.map(y=>`<button data-go="${y.id}" style="--c:${y.c}"><span class="si">${y.ic}</span><b>${esc(y.t)}</b><small>${esc(y.s)}</small></button>`).join('')}</div>`:''}
</div>${nav?nav.outerHTML:''}</div>`;
  app.appendChild(sec);
  x.r.removeAttribute('data-web');x.r.removeAttribute('data-wt');x.r.setAttribute('data-go',x.id);
 });
});})();

}catch(e){console.error("[ujlog] v43-structures",e)}
/* ==== v55-campus-blocs-js ==== */
try{
(()=>{
const g=document.getElementById('mcb'),app=document.getElementById('app');if(!g)return;
const ic=(n,s)=>`<svg class="i" aria-hidden="true" style="width:${s}px;height:${s}px"><use href="#${n}"/></svg>`;
/* Le semestre bascule tout seul : à partir de cette date, Semestre 2 remplace Semestre 1 (à ajuster selon le calendrier universitaire) */
const DEBUT_S2=new Date(2027,2,1),SEM=new Date()>=DEBUT_S2?2:1,NIV='Licence 1 · Agroforesterie';
/* Données d'exemple, à brancher plus tard : emploi du temps réel, supports publiés par les enseignants, sujets, objets signalés */
const T=[['Lundi','10h–12h','Membrane plasmique et cytosquelette','CM · Amphi B · Pr BONY'],['Lundi','16h–18h','Membrane plasmique et cytosquelette','CM · Amphi B · Pr BONY'],['Mercredi','10h–12h','Analyse','CM · Amphi C · Dr BROU']];
const CR=[['Membrane plasmique, hyaloplasme et cytosquelette','Pr BONY Kotchi Yves'],['Analyse','Dr BROU Akahoua']];
const SUJ=[['Biologie cellulaire · Examen','Session 1 · [Année]'],['Analyse · Examen','Session 1 · [Année]'],['Botanique · Examen','Session 2 · [Année]']];
const O=[['Trouvé','Clé USB noire','Amphi B · 6 nov.'],['Perdu','Carte d’étudiant','Bibliothèque · 5 nov.'],['Trouvé','Sac à dos bleu','Restaurant U · 4 nov.']];
const sheet=(b)=>`<span class="sh"><i>${b}</i><u></u><u></u><u></u><u style="width:60%"></u><u class="bx"></u></span>`;
const PV={
'Emploi du temps':T.map(([d,h,m,x])=>`<span class="mc-s mc-t"><em>Rappel · ${d}</em><strong>${h}</strong><b>${m}</b><small>${x}</small></span>`),
'Supports de cours':[...CR,['Botanique générale','[Enseignant]']].map(([t,p])=>`<span class="mc-s mc-p k">${sheet('COURS')}<span class="mm"><em>${NIV.split(' · ')[0]} · Semestre ${SEM}</em><b>${t}</b><small>${p}</small><small>[n] supports</small></span></span>`),
'Travaux dirigés':[...CR,['Botanique générale','[Enseignant]']].map(([t,p])=>`<span class="mc-s mc-p k">${sheet('TD')}<span class="mm"><em>${NIV.split(' · ')[0]} · Semestre ${SEM}</em><b>${t}</b><small>${p}</small><small>[n] séries de TD</small></span></span>`),
'Anciens sujets':SUJ.map(([t,p])=>`<span class="mc-s mc-p">${sheet('PDF')}<span class="mm"><em>Ancien sujet</em><b>${t}</b><small>${p}</small><small>À télécharger</small></span></span>`),
'Perdu / trouvé':O.map(([e,n,l])=>`<span class="mc-s mc-o"><span class="im">${ic('cam',26)}Photo de l’objet</span><span class="mm"><span class="tg${e=='Perdu'?' pe':''}">${e}</span><b>${n}</b><small>${l}</small></span></span>`)};
[...g.querySelectorAll('.m28-qb')].forEach((b,k)=>{
 const i=b.querySelector('.m24-ic'),tx=b.querySelector('.m28-tx');if(!i||!tx||b.querySelector('.mc-hd'))return;
 const hd=document.createElement('div');hd.className='mc-hd';hd.append(i,tx);b.prepend(hd);
 const p=PV[tx.querySelector('b').textContent.trim()];if(!p)return;
 const pv=document.createElement('div');pv.className='mc-pv';pv.setAttribute('aria-hidden','true');
 const tr=document.createElement('div');tr.className='mc-tr';tr.style.animationDelay='-'+(k*3)+'s';
 tr.innerHTML=p.concat([p[0]]).join('');pv.appendChild(tr);b.appendChild(pv)});
/* Pages « Supports de cours » et « Travaux dirigés » : aperçu de tous les cours du semestre */
if(!app)return;
const nav=document.querySelector('#a2 nav.nav'),bg=document.querySelector('#a2 .bgc');
const page=(id,titre,c,c2,sous,lignes)=>{
 const rows=(t)=>lignes.map(x=>`<div class="li" style="width:100%">${ic('doc',20)}<div class="fl"><b>${x[0]}</b><span class="mu" style="font-size:13px">${x[1]}</span></div><span class="mu">${ic('dl',18)}</span></div>`).join('');
 const cours=CR.map(([t,p],n)=>`<article class="card pad sup-c"><div class="hd"><span class="ic" style="background:${c}">${ic(id=='sup1'?'book':'pen',20)}</span><div class="fl"><b style="font:800 15px/1.25 var(--h)">${t}</b><span class="mu" style="font-size:13px">${p}</span></div><span class="tag">${lignes.length} fichiers</span></div>${rows()}</article>`).join('');
 const sec=document.createElement('section');sec.className='bd';sec.id=id;sec.style.setProperty('--c',c);
 sec.innerHTML=`<h2>${titre}</h2><div class="ph"><div class="sc">${bg?bg.outerHTML:''}
<div class="row"><button class="ib" data-go="a2" aria-label="Retour à Mon campus" style="transform:scaleX(-1)">${ic('chv',22)}</button><h1 class="t fl" style="font-size:24px">${titre}</h1></div>
<section class="sup-h" style="background:linear-gradient(150deg,${c2},${c})"><em>${NIV.toUpperCase()}</em><h2>${titre}</h2><p>${sous}</p><span class="ch" data-semch>Semestre ${SEM}</span></section>
<div class="seg" data-semseg><button data-sem="1" aria-pressed="${SEM==1}">Semestre 1</button><button data-sem="2" aria-pressed="${SEM==2}">Semestre 2</button></div>
<div data-semp="${SEM}" style="display:flex;flex-direction:column;gap:12px">${cours}</div>
<div data-semp="${SEM==1?2:1}" hidden><article class="card sup-v"><b style="font:800 16px var(--h)">Semestre ${SEM==1?2:1}</b><p class="mu" style="margin:4px 0 0;font-size:13px">Les ${id=='sup1'?'supports de cours':'séries de TD'} de ce semestre apparaîtront ici.</p></article></div>
</div>${nav?nav.outerHTML:''}</div>`;
 app.appendChild(sec)};
page('sup1','Supports de cours','#0E7C8C','#0B3F4A','Les supports numériques déposés par vos enseignants, cours par cours.',[['[Chapitre 1] · Cours','PDF · [Taille]'],['[Chapitre 2] · Cours','PDF · [Taille]'],['[Diaporama]','PPT · [Taille]']]);
page('sup2','Travaux dirigés','#C26A00','#6B3700','Les séries de TD et leurs corrigés, publiés par les responsables de TD.',[['[Série de TD n°1]','PDF · [Taille]'],['[Série de TD n°2]','PDF · [Taille]'],['[Corrigé]','PDF · [Taille]']]);
document.addEventListener('click',e=>{const b=e.target.closest('[data-semseg] button');if(!b)return;const sc=b.closest('.sc');
 sc.querySelectorAll('[data-semseg] button').forEach(x=>x.setAttribute('aria-pressed',x===b));
 sc.querySelectorAll('[data-semp]').forEach(p=>{p.hidden=p.dataset.semp!==b.dataset.sem});
 const ch=sc.querySelector('[data-semch]');if(ch)ch.textContent='Semestre '+b.dataset.sem});
})();
}catch(e){console.error("[ujlog] v55-campus-blocs-js",e)}
/* ==== v59-campus-raccourcis-js ==== */
try{
(()=>{
const g=document.getElementById('mcb');if(!g||document.getElementById('mcqa'))return;
const W='#fff',P=(c)=>`stroke="var(--c)" stroke-width="1.5" stroke-linecap="round" fill="none"`;
const SV={
'Emploi du temps':`<rect x="5" y="7" width="22" height="20" rx="4" fill="#fff"/><path d="M5 11a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v3H5z" fill="#0B3D1F" fill-opacity=".8"/><rect x="10" y="4" width="3" height="6" rx="1.5" fill="#fff"/><rect x="19" y="4" width="3" height="6" rx="1.5" fill="#fff"/><g fill="var(--c)"><circle cx="11" cy="19" r="1.6"/><circle cx="16" cy="19" r="1.6"/><circle cx="21" cy="19" r="1.6"/><circle cx="11" cy="23.2" r="1.6"/><circle cx="16" cy="23.2" r="1.6"/></g><rect x="19" y="21.2" width="4.4" height="4" rx="1.4" fill="#F59E0B"/>`,
'Supports de cours':`<path d="M16 9c-3-2-7-2.6-11-2v17c4-.6 8 0 11 2z" fill="#fff"/><path d="M16 9c3-2 7-2.6 11-2v17c-4-.6-8 0-11 2z" fill="#fff" fill-opacity=".9"/><path d="M16 9v17" stroke="var(--c)" stroke-width="1.3"/><path d="M8 12.3c2-.2 4 0 6 .8M8 16.3c2-.2 4 0 6 .8M18 13.1c2-.8 4-1 6-.8M18 17.1c2-.8 4-1 6-.8" ${P()}/><path d="M5 25c4-.6 8 0 11 2 3-2 7-2.6 11-2" stroke="#fff" stroke-opacity=".55" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
'Travaux dirigés':`<rect x="5" y="4" width="17" height="23" rx="3" fill="#fff"/><path d="M9 10h9M9 14.5h9M9 19h5" ${P()}/><g transform="rotate(38 23 20)"><rect x="20.6" y="8" width="5" height="15" rx="1" fill="#FCD34D"/><rect x="20.6" y="8" width="5" height="3.6" rx="1" fill="#F87171"/><path d="M20.6 23h5l-2.5 5z" fill="#FDE6C4"/><path d="M22 26.2h2L23 28z" fill="#374151"/></g>`,
'Anciens sujets':`<path d="M8 3h11l6 6v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="#fff"/><path d="M19 3v6h6z" fill="var(--c)" fill-opacity=".4"/><path d="M10 12h6M10 15.5h10" ${P()}/><rect x="8.5" y="19" width="15" height="7" rx="2" fill="#DC2626"/><text x="16" y="24.4" font-size="5.4" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial,sans-serif">PDF</text>`,
'Perdu / trouvé':`<circle cx="13.5" cy="13.5" r="8.5" fill="#fff" fill-opacity=".28" stroke="#fff" stroke-width="3"/><path d="M20 20l7.5 7.5" stroke="#fff" stroke-width="4.2" stroke-linecap="round"/><path d="M8.6 11a5.6 5.6 0 0 1 4-3.1" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="13.5" cy="14" r="1.2" fill="#fff"/><path d="M13.5 12.4v-.4a1.6 1.6 0 1 1 1.6 1.6" stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none"/>`};
const row=document.createElement('div');row.className='mc-qa';row.id='mcqa';row.setAttribute('role','group');row.setAttribute('aria-label','Accès rapides');
[...g.querySelectorAll('.m28-qb')].forEach(b=>{
 const t=b.querySelector('.m28-tx b'),ic=b.querySelector('.m24-ic svg');if(!t||!ic)return;
 const q=document.createElement('button');q.type='button';q.style.setProperty('--c',b.style.getPropertyValue('--c'));
 if(b.dataset.go)q.dataset.go=b.dataset.go;else if(b.dataset.soon)q.dataset.soon=b.dataset.soon;
 q.setAttribute('aria-label',t.textContent.trim());q.title=t.textContent.trim();const sv=SV[t.textContent.trim()],art=sv?`<svg viewBox="0 0 32 32" aria-hidden="true">${sv}</svg>`:ic.outerHTML;q.innerHTML=art;const box=b.querySelector('.m24-ic');if(sv&&box)box.innerHTML=art;row.appendChild(q)});
g.parentNode.insertBefore(row,g);
})();
}catch(e){console.error("[ujlog] v59-campus-raccourcis-js",e)}
/* ==== v71-supports-js ==== */
try{
(()=>{
const U=window.UJLG;if(!U)return;
const ic=(n,s)=>`<svg class="i" aria-hidden="true" style="width:${s}px;height:${s}px"><use href="#${n}"/></svg>`;
const sh=document.createElement('div');sh.id='sp8sh';sh.className='ed3-sh';sh.setAttribute('role','dialog');sh.setAttribute('aria-modal','true');sh.setAttribute('aria-label','Détail des supports');document.body.appendChild(sh);
const D={};
const X=(td,t)=>[0,0,td?'TD':'CM',t];
const close=()=>sh.classList.remove('on');
const open=k=>{const [id,i]=k.split(','),x=D[id][+i],td=id=='sup2',col=U.kc(X(td,x.t)),ik=U.si(X(td,x.t)),sm=document.querySelector('#'+id+' [data-semch]'),sem=sm?sm.textContent:'';
 sh.innerHTML=`<div class="ed3-b" data-spx></div><div class="ed3-p cs8" style="--k:${col}"><div class="cs8-top"><i class="cs8-gr"></i><button class="cs8-x" data-spx aria-label="Retour">${ic('chv',18)}<span>Retour</span></button><div class="cs8-hd">${U.lg(ik)}<div><span class="cs8-tg">${td?'Travaux dirigés':'Supports de cours'} · ${sem}</span><h3>${x.t}</h3></div></div></div><div class="cs8-bd"><div class="cs8-r"><span class="cs8-ri">${ic('usr',18)}</span><div><small>Enseignant</small><b>${x.p}</b></div></div><small class="sp8-lb">${td?'Séries et corrigés':'Fichiers du cours'} · ${x.f.length}</small><div class="sp8-f">${x.f.map(f=>`<div class="sp8-r"><span class="sp8-ri">${ic('doc',20)}</span><div><b>${f[0]}</b><small>${f[1]}</small></div><button class="sp8-dl" aria-label="Télécharger ${f[0]}">${ic('dl',18)}</button></div>`).join('')}</div></div></div>`;
 void sh.offsetWidth;sh.classList.add('on')};
const build=id=>{const sec=document.getElementById(id),sc=sec&&sec.querySelector('.sc'),hero=sc&&sc.querySelector('.sup-h');if(!hero)return;
 const td=id=='sup2',c=(sec.style.getPropertyValue('--c')||'#0E7C8C').trim(),ttl=hero.querySelector('h2').textContent,sous=hero.querySelector('p').textContent,niv=hero.querySelector('em').textContent,sem=hero.querySelector('[data-semch]').textContent;
 const box=sc.querySelector('[data-semp]');
 const cards=[...box.querySelectorAll('article.sup-c')].map(a=>({t:a.querySelector('.fl b').textContent,p:a.querySelector('.fl span').textContent,f:[...a.querySelectorAll('.li')].map(l=>[l.querySelector('.fl b').textContent,l.querySelector('.fl span').textContent])}));
 D[id]=cards;const nf=cards.reduce((a,x)=>a+x.f.length,0);
 hero.outerHTML=`<section class="sp8-h" style="--k:${c}"><div class="sp8-ht">${U.lg(td?'pen':'bkm')}<div><em>${niv}</em><h2>${ttl}</h2></div></div><p>${sous}</p><div class="sp8-st"><div><b>${cards.length}</b><span>Cours</span></div><div><b>${nf}</b><span>Fichiers</span></div><div><b data-semch>${sem}</b><span>En cours</span></div></div></section>`;
 box.innerHTML=`<div class="sp8-l">${cards.map((x,i)=>{const col=U.kc(X(td,x.t));return `<button class="sp8-c" style="--k:${col}" data-sp="${id},${i}" aria-label="${x.t}, ${x.f.length} fichiers"><span class="sp8-im">${U.lg(U.si(X(td,x.t)))}<small>${x.f.length} fichiers</small></span><span class="sp8-mm"><span class="sp8-tg">${td?'TD et corrigés':'Cours'}</span><b>${x.t}</b><small>${x.p}</small></span>${ic('chv',18)}</button>`}).join('')}</div>`};
build('sup1');build('sup2');
document.addEventListener('click',e=>{const b=e.target.closest('[data-sp]');if(b){open(b.dataset.sp);return}if(e.target.closest('[data-spx]'))close()});
document.addEventListener('keydown',e=>{if(e.key=='Escape')close()});
})()
}catch(e){console.error("[ujlog] v71-supports-js",e)}
/* ==== v72-cours-geste ==== */
try{

(function(){
 var p=null,y0=0,dy=0,on=false;
 function close(el){var b=el.querySelector('[data-edx],[data-spx],[data-lfc]');if(b)b.click()}
 document.addEventListener('touchstart',function(e){var t=e.target.closest&&e.target.closest('.cs8-top');if(!t||e.target.closest('button'))return;p=t.closest('.ed3-p');if(!p)return;y0=e.touches[0].clientY;dy=0;on=true;p.classList.add('drag')},{passive:true});
 document.addEventListener('touchmove',function(e){if(!on)return;dy=Math.max(0,e.touches[0].clientY-y0);p.style.transform='translate(-50%,'+dy+'px)'},{passive:true});
 function end(){if(!on)return;on=false;var el=p;el.classList.remove('drag');el.style.transform='';if(dy>90)close(el.parentNode);p=null;dy=0}
 document.addEventListener('touchend',end);document.addEventListener('touchcancel',end);
 document.addEventListener('keydown',function(e){if(e.key!=='Escape')return;var sh=document.querySelector('.ed3-sh.on');if(sh)close(sh)});
})();

}catch(e){console.error("[ujlog] v72-cours-geste",e)}
/* ==== v76-perdu-trouve-js ==== */
try{

(()=>{
const app=document.getElementById('app');if(!app)return;
const C='#5B3FB3';
const ic=(n,s)=>`<svg class="i" aria-hidden="true" style="width:${s}px;height:${s}px"><use href="#${n}"/></svg>`;
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const say=m=>{if(typeof toast=='function')toast(m)};
const KEY='ujlog_lf_v1';
const CAT=[['Papiers & cartes','card'],['Électronique','phone'],['Clés','key'],['Sacs','backpack'],['Vêtements','shirt'],['Autre','box']];
const G={
 card:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M6.2 16c.5-1.6 1.6-2.3 2.8-2.3s2.3.7 2.8 2.3M14 10h4M14 13.5h3"/>',
 wallet:'<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="3.5" y="8" width="17" height="12" rx="2.5"/><circle cx="16.5" cy="14" r="1.2"/>',
 usb:'<rect x="9" y="2.5" width="6" height="6" rx="1"/><path d="M10.8 5h.01M13.2 5h.01"/><rect x="7" y="8.5" width="10" height="13" rx="2.5"/><circle cx="12" cy="16" r="1.4"/>',
 phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
 calc:'<rect x="5" y="2.5" width="14" height="19" rx="2.5"/><rect x="8" y="5.5" width="8" height="3.5" rx=".8"/><path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01" stroke-width="2.4"/>',
 laptop:'<rect x="4.5" y="5" width="15" height="10.5" rx="1.8"/><path d="M2.5 19h19"/>',
 key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16.5 6.5l2.5 2.5M14 9l2 2"/>',
 backpack:'<path d="M9 5a3 3 0 0 1 6 0"/><path d="M6.5 8.5A2.5 2.5 0 0 1 9 6h6a2.5 2.5 0 0 1 2.5 2.5V19a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 19z"/><path d="M9.5 14h5v3.5h-5zM6.5 11h11"/>',
 shirt:'<path d="M8.5 3.5L3 7l2.5 3.5L8 9v11.5h8V9l2.5 1.5L21 7l-5.5-3.5a3.5 3.5 0 0 1-7 0z"/>',
 glasses:'<circle cx="6.5" cy="14" r="3.5"/><circle cx="17.5" cy="14" r="3.5"/><path d="M10 14h4M3 14L4.5 7M21 14l-1.5-7"/>',
 book:'<path d="M4.5 4.5A2 2 0 0 1 6.5 3H19v15.5H6.5a2 2 0 0 0-2 2z"/><path d="M4.5 20.5A2 2 0 0 0 6.5 22H19v-3.5M9 7.5h6"/>',
 bottle:'<path d="M10 2.5h4M10.5 2.5v3L9 8.5v11A2 2 0 0 0 11 21.5h2a2 2 0 0 0 2-2v-11l-1.5-3v-3M9 13h6"/>',
 box:'<path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/>',
 plus:'<path d="M12 5v14M5 12h14"/>'};
const gl=(k,s)=>`<svg class="lf-gl" viewBox="0 0 24 24" aria-hidden="true" style="width:${s}px;height:${s}px" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${G[k]||G.box}</svg>`;
const COL={'Papiers & cartes':'#2563EB','Électronique':'#0E7490','Clés':'#D97706','Sacs':'#16A34A','Vêtements':'#DB2777','Autre':'#64748B'};
const catIc=n=>(CAT.find(c=>c[0]==n)||CAT[5])[1];
const nz=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const KW=[[/usb|flash/,'usb','Électronique'],[/telephone|portable|iphone|samsung|tecno|infinix|smartphone|phone/,'phone','Électronique'],[/calculatrice|casio/,'calc','Électronique'],[/ordinateur|laptop|\bpc\b|macbook|tablette/,'laptop','Électronique'],[/portefeuille|porte-monnaie|porte monnaie/,'wallet','Papiers & cartes'],[/carte|\bcni\b|passeport|permis|document|papier|attestation/,'card','Papiers & cartes'],[/trousseau|\bcles?\b|porte-cles?/,'key','Clés'],[/\bsac|cartable|sacoche/,'backpack','Sacs'],[/veste|pull|t-shirt|tee-shirt|chemise|robe|pantalon|casquette|\bjean|manteau|pagne/,'shirt','Vêtements'],[/lunette/,'glasses','Autre'],[/livre|cahier|classeur|bouquin|agenda/,'book','Autre'],[/bouteille|gourde|thermos/,'bottle','Autre']];
const guess=t=>{const s=nz(t);for(const [r,g,c] of KW)if(r.test(s))return {g,c};return null};
const gk=o=>(guess(o.n)||{}).g||catIc(o.c);
const kc=o=>COL[o.c]||COL['Autre'];
/* Pièces d'identité : on n'affiche que nom, prénoms, niveau, UFR et photo d'identité */
const IDU=['Agroforesterie','Environnement','Sciences économiques et de gestion','Sciences juridiques','Sciences sociales et humaines'];
const IDN=['Licence 1','Licence 2','Licence 3','Master 1','Master 2','Doctorat'];
const nm=o=>o.idc&&o.idc.nom?(o.idc.nom.toUpperCase()+' '+(o.idc.pre||'')).trim():o.n;
const idl=o=>o.idc?[o.idc.niv,o.idc.ufr].filter(Boolean).join(' · '):'';
const pic=o=>(o.idc&&(o.idc.card||o.idc.pic))||o.ph||'';
const pim=o=>`<img src="${pic(o)}" alt=""${o.idc&&o.idc.card?' class="lf-ci"':''}>`;
const th=o=>`<span class="lf-th" style="--k:${kc(o)}">${pic(o)?pim(o):gl(gk(o),34)}</span>`;
const idCard=o=>o.idc.card?`<div class="lf-idw"><img class="lf-cardimg" src="${o.idc.card}" alt="Carte avec informations masquées"></div>`:`<div class="lf-idw"><div class="lf-idc"><span class="lf-idp">${pic(o)?`<img src="${pic(o)}" alt="Photo d’identité">`:gl('card',40)}</span><div class="lf-idi"><small>NOM ET PRÉNOMS</small><b>${esc(nm(o))}</b>${o.idc.niv?`<small>NIVEAU</small><b>${esc(o.idc.niv)}</b>`:''}${o.idc.ufr?`<small>UFR</small><b>${esc(o.idc.ufr)}</b>`:''}</div></div></div>`;
const shareTx=o=>{const T=o.t=='T';if(o.idc)return (T?'📢 PIÈCE TROUVÉE':'📢 AVIS DE PERTE')+'\n'+o.n+' · '+nm(o)+(idl(o)?'\n'+idl(o):'')+'\n'+(T?'Trouvée':'Perdue')+' : '+o.l+' ('+dl(o.d)+')\n'+(T&&o.w?'Où la récupérer : '+o.w+'\n':'')+'Via My UJLoG';return (T?'Objet trouvé : ':'Objet perdu : ')+o.n+' · '+o.l+' ('+dl(o.d)+') — via My UJLoG'};
const LIEUX=['Amphi A','Amphi B','Amphi C','Bibliothèque','Restaurant U','Cité universitaire','Scolarité','Cour centrale'];
const DEP=['Je le garde sur moi','Déposé à la scolarité','Déposé au poste de sécurité'];
const MOIS=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
const pad=n=>String(n).padStart(2,'0');
const iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const ago=k=>{const d=new Date();d.setDate(d.getDate()-k);return iso(d)};
const today=iso(new Date());
const dd=s=>Math.round((new Date(today+'T00:00:00')-new Date(s+'T00:00:00'))/864e5);
const dl=s=>{const a=new Date(s+'T00:00:00'),b=new Date(today+'T00:00:00'),k=Math.round((b-a)/864e5);return k<=0?'Aujourd’hui':k==1?'Hier':k<7?'Il y a '+k+' j':a.getDate()+' '+MOIS[a.getMonth()]};
/* Données d'exemple : à brancher plus tard sur la base (Supabase) */
const seed=()=>[];
let items;
try{items=JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){items=null}
if(!Array.isArray(items))items=seed();
items=items.filter(o=>!(o&&o.idc&&o.idc.nom=='Gosse'));
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(items))}catch(_){}};
const st={f:'all',q:'',c:''};
const byId=id=>items.find(o=>o.id==id);
const stTxt=o=>o.s=='claim'?(o.t=='T'?'Demande envoyée':'Propriétaire prévenu'):o.s=='done'?(o.t=='T'?'Restitué':'Retrouvé'):'';
const pill=o=>o.s=='claim'?`<span class="lf-st">${stTxt(o)}</span>`:o.s=='done'?`<span class="lf-st ok">${stTxt(o)}</span>`:o.my=='report'?'<span class="lf-st me">Mon signalement</span>':'';
const nav=document.querySelector('#a2 nav.nav'),bg=document.querySelector('#a2 .bgc');
const sec=document.createElement('section');sec.className='bd';sec.id='lf1';
sec.innerHTML=`<h2>Perdu / trouvé</h2><div class="ph"><div class="sc">${bg?bg.outerHTML:''}
<div class="row"><button class="ib" data-go="a2" aria-label="Retour à Mon campus" style="transform:scaleX(-1)">${ic('chv',22)}</button><h1 class="t fl" style="font-size:24px">Perdu / trouvé</h1></div>
<section class="lf-h"><div class="lf-tkw" data-lftk></div><div class="lf-sts"><div><b data-lfn="T">0</b><span>à récupérer</span></div><div><b data-lfn="P">0</b><span>recherchés</span></div><button data-lff="arch" aria-label="Voir les archives : objets restitués"><b data-lfn="D">0</b><span>restitués · archives</span></button></div></section>
<div class="lf-bar"><label class="lf-s">${ic('se',18)}<input type="search" data-lfq placeholder="Rechercher…" aria-label="Rechercher un objet" autocomplete="off"></label><button class="lf-cta2" data-lfnew>${ic('plus',16)}Signaler</button></div>
<div class="seg" role="group" aria-label="Filtrer"><button data-lff="all" aria-pressed="true">Tous</button><button data-lff="T" aria-pressed="false">Trouvés</button><button data-lff="P" aria-pressed="false">Perdus</button><button data-lff="me" aria-pressed="false">Mes objets</button></div>
<div class="lf-list" data-lflist aria-live="polite"></div>

</div>${nav?nav.outerHTML:''}</div>`;
app.appendChild(sec);
const L=sec.querySelector('[data-lflist]');
const rows=()=>{const q=st.q.trim().toLowerCase();return items.filter(o=>(st.f=='arch'?o.s=='done':st.f=='me'?!!o.my:o.s!='done'&&(st.f=='all'||o.t==st.f))&&(!st.c||o.c==st.c)&&(!q||[o.n,o.l,o.c,o.x,nm(o),idl(o)].join(' ').toLowerCase().includes(q))).sort((a,b)=>(a.d<b.d?1:a.d>b.d?-1:0))};
/* Bandeau « Perdu » : point rouge + objet recherché, change toutes les 10 s */
const tkEl=sec.querySelector('[data-lftk]');let tkI=0,tkSig='',tkT=null;
const tkList=()=>items.filter(o=>o.t=='P'&&o.s=='open').sort((a,b)=>(a.d<b.d?1:a.d>b.d?-1:0));
const tkDraw=(anim)=>{if(!tkEl)return;const l=tkList();
 if(!l.length){tkEl.innerHTML='<div class="lf-tk off"><span class="lf-dot off"></span><span class="lf-tkt"><small>Aucune recherche en cours</small><b>Tout a été retrouvé</b></span></div>';return}
 const o=l[tkI%l.length];
 tkEl.innerHTML=`<button class="lf-tk${anim?' in':''}" data-lfo="${o.id}" aria-label="Objet perdu : ${esc(o.n)}, ${esc(o.l)}"><span class="lf-dot" aria-hidden="true"></span>${th(o)}<span class="lf-tkt"><small>PERDU · ${esc(dl(o.d))}</small><b>${esc(nm(o))}</b><small>${esc(o.idc?o.n+' · '+o.l:o.l)}</small></span>${l.length>1?`<span class="lf-tkn" aria-hidden="true">${(tkI%l.length)+1}/${l.length}</span>`:''}</button>`};
const tkSet=()=>{const l=tkList(),sig=l.map(o=>o.id).join(',');if(sig!=tkSig){tkSig=sig;tkI=0}tkDraw(false)};
if(!tkT)tkT=setInterval(()=>{if(!sec.offsetParent||document.hidden)return;const l=tkList();if(l.length<2)return;tkI=(tkI+1)%l.length;tkDraw(true)},10000);
const render=()=>{
 const r=rows();
 const card=o=>`<button class="lf-card" data-lfo="${o.id}" aria-label="${o.t=='T'?'Trouvé':'Perdu'} : ${esc(o.n)}, ${esc(o.l)}">${th(o)}<span class="lf-mm"><span class="lf-tgs"><span class="lf-tg${o.t=='P'?' pe':''}">${o.t=='T'?'Trouvé':'Perdu'}</span>${pill(o)}</span><b>${esc(nm(o))}</b><small>${ic('pin',13)}${esc(o.l)} · ${dl(o.d)}</small></span>${ic('chv',18)}</button>`;
 L.innerHTML=(st.f=='arch'?'<p class="lf-arch">Archives · objets rendus à leur propriétaire</p>':'')+(r.length?r.map(card).join(''):`<div class="lf-empty">${ic('se',28)}<b>${st.f=='arch'?'Aucun objet archivé':'Aucun objet ne correspond'}</b><span>${st.f=='arch'?'Les objets rendus à leur propriétaire arrivent ici.':'Essayez un autre mot, ou signalez l’objet vous-même.'}</span>${st.q.trim()?`<button class="lf-pri" style="--k:#5B3FB3;margin-top:6px" data-lfnew data-lfpre="${esc(st.q.trim())}">Signaler « ${esc(st.q.trim())} » comme perdu</button>`:''}</div>`);
 ['T','P'].forEach(k=>{const e=sec.querySelector('[data-lfn="'+k+'"]');if(e)e.textContent=items.filter(o=>o.t==k&&o.s=='open').length});
 const dn=sec.querySelector('[data-lfn="D"]');if(dn)dn.textContent=items.filter(o=>o.s=='done').length;
 sec.querySelectorAll('[data-lff]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lff==st.f));
 sec.querySelectorAll('[data-lfc2]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lfc2==st.c));
 tkSet();mcDraw();window.UJEV&&UJEV.syncLF(items,{nm,dl,pic})};
render();
/* ---------- feuille ---------- */
let sh=null,V={v:null,id:null,t:'T',cat:'Autre',ph:'',dep:DEP[1],man:false};
const shEl=()=>{if(sh)return sh;sh=document.createElement('div');sh.id='lfsh';sh.className='ed3-sh lf-sh';sh.setAttribute('role','dialog');sh.setAttribute('aria-modal','true');sh.setAttribute('aria-label','Objet perdu ou trouvé');document.body.appendChild(sh);return sh};
const head=(tg,titre,icon,col)=>`<div class="ed3-b" data-lfc></div><div class="ed3-p cs8 lf-p" style="--k:${C}"><div class="cs8-top"><i class="cs8-gr"></i><button class="cs8-x" data-lfx aria-label="Retour">${ic('chv',18)}<span>Retour</span></button><div class="cs8-hd"><span class="lf-ico" data-lfhi style="--ik:${col||C}">${icon}</span><div><span class="cs8-tg">${tg}</span><h3>${titre}</h3></div></div></div>`;
const row=(i,l,v)=>`<div class="cs8-r"><span class="cs8-ri">${ic(i,18)}</span><div><small>${l}</small><b>${v}</b></div></div>`;
const STOP=['des','les','une','avec','pour','dans','sur','aux','par'];
const tok=s=>nz(s).split(/[^a-z0-9]+/).filter(w=>w.length>2&&!STOP.includes(w));
const matches=o=>{const a=new Set(tok(o.n+' '+(o.x||'')+' '+nm(o)));return items.filter(x=>x!=o&&x.t!=o.t&&x.s=='open').map(x=>({x,s:(x.c==o.c?2:0)+tok(x.n+' '+(x.x||'')+' '+nm(x)).filter(w=>a.has(w)).length*3+(x.l==o.l?1:0)})).filter(m=>m.s>=3&&(!(o.idc&&m.x.idc)||nz(o.idc.nom)==nz(m.x.idc.nom))).sort((p,q)=>q.s-p.s).slice(0,3).map(m=>m.x)};
const matchBlock=o=>{if(o.s!='open')return '';const m=matches(o);return m.length?`<div class="lf-mt"><span class="lf-lb">${o.t=='T'?'Quelqu’un le cherche peut-être':'Objets trouvés qui pourraient correspondre'}</span>${m.map(x=>`<button class="lf-mc" data-lfo="${x.id}">${th(x)}<span class="fl"><b>${esc(nm(x))}</b><small>${esc(x.l)} · ${dl(x.d)}</small></span>${ic('chv',16)}</button>`).join('')}</div>`:''};
const objView=o=>{
 const T=o.t=='T',mine=o.my=='report';
 const pr=o.s=='open'&&!o.my?`<button class="lf-pri" data-lfclaim>${ic(T?'chk':'hrt',18)}${T?'C’est à moi':'Je l’ai trouvé'}</button>`
  :o.s=='claim'&&o.my=='claim'?`<button class="lf-pri" disabled>${ic('chk',18)}${stTxt(o)}</button><button class="lf-sec" data-lfcancel>Annuler ma demande</button>`
  :mine&&o.s!='done'?`<button class="lf-pri" data-lfdone>${ic('chk',18)}Marquer comme ${T?'restitué':'retrouvé'}</button>`:'';
 const note=o.s=='done'?`Cet objet est marqué comme ${T?'restitué':'retrouvé'}.`:o.s=='claim'&&o.my=='claim'?(T?'Vous serez contacté pour récupérer l’objet.':'Le propriétaire a reçu votre message.'):T?(o.idc?'Pour la récupérer, présentez une autre pièce d’identité à l’endroit indiqué.':'Pour récupérer l’objet, présentez-vous avec votre carte d’étudiant.'):'Le propriétaire est prévenu dans l’application. Votre numéro ne lui est transmis que si vous le renseignez.';
 return head(`${T?'Trouvé':'Perdu'} · ${esc(o.c)}`,esc(nm(o)),pic(o)?pim(o):gl(gk(o),32),kc(o))+
 `<div class="cs8-bd">${o.idc?idCard(o):o.ph?`<img class="lf-big" src="${o.ph}" alt="Photo de l’objet">`:''}<div class="cs8-l">${o.s!='open'?row('shd','Statut',`<span class="lf-pill${o.s=='claim'?' w':o.s=='done'?' ok':''}">${stTxt(o)}</span>`):''}${row('pin',T?'Trouvé':'Perdu',esc(o.l)+' · '+dl(o.d))}${o.x?row('doc','Description',esc(o.x)):''}${T&&o.w?row('bld','Où le récupérer',esc(o.w)):''}</div>
 ${matchBlock(o)}<p class="cs8-n">${note}</p><div class="lf-acts">${pr}<button class="lf-sec wa" data-lfwa>${ic('cht',18)}Partager sur WhatsApp</button>${mine&&o.s!='done'?`<button class="lf-sec" data-lfedit>${ic('pen',18)}Modifier mon signalement</button>`:''}${mine?`<button class="lf-sec dg" data-lfdel>Supprimer mon signalement</button>`:''}</div></div></div>`};
const claimView=o=>{
 const T=o.t=='T';
 return head(T?'Demande de restitution':'Vous avez trouvé cet objet',esc(o.n),gl(gk(o),32),kc(o))+
 `<div class="cs8-bd"><div class="lf-fm">${T?`<div><label class="lf-lb" for="lf-m">Un détail que seul le propriétaire connaît</label><textarea class="lf-in" id="lf-m" data-f="m" placeholder="Contenu, marque, rayure, fond d’écran…"></textarea><p class="lf-hint">Cela permet de vérifier que l’objet est bien à vous.</p></div>`
 :`<div><label class="lf-lb" for="lf-m">Où et quand l’avez-vous trouvé ?</label><textarea class="lf-in" id="lf-m" data-f="m" placeholder="Ex. : hier à 15 h, près de l’entrée du Restaurant U"></textarea></div>
 <div><span class="lf-lb">Où est l’objet ?</span><div class="lf-cc" data-lfdep>${DEP.map((d,i)=>`<button data-lfd="${i}" aria-pressed="${i==1}">${d}</button>`).join('')}</div></div>`}
 <div><label class="lf-lb" for="lf-p">Téléphone${T?'':' (facultatif)'}</label><input class="lf-in" id="lf-p" data-f="p" type="tel" inputmode="tel" autocomplete="tel" placeholder="+225 00 00 00 00 00"><p class="lf-hint">${T?'Utilisé uniquement pour vous joindre au sujet de cet objet.':'Transmis uniquement au propriétaire de l’objet.'}</p></div>
 <button class="lf-pri" data-lfsend>${ic('chk',18)}${T?'Envoyer ma demande':'Prévenir le propriétaire'}</button></div></div></div>`};
const newView=e=>head(e?'Modification':'Nouveau signalement',e?'Modifier mon signalement':'Signaler un objet',e?gl(gk(e),30):gl('plus',30),e?kc(e):0)+
 `<div class="cs8-bd"><div class="lf-fm">
 <div class="lf-tt" role="group" aria-label="Type de signalement"><button data-lft="T" aria-pressed="${!e||e.t=='T'}">J’ai trouvé un objet<small>Aider son propriétaire</small></button><button data-lft="P" aria-pressed="${!!e&&e.t=='P'}">J’ai perdu un objet<small>Le faire retrouver</small></button></div>
 <div><label class="lf-lb" for="lf-n">Objet</label><input class="lf-in" id="lf-n" data-f="n" maxlength="60" placeholder="Ex. : Clé USB noire" autocomplete="off" value="${esc(e&&e.n)}"></div>
 <div><span class="lf-lb">Catégorie</span><div class="lf-cc" data-lfcat>${CAT.map(([n,i])=>`<button data-lfk="${esc(n)}" aria-pressed="${n==(e?e.c:'Autre')}"><span class="lf-cg" style="--ck:${COL[n]}">${gl(i,14)}</span>${esc(n)}</button>`).join('')}</div></div>
 <div class="lf-idb" data-lfidb ${(e?e.c:'Autre')=='Papiers & cartes'?'':'hidden'}>
 <button class="lf-idt" data-lfidt aria-pressed="${V.idon!==false}">${ic('shd',20)}<span class="fl"><b>Protéger l’identité</b><small>On cache les informations personnelles de la carte</small></span></button>
 <div class="lf-idf" data-lfidf ${V.idon===false?'hidden':''}>
  <div class="lf-row2"><div><label class="lf-lb" for="lf-in">Nom</label><input class="lf-in" id="lf-in" data-f="inom" maxlength="40" autocomplete="off" placeholder="Ex. : Kouassi" value="${esc(IV().nom)}"></div><div><label class="lf-lb" for="lf-ip">Prénoms</label><input class="lf-in" id="lf-ip" data-f="ipre" maxlength="60" autocomplete="off" placeholder="Ex. : Awa Marie" value="${esc(IV().pre)}"></div></div>
  <div><span class="lf-lb">UFR (facultatif)</span><div class="lf-cc" data-lfiu>${IDU.map(u=>`<button data-lfu="${esc(u)}" aria-pressed="${IV().ufr==u}">${esc(u)}</button>`).join('')}</div></div>
  <div><span class="lf-lb">Niveau (facultatif)</span><div class="lf-cc" data-lfiv>${IDN.map(u=>`<button data-lfv="${esc(u)}" aria-pressed="${IV().niv==u}">${esc(u)}</button>`).join('')}</div></div>
  <div><span class="lf-lb">Photo de la carte (facultatif)</span><div data-lfip></div></div>
 </div>
</div>
 <div><label class="lf-lb" for="lf-l">Lieu</label><input class="lf-in" id="lf-l" data-f="l" list="lf-lieux" maxlength="60" placeholder="Où ? Ex. : Amphi B" autocomplete="off" value="${esc(e&&e.l)}"><datalist id="lf-lieux">${LIEUX.map(x=>`<option value="${x}">`).join('')}</datalist><div class="lf-cc lf-lc">${LIEUX.map(x=>`<button data-lfl="${x}" aria-pressed="false">${x}</button>`).join('')}</div></div>
 <div><label class="lf-lb" for="lf-d">Date</label><input class="lf-in" id="lf-d" data-f="d" type="date" value="${e?e.d:today}" max="${today}"></div>
 <div><label class="lf-lb" for="lf-x">Description (facultatif)</label><textarea class="lf-in" id="lf-x" data-f="x" maxlength="240" placeholder="Couleur, marque, signe particulier…">${esc(e&&e.x)}</textarea><p class="lf-hint" data-lfbt${e&&e.t=='P'?' hidden':''}>Gardez un détail pour vous : il servira à vérifier le propriétaire.</p></div>
 <div data-lfbt${e&&e.t=='P'?' hidden':''}><span class="lf-lb">Où est l’objet ?</span><div class="lf-cc" data-lfdep>${DEP.map((d,i)=>`<button data-lfd="${i}" aria-pressed="${d==((e&&e.w)||DEP[1])}">${d}</button>`).join('')}</div></div>
 <div data-lfbp${e&&e.t=='P'?'':' hidden'}><label class="lf-lb" for="lf-p">Téléphone</label><input class="lf-in" id="lf-p" data-f="p" type="tel" inputmode="tel" autocomplete="tel" placeholder="+225 00 00 00 00 00" value="${esc(e&&e.p)}"><p class="lf-hint">Jamais affiché : transmis seulement à la personne qui retrouve l’objet.</p></div>
 <div data-lfgp><span class="lf-lb">Photo (facultatif)</span><div data-lfpv></div></div>
 <p class="cs8-n">Votre signalement est visible par les étudiants de l’UJLoG. Si c’est une pièce d’identité, cachez les informations personnelles.</p>
 <button class="lf-pri" data-lfpub>${ic('chk',18)}${e?'Enregistrer les modifications':'Publier le signalement'}</button></div></div></div>`;
const phUI=()=>{const b=sh&&sh.querySelector('[data-lfpv]');if(!b)return;b.innerHTML=V.ph?`<div class="lf-pv"><img src="${V.ph}" alt="Aperçu de la photo"><button data-lfphx>Retirer</button></div>`:`<label class="lf-ph"><input type="file" accept="image/*" data-lffile hidden>${ic('cam',24)}<span><b>Ajouter une photo</b><small>Aide à reconnaître l’objet</small></span></label>`};
const draw=()=>{const e=shEl();const o=V.id&&byId(V.id);e.innerHTML=V.v=='new'?newView(V.edit&&byId(V.edit)):V.v=='claim'&&o?claimView(o):o?objView(o):newView();if(V.v=='new'||!o){phUI();idUI();idSync()}};
const openSh=(v,id)=>{V={v,id:id||null,t:'T',cat:'Autre',ph:'',dep:DEP[1],man:false,idon:true,idv:{}};CR.img=null;const e=shEl();draw();void e.offsetWidth;e.classList.add('on')};
const closeSh=()=>{if(sh)sh.classList.remove('on')};
const shrink=(f,cb)=>{const r=new FileReader();r.onerror=()=>cb('');r.onload=()=>{const im=new Image();im.onerror=()=>cb('');im.onload=()=>{try{const k=Math.min(1,640/Math.max(im.width,im.height)),cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);cb(cv.toDataURL('image/jpeg',.72))}catch(_){cb(r.result)}};im.src=r.result};r.readAsDataURL(f)};
const val=k=>{const e=sh.querySelector('[data-f="'+k+'"]');return e?e.value.trim():''};
const upIco=()=>{idSync();const hi=sh&&sh.querySelector('[data-lfhi]');if(!hi||V.v!='new')return;const g=guess(val('n'));hi.innerHTML=gl(g&&g.c==V.cat?g.g:catIc(V.cat),30);hi.style.setProperty('--ik',COL[V.cat])};
const bad=(k)=>{const e=sh.querySelector('[data-f="'+k+'"]');if(e){e.classList.add('bad');e.focus()}};
/* ---------- identité : la carte telle quelle, zones sensibles floutées en mosaïque ---------- */
const CR={img:null,rects:[],cur:null};
const IV=()=>V.idv||{};
const idOn=()=>V.cat=='Papiers & cartes'&&V.idon!==false;
const idApply=o=>{if(idOn()){o.idc={nom:val('inom'),pre:val('ipre'),ufr:IV().ufr||'',niv:IV().niv||'',card:IV().card||''};delete o.ph}else delete o.idc};
const idSync=()=>{if(!sh)return;const b=sh.querySelector('[data-lfidb]');if(!b)return;const g=sh.querySelector('[data-lfgp]'),f=sh.querySelector('[data-lfidf]'),t=sh.querySelector('[data-lfidt]');b.hidden=V.cat!='Papiers & cartes';if(f)f.hidden=V.idon===false;if(t)t.setAttribute('aria-pressed',V.idon!==false);if(g)g.hidden=idOn()};
const nrm=r=>({x:Math.min(r.x,r.x+r.w),y:Math.min(r.y,r.y+r.h),w:Math.abs(r.w),h:Math.abs(r.h)});
const mePaint=(cv,guide)=>{const c=cv.getContext('2d'),w=cv.width,h=cv.height,bk=Math.max(10,Math.round(w/42));c.imageSmoothingEnabled=true;c.drawImage(CR.img,0,0);
 const all=guide&&CR.cur?CR.rects.concat([CR.cur]):CR.rects;
 all.forEach(q=>{const r=nrm(q),x=Math.max(0,Math.round(r.x)),y=Math.max(0,Math.round(r.y)),rw=Math.min(w-x,Math.round(r.w)),rh=Math.min(h-y,Math.round(r.h));if(rw<2||rh<2)return;
  const tw=Math.max(1,Math.round(rw/bk)),thh=Math.max(1,Math.round(rh/bk)),t=document.createElement('canvas');t.width=tw;t.height=thh;t.getContext('2d').drawImage(CR.img,x,y,rw,rh,0,0,tw,thh);
  c.imageSmoothingEnabled=false;c.drawImage(t,0,0,tw,thh,x,y,rw,rh);c.imageSmoothingEnabled=true;
  if(guide){c.save();c.strokeStyle='#5B3FB3';c.lineWidth=Math.max(2,w/300);c.strokeRect(x,y,rw,rh);c.restore()}})};
const meCount=()=>{const e=sh&&sh.querySelector('[data-lfmn]');if(e){const n=CR.rects.length;e.textContent=n?n+(n>1?' zones cachées':' zone cachée'):'Aucune zone cachée pour l’instant'}};
/* Recadrage automatique : on repère la pièce (différente du fond) et on garde seulement elle */
const autoCrop=src=>{try{
 const W=src.width,H=src.height,g=160,gh=Math.max(8,Math.round(g*H/W)),t=document.createElement('canvas');t.width=g;t.height=gh;
 const c=t.getContext('2d',{willReadFrequently:true});c.drawImage(src,0,0,g,gh);const d=c.getImageData(0,0,g,gh).data;
 const px=(x,y)=>{const i=(y*g+x)*4;return [d[i],d[i+1],d[i+2]]};
 const rw=Math.max(2,Math.round(g*.04)),rh=Math.max(2,Math.round(gh*.04)),ring=[];
 for(let y=0;y<gh;y++)for(let x=0;x<g;x++)if(x<rw||x>=g-rw||y<rh||y>=gh-rh)ring.push(px(x,y));
 const med=k=>{const a=ring.map(q=>q[k]).sort((u,v)=>u-v);return a[a.length>>1]};
 const bg=[med(0),med(1),med(2)],dist=q=>Math.hypot(q[0]-bg[0],q[1]-bg[1],q[2]-bg[2]);
 const rd=ring.map(dist).sort((u,v)=>u-v),thr=Math.min(110,Math.max(45,rd[Math.floor(rd.length*.7)]*2+25));
 const m=new Uint8Array(g*gh);for(let y=0;y<gh;y++)for(let x=0;x<g;x++)m[y*g+x]=dist(px(x,y))>thr?1:0;
 const er=new Uint8Array(g*gh);for(let y=1;y<gh-1;y++)for(let x=1;x<g-1;x++){let k=1;for(let j=-1;j<=1&&k;j++)for(let i=-1;i<=1;i++)if(!m[(y+j)*g+x+i]){k=0;break}er[y*g+x]=k}
 const cc=new Array(g).fill(0),rc=new Array(gh).fill(0);for(let y=0;y<gh;y++)for(let x=0;x<g;x++)if(er[y*g+x]){cc[x]++;rc[y]++}
 const cm=Math.max(...cc),rm=Math.max(...rc);if(cm<gh*.2||rm<g*.2)return null;
 const x0=cc.findIndex(v=>v>=cm*.4),x1=g-1-[...cc].reverse().findIndex(v=>v>=cm*.4),y0=rc.findIndex(v=>v>=rm*.4),y1=gh-1-[...rc].reverse().findIndex(v=>v>=rm*.4);
 const bw=(x1-x0+1)/g,bh=(y1-y0+1)/gh;if(bw*bh>.97||bw*bh<.12||bw<.3||bh<.3)return null;
 const mg=.02,sx=W/g,sy=H/gh,X=Math.max(0,Math.floor((x0-g*mg)*sx)),Y=Math.max(0,Math.floor((y0-gh*mg)*sy)),X2=Math.min(W,Math.ceil((x1+1+g*mg)*sx)),Y2=Math.min(H,Math.ceil((y1+1+gh*mg)*sy));
 const o=document.createElement('canvas');o.width=X2-X;o.height=Y2-Y;o.getContext('2d').drawImage(src,X,Y,o.width,o.height,0,0,o.width,o.height);return o}catch(_){return null}};
const idUI=()=>{const b=sh&&sh.querySelector('[data-lfip]');if(!b)return;const I=IV();
 if(CR.img){b.innerHTML=`<div class="lf-cr"><p class="lf-hint" style="margin:0">Passez le doigt pour entourer ce qu’il faut cacher : la date et le lieu de naissance, le numéro.</p><canvas data-lfcv aria-label="Carte : dessinez les zones à masquer"></canvas><span class="lf-mzr" data-lfmn></span>${CR.ac?`<button class="lf-sec" data-lfcrre>${CR.auto?'Annuler le recadrage automatique':'Recadrer automatiquement'}</button>`:''}<div class="lf-row2"><button class="lf-sec" data-lfmundo>Annuler la dernière zone</button><button class="lf-sec dg" data-lfcrx>Abandonner</button></div><button class="lf-pri" data-lfcrok>${ic('chk',18)}Valider la carte</button></div>`;
  const cv=b.querySelector('[data-lfcv]');cv.width=CR.img.width;cv.height=CR.img.height;mePaint(cv,true);meCount();return}
 b.innerHTML=I.card?`<div class="lf-idv2"><img class="lf-cardimg" src="${I.card}" alt="Carte avec informations masquées"><div class="lf-row2"><button class="lf-sec" data-lfidchg>Changer</button><button class="lf-sec dg" data-lfidpx>Retirer</button></div></div>`:`<label class="lf-ph"><input type="file" accept="image/*" data-lfidfile hidden>${ic('cam',24)}<span><b>Ajouter la photo de la carte</b><small>Vous cacherez ensuite les infos personnelles</small></span></label>`};
document.addEventListener('click',e=>{
 if(!sh||!sh.contains(e.target))return;const t=s=>e.target.closest(s);let b;V.idv=V.idv||{};
 if(t('[data-lfidt]')){V.idon=V.idon===false;idSync();return}
 if(b=t('[data-lfu]')){const v=b.dataset.lfu;V.idv.ufr=V.idv.ufr==v?'':v;b.parentNode.querySelectorAll('[data-lfu]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.lfu==V.idv.ufr));return}
 if(b=t('[data-lfv]')){const v=b.dataset.lfv;V.idv.niv=V.idv.niv==v?'':v;b.parentNode.querySelectorAll('[data-lfv]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.lfv==V.idv.niv));return}
 if(t('[data-lfidpx]')||t('[data-lfidchg]')){V.idv.card='';idUI();return}
 if(t('[data-lfcrx]')){CR.img=null;CR.rects=[];idUI();return}
 if(t('[data-lfcrre]')){CR.auto=!CR.auto;CR.img=CR.auto?CR.ac:CR.orig;CR.rects=[];idUI();return}
 if(t('[data-lfmundo]')){CR.rects.pop();const cv=sh.querySelector('[data-lfcv]');if(cv){mePaint(cv,true);meCount()}return}
 if(t('[data-lfcrok]')){if(!CR.rects.length){say('Cachez au moins la date de naissance et le numéro');return}const cv=document.createElement('canvas');cv.width=CR.img.width;cv.height=CR.img.height;mePaint(cv,false);V.idv.card=cv.toDataURL('image/jpeg',.85);CR.img=null;CR.rects=[];idUI();return}
});
document.addEventListener('change',e=>{const f=e.target.closest&&e.target.closest('[data-lfidfile]');if(!f||!f.files||!f.files[0])return;const r=new FileReader();r.onerror=()=>say('Photo illisible, essayez-en une autre');r.onload=()=>{const im=new Image();im.onerror=()=>say('Photo illisible, essayez-en une autre');im.onload=()=>{const k=Math.min(1,1000/Math.max(im.width,im.height)),cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);const ac=autoCrop(cv);CR.orig=cv;CR.ac=ac;CR.auto=!!ac;CR.img=ac||cv;CR.rects=[];CR.cur=null;idUI();if(ac)say('Carte recadrée automatiquement')};im.src=r.result};r.readAsDataURL(f.files[0])});
const mePt=(e,cv)=>{const r=cv.getBoundingClientRect();return {x:(e.clientX-r.left)*cv.width/r.width,y:(e.clientY-r.top)*cv.height/r.height}};
document.addEventListener('pointerdown',e=>{const cv=e.target.closest&&e.target.closest('[data-lfcv]');if(!cv||!CR.img)return;const p=mePt(e,cv);CR.cur={x:p.x,y:p.y,w:0,h:0};try{cv.setPointerCapture(e.pointerId)}catch(_){}e.preventDefault()});
document.addEventListener('pointermove',e=>{if(!CR.cur||!CR.img)return;const cv=sh&&sh.querySelector('[data-lfcv]');if(!cv)return;const p=mePt(e,cv);CR.cur.w=p.x-CR.cur.x;CR.cur.h=p.y-CR.cur.y;mePaint(cv,true)});
const meEnd=()=>{if(!CR.cur)return;const r=nrm(CR.cur);CR.cur=null;if(r.w>12&&r.h>8)CR.rects.push(r);const cv=sh&&sh.querySelector('[data-lfcv]');if(cv){mePaint(cv,true);meCount()}};
['pointerup','pointercancel'].forEach(n=>document.addEventListener(n,meEnd));
document.addEventListener('click',e=>{
 const t=s=>e.target.closest(s);let b;
 if(b=t('[data-lfnew]')){openSh('new');if(b.dataset.lfpre){const pb=sh.querySelector('[data-lft="P"]');if(pb)pb.click();const n=sh.querySelector('[data-f="n"]');if(n){n.value=b.dataset.lfpre;n.dispatchEvent(new Event('input',{bubbles:true}))}}return}
 if(b=t('[data-lfo]')){openSh('obj',b.dataset.lfo);return}
 if(b=t('[data-lff]')){st.f=b.dataset.lff;render();return}
 if(b=t('[data-lfc2]')){st.c=b.dataset.lfc2;render();return}
 if(!sh||!sh.contains(e.target))return;
 if(t('[data-lfc]')){closeSh();return}
 if(t('[data-lfx]')){if(V.v=='claim'){V.v='obj';draw()}else closeSh();return}
 if(b=t('[data-lft]')){V.t=b.dataset.lft;sh.querySelectorAll('[data-lft]').forEach(x=>x.setAttribute('aria-pressed',x==b));sh.querySelectorAll('[data-lfbt]').forEach(x=>x.hidden=V.t!='T');sh.querySelectorAll('[data-lfbp]').forEach(x=>x.hidden=V.t!='P');return}
 if(b=t('[data-lfk]')){V.cat=b.dataset.lfk;V.man=true;upIco();sh.querySelectorAll('[data-lfk]').forEach(x=>x.setAttribute('aria-pressed',x==b));return}
 if(b=t('[data-lfd]')){V.dep=DEP[+b.dataset.lfd];b.parentNode.querySelectorAll('[data-lfd]').forEach(x=>x.setAttribute('aria-pressed',x==b));return}
 if(t('[data-lfphx]')){V.ph='';phUI();return}
 if(b=t('[data-lfl]')){const i=sh.querySelector('[data-f="l"]');if(i){i.value=b.dataset.lfl;i.classList.remove('bad')}return}
 if(t('[data-lfwa]')){const o=byId(V.id);if(!o)return;const tx=shareTx(o);window.open('https://wa.me/?text='+encodeURIComponent(tx),'_blank');return}
 if(t('[data-lfrep]')){say('Merci, l’annonce sera vérifiée par un responsable');return}
 if(t('[data-lfedit]')){const o=byId(V.id);if(!o)return;V={v:'new',id:o.id,edit:o.id,t:o.t,cat:o.c,ph:o.ph||'',dep:o.w||DEP[1],man:true,idon:!!o.idc,idv:Object.assign({},o.idc||{})};CR.img=null;draw();return}
 if(t('[data-lfclaim]')){V.v='claim';draw();return}
 if(t('[data-lfshare]')){const o=byId(V.id);if(!o)return;const tx=shareTx(o);if(navigator.share){navigator.share({title:'Perdu / trouvé · My UJLoG',text:tx}).catch(()=>{})}else{try{navigator.clipboard.writeText(tx)}catch(_){}say('Texte copié')}return}
 if(t('[data-lfcancel]')){const o=byId(V.id);if(o){o.s='open';delete o.my;delete o.claim;save();render();draw();say('Demande annulée')}return}
 if(t('[data-lfdone]')){const o=byId(V.id);if(o){o.s='done';save();render();draw();say(o.t=='T'?'Objet marqué comme restitué':'Objet marqué comme retrouvé')}return}
 if(t('[data-lfdel]')){const o=byId(V.id);if(o){items=items.filter(x=>x!=o);save();render();closeSh();say('Signalement supprimé')}return}
 if(t('[data-lfsend]')){const o=byId(V.id);if(!o)return;
  if(!val('m')){bad('m');say(o.t=='T'?'Indiquez un détail qui prouve que l’objet est à vous':'Dites où et quand vous l’avez trouvé');return}
  if(o.t=='T'&&val('p').replace(/\D/g,'').length<8){bad('p');say('Renseignez un numéro de téléphone valide');return}
  o.s='claim';o.my='claim';o.claim={m:val('m'),p:val('p'),w:V.dep};save();render();V.v='obj';draw();
  say(o.t=='T'?'Demande envoyée. Vous serez contacté pour récupérer l’objet.':'Merci ! Le propriétaire est prévenu.');return}
 if(t('[data-lfpub]')){
  if(!val('n')){bad('n');say('Indiquez le nom de l’objet');return}
  if(!val('l')){bad('l');say('Indiquez le lieu');return}
  if(idOn()){if(!val('inom')){bad('inom');say('Indiquez le nom inscrit sur la pièce');return}if(!val('ipre')){bad('ipre');say('Indiquez les prénoms');return}}
  if(V.t=='P'&&val('p').replace(/\D/g,'').length<8){bad('p');say('Renseignez un téléphone pour vous joindre');return}
  if(V.edit){const o=byId(V.edit);if(!o)return;o.t=V.t;o.n=val('n');o.c=V.cat;o.l=val('l');o.d=val('d')||today;o.x=val('x');if(V.ph)o.ph=V.ph;else delete o.ph;idApply(o);if(V.t=='T'){o.w=V.dep;delete o.p}else{o.p=val('p');delete o.w}
   save();render();V={v:'obj',id:o.id};draw();say('Modifications enregistrées');return}
  const o={id:'u'+Date.now(),t:V.t,n:val('n'),c:V.cat,l:val('l'),d:val('d')||today,x:val('x'),s:'open',my:'report'};
  if(V.ph)o.ph=V.ph;idApply(o);if(V.t=='T')o.w=V.dep;else o.p=val('p');
  items.unshift(o);save();st.f='all';st.q='';st.c='';const q=sec.querySelector('[data-lfq]');if(q)q.value='';render();
  const sc=sec.querySelector('.sc');if(sc)sc.scrollTo({top:0,behavior:'smooth'});
  const mt=matches(o).length;
  if(mt){V={v:'obj',id:o.id};draw();say(o.t=='P'?'Publié. Des objets trouvés pourraient correspondre !':'Publié. Quelqu’un cherche peut-être cet objet !')}
  else{closeSh();say(V.t=='T'?'Merci ! Votre signalement est publié.':'Signalement publié. Vous serez prévenu si on le retrouve.')}}
});
document.addEventListener('input',e=>{if(sh&&e.target.matches&&e.target.matches('[data-f="n"]')&&sh.contains(e.target)){const g=guess(e.target.value);if(g&&!V.man){V.cat=g.c;sh.querySelectorAll('[data-lfk]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.lfk==g.c))}upIco()}if(e.target.matches('[data-lfq]')){st.q=e.target.value;render()}if(e.target.classList&&e.target.classList.contains('bad'))e.target.classList.remove('bad')});
document.addEventListener('change',e=>{const f=e.target.closest&&e.target.closest('[data-lffile]');if(!f||!f.files||!f.files[0])return;shrink(f.files[0],d=>{if(!d){say('Photo illisible, essayez-en une autre');return}V.ph=d;phUI()})});
function mcDraw(){const tr=document.querySelector('#a2 .m28-qb[data-go="lf1"] .mc-tr');if(!tr)return;
 const by=(a,b)=>a.d<b.d?1:a.d>b.d?-1:0,op=items.filter(o=>o.s=='open');
 const P=op.filter(o=>o.t=='P').sort(by),T=op.filter(o=>o.t=='T').sort(by);
 let l=[...P.slice(0,2),...T.slice(0,1)];if(l.length<3)l=[...l,...[...P.slice(2),...T.slice(1)].sort(by)].slice(0,3);
 if(!l.length){tr.innerHTML='<span class="mc-s mc-o"><span class="mm"><b>Aucun objet signalé</b><small>Tout a été retrouvé</small></span></span>';return}
 tr.innerHTML=l.concat([l[0]]).map(o=>{const P=o.t=='P';return `<span class="mc-s mc-o"><span class="im" style="--k:${kc(o)}">${pic(o)?pim(o):gl(gk(o),40)}</span><span class="mm"><span class="tg${P?' pe':''}">${P?'Perdu':'Trouvé'}</span><b>${esc(nm(o))}</b><small>${esc(o.l)} · ${dl(o.d)}</small></span></span>`}).join('')}
mcDraw();
})();


}catch(e){console.error("[ujlog] v76-perdu-trouve-js",e)}
/* ==== bloc22 ==== */
try{

/* v93 · Logo UJLoG : en mode sombre, fond blanc qui épouse la forme du logo */
(()=>{const W='assets/6e47eef1f437.webp';
function sync(){if(typeof LOGO==='undefined')return;const L=LOGO,dk=document.documentElement.getAttribute('data-theme')==='dark';
document.querySelectorAll('img.lg').forEach(i=>{const s=i.getAttribute('src');if(dk&&s===L)i.src=W;else if(!dk&&s===W)i.src=L})}
new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});
sync();})();

}catch(e){console.error("[ujlog] bloc22",e)}
/* ==== bloc23 ==== */
try{

(()=>{
/* Publications sponsorisées du fil d'accueil. À brancher plus tard sur le backend :
   UJSPO.set([...]) remplace tout, UJSPO.push({...}) ajoute, UJSPO.drop(id) retire.
   Format : {id, adv:'Nom de l’annonceur', logo:'url', text:'Texte de la publication',
   media:{t:'img',src:'url',ar:'4/5'} ou {t:'yt'|'tt',id:'identifiant de la vidéo'},
   title:'Titre', sub:'Sous-titre ou site', cta:{k:'wa'|'link'|'tel', label:'Envoyer un message', tel:'+225…', msg:'Message prérempli', url:'https://…'}}
   Statistiques : document.addEventListener('ujspo',e=>e.detail) → {type:'impression'|'click', id} */
const E=v=>String(v==null?'':v).replace(/[&<>'\x22]/g,c=>'&#'+c.charCodeAt(0)+';');
const say=m=>{if(typeof toast=='function')toast(m)};
const emit=(type,id)=>document.dispatchEvent(new CustomEvent('ujspo',{detail:{type,id}}));
const DEMO=[];
let P=DEMO.slice();const hid=new Set(),seen=new Set();
const get=id=>P.find(p=>p.id==id);
const initial=n=>(String(n||'').replace(/[\[\]]/g,'').trim()[0]||'S').toUpperCase();
const dots=`<svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><circle cx='5' cy='12' r='2'/><circle cx='12' cy='12' r='2'/><circle cx='19' cy='12' r='2'/></svg>`;
const globe=`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' aria-hidden='true'><circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18'/></svg>`;
const media=m=>{m=m||{};
 if(m.t=='yt'||m.t=='tt'){const tt=m.t=='tt';return `<div class='md sp-m vd${tt?' tt':''}' style='aspect-ratio:${tt?'9/16':'16/9'}'>${ytF(m.id||'',m.t)}</div>`}
 return `<div class='md sp-m' style='aspect-ratio:${E(m.ar||'4/5')}'>${m.src?`<img src='${E(m.src)}' alt='' loading='lazy'>`:I('cam',44)}</div>`};
const html=p=>{const c=p.cta||{};
 return `<article class='sp' data-spo='${E(p.id)}' aria-label='Publication sponsorisée'>`+
 `<div class='sp-h'><span class='sp-av'>${p.logo?`<img src='${E(p.logo)}' alt=''>`:E(initial(p.adv))}</span><div class='sp-id'><b>${E(p.adv)}</b><small>Sponsorisé · ${globe}</small></div><button class='sp-x' data-spo-x aria-label='Options de la publicité'>${dots}</button></div>`+
 `<div class='sp-menu' hidden><button data-spo-hide>Masquer cette publicité</button><button data-spo-rep>Signaler cette publicité</button></div>`+
 (p.text?`<p class='sp-t'>${E(p.text)}</p>`:'')+media(p.media)+
 `<div class='sp-c'><div class='fl'><small>${E(p.sub)}</small><b>${E(p.title)}</b></div><button class='sp-b${c.k=='wa'?' wa':''}' data-spo-cta>${c.k=='wa'?I('cht',18):''}${E(c.label||'En savoir plus')}${c.k=='wa'?'':I('chv',16)}</button></div>`+
 `<div class='sp-a'><button class='sp-lk' aria-pressed='false' aria-label='J’aime'>${I('hrt',24)}<span>J’aime</span></button><button class='sp-sh' aria-label='Republier'><svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linejoin='round' stroke-linecap='round' aria-hidden='true'><path d='M17 2l4 4-4 4'/><path d='M3 11V9a3 3 0 0 1 3-3h15'/><path d='M7 22l-4-4 4-4'/><path d='M21 13v2a3 3 0 0 1-3 3H3'/></svg><span>Republier</span></button></div></article>`};
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const id=en.target.dataset.spo;if(!seen.has(id)){seen.add(id);emit('impression',id)}}}),{threshold:[.5]}):null;
function place(){const sc=document.querySelector('#a1 .sc');if(!sc||!sc.offsetParent)return;
 const ids=new Set(P.map(p=>p.id));sc.querySelectorAll('.sp').forEach(e=>{if(!ids.has(e.dataset.spo)||hid.has(e.dataset.spo))e.remove()});
 const arts=[...sc.children].filter(c=>c.tagName=='ARTICLE'&&!c.classList.contains('sp'));
 P.filter(p=>!hid.has(p.id)).forEach((p,k)=>{if([...sc.querySelectorAll('.sp')].some(e=>e.dataset.spo==p.id))return;const a=arts[2+k*4];if(!a)return;a.insertAdjacentHTML('afterend',html(p));if(io)io.observe(a.nextElementSibling)})}
function cta(p){const c=p.cta||{};emit('click',p.id);let u='';
 if(c.k=='wa'){const d=String(c.tel||'').replace(/\D/g,'');if(d)u='https://wa.me/'+d+(c.msg?'?text='+encodeURIComponent(c.msg):'')}
 else if(c.k=='tel'){const d=String(c.tel||'').replace(/[^\d+]/g,'');if(d)u='tel:'+d}
 else if(/^https?:\/\//i.test(c.url||''))u=c.url;
 if(!u){say('Contact de l’annonceur à renseigner');return}
 if(c.k=='tel')location.href=u;else window.open(u,'_blank','noopener')}
document.addEventListener('click',e=>{const a=e.target.closest('.sp');if(!a)return;const id=a.dataset.spo,p=get(id),mn=a.querySelector('.sp-menu');
 if(e.target.closest('[data-spo-x]')){mn.hidden=!mn.hidden;return}
 if(e.target.closest('[data-spo-hide]')){hid.add(id);a.remove();say('Publicité masquée');return}
 if(e.target.closest('[data-spo-rep]')){mn.hidden=true;say('Merci, votre signalement a été envoyé');return}
 if(e.target.closest('[data-spo-cta]')){if(p)cta(p);return}
 const lk=e.target.closest('.sp-lk');if(lk){lk.setAttribute('aria-pressed',lk.getAttribute('aria-pressed')!='true');return}
 if(e.target.closest('.sp-sh')){const im=a.querySelector('.sp-m img');if(window.UJREP)UJREP({n:p?p.adv:'',ti:p?p.title:'',x:p?p.text:'',bg:im?"url('"+im.src+"') center/cover":'linear-gradient(145deg,#0B1630,#1E40AF)',el:a})}});
const norm=p=>Object.assign({adv:'',text:'',title:'',sub:'',media:{t:'img'},cta:{}},p,{id:p.id||('spo:'+Date.now())});
window.UJSPO={set(a){P=(a||[]).map(norm);place()},push(p){const n=norm(p);P=P.filter(x=>x.id!=n.id);P.unshift(n);hid.delete(n.id);place()},drop(id){P=P.filter(x=>x.id!=id);place()},list:()=>P.slice()};
place();setInterval(place,2000);
})();

}catch(e){console.error("[ujlog] bloc23",e)}
/* ==== bloc24 ==== */
try{

document.addEventListener('click',e=>{const b=e.target.closest('[data-rpdel]');if(!b)return;const a=b.closest('.rpb'),o=a._of;a.remove();if(o&&o.dataset){const n=Math.max(0,(+o.dataset.rp||0)-1);o.dataset.rp=n;const r=o.querySelector('.rpn');if(r){if(n)r.textContent=n+(n>1?' republications':' republication');else r.remove()}}if(typeof toast=='function')toast('Republication supprimée')});

}catch(e){console.error("[ujlog] bloc24",e)}
/* ==== bloc25 ==== */
try{

(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],say=m=>{if(typeof toast=='function')toast(m)};
const RX=['❤️','👍','😂','😮','😢','🙏','🔥'],LK='.ig .lkb,.sp-lk,[data-sx=cmlk]';
let bar=null,anc=null,tm=0,fired=false,down=false,lpT=0,p0=[0,0];
const hideBar=()=>{if(bar)bar.remove();bar=anc=null};
function showBar(b){hideBar();anc=b;bar=document.createElement('div');bar.className='rxbar';bar.setAttribute('role','menu');
 bar.innerHTML=RX.map(e=>`<button type="button" data-e="${e}" aria-label="Réagir ${e}">${e}</button>`).join('');
 document.body.appendChild(bar);const r=b.getBoundingClientRect(),w=bar.offsetWidth,h=bar.offsetHeight;let y=r.top-h-12;if(y<8)y=r.bottom+12;
 bar.style.left=Math.min(Math.max(8,r.left+r.width/2-w/2),innerWidth-w-8)+'px';bar.style.top=y+'px';
 try{navigator.vibrate&&navigator.vibrate(12)}catch(_){}}
const under=(x,y)=>{const el=document.elementFromPoint(x,y);return el&&el.closest?el.closest('.rxbar button'):null};
function setLike(b,e){b.setAttribute('aria-pressed',!!e);let i=$('.rxe',b);
 if(e&&e!='❤️'){if(!i){i=document.createElement('i');i.className='rxe';b.insertBefore(i,b.firstChild)}i.textContent=e;b.dataset.rx=e}else{if(i)i.remove();delete b.dataset.rx}
 const a=b.closest('.ig'),lc=a&&$('.lc',a);if(lc)lc.textContent=e?(e=='❤️'?'':e+' ')+'1 J’aime':'Soyez le premier à aimer'}
function choose(e){const b=anc;hideBar();if(!b)return;
 if(b.matches('[data-sx=cmlk]')){window.UJRXP=e;b.click();return}
 const cur=b.getAttribute('aria-pressed')=='true'?(b.dataset.rx||'❤️'):null;setLike(b,cur==e?null:e)}
addEventListener('pointerdown',e=>{const b=e.target.closest&&e.target.closest(LK);if(!b||e.button>0)return;
 down=true;fired=false;p0=[e.clientX,e.clientY];clearTimeout(tm);tm=setTimeout(()=>{fired=true;lpT=Date.now();showBar(b)},380)},true);
addEventListener('pointermove',e=>{if(!down)return;if(!fired){if(Math.hypot(e.clientX-p0[0],e.clientY-p0[1])>12)clearTimeout(tm);return}
 const t=under(e.clientX,e.clientY);$$('.rxbar button').forEach(x=>x.classList.toggle('on',x==t))},true);
const up=e=>{if(!down)return;down=false;clearTimeout(tm);if(!fired)return;lpT=Date.now();const t=e.type=='pointerup'&&under(e.clientX,e.clientY);if(t)choose(t.dataset.e)};
addEventListener('pointerup',up,true);addEventListener('pointercancel',up,true);
addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest(LK+',.rxbar'))e.preventDefault()},true);
addEventListener('scroll',()=>{if(!down)hideBar()},true);

/* Republier façon TikTok : un toucher = republié, la description se met après */
function setRp(a,btn,n,on){a.dataset.rp=n;btn.setAttribute('aria-pressed',on);btn.classList.toggle('has',n>0);
 let c=$('.rpcn',btn);if(!c){c=document.createElement('b');c.className='rpcn';btn.appendChild(c)}c.textContent=n||'';
 const cp=$('.cp',a);if(cp){let r=$('.rpn',cp);if(n){if(!r){r=document.createElement('span');r.className='rpn mu';r.style.fontSize='12px';const lc=$('.lc',cp);cp.insertBefore(r,lc?lc.nextSibling:null)}r.textContent=n+(n>1?' republications':' republication')}else if(r)r.remove()}}
function setDesc(nw,t){$$('.rpb-t,.rpb-add',nw).forEach(x=>x.remove());const e=document.createElement(t?'p':'button');
 if(t){e.className='rpb-t';e.textContent=t}else{e.className='rpb-add';e.textContent='Touchez pour ajouter une description…'}e.dataset.tk='desc';$('.rpb-h',nw).after(e)}
function unrep(a){if(a._rpb){a._rpb.remove();a._rpb=null}setRp(a,$('.shr2,.sp-sh',a),Math.max(0,(+a.dataset.rp||1)-1),false);const s=$('.tksn');if(s)s.classList.remove('on');say('Republication retirée')}
function rep(a){if(!a)return;if(a._rpb&&a._rpb.isConnected){unrep(a);return}
 const sp=a.classList.contains('sp'),g=(s,d='')=>{const e=$(s,a);return e?e.textContent:d},im=$('.sp-m img',a),md=$('.md',a),pp=$('.cp p',a);
 const nm=sp?g('.sp-id b'):g('.ih b'),ti=sp?g('.sp-c b'):g('.mt'),x=sp?g('.sp-t'):(pp?pp.textContent.replace(nm,'').trim():'');
 const bg=sp?(im?"url('"+im.src+"') center/cover":'linear-gradient(145deg,#0B1630,#1E40AF)'):((md&&md.style.background)||'');
 const h=`<article class="rpb"><div class="rpb-h"><span class="pva2">${typeof I=='function'?I('usr',16):''}</span><div class="fl"><b>Vous</b> a republié<small class="mu">À l’instant</small></div><button data-rpdel>Supprimer</button></div><button class="rpb-add" data-tk="desc">Touchez pour ajouter une description…</button><div class="rpe"><span class="rpm"></span><div><small></small><b></b></div></div></article>`;
 const sc=$('#a1 .sc'),f=sc&&$('.ig',sc);let nw=null;
 if(f){f.insertAdjacentHTML('beforebegin',h);nw=f.previousElementSibling}else if(sc){sc.insertAdjacentHTML('afterbegin',h);nw=sc.firstElementChild}
 if(!nw)return;nw._of=a;a._rpb=nw;$('.rpm',nw).style.background=bg||'var(--g)';$('.rpe small',nw).textContent=nm;$('.rpe b',nw).textContent=ti;
 if(x){const s=document.createElement('span');s.textContent=x.slice(0,90);$('.rpe>div',nw).appendChild(s)}
 setRp(a,$('.shr2,.sp-sh',a),(+a.dataset.rp||0)+1,true);
 let s=$('.tksn');if(!s){s=document.createElement('div');s.className='tksn';s.setAttribute('role','status');document.body.appendChild(s)}
 s.innerHTML='<span>Republié sur votre profil</span><button type="button" data-tk="desc">Ajouter une description</button>';s._rpb=nw;s.classList.add('on');clearTimeout(s._t);s._t=setTimeout(()=>s.classList.remove('on'),6000)}
function edit(nw){if(!nw||!nw.isConnected)return;hideBar();const o=$('.rpdp');if(o)o.remove();const cur=$('.rpb-t',nw),p=document.createElement('div');p.className='rpdp';
 p.innerHTML='<div class="rpdp-b"><div class="rpdp-h"><b>Description</b><button type="button" data-tk="x" aria-label="Fermer">×</button></div><textarea maxlength="200" rows="3" placeholder="Écrivez ce que vous voulez dire…"></textarea><div class="rpdp-f"><small>0/200</small><button type="button" class="btn" data-tk="ok">Publier</button></div></div>';
 document.body.appendChild(p);const ta=$('textarea',p),sm=$('small',p),cnt=()=>{sm.textContent=ta.value.length+'/200'};ta.value=cur?cur.textContent:'';cnt();ta.addEventListener('input',cnt);p._rpb=nw;setTimeout(()=>ta.focus(),60)}
document.addEventListener('click',e=>{const t=s=>e.target.closest&&e.target.closest(s);
 if(e.isTrusted&&Date.now()-lpT<700&&t(LK)){e.stopImmediatePropagation();e.preventDefault();return}
 const rb=t('.rxbar button');if(rb){e.stopImmediatePropagation();choose(rb.dataset.e);return}
 if(bar&&!t('.rxbar'))hideBar();
 const lk=t('.ig .lkb,.sp-lk');if(lk){e.stopImmediatePropagation();setLike(lk,lk.getAttribute('aria-pressed')=='true'?null:'❤️');return}
 const sh=t('.ig .shr2[data-act=sh],.sp-sh');if(sh){e.stopImmediatePropagation();rep(sh.closest('.ig,.sp'));return}
 const dl=t('[data-rpdel]');if(dl){e.stopImmediatePropagation();const n=dl.closest('.rpb');if(n&&n._of)unrep(n._of);else if(n)n.remove();return}
 if(e.target.classList&&e.target.classList.contains('rpdp')){e.target.remove();return}
 const d=t('[data-tk]');if(!d)return;e.stopImmediatePropagation();const k=d.dataset.tk,p=d.closest('.rpdp'),sn=d.closest('.tksn');
 if(k=='desc'){edit(sn?sn._rpb:d.closest('.rpb'));if(sn)sn.classList.remove('on')}
 else if(k=='x'&&p)p.remove();
 else if(k=='ok'&&p){const v=$('textarea',p).value.trim();setDesc(p._rpb,v);p.remove();say(v?'Description ajoutée':'Description retirée')}},true);
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const snap=a=>{const sp=a.classList.contains('sp'),im=$('.sp-m img',a),md=$('.md',a),t=$(sp?'.sp-c b':'.mt',a);return{ti:t?t.textContent:'',bg:sp?(im?"url('"+im.src+"') center/cover":'linear-gradient(145deg,#0B1630,#1E40AF)'):((md&&md.style.background)||'')}};
window.UJPROFTAB=t=>{const L=t==2?$$('.rpb').filter(n=>n._of).map(n=>{const d=$('.rpb-t',n),o=snap(n._of);return{bg:o.bg,c:d?d.textContent:o.ti,i:typeof RPI=='string'?RPI:'↻'}}).reverse()
 :$$('.ig .lkb[aria-pressed=true],.sp-lk[aria-pressed=true]').map(b=>{const o=snap(b.closest('.ig,.sp'));return{bg:o.bg,c:o.ti,i:b.dataset.rx||'❤️'}});
 if(!L.length)return'';
 return '<div class="gd tk">'+L.map(x=>`<div class="pt pf-tile" style="background:${esc(x.bg||'var(--g)')}"><span class="pf-ic">${x.i}</span><b class="pf-cap">${esc(x.c)}</b></div>`).join('')+'</div><p class="tkend">Vous avez vu toutes les publications</p>'};

})();

}catch(e){console.error("[ujlog] bloc25",e)}
/* ==== v99-menu-fonctionnel ==== */
try{

(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const MM=()=>document.getElementById('mymenu');
const ic=(n,s=22)=>`<svg class="i" aria-hidden="true" style="width:${s}px;height:${s}px"><use href="#${n}"/></svg>`;
const say=m=>{const t=document.getElementById('toast');if(!t)return;t.textContent=m;t.classList.add('on');clearTimeout(say._t);say._t=setTimeout(()=>t.classList.remove('on'),2600)};
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'\u202f');
const S={resto:1600,amt:1,op:1,card:0,pc:0,td:0,lock:false,rev:false,g:{v:0,i:0,f:0},paid:false,amt2:1,op2:0,amt3:0,op3:0,tx:[],
 cm:[],
 posts:[],arch:[],
 off:[['Plan du campus','PDF · 2 Mo'],['Menu de la semaine · Restaurant','Texte · 0,1 Mo'],['Calendrier universitaire','PDF · 1 Mo']],
 sp:[48,120,12],camp:[],sched:[],remind:false,ver:0,hist:[],ret:null,syn:0};
let cur=null;
const sub=s=>`<span class="mu" style="font-size:13px;display:block">${s}</span>`;
const H={
 sec:t=>`<p class="mms">${t}</p>`,
 card:r=>`<div class="card">${r.join('')}</div>`,
 row:(i,t,s,r)=>`<div class="li">${i?ic(i):''}<div class="fl"><b>${t}</b>${s?sub(s):''}</div>${r?`<span class="mu mono" style="font-size:13px;text-align:right;font-weight:700">${r}</span>`:''}</div>`,
 rowa:(i,t,s,a,l)=>`<div class="li">${i?ic(i):''}<div class="fl"><b>${t}</b>${s?sub(s):''}</div><button data-ac="${a}" style="font-weight:700;font-size:13px;color:var(--g);padding:8px 4px">${l}</button></div>`,
 note:t=>`<p class="mu" style="font-size:13px;margin:2px 6px">${t}</p>`,
 sw:(k,t,s,d,rl,i)=>`<button class="li" role="switch" aria-checked="${!!(S[k]??d)}" data-k="${k}" data-rl="${rl||''}" style="width:100%;text-align:left">${i?ic(i):''}<div class="fl"><b>${t}</b>${s?sub(s):''}</div><span class="sw"></span></button>`,
 ch:(k,o,d,rl)=>H.card(o.map((x,n)=>`<button class="li" data-ch="${k}" data-v="${n}" data-rl="${rl||''}" style="width:100%;text-align:left"><div class="fl"><b>${x}</b></div><span style="color:var(--g);width:22px;height:22px">${(S[k]??d)==n?ic('chk',22):''}</span></button>`)),
 btn:(t,a,s)=>`<button class="btn${s?' s':''}" data-ac="${a}">${t}</button>`,
 empty:(i,t,s)=>`<div class="card pad" style="text-align:center;padding:26px 16px"><span class="ic" style="background:var(--mint);color:var(--g);margin:0 auto 10px;width:52px;height:52px;border-radius:50%">${ic(i,24)}</span><b style="font:800 17px var(--h);display:block">${t}</b><p class="mu" style="font-size:13px;margin-top:4px">${s}</p></div>`,
 stats:a=>`<div style="display:grid;grid-template-columns:repeat(${a.length},1fr);gap:10px">${a.map(([v,l])=>`<div class="card pad" style="text-align:center"><b class="mono" style="font:800 20px var(--h);display:block">${v}</b><span class="mu" style="font-size:12px">${l}</span></div>`).join('')}</div>`,
 bar:p=>`<div style="height:8px;border-radius:4px;background:var(--ln);overflow:hidden;margin-top:6px"><i style="display:block;height:100%;width:${p}%;background:var(--g)"></i></div>`,
 tip:(n,t,s)=>`<div class="li"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%;font:800 15px var(--h)">${n}</span><div class="fl"><b>${t}</b>${sub(s)}</div></div>`,
 det:(t,s)=>`<details class="li" style="display:block;padding:12px 14px"><summary style="font-weight:700;cursor:pointer">${t}</summary><p class="mu" style="font-size:13px;margin-top:6px">${s}</p></details>`
};
const faq=()=>({t:'Centre d’aide',h:H.card([['Comment faire vérifier mon profil ?','Ouvre Paramètres du profil puis « Faire vérifier mon profil » : préinscription, scan de la carte étudiante et authentification par le visage.'],['Comment récupérer mon compte ?','Sur l’écran de connexion, utilise « Mot de passe oublié » : un lien est envoyé à ton adresse e-mail.'],['Comment signaler un contenu ?','Touche les trois points sur la publication, puis « Signaler » et choisis un motif.']].map(x=>H.det(...x)))+H.btn('Contacter l’assistance','say:Message envoyé à l’assistance : réponse sous 48 h')});
const priv=()=>({t:'Centre de confidentialité',h:H.card([H.sw('priv','Compte privé','Seuls tes abonnés voient tes publications',false,'','usr')])+H.sec('Qui peut interagir avec toi')+H.card([H.rowa('plus','Messages directs','Qui peut t’écrire','open:Messages directs','Modifier'),H.rowa('doc','Commentaires','Qui peut commenter tes publications','open:Commentaires','Modifier')])+H.sec('Données')+H.card([H.rowa('dl','Télécharger mes données','Archive de tes publications et informations','say:Demande enregistrée : lien envoyé par e-mail','Demander')])});
const share=()=>({t:'Partager le profil',h:`<div class="card pad" style="text-align:center"><b style="font:800 18px var(--h)">@vous</b><p class="mono mu" style="font-size:13px;margin:4px 0 12px">ujlog.app/@${MB[0].h}</p>${H.btn('Copier le lien','copy:https://ujlog.app/@'+MB[0].h)}<div style="height:8px"></div>${H.btn('Partager via…','share','s')}</div>`+H.card([H.rowa('grid','Mon code QR','Scanner pour ouvrir mon profil','qr','Voir')])});
const posts=()=>({t:'Gérer les publications',h:S.posts.length?H.card(S.posts.map((p,i)=>`<div class="li">${ic('doc')}<div class="fl"><b>${p[0]}</b>${sub(p[1])}</div><button data-ac="arch:${i}" style="font-weight:700;font-size:13px;color:var(--g);padding:8px 6px">Archiver</button><button data-ac="rm:posts:${i}" style="font-weight:700;font-size:13px;color:var(--red);padding:8px 4px">Supprimer</button></div>`))+H.note('Les publications archivées restent visibles uniquement par toi.'):H.empty('doc','Aucune publication','Tes publications apparaîtront ici.')});
const archive=()=>({t:'Archive',h:S.arch.length?H.card(S.arch.map((p,i)=>`<div class="li">${ic('arch')}<div class="fl"><b>${p[0]}</b>${sub('Archivée')}</div><button data-ac="unarch:${i}" style="font-weight:700;font-size:13px;color:var(--g);padding:8px 4px">Restaurer</button></div>`)):H.empty('arch','Archive vide','Archive une publication depuis « Gérer les publications » : elle ne sera visible que par toi.')});
const resto=()=>({t:'Recharger la Restocarte',h:`<div class="card pad" style="text-align:center"><span class="mu" style="font-size:13px">Solde actuel</span><b class="mono" style="display:block;font:800 30px var(--h)">${fmt(S.resto)} FCFA</b>${sub('soit '+Math.floor(S.resto/200)+' repas à 200 FCFA')}</div>`+H.sec('Montant')+H.ch('amt',['500 FCFA','1\u202f000 FCFA','2\u202f000 FCFA','5\u202f000 FCFA'],1)+H.sec('Moyen de paiement')+H.ch('op',['Carte UJLoG · '+fmt(S.card)+' FCFA','Orange Money','Wave'],1)+H.btn('Recharger','recharge')});
const AMT=[500,1000,2000,5000],OPN=['Carte UJLoG','Orange Money','Wave'],OPN2=['Orange Money','Wave'];
const CFG={
 'home|Contenus hors ligne':()=>({t:'Contenus hors ligne',h:H.sw('wifi','Télécharger en Wi-Fi uniquement','Économise tes données mobiles',true,'','pho')+(S.off.length?H.card(S.off.map((p,i)=>`<div class="li">${ic('cld')}<div class="fl"><b>${p[0]}</b>${sub(p[1])}</div><button data-ac="rm:off:${i}" style="font-weight:700;font-size:13px;color:var(--red);padding:8px 4px">Retirer</button></div>`)):H.empty('cld','Rien en local','Enregistre des contenus pour les lire sans connexion.'))+H.card([H.rowa('coin','Libérer de l’espace','Vider le cache et les brouillons','open:Libérer de l’espace','Ouvrir')])}),
 'act|Photos aimées':()=>{const h=window.UJPROFTAB?window.UJPROFTAB(1):'';return{t:'Photos aimées',h:h||H.empty('hrt','Aucune photo aimée','Appuie sur le cœur d’une publication : elle apparaîtra ici.')}},
 'act|Republications':()=>{const h=window.UJPROFTAB?window.UJPROFTAB(2):'';return{t:'Republications',h:h||H.empty('shr','Aucune republication','Les publications que tu republies apparaîtront ici.')}},
 'act|Commentaires':()=>({t:'Commentaires',h:S.cm.length?H.card(S.cm.map((c,i)=>`<div class="li">${ic('doc')}<div class="fl"><b>${c[0]}</b>${sub(c[1])}</div><button data-ac="rm:cm:${i}" style="font-weight:700;font-size:13px;color:var(--red);padding:8px 4px">Supprimer</button></div>`)):H.empty('doc','Aucun commentaire','Tes commentaires publiés apparaîtront ici.')}),
 'act|Archive':archive,
 'prof|Statut du profil':()=>({t:'Statut du profil',h:H.ch('stat',['Disponible','Occupé(e)','En cours','Invisible'],0)+H.note('Ton statut s’affiche sur ton profil à côté de ta photo.')}),
 'prof|Faire vérifier mon profil':()=>{const st=[['Préinscription','Formulaire rempli à 100 %'],['Carte étudiante','Scan recto-verso'],['Visage','Authentification par le visage'],['Empreinte digitale','Facultatif, si ton téléphone le permet']];return{t:'Vérification du profil',h:`<div class="card pad"><b style="font:800 16px var(--h)">${S.ver} / ${st.length} étapes</b>${H.bar(S.ver/st.length*100)}</div>`+H.card(st.map((x,i)=>`<div class="li"><span class="ic" style="background:${i<S.ver?'var(--g)':'var(--mint)'};color:${i<S.ver?'#fff':'var(--g)'};border-radius:50%">${ic(i<S.ver?'chk':'clk',20)}</span><div class="fl"><b>${x[0]}</b>${sub(x[1])}</div></div>`))+(S.ver<st.length?H.btn(S.ver?'Continuer la vérification':'Commencer la vérification','ver'):H.note('Profil vérifié : ton badge certifié est débloqué.'))}},
 'prof|Examiner les publications et les identifications':()=>({t:'Publications et identifications',h:H.sw('apv','Approuver les identifications manuellement','Tu valides avant qu’elles apparaissent sur ton profil',false,'','plus')+H.empty('news','Rien à examiner','Les identifications en attente apparaîtront ici.')}),
 'set|Centre de confidentialité':priv,
 'prof|Partager le profil':share,
 'prof|Inviter des personnes à entrer en contact':()=>({t:'Inviter des personnes',h:`<div class="card pad">${H.row('','Invite tes camarades','Ils te retrouveront directement sur My UJLoG.')}<p class="mono" style="font-size:13px;margin:6px 0 12px;font-weight:700">ujlog.app/inviter/vous</p>${H.btn('Copier le lien d’invitation','copy:https://ujlog.app/inviter/vous')}<div style="height:8px"></div>${H.btn('Envoyer via…','share','s')}</div>`}),
 'set|Gérer les publications':posts,
 'set|Préférences de contenu':()=>({t:'Préférences de contenu',h:H.card([H.sw('sens','Masquer les contenus sensibles','',true,'','shd'),H.sw('mydp','Mon UFR en premier','Voir d’abord les publications de ton UFR',true,'','grp'),H.sw('ads','Publicités personnalisées','',false,'','news')])}),
 'set|Temps d’écran et bien-être':()=>({t:'Temps d’écran',h:H.stats([['0 h 42','Aujourd’hui'],['1 h 05','Moyenne / jour']])+H.sec('Limite quotidienne')+H.ch('lim',['Désactivée','30 minutes','1 heure','2 heures'],0)+H.sw('brk','Rappel de pause','Après 45 minutes d’utilisation',false,'','clk')}),
 'set|Compte':()=>({t:'Compte',h:H.card([H.row('usr','Nom d’utilisateur','','@'+MB[0].h),H.row('doc','UJ-ID','','[UJ-ID]'),H.row('news','Adresse e-mail','','[adresse e-mail]'),H.row('pho','Téléphone','','[numéro]'),H.row('grp','UFR','','[UFR]')])+`<button class="btn" data-pedit="1">Modifier mes informations</button>`}),
 'set|Sécurité et autorisations':()=>({t:'Sécurité et autorisations',h:H.card([H.sw('bio','Verrouillage biométrique','Empreinte ou visage pour ouvrir l’app',false,'','shd'),H.sw('alg','Alertes de connexion','Notifie-moi d’une connexion inconnue',true,'','bell')])+H.sec('Appareils connectés')+H.card([H.row('pho','Cet appareil','Actif maintenant'),H.rowa('pho','[Autre appareil]','Dernière connexion hier','say:Appareil déconnecté','Déconnecter')])}),
 'set|Comptes bloqués':()=>({t:'Comptes bloqués',h:H.empty('shd','Aucun compte bloqué','Les comptes que tu bloques ne peuvent ni te suivre ni voir tes publications.')}),
 'set|Mentions':()=>({t:'Mentions',h:H.sec('Qui peut te mentionner')+H.ch('mn',['Tout le monde','Mes abonnés','Personne'],0)}),
 'set|Messages directs':()=>({t:'Messages directs',h:H.sec('Qui peut t’écrire')+H.ch('dm',['Tout le monde','Mes abonnés','Personne'],1)}),
 'set|Commentaires':()=>({t:'Commentaires',h:H.sec('Qui peut commenter')+H.ch('cmw',['Tout le monde','Mes abonnés','Personne'],0)}),
 'set|Réutilisation du contenu':()=>({t:'Réutilisation du contenu',h:H.card([H.sw('rep','Autoriser la republication','',true,'','shr'),H.sw('sto','Autoriser le partage en story','',true,'','stry')])}),
 'set|Téléchargements':()=>({t:'Téléchargements',h:H.sw('dlw','Autoriser le téléchargement de mes publications','',true,'Téléchargements','dl')}),
 'set|Liste de suivis':()=>({t:'Liste de suivis',h:H.sec('Qui peut voir tes suivis')+H.ch('fl',['Toi uniquement','Mes abonnés','Tout le monde'],0,'Liste de suivis')}),
 'set|Photos aimées':()=>({t:'Photos aimées',h:H.sec('Qui peut voir tes photos aimées')+H.ch('lk',['Toi uniquement','Mes abonnés','Tout le monde'],0,'Photos aimées')}),
 'set|Vues':()=>({t:'Vues',h:H.sw('vws','Voir qui a consulté mon profil','Les autres verront aussi que tu les as consultés',true,'Vues','cam')}),
 'set|Boîte de réception et messagerie':()=>({t:'Messagerie',h:H.card([H.sw('mnt','Notifications de messages','',true,'','bell'),H.sw('rcp','Accusés de lecture','',true,'','chk'),H.sw('req','Filtrer les demandes de message','',true,'','shd')])}),
 'set|Contrôle du public':()=>({t:'Contrôle du public',h:H.sec('Audience par défaut de mes publications')+H.ch('aud',['Public','Mes followers','Privé'],0)}),
 'set|Lecture':()=>({t:'Lecture',h:H.card([H.sw('apl','Lecture automatique des vidéos','',true,'','cam'),H.sw('sub','Sous-titres','',false,'','doc'),H.sw('snd','Son activé par défaut','',true,'','bell')])}),
 'set|Langue':()=>({t:'Langue',h:H.ch('lang',['Français','English'],0)+H.note('La langue de l’application s’applique à tous les écrans.')}),
 'set|Accessibilité':()=>({t:'Accessibilité',h:H.card([H.sw('big','Texte plus grand','',false,'','doc'),H.sw('ctr','Contraste élevé','',false,'','shd'),H.sw('mot','Réduire les animations','',false,'','cam')])}),
 'set|Contacts et localisation':()=>({t:'Contacts et localisation',h:H.card([H.sw('ctc','Synchroniser mes contacts','Pour retrouver des camarades',false,'','pho'),H.sw('loc','Utiliser ma position sur le campus','Pour les services autour de toi',false,'','pin'),H.sw('sgc','Suggestions de personnes','',true,'','grp')])}),
 'set|Libérer de l’espace':()=>{const L=[['Cache de l’application',0],['Photos téléchargées',1],['Brouillons',2]];return{t:'Libérer de l’espace',h:H.card(L.map(([n,i])=>`<div class="li">${ic('coin')}<div class="fl"><b>${n}</b>${sub(S.sp[i]+' Mo')}</div><button data-ac="clr:${i}" style="font-weight:700;font-size:13px;color:var(--g);padding:8px 4px">Vider</button></div>`))+H.note('Total : '+S.sp.reduce((a,b)=>a+b,0)+' Mo. Tes publications ne sont pas supprimées.')}},
 'set|Économiseur de données':()=>({t:'Économiseur de données',h:H.sw('eco','Économiseur de données','Réduit la qualité des vidéos et désactive la lecture automatique',false,'','coin')}),
 'set|Centre d’aide':faq,'pro|Accueil de l’assistance':faq,
 'set|Conditions et politiques':()=>({t:'Conditions et politiques',h:H.card([H.det('Conditions d’utilisation','En utilisant My UJLoG, tu t’engages à respecter les autres étudiants et le personnel, et à ne publier que des contenus dont tu es l’auteur ou dont tu as les droits.'),H.det('Politique de confidentialité','Tes données servent uniquement au fonctionnement de l’application. Tu peux demander leur export ou leur suppression depuis le Centre de confidentialité.'),H.det('Règles de la communauté','Pas de harcèlement, de discrimination ni de contenu violent. Les contenus signalés sont examinés par l’équipe de modération.')])}),
 'set|Changer de compte':()=>({t:'Changer de compte',h:H.card([`<div class="li"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${ic('usr',20)}</span><div class="fl"><b>Vous</b>${sub('@vous · compte actuel')}</div><span style="color:var(--g)">${ic('chk',22)}</span></div>`])+H.btn('Ajouter un compte','say:Connexion à un autre compte : saisis ton UJ-ID','s')}),
 'set|Se déconnecter':()=>({t:'Se déconnecter',h:`<div class="lo-top"><span class="lo-logo"><img alt="" src="${(document.querySelector('img.lg[src^="data:"]')||{}).src||''}"></span><b class="lo-h">Enregistrer mes informations ?</b><p class="lo-p">Ton UJ-ID sera pré-rempli à ta prochaine connexion.</p></div><div class="lo-sheet" role="group" aria-label="Enregistrer mes informations"><button type="button" class="lo-yn y" data-ac="logout" data-rm="1"><span class="lo-yi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span>Oui</span></button><button type="button" class="lo-yn n" data-ac="logout" data-rm="0"><span class="lo-yi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></span><span>Non</span></button></div>`}),
 'pro|Comment gagner des followers ?':()=>({t:'Gagner des followers',h:H.card([H.tip(1,'Publie régulièrement','Deux à trois publications par semaine suffisent'),H.tip(2,'Identifie ton UFR','Les camarades de ton UFR te trouveront'),H.tip(3,'Réponds aux commentaires','Cela encourage les échanges'),H.tip(4,'Fais vérifier ton profil','Le badge certifié inspire confiance')])}),
 'pro|Quel est le meilleur moment pour publier ?':()=>({t:'Meilleur moment pour publier',h:H.card([['Matin · 7 h – 9 h',35],['Midi · 12 h – 14 h',70],['Soir · 18 h – 21 h',100],['Nuit · 22 h – 6 h',20]].map(x=>`<div class="li" style="display:block"><b>${x[0]}</b>${H.bar(x[1])}</div>`))+H.note('Estimation selon l’activité de tes abonnés.')}),
 'pro|Consulter le statut de mon compte':()=>({t:'Statut du compte',h:H.card([H.row('chk','Compte en règle','Aucune infraction détectée'),H.row('chk','Aucune restriction','Toutes les fonctions sont disponibles'),H.row('shd','Vérification',S.ver>=4?'Profil vérifié':'En attente')])+H.btn('Faire vérifier mon profil','open:Faire vérifier mon profil','s')}),
 'pro|Autres outils':()=>({t:'Autres outils',h:H.card([H.rowa('cal','Planifier une publication','Choisis la date et l’heure','open:Planifier','Ouvrir'),H.rowa('qr','Mon code QR','Scanner pour ouvrir mon profil','qr','Voir'),H.rowa('dl','Exporter mes données','Archive de tes publications','say:Demande enregistrée : lien envoyé par e-mail','Demander')])}),
 'pro|Planifier':()=>({t:'Planifier une publication',h:`<div class="field"><label>Date</label><input id="mxd" type="date" style="display:block;width:100%;border:0;background:none;font:inherit;color:inherit"></div><div class="field"><label>Heure</label><input id="mxh" type="time" value="18:00" style="display:block;width:100%;border:0;background:none;font:inherit;color:inherit"></div><div class="field"><label>Légende</label><textarea id="mxt" rows="2" style="display:block;width:100%;border:0;background:none;font:inherit;color:inherit;resize:none"></textarea></div>${H.btn('Planifier','sched')}`+(S.sched.length?H.sec('Planifiées')+H.card(S.sched.map(x=>H.row('cal',x[1]||'Sans légende',x[0]))):'')})
};
const DO={
 'qr|Partager le code QR':()=>doShare(),
 'prof|Copier le lien':()=>copy('https://ujlog.app/@'+MB[0].h),
 'pro|Analytics':el=>goSec(el,'Analytics'),'pro|Contenu':el=>goSec(el,'Contenu'),'pro|Communauté':el=>goSec(el,'Communauté')
};
const copy=u=>{try{navigator.clipboard.writeText(u).then(()=>say('Lien copié'),()=>say('Lien : '+u))}catch(_){say('Lien : '+u)}};
const doShare=()=>{const d={title:'My UJLoG',url:'https://ujlog.app/@'+MB[0].h};if(navigator.share){navigator.share(d).catch(()=>{})}else copy(d.url)};
const goSec=(el,n)=>{el.parentNode.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',b==el));const h=$$('#mmp-pro h3').find(x=>x.textContent.trim()==n);if(h)h.scrollIntoView({behavior:'smooth',block:'start'})};
const curPage=()=>{const m=MM(),p=$$('.mmpage,#mmhome',m).find(x=>!x.hidden);return!p||p.id=='mmhome'?'home':p.id.replace('mmp-','')};
const show=id=>{const m=MM();if(!m)return;if(id!='det')S.dret=null;if(id=='sol'){S._shown=0;S.flip=false;renderSol()}$$('.mmpage,#mmhome',m).forEach(p=>p.hidden=true);const t=id=='home'?$('#mmhome',m):$('#mmp-'+id,m);if(t)t.hidden=false;m.classList.toggle('full',id!='home');m.scrollTop=0};
const ensure=()=>{const m=MM();let p=$('#mmp-det',m);if(!p){p=document.createElement('div');p.className='mmpage';p.id='mmp-det';p.hidden=true;p.innerHTML=`<div class="mmh"><button class="ib" data-mxb="1" aria-label="Retour" style="transform:scaleX(-1)">${ic('chv',22)}</button><h2 id="mxt0"></h2></div><div id="mxb0" style="display:flex;flex-direction:column;gap:10px;margin-top:10px"></div>`;m.appendChild(p)}return p};
const loRm=()=>{if(S.lorem!=null)return+S.lorem?1:0;try{return localStorage.getItem('ujRemember')=='0'?0:1}catch(_){return 1}};
const render=()=>{const o=CFG[cur.key]();ensure();{const dp=$('#mmp-det');if(dp){dp.classList.toggle('blu',/^sol\|/.test(cur.key));dp.classList.toggle('lopg',/\|Se déconnecter$/.test(cur.key))}}$('#mxt0').textContent=o.t;const m=MM(),y=m.scrollTop;$('#mxb0').innerHTML=o.h;m.scrollTop=y};
const open=(key,origin)=>{if(!CFG[key])return false;cur={key,origin};ensure();render();show('det');MM().scrollTop=0;return true};
const setRow=(t,v)=>{$$('#mmp-set .li').forEach(r=>{const b=$('b',r);if(b&&b.textContent.trim()==t){const s=$('span.mu',r);if(s)s.textContent=v}})};
const UE=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
window.UJADDPOST=(t,el)=>{S.posts.unshift([UE(t),'À l’instant',el])};
window.UJRMPOST=el=>{['posts','arch'].forEach(k=>{const i=S[k].findIndex(p=>p[2]===el);if(i>-1)S[k].splice(i,1)})};
window.UJEDPOST=(el,t)=>{['posts','arch'].forEach(k=>S[k].forEach(p=>{if(p[2]===el)p[0]=UE(t)}))};
const ACT=(id,el)=>{const[a,...r]=id.split(':'),x=r.join(':');
 if(a=='say')say(x);else if(a=='copy')copy(x);else if(a=='share')doShare();else if(a=='url')window.open(x,'_blank','noopener');
 else if(a=='back')show(cur.origin);
 else if(a=='open')open((cur.origin)+'|'+x,cur.origin)||open('pro|'+x,cur.origin)||open('prof|'+x,cur.origin)||open('set|'+x,cur.origin);
 else if(a=='qr'){S.hist.push(cur.origin);S.syn=1;const b=document.createElement('button');b.dataset.mmp='qr';b.hidden=true;MM().appendChild(b);b.click();b.remove();S.syn=0}
 else if(a=='rm'){const[k,i]=x.split(':'),it=S[k][+i];if(it&&it[2]&&window.UJDELPOST)window.UJDELPOST(it[2]);S[k].splice(+i,1);say('Supprimé');render()}
 else if(a=='arch'){const it=S.posts.splice(+x,1)[0];if(it&&it[2])it[2].style.display='none';S.arch.push(it);say('Publication archivée');render()}
 else if(a=='unarch'){const it=S.arch.splice(+x,1)[0];if(it&&it[2])it[2].style.display='';S.posts.push(it);say('Publication restaurée');render()}
 else if(a=='clr'){S.sp[+x]=0;say('Espace libéré');render()}
 else if(a=='remind'){S.remind=!S.remind;say(S.remind?'Rappel activé pour le 8 novembre':'Rappel désactivé');render()}
 else if(a=='ver'){S.ver=Math.min(4,S.ver+1);say(S.ver>=4?'Profil vérifié !':'Étape validée');render()}
 else if(a=='camp'){S.camp.push('Campagne n°'+(S.camp.length+1));say('Brouillon de campagne créé');render()}
 else if(a=='sched'){const d=$('#mxd').value;if(!d){say('Choisis une date');return}S.sched.push([d.split('-').reverse().join('/')+' à '+$('#mxh').value,$('#mxt').value.trim()]);say('Publication planifiée');render()}
 else if(a=='daily'){if(S.daily){say('Déjà récupéré aujourd’hui');return}if(S.td>=CAP){say('Plafond du jour atteint : '+CAP+' MONLoG maximum par jour');return}S.daily=true;S.pc+=1;S.td+=1;S._burst=1;S.tx.unshift(['Connexion du jour','Bonus quotidien','+1 MONLoG','coin']);say('+1 MONLoG : à demain pour le prochain bonus');renderSol()}
 else if(a=='claim'){if(!S.pend.length){say('Rien à récupérer pour le moment');return}let got=0;const keep=[];S.pend.forEach(p=>{if(p[3]<=CAP-S.td){S.pc+=p[3];S.td+=p[3];got+=p[3];S.cl[p[0]]=true;if(p[0]=='login')S.daily=true;S.tx.unshift([p[1],p[2],'+'+p[3]+' MONLoG','coin'])}else keep.push(p)});S.pend=keep;if(!got){say('Plafond du jour atteint : '+CAP+' MONLoG maximum par jour');return}S._burst=1;say('+'+got+' MONLoG récupérés'+(keep.length?' · le reste dépasse le plafond du jour':''));renderSol()}
 else if(a=='earn'){const E=EARN[x];if(!E)return;if(S.cl[E[0]]){say('Déjà récupéré');return}if(S.pend.some(p=>p[0]==E[0])){say('Déjà dans la boîte cadeau');return}S.pend.push(E.slice());say('Nouvelle récompense dans la boîte cadeau');renderSol()}
 else if(a=='gopen'){const G=S.gf,n=gi();if(G.d[n]!=null){say('Cadeau déjà ouvert aujourd’hui');return}UJGAMES.play(n,GF[n-1],raw=>{const amt=Math.max(0,Math.min(raw,GCAP-G.m));G.d[n]=amt;G.m+=amt;S.pc+=amt;if(amt){S._burst=1;S.tx.unshift(['Bonus cadeau du jour','Jour '+n+' · '+GF[n-1][0],'+'+fmt(amt)+' MONLoG','coin'])}let ex='';if(Object.keys(G.d).length==30&&!G.b){const bn=Math.min(GBON,GCAP-G.m);if(bn>0){G.b=bn;G.m+=bn;S.pc+=bn;S.tx.unshift(['Bonus cadeau du jour','30 cadeaux ouverts','+'+fmt(bn)+' MONLoG','coin']);ex=' Bonus des 30 jours : +'+bn+' MONLoG !'}}renderSol();return{amt:amt,bal:S.pc,extra:ex}})}
 else if(a=='ghunt'){UJGAMES.hunt(p=>{S.pc+=p;S._burst=1;S.tx.unshift(['Chasse au trésor','QR code du campus','+'+fmt(p)+' MONLoG','coin']);renderSol();return{bal:S.pc}})}
 else if(a=='gnext'){S.gf.o=(S.gf.o||0)+1;renderSol()}  else if(a=='eye'){S.hide=!S.hide;renderSol()}
 else if(a=='go')open(x,'sol');
 else if(a=='dart'){const h=S.dh||['sol|Gains','sol'];S.dret={to:h[0],from:x,o:h[1]};open(x,h[1])}
 else if(a=='dlink'){S.dret={to:cur.key,from:x,o:cur.origin};open(x,cur.origin)}
 else if(a=='sim'&&false){const R=RULES.find(r=>r[0]==x),n=R[3],add={v:1000,i:100,f:50}[x],o=S.g[x];S.g[x]+=add;const t=Math.floor(S.g[x]/n)-Math.floor(o/n);if(t>0){const p=Math.min(t*R[4],CAP-S.td);if(p<=0){say('Plafond du jour atteint : '+CAP+' MONLoG maximum par jour')}else{S.pc+=p;S.td+=p;S._burst=1;S.tx.unshift(['Gain automatique',fmt(n)+' '+R[1].toLowerCase()+' · +'+p+' MONLoG','+'+fmt(p)+' MONLoG','coin']);say('+'+p+' MONLoG créditées')}}else say('Activité enregistrée');renderSol()}
  
  else if(a=='logout'){const rm=(el&&el.dataset&&el.dataset.rm!=null)?+el.dataset.rm:loRm();S.lorem=rm;if(el&&el.disabled)return;const lb=el&&el.querySelector('span:last-child'),old=lb&&lb.textContent;if(el){el.disabled=true;if(lb)lb.textContent='Déconnexion…'}try{navigator.vibrate&&navigator.vibrate(12)}catch(_){}try{localStorage.setItem('ujRemember',rm)}catch(_){}try{parent.postMessage({t:'ujlogout',remember:!!rm,handle:(rm&&MB[0].h)||null},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(_){say('Déconnexion indisponible')}setTimeout(()=>{if(el&&el.isConnected){el.disabled=false;if(lb&&old)lb.textContent=old}},2500)}};
document.addEventListener('click',e=>{const m=MM();if(!m)return;
 const t=s=>e.target.closest&&e.target.closest(s),stop=()=>{e.stopImmediatePropagation();e.preventDefault()};
 if(t('[data-menu]')){S.hist=[];S.ret=null;setTimeout(renderSol,0)}
 if(S.ret&&t('#a8 .ib[data-go],#a10 .ib[data-go],#a12 .ib[data-go],#a16 .ib[data-go]')){stop();const r=S.ret;S.ret=null;const g=document.createElement('button');g.dataset.go='a4';g.hidden=true;document.getElementById('a4').appendChild(g);g.click();g.remove();m.hidden=false;S.hist=r.hist;show(r.page);return}
 if(S.ret&&!m.contains(e.target)&&t('[data-go]'))S.ret=null;
 if(m.hidden||!m.contains(e.target))return;
 if(t('[data-go]'))S.ret={page:curPage(),hist:S.hist.slice()};
 if(t('[data-mmx]'))S.hist=[];
 if(t('#mmp-sol [data-ac]')){stop();ACT(t('#mmp-sol [data-ac]').dataset.ac);return}
 if(t('[data-mmb]')){stop();show(S.hist.pop()||'home');return}
 if(t('[data-mmp]')&&!S.syn)S.hist.push(curPage());
 if(t('[data-mxb]')){stop();if(S.dret&&cur&&S.dret.from==cur.key){const r=S.dret;S.dret=null;if(S.dh&&r.to!=S.dh[0])S.dret={to:S.dh[0],from:r.to,o:S.dh[1]};open(r.to,r.o);return}show(cur?cur.origin:'home');return}
 if(t('#mmp-det')){
  const ch=t('[data-ch]');if(ch){stop();S[ch.dataset.ch]=+ch.dataset.v;if(ch.dataset.rl)setRow(ch.dataset.rl,$('b',ch).textContent);render();return}
  const sw=t('[role=switch]');if(sw){const k=sw.dataset.k;if(k){S[k]=sw.getAttribute('aria-checked')!='true';if(sw.dataset.rl)setRow(sw.dataset.rl,S[k]?'Activé':'Désactivé')}return}
  const ac=t('[data-ac]');if(ac){stop();ACT(ac.dataset.ac,ac);return}
  return}
 const el=t('button,[data-soon]');if(!el||!m.contains(el))return;
 if(el.matches('[data-mmp],[data-go],[data-hist],[data-pedit],[data-mmb],[data-mmx],[data-sx],[role=switch],.ib,.seg button,#dmode,#adm'))return;
 const pg=el.closest('.mmpage,#mmhome');if(!pg)return;
 const origin=pg.id=='mmhome'?'home':pg.id.replace('mmp-','');
 const lab=el.dataset.soon||($('b',el)&&$('b',el).textContent.trim());if(!lab)return;
 const key=origin+'|'+lab;
 if(DO[key]){stop();DO[key](el);return}
 if(CFG[key]){stop();open(key,origin)}
},true);
const CAP=20;
const RULES=[['i','Interactions','hrt',100,10,'Chaque tranche de 100 interactions'],['f','Nouveaux abonnés','grp',50,25,'Chaque tranche de 50 nouveaux abonnés actifs']];
const BON=[['clk','Connexion du jour','Une fois par jour',1,1],['cal','Série de 7 jours','7 jours de connexion d’affilée',10,0],['cam','Publier une photo','1 fois par jour maximum',2,0],['chk','Participer à une activité','Sondage, quiz, vote…',2,0],['plus','Inviter un ami','Quand il vérifie son profil',50,0],['shd','Faire vérifier mon profil','Une seule fois',50,0]];
const coin=n=>`<svg viewBox="0 0 32 32" width="${n}" height="${n}" aria-hidden="true" style="flex:none"><circle cx="16" cy="16" r="15" fill="#F5A623"/><circle cx="16" cy="16" r="11.5" fill="#FFC857" stroke="#C98312" stroke-width="1.4"/><text x="16" y="21" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="14" fill="#8A4B00">M</text></svg>`;
const RINGS=`<svg class="bgc" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g transform="rotate(-18 250 40)">${[0,1,2,3,4,5,6,7].map(i=>`<ellipse cx="250" cy="40" rx="${28+i*24}" ry="${18+i*17}"/>`).join('')}</g></svg>`;
const CHIP=`<svg width="40" height="30" viewBox="0 0 40 30" aria-hidden="true"><rect x="1" y="1" width="38" height="28" rx="6" fill="#E9C46A" stroke="#B8902F"/><path d="M1 10h38M1 20h38M14 1v28M26 1v28" stroke="#B8902F" stroke-width="1" fill="none"/></svg>`;
const NFC=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="opacity:.9"><path d="M8 8c2.2 2.2 2.2 5.8 0 8M12 5.5c3.6 3.6 3.6 9.4 0 13M16 3c5 5 5 13 0 18"/></svg>`;
const holder=()=>{const b=$('#mmpf .fl b');return(b?b.textContent.trim():'Étudiant UJLoG').toUpperCase()};
const frc=n=>String(Math.round(n*10)/10).replace('.',',');
const bigCoin=k=>`<svg viewBox="0 0 120 120" width="112" height="112" aria-hidden="true"><defs><radialGradient id="gc${k}" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#FFF3C4"/><stop offset=".45" stop-color="#FFC83D"/><stop offset="1" stop-color="#C77D0A"/></radialGradient><linearGradient id="gr${k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE48A"/><stop offset="1" stop-color="#B86E05"/></linearGradient></defs><circle cx="60" cy="60" r="58" fill="url(#gr${k})"/><circle cx="60" cy="60" r="55" fill="none" stroke="#8A4B00" stroke-opacity=".4" stroke-width="3" stroke-dasharray="2 3.4"/><circle cx="60" cy="60" r="45" fill="url(#gc${k})" stroke="#B8730A" stroke-width="2"/><text x="61.5" y="79.5" text-anchor="middle" font-family="Georgia,serif" font-weight="900" font-size="54" fill="#7A3F00" opacity=".55">M</text><text x="59.4" y="77.6" text-anchor="middle" font-family="Georgia,serif" font-weight="900" font-size="54" fill="#FFF6D2" opacity=".7">M</text><text x="60" y="78.5" text-anchor="middle" font-family="Georgia,serif" font-weight="900" font-size="54" fill="#A8600A">M</text></svg>`;
const renderSol0=()=>{const el=document.getElementById('solb');if(!el)return;
 const rem=S.pc%10000,len=fmt(S.pc).length;
 const sp=[[8,40,0],[122,64,.8],[22,170,1.5],[104,154,.4],[58,34,1.9]].map(([r,t,d])=>`<i class="pc-st" style="right:${r}px;top:${t}px;animation-delay:${d}s"></i>`).join('');
 const bu=S._burst?Array.from({length:12},(_,k)=>{const a=k/12*6.2832,d=85+(k%3)*28;return `<i class="pc-bu" style="--dx:${Math.round(Math.cos(a)*d)}px;--dy:${Math.round(Math.sin(a)*d)}px;animation-delay:${(k%4)*.04}s"></i>`}).join(''):'';
 const pop=S._burst?' pop':'';S._burst=0;
 const UP='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>';
 const hint=S.td>=CAP?'Plafond du jour atteint · reviens demain':fmt(Math.max(0,CAP-S.td))+' MONLoG à gagner aujourd’hui';
 const MO='<div class="pc-mo" aria-hidden="true"><i></i><i></i><i></i></div>';
const ux=(n,s)=>`<svg class="ux" aria-hidden="true" style="width:${s||24}px;height:${s||24}px"><use href="#ux-${n}"/></svg>`;
 const rowx=(i,ti,d,r)=>`<div class="s3-ro"><span class="s3-ib">${ux(i,20)}</span><div class="fl"><b>${ti}</b><small>${d}</small></div>${r||''}</div>`;
 const ringF=p=>{const pc=Math.min(100,Math.round(p*100));return `<span class="s3-rg"><svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18"/><circle class="v" cx="22" cy="22" r="18" stroke-dasharray="${(pc/100*113.1).toFixed(1)} 113.1"/></svg><span>${pc}%</span></span>`};
 if(!S.pend)S.pend=S.daily?[]:[['login','Connexion du jour','Bonus quotidien',1,'gift']];
 if(!S.cl)S.cl={};
 const BID=['login','streak','photo','act','inv','ver'],BIC=['gift','cal','cam','vote','users','shield'],RIC={i:'heart',f:'users'};
 const bonB=()=>{const rows=BON.map(([i,ti,d,n],k)=>{const id=BID[k],st=S.cl[id]?'ok':(S.pend.some(p=>p[0]==id)?'box':'todo');const tag=st=='ok'?'<span class="s3-st ok">Récupéré ✓</span>':st=='box'?'<span class="s3-st box">Dans la boîte</span>':`<span class="s3-st">+${n}</span>`;return rowx(BIC[k],ti,d,tag)}).join('');
  return `<div class="s3-sec" style="margin-top:6px">Bonus du jour<small class="s3-mu">${CAP} MONLoG max / jour</small></div><div>${rows}</div>`+H.note('Tout se récupère dans la boîte cadeau, en haut de l’écran Solde. Les vues et interactions artificielles sont écartées.')};
 const gainsB=()=>`<div class="s3-sec" style="margin-top:6px">Gains automatiques<small class="s3-mu">arrivent seuls dans ton solde</small></div>`+RULES.map(([k,l,i,n,r,d])=>{const rm=S.g[k]%n;return `<div class="s3-gc"><div class="s3-gh"><span class="s3-ib">${ux(RIC[k]||'bolt',20)}</span><div class="fl"><b>${l}</b><small>${d}</small></div><span class="s3-st">+${r} MONLoG</span></div><div class="s3-pb"><i style="width:${rm/n*100}%"></i></div><div class="s3-gf mono"><span>${rm} / ${n}</span><span>${fmt(S.g[k])} cette période</span></div></div>`}).join('');
 const txRows=a=>a.map(t=>{const ng=t[2][0]=='\u2212';return `<div class="li"><span class="wl-ic" style="--c:${ng?'#E02020':'#1D4ED8'}">${ic(ng?'wal':'coin',18)}</span><div class="fl"><b>${t[0]}</b>${sub(t[1])}</div><b class="mono" style="color:var(${ng?'--red':'--g'})">${t[2]}</b></div>`}).join('');
 window.UJSOL={gainsB,bonB,txRows,ux,rowx,ringF};
 const hide=!!S.hide,MASK='\u2022\u2022\u2022\u2022',fx=n=>{const p=n.toFixed(2).split('.');return fmt(p[0])+','+p[1]};
 const pct=Math.min(100,Math.round(S.td/CAP*100)),dash=(pct/100*113.1).toFixed(1);
 const ring=`<span class="s3-rg"><svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18"/><circle class="v" cx="22" cy="22" r="18" stroke-dasharray="${dash} 113.1"/></svg><span>${pct}%</span></span>`;
 const kind=t=>t[2][0]=='\u2212'?'out':/connexion|bonus/i.test(t[0]+t[1])?'gift':/interaction|vues/i.test(t[1])?'heart':'bolt';
 const rows=S.tx.slice(0,3).map(t=>{const ng=t[2][0]=='\u2212';return `<div class="s3-tr"><span class="s3-ib">${ux(kind(t),20)}</span><div class="fl"><b>${t[0]}</b><small>${t[1]}</small></div><em${ng?' class="ng"':''}>${t[2].replace(' MONLoG','')}</em></div>`}).join('')||'<p class="s3-no">Aucune transaction pour le moment.</p>';
 const cdt=hint;
 {const hh=document.querySelector('#mmp-sol .mmh');if(hh){let g=hh.querySelector('.s3-gift');if(!g){g=document.createElement('button');g.type='button';g.className='s3-gift';g.dataset.ac='go:sol|Boîte cadeau';hh.appendChild(g)}const gu=!!(window.UJGIFT&&!UJGIFT.state().open),n=S.pend.length+(gu?1:0);g.dataset.ac=gu?'gopen':'go:sol|Boîte cadeau';g.classList.toggle('has',n>0);g.setAttribute('aria-label',n?'Boîte cadeau : '+n+(n>1?' récompenses':' récompense')+' à récupérer':'Boîte cadeau : rien à récupérer');g.innerHTML=`<svg aria-hidden="true"><use href="#ux-giftbox"/></svg>`+(n?`<b>${n}</b>`:'')}}
 
 el.innerHTML=`<div class="s3-top"><div class="s3-lab"><span>Mon solde</span><button type="button" class="s3-eye" data-ac="eye" aria-pressed="${hide}" aria-label="${hide?'Afficher':'Masquer'} le solde">${ux('eye',20)}</button></div><div class="s3-nn mono"><svg class="s3-cn s3-cnb" aria-hidden="true"><use href="#ux-coin"/></svg><span${hide?'':' data-coins'}>${hide?MASK:fmt(S._shown||0)}</span><small>MONLoG</small></div><span class="s3-dl">+${S.td} aujourd\u2019hui</span></div>`+
 `<div class="s3-qa"><button type="button" class="p" data-ac="go:sol|Gagner aujourd’hui"><i>${ux('bolt')}</i>Gagner</button><button type="button" data-ac="go:sol|Mes interactions"><i>${ux('heart')}</i>Interactions</button><button type="button" class="${(window.UJGIFT&&UJGIFT.state&&!UJGIFT.state().open)?'s3n':''}" data-ac="go:sol|Cadeaux"><i>${ux('gift')}</i>Cadeaux</button><button type="button" data-ac="go:sol|Historique"><i>${ux('receipt')}</i>Historique</button></div>`+
 `<div class="s3-sec">Aujourd\u2019hui</div><button type="button" class="s3-cd" data-ac="go:sol|Gagner aujourd\u2019hui">${ring}<div class="fl"><b>${S.td} sur ${CAP} MONLoG</b><small>${cdt}</small></div>${ux('chv',18)}</button>`+
 `<div class="s3-sec">Transactions<button type="button" data-ac="go:sol|Historique">Tout voir</button></div><div>${rows}</div>`+
 `<p class="s3-foot"><button type="button" data-ac="go:sol|Gains">${ux('shield',16)}Comment \u00e7a marche</button><small>S\u00e9curis\u00e9 par My UJLoG</small></p>`;
 const nE=el.querySelector('[data-coins]');if(nE){const to=S.pc,from=S._shown||0;S._shown=to;const my=S._tk=(S._tk||0)+1;if(from==to||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){nE.textContent=fmt(to)}else{const t0=performance.now(),tick=t=>{if(my!==S._tk)return;const k=Math.min(1,(t-t0)/900),e=1-Math.pow(1-k,3);nE.textContent=fmt(Math.round(from+(to-from)*e));if(k<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}}};
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.pcw');if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--ry',(x*12)+'deg');c.style.setProperty('--rx',(-y*12)+'deg');c.style.setProperty('--gx',(x*100+50)+'%');c.style.setProperty('--gy',(y*100+50)+'%')});
document.addEventListener('click',e=>{const w=e.target.closest&&e.target.closest('.pcw');if(!w)return;S.flip=!S.flip;w.classList.toggle('flip',S.flip)});
['pointerup','pointerleave','pointercancel'].forEach(ev=>document.addEventListener(ev,()=>{document.querySelectorAll('.pcw').forEach(c=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})},true));
const renderSol=()=>{renderSol0();if(cur&&/^sol\|/.test(cur.key)&&CFG[cur.key]&&document.getElementById('mxb0'))render()};
const EARN={photo:['photo','Publier une photo','1 fois par jour maximum',2,'cam'],act:['act','Participer à une activité','Sondage, quiz, vote…',2,'vote'],streak:['streak','Série de 7 jours','7 jours de connexion d’affilée',10,'cal']};
CFG['sol|Gagner aujourd’hui']=()=>{const U=UJSOL,n=S.pend.length;return{t:'Gagner aujourd’hui',h:`<div class="s3-cd" style="cursor:default">${U.ringF(S.td/CAP)}<div class="fl"><b>${S.td} sur ${CAP} MONLoG</b><small>Gagnés aujourd’hui · plafond du jour</small></div></div>`+(n?`<button type="button" class="s3-cd" data-ac="go:sol|Boîte cadeau" style="margin-top:10px"><svg class="s3-gmini" aria-hidden="true"><use href="#ux-giftbox"/></svg><div class="fl"><b>${n} ${n>1?'récompenses t’attendent':'récompense t’attend'}</b><small>À récupérer dans la boîte cadeau</small></div>${U.ux('chv',18)}</button>`:'')+U.bonB()}};
CFG['sol|Mes interactions']=()=>({t:'Mes interactions',h:`<div class="s3-two"><div><span class="s3-ib">${UJSOL.ux('heart',20)}</span><b class="mono">${fmt(S.g.i)}</b><small>Interactions</small></div><div><span class="s3-ib">${UJSOL.ux('users',20)}</span><b class="mono">${fmt(S.g.f)}</b><small>Nouveaux abonnés</small></div></div>`+UJSOL.gainsB()});
CFG['sol|Boîte cadeau']=()=>{const U=UJSOL,P=S.pend,tot=P.reduce((a,p)=>a+p[3],0);const head=`<div class="s3-gb"><svg class="s3-gbi" aria-hidden="true"><use href="#ux-giftbox"/></svg><b>${P.length?P.length+(P.length>1?' récompenses':' récompense')+' à récupérer':'Boîte vide pour le moment'}</b>${P.length?`<span>+${tot} MONLoG</span>`:`<small>Reviens demain pour le prochain bonus</small>`}</div>`;
 if(!P.length)return{t:'Boîte cadeau',h:head+`<p class="s3-no" style="text-align:center">Tes récompenses du jour arrivent ici. Tu n’as plus qu’à appuyer sur « Récupérer ».</p>`};
 return{t:'Boîte cadeau',h:head+`<div>${P.map(p=>U.rowx(p[4]||'gift',p[1],p[2],`<span class="s3-st">+${p[3]}</span>`)).join('')}</div>`+H.btn('Récupérer tout · +'+tot+' MONLoG','claim')}};

const GF=[['Cadeau de bienvenue','Ton premier cadeau pour bien démarrer.','G',20],['Quiz express','3 questions sur le campus.','G',10],['Roue de la chance','Tourne la roue et tente ta chance.','C',20],['Carte à gratter','Gratte la carte pour découvrir ton gain.','C',10],['Boîte mystère','Ouvre la boîte, le contenu est une surprise.','C',50],['Ta 1re publication','Publie ton premier message sur le campus.','G',20],['Pile ou face','Choisis ton côté et lance la pièce.','C',10],['Série de 7 jours','7 jours d’affilée : ta fidélité est récompensée.','G',30],['Jeu de mémoire','Retrouve toutes les paires.','G',20],['Trois coffres','Trois coffres, un seul est gagnant.','C',100],['Devine le chiffre','Trouve le chiffre grâce aux indices « plus » ou « moins ».','C',10],['Commente 3 publications','Commente 3 publications du campus.','G',20],['Dés magiques','Lance les dés : un double gagne.','C',10],['Roue de l’explorateur','Tourne la roue de l’explorateur.','C',50],['Méga roue de mi-mois','La grande roue, avec de plus gros lots.','C',200],['Question mystère','Réponds à la question cachée derrière le point d’interrogation.','C',10],['Invite un ami','Invite un ami à rejoindre UJLoG.','G',20],['Ballons à éclater','Éclate un maximum de ballons en 10 secondes.','G',10],['Vrai ou faux','Réponds juste 5 fois d’affilée.','C',30],['Duel de cartes','Bats la banque au tirage de cartes.','C',100],['Quiz du campus','Une question sur ta ville et ton pays.','C',10],['Défi photo','Prends en photo un lieu du campus.','G',20],['Cadeau surprise','Ouvre le cadeau surprise du jour.','G',10],['Quiz chrono','Réponds vite, chaque seconde compte.','C',50],['Machine à sous','Aligne trois symboles identiques.','C',20],['Tir au but','Choisis ton coin et tire.','C',10],['Série de 21 jours','21 jours d’affilée : bravo pour ta régularité.','G',30],['Tombola du campus','Ton ticket participe au tirage du campus.','C',100],['Super coffre','Un coffre très rare, avec un énorme lot.','C',500],['Méga boîte mystère','La boîte finale du mois. Le plus gros lot est caché dedans.','C',3000]];
const GCAP=5000,GBON=500;
if(!S.gf)S.gf={d:{},m:0,o:0,b:0,s:Date.now()};
const gi=()=>Math.max(1,Math.min(30,Math.floor((Date.now()-S.gf.s)/864e5)+1+(S.gf.o||0)));
const gdraw=n=>{const g=GF[n-1],mx=g[3];let v=0;if(n==30){const r=Math.random();v=r<.001?5000:(r<.5?Math.round(5+Math.random()**2*95):0)}else if(n==29){v=Math.random()<.1?Math.round(100+Math.random()*400):0}else if(g[2]=='G')v=Math.max(2,Math.round(mx*(.2+.8*Math.random()**2)));else v=Math.random()<.55?Math.max(2,Math.round(mx*(.1+.9*Math.random()**2.5))):0;return v};
window.__UJS=S;window.UJGIFT={bal:()=>S.pc,gbal:()=>S.gw||0,conv:(n,l)=>{n=Math.floor(+n);if(!(n>0))return false;S.pc+=n;S._burst=1;S.tx.unshift(['Conversion de cadeau',(l||'Cadeau')+' · commission 15 %','+'+fmt(n)+' MONLoG','coin']);try{renderSol()}catch(e){}return{main:S.pc}},gload:()=>{let v=window.UJGIFT.store;if(v==null)try{v=localStorage.getItem('ujGiftStore')}catch(e){}return v||null},gsave:v=>{window.UJGIFT.store=v;try{localStorage.setItem('ujGiftStore',v)}catch(e){}},gspend:(n,l)=>{if(!(n>0)||(S.gw||0)<n)return false;S.gw-=n;return true},gcredit:(n,l)=>{if(!(n>0))return false;S.gw=(S.gw||0)+n;return true},topup:n=>{n=Math.floor(+n);if(!(n>0)||S.pc<n)return false;S.pc-=n;S.gw=(S.gw||0)+n;S.tx.unshift(['Recharge UJCadeau','Vers ton solde cadeau','\u2212'+fmt(n)+' MONLoG','coin']);try{renderSol()}catch(e){}return{main:S.pc,gift:S.gw}},spend:(n,l)=>{if(!(n>0)||S.pc<n)return false;S.pc-=n;S.tx.unshift(['Achat de cadeau',l||'Cadeau','-'+n+' MONLoG','coin']);try{renderSol()}catch(e){}return true},state:()=>{const n=gi();return{n:n,name:GF[n-1][0],open:S.gf.d[n]!=null,won:S.gf.d[n]||0,bal:S.pc,m:S.gf.m,done:Object.keys(S.gf.d).length}}};
const GK=['box','quiz','luck','luck','box','cam','luck','day','quiz','box','luck','soc','luck','luck','luck','quiz','soc','quiz','quiz','luck','quiz','cam','box','quiz','luck','luck','day','luck','box','box'];
const GIC={box:'giftbox',luck:'coin',quiz:'bolt',soc:'users',cam:'cam',day:'cal'};
const GKL={box:'Surprise',luck:'Chance',quiz:'Défi',soc:'Communauté',cam:'Photo',day:'Fidélité'};
CFG['sol|Cadeaux']=()=>{const uxx=(a,b)=>window.UJSOL.ux(a,b);const G=S.gf,n=gi(),done=Object.keys(G.d).length,g=GF[n-1],open=G.d[n]!=null,won=G.d[n]||0;
 const pct=Math.round(done/30*100),mp=Math.min(100,Math.round(G.m/GCAP*100)),k=GK[n-1];
 const hero=`<div class="gf-h2"><div class="gf-ht"><span class="gf-day"><small>Jour</small><b>${n}</b><em>sur 30</em></span><div class="fl"><span class="gf-tag">${uxx(GIC[k],14)}${GKL[k]} · ${g[2]=='G'?'Gain garanti':'Jeu de chance'}</span><b class="gf-nm">${g[0]}</b><span class="gf-ds">${g[1]}</span></div><svg class="gf-hi" aria-hidden="true"><use href="#ux-giftbox"/></svg></div>`+
  (open?`<div class="gf-res ${won>0?'w':'l'}"><span>${won>0?'+'+won:'0'}</span><div><b>${won>0?'Bravo, cadeau ouvert !':'Pas de gain aujourd’hui'}</b><small>${won>0?'Ajouté à ton solde MONLoG. ':''}Reviens demain pour le jour ${Math.min(30,n+1)}.</small></div></div>`:
  `<div class="gf-up"><span>À gagner aujourd’hui</span><b>jusqu’à ${fmt(g[3])} MONLoG</b></div><button type="button" class="gf-cta" data-ac="gopen">${uxx('giftbox',24)}Ouvrir mon cadeau</button>`)+`</div>`;
 const stats=`<div class="gf-st"><div><b>${done}<i>/30</i></b><small>Cadeaux ouverts</small></div><div><b>${fmt(G.m)}</b><small>MONLoG gagnés</small></div><div><b>${fmt(S.pc)}</b><small>Mon solde</small></div></div>`+
  `<div class="gf-pg"><div class="gf-pgh"><span>Plafond du mois</span><b>${fmt(G.m)} / ${fmt(GCAP)}</b></div><div class="gf-bar"><i style="width:${mp}%"></i></div><div class="gf-pgh"><small>Série du mois : ${pct} %</small><small>Bonus ${GBON} MONLoG si tu ouvres les 30</small></div></div>`;
 const hunt=`<button type="button" class="gf-hunt" data-ac="ghunt"><span class="gf-hi2"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9V5a2 2 0 0 1 2-2h4M15 3h4a2 2 0 0 1 2 2v4M21 15v4a2 2 0 0 1-2 2h-4M9 21H5a2 2 0 0 1-2-2v-4"/><path d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM14 14h2v2h-2z"/></svg></span><div class="fl"><b>Chasse au trésor</b><small>Scanne un QR code caché sur le campus</small></div>${uxx('chv',18)}</button>`;
 const cell=j=>{const v=G.d[j],x=GF[j-1],cl=v!=null?(v>0?'w':'l'):j==n?'t':j<n?'x':'f',sp=(j==15||j==29||j==30)?' s':'';
  return `<span class="gf-c ${cl}${sp}" title="Jour ${j} · ${x[0]}"><i>${j}</i><span class="gf-ci">${uxx(GIC[GK[j-1]],17)}</span><em>${v!=null?(v>0?'+'+v:'0'):(j==n?'À ouvrir':'')}</em></span>`};
 const W=[[1,7],[8,14],[15,21],[22,28],[29,30]];
 const grid=W.map(([a,b],wi)=>{let c='';for(let j=a;j<=b;j++)c+=cell(j);const wd=Object.keys(G.d).filter(d=>d>=a&&d<=b).length;
  return `<div class="gf-wk"><div class="gf-wh"><b>Semaine ${wi+1}</b><small>${wd}/${b-a+1} ouverts</small></div><div class="gf-g2">${c}</div></div>`}).join('');
 const leg=`<div class="gf-lg"><span><i class="w"></i>Gagné</span><span><i class="l"></i>Sans gain</span><span><i class="t"></i>Aujourd’hui</span><span><i class="s"></i>Gros lot</span></div>`;
 const nx=[1,2,3].map(d=>n+d).filter(j=>j<=30).map(j=>{const x=GF[j-1];return `<div class="s3-ro"><span class="s3-ib">${uxx(GIC[GK[j-1]],20)}</span><div class="fl"><b>${x[0]}</b><small>Jour ${j} · ${x[2]=='G'?'Gain garanti':'Jeu de chance'}</small></div><span class="s3-st">${fmt(x[3])} max</span></div>`}).join('');
 return{t:'Cadeaux du mois',h:hero+stats+hunt+`<div class="s3-sec">Mon calendrier<small class="s3-mu">1 cadeau par jour</small></div>`+grid+leg+(nx?`<div class="s3-sec">Prochains cadeaux</div><div>${nx}</div>`:'')+H.note('Ces gains ne comptent pas dans le plafond de '+CAP+' MONLoG par jour.')}};
CFG['sol|Historique']=()=>({t:'Transactions',h:S.tx.length?H.card([UJSOL.txRows(S.tx)]):H.empty('wal','Aucune transaction','Tes gains appara\u00eetront ici.')});
/* Guides façon centre d’aide : aperçu, rubriques, articles rédigés */
const GD={
 h:t=>`<h3 style="font:800 17px var(--h);margin:20px 0 4px">${t}</h3>`,
 p:t=>`<p style="font-size:15px;line-height:1.55;margin:6px 0">${t}</p>`,
 n:t=>`<p class="mu" style="font-size:13px;line-height:1.5;margin:8px 0">${t}</p>`,
 ul:a=>`<ul style="margin:6px 0 6px 20px;padding:0;list-style:disc;font-size:15px;line-height:1.55">${a.map(x=>`<li style="margin:5px 0">${x}</li>`).join('')}</ul>`,
 ol:a=>`<ol style="margin:6px 0 6px 20px;padding:0;list-style:decimal;font-size:15px;line-height:1.55">${a.map(x=>`<li style="margin:5px 0">${x}</li>`).join('')}</ol>`,
 tb:r=>`<div style="margin:8px 0">${r.map(([a,b])=>`<div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid var(--ln);font-size:15px"><span>${a}</span><b class="mono" style="text-align:right">${b}</b></div>`).join('')}</div>`,
 qa:r=>`<div style="margin:8px -14px 0">${H.card(r.map(x=>H.det(...x)))}</div>`,
 df:r=>`<div style="margin:8px 0">${r.map(([a,b])=>`<div style="padding:11px 0;border-top:1px solid var(--ln)"><b style="font-size:15px">${a}</b><p class="mu" style="font-size:14px;line-height:1.5;margin-top:3px">${b}</p></div>`).join('')}</div>`,
 ln:(t,k)=>`<button type="button" class="btn s" data-ac="${k.startsWith('say:')?k:'dlink:'+k}" style="margin-top:10px">${t}</button>`
};
const GART=b=>b.map(x=>x[0]=='ln'?GD.ln(x[1],x[2]):GD[x[0]](x[1])).join('');
const mkGuide=(pre,hub,lead,facts,list)=>{
 const row=(x,a)=>`<button type="button" class="li" data-ac="dart:${pre}|${x.t}" style="width:100%;text-align:left">${ic(x.i,22)}<div class="fl"><b>${a||x.t}</b>${sub(x.s)}</div>${ic('chv',18)}</button>`;
 list.forEach((x,i)=>{CFG[pre+'|'+x.t]=()=>{const nx=list[i+1];return{t:hub,h:
  `<div class="card pad"><b style="font:800 22px/1.2 var(--h);display:block">${x.t}</b>${GART(x.b)}</div>`+
  (nx?H.sec('À lire ensuite')+H.card([row(nx)]):'')+
  (x.nf?'':fbBox())}}});
 return()=>{S.dh=[cur.key,cur.origin];return{t:hub,h:
  H.sec('Aperçu')+`<div class="card pad"><b style="font:800 20px/1.2 var(--h);display:block">${lead[0]}</b>${GD.p(lead[1])}</div>`+
  (facts?H.stats(facts):'')+
  H.sec('Rubriques')+H.card(list.map(x=>row(x)))+
  H.note('Dernière mise à jour : 8 novembre 2026')}}};

/* ===== Écran Solde : uniquement le MONLoG ===== */
CFG['sol|Gains']=mkGuide('sol','Comment ça marche',
 ['Tout comprendre sur le MONLoG','Le MONLoG récompense ton activité sur My UJLoG. Tu en gagnes en publiant, en échangeant et en ouvrant ton cadeau du jour, puis tu l’utilises pour offrir des cadeaux à tes camarades.'],
 [[CAP,'MONLoG max par jour'],['1','cadeau par jour'],['30','jours de cadeaux']],
 [
 {t:'Qu’est-ce que le MONLoG ?',i:'coin',s:'La monnaie de la communauté My UJLoG',b:[
  ['p','Le MONLoG est la monnaie de la communauté My UJLoG. Il récompense les étudiants actifs : tu en gagnes quand tu publies, quand ton activité intéresse tes camarades et quand tu participes à la vie de l’application.'],
  ['h','Un solde qui reste dans l’application'],
  ['p','Tes MONLoG s’accumulent sur ton écran Solde. Tu les utilises pour offrir des cadeaux à tes camarades.'],
  ['h','Où voir ton solde ?'],
  ['p','Ouvre le menu, rubrique Ressources, puis touche Solde. Tu y retrouves ton total, ta progression du jour, ta boîte cadeau et tes dernières transactions.']]},
 {t:'Comment gagner des MONLoG',i:'hrt',s:'Gains automatiques et bonus du jour',b:[
  ['p','Il y a trois façons de gagner des MONLoG : automatiquement, grâce à ton activité, avec les bonus du jour et avec ton cadeau du jour.'],
  ['h','Les gains automatiques'],
  ['ul',['Chaque tranche de 100 interactions : +10 MONLoG.','Chaque tranche de 50 nouveaux abonnés actifs : +25 MONLoG.']],
  ['p','Ils arrivent seuls dès qu’un palier est atteint. Tu retrouves chaque gain dans tes transactions, et le détail de ton activité dans Mes interactions.'],
  ['h','Les bonus'],
  ['tb',[['Connexion du jour','+1 MONLoG'],['Série de 7 jours','+10 MONLoG'],['Publier une photo','+2 MONLoG'],['Participer à une activité','+2 MONLoG'],['Inviter un ami','+50 MONLoG'],['Faire vérifier ton profil','+50 MONLoG']]],
  ['ul',['La connexion du jour compte une fois par jour.','Le bonus photo compte pour une photo par jour au maximum.','Une activité, c’est un sondage, un quiz, un vote…','Inviter un ami rapporte quand il a fait vérifier son profil.','La vérification de ton profil rapporte une seule fois.']],
  ['h','Récupérer tes bonus'],
  ['p','Les bonus arrivent dans la boîte cadeau, en haut de l’écran Solde. Touche « Récupérer » pour les ajouter à ton solde.']]},
 {t:'Les cadeaux du jour',i:'star',s:'Un cadeau à ouvrir chaque jour',b:[
  ['p','Chaque jour, un nouveau cadeau t’attend. Ouvre-le depuis l’icône de boîte cadeau de l’écran Solde ou depuis la rubrique Cadeaux : une boîte à ouvrir, une roue, une carte à gratter, un quiz…'],
  ['h','Sur 30 jours'],
  ['ul',['Un cadeau par jour, du jour 1 au jour 30.','Certains cadeaux garantissent un gain, d’autres reposent sur la chance.','Un plafond de 5 000 MONLoG par mois s’applique aux cadeaux du jour.','Ouvre les 30 cadeaux pour tenter le bonus de 500 MONLoG, dans la limite du plafond du mois.']],
  ['h','La chasse au trésor'],
  ['p','Un QR code est caché sur le campus : le scanner rapporte 10 000 MONLoG. Il n’y en a que 2 par mois et chacun ne peut être scanné qu’une seule fois.'],
  ['n','Les gains des cadeaux ne comptent pas dans le plafond du jour.']]},
 {t:'Le plafond du jour',i:'clk',s:`${CAP} MONLoG maximum par jour`,b:[
  ['p',`Pour que les gains restent justes pour tous, tu peux en gagner au maximum ${CAP} par jour grâce à ton activité et aux bonus.`],
  ['h','Quand tu atteins le plafond'],
  ['p','Tu ne gagnes plus de MONLoG pour le reste de la journée. Les récompenses qui dépassent le plafond restent dans ta boîte cadeau.'],
  ['h','Suivre ta progression'],
  ['p','Le cercle de l’écran Solde montre la part du plafond que tu as déjà gagnée aujourd’hui. La page « Gagner aujourd’hui » détaille ce qu’il te reste à récupérer.'],
  ['n','Reviens le lendemain pour le prochain bonus.']]},
 {t:'Ta confidentialité sur le MONLoG',i:'shd',s:'Ce qui est utilisé, visible et sous ton contrôle',b:[
  ['p','Ton solde et tes transactions sont personnels. Cet article explique quelles informations le MONLoG utilise, à quoi elles servent et ce que tu peux contrôler.'],
  ['h','Ce qui est visible'],
  ['p','Ton solde et ton historique s’affichent uniquement dans ton écran Solde. Tu peux masquer ton solde à tout moment avec l’icône œil.'],
  ['h','Les informations utilisées'],
  ['ul',['Ton activité : les interactions et les nouveaux abonnés comptés pour les gains automatiques.','Tes connexions : pour le bonus du jour et la série de 7 jours.','Tes transactions : tes gains, pour afficher ton historique.']],
  ['h','À quoi elles servent'],
  ['p','Ces informations servent à calculer tes gains et à écarter l’activité artificielle. Comme le reste de tes données, elles servent uniquement au fonctionnement de l’application.'],
  ['h','Ce que tu contrôles'],
  ['ul',['Masquer ou afficher ton solde.','Demander l’export ou la suppression de tes données depuis le Centre de confidentialité du menu.']]]},
 {t:'Sécurité et gains authentiques',i:'shd',s:'Comment le MONLoG est protégé',b:[
  ['p','Les MONLoG sont protégés contre les abus pour que les gains restent justes pour tous.'],
  ['h','Des gains authentiques'],
  ['p','Les gains dépendent d’une activité authentique. Les vues et les interactions artificielles sont écartées.'],
  ['h','Des garde-fous'],
  ['ul',[`Un plafond de ${CAP} MONLoG par jour.`,'Des paliers exigeants pour les gains automatiques.','Un plafond mensuel sur les cadeaux du jour.']],
  ['h','Bonnes pratiques'],
  ['ul',['Ne partage jamais ton mot de passe ni tes codes de vérification.','Ne partage jamais tes identifiants avec quelqu’un qui te promet des MONLoG.','En cas de doute, écris à l’assistance depuis le Centre d’aide.']]]},
 {t:'Questions fréquentes',i:'pho',s:'Les réponses aux questions les plus posées',b:[
  ['qa',[
   ['Quand reçois-je mes MONLoG ?','Les gains automatiques arrivent seuls dès qu’un palier est atteint. Les bonus se récupèrent en un geste dans la boîte cadeau, en haut de l’écran Solde.'],
   ['Comment ouvrir mon cadeau du jour ?','Touche la boîte cadeau en haut de l’écran Solde, ou ouvre la rubrique Cadeaux. Un nouveau cadeau t’attend chaque jour.'],
   ['Que se passe-t-il au plafond du jour ?','Tu ne gagnes plus de MONLoG pour la journée. Les récompenses qui dépassent le plafond restent dans la boîte cadeau.'],
   ['Pourquoi si peu de MONLoG ?',`Les paliers sont exigeants et le plafond de ${CAP} MONLoG par jour protège contre les abus, pour que les gains restent justes.`],
   ['Les gains sont-ils garantis ?','Ils dépendent d’une activité authentique : les vues et interactions artificielles sont écartées.'],
   ['Où retrouver mes gains ?','Dans l’écran Solde, rubrique Transactions. Touche « Tout voir » pour l’historique complet.']]]]}
 ]);

/* ===== Menu : guide de l’application My UJLoG ===== */
const APPGUIDE=mkGuide('app','Comment ça marche',
 ['Bienvenue sur My UJLoG','My UJLoG est l’application de la communauté étudiante : tu y publies, tu suis tes camarades, tu retrouves ton emploi du temps, tes démarches et tous les services du campus. Ce guide explique comment fonctionnent ton compte, ta confidentialité et l’apparence de l’application.'],
 null,
 [
 {t:'Premiers pas avec My UJLoG',i:'home',s:'Les onglets et où trouver chaque réglage',b:[
  ['p','My UJLoG réunit la vie de ton campus au même endroit. Une barre en bas de l’écran te donne accès à quatre onglets.'],
  ['h','Les quatre onglets'],
  ['ul',['Accueil : les publications et les stories de ta communauté.','Mon campus : ton emploi du temps et tes outils d’étudiant.','Mon guide : tes espaces (logement, restauration, bourses…) et leurs échéances.','Profil : tes publications, ton menu et tes réglages.']],
  ['h','Le menu'],
  ['p','Le menu réunit tout ce qui t’appartient : ton code QR, la modification de ton profil, tes réglages de confidentialité et l’aide, au même endroit et à deux touches de ton écran d’accueil.'],
  ['h','Où trouver quoi'],
  ['ul',['Tes réglages de confidentialité : menu, Paramètres, Centre de confidentialité.','Le mode sombre : menu, Paramètres.','L’aide : menu, Paramètres, Centre d’aide.']]]},
 {t:'Compte et authentification',i:'usr',s:'Connexion, vérification du profil et sécurité',b:[
  ['p','Ton compte est lié à ton UJ-ID. Cet article explique comment te connecter, prouver que tu es étudiant et protéger ton accès.'],
  ['h','Te connecter'],
  ['ol',['Saisis ton UJ-ID (par exemple UJ-AGRO-26-ZDA : UFR, année, initiales).','Entre ton mot de passe.','Si tu l’as oublié, touche « Mot de passe oublié » : un lien est envoyé à ton adresse e-mail.']],
  ['h','Changer de compte ou te déconnecter'],
  ['p','Tu peux ajouter un autre compte depuis « Changer de compte » et passer de l’un à l’autre. Se déconnecter ferme ta session sur cet appareil ; tu pourras te reconnecter à tout moment avec ton UJ-ID.'],
  ['h','Faire vérifier ton profil'],
  ['p','La vérification confirme que tu es bien étudiant et débloque ton badge certifié. Elle se fait en quatre étapes :'],
  ['ol',['Préinscription : remplis le formulaire à 100 %.','Carte étudiante : scanne le recto et le verso.','Visage : authentification par le visage.','Empreinte digitale : facultatif, si ton téléphone le permet.']],
  ['ln','Faire vérifier mon profil','prof|Faire vérifier mon profil'],
  ['h','Protéger ton compte'],
  ['ul',['Verrouillage biométrique : ouvre l’application avec ton empreinte ou ton visage. Il est désactivé par défaut.','Alertes de connexion : tu es prévenu quand une connexion inconnue est détectée. Elles sont activées par défaut.','Appareils connectés : tu vois où ton compte est ouvert et tu peux déconnecter un appareil.']],
  ['ln','Ouvrir Sécurité et autorisations','set|Sécurité et autorisations']]},
 {t:'Confidentialité',i:'shd',s:'Qui voit tes publications et comment te contacter',b:[
  ['p','Tu décides qui voit ce que tu partages et qui peut entrer en contact avec toi. Les réglages se trouvent dans le Centre de confidentialité et dans Paramètres et confidentialité.'],
  ['h','Qui voit tes publications'],
  ['ul',['Compte privé : seuls tes abonnés voient tes publications. Il est désactivé par défaut.','Audience par défaut : Public, Mes followers ou Privé. Par défaut, tes publications sont publiques.','Liste de suivis et photos aimées : visibles par toi uniquement, par tes abonnés ou par tout le monde. Par défaut, toi uniquement.']],
  ['h','Qui peut te contacter'],
  ['ul',['Messages directs : tout le monde, tes abonnés ou personne. Par défaut, tes abonnés.','Commentaires : choisis qui peut commenter tes publications. Par défaut, tout le monde.','Mentions : choisis qui peut te mentionner. Par défaut, tout le monde.','Comptes bloqués : un compte bloqué ne peut ni te suivre ni voir tes publications.']],
  ['h','Vues et réutilisation'],
  ['ul',['Vues : tu peux voir qui a consulté ton profil, et les autres voient aussi quand tu les consultes.','Republication, partage en story et téléchargement : tu autorises ou non chacun d’eux pour tes publications.']],
  ['h','Tes données'],
  ['ul',['Contacts et localisation : désactivés par défaut. Tu choisis ce que tu partages.','Contenus sensibles : masqués par défaut.','Publicités personnalisées : désactivées par défaut.','Export : demande une archive de tes publications et informations, envoyée par e-mail.']],
  ['p','Tes données servent uniquement au fonctionnement de l’application. Tu peux demander leur export ou leur suppression depuis le Centre de confidentialité.'],
  ['ln','Ouvrir le Centre de confidentialité','set|Centre de confidentialité'],
  ['ln','Lire les conditions et politiques','set|Conditions et politiques']]},
 {t:'Thèmes et apparence',i:'gear',s:'Mode clair, mode sombre et confort de lecture',b:[
  ['p','My UJLoG propose un thème clair et un thème sombre.'],
  ['h','Choisir ton thème'],
  ['ol',['Ouvre le menu.','Dans Paramètres, active ou coupe Mode sombre.','Le changement s’applique tout de suite à tous les écrans.']],
  ['p','Au premier lancement, l’application suit le réglage de ton téléphone. Ensuite, ton choix est mémorisé sur cet appareil.'],
  ['h','Thème clair et thème sombre'],
  ['ul',['Le thème clair utilise des fonds clairs.','Le thème sombre utilise un fond noir, plus reposant le soir.']],
  ['p','Seules les couleurs de l’interface changent : tes publications restent identiques.'],
  ['h','Confort de lecture'],
  ['ul',['Texte plus grand, Contraste élevé et Réduire les animations : dans Accessibilité.','Langue : Français ou English.','Économiseur de données : réduit la qualité des vidéos et désactive la lecture automatique.','Lecture : lecture automatique des vidéos, sous-titres et son par défaut.']],
  ['ln','Ouvrir Accessibilité','set|Accessibilité']]},
 {t:'Questions fréquentes',i:'pho',s:'Les réponses aux questions les plus posées',b:[
  ['qa',[
   ['Comment récupérer mon compte ?','Sur l’écran de connexion, touche « Mot de passe oublié » : un lien est envoyé à ton adresse e-mail.'],
   ['Comment faire vérifier mon profil ?','Ouvre Paramètres du profil puis « Faire vérifier mon profil » : préinscription, scan de la carte étudiante et authentification par le visage.'],
   ['Que faire si je vois une connexion inconnue ?','Si les alertes de connexion sont activées, tu es prévenu. Déconnecte ensuite l’appareil concerné depuis Sécurité et autorisations.'],
   ['Qui voit mes publications ?','Par défaut, tout le monde. Avec un compte privé, seuls tes abonnés les voient. Tu peux aussi choisir une audience par défaut.'],
   ['Que fait le blocage d’un compte ?','Un compte bloqué ne peut ni te suivre ni voir tes publications. Tu retrouves la liste dans Comptes bloqués.'],
   ['Puis-je récupérer mes données ?','Oui. Depuis le Centre de confidentialité, demande un export : un lien est envoyé à ton adresse e-mail.'],
   ['Mon thème a changé tout seul, pourquoi ?','Tant que tu n’as pas choisi, l’application suit le réglage clair ou sombre de ton téléphone. Active ou coupe le Mode sombre pour fixer ton choix.'],
   ['Comment signaler un contenu ?','Touche les trois points sur la publication, puis « Signaler » et choisis un motif.']]],
  ['ln','Contacter l’assistance','set|Contacter l’assistance']]}
 ]);
CFG['home|Comment ça marche']=APPGUIDE;CFG['set|Comment ça marche']=APPGUIDE;
/* ===== Menu : Conditions et politiques (même présentation que les guides) ===== */
const LEGAL=mkGuide('jur','Conditions et politiques',
 ['Les règles de My UJLoG','Ces textes expliquent ce que tu peux faire sur My UJLoG, comment tes données sont traitées et comment la communauté reste respectueuse. Choisis une rubrique pour la lire en entier.'],
 null,
 [
 {t:'Conditions d’utilisation',i:'doc',s:'Ce que tu acceptes en utilisant l’application',b:[
  ['p','En utilisant My UJLoG, tu acceptes ces conditions. Elles s’appliquent à tous les étudiants et au personnel qui utilisent l’application.'],
  ['h','Qui peut utiliser My UJLoG'],
  ['p','My UJLoG est destinée à la communauté de l’université : étudiants et personnel. Ton compte est lié à ton UJ-ID et reste personnel.'],
  ['h','Ton compte'],
  ['ul',['Tu es responsable de ton compte et de ce qui s’y passe.','Ne partage pas ton mot de passe.','Un compte est personnel : une personne, un compte.','Si tu vois une connexion inconnue, déconnecte l’appareil concerné.']],
  ['h','Tes publications'],
  ['p','Tu ne publies que des contenus dont tu es l’auteur ou dont tu as les droits. Tu restes responsable de ce que tu publies, et tu choisis qui peut le voir grâce à l’audience de tes publications.'],
  ['h','Ce que tu t’engages à faire'],
  ['ul',['Respecter les autres étudiants et le personnel.','Ne pas usurper l’identité d’une autre personne.','Ne pas publier de contenu violent, discriminatoire ou de harcèlement.','Ne pas gonfler artificiellement tes vues, tes mentions J’aime ou tes abonnés.']],
  ['h','Une communauté authentique'],
  ['p','My UJLoG vit grâce à des échanges sincères entre étudiants. Publie ce que tu as vraiment envie de partager : les vues et les abonnés viendront naturellement.'],
  ['h','Si les conditions ne sont pas respectées'],
  ['p','L’équipe de modération peut retirer un contenu, limiter une fonction ou suspendre un compte.'],
  ['h','Modifications'],
  ['p','Ces conditions peuvent évoluer. La date de dernière mise à jour est indiquée sur la page des rubriques.']]},
 {t:'Politique de confidentialité',i:'shd',s:'Les données utilisées, pourquoi et comment les contrôler',b:[
  ['p','Cette politique explique quelles données My UJLoG utilise, pourquoi, et comment tu les contrôles.'],
  ['h','Les données utilisées'],
  ['ul',['Ton compte : nom d’utilisateur, UJ-ID, adresse e-mail, téléphone et UFR.','Ton contenu : publications, stories, commentaires et messages.','Ton activité : interactions, abonnements et connexions.','La vérification du profil : préinscription, carte étudiante et authentification par le visage.','Tes appareils connectés, pour sécuriser ton compte.','Tes contacts et ta position sur le campus, seulement si tu les actives.']],
  ['h','Pourquoi elles sont utilisées'],
  ['ul',['Faire fonctionner l’application.','Montrer tes publications à l’audience que tu as choisie.','Sécuriser ton compte et te prévenir d’une connexion inconnue.','Vérifier ton profil et délivrer le badge certifié.','Garder l’application rapide, fiable et agréable à utiliser.']],
  ['h','Ce que voient les autres'],
  ['p','Tes publications sont visibles selon l’audience que tu choisis. Tes données servent uniquement au fonctionnement de l’application.'],
  ['h','Tes choix'],
  ['ul',['Choisir qui voit tes publications, qui peut t’écrire, te commenter ou te mentionner.','Activer ou couper les contacts, la localisation et les publicités personnalisées.','Demander une archive de tes publications et informations.','Demander la suppression de tes données.']],
  ['h','Nos 30 règles strictes'],['p','Ces règles s’appliquent à tous les comptes, sans exception.'],['ol',['Un seul compte par étudiant : les comptes multiples ou partagés sont interdits.','Ton UJ-ID est personnel : le prêter, le vendre ou l’échanger est interdit.','Tes informations d’inscription doivent être exactes : toute fausse déclaration entraîne une restriction.','L’usurpation d’identité (nom, photo ou carte étudiante d’une autre personne) est interdite et sanctionnée immédiatement.','Ne partage jamais ton mot de passe ni tes codes de vérification, avec personne, y compris avec l’équipe.','Ta carte étudiante numérique sert uniquement à vérifier ton identité : la falsifier ou la détourner est interdit.','Le badge certifié ne s’achète pas, ne se prête pas et ne s’obtient jamais avec un document falsifié.','Seul ton propre visage est accepté pour l’authentification : photo, écran ou masque interdits.','Tes données ne sont jamais vendues à des tiers ni utilisées pour de la publicité sans ton accord clair.','Chaque donnée est utilisée uniquement pour le but annoncé, sans réutilisation cachée.','Les contacts et la position sur le campus ne sont lus que si tu les actives, et tu peux les couper à tout moment.','Ne publie pas les données personnelles d’une autre personne (numéro, adresse, documents, photos privées) sans son accord.','Photographier ou filmer quelqu’un pour le publier sans son accord est interdit.','Les captures de conversations privées ne se publient pas sans l’accord de tous les participants.','Le harcèlement, les insultes et les moqueries répétées sont interdits, en public comme en privé.','Les menaces et l’incitation à la violence entraînent une restriction immédiate.','Les propos discriminatoires (origine, ethnie, religion, genre, handicap, filière) sont interdits.','Les contenus sexuels explicites ou obscènes sont interdits.','Les publications respectent les droits d’auteur : aucun contenu copié sans autorisation.','Les fausses informations sur l’université, ses examens ou ses résultats sont interdites.','Les arnaques, la publicité non autorisée et les messages en masse sont interdits.','Les vues, mentions J’aime et abonnés artificiels sont interdits : ils sont retirés de ton compte.','L’achat, la vente ou l’échange de comptes, d’accès ou d’abonnés est interdit.','Les sujets d’examen volés et la fraude aux examens ne peuvent ni se partager ni se publier.','Contourner la sécurité, le contrôle ou une restriction (nouveau compte, faux appareil) est interdit.','Toute infraction détectée restreint automatiquement le compte pendant 72 heures, sans aucun accès à l’application.','Une infraction répétée peut conduire à une restriction plus longue ou à une suspension définitive après examen.','Tu peux contester une restriction auprès de l’assistance : l’examen ne suspend pas le délai de 72 heures.','Tu peux activer une auto-déconnexion de 3, 5, 7 ou 14 jours : elle ne peut pas être annulée avant son terme.','Tu peux demander l’archive ou la suppression de tes données à tout moment, et elles ne sont conservées que le temps nécessaire.']],
  ['ln','Ouvrir le Centre de confidentialité','set|Centre de confidentialité']]},
 {t:'Règles de la communauté',i:'grp',s:'Un espace de respect entre étudiants',b:[
  ['p','My UJLoG est un espace de respect entre étudiants et avec le personnel. Ces règles s’appliquent aux publications, aux stories, aux commentaires et aux messages.'],
  ['h','Ce qui n’est pas autorisé'],
  ['ul',['Le harcèlement, l’intimidation et les moqueries répétées.','La discrimination.','Le contenu violent.','L’usurpation d’identité.','Les contenus dont tu n’es pas l’auteur et dont tu n’as pas les droits.','Les vues, mentions J’aime et interactions artificielles.']],
  ['h','Signaler un contenu'],
  ['ol',['Touche les trois points sur la publication.','Touche « Signaler ».','Choisis un motif.']],
  ['h','Sanction automatique'],['p','Dès qu’une infraction est détectée, ton compte est placé sous contrôle et reste restreint pendant 72 heures : tu ne peux plus l’utiliser pendant ce délai.'],['h','Ce qui se passe ensuite'],
  ['p','Les contenus signalés sont examinés par l’équipe de modération. Selon la situation, un contenu peut être retiré, et un compte peut être limité ou suspendu.'],
  ['h','Te protéger'],
  ['ul',['Bloque un compte : il ne peut ni te suivre ni voir tes publications.','Passe en compte privé pour que seuls tes abonnés voient tes publications.','Choisis qui peut t’écrire, te commenter ou te mentionner.']]]},
 {t:'Politique d’utilisation des cookies',i:'cld',s:'Stockage local et préférences',b:[
  ['p','My UJLoG utilise de petits fichiers et le stockage local de ton appareil pour fonctionner.'],
  ['h','Ce que nous utilisons'],
  ['ul',['Session : te garder connecté.','Préférences : thème clair ou sombre, langue.','Brouillons : conserver un texte non envoyé.']],
  ['h','Ce que nous n’utilisons pas'],
  ['ul',['Aucun suivi publicitaire entre applications.','Aucune revente de tes données.']],
  ['ln','Gérer les cookies','set|Politique d’utilisation des cookies']]},
 {t:'Contenus et droits d’auteur',i:'doc',s:'Ce que tu peux publier et réutiliser',b:[
  ['p','Tu restes propriétaire de ce que tu crées. En publiant, tu autorises My UJLoG à l’afficher à l’audience que tu as choisie.'],
  ['h','Tu peux publier'],
  ['ul',['Tes propres photos, vidéos et textes.','Des contenus dont tu as l’autorisation.','Des extraits courts avec leur source.']],
  ['h','Tu ne peux pas publier'],
  ['ul',['Les œuvres d’autres personnes sans autorisation.','Les cours, sujets d’examen ou documents confidentiels de l’université.','Des images d’une personne sans son accord.']],
  ['h','Retrait d’un contenu'],
  ['p','Si un contenu porte atteinte à tes droits, signale-le : il est examiné puis retiré si la demande est fondée.']]},
 {t:'Modération et sanctions',i:'shd',s:'Comment les règles sont appliquées',b:[
  ['p','L’équipe de modération examine les contenus signalés et les comportements contraires aux standards de la communauté.'],
  ['h','Les étapes'],
  ['ol',['Avertissement et demande de modifier ou retirer le contenu.','Limitation d’une fonction pendant une durée donnée.','Suspension du compte en cas de récidive ou d’infraction grave.']],
  ['h','Tes droits'],
  ['ul',['Être informé de la décision et de son motif.','Contester via l’assistance sous 48 h.','Consulter ton Statut du compte à tout moment.']],
  ['ln','Voir le statut de mon compte','set|Statut du compte']]},
 {t:'Sécurité de ton compte',i:'shd',s:'Les bons réflexes',b:[
  ['p','Ton compte est lié à ton UJ-ID. Quelques gestes simples le protègent.'],
  ['ul',['Choisis un mot de passe unique.','Active le verrouillage biométrique et les alertes de connexion.','Ne communique jamais ton mot de passe ni ton numéro Mobile Money.','Déconnecte les appareils que tu ne reconnais pas.']],
  ['ln','Ouvrir Sécurité et autorisations','set|Sécurité et autorisations']]},
 {t:'Termes et définitions',i:'book',s:'Les mots utilisés dans l’application',b:[
  ['p','Voici le sens des termes que tu rencontres dans My UJLoG, classés par ordre alphabétique.'],
  ['df',[
   ['Abonné','Étudiant qui te suit sur My UJLoG.'],
   ['Abonné actif','Abonné qui reste actif dans l’application. Les nouveaux abonnés actifs comptent pour les gains automatiques.'],
   ['Audience','Les personnes qui peuvent voir une publication : Public, Mes followers ou Privé.'],
   ['Badge certifié','Marque affichée sur un profil dont la vérification est terminée.'],
   ['Boîte cadeau','L’endroit où arrivent tes récompenses du jour, avant que tu les récupères.'],
   ['Compte privé','Compte dont les publications ne sont visibles que par ses abonnés.'],
   ['FCFA','Franc CFA : la monnaie utilisée pour tes paiements dans l’application, comme la recharge de ta Restocarte.'],
   ['Interaction','Action d’un autre étudiant sur ton contenu, comptée dans Mes interactions.'],
   ['UJ-ID','Le numéro qui identifie ton compte étudiant.'],
   ['Mobile Money','Service de paiement sur mobile : Orange Money ou Wave.'],
   ['Verrouillage biométrique','Ouverture de l’application avec ton empreinte ou ton visage.'],
   ['Vérification du profil','Démarche qui confirme que tu es étudiant et débloque le badge certifié.']]]]},
 {t:'Dédicace',i:'hrt',s:'À celles et ceux qui font vivre My UJLoG',nf:1,b:[
  ['p','My UJLoG est dédiée à la communauté étudiante de l’Université Jean Lorougnon Guédé : à celles et ceux qui apprennent, enseignent, créent et font vivre le campus chaque jour.'],
  ['p','Elle est née d’une idée simple : rapprocher les étudiants, faciliter leurs démarches et récompenser leur engagement.'],
  ['h','Dédicaces'],
  ['p','À [Nom du dédicataire], [message de dédicace].'],
  ['p','À [Nom du dédicataire], [message de dédicace].'],
  ['h','Remerciements'],
  ['p','Merci à [Nom des personnes ou des équipes remerciées] pour leur confiance et leur soutien.'],
  ['n','L’équipe My UJLoG']]}
 ]);
CFG['set|Conditions et politiques']=LEGAL;
CFG['home|Centre de confidentialité']=priv;['Sécurité et autorisations','Messages directs','Gérer les publications'].forEach(l=>{if(CFG['set|'+l])CFG['home|'+l]=CFG['set|'+l]});['Photos aimées','Archive'].forEach(l=>{if(CFG['act|'+l])CFG['home|'+l]=CFG['act|'+l]});CFG['home|Centre d’aide']=faq;CFG['home|Se déconnecter']=CFG['set|Se déconnecter'];
/* ===== v21 : profil, à la une, aide, confidentialité, paramètres ===== */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),nz=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const K=k=>'dlink:set|'+k,L=(i,t,s,a,v)=>`<button type="button" class="li" data-ac="${a}" style="width:100%;text-align:left">${ic(i)}<div class="fl"><b>${t}</b>${s?sub(s):''}</div>${v?`<span class="mu" style="font-size:13px">${v}</span>`:''}${ic('chv',18)}</button>`;
const hd=(i,t,s,x)=>`<div class="card pad v21hero"><span class="v21ic${x||''}">${ic(i,i=='vbd'?34:28)}</span><b>${t}</b><p class="mu">${s}</p></div>`;
const FLD='display:block;width:100%;border:0;background:none;font:inherit;color:inherit;outline:0';
Object.assign(S,{fb:{},tk:[],hl:[],hf:{t:'',sel:[],c:0},cs:0,cm2:'',ps:0});

/* --- Vérification du profil --- */
const VST=[['Préinscription','Formulaire rempli à 100 %','usr'],['Carte étudiante','Scan recto-verso de ta carte','pc'],['Visage','Authentification par le visage','cam'],['Empreinte digitale','Facultatif, si ton téléphone le permet','shd']];
CFG['set|Faire vérifier mon profil']=()=>{const n=S.ver,ok=n>=4;return{t:'Vérification du profil',h:
hd('vbd',ok?'Ton profil est vérifié':'Fais vérifier ton profil',ok?'Le badge certifié s’affiche sur ton profil.':'Confirme que tu es étudiant et obtiens le badge certifié.',ok?' ok':'').replace('</p>','</p>'+H.bar(n/4*100).replace('margin-top:6px','margin-top:6px;width:100%')+`<small class="mu">${n} sur 4 étapes</small>`)+
`<div class="v85st">${VST.map((x,i)=>{const k=i<n?'d':i==n?'c':'l',LK='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';return `<div class="v85s ${k}"><span class="v85n">${k=='d'?ic('chk',18):k=='l'?LK:i+1}</span><div class="v85b"><em class="v85e">Étape ${i+1} sur 4${i==3?' · facultatif':''}</em><b>${x[0]}</b>${sub(k=='l'?'Disponible après « '+VST[i-1][0]+' »':x[1])}${k=='c'?`<button type="button" class="chip v85go" data-ac="ver" aria-pressed="true">${n?'Continuer':'Commencer'}</button>`:''}</div>${k=='d'?'<span class="v21st">Fait</span>':''}</div>`}).join('')}</div>`+
H.sec('Pourquoi faire vérifier ?')+H.card([H.tip(1,'Badge certifié','Visible sur ton profil et tes publications'),H.tip(2,'Plus de confiance','Les autres savent que tu es étudiant'),H.tip(3,'Compte mieux protégé','Récupération facilitée en cas de perte')])}};

/* --- À la une --- */
const HLC=['#15803D','#1D4ED8','#B0306A','#C26A00','#7C3AED','#0E7C8C'],HLP=['Campus','Cours','Restaurant','Résidence','Événement','Sport','Voyage','Clubs'];
const hlC=(c,t,n,x)=>`<span class="v21hl"><i style="background:${c}">${/url\(/.test(c)?'':ic('star',26)}</i><b>${esc(t)}</b>${n!=null?`<small>${n} élément${n>1?'s':''}</small>`:''}${x||''}</span>`;
const hlCover=()=>{const f=S.hf,P=(MB[0]&&MB[0].pub)||[];return f.sel.length&&P[f.sel[0]]?P[f.sel[0]].c:HLC[f.c]};
const hlForm=()=>{const f=S.hf,P=(MB[0]&&MB[0].pub)||[];return `<div id="hlpv" style="text-align:center">${hlC(hlCover(),f.t||'À la une',null)}</div>`+
`<p id="hlcnt" style="font:800 14px var(--h);margin:14px 2px 8px">Choisis dans tes stories · ${f.sel.length} choisie${f.sel.length>1?'s':''}</p>`+
(P.length?`<div class="v73sg">${P.map((p,i)=>{const k=f.sel.indexOf(i);return `<button type="button" data-v21="hs:${i}" aria-pressed="${k>=0}" aria-label="Story ${i+1}" style="background:${p.c}"><span class="v73sc">${String(p.cap||'').replace(/<br>/g,' ')}</span><em>${esc(p.t||'')}</em><i>${k>=0?k+1:''}</i></button>`}).join('')}</div>`:H.empty('star','Aucune story','Publie une story : elle apparaîtra ici pour être mise à la une.'))+
`<div class="field" style="margin-top:12px"><label for="hlt">Légende</label><input id="hlt" maxlength="15" placeholder="Ex. : Rentrée 2026" value="${esc(f.t)}" style="${FLD}"></div><p class="mu" style="font-size:12.5px;margin:6px 2px">La première story choisie sert de couverture. Les numéros donnent l’ordre de lecture.</p><button type="button" class="btn" data-v21="hsave">Enregistrer</button>`};
const hlUp=()=>{const f=S.hf;$$('[data-v21^="hs:"]').forEach(b=>{const k=f.sel.indexOf(+b.dataset.v21.slice(3));b.setAttribute('aria-pressed',k>=0);const n=b.querySelector('i');if(n)n.textContent=k>=0?k+1:''});const c=$('#hlcnt');if(c)c.textContent='Choisis dans tes stories · '+f.sel.length+' choisie'+(f.sel.length>1?'s':'');const v=$('#hlpv');if(v)v.innerHTML=hlC(hlCover(),f.t||'À la une',null)};
CFG['set|Ajouter des éléments à la une']=()=>({t:'À la une',h:
hd('star','Mets en avant tes meilleurs moments','Tes à la une restent sur ton profil, sous ta bio, même après la fin de tes stories.')+
(S.hl.length?`<div class="v21hls">${S.hl.map((h,i)=>hlC(h.c,h.t,h.n.length,`<button type="button" class="v21x" data-v21="hdel:${i}" aria-label="Supprimer ${esc(h.t)}">×</button>`)).join('')}</div>`:'')+
(S.hl.length<8?hlForm():'')+H.note(S.hl.length+' sur 8 à la une')});
CFG['set|Nouvelle à la une']=()=>({t:'Nouvelle à la une',h:hlForm()});
const injectHl=()=>{const sig=S.hl.map(h=>h.t+h.c).join('|');$$('.tkhl').forEach(w=>{const a=w.querySelector('button[data-hlnew]:not(.v21p)');if(!a||w.dataset.sig===sig)return;$$('.v21p',w).forEach(x=>x.remove());let r=a;S.hl.forEach((h,hi)=>{const b=document.createElement('button');b.className='v21p';b.dataset.hlv=hi;b.innerHTML=`<i style="background:${h.c}">${/url\(/.test(h.c)?'':ic('star',24)}</i><span>${esc(h.t)}</span>`;r.after(b);r=b});w.dataset.sig=sig})};
new MutationObserver(()=>{if(S.hl.length)injectHl()}).observe(document.body,{childList:true,subtree:true});

/* --- Partager le profil (à côté du crayon) --- */
const shr=()=>{let s=$('#v21sh');if(!s){s=document.createElement('div');s.id='v21sh';document.body.appendChild(s)}
s.innerHTML=`<div class="v21bk" data-v21="sx"></div><div class="v21sp" role="dialog" aria-label="Partager le profil"><div class="v21hd"><b>Partager le profil</b><button type="button" class="ib" data-v21="sx" aria-label="Fermer">×</button></div><div class="card pad" style="text-align:center"><b style="font:800 18px var(--h)">${esc(($('#mmpf .fl b')||{}).textContent||'Vous')}</b><p class="mono mu" style="font-size:13px;margin-top:2px">ujlog.app/@${MB[0].h}</p></div><button type="button" class="shx-o" data-v21="scopy">${ic('shr',22)}Copier le lien</button><button type="button" class="shx-o" data-v21="swa">${ic('cht',22)}Envoyer sur WhatsApp</button><button type="button" class="shx-o" data-v21="sqr">${ic('qr',22)}Afficher mon code QR</button><button type="button" class="shx-o" data-v21="snat">${ic('ext',22)}Plus d’options…</button></div>`;s.className='on'};
const openMenuTo=(k,o)=>{MM().hidden=false;S.hist=[];open(k,o||'home')};

/* --- Compte --- */
CFG['set|Compte']=()=>({t:'Compte',h:H.card([H.row('usr','Nom d’utilisateur','','@'+MB[0].h),H.row('doc','UJ-ID','','[UJ-ID]'),H.row('news','Adresse e-mail','','[adresse e-mail]'),H.row('pho','Téléphone','','[numéro]'),H.row('grp','UFR','','[UFR]')])+`<button class="btn" data-pedit="1">Modifier mes informations</button>`+H.sec('Sécurité et gestion')+H.card([L('shd','Sécurité et autorisations','Biométrie, alertes, appareils',K('Sécurité et autorisations')),L('doc','Gérer les publications','Archiver ou supprimer',K('Gérer les publications')),L('vbd','Vérification du profil',S.ver>=4?'Profil vérifié':S.ver+' sur 4 étapes',K('Faire vérifier mon profil'))])});

/* --- Centre de confidentialité --- */
CFG['set|Compte privé']=()=>({t:'Compte privé',h:H.card([H.sw('priv','Compte privé','Seuls tes abonnés voient tes publications',false,'Compte privé','usr')])+H.sec('Ce qui change')+H.card([H.tip(1,'Tes publications','Visibles uniquement par tes abonnés'),H.tip(2,'Nouveaux abonnés','Tu approuves chaque demande'),H.tip(3,'Tes abonnés actuels','Ils restent abonnés')])});
const prot=()=>[['Compte privé',!!S.priv,'Compte privé'],['Verrouillage biométrique',!!S.bio,'Sécurité et autorisations'],['Alertes de connexion',S.alg??true,'Sécurité et autorisations'],['Identifications approuvées',!!S.apv,'Mentions'],['Messages directs limités',(S.dm??1)!=0,'Messages directs'],['Contacts non synchronisés',!S.ctc,'Contacts et localisation']];
CFG['set|Centre de confidentialité']=()=>{S.ps=0;const p=prot(),n=p.filter(x=>x[1]).length;return{t:'Centre de confidentialité',h:
hd('shd','Tu gardes le contrôle','Choisis qui voit tes publications, qui peut te trouver et comment tes données sont utilisées.')+
`<div class="card pad"><b>Niveau de protection : ${n} sur 6</b>${H.bar(n/6*100)}<p class="mu" style="font-size:13px;margin-top:6px">${n<4?'Quelques réglages peuvent être renforcés.':n<6?'Bon niveau de protection.':'Ton compte est très bien protégé.'}</p></div>`+
H.card([L('chk','Vérification de la confidentialité','4 étapes rapides pour passer l’essentiel en revue',K('Vérification de la confidentialité'))])+
H.sec('Raccourcis')+H.card([L('eye','Qui peut voir ce que tu partages','Audience par défaut',K('Contrôle du public')),L('plus','Qui peut te contacter','Messages, commentaires, mentions',K('Messages directs')),L('pin','Comment on peut te trouver','Contacts et localisation',K('Contacts et localisation')),L('shd','Comptes bloqués','',K('Comptes bloqués')),L('dl','Tes données et ton compte','Export, suppression',K('Tes données'))])+
H.sec('Points à vérifier')+H.card(p.map(x=>x[1]?`<div class="li">${ic('chk')}<div class="fl"><b>${x[0]}</b></div><span class="v21st">OK</span></div>`:L('flt',x[0],'À renforcer',K(x[2]),'Régler')))+
H.sec('En savoir plus')+H.card([L('doc','Politique de confidentialité','Les données utilisées et pourquoi',K('Politique de confidentialité')),L('grp','Règles de la communauté','',K('Standards de la communauté')),L('book','Termes et définitions','',K('Termes et définitions'))])}};
const PSS=[['Qui peut voir ce que tu partages ?',()=>H.ch('aud',['Public','Mes followers','Privé'],0)+H.note('Ce choix s’applique à tes nouvelles publications.')],
['Qui peut te contacter ?',()=>H.ch('dm',['Tout le monde','Mes abonnés','Personne'],1)+H.sec('Commentaires')+H.ch('cmw',['Tout le monde','Mes abonnés','Personne'],0)],
['Sécurité du compte',()=>H.card([H.sw('bio','Verrouillage biométrique','Empreinte ou visage pour ouvrir l’app',false,'','shd'),H.sw('alg','Alertes de connexion','Notifie-moi d’une connexion inconnue',true,'','bell')])],
['Tes données',()=>H.card([H.sw('ctc','Synchroniser mes contacts','Pour retrouver des camarades',false,'','pho'),H.sw('loc','Position sur le campus','Pour les services autour de toi',false,'','pin'),H.sw('ads','Publicités personnalisées','',false,'','news')])]];
CFG['set|Vérification de la confidentialité']=()=>{const i=S.ps;if(i>=4)return{t:'Vérification terminée',h:hd('chk','Tout est à jour','Tes choix de confidentialité sont enregistrés.',' ok')+`<button type="button" class="btn" data-v21="psend">Terminer</button>`};
return{t:'Vérification',h:`<p class="mu" style="font-size:13px;margin:0 2px">Étape ${i+1} sur 4</p>`+H.bar((i+1)*25)+`<h3 style="font:800 20px var(--h);margin:10px 2px 0">${PSS[i][0]}</h3>`+PSS[i][1]()+`<div style="display:flex;gap:8px">${i?`<button type="button" class="btn s" data-v21="ps:-1" style="flex:1">Précédent</button>`:''}<button type="button" class="btn" data-v21="ps:1" style="flex:1">${i==3?'Terminer':'Suivant'}</button></div>`}};
CFG['set|Tes données']=()=>({t:'Tes données',h:
hd('dl','Tes données t’appartiennent','Demande une copie de tes informations ou supprime ton compte.')+
H.sec('Télécharger mes données')+`<div class="card pad"><p class="mu" style="font-size:13px">Publications, stories, commentaires et informations de profil, dans une archive envoyée par e-mail.</p>${S.exp?`<span class="v21st" style="margin-top:8px;display:inline-block">Demande en cours · prête sous 48 h</span>`:`<button type="button" class="btn s" data-v21="exp" style="margin-top:10px">Demander mon archive</button>`}</div>`+
H.sec('Supprimer le compte')+(S.del?`<div class="card pad"><b>Suppression programmée</b><p class="mu" style="font-size:13px;margin:4px 0 10px">Ton compte sera supprimé dans 30 jours. Reconnecte-toi avant pour l’annuler.</p><button type="button" class="btn s" data-v21="deln">Annuler la suppression</button></div>`:`<div class="card pad"><p class="mu" style="font-size:13px">Cette action supprime définitivement ton profil, tes publications et tes données. Pour confirmer, écris SUPPRIMER.</p><div class="field" style="margin-top:8px"><input id="dcf" placeholder="SUPPRIMER" autocomplete="off" style="${FLD}"></div><button type="button" class="btn" data-v21="del" style="background:var(--red);margin-top:10px">Supprimer mon compte</button></div>`)});

/* --- Centre d’aide --- */
const HELP=[['Compte et connexion','usr','Mot de passe, appareils',[['Comment récupérer mon compte ?','Sur l’écran de connexion, touche « Mot de passe oublié » : un lien est envoyé à ton adresse e-mail.'],['Je vois une connexion inconnue','Ouvre Sécurité et autorisations, déconnecte l’appareil concerné puis change ton mot de passe.'],['Puis-je changer mon nom d’utilisateur ?','Oui, depuis Modifier le profil. Ton UJ-ID, lui, ne change pas.']]],
['Profil et vérification','vbd','Badge, photo, bio',[['Comment obtenir le badge certifié ?','Ouvre « Faire vérifier mon profil » : préinscription, scan de la carte étudiante, puis authentification par le visage.'],['Comment mettre une publication à la une ?','Menu, « Ajouter des éléments à la une », puis crée une à la une avec un titre, une couleur et des éléments.'],['Comment partager mon profil ?','Touche l’icône de partage à côté du crayon, en haut de ton profil.']]],
['Publications et stories','cam','Publier, archiver, signaler',[['Comment archiver une publication ?','Compte, « Gérer les publications », puis Archiver. Elle reste visible uniquement par toi.'],['Comment signaler un contenu ?','Touche les trois points sur la publication, puis « Signaler » et choisis un motif.'],['Qui voit mes publications ?','Cela dépend de ton audience par défaut et du mode compte privé.']]],
['Confidentialité et sécurité','shd','Audience, blocage, données',[['Comment passer en compte privé ?','Menu, Tous les paramètres, puis Compte privé.'],['Que fait le blocage d’un compte ?','Un compte bloqué ne peut ni te suivre ni voir tes publications.'],['Puis-je récupérer mes données ?','Oui : Centre de confidentialité, Tes données, puis Demander mon archive.']]],
['Mon profil','usr','Photo, bio, identifiant',[['Comment modifier mon profil ?','Dans ton profil, touche « Modifier » : tu peux changer ta photo, ta bio et ton nom d’utilisateur.'],['À quoi sert mon UJ-ID ?','C’est ton identifiant unique, de la forme UJ-AGRO-26-ZDA : ton UFR, l’année et tes initiales. Il ne change pas.'],['Comment mettre mes meilleurs moments en avant ?','Utilise « À la une » sous ta bio pour épingler tes publications préférées.']]],
['Restocarte et services','wal','Recharge, solde, carte',[['Comment recharger ma Restocarte ?','Mon campus, Restauration, puis Recharger : choisis un montant et un moyen de paiement.'],['Où voir mon solde ?','Dans le menu, rubrique Ressources, puis Solde.'],['J’ai perdu ma carte','Contacte l’assistance pour la bloquer, puis demande un duplicata à la scolarité.']]]];
HELP.forEach(h=>{CFG['set|Aide : '+h[0]]=()=>({t:h[0],h:H.card(h[3].map(x=>H.det(...x)))+fbBox()+H.card([L('cht','Il te faut autre chose ?','Écris à l’assistance',K('Contacter l’assistance'))])})});
CFG['set|Centre d’aide']=()=>({t:'Centre d’aide',h:
`<div class="field row" style="gap:10px;color:var(--mu);align-items:center">${ic('se',20)}<input id="hq" placeholder="Rechercher dans l’aide" autocomplete="off" style="flex:1;border:0;background:none;font:inherit;color:var(--ink);outline:0"></div><div id="hres"></div><div id="hmain" style="display:flex;flex-direction:column;gap:10px">`+
H.sec('Sujets')+`<div class="v21tp">${HELP.map(h=>`<button type="button" class="card" data-ac="dlink:set|Aide : ${h[0]}"><span>${ic(h[1],24)}</span><b>${h[0]}</b><small>${h[2]}</small></button>`).join('')}</div>`+
H.sec('Questions fréquentes')+H.card(HELP.slice(0,3).map(h=>H.det(h[3][0][0],h[3][0][1])))+
H.sec('Besoin d’aide ?')+H.card([L('cht','Contacter l’assistance','Réponse sous 48 h',K('Contacter l’assistance')),L('clk','Mes demandes',S.tk.length?S.tk.length+' envoyée'+(S.tk.length>1?'s':''):'Aucune demande',K('Mes demandes')),`<button type="button" class="li" data-v21="cto:4" style="width:100%;text-align:left">${ic('flt')}<div class="fl"><b>Signaler un problème</b>${sub('Un bug ou un comportement inattendu')}</div>${ic('chv',18)}</button>`])+`</div>`+H.note('Dernière mise à jour : 8 novembre 2026')});
const CATS=['Compte et connexion','Vérification du profil','Services du campus','Publications','Signaler un problème','Autre'];
CFG['set|Contacter l’assistance']=()=>({t:'Contacter l’assistance',h:hd('cht','Écris-nous','Un membre de l’équipe te répond sous 48 h. Téléphone et WhatsApp : 05 06 17 23 17 · E-mail : monservice.ujlog@gmail.com')+H.sec('Sujet')+H.ch('cs',CATS,0)+`<div class="field"><label for="cmsg">Ton message</label><textarea id="cmsg" rows="5" maxlength="500" placeholder="Décris ton problème en quelques phrases" style="${FLD};resize:none">${esc(S.cm2)}</textarea></div><div class="mu" id="ccnt" style="text-align:right;font-size:12px;margin-top:-6px">${S.cm2.length}/500</div><button type="button" class="btn" data-v21="send">Envoyer à l’assistance</button>`});
CFG['set|Demande envoyée']=()=>{const t=S.tk[0]||{id:'—'};return{t:'Demande envoyée',h:hd('chk','Merci, on s’en occupe','Ta demande n° '+t.id+' est bien reçue. Réponse sous 48 h.',' ok')+H.card([L('clk','Voir mes demandes','',K('Mes demandes')),L('pho','Retour au Centre d’aide','',K('Centre d’aide'))])}};
CFG['set|Mes demandes']=()=>({t:'Mes demandes',h:S.tk.length?H.card(S.tk.map(t=>`<div class="li">${ic('cht')}<div class="fl"><b>${t.c}</b>${sub('n° '+t.id+' · '+t.d)}${sub(esc(t.m.slice(0,70)))}</div><span class="v21st">Reçue</span></div>`)):H.empty('cht','Aucune demande','Tes messages à l’assistance apparaîtront ici.')+L('cht','Contacter l’assistance','',K('Contacter l’assistance'))});
function fbBox(){const k=cur.key,f=S.fb[k],r=S.fb[k+'r'];
 if(f==null)return`<div class="card pad" style="text-align:center"><b>Cet article t’a-t-il été utile ?</b><div style="display:flex;gap:8px;margin-top:10px"><button type="button" class="btn s" data-v21="fb:1" style="flex:1">Oui</button><button type="button" class="btn s" data-v21="fb:0" style="flex:1">Non</button></div></div>`;
 if(f==1)return`<div class="card pad" style="text-align:center;color:var(--g)">${ic('chk',26)}<b style="display:block;margin-top:4px">Merci pour ton retour !</b><p class="mu" style="font-size:13px">Il nous aide à améliorer l’aide.</p></div>`;
 return`<div class="card pad" style="text-align:center"><b>Dommage. Que manquait-il ?</b><div class="chips" style="flex-wrap:wrap;justify-content:center;margin:8px 0 0">${['Information manquante','Pas assez clair','Ne fonctionne pas'].map((x,i)=>`<button type="button" class="chip" data-v21="fbr:${i}" aria-pressed="${r==i}">${x}</button>`).join('')}</div>${r!=null?`<p class="mu" style="margin:8px 0 0;font-size:13px">Merci, ton retour est envoyé.</p>`:''}<button type="button" class="btn s" data-ac="dlink:set|Contacter l’assistance" style="margin-top:10px">Contacter l’assistance</button></div>`}

/* --- Tous les paramètres (sans doublons avec le menu) --- */
const OPT={aud:['Public','Mes followers','Privé'],dm:['Tout le monde','Mes abonnés','Personne'],lang:['Français','English']};
const Rw=(i,t,v)=>`<button type="button" class="li" style="width:100%;text-align:left">${ic(i)}<div class="fl"><b>${t}</b></div>${v?`<span class="mu" style="font-size:13px">${v}</span>`:''}${ic('chv',18)}</button>`,Rg=(i,t,g)=>`<button type="button" class="li" data-go="${g}" style="width:100%;text-align:left">${ic(i)}<div class="fl"><b>${t}</b></div>${ic('chv',18)}</button>`;
const buildSet=()=>{const p=$('#mmp-set');if(!p||p.hidden)return;const on=k=>S[k]?'Activé':'Désactivé',g=(t,r)=>H.sec(t)+H.card(r);
[...p.children].slice(1).forEach(c=>c.remove());
p.insertAdjacentHTML('beforeend',g('Confidentialité',[Rw('eye','Contrôle du public',OPT.aud[S.aud??0]),Rw('plus','Messages directs',OPT.dm[S.dm??1]),Rw('doc','Commentaires',OPT.dm[S.cmw??0]),Rw('usr','Mentions',OPT.dm[S.mn??0]),Rw('grp','Liste de suivis'),Rw('hrt','Photos aimées'),Rw('cam','Vues'),Rw('pin','Contacts et localisation')])+
g('Interactions et partage',[Rw('shr','Réutilisation du contenu'),Rw('dl','Téléchargements'),Rw('cht','Boîte de réception et messagerie')])+
g('Contenu et lecture',[Rw('news','Préférences de contenu'),Rw('cam','Lecture')])+
g('Stockage',[Rw('coin','Libérer de l’espace')])+
g2('Votre activité','Examine ton activité et les services liés à ton compte.',[`<button type="button" class="li" data-mmp="act" style="width:100%;text-align:left">${ic('clk')}<div class="fl"><b>Historique d’activité</b></div>${ic('chv',18)}</button>`,Rw('pin','Localisation'),Rw('globe','Applications et sites Web',S.apps.length),Rw('grp','Services de l’université'),Rw('book','Comment gérer vos informations')])+
`<p class="mu" style="text-align:center;font-size:12px">Notifications, compte, langue, accessibilité et aide sont dans le menu.</p>`)};
CFG['set|Contenus hors ligne']=CFG['home|Contenus hors ligne'];

/* --- Alias depuis le menu et actions --- */
['Compte','Faire vérifier mon profil','Ajouter des éléments à la une','Conditions et politiques','Centre de confidentialité','Centre d’aide'].forEach(k=>CFG['home|'+k]=CFG['set|'+k]);
CFG['prof|Faire vérifier mon profil']=CFG['set|Faire vérifier mon profil'];CFG['prof|Ajouter des éléments à la une']=CFG['set|Ajouter des éléments à la une'];CFG['pro|Accueil de l’assistance']=CFG['set|Centre d’aide'];
const V=(a)=>{const[k,x]=a.split(':');
 if(k=='hc'){S.hf.c=+x;render()}
 else if(k=='hs'){const s=S.hf.sel,i=+x,p=s.indexOf(i);p<0?s.push(i):s.splice(p,1);hlUp()}
 else if(k=='hsave'){const f=S.hf;if(!f.t.trim())return say('Ajoute une légende');if(!f.sel.length)return say('Choisis au moins une story');if(S.hl.length>=8)return say('Maximum 8 à la une');S.hl.push({t:f.t.trim(),c:((MB[0].pub[f.sel[0]]||{}).c)||HLC[f.c],n:f.sel.map(i=>MB[0].pub[i]).filter(Boolean).map(p=>({c:p.c,cap:p.cap,t:'À la une',f:p.f,fl:p.fl}))});S.hf={t:'',sel:[],c:0};injectHl();say('À la une ajoutée à ton profil');S.dret=null;open('set|Ajouter des éléments à la une',cur.origin)}
 else if(k=='hdel'){S.hl.splice(+x,1);$$('.tkhl').forEach(w=>{$$('.v21p',w).forEach(b=>b.remove());delete w.dataset.sig});injectHl();say('À la une supprimée');render()}
 else if(k=='sx')$('#v21sh').className='';
 else if(k=='scopy'){copy('https://ujlog.app/@'+MB[0].h);$('#v21sh').className=''}
 else if(k=='swa'){window.open('https://wa.me/?text='+encodeURIComponent('Retrouve-moi sur My UJLoG : https://ujlog.app/@'+MB[0].h),'_blank','noopener');$('#v21sh').className=''}
 else if(k=='snat')doShare();
 else if(k=='sqr'){$('#v21sh').className='';MM().hidden=false;S.hist=['home'];S.syn=1;const b=document.createElement('button');b.dataset.mmp='qr';b.hidden=true;MM().appendChild(b);b.click();b.remove();S.syn=0}
 else if(k=='ps'){S.ps=Math.max(0,S.ps+ +x);render()}
 else if(k=='psend'){S.ps=0;say('Vérification terminée');S.dret=null;open('set|Centre de confidentialité',cur.origin)}
 else if(k=='exp'){S.exp=1;say('Demande enregistrée : archive envoyée par e-mail');render()}
 else if(k=='del'){const v=$('#dcf');if(!v||v.value.trim().toUpperCase()!='SUPPRIMER')return say('Écris SUPPRIMER pour confirmer');S.del=1;say('Suppression programmée');render()}
 else if(k=='deln'){S.del=0;say('Suppression annulée');render()}
 else if(k=='cto'){S.cs=+x;S.dret={to:cur.key,from:'set|Contacter l’assistance',o:cur.origin};open('set|Contacter l’assistance',cur.origin)}
 else if(k=='send'){if(S.cm2.trim().length<10)return say('Écris au moins 10 caractères');S.tk.unshift({id:'AS-'+(1001+S.tk.length),c:CATS[S.cs],m:S.cm2.trim(),d:'À l’instant'});S.cm2='';S.dret=null;open('set|Demande envoyée',cur.origin)}
 else if(k=='fb'){S.fb[cur.key]=+x;render()}
 else if(k=='fbr'){S.fb[cur.key+'r']=+x;render()}};
document.addEventListener('click',e=>{const t=s=>e.target.closest&&e.target.closest(s);
 const b=t('[data-v21]');if(b){e.preventDefault();e.stopPropagation();V(b.dataset.v21);return}
 if(t('[data-pshr]')){e.preventDefault();e.stopPropagation();shr();return}
 const hv=t('[data-hlv]');if(hv){e.preventDefault();e.stopPropagation();const h=S.hl[+hv.dataset.hlv];h&&window.UJ_SV&&UJ_SV(-1,false,0,h.t,h.n.map(x=>Object.assign({},x)));return}
 if(t('[data-hlnew]')){e.preventDefault();e.stopPropagation();openMenuTo('set|Ajouter des éléments à la une');return}
 setTimeout(buildSet,40)},true);
document.addEventListener('input',e=>{const i=e.target.id;
 if(i=='hlt'){S.hf.t=e.target.value;const b=$('#mmp-det .v21hl b');if(b)b.textContent=S.hf.t||'À la une'}
 else if(i=='cmsg'){S.cm2=e.target.value;const c=$('#ccnt');if(c)c.textContent=S.cm2.length+'/500'}
 else if(i=='hq'){const q=nz(e.target.value.trim()),r=$('#hres'),m=$('#hmain');if(!r)return;m.hidden=!!q;if(!q){r.innerHTML='';return}const h=[];HELP.forEach(t=>t[3].forEach(x=>{if(nz(x[0]+' '+x[1]).includes(q))h.push(x)}));r.innerHTML=h.length?H.card(h.map(x=>H.det(...x))):H.empty('se','Aucun résultat','Essaie un autre mot ou écris à l’assistance.')+`<button type="button" class="btn" data-ac="dlink:set|Contacter l’assistance">Contacter l’assistance</button>`}});

/* ===== v22 : aide et assistance, activité, mentions légales ===== */
Object.assign(S,{acc:[(window.__UJME?{n:window.__UJME.n,h:window.__UJME.h}:{n:'Vous',h:'@vous'})],ac:0,rp:0,rm:'',apps:['Portail UJLoG','Restocarte','Plateforme de cours']});
const g2=(t,s,r)=>H.sec(t)+H.note(s)+H.card(r);
const LG=k=>()=>{S.dh=['set|Conditions et politiques','home'];return CFG['jur|'+k]()};
[['Conditions de service','Conditions d’utilisation'],['Politique de confidentialité','Politique de confidentialité'],['Standards de la communauté','Règles de la communauté'],['Termes et définitions','Termes et définitions'],['Dédicace','Dédicace']].forEach(([a,b])=>CFG['set|'+a]=LG(b));
CFG['set|Statut du compte']=()=>({t:'Statut du compte',h:hd('chk',(window.UJMOD&&UJMOD.inf()?'Ton compte a déjà été restreint':'Ton compte est en règle'),(window.UJMOD&&UJMOD.inf()?UJMOD.inf()+' infraction(s) enregistrée(s). Chaque infraction restreint le compte pendant 72 heures.':'Aucune infraction détectée sur ton compte.'),(window.UJMOD&&UJMOD.inf()?'':' ok'))+H.card([H.row('chk','Règles de la communauté',(window.UJMOD&&UJMOD.inf()?'Infraction relevée':'Respectées')),H.row('vbd','Vérification du profil',S.ver>=4?'Profil vérifié':S.ver+' sur 4 étapes',S.ver>=4?'Oui':'En cours'),H.row('shd','Confidentialité',S.priv?'Compte privé':'Compte public'),H.row('shd','Restrictions',(window.UJMOD&&UJMOD.inf()?'72 h par infraction':'Aucune limitation active'),(window.UJMOD&&UJMOD.inf()?String(UJMOD.inf()):'0')),H.row('clk','Dernier examen','Contrôle automatique','Aujourd’hui')])+H.card([L('grp','Standards de la communauté','',K('Standards de la communauté')),L('cht','Contester une décision','Écris à l’assistance',K('Contacter l’assistance'))])});
CFG['set|Espace Assistance']=()=>({t:'Espace Assistance',h:hd('cht','Ton espace assistance','Suis tes demandes et retrouve toutes les façons de nous joindre.')+H.stats([[S.tk.length,'Demandes'],[S.tk.length,'En cours'],['48 h','Délai']])+H.card([L('cht','Nouvelle demande','',K('Contacter l’assistance')),L('clk','Mes demandes',S.tk.length?S.tk.length+' envoyée'+(S.tk.length>1?'s':''):'Aucune',K('Mes demandes')),L('pho','Centre d’aide','Réponses rapides',K('Centre d’aide')),L('flt','Signaler un problème','',K('Signaler un problème'))])+H.sec('Horaires')+H.card([H.row('clk','Lundi – vendredi','','8 h – 17 h'),H.row('clk','Samedi','','8 h – 12 h')])+H.note('Hors horaires, ton message est traité le jour ouvré suivant.')});
const RPC=['Bug d’affichage','Connexion','Paiement','Contenu inapproprié','Autre'];
CFG['set|Signaler un problème']=()=>({t:'Signaler un problème',h:hd('flt','Quelque chose ne va pas ?','Décris le problème : l’équipe le reçoit avec la version de ton application.')+H.sec('Type de problème')+H.ch('rp',RPC,0)+`<div class="field"><label for="rmsg">Ce qui s’est passé</label><textarea id="rmsg" rows="5" maxlength="500" placeholder="Que faisais-tu ? Que s’est-il passé ?" style="${FLD};resize:none">${esc(S.rm)}</textarea></div><button type="button" class="btn" data-v21="rsend">Envoyer le signalement</button>`+H.note('Pour un contenu inapproprié, utilise aussi « Signaler » sur la publication.')});
CFG['set|À propos']=()=>({t:'À propos',h:hd('home','My UJLoG','Version 1.0 · l’application de la communauté étudiante de l’Université Jean Lorougnon Guédé.')+H.card([H.row('book','Version','','1.0'),H.row('cld','Dernière mise à jour','','8 nov. 2026'),H.row('shd','Éditeur','','UJLoG'),H.row('pin','Campus','','Daloa')])+`<button type="button" class="btn s" data-v21="upd">Rechercher une mise à jour</button>`+H.sec('Informations')+H.card([L('doc','Conditions de service','',K('Conditions de service')),L('doc','Politique de confidentialité','',K('Politique de confidentialité')),L('grp','Standards de la communauté','',K('Standards de la communauté')),L('hrt','Dédicace et remerciements','',K('Dédicace'))])+H.note('© 2026 Université Jean Lorougnon Guédé')});
CFG['set|Politique d’utilisation des cookies']=()=>({t:'Cookies et stockage local',h:`<div class="card pad"><b style="font:800 20px/1.2 var(--h)">Politique d’utilisation des cookies</b>`+GD.p('My UJLoG utilise de petits fichiers et le stockage local de ton appareil pour fonctionner. Cette page explique lesquels et comment les contrôler.')+GD.h('Ce que nous utilisons')+GD.ul(['Session : te garder connecté.','Préférences : thème clair ou sombre, langue.','Brouillons : conserver un texte non envoyé.'])+GD.h('Ce que nous n’utilisons pas')+GD.ul(['Aucun suivi publicitaire entre applications.','Aucune revente de tes données.'])+`</div>`+H.card([H.sw('ck','Mesure d’audience anonyme','Aide à améliorer l’application',true,'','cld')])+H.card([L('coin','Libérer de l’espace','Vider cache et brouillons',K('Libérer de l’espace'))])});
CFG['set|Applications et sites Web']=()=>({t:'Applications et sites Web',h:S.apps.length?H.card(S.apps.map((a,i)=>`<div class="li">${ic('globe')}<div class="fl"><b>${a}</b>${sub('Connecté avec ton compte My UJLoG')}</div><button type="button" data-v21="appdel:${i}" style="font-weight:700;font-size:13px;color:var(--red);padding:8px 4px">Retirer</button></div>`))+H.note('Retirer un service coupe son accès à tes informations.'):H.empty('globe','Aucun service connecté','Les applications liées à ton compte apparaîtront ici.')});
CFG['set|Services de l’université']=()=>({t:'Services de l’université',h:H.note('Choisis les services qui peuvent utiliser ton profil My UJLoG.')+H.card([H.sw('igs','Scolarité','Afficher ton UFR et ton niveau',true,'','cap'),H.sw('igr','Restauration','Associer ta Restocarte',true,'','fork'),H.sw('igb','Bourses et aides','Partager ton statut de boursier',false,'','coin')])});
CFG['set|Comment gérer vos informations']=()=>({t:'Gérer tes informations',h:H.card([H.det('Quelles informations sont enregistrées ?','Ton compte (nom, UJ-ID, e-mail, téléphone, UFR), ton contenu et ton activité dans l’application.'),H.det('Comment les modifier ?','Menu, Compte, puis « Modifier mes informations ».'),H.det('Comment les télécharger ?','Centre de confidentialité, Tes données, puis « Demander mon archive ».'),H.det('Comment supprimer mon compte ?','Centre de confidentialité, Tes données : la suppression est programmée sous 30 jours et peut être annulée.')])+H.card([L('usr','Modifier mes informations','',K('Compte')),L('dl','Tes données','Archive et suppression',K('Tes données')),L('shd','Centre de confidentialité','',K('Centre de confidentialité'))])+fbBox()});
CFG['set|Ajouter un compte']=()=>({t:'Comptes',h:H.sec('Comptes sur cet appareil')+H.card(S.acc.map((a,i)=>`<button type="button" class="li" data-v21="acc:${i}" style="width:100%;text-align:left"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:50%">${ic('usr',20)}</span><div class="fl"><b>${esc(a.n)}</b>${sub(esc(a.h)+(i==S.ac?' · compte actuel':''))}</div><span style="color:var(--g)">${i==S.ac?ic('chk',22):''}</span></button>`))+H.sec('Ajouter un compte')+`<div class="field"><label for="amat">UJ-ID</label><input id="amat" placeholder="Ex. : 21 UJLOG 0123" autocomplete="off" style="${FLD}"></div><div class="field"><label for="apw">Mot de passe</label><input id="apw" type="password" placeholder="••••••••" style="${FLD}"></div><button type="button" class="btn" data-v21="aadd">Se connecter</button>`});
CFG['set|Changer de compte']=CFG['set|Ajouter un compte'];CFG['set|Localisation']=CFG['set|Contacts et localisation'];CFG['pro|Consulter le statut de mon compte']=CFG['set|Statut du compte'];
['Espace Assistance','Statut du compte','Signaler un problème','À propos','Ajouter un compte'].forEach(k=>CFG['home|'+k]=CFG['set|'+k]);
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-v21]');if(!b)return;const[k,x]=b.dataset.v21.split(':');
 if(k=='rsend'){if(S.rm.trim().length<10)return say('Décris le problème en 10 caractères au moins');S.tk.unshift({id:'SG-'+(2001+S.tk.length),c:'Problème : '+RPC[S.rp],m:S.rm.trim(),d:'À l’instant'});S.rm='';S.dret=null;open('set|Demande envoyée',cur.origin)}
 else if(k=='upd')say('My UJLoG est à jour (version 1.0)');
 else if(k=='appdel'){const a=S.apps.splice(+x,1)[0];say(a+' retiré');render()}
 else if(k=='acc'){S.ac=+x;say('Compte actif : '+S.acc[S.ac].n);render()}
 else if(k=='aadd'){const m=($('#amat')||{value:''}).value.trim(),p=($('#apw')||{value:''}).value;if(m.length<4)return say('Saisis ton UJ-ID');if(p.length<4)return say('Saisis ton mot de passe');if(S.acc.length>=4)return say('4 comptes maximum');S.acc.push({n:'Étudiant '+m.slice(-4),h:'@'+m.toLowerCase().replace(/\s+/g,'')});S.ac=S.acc.length-1;say('Compte ajouté');render()}},true);
document.addEventListener('input',e=>{if(e.target.id=='rmsg')S.rm=e.target.value});

/* ===== v23 : statut du compte, à propos (logo, SIAMS), alias menu ===== */
CFG['set|Statut du compte']=()=>{const ok=S.ver>=4,W=Math.max(0,Math.min(3,+S.warn||0)),T=W==0?'ok':W<3?'w':'r',
HT=[['Ton compte est en règle','Aucune infraction détectée. Toutes les fonctions de My UJLoG sont disponibles.'],['Ton compte demande ton attention','Un avertissement est en cours. Relis les standards de la communauté pour éviter une limitation.'],['Certaines fonctions sont limitées','Tu as atteint 3 avertissements. Contacte l’assistance si tu penses qu’il y a une erreur.']][W==0?0:W<3?1:2],
seg=[0,1,2].map(i=>`<i class="${i<W?'on':''}"></i>`).join(''),
tile=(i,t,s,st)=>`<div class="sxt ${st}" role="img" aria-label="${t} : ${s}" title="${t} : ${s}"><span class="sxti">${ic(i,26)}</span></div>`,
step=(i,t,s,v)=>`<div class="sxs"><span class="sxd">${ic(i,15)}</span><div class="fl"><b>${t}</b>${s?`<small>${s}</small>`:''}</div>${v?`<span class="sxv">${v}</span>`:''}</div>`;
return{t:'Statut du compte',h:`<div class="card sxh ${T}"><span class="sxseal">${ic(T=='ok'?'chk':'shd',34)}</span><b>${HT[0]}</b><p>${HT[1]}</p><span class="sxpill">${ic('clk',13)}Vérifié aujourd’hui · contrôle automatique</span></div>`+
`<div class="card pad sxg"><div class="sxgh"><b>Avertissements</b><span class="mono">${W} sur 3</span></div><div class="sxbar ${T}" role="img" aria-label="${W} avertissement${W>1?'s':''} sur 3">${seg}</div><p class="mu">À 3 avertissements, certaines fonctions peuvent être limitées.</p><div class="sxm"><div><b class="mono">0</b><span>Contenus retirés</span></div><div><b class="mono">0</b><span>Signalements</span></div></div></div>`+
H.sec('Ce que tu peux faire')+`<div class="sxtl">${tile('cam','Publier et commenter','Disponible','ok')}${tile('plus','Messages directs','Disponible','ok')}${tile('star','À la une','Disponible','ok')}${tile('vbd','Badge certifié',ok?'Obtenu':S.ver+' sur 4 étapes',ok?'ok':'w')}</div>`+
(ok?'':`<button type="button" class="btn s" data-ac="open:Faire vérifier mon profil">Continuer la vérification</button>`)+
H.sec('Historique du compte')+`<div class="card pad sxtm">${step('usr','Compte créé','','[Date d’inscription]')}${step('chk','Dernier examen','Contrôle automatique','Aujourd’hui')}${step('shd','Sanctions','Aucune depuis la création','—')}</div>`+
H.sec('Bon à savoir')+H.card([H.det('Qu’est-ce qu’un avertissement ?','Un message envoyé quand un contenu enfreint les standards de la communauté. À 3 avertissements, certaines fonctions peuvent être limitées.'),H.det('Que se passe-t-il en cas d’infraction ?','Le contenu peut être retiré, une fonction limitée, puis le compte suspendu en cas de récidive. Tu es toujours prévenu.'),H.det('Comment contester une décision ?','Écris à l’assistance en rappelant le contenu concerné : l’équipe de modération réexamine sous 48 h.'),H.det('Comment garder un compte en règle ?','Respecte les autres, ne publie que des contenus dont tu as les droits et évite les interactions artificielles.')])+
H.card([L('cht','Contester une décision','Écris à l’assistance',K('Contacter l’assistance')),L('grp','Standards de la communauté','',K('Standards de la communauté')),L('shd','Sécurité du compte','Appareils et alertes',K('Sécurité et autorisations'))])}};
const LOGOX=()=>(document.querySelector('img.lg[src^="data:"]')||{}).src||'';
CFG['set|À propos']=()=>({t:'À propos',h:`<div class="card pad v21hero v24big"><img src="${LOGOX()}" alt="Logo My UJLoG" style="width:96px;height:96px;object-fit:contain;border-radius:24px"><b>My UJLoG</b><p class="mu">L’application de la communauté étudiante de l’Université Jean Lorougnon Guédé.</p><span class="v21st">Version 1.0.0</span></div>`+
H.stats([['5','UFR'],['939','Diplômés 2025-26'],['2026','Année 2026-27']])+
H.sec('Application')+H.card([H.row('book','Version','','1.0.0'),H.row('cld','Dernière mise à jour','','8 nov. 2026'),H.row('lap','Plateforme','','Application web mobile'),H.row('globe','Langues','','Français · English'),H.row('shd','Données','','Protégées')])+
`<button type="button" class="btn s" data-v21="upd">Rechercher une mise à jour</button>`+
H.card([L('star','Nouveautés','Version 1.0.0 et à venir',K('Nouveautés')),L('hrt','Licences et crédits','Propriété, polices, remerciements',K('Licences et crédits'))])+
H.sec('L’université')+H.card([H.row('bld','Établissement','Université Jean Lorougnon Guédé'),H.row('doc','Tutelle','Ministère de l’Enseignement supérieur et de la Recherche scientifique'),H.row('cap','Formation','5 unités de formation et de recherche'),H.row('pin','Adresse','BP 150 Daloa, Côte d’Ivoire'),H.row('globe','Site web','www.ujlog.edu.ci')])+
H.sec('Édition')+H.card([H.row('shd','Éditeur','','SIAMS'),H.row('home','Propriétaire','','UJLoG'),H.row('doc','Licence','','Usage universitaire')])+
H.sec('Ce que contient My UJLoG')+H.card([H.det('Vie du campus','Publications, stories, à la une, messages, notifications et profil vérifié.'),H.det('Mon campus','Emploi du temps, supports de cours, perdu/trouvé, résultats, scolarité et démarches.'),H.det('Mon espace','Carte d’étudiant numérique, informations du compte, vérification du profil, code QR et changement de compte.'),H.det('Services','Restocarte, logement, bourses, santé et bibliothèque.'),H.det('Profil','Photo, bio, identifiant UJ-ID et mise en avant de tes meilleurs moments.'),H.det('Confidentialité','Compte privé, audience, blocage, export et suppression de tes données.'),H.det('Aide','Centre d’aide, assistance, suivi des demandes et signalement.')])+
H.sec('Partager')+H.card([H.rowa('shr','Partager My UJLoG','Invite tes camarades','share','Partager'),H.rowa('star','Noter l’application','Dis-nous ce que tu en penses','say:Merci pour ta note !','Noter')])+
H.sec('Contact')+H.card([L('cht','Contacter l’assistance','Réponse sous 48 h',K('Contacter l’assistance')),L('ext','Site officiel de l’UJLoG','ujlog.edu.ci','url:https://ujlog.edu.ci'),L('flt','Signaler un problème','',K('Signaler un problème'))])+
H.sec('Informations légales')+H.card([L('doc','Conditions de service','',K('Conditions de service')),L('doc','Politique de confidentialité','',K('Politique de confidentialité')),L('cld','Politique d’utilisation des cookies','',K('Politique d’utilisation des cookies')),L('grp','Standards de la communauté','',K('Standards de la communauté')),L('hrt','Dédicace et remerciements','',K('Dédicace'))])+
`<p class="v24ft">© 2026 SIAMS · Université Jean Lorougnon Guédé. Tous droits réservés.</p>`});
CFG['set|Nouveautés']=()=>{const N=(i,t,s,n)=>`<div class="li v24nw"><span class="ic" style="background:var(--mint);color:var(--g);border-radius:14px;width:46px;height:46px">${ic(i,24)}</span><div class="fl"><b style="font-size:16px">${t}${n?'<span class="tag k" style="font-size:10px;padding:3px 7px;margin-left:6px;vertical-align:2px">Nouveau</span>':''}</b>${sub(s)}</div></div>`,C=a=>`<div class="card">${a.map(x=>N(...x)).join('')}</div>`;
return{t:'Nouveautés',h:`<div class="card pad v21hero v24big"><span class="v24ver">1.0</span><b>Nouveautés</b><p class="mu">Ce qui change dans My UJLoG, version après version.</p><span class="v21st">Version 1.0.0 · 8 nov. 2026</span></div>`+
H.sec('Dans cette version')+C([['qr','Code QR professionnel','Ton code QR avec le logo de l’UJLoG, à télécharger ou à partager.',1],['usr','Mon espace','Informations du compte, vérification, code QR, changement de compte et déconnexion au même endroit.',1],['vbd','Badge certifié plus net','Un sceau lisible : vide avant la vérification, plein une fois ton profil validé.',1],['gear','Menu simplifié','Trois blocs clairs : Paramètres, Confidentialité, Aide et assistance.',1],['star','À la une','Mets en avant tes meilleurs moments sous ta bio.'],['usr','Identifiant UJ-ID','Un identifiant unique : ton UFR, l’année et tes initiales, comme UJ-AGRO-26-ZDA.']])+
H.sec('Améliorations')+C([['cht','Aide','Centre d’aide avec recherche, assistance et suivi des demandes.'],['shr','Profil','Partage du profil et vérification par étapes.'],['shd','Confidentialité','Compte privé, audience, blocage, export et suppression des données.']])+
H.sec('Bientôt')+C([['cap','Résultats en ligne','Consulte tes notes dès leur publication.'],['grp','Ma classe','Ta promotion et ton UFR réunis.'],['hrt','Partenaires','Les soutiens de l’université, à portée de main.']])+
H.btn('Donner mon avis','say:Merci ! Ton avis a été envoyé à l’équipe','s')}};
CFG['set|Licences et crédits']=()=>({t:'Licences et crédits',h:`<div class="card pad v21hero v24big"><span class="v24ver">©</span><b>Licences et crédits</b><p class="mu">Qui possède quoi, et ce que My UJLoG utilise pour fonctionner.</p></div>`+
H.sec('Propriété')+H.card([H.det('Nom et logo','Le nom, le logo et l’identité visuelle de l’UJLoG appartiennent à l’Université Jean Lorougnon Guédé. Toute reproduction doit être autorisée.'),H.det('Armoiries et logos partenaires','Les armoiries de la République de Côte d’Ivoire, le logo du CROU-D et ceux des organismes cités appartiennent à leurs propriétaires.'),H.det('Contenus publiés','Chaque auteur reste propriétaire de ses publications et en garantit les droits. Voir les Standards de la communauté.')])+
H.sec('Conception')+H.card([H.row('shd','Éditeur','','SIAMS'),H.row('home','Propriétaire','','UJLoG'),H.row('doc','Licence','','Usage universitaire')])+
H.sec('Composants libres')+H.card([H.row('doc','Bricolage Grotesque','Polices des titres','OFL 1.1'),H.row('doc','Figtree','Police du texte','OFL 1.1'),H.row('grid','Icônes','Jeu d’icônes de l’application','Libre'),H.det('SIL Open Font License 1.1','Licence libre qui permet d’utiliser, copier et intégrer les polices dans une application, à condition de conserver la mention de licence.')])+
H.sec('Remerciements')+H.card([L('hrt','Dédicace et remerciements','',K('Dédicace'))])+
H.sec('Un droit d’auteur à signaler ?')+H.card([L('cht','Contacter l’assistance','Réponse sous 48 h',K('Contacter l’assistance'))])+
`<p class="v24ft">© 2026 SIAMS · Université Jean Lorougnon Guédé. Tous droits réservés.</p>`});
['Langue','Accessibilité','Économiseur de données','Compte privé','Comptes bloqués','Temps d’écran et bien-être','Statut du compte','À propos'].forEach(k=>CFG['home|'+k]=CFG['set|'+k]);CFG['pro|Consulter le statut de mon compte']=CFG['set|Statut du compte'];

/* ===== v112 · Marketplace : mode d’utilisation, fonctionnalités, à propos, confidentialité, conditions (source unique app + marketplace) ===== */
const MKD=[
 {t:'Mode d’utilisation',i:'book',s:'Découvrir, commander et suivre',b:[
  ['p','La Marketplace réunit les boutiques et la restauration du campus dans une seule vitrine. Tu l’ouvres depuis l’icône en haut de l’écran d’accueil.'],
  ['h','Commander en 5 étapes'],
  ['ol',['Parcours la vitrine, les boutiques ou les catégories, ou tape un mot dans la recherche.','Ouvre une fiche article, choisis la quantité puis ajoute-la au panier.','Ouvre le panier : les articles sont regroupés par boutique, avec un sous-total pour chacune.','Touche « Commander » : tes informations d’étudiant sont déjà remplies, tu choisis la livraison et le moyen de paiement proposé par la boutique.','Suis ta commande depuis « Mes commandes » et les notifications.']],
  ['h','Bon à savoir'],
  ['ul',['Chaque boutique encaisse sa propre commande : si ton panier contient plusieurs boutiques, les commandes s’enchaînent une par une.','Tu n’as pas de compte à créer : la Marketplace utilise ton profil My UJLoG.','Le mode clair ou sombre suit automatiquement celui de l’application.']]]},
 {t:'Fonctionnalités',i:'grid',s:'Tout ce que la Marketplace permet',b:[
  ['h','Découvrir'],
  ['ul',['Vitrine d’accueil avec boutiques à découvrir, offres du moment et nouveautés.','Recherche, catégories et articles vus récemment.','Boutiques en ligne et restauration (plats disponibles aujourd’hui).','Pages boutique avec logo, description et badge de boutique vérifiée.']],
  ['h','Acheter'],
  ['ul',['Fiche article avec photos, prix, ancien prix et stock limité.','Favoris et articles similaires.','Panier unique regroupé par boutique, avec total général.','Paiement proposé par chaque boutique : Wave, Orange Money ou paiement à la livraison.','Reçu ou justificatif demandé après chaque paiement mobile.']],
  ['h','Suivre'],
  ['ul',['Historique et suivi de tes commandes, avec bannière de commande en cours.','Notifications et messages des boutiques.']],
  ['h','Partager et vendre'],
  ['ul',['Partage d’un article ou d’une boutique avec tes camarades.','Bouton « Partenaire » : choisis un abonnement (Standard ou Pro), puis ouvre ta boutique My UJLoG, sans commission sur tes ventes.']],
  ['h','Confort'],
  ['ul',['Thème clair ou sombre synchronisé avec l’application.','Profil étudiant transmis automatiquement : pas de nouveau compte.']]]},
 {t:'À propos de la Marketplace',i:'home',s:'Qui l’édite et à quoi elle sert',b:[
  ['p','La Marketplace est le centre commercial du campus de l’Université Jean Lorougnon Guédé : une vitrine unique pour trouver ce que vendent les étudiants et les boutiques partenaires, et se le faire livrer.'],
  ['ul',['Éditeur : SIAMS, en partenariat avec l’UJLoG.','Technologie : boutiques et commandes Boutique My UJLoG, intégrées dans My UJLoG.','Version : 1.1 · mise à jour du 11 novembre 2026.']],
  ['p','Les boutiques sont indépendantes : chacune fixe ses prix, ses stocks, ses délais et ses moyens de paiement.']]},
 {t:'Confidentialité Marketplace',i:'shd',s:'Les données utilisées pour commander',b:[
  ['p','Pour te livrer, la Marketplace transmet à la boutique concernée uniquement ce qui est utile à ta commande.'],
  ['h','Données partagées'],
  ['ul',['Ton nom, ton numéro de téléphone et ton e-mail, issus de ton profil My UJLoG.','Le lieu de livraison et, si tu l’autorises, ta position pour guider le livreur.','Le contenu de ta commande et le justificatif de paiement.']],
  ['h','Ce que nous ne faisons pas'],
  ['ul',['Aucune revente de tes données.','Aucun suivi publicitaire entre applications.','Tes mots de passe et codes de paiement ne sont jamais demandés.']],
  ['h','Tes choix'],
  ['p','Tu peux refuser la géolocalisation, vider ton panier à tout moment et demander l’export ou la suppression de tes données depuis le Centre de confidentialité.'],
  ['ln','Ouvrir le Centre de confidentialité','set|Centre de confidentialité']]},
 {t:'Conditions et politique d’achat',i:'doc',s:'Commandes, paiements, livraisons, retours',b:[
  ['p','En commandant sur la Marketplace, tu acceptes ces règles en plus des conditions d’utilisation de My UJLoG.'],
  ['h','Commandes et paiements'],
  ['ul',['Le prix affiché est celui de la boutique, en francs CFA.','La commande est confirmée quand la boutique l’accepte.','Le paiement se fait selon les moyens proposés par la boutique ; garde ton justificatif.']],
  ['h','Livraison, retours et litiges'],
  ['ul',['Les délais et frais de livraison sont indiqués par la boutique avant la validation.','Retours et remboursements : ils dépendent de la politique de la boutique, à demander avant d’acheter.','En cas de problème, contacte d’abord la boutique, puis l’assistance My UJLoG.']],
  ['h','Règles pour les vendeurs'],
  ['ul',['Vendre uniquement des articles légaux et décrits honnêtement.','Respecter les standards de la communauté et les droits d’auteur.','Une boutique qui enfreint ces règles peut être suspendue.']],
  ['ln','Lire les conditions et politiques','set|Conditions et politiques']]}
];
window.UJMKDOC={lead:['La Marketplace My UJLoG','Tout le campus dans une seule vitrine : boutiques étudiantes, restauration, livraison et suivi.'],list:MKD};
const MKG=mkGuide('mkp','Marketplace',window.UJMKDOC.lead,[['6','moyens de paiement'],['1','panier unique'],['24/7','vitrine ouverte']],MKD);
const MKSOON=()=>({t:'Marketplace',h:'<section class="card pad"><b>Marketplace</b><p class="mu" style="margin-top:8px">Cette fonctionnalité n’est pas encore en service. Vous serez informé(e) ultérieurement de sa mise en disponibilité.</p></section>'});CFG['set|Marketplace']=MKSOON;CFG['home|Marketplace']=MKSOON;
const MKR=x=>L(x.i,x.t,x.s,'dart:mkp|'+x.t);
const MKADD=(k,pick)=>{const f=CFG['set|'+k];if(!f)return;const w=()=>{const r=f();r.h=r.h.replace('<p class="v24ft">',H.sec('Marketplace')+H.card(MKD.filter((x,i)=>pick.includes(i)).map(MKR))+'<p class="v24ft">');if(!r.h.includes('Marketplace</'))r.h+=H.sec('Marketplace')+H.card(MKD.filter((x,i)=>pick.includes(i)).map(MKR));return r};CFG['set|'+k]=w;CFG['home|'+k]=w};
MKADD('À propos',[0,1,2,3,4]);MKADD('Conditions et politiques',[3,4]);MKADD('Comment ça marche',[0,1]);

renderSol();
})();

}catch(e){console.error("[ujlog] v99-menu-fonctionnel",e)}
/* ==== v24-js (global) ==== */
/* Encodeur QR (octets, correction H, versions 1-6) */
const ujQR=(()=>{
const EC=[0,17,28,22,16,22,28],NB=[0,1,1,2,4,4,4];
const gm=(a,b)=>{let r=0;for(;b;b>>=1){if(b&1)r^=a;a<<=1;if(a&256)a^=285}return r};
const gen=d=>{const r=Array(d-1).fill(0);r.push(1);let t=1;for(let i=0;i<d;i++){for(let j=0;j<r.length;j++){r[j]=gm(r[j],t);if(j+1<r.length)r[j]^=r[j+1]}t=gm(t,2)}return r};
const rs=(dat,g)=>{const r=g.map(()=>0);for(const b of dat){const f=b^r.shift();r.push(0);g.forEach((c,i)=>r[i]^=gm(c,f))}return r};
const raw=v=>{let r=(16*v+128)*v+64;if(v>=2){const n=(v/7|0)+2;r-=(25*n-10)*n-55}return r};
return text=>{
 const b=[...new TextEncoder().encode(text)];let v=1;
 const cap=v=>(raw(v)>>3)-EC[v]*NB[v];
 while(v<6&&cap(v)*8<4+8+b.length*8)v++;
 if(cap(v)*8<4+8+b.length*8)throw Error('QR trop long');
 const bits=[],put=(x,n)=>{for(let i=n-1;i>=0;i--)bits.push(x>>i&1)};
 put(4,4);put(b.length,8);b.forEach(x=>put(x,8));
 const C=cap(v)*8;put(0,Math.min(4,C-bits.length));while(bits.length%8)bits.push(0);
 const dw=[];for(let i=0;i<bits.length;i+=8)dw.push(parseInt(bits.slice(i,i+8).join(''),2));
 for(let p=0xEC;dw.length<cap(v);p^=0xEC^0x11)dw.push(p);
 const nb=NB[v],el=EC[v],rc=raw(v)>>3,ns=nb-rc%nb,sl=rc/nb|0,g=gen(el),bl=[];
 for(let i=0,k=0;i<nb;i++){const d=dw.slice(k,k+sl-el+(i<ns?0:1));k+=d.length;const e=rs(d,g);if(i<ns)d.push(0);bl.push(d.concat(e))}
 const out=[];for(let i=0;i<bl[0].length;i++)bl.forEach((q,j)=>{if(i!=sl-el||j>=ns)out.push(q[i])});
 const n=v*4+17,m=[...Array(n)].map(()=>Array(n).fill(0)),fn=[...Array(n)].map(()=>Array(n).fill(false));
 const set=(x,y,d)=>{m[y][x]=d?1:0;fn[y][x]=true};
 for(let i=0;i<n;i++){set(6,i,i%2==0);set(i,6,i%2==0)}
 const fd=(x,y)=>{for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){const d=Math.max(Math.abs(dx),Math.abs(dy)),X=x+dx,Y=y+dy;if(X>=0&&X<n&&Y>=0&&Y<n)set(X,Y,d!=2&&d!=4)}};
 fd(3,3);fd(n-4,3);fd(3,n-4);
 if(v>1){const na=(v/7|0)+2,st=Math.ceil((v*4+4)/(na*2-2))*2,ps=[6];for(let p=n-7;ps.length<na;p-=st)ps.splice(1,0,p);
  ps.forEach((x,i)=>ps.forEach((y,j)=>{if((i==0&&j==0)||(i==0&&j==na-1)||(i==na-1&&j==0))return;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)set(x+dx,y+dy,Math.max(Math.abs(dx),Math.abs(dy))!=1)}))}
 const fmt=mk=>{const d=2<<3|mk;let r=d;for(let i=0;i<10;i++)r=r<<1^(r>>9)*0x537;const f=(d<<10|r)^0x5412,bt=i=>f>>i&1;
  for(let i=0;i<=5;i++)set(8,i,bt(i));set(8,7,bt(6));set(8,8,bt(7));set(7,8,bt(8));for(let i=9;i<15;i++)set(14-i,8,bt(i));
  for(let i=0;i<8;i++)set(n-1-i,8,bt(i));for(let i=8;i<15;i++)set(8,n-15+i,bt(i));set(8,n-8,1)};
 fmt(0);
 let i=0;const tot=out.length*8;
 for(let r=n-1;r>=1;r-=2){if(r==6)r=5;for(let vt=0;vt<n;vt++)for(let j=0;j<2;j++){const x=r-j,y=((r+1)&2)==0?n-1-vt:vt;if(!fn[y][x]&&i<tot){m[y][x]=out[i>>3]>>(7-(i&7))&1;i++}}}
 const MK=[(x,y)=>(x+y)%2==0,(x,y)=>y%2==0,(x,y)=>x%3==0,(x,y)=>(x+y)%3==0,(x,y)=>((x/3|0)+(y/2|0))%2==0,(x,y)=>x*y%2+x*y%3==0,(x,y)=>(x*y%2+x*y%3)%2==0,(x,y)=>((x+y)%2+x*y%3)%2==0];
 const ap=k=>{for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(!fn[y][x]&&MK[k](x,y))m[y][x]^=1};
 const pen=()=>{let p=0,dk=0;const P=[1,0,1,1,1,0,1,0,0,0,0],Q=[0,0,0,0,1,0,1,1,1,0,1];
  const line=a=>{let run=1;for(let i=1;i<=n;i++){if(i<n&&a[i]==a[i-1])run++;else{if(run>=5)p+=run-2;run=1}}
   for(let i=0;i+11<=n;i++){let f=1,s=1;for(let j=0;j<11;j++){if(a[i+j]!=P[j])f=0;if(a[i+j]!=Q[j])s=0}p+=40*(f+s)}};
  for(let y=0;y<n;y++){line(m[y]);line(m.map(r=>r[y]));for(let x=0;x<n;x++){dk+=m[y][x];if(x&&y&&m[y][x]==m[y][x-1]&&m[y][x]==m[y-1][x]&&m[y][x]==m[y-1][x-1])p+=3}}
  return p+Math.floor(Math.abs(dk*20-n*n*10)/(n*n))*10};
 let bm=0,bp=1e9;for(let k=0;k<8;k++){ap(k);fmt(k);const q=pen();if(q<bp){bp=q;bm=k}ap(k)}
 ap(bm);fmt(bm);return m};
})();
if(typeof module!=='undefined')module.exports=ujQR;

(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic=(n,s=22)=>`<svg class="i" aria-hidden="true" style="width:${s}px;height:${s}px"><use href="#${n}"/></svg>`;
const toast=m=>{const t=$('#toast');if(!t)return;t.textContent=m;t.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('on'),2400)};
const HD=()=>{try{return MB[0].h||'vous'}catch(e){return 'vous'}},URL_=()=>'https://ujlog.app/@'+HD()+'?src=qr',MM=()=>$('#mymenu');
const lbl=r=>((r.querySelector('b')||{}).textContent||'').trim();
const goTo=id=>{const g=document.createElement('button');g.dataset.go=id;g.hidden=true;($('#a4')||document.body).appendChild(g);g.click();g.remove()};
/* ---------- Menu : infos étudiant retirées ---------- */
const mm=MM(),home=mm&&$('#mmhome',mm);
if(home){const hold=document.createElement('div');hold.id='v24-hold';hold.hidden=true;home.appendChild(hold);
 ['Compte','Faire vérifier mon profil','Ajouter des éléments à la une','Modifier le profil','Ton code QR','Ajouter un compte','Se déconnecter'].forEach(l=>{const r=$$('button.li',home).find(b=>lbl(b)==l);if(r)hold.appendChild(r)});
 $$('.mms',home).forEach(p=>{if(p.textContent.trim()=='Compte et confidentialité')p.textContent='Confidentialité'})
 const T=t=>$$('.mms',home).find(p=>p.textContent.trim()==t),C=t=>{const p=T(t);return p&&p.nextElementSibling},rows=c=>c?$$(':scope>.li',c):[];
 const par=C('Paramètres'),dm=$('#dmode',home);
 if(par&&dm){['Ressources','Outils personnels'].forEach(t=>{const c=C(t);rows(c).forEach(r=>par.insertBefore(r,dm));if(c)c.remove();const p=T(t);if(p)p.remove()})}
 const aide=C('Aide et assistance'),plus=C('Plus de paramètres');
 if(aide&&plus){rows(plus).forEach(r=>aide.appendChild(r));plus.remove();T('Plus de paramètres').remove()}
 $$(':scope>.card',home).forEach(c=>{if(!$('.li',c)){const p=c.previousElementSibling;if(p&&p.classList.contains('mms'))p.remove();c.remove()}})}
/* ---------- Code QR professionnel ---------- */
const qrSvg=()=>{const m=ujQR(URL_()),n=m.length,Z=4,N=n+2*Z,c=n>>1,K='#0B1630',G='#0E5A2B';let d='';
 const fz=(x,y)=>(x<8&&y<8)||(x>=n-8&&y<8)||(x<8&&y>=n-8),cz=(x,y)=>Math.abs(x-c)<=4&&Math.abs(y-c)<=4;
 m.forEach((r,y)=>r.forEach((v,x)=>{if(v&&!fz(x,y)&&!cz(x,y))d+=`<rect x="${x+Z+.04}" y="${y+Z+.04}" width=".92" height=".92" rx=".3"/>`}));
 const eye=(x,y)=>`<rect x="${x+Z}" y="${y+Z}" width="7" height="7" rx="1.4" fill="${G}"/><rect x="${x+Z+1}" y="${y+Z+1}" width="5" height="5" rx=".8" fill="#fff"/><rect x="${x+Z+2}" y="${y+Z+2}" width="3" height="3" rx=".8" fill="${G}"/>`;
 const lo=c-4+Z,lg=typeof LOGO!='undefined'?LOGO:'';
 return `<svg id="v24qr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${N} ${N}" role="img" aria-label="Code QR de ton profil My UJLoG"><rect width="${N}" height="${N}" rx="2" fill="#fff"/><g fill="${K}">${d}</g>${eye(0,0)}${eye(n-7,0)}${eye(0,n-7)}<rect x="${lo-.1}" y="${lo-.1}" width="9.2" height="9.2" rx="2.2" fill="#fff"/>${lg?`<image href="${lg}" x="${lo+.8}" y="${lo+.8}" width="7.4" height="7.4" preserveAspectRatio="xMidYMid meet"/>`:''}</svg>`};
const nm=()=>(($('#mmpf .fl b')||{}).textContent||'[NOM Prénom]').trim();
const renderQR=()=>{const p=$('#mmp-qr');if(!p)return;let w=$('.v24q',p);if(!w){$$(':scope>:not(.mmh)',p).forEach(x=>x.remove());w=document.createElement('div');w.className='v24q';p.appendChild(w)}
 w.innerHTML=`<div class="v24qc"><div class="v24qk">My UJLoG · Code QR</div><div class="v24qp">${qrSvg()}</div><div class="v24qn">${esc(nm())}</div><div class="v24qh">@${HD()} · ujlog.app/@${HD()}</div></div><p class="v24qt">Scanne ce code avec l’appareil photo d’un téléphone pour ouvrir ce profil.</p><div class="row" style="gap:10px"><button class="btn" data-v24="qdl">${ic('dl',20)}Télécharger</button><button class="btn s" data-v24="qsh">${ic('shr',20)}Partager</button></div>`};
const pq=$('#mmp-qr');if(pq){new MutationObserver(()=>{if(!pq.hidden)renderQR()}).observe(pq,{attributes:true,attributeFilter:['hidden']});if(!pq.hidden)renderQR()}
const dl=()=>{const s=$('#v24qr');if(!s)return;const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=c.height=1100;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,1100,1100);x.drawImage(img,0,0,1100,1100);c.toBlob(b=>{if(!b)return toast('Téléchargement indisponible');const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='ujlog-code-qr.png';document.body.appendChild(a);a.click();a.remove();toast('Code QR enregistré')},'image/png')};img.onerror=()=>toast('Téléchargement indisponible');const x=s.cloneNode(true);x.setAttribute('width',1100);x.setAttribute('height',1100);img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(new XMLSerializer().serializeToString(x))};
const sh=()=>{if(navigator.share)navigator.share({title:'My UJLoG',url:'https://ujlog.app/@'+HD()}).catch(()=>{});else{try{navigator.clipboard.writeText('https://ujlog.app/@'+HD())}catch(e){}toast('Lien du profil copié')}};
/* ---------- Mon espace ---------- */
let ent=null,ver=(window.UJP&&window.UJP.ver)?4:0;
const chip=()=>{const t=ver>=4?'Profil vérifié':ver?`Vérification ${ver}/4`:'À faire vérifier',k=ver>=4?'ok':ver?'p':'';return `<button type="button" class="v24vf ${k}" data-v24="o:Faire vérifier mon profil">${ic('vbd',18)}${t}</button>`};
const av=()=>{try{return MB[0].av||''}catch(e){return ''}};
const build=()=>{const q=$('#a50 .qk'),box=q&&q.parentElement;if(!box||$('.v24id2',box))return;
 const old=$$('.card',box).find(c=>/UJ-ID/.test(c.textContent)&&!$('button',c));
 const id=document.createElement('div');id.className='card v24id2';box.insertBefore(id,q);
 const info=document.createElement('div');info.id='v24info';
 const R=(i,l,v,k)=>`<button type="button" class="li v24r" data-ujf="${k}" style="width:100%;text-align:left">${ic(i)}<div class="fl"><small>${l}</small><b class="mono">${esc(String(v))}</b></div>${k=='id'||k=='em'?'':ic('chv')}</button>`;
 const rows=()=>{const U=window.UJX||{};return R('doc','UJ-ID',(window.UJID?window.UJID():U.id)||'UJ-AGRO-26-ZDA','id')+R('cal','Né(e) le',(U.dn?U.dn.split('-').reverse().join('/'):'À renseigner'),'dn')+R('cap','UFR et filière',(U.ufr||'')+' · '+(U.fi||''),'ufr')+R('cap','Niveau',U.nv||'','nv')+R('pho','Mobile',U.tel||'À renseigner','tel')+R('news','E-mail',U.em||'','em')+(()=>{const lg=U.lg;let t;if(lg=='Cité universitaire')t=['Résidence',['Cité universitaire',U.bt&&'Bât. '+U.bt,U.ch&&'Chambre '+U.ch].filter(Boolean).join(' · ')];else if(lg=='Quartier')t=['Quartier',U.qt||'Quartier à préciser'];else t=['Quartier / résidence','À renseigner'];return R('home',t[0],t[1],'lg')})()+R('grp','Vie associative',(U.as||'').split('|').filter(Boolean).map(x=>x.replace(':',' : ')).join(' · ')||'À renseigner','as')};window.UJROWS=rows;
 const A=(i,t,s,a)=>`<button type="button" class="li" data-v24="${a}" style="width:100%;text-align:left">${ic(i)}<div class="fl"><b>${t}</b><small class="mu" style="display:block;font-size:13px">${s}</small></div>${ic('chv')}</button>`;
 info.style.cssText='display:flex;flex-direction:column;gap:10px';
 info.innerHTML=`<h3 class="v24h">Mes informations</h3><div class="card" id="v24ib">${rows()}</div><h3 class="v24h">Mon compte</h3><div class="card">${A('usr','Informations du compte','Nom d’utilisateur, UJ-ID, contacts','o:Compte')}<div id="v24vr"></div></div><h3 class="v24h">Profil et accès</h3><div class="card"><button type="button" class="li" data-pedit="1" style="width:100%;text-align:left">${ic('pen')}<div class="fl"><b>Modifier le profil</b></div>${ic('chv')}</button>${A('qr','Ton code QR','Pour ouvrir ton profil en le scannant','o:Ton code QR')}<button type="button" class="li" data-v24="o:Se déconnecter" style="width:100%;text-align:left;color:var(--red)">${ic('shd')}<div class="fl"><b>Se déconnecter</b></div></button></div>`;
 if(old)old.replaceWith(info);else box.insertBefore(info,$('h3',box)||null);
 refresh()};
const refresh=()=>{const id=$('.v24id2');if(!id)return;const a=av();const ib=$('#v24ib');if(ib&&window.UJROWS)ib.innerHTML=window.UJROWS();
 id.innerHTML=`<span class="v24av" data-ujf="av"${a?` style="background-image:url('${a}')"`:''}>${a?'':ic('usr',26)}</span><div class="fl"><b>${esc(nm())}</b><small>${esc(((window.UJX||{}).ufr||'')+' · '+((window.UJX||{}).fi||'')+' · '+((window.UJX||{}).nv||''))}</small>${chip()}</div>`;
 const r=$('#v24vr');if(r)r.innerHTML=`<button type="button" class="li" data-v24="o:Faire vérifier mon profil" style="width:100%;text-align:left;border-top:1px solid var(--ln)">${ic('vbd')}<div class="fl"><b>Vérification du profil</b><small class="mu" style="display:block;font-size:13px">${ver>=4?'Badge certifié actif':'Obtiens ton badge certifié'}</small></div><span class="mu mono" style="font-size:13px;font-weight:700">${ver}/4</span>${ic('chv')}</button>`};
const openIn=l=>{const m=MM(),h=m&&$('#mmhome',m);const row=h&&$$('button.li',h).find(b=>lbl(b)==l);if(!row)return;goTo('a4');m.hidden=false;row.click();setTimeout(()=>{if(!$$('.mmpage',m).some(p=>!p.hidden)){leave();return}ent={t:($('#mxt0')||{}).textContent||'',p:row.dataset.mmp||''}},0)};
const leave=()=>{const b=$('#mxb0'),x=b&&b.textContent.match(/(\d) sur 4 étapes/);if(x)ver=+x[1];if(b&&/Ton profil est vérifié/.test(b.textContent))ver=4;window.UJVER=ver;const t=$('#mypr .tkt');if(t&&ver>=4&&!$('.vb',t)&&window.UJBDG)t.insertAdjacentHTML('beforeend',window.UJBDG('EC',24));ent=null;MM().hidden=true;goTo('a50');refresh()};
addEventListener('click',e=>{const t=e.target.closest?e.target:null;if(!t)return;
 const b=t.closest('[data-v24]');
 if(b){e.preventDefault();e.stopPropagation();const k=b.dataset.v24;if(k=='qdl')dl();else if(k=='qsh')sh();else if(k=='o:Faire vérifier mon profil')window.UJV_GO();else if(k.startsWith('o:'))openIn(k.slice(2));return}
 if(t.closest('[data-go="a50"]'))setTimeout(refresh,60);
 const bk=t.closest('#mymenu [data-mxb],#mymenu [data-mmb]'),m=MM();
 if(bk&&ent&&m&&!m.hidden){const h=$('#mxt0'),d=$('#mmp-det'),q=ent.p&&$('#mmp-'+ent.p);if(q?!q.hidden:(h&&d&&!d.hidden&&h.textContent===ent.t)){e.preventDefault();e.stopPropagation();leave()}}
},true);
build();window.UJV_REFRESH=refresh;window.UJV_OPEN=()=>{window.UJV_BYPASS=1;try{openIn('Faire vérifier mon profil')}catch(e){}setTimeout(()=>{window.UJV_BYPASS=0},500)};window.UJV_SET=()=>{ver=4;window.UJVER=4;try{S.ver=4}catch(e){}const t=$('#mypr .tkt');if(t&&!$('.vb',t)&&window.UJBDG)t.insertAdjacentHTML('beforeend',window.UJBDG('EC',24));refresh()};if(ver>=4)setTimeout(window.UJV_SET,300);
})();

;
/* ==== bloc28 ==== */
try{

/* v25 : point rouge d'Accueil = publications récentes pas encore consultées.
   Il disparaît quand toutes sont passées à l'écran ; une nouvelle publication le rallume. */
(()=>{
const root=document.documentElement,sc=document.querySelector('#a1 .sc');if(!sc)return;
const seen=new WeakSet();
const upd=()=>{root.toggleAttribute('data-hnew',[...sc.querySelectorAll('.ig')].some(a=>!seen.has(a)))};
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){seen.add(e.target);io.unobserve(e.target)}});upd()},{threshold:[.3]});
const scan=()=>{sc.querySelectorAll('.ig').forEach(a=>{if(!seen.has(a)&&!a._o){a._o=1;io.observe(a)}});upd()};
new MutationObserver(scan).observe(sc,{childList:true,subtree:true});
scan();
})();

}catch(e){console.error("[ujlog] bloc28",e)}
/* ==== bloc29 ==== */
try{

/* v25 : secouer le téléphone -> barre « Signaler un problème » qui monte du bas */
(()=>{
const C=['Un bug ou un écran qui ne répond pas','Un contenu inapproprié','Connexion ou compte','Services du campus','Vérification du profil','Autre problème'];
let el,bk,sel=null,open=false;
const toast=m=>{const t=document.getElementById('toast');if(!t)return;t.textContent=m;t.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('on'),2400)};
const build=()=>{if(el)return;bk=document.createElement('div');bk.className='v25rb';el=document.createElement('div');el.className='v25rs';el.setAttribute('role','dialog');el.setAttribute('aria-label','Signaler un problème');
 el.innerHTML='<i class="gr"></i><h3>Signaler un problème</h3><p>Choisis ce qui ne va pas.</p><div class="ro">'+C.map((c,i)=>'<button type="button" class="rc" aria-pressed="false" data-i="'+i+'">'+c+'</button>').join('')+'</div><textarea placeholder="Décris le problème (facultatif)" maxlength="300"></textarea><button type="button" class="rs" disabled>Envoyer le signalement</button>';
 document.body.append(bk,el);
 bk.addEventListener('click',close);
 el.addEventListener('click',e=>{const b=e.target.closest('.rc');if(b){sel=+b.dataset.i;el.querySelectorAll('.rc').forEach(x=>x.setAttribute('aria-pressed',x===b));el.querySelector('.rs').disabled=false;return}
  if(e.target.closest('.rs')&&sel!=null){close();toast('Merci, ton signalement est envoyé')}})};
const show=()=>{if(open)return;build();sel=null;el.querySelectorAll('.rc').forEach(x=>x.setAttribute('aria-pressed','false'));el.querySelector('textarea').value='';el.querySelector('.rs').disabled=true;open=true;bk.classList.add('on');el.classList.add('on');try{navigator.vibrate&&navigator.vibrate(60)}catch(e){}};
const close=()=>{open=false;bk&&bk.classList.remove('on');el&&el.classList.remove('on')};
addEventListener('keydown',e=>{if(e.key=='Escape')close()});
window.ujShake=show;
/* détection de secousse */
let last=0,hits=0,t0=0,cool=0;
const onMotion=e=>{const a=e.accelerationIncludingGravity;if(!a)return;const m=Math.abs(a.x||0)+Math.abs(a.y||0)+Math.abs(a.z||0),n=Date.now();
 if(n<cool)return;const d=Math.abs(m-last);last=m;
 if(d>28){if(n-t0>900)hits=0;t0=n;if(++hits>=3){hits=0;cool=n+2500;show()}}};
const start=()=>addEventListener('devicemotion',onMotion);
if(typeof DeviceMotionEvent!=='undefined'&&typeof DeviceMotionEvent.requestPermission==='function'){
 const ask=()=>{removeEventListener('click',ask,true);DeviceMotionEvent.requestPermission().then(r=>{if(r==='granted')start()}).catch(()=>{})};
 addEventListener('click',ask,true)}
else start();
})();

}catch(e){console.error("[ujlog] bloc29",e)}
/* ==== v28-js ==== */
try{

(()=>{
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=['Langue','Accessibilité','Économiseur de données','Contenus hors ligne','Temps d’écran et bien-être'];
const abbr=w=>w?w[0].toUpperCase()+'.':'';
const names=()=>{const M=MB[0],p=(M.fn||'').trim().split(/\s+/).filter(Boolean),nm=(M.ln||'').trim();
 if(!p.length&&!nm)return[typeof myNm=='function'?myNm():''];
 const mk=a=>a.concat(nm?[nm]:[]).join(' '),o=[mk(p)];
 for(let k=1;k<p.length;k++)o.push(mk(p.map((w,i)=>i>=1&&i<=k?abbr(w):w)));return o};
let busy=0,raf=0,obs;
const enh=()=>{
 try{if(MB[0].posts){const n=MB[0].posts.length;MB[0].posts=MB[0].posts.filter(p=>p.el&&p.el.isConnected);if(MB[0].posts.length!==n&&!enh._r){enh._r=1;try{renderMy()}finally{enh._r=0}}}}catch(_){}
 busy=1;
 try{
  const base=names(),ver=window.UJVER>=4&&window.UJBDG;
  $$('[data-ownh]').forEach(h=>{
   const w=h.clientWidth;if(!w)return;
   const k=base[0]+'|'+(ver?1:0)+'|'+w;
   if(h.dataset.nk===k&&h.firstElementChild)return;
   const sz=h.classList.contains('tkt')?24:18;
   h.classList.add('nmw');h.style.fontSize='';
   h.innerHTML=(ver?UJBDG('EC',sz):'')+'<span class="nmt"></span>';
   const t=h.querySelector('.nmt');let i=0;t.textContent=base[0];
   while(t.scrollWidth>t.clientWidth+1&&i<base.length-1){i++;t.textContent=base[i]}
   if(t.scrollWidth>t.clientWidth+1){let fs=parseFloat(getComputedStyle(h).fontSize);while(t.scrollWidth>t.clientWidth+1&&fs>15){fs-=1;h.style.fontSize=fs+'px'}}
   h.dataset.nk=k;
  });
  $$('[data-mypost]').forEach(b=>{if(b.dataset.bg)return;const p=(MB[0].posts||[])[+b.dataset.mypost];if(p){b.style.background=p.c;b.dataset.bg='1'}});
  $$('.mymenu .li').forEach(b=>{const l=((b.querySelector('b')||b).textContent||'').trim();if(RM.indexOf(l)>=0)b.remove()});
  $$('.mymenu .card').forEach(c=>{if(!c.children.length){const p=c.previousElementSibling;if(p&&p.classList.contains('mms'))p.remove();c.remove()}});
 }catch(e){}
 if(obs)obs.takeRecords();busy=0};
window.UJENH=enh;
obs=new MutationObserver(()=>{if(busy||raf)return;raf=requestAnimationFrame(()=>{raf=0;enh()})});
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-mypost]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();
 const p=(MB[0].posts||[])[+b.dataset.mypost];if(!p||!p.el)return;try{go('a1')}catch(_){}
 setTimeout(()=>{try{p.el.scrollIntoView({block:'center',behavior:'smooth'})}catch(_){}},250)},true);
addEventListener('resize',()=>enh());
addEventListener('message',e=>{if(e.data&&e.data.t=='ujvset')setTimeout(enh,300)});
const start=()=>{obs.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','hidden']});enh();setTimeout(enh,700)};
document.readyState=='loading'?addEventListener('DOMContentLoaded',start):start();
})();

}catch(e){console.error("[ujlog] v28-js",e)}
/* ==== ujmod ==== */
try{

(()=>{
const P=window.UJP||{},$=(s,r=document)=>r.querySelector(s);
const NV=['Licence 1','Licence 2','Licence 3','Master 1','Master 2','Doctorat'],UF=['Agroforesterie','Environnement','Sciences juridiques','Sciences sociales et humaines','Sciences économiques et de gestion'];
const U=window.UJX={};['id','nom','pre','em','tel','dn','ufr','nv','fi','bio','pse','ph','as','lg','qt','bt','ch'].forEach(k=>U[k]=P[k]||'');
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const full=()=>(((U.nom||'').toUpperCase()+' '+(U.pre||'')).trim())||'Étudiant';const UFC=u=>{const x=String(u||'').toLowerCase();return /agro/.test(x)?'AGRO':/environ|osc/.test(x)?'ENV':/jurid/.test(x)?'JUR':/social|humain/.test(x)?'SSH':/conom|gestion/.test(x)?'SEG':''};const LTR=w=>String(w||'').normalize('NFD').split('').filter(c=>c.charCodeAt(0)<768).join('').split(/[^A-Za-z]+/).filter(Boolean).map(x=>x[0].toUpperCase()).join('');const IDRE=/^UJ-[A-Z]{2,5}-[0-9]{2}-[A-Z]{2,5}$/;const mkId=()=>{const c=UFC(U.ufr),l=(LTR(U.nom)+LTR(U.pre)).slice(0,4);return c&&l.length>1?'UJ-'+c+'-26-'+l:''};const idf=()=>{if(!IDRE.test(String(U.id||''))){const n=mkId();if(n)U.id=n}return U.id||'UJ-AGRO-26-ZDA'};window.UJID=()=>{idf();return U.id};
const dnf=()=>{const m=(U.dn||'').split('-');return m.length==3?m[2]+'/'+m[1]+'/'+m[0]:''};
const MAP=()=>({'[ZIBD0000000000]':idf(),'[IP]':idf(),'[UJ-ID]':idf(),'[Matricule]':idf(),'[NOM Prénom]':full(),'[Nom Prénom]':full(),'[NOM]':(U.nom||'').toUpperCase(),'[PRÉNOM(S)]':U.pre,'[UFR]':U.ufr,'[Filière]':U.fi,'[LICENCE FILIÈRE]':((U.nv||'')+' '+(U.fi||'')).trim(),'[Niveau]':U.nv,'[adresse e-mail]':U.em,'[+225 00 00 00 00 00]':U.tel||'À renseigner','[JJ/MM/AAAA]':dnf()||'À renseigner','[Date] · [Lieu]':dnf()||'À renseigner','[Université] · [UFR]':'UJLoG · '+U.ufr,'[LIEU]':'—'});
let busy=0,M;
const sub=o=>{let r=o;Object.keys(M).sort((a,b)=>b.length-a.length).forEach(k=>{if(r.includes(k))r=r.split(k).join(M[k])});return r};
const pass=()=>{busy=1;M=MAP();const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),L=[];let n;while(n=w.nextNode())L.push(n);
 L.forEach(n=>{const o=n.__ujo||n.nodeValue;if(!n.__ujo&&o.indexOf('[')<0)return;const r=sub(o);if(r!==n.nodeValue){n.__ujo=o;n.nodeValue=r;const p=n.parentNode;if(p&&p.hasAttribute&&p.hasAttribute('textLength'))p.removeAttribute('textLength')}});
 document.querySelectorAll('button,.li').forEach(b=>{const t=(b.textContent||'').trim();if(t.length<70&&/^(Ajouter un compte|Changer de compte)/.test(t))(b.closest('button')||b).remove()});
 obs.takeRecords();busy=0};
let raf=0;const obs=new MutationObserver(()=>{if(busy||raf)return;raf=requestAnimationFrame(()=>{raf=0;pass()})});
const sync=()=>{try{const m=MB[0];m.fn=U.pre;m.ln=(U.nom||'').toUpperCase();m.n=((U.pre||'')+' '+(U.nom||'')).trim();m.h=U.pse||String(idf()).toLowerCase();m.g=U.ufr;if(U.bio)m.bio=U.bio;m.av=U.ph||'';if(U.cv!=null)m.cv=U.cv}catch(e){}
 try{typeof renderMy=='function'&&renderMy()}catch(e){}try{window.UJV_REFRESH&&UJV_REFRESH()}catch(e){}try{window.UJ_SYNC&&UJ_SYNC()}catch(e){}pass()};
const tst=m=>{try{toast(m)}catch(e){}};
const css=document.createElement('style');
const LT='--bg:#F2F5FB;--cd:#fff;--ink:#0B1630;--mu:#5A6580;--ln:#E0E6F2;--g:#15803D;--mint:#E4F5EA;--in:#F7F9FD;--hd:linear-gradient(160deg,#E4F5EA,#CFEBDA)',DK='--bg:#000;--cd:#0F1830;--ink:#EEF2FB;--mu:#A3AEC6;--ln:#2A3550;--g:#3DBE6A;--mint:#12301E;--in:#1A2540;--hd:linear-gradient(160deg,#12301E,#0B1A2E)';
css.textContent=`#ujed,#ujsh{${LT}}@media(prefers-color-scheme:dark){html:not([data-theme=light]) #ujed,html:not([data-theme=light]) #ujsh{${DK}}}html[data-theme=dark] #ujed,html[data-theme=dark] #ujsh{${DK}}
#ujed{position:fixed;inset:0;z-index:99999;background:var(--bg);color:var(--ink);display:flex;flex-direction:column;font:15px/1.4 Inter,system-ui,sans-serif;animation:ujin .22s ease}@keyframes ujin{from{transform:translateY(24px);opacity:0}}
#ujed *{box-sizing:border-box}#ujed .h{display:flex;align-items:center;gap:8px;padding:calc(10px + env(safe-area-inset-top,0px)) 12px 10px;background:var(--cd);border-bottom:1px solid var(--ln)}#ujed .h b{flex:1;text-align:center;font-size:17px}
#ujed .h button{height:40px;min-width:40px;padding:0 14px;border-radius:20px;font-weight:700;border:0;cursor:pointer;background:var(--in);color:var(--ink);font-size:15px}#ujed .h .ok{background:var(--g);color:#fff}#ujed .h .ok:disabled{opacity:.4;cursor:default}
#ujed .b{flex:1;overflow:auto;padding:0 0 calc(28px + env(safe-area-inset-bottom,0px))}
#ujed .cv{background:var(--hd);padding:26px 16px 22px;text-align:center}#ujed .avw{position:relative;width:116px;height:116px;margin:0 auto 12px}
#ujed .av{width:116px;height:116px;border-radius:58px;background:var(--mint) center/cover;display:grid;place-items:center;color:var(--g);font:800 36px Inter,sans-serif;border:4px solid var(--cd);box-shadow:0 6px 18px rgba(11,22,48,.2);cursor:pointer}
#ujed .cam{position:absolute;right:-2px;bottom:2px;width:38px;height:38px;border-radius:19px;background:var(--g);color:#fff;border:3px solid var(--cd);display:grid;place-items:center;cursor:pointer;padding:0}#ujed .cam svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
#ujed .nm{font:700 20px Inter,sans-serif}#ujed .hd{color:var(--mu);font-size:14px;margin-top:2px}
#ujed .cd{background:var(--cd);border-radius:20px;margin:14px 14px 0;padding:6px 16px 8px;box-shadow:0 1px 0 var(--ln)}#ujed .cd h3{font:700 13px Inter,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--mu);margin:12px 0 4px}
#ujed .f{display:block;padding:9px 0;border-bottom:1px solid var(--ln)}#ujed .f:last-child{border-bottom:0}#ujed .f>span{display:flex;justify-content:space-between;color:var(--mu);font-size:12.5px;margin-bottom:3px}
#ujed input,#ujed select,#ujed textarea{width:100%;border:0;background:transparent;color:var(--ink);font:600 16px Inter,system-ui,sans-serif;padding:4px 0;min-height:30px;color-scheme:light dark}#ujed textarea{resize:none;height:56px;font-weight:500}
#ujed select option{background:var(--cd);color:var(--ink)}#ujed input::placeholder,#ujed textarea::placeholder{color:var(--mu);font-weight:400}
#ujed .f:focus-within{border-bottom-color:var(--g)}#ujed .f:focus-within>span{color:var(--g)}
#ujed .ujl{opacity:.85}#ujed .ujl input{color:var(--mu);font-family:ui-monospace,monospace;letter-spacing:.04em}
#ujed .hint{color:var(--mu);font-size:12.5px;margin:6px 2px 8px}#ujed .v73g{padding:8px 0;border-bottom:1px solid var(--ln)}#ujed .v73g:last-child{border-bottom:0}#ujed .v73g>b{display:block;color:var(--mu);font:700 12.5px Inter,system-ui,sans-serif;margin-bottom:6px}#ujed .v73g>div{display:flex;flex-wrap:wrap;gap:6px}#ujed .v73g button{border:0;border-radius:999px;padding:7px 12px;min-height:34px;background:var(--in);color:var(--ink);font:600 13px Inter,system-ui,sans-serif}#ujed .v73g button[aria-pressed=true]{background:var(--g);color:#fff}#ujed .v73v{justify-content:space-between;align-items:center}#ujed .v73v span{font:600 15px Inter,system-ui,sans-serif;color:var(--ink)}#ujed .v73v span:before{content:"✓ ";color:var(--g)}#ujed .v73g .v73v button{width:36px;height:36px;min-height:0;padding:0;border-radius:50%;display:grid;place-items:center}#ujed .e{color:#E02020;font-size:13.5px;margin:12px 16px 0}
#ujsh{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.5);display:flex;align-items:flex-end;animation:ujf .15s}@keyframes ujf{from{opacity:0}}
#ujsh .s{width:100%;background:var(--cd);color:var(--ink);border-radius:24px 24px 0 0;padding:12px 16px calc(18px + env(safe-area-inset-bottom,0px));font:15px Inter,system-ui,sans-serif}
#ujsh .gr{width:40px;height:4px;border-radius:2px;background:var(--ln);margin:0 auto 12px}#ujsh h4{font:700 17px Inter,sans-serif;text-align:center;margin-bottom:8px}
#ujsh button{display:flex;align-items:center;gap:14px;width:100%;height:54px;padding:0 10px;border:0;border-radius:14px;background:none;color:var(--ink);font:600 16px Inter,system-ui,sans-serif;text-align:left;cursor:pointer}#ujsh button:active{background:var(--in)}#ujsh .rd{color:#E02020}#ujsh .cn{justify-content:center;background:var(--in);margin-top:6px}
#ujsh svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}`;document.head.appendChild(css);
const CAMI='<svg viewBox="0 0 24 24"><path d="M3 8a2 2 0 012-2h2l1.5-2h7L17 6h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3.5"/></svg>',GALI='<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></svg>',TRI='<svg viewBox="0 0 24 24"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 7V4h6v3"/></svg>';
const SI=q=>`<svg viewBox="0 0 24 24" aria-hidden="true">${q}</svg>`,USRI=SI('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>'),SIC={usr:USRI,mail:SI('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/>'),cap:SI('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>'),home:SI('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>'),grp:SI('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 14.5c3-.5 6 1 6 4"/>'),id:SI('<rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M15 10h3M15 14h3"/>')};
const AS=[['Sport',['Football','Handball','Basketball','Athlétisme','Arts martiaux','Autres','Aucune']],['Artisanat',['Autres','Aucune']],['Clubs',['Club de ma filière ou de mon UFR','Club scientifique ou informatique','Club de lecture ou de débat','Club humanitaire ou solidaire','Autres','Aucune']],['Musique et culture',['Théâtre','Chorale ou musique','Danse','Autres','Aucune']],['Associations et mouvements',['Association des étudiants de mon UFR','Association de ressortissants (région, village)','Mouvement religieux ou aumônerie','Mouvement scout','Autres','Aucune']]];
const open=focus=>{if($('#ujed'))return;const D=Object.assign({},U,{id:idf()}),d=document.createElement('div');if(D.cv==null)D.cv=(MB[0]&&MB[0].cv)||'';d.id='ujed';d.setAttribute('role','dialog');d.setAttribute('aria-label','Modifier le profil');
 const ini=()=>(((D.pre||'')[0]||'')+((D.nom||'')[0]||'')).toUpperCase();
 const ed=new Set(),PEN='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',asH=()=>{const cur=(D.as||'').split('|').filter(Boolean);return AS.map(([g,a])=>{const s=cur.find(x=>x.startsWith(g+':')),v=s&&s.slice(g.length+1);return v&&!ed.has(g)?`<div class="v73g"><b>${g}</b><div class="v73v"><span>${v}</span><button type="button" data-asedit="${g}" aria-label="Modifier ${g}">${PEN}</button></div></div>`:`<div class="v73g"><b>${g}</b><div>${a.map(x=>`<button type="button" data-as="${g}:${x}" aria-pressed="${s==g+':'+x}">${x}</button>`).join('')}</div></div>`}).join('')};
 const F=(k,l,t,x='',c='')=>`<label class="f ${c}"><span>${l}</span><input id="uf-${k}" type="${t||'text'}" value="${E(D[k])}" ${x} autocomplete="off"></label>`;
 d.innerHTML=`<div class="h"><button data-x aria-label="Retour"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button><b>Modifier le profil</b><button class="ok" data-s disabled>Enregistrer</button></div><div class="b"><div class="tkc2" id="uf-cvb"><button class="tkp2" data-cv>Modifier l’arrière-plan</button></div><div class="tkav2"><div class="avw"><div class="av" id="uf-av" data-ph role="button" aria-label="Changer la photo"></div><button class="cam" data-ph aria-label="Changer la photo">${CAMI}</button></div><button class="tkl2" data-ph>Modifier la photo ou l’avatar</button><div class="hd" id="uf-hd" hidden></div><div class="bp" id="uf-bp" hidden></div></div>
 <div class="cd"><h3><i>${SIC.usr}</i>Profil</h3><div class="g2">${F('pre','Prénoms','text')}${F('nom','Nom','text')}</div><label class="f at"><span>Nom d’utilisateur</span><div class="ir"><em>@</em><input id="uf-pse" type="text" value="${E(D.pse)}" maxlength="24" placeholder="${E(String(idf()).toLowerCase())}" autocomplete="off" autocapitalize="none"></div></label><label class="f"><span>Bio<em id="uf-cnt" style="font-style:normal"></em></span><textarea id="uf-bio" maxlength="80" placeholder="Présente-toi en une ligne">${E(D.bio)}</textarea></label></div>
 <div class="cd"><h3><i>${SIC.mail}</i>Coordonnées</h3>${F('em','Adresse e-mail','email','disabled','ujl')}${F('tel','Téléphone','tel','inputmode="tel"')}${F('dn','Date de naissance','date','max="'+new Date().toISOString().slice(0,10)+'"')}</div><p class="hint">L’adresse e-mail identifie ton compte : elle ne peut pas être modifiée.</p>
 <div class="cd"><h3><i>${SIC.cap}</i>Études</h3><label class="f sel"><span>UFR</span><select id="uf-ufr">${UF.map(x=>`<option ${x==D.ufr?'selected':''}>${x}</option>`).join('')}</select></label><label class="f sel"><span>Niveau</span><select id="uf-nv">${NV.map(x=>`<option ${x==D.nv?'selected':''}>${x}</option>`).join('')}</select></label>${F('fi','Filière','text')}</div>
 <div class="cd"><h3><i>${SIC.grp}</i>Vie associative</h3><div id="uf-as">${asH()}</div></div><p class="hint">Un seul choix par rubrique, comme dans les formulaires du CROU-D. Une fois choisi, il est validé : touche le crayon pour le modifier.</p>
  <div class="cd"><h3><i>${SIC.home}</i>Où habites-tu ?</h3><label class="f sel"><span>Lieu de résidence</span><select id="uf-lg"><option value="">Non renseigné</option>${['Quartier','Cité universitaire'].map(x=>`<option ${x==D.lg?'selected':''}>${x}</option>`).join('')}</select></label><div id="uf-lgq" hidden>${F('qt','Quartier','text','maxlength="60" placeholder="Ex. : Lobia, Tazibouo…"')}</div><div id="uf-lgc" hidden>${F('bt','Bâtiment','text','maxlength="30"')}${F('ch','Numéro de chambre','text','maxlength="10"')}</div></div>
  <div class="cd"><h3><i>${SIC.id}</i>Identifiant</h3>${F('id','UJ-ID','text','disabled','ujl')}</div><p class="hint">Ton UJ-ID est unique et ne change pas.</p><p class="e" id="uf-err" hidden></p>
 <input id="uf-cvf" type="file" accept="image/*" hidden><input id="uf-gal" type="file" accept="image/*" hidden><input id="uf-cam" type="file" accept="image/*" capture="user" hidden></div>`;
 document.body.appendChild(d);
 d.addEventListener('click',e=>{const b=e.target.closest('[data-as]'),p=e.target.closest('[data-asedit]');if(!b&&!p)return;if(p)ed.add(p.dataset.asedit);else{const g=b.dataset.as.split(':')[0];D.as=(D.as||'').split('|').filter(x=>x&&!x.startsWith(g+':')).concat(b.dataset.as).join('|');ed.delete(g)}$('#uf-as',d).innerHTML=asH();dirty()});
 const av=$('#uf-av',d),sv=$('[data-s]',d),dirty=()=>{sv.disabled=!['pre','nom','pse','dn','tel','fi','bio','ufr','nv','ph','as','lg','qt','bt','ch','cv'].some(k=>(D[k]||'')!==(U[k]||''))},
 hd=()=>{{const p1=(D.pre||'').trim(),n1=(D.nom||'').trim().toUpperCase(),pp=p1.split(/\s+/).filter(Boolean),nm=((pp.length>2?pp[0][0].toUpperCase()+'.':pp.join(' '))+(n1?' '+n1:'')).trim();$('#uf-hd',d).innerHTML=(nm?`<span class="v72n">${E(nm)}</span>`:'')+`<span class="v72h">@${E(D.pse||String(idf()).toLowerCase())}</span>`}const bp=$('#uf-bp',d),bb=(D.bio||'').trim();bp.textContent=bb||'Ta bio s’affichera ici';bp.classList.toggle('mt',!bb);const c=$('#uf-cnt',d),n=(D.bio||'').length;c.textContent=n+'/80';c.classList.toggle('w',n>=70)},
 pa=()=>{$('#uf-cvb',d).style.background=D.cv||'';av.style.backgroundImage=D.ph?`url('${D.ph}')`:'';if(D.ph)av.textContent='';else if(ini())av.textContent=ini();else av.innerHTML=USRI;hd();dirty();try{window.UJ_AV&&UJ_AV(D.ph)}catch(_){}};pa();
 const lgv=()=>{const v=$('#uf-lg',d).value;$('#uf-lgq',d).hidden=v!='Quartier';$('#uf-lgc',d).hidden=v!='Cité universitaire'};
  const rd=()=>{['pre','nom','pse','dn','tel','fi','qt','bt','ch'].forEach(k=>{const i=$('#uf-'+k,d);if(i)D[k]=k=='pse'?i.value.trim().toLowerCase().replace(/[^a-z0-9._]/g,''):i.value.trim()});D.bio=$('#uf-bio',d).value.trim();D.ufr=$('#uf-ufr',d).value;D.nv=$('#uf-nv',d).value;D.lg=$('#uf-lg',d).value;lgv();if(D.lg!='Quartier')D.qt='';if(D.lg!='Cité universitaire'){D.bt='';D.ch=''}};
 window.UJED_IN=()=>{rd();hd();dirty()};lgv();
 const close=()=>{const s=$('#ujsh');s&&s.remove();d.remove();try{window.UJ_AV&&UJ_AV(U.ph||'')}catch(_){}};
 const load=f=>{if(!f)return;if(!/^image\//.test(f.type)){tst('Choisis une image');return}const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const z=256,c=document.createElement('canvas'),k=Math.min(im.width,im.height);c.width=c.height=z;c.getContext('2d').drawImage(im,(im.width-k)/2,(im.height-k)/2,k,k,0,0,z,z);D.ph=c.toDataURL('image/jpeg',.85);pa()};im.src=r.result};r.readAsDataURL(f)};
 ['gal','cam'].forEach(k=>{const i=$('#uf-'+k,d);i.onchange=()=>{load(i.files[0]);i.value=''}});
 const cvLoad=f=>{if(!f)return;if(!/^image\//.test(f.type)){tst('Choisis une image');return}const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,1080/im.width),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);D.cv='url('+c.toDataURL('image/jpeg',.8)+') center/cover';pa()};im.src=r.result};r.readAsDataURL(f)};
 {const i=$('#uf-cvf',d);i.onchange=()=>{cvLoad(i.files[0]);i.value=''}}
 const cvsheet=()=>{const s=document.createElement('div');s.id='ujsh';s.innerHTML=`<div class="s" role="dialog" aria-label="Arrière-plan"><div class="gr"></div><h4>Arrière-plan du profil</h4><button data-a="cvg">${GALI}Choisir dans la galerie</button>${D.cv?`<button class="rd" data-a="cvr">${TRI}Retirer l’arrière-plan</button>`:''}<button class="cn" data-a="no">Annuler</button></div>`;
  window.UJSH_CLICK=e=>{const b=e.target.closest('button'),a=b?b.dataset.a:(e.target===s?'no':'');if(!a)return;if(a=='cvg')$('#uf-cvf',d).click();else if(a=='cvr'){D.cv='';pa()}s.remove()};document.body.appendChild(s)};
 const sheet=()=>{const s=document.createElement('div');s.id='ujsh';s.innerHTML=`<div class="s" role="dialog" aria-label="Photo de profil"><div class="gr"></div><h4>Photo de profil</h4><button data-a="cam">${CAMI}Prendre une photo</button><button data-a="gal">${GALI}Choisir dans la galerie</button>${D.ph?`<button class="rd" data-a="rm">${TRI}Retirer la photo</button>`:''}<button class="cn" data-a="no">Annuler</button></div>`;
  window.UJSH_CLICK=e=>{const b=e.target.closest('button'),a=b?b.dataset.a:(e.target===s?'no':'');if(!a)return;if(a=='cam')$('#uf-cam',d).click();else if(a=='gal')$('#uf-gal',d).click();else if(a=='rm'){D.ph='';pa()}s.remove()};document.body.appendChild(s)};
 window.UJED_CLICK=e=>{const t=e.target,b=t.closest&&t.closest('button,[data-ph]');if(!b||!d.contains(b))return;
  if(b.dataset.x!=null)close();else if(b.dataset.cv!=null)cvsheet();else if(b.dataset.ph!=null)sheet();else if(b.dataset.s!=null){rd();const er=$('#uf-err',d),bad=m=>{er.textContent=m;er.hidden=0;er.scrollIntoView({block:'center'})};er.hidden=1;
   if(!D.pre||!D.nom)return bad('Le nom et les prénoms sont obligatoires.');if(D.tel&&!/^\+?\d{8,13}$/.test(D.tel.replace(/\s/g,'')))return bad('Numéro de téléphone invalide.');
   if(D.pse==String(idf()).toLowerCase())D.pse='';
   ['nom','pre','tel','dn','ufr','nv','fi','bio','pse','ph','as','lg','qt','bt','ch','cv'].forEach(k=>U[k]=D[k]);try{parent.postMessage({t:'ujsave',o:U},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(_){}sync();close();tst('Profil mis à jour')}};
 if(focus&&focus!='av'&&focus!='em'){const i=$('#uf-'+focus,d);i&&setTimeout(()=>i.focus(),250)}else if(focus=='av')setTimeout(sheet,250)};
window.UJV_GO=()=>{if(window.UJVER>=4){tst('Ton profil est déjà vérifié');return}let host=false;const on=e=>{if(e.data&&e.data.t=='ujvack')host=true};addEventListener('message',on);const emb=parent!==window;try{if(emb)parent.postMessage({t:'ujverify'},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(e){}setTimeout(()=>{removeEventListener('message',on);if(!host&&window.UJV_OPEN)window.UJV_OPEN()},emb?700:0)};
addEventListener('click',e=>{const t=e.target;if(!t||!t.closest)return;if(t.closest('#ujsh')){window.UJSH_CLICK&&UJSH_CLICK(e);return}if(t.closest('#ujed')){window.UJED_CLICK&&UJED_CLICK(e);return}const f=t.closest('[data-ujf]');
 if(f){e.preventDefault();e.stopImmediatePropagation();if(f.dataset.ujf=='id'){try{navigator.clipboard.writeText(idf());tst('UJ-ID copié')}catch(_){tst(idf())}}else if(f.dataset.ujf=='em'){tst('L’e-mail identifie ton compte : il ne peut pas être modifié')}else open(f.dataset.ujf);return}
 if(t.closest('[data-pedit]')){e.preventDefault();e.stopImmediatePropagation();open();return}
 const b=t.closest('button');if(b&&!window.UJV_BYPASS&&/^(Faire vérifier mon profil|Vérification du profil)/.test((b.textContent||'').trim())){e.preventDefault();e.stopImmediatePropagation();window.UJV_GO()}},true);
['input','change'].forEach(n=>addEventListener(n,e=>{if(e.target&&e.target.closest&&e.target.closest('#ujed')&&window.UJED_IN)UJED_IN()},true));
addEventListener('message',e=>{if(e.data&&e.data.t=='ujvset'&&window.UJV_SET)UJV_SET()});
const start=()=>{sync();obs.observe(document.body,{childList:true,subtree:true,characterData:true});setTimeout(sync,600)};
document.readyState=='loading'?addEventListener('DOMContentLoaded',start):start();
})();

}catch(e){console.error("[ujlog] ujmod",e)}
/* ==== v29-js ==== */
try{

(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const SVG={"card": "<rect x=\"3\" y=\"7\" width=\"26\" height=\"18\" rx=\"4\" fill=\"#fff\"/><rect x=\"3\" y=\"11\" width=\"26\" height=\"4\" fill=\"#0B3D1F\" fill-opacity=\".75\"/><rect x=\"6\" y=\"18\" width=\"8\" height=\"4\" rx=\"1.2\" fill=\"var(--c)\"/><path d=\"M17 20h9\" stroke=\"var(--c)\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>", "resto": "<circle cx=\"16\" cy=\"17\" r=\"10\" fill=\"#fff\"/><circle cx=\"16\" cy=\"17\" r=\"6.2\" fill=\"none\" stroke=\"var(--c)\" stroke-width=\"1.6\"/><path d=\"M3.5 5v8M6 5v8M8.5 5v8M6 13v14\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><path d=\"M28 5c-3 2-3.5 7-3.5 10h3.5v12\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\"/>", "rw": "<rect x=\"5\" y=\"13\" width=\"22\" height=\"14\" rx=\"2.5\" fill=\"#fff\"/><rect x=\"3\" y=\"9\" width=\"26\" height=\"6\" rx=\"2\" fill=\"#fff\"/><rect x=\"14\" y=\"9\" width=\"4\" height=\"18\" fill=\"#FBBF24\"/><path d=\"M16 9c-2-5-8-5-8-1.6 0 2.2 5 1.6 8 1.6zM16 9c2-5 8-5 8-1.6 0 2.2-5 1.6-8 1.6z\" fill=\"#FBBF24\" stroke=\"#fff\" stroke-width=\"1\"/>", "doc": "<path d=\"M8 3h11l6 6v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\" fill=\"#fff\"/><path d=\"M19 3v6h6z\" fill=\"var(--c)\" fill-opacity=\".4\"/><path d=\"M10 14h10M10 18h10M10 22h6\" stroke=\"var(--c)\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>"};
const J=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(_){return d}},W=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(_){}};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt=t=>{const p=String(t||'').trim().split(/\s+/);if(p.length>=3&&p[1].length>2)p[1]=p[1][0].toUpperCase()+'.';return p.join(' ')};
const nm=()=>{try{return fmt(myNm())}catch(_){return''}};
const U=()=>window.UJX||{};
const ic=(n,s=24)=>{try{return I(n,s)}catch(_){return''}};


const sheet=(h,on)=>{$('.v29sh')&&$('.v29sh').remove();const d=document.createElement('div');d.className='v29sh';d.innerHTML=`<div class="v29sp">${h}</div>`;d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-x29]'))d.remove()});document.body.appendChild(d);on&&on(d);return d};
const hdr=(t,s)=>`<h2>${t}<button data-x29 aria-label="Fermer">×</button></h2>${s?`<p>${s}</p>`:''}`;
/* Cartes numériques (étudiant + resto) */
try{localStorage.removeItem('uj_card')}catch(_){}
const KD={resto:{k:'uj_resto',t:'Ma carte de resto',h:'MY UJLOG · CARTE DE RESTAURATION',c:'linear-gradient(135deg,#EA580C,#F97316 55%,#FBBF24)',n:'carte de restaurant',l:'N° de carte ou IP',p:'N° '}};
const shrink=f=>new Promise(r=>{const i=new Image,u=URL.createObjectURL(f);i.onload=()=>{const k=Math.min(1,640/i.width),c=document.createElement('canvas');c.width=i.width*k;c.height=i.height*k;c.getContext('2d').drawImage(i,0,0,c.width,c.height);URL.revokeObjectURL(u);r(c.toDataURL('image/jpeg',.7))};i.src=u});
const fullNm=()=>{const u=U();return((u.nom||'')+' '+(u.pre||'')).trim()||nm()};
const readCode=async f=>{try{if(!('BarcodeDetector' in window))return'';const bm=await createImageBitmap(f),r=await new BarcodeDetector().detect(bm);return r[0]?String(r[0].rawValue||''):''}catch(_){return''}};
const parseCode=t=>{t=String(t||'').trim();const o={};if(!t)return o;try{const j=JSON.parse(t);if(j&&typeof j=='object'){o.nom=j.nom||j.name||'';o.ip=j.ip||j.IP||j.id||'';return o}}catch(_){}t.split(/[\n;|,]/).forEach(x=>{const m=x.match(/^\s*([^:=]+)[:=]\s*(.+)$/);if(m){const k=m[1].toLowerCase();if(/nom|name/.test(k))o.nom=m[2].trim();else if(/^ip|identifiant|matricule/.test(k))o.ip=m[2].trim()}});if(!o.ip&&!o.nom&&/^[\w.\-\/]{4,40}$/.test(t))o.ip=t;return o};
const cardView=kd=>{const D=KD[kd],c=J(D.k,null);if(!c)return scan(kd);const u=U(),ph=c.ph||(()=>{try{return MB[0].av||''}catch(_){return''}})();
 sheet(hdr(D.t,'Touche la carte pour la retourner.')+`<div class="v29cd" data-fl><div class="v29ci"><div class="v29cf" style="background:${D.c}"><b style="font:800 12px var(--h);letter-spacing:.06em">${D.h}</b><div style="display:flex;gap:12px;margin-top:12px"><div style="width:74px;height:90px;border-radius:12px;background:#fff3 center/cover ${ph?`url('${ph}')`:''}"></div><div style="min-width:0"><b style="font:800 17px/1.2 var(--h);text-transform:uppercase">${esc(c.nom||fullNm())}</b><small style="display:block;opacity:.92;margin-top:4px">${esc([u.ufr,u.nv].filter(Boolean).join(' · '))}</small><small style="display:block;opacity:.92;margin-top:2px">${esc(u.fi||'')}</small></div></div><b style="position:absolute;left:14px;bottom:12px;font:700 15px ui-monospace,monospace;letter-spacing:.08em">${c.ip?D.p+esc(c.ip):''}</b></div><div class="v29cb" style="padding:0;background:#fff">${c.v?`<img alt="Verso de la carte" src="${c.v}" style="width:100%;height:100%;object-fit:cover">`:''}</div></div></div><button class="v29b o" data-rs>Scanner à nouveau le verso</button>`,d=>{d.addEventListener('click',e=>{if(e.target.closest('[data-fl]'))$('.v29cd',d).classList.toggle('f');if(e.target.closest('[data-rs]'))scan(kd)})})};
const scan=(kd,o)=>{const D=KD[kd];o=o||{};
if(!o.v){sheet(hdr('Scanner ma '+D.n,'Place le verso à plat : UJIA lit toutes les infos de ta carte.')+`<div class="v82v"><video playsinline muted autoplay></video><i class="v82f"></i><span class="v82m" id="v82m">Démarrage de la caméra…</span></div><input type="file" accept="image/*" capture="environment" hidden id="v29f"><input type="file" accept="image/*" hidden id="v82g"><button class="v29b" data-pk>Prendre la photo</button><button class="v29b o" data-gl>Choisir dans la galerie</button>`,d=>{
  d.classList.add('ujfs');const vv=$('video',d),fr=$('.v82f',d),lb=$('#v82m',d),f1=$('#v29f',d),f2=$('#v82g',d);let st=null,det=null,tm=0,done=0;
  const lbl=t=>{lb.textContent=t},stop=()=>{clearTimeout(tm);if(st){st.getTracks().forEach(t=>t.stop());st=null}};
  const dark=c=>{const t=document.createElement('canvas');t.width=32;t.height=20;const x=t.getContext('2d');x.drawImage(c,0,0,32,20);const p=x.getImageData(0,0,32,20).data;let n=0;for(let i=0;i<p.length;i+=4)n+=.299*p[i]+.587*p[i+1]+.114*p[i+2];return n/640<45};
  const end=async(c,raw)=>{if(done)return;done=1;stop();fr.classList.add('ok');lbl('UJIA analyse ta carte…');if(!raw&&det){try{const r=await det.detect(c);raw=r[0]?r[0].rawValue:''}catch(_){}}let a={ip:'',lines:[],canvas:c};try{a=await UJIA.read(c,lbl)}catch(_){}const k=parseCode(raw);if(!k.ip&&a.ip)k.ip=a.ip;scan(kd,{v:a.canvas.toDataURL('image/jpeg',.85),code:k,info:a,dark:dark(c)})};
  const grab=()=>{const w=vv.clientWidth,h=vv.clientHeight,vw=vv.videoWidth,vh=vv.videoHeight,z=Math.max(w/vw,h/vh),g=10,sx=(g+(vw*z-w)/2)/z,sy=(g+(vh*z-h)/2)/z,sw=(w-2*g)/z,sh=(h-2*g)/z,k=Math.min(1,1280/sw),c=document.createElement('canvas');c.width=Math.round(sw*k);c.height=Math.round(sh*k);c.getContext('2d').drawImage(vv,sx,sy,sw,sh,0,0,c.width,c.height);return c};
  const file=async fl=>{if(!fl)return;try{const b=await createImageBitmap(fl),k=Math.min(1,1280/b.width),c=document.createElement('canvas');c.width=Math.round(b.width*k);c.height=Math.round(b.height*k);c.getContext('2d').drawImage(b,0,0,c.width,c.height);end(c,'')}catch(_){lbl('Photo illisible, réessaie.')}};
  const loop=()=>{if(done||!st)return;if(!d.isConnected){stop();return}det.detect(vv).then(r=>{if(r&&r[0]){fr.classList.add('ok');lbl('Code détecté ✓');setTimeout(()=>end(grab(),r[0].rawValue),350)}else tm=setTimeout(loop,300)}).catch(()=>{tm=setTimeout(loop,500)})};
  $('[data-pk]',d).onclick=()=>{if(st&&vv.videoWidth)end(grab(),'');else f1.click()};
  $('[data-gl]',d).onclick=()=>f2.click();f1.onchange=()=>file(f1.files[0]);f2.onchange=()=>file(f2.files[0]);
  const w=setInterval(()=>{if(!d.isConnected){stop();clearInterval(w)}},500);
  try{if('BarcodeDetector' in window)det=new BarcodeDetector()}catch(_){}
  (async()=>{try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw 0;st=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1920},height:{ideal:1080}},audio:false});if(!d.isConnected){stop();return}vv.srcObject=st;await vv.play();lbl(det?'Verso à plat, 4 coins visibles':'Verso à plat, puis touche « Prendre la photo »');if(det)loop()}catch(_){vv.style.display='none';fr.style.display='none';lbl('Caméra indisponible : touche « Prendre la photo » ou choisis une image dans la galerie.')}})();
 });return}
 const u=U(),old=J(D.k,null)||{},av=(()=>{try{return MB[0].av||''}catch(_){return''}})(),c=o.code||{};
 sheet(hdr('Informations du verso','Vérifie ce qui a été relevé, puis valide : tout est recopié sur ta carte numérique.')+`<img alt="Verso photographié" src="${o.v}" style="width:100%;max-height:42vh;object-fit:contain;background:#0B1630;border-radius:12px;display:block"><p class="mu" style="font-size:12.5px;margin:6px 0 4px;font-weight:700;color:${(c.ip||c.nom)?'var(--g)':'#B45309'}">${(c.ip||c.nom)?'UJIA a lu ta carte ✓ : vérifie les infos ci-dessous.':'UJIA n’a pas lu le numéro : saisis-le à la main ou reprends la photo.'}${o.dark?' La photo est sombre, pense à la reprendre.':''}</p>${UJIA.html(o.info)}`+`<div style="display:flex;gap:12px;align-items:center;margin:6px 0"><div style="width:74px;height:90px;border-radius:12px;background:var(--mint) center/cover ${(old.ph||av)?`url('${old.ph||av}')`:''};flex:none"></div><div style="flex:1;min-width:0"><label class="v79f"><span>Nom et prénoms</span><input id="v79n" value="${esc(c.nom||old.nom||fullNm())}" maxlength="80" autocomplete="off"></label><label class="v79f"><span>${D.l}</span><input id="v79ip" value="${esc(c.ip||old.ip||'')}" maxlength="40" placeholder="Numéro inscrit au verso" autocomplete="off"></label></div></div><p class="mu" style="font-size:12.5px;margin:2px 0 0">La photo est celle de ton profil.</p><button class="v29b" data-ok>Créer ma carte numérique</button><button class="v29b o" data-bk>Reprendre la photo</button>`,d=>{d.classList.add('ujfs');$('[data-bk]',d).onclick=()=>scan(kd);$('[data-ok]',d).onclick=()=>{if(!$('#v79ip',d).value.trim()){const i=$('#v79ip',d);i.style.boxShadow='inset 0 0 0 2px #E02020';i.focus();return}W(D.k,{v:o.v,nom:$('#v79n',d).value.trim(),ip:$('#v79ip',d).value.trim(),ph:old.ph||av,t:Date.now()});cardView(kd);hero(1)}})};
const openCard=kd=>J(KD[kd].k,null)?cardView(kd):scan(kd);
const docs=()=>sheet(hdr('Documents','Tes documents officiels, bientôt ici.')+['Certificat de scolarité','Relevés de notes','Attestations'].map(t=>`<div class="v29ln"><span class="v29lg" style="background:#2563EB">PDF</span><div class="fl" style="flex:1"><b>${t}</b><small class="mu" style="display:block">Bientôt disponible</small></div></div>`).join(''));
/* Documents et démarches : blocs d'accès rapide */
const BK=[['cap','Bulletin','Notes et bulletins','#0F766E','https://ujlog.net/universite/'],['usr','Espace étudiant CROU-D','Logement, restauration, bourses','#0E8F73','https://www.croudaloa.ci/login'],['doc','Certificat de scolarité','Bientôt disponible','#2563EB',''],['news','Relevé de notes','Bientôt disponible','#7C3AED',''],['chk','Attestation','Bientôt disponible','#C26A00','']];
const blocks=()=>{$$('#a50 .v79s').forEach(n=>n.remove());return;const g=document.createElement('div');g.className='v79s';g.innerHTML=`<div class="v29lb"><span>Documents et démarches</span></div><div class="v79g">${BK.map(([i,t,sub,col,u])=>{const inn=`<span class="v79i" style="--c:${col}">${ic(i,24)}</span><b>${t}</b><small>${sub}</small>${u?`<span class="v79a">${ic('chv',16)}</span>`:''}`;return u?`<a class="v79b" href="${u}" target="_blank" rel="noopener">${inn}</a>`:`<button type="button" class="v79b" data-v79="${esc(t)}">${inn}</button>`}).join('')}</div>`;c.after(g)};
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-v79]');if(!b)return;e.preventDefault();e.stopPropagation();sheet(hdr(b.dataset.v79,'Ce document sera bientôt disponible en ligne.')+`<button class="v29b o" data-x29>Compris</button>`)},true);
/* Hero */
const hero=force=>{const box=$('#a50 .v24id2');if(!box)return;let h=$('#a50 .v29h');if(!h){h=document.createElement('div');h.className='v29h';box.parentElement.insertBefore(h,box)}
 const u=U(),av=(()=>{try{return MB[0].av||''}catch(_){return''}})(),ver=window.UJVER>=4&&window.UJBDG,M=(()=>{try{return MB[0]}catch(_){return{}}})(),
 k=[nm(),ver,av,!!J('uj_resto',0),u.ufr,u.fi,u.nv,M.pub&&M.pub.length].join('|');if(!force&&h.dataset.k===k)return;h.dataset.k=k;
 h.innerHTML=`<div class="v29t"><span class="v29ph"><span class="v29pp" ${av?`style="background-image:url('${av}')"`:''}>${av?'':ic('usr',34)}</span></span><div style="min-width:0"><div class="v29n">${ver?UJBDG('EC',20):''}<span class="nmt">${esc(nm())}</span></div><div class="v29s">${esc([u.ufr,u.fi,u.nv].filter(Boolean).join(' · '))}</div></div></div><div class="v29st"><div><b>${(M.pub||[]).length}</b><span>Publications</span></div><div><b>${M.fw?1:0}</b><span>Suivis</span></div><div><b>0</b><span>Followers</span></div></div><div class="v29ac">${[['Ma carte','card','#16A34A'],['Resto','resto','#F97316']].map(([l,a,c])=>`<button ${a=='resto'?`data-w75="Carte de restauration"`:`data-a29="${a}"`} style="--c:${c}"><i><svg viewBox="0 0 32 32" aria-hidden="true">${SVG[a]}</svg></i>${l}</button>`).join('')}${[['cap','Bulletin','#0F766E','https://ujlog.net/universite/'],['usr','Espace CROU-D','#0E8F73','https://www.croudaloa.ci/login'],['doc','Certificat de scolarité','#2563EB',''],['news','Relevé de notes','#7C3AED',''],['chk','Attestation','#C26A00','']].map(([i,l,c,u])=>`<button type="button" ${u?`data-web="${u}" data-wt="${l}"`:`data-w75="${l}"`} style="--c:${c}"><i>${ic(i,28)}</i>${l}</button>`).join('')}</div>`;
 let c=$('#a50 .v29cr');if(!c){c=document.createElement('div');c.className='v29cr';box.parentElement.insertBefore(c,box);c.insertAdjacentHTML('beforebegin','<div class="v29lb">Emploi du temps du jour</div>')}
 if(!c.children.length)c.innerHTML=[['08:00','[Nom du cours]'],['10:00','[Nom du cours]'],['14:00','[Nom du cours]']].map(([t,n])=>`<button type="button" data-edt="1"><span class="tm">${t}</span><span class="fl" style="flex:1"><small>Aujourd’hui</small><b>${n}</b><small>[Salle] · [Enseignant]</small></span>${ic('chv',18)}</button>`).join('');
 if(!$('#a50 .v29hd')){const r=$('#a50 .row');if(r)r.insertAdjacentHTML('beforeend',`<div class="v29hd"><button data-pedit="1" aria-label="Modifier le profil">${ic('pen',20)}</button><button data-a29="qr" aria-label="Mon code QR">${ic('qr',20)}</button></div>`)}};
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('[data-og]')){e.preventDefault();e.stopPropagation();openGifts();return}if(e.target.closest&&e.target.closest('[data-edt]')){e.preventDefault();e.stopPropagation();try{go('c1')}catch(_){}return}const a=e.target.closest&&e.target.closest('[data-a29]');if(!a)return;e.preventDefault();e.stopPropagation();
  const k=a.dataset.a29;if(k=='card'){try{go('a5')}catch(_){}}else if(k=='resto'){sheet(hdr('Ma carte de resto','Cette carte sera bientôt disponible.')+`<button class="v29b o" data-x29>Compris</button>`)}else if(k=='doc')docs();else if(k=='rw'){openGifts()}else if(k=='qr'){const b=$('#v24info [data-v24="o:Ton code QR"]');b&&b.click()}},true);
/* Visiteurs */
let vShown=0;const visits=()=>(window.UJ_VISITS||J('ujlog_visits',[])).filter(Boolean);
window.UJ_VISIT=n=>{const a=J('ujlog_visits',[]);a.push(n);W('ujlog_visits',a)};
const showV=()=>{const v=visits();if(!v.length)return;let p=$('.v29vis');if(!p){p=document.createElement('div');p.className='v29vis';document.body.appendChild(p)}
 p.innerHTML=`<b>${v.length} ${v.length>1?'personnes ont':'personne a'} visité ton profil</b><div class="v29nm"><div>${v.slice(0,6).map(x=>`<div style="height:18px">${esc(x)}</div>`).join('')}</div></div>`;
 requestAnimationFrame(()=>p.classList.add('on'));let i=0;const iv=setInterval(()=>{i=Math.min(i+1,Math.min(v.length,6)-1);$('.v29nm>div',p).style.transform=`translateY(${-18*i}px)`},700);
 setTimeout(()=>{p.classList.remove('on');clearInterval(iv)},3200)};
const openGifts=()=>{const t=document.createElement('button');t.dataset.v24='o:Solde';t.style.display='none';document.body.appendChild(t);t.click();t.remove();setTimeout(()=>{const x=$('#mmp-sol [data-ac="go:sol|Cadeaux"]');x&&x.click()},600)};
const gifts=()=>{const mb=$('#mb');if(!mb)return;$$('.v29gf',mb).forEach(n=>n.remove());return;const st=window.UJGIFT&&window.UJGIFT.state();if(!st)return;const k=JSON.stringify(st);let g=$('.v29gf',mb);if(g&&g.dataset.k===k)return;g&&g.remove();
 mb.insertAdjacentHTML('afterbegin',`<div class="v29gf" data-k='${k}'><div class="v29lb"><span>Récompenses du jour</span></div><button type="button" class="v29ln" data-og="1" style="width:100%;text-align:left"><span class="v29lg" style="background:linear-gradient(150deg,#FB7185,#E11D48);--c:#E11D48"><svg viewBox="0 0 32 32" width="30" height="30">${SVG.rw}</svg></span><div class="fl" style="flex:1"><b>${st.open?'Cadeau ouvert · '+(st.won?'+'+st.won+' MONLoG':'pas de gain'):'Cadeau du jour à ouvrir'}</b><small class="mu" style="display:block">Jour ${st.n}/30 · ${esc(st.name)}</small></div>${ic('chv',18)}</button><div class="v29ln" style="justify-content:space-between"><span><small class="mu" style="display:block">Mon solde</small><b>${st.bal} MONLoG</b></span><span><small class="mu" style="display:block">Ce mois (cadeaux)</small><b>${st.m} / 5000</b></span></div></div>`)};
/* Nettoyage + observation */
let busy=0;const run=()=>{if(busy)return;busy=1;try{
 if($('#a50')&&$('#a50').offsetParent){hero();blocks();
  $$('#a50 h3').forEach(h=>{if(/Découvrir/.test(h.textContent)){h.classList.add('v29x');const n=h.nextElementSibling;n&&n.classList.add('v29x')}if(/Profil et accès/.test(h.textContent)){h.classList.add('v29x');const n=h.nextElementSibling;n&&n.classList.add('v29x')}});
  $$('#a50 .seg').forEach(s=>s.classList.add('v29x'));$$('#a50 .card').forEach(c=>{if(/Aucune cotisation|Payer ma cotisation/.test(c.textContent))c.classList.add('v29x')});
  }

 $$('#v24vr .li').forEach(b=>{const m=b.textContent.match(/(\d)\/4/);b.style.setProperty('--p',m?m[1]:0)});
 const mh=$('#mmhome');if(mh){$$('.v29lw',mh).forEach(n=>n.remove());if(!$('.v65lo',mh)){const c=document.createElement('div');c.className='card v65c';c.innerHTML='<button type="button" class="li v65lo" aria-label="Se déconnecter"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg><div class="fl"><b>Se déconnecter</b></div></button>';c.firstChild.onclick=()=>{const r=$$('button.li',mh).find(b=>!b.classList.contains('v65lo')&&/Se déconnecter/.test(b.textContent));r&&r.click()};const hold=$('#v24-hold',mh);hold?mh.insertBefore(c,hold):mh.appendChild(c)}}
 $$('#mypr .tkbn').forEach(n=>n.remove());
 $$('[data-ownh] .nmt').forEach(t=>{const f=fmt(t.textContent);if(f!==t.textContent)t.textContent=f});
 $$('[data-sx="edpseudo"]').forEach(b=>b.remove());
 $$('.mymenu .li').forEach(b=>{if(/Se déconnecter/.test(b.textContent)&&!b.classList.contains('v65lo')&&!b.classList.contains('v29out'))b.classList.add('v29out')});
 const pv=$('#mypr')&&$('#mypr').offsetParent;if(pv&&!vShown){vShown=1;setTimeout(showV,600)}if(!pv)vShown=0;
}catch(e){}obs.takeRecords();busy=0};
const obs=new MutationObserver(()=>{requestAnimationFrame(run)});
const go29=()=>{obs.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','hidden','style']});run()};
document.readyState=='loading'?addEventListener('DOMContentLoaded',go29):go29();
})();

}catch(e){console.error("[ujlog] v29-js",e)}
/* ==== ujg-js ==== */
try{

(function(){
const R=document.createElement("div");R.className="stage";R.id="ujg";R.setAttribute("role","dialog");R.setAttribute("aria-modal","true");R.setAttribute("aria-labelledby","stT");
R.innerHTML='<div class="sbar"><button id="sBack" aria-label="Retour"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><div class="stt"><small id="stS"></small><b id="stT"></b></div></div><div class="sbody" id="stBody"></div><canvas id="conf"></canvas>';
document.body.appendChild(R);
const $=id=>R.querySelector("#"+id),G=[],reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
function draw(g){
  const m=g[2];
  if(g[1]==="G") return Math.min(m,Math.max(5,Math.round(m*(.5+Math.random()*.5)/5)*5));
  const r=Math.random(),top=m>=200?.01:.05;
  if(r<.35) return 2;
  if(r<.8) return Math.max(2,Math.round(m*.2));
  if(r<1-top) return Math.round(m*.5);
  return m;
}
const GAME={3:"wheel",15:"wheel",4:"scratch",5:"box",30:"box",7:"coin",10:"box3",29:"box3",14:"wheel",21:"quiz",16:"quiz"},GM={};
let stopCam=()=>{};
const rnd=n=>Math.floor(Math.random()*n);
function openStage(d){$("stT").textContent=d?G[d-1][0]:"Chasse au trésor";$("stS").textContent=d?"Cadeau du jour · Jour "+d+" sur 30":"Événement spécial";$("stBody").innerHTML="";R.classList.add("on");}
function closeStage(){stopCam();stopCam=()=>{};R.classList.remove("on");}
function confetti(){
  const c=$("conf"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;if(reduce)return;
  const K=["#FFC83D","#fff","#7DB8FF","#4ADE80","#F87171"],P=Array.from({length:100},()=>({x:innerWidth/2,y:innerHeight*.45,vx:(Math.random()-.5)*13,vy:-Math.random()*14-3,r:Math.random()*6+3,c:K[rnd(5)]}));
  let f=0;(function s(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;x.fillStyle=p.c;x.fillRect(p.x,p.y,p.r,p.r*.6);});if(++f<120)requestAnimationFrame(s);else x.clearRect(0,0,c.width,c.height);})();
}
let cb=null;
function play(d,a,fn){G[d-1]=[a[0],a[2],a[3],a[1]];cb=fn;openStage(d);GM[GAME[d]||"box"](d,draw(G[d-1]),$("stBody"));}
function countUp(amt,ms){const el=$("cnt"),t0=performance.now(),dur=reduce?0:ms;(function step(t){const p=dur?Math.min(1,(t-t0)/dur):1;el.textContent="+"+Math.round(amt*(1-Math.pow(1-p,3))).toLocaleString("fr-FR");if(p<1)requestAnimationFrame(step);})(t0);}
const fmtN=n=>Number(n||0).toLocaleString("fr-FR");
function result(o){
  $("stBody").innerHTML='<div class="res2'+(o.lost?' lost':'')+'"><div class="rb"><span class="cn">M</span></div><small>'+o.small+'</small><h2>'+o.title+'</h2><div class="ramt"><b id="cnt">+0</b><em>MONLoG</em></div><p>'+o.note+'</p><div class="rbal"><span>Nouveau solde</span><b>'+fmtN(o.bal)+' MONLoG</b></div><button class="go" id="fin">Terminer</button></div>';
  $("fin").onclick=closeStage;$("fin").focus();countUp(o.amt,o.ms);if(o.conf)confetti();
}
function claim(d,gain){
  stopCam();const r=cb?cb(gain):{amt:gain,bal:0,extra:""},lost=G[d-1][1]==="C"&&gain===2,none=!r.amt;
  result(none?{small:"Plafond du mois",title:"Plafond atteint",amt:0,bal:r.bal,note:"Tu as atteint le plafond mensuel des cadeaux. Reviens le mois prochain."+(r.extra||""),lost:true,ms:0,conf:false}:
  {small:lost?"Pas de gros lot":"Félicitations",title:lost?"Une petite consolation":"Bravo !",amt:r.amt,bal:r.bal,note:(lost?"2 MONLoG de consolation ajoutés à ton solde.":"Ajoutés à ton solde.")+(r.extra||""),lost:lost,ms:900,conf:r.amt>2});
}

const gift=()=>'<svg class="gb" viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="gbR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF6B5E"/><stop offset="1" stop-color="#D62B2B"/></linearGradient><linearGradient id="gbL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF8A7A"/><stop offset="1" stop-color="#EF4444"/></linearGradient><linearGradient id="gbY" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFD76A"/><stop offset=".5" stop-color="#FFE9A3"/><stop offset="1" stop-color="#F5B921"/></linearGradient></defs><g><rect x="20" y="52" width="80" height="58" rx="8" fill="url(#gbR)"/><rect x="54" y="52" width="12" height="58" fill="url(#gbY)"/><rect x="20" y="97" width="80" height="13" rx="6.5" fill="#000" fill-opacity=".14"/></g><g class="lid"><rect x="13" y="36" width="94" height="22" rx="8" fill="url(#gbL)"/><rect x="54" y="36" width="12" height="22" fill="url(#gbY)"/><path d="M60 36C40 2 10 14 36 34Z" fill="url(#gbY)"/><path d="M60 36C80 2 110 14 84 34Z" fill="url(#gbY)"/><path d="M60 36C48 14 30 16 40 30Z" fill="#E0A800" fill-opacity=".35"/><circle cx="60" cy="35" r="7" fill="#F5B921"/><circle cx="58" cy="33" r="2.4" fill="#FFF1B8"/></g></svg>';
GM.box=(d,gain,b)=>{
  const T=d===30?5:d===5?3:2;let t=T;
  b.innerHTML='<div class="gscene"><div class="rays" id="ry"></div><div class="glow"></div><button class="gbw big" id="bb" aria-label="Boîte mystère">'+gift()+'</button><div class="gsh"></div></div><div class="dots" id="dt">'+'<i></i>'.repeat(T)+'</div><p class="hint" id="bt" role="status"></p>';
  const bb=$("bb"),ds=[...b.querySelectorAll("#dt i")],msg=()=>{ds.forEach((x,i)=>x.classList.toggle("on",i<T-t));$("bt").textContent=t>1?"Touche la boîte "+t+" fois pour l’ouvrir":"Encore une fois !";};msg();
  bb.onclick=()=>{if(--t>0){bb.classList.remove("shk");void bb.offsetWidth;bb.classList.add("shk");msg();}else{ds.forEach(x=>x.classList.add("on"));bb.disabled=true;bb.classList.add("open");$("ry").classList.add("on");$("bt").textContent="";setTimeout(()=>claim(d,gain),1300);}};
};
GM.box3=(d,gain,b)=>{
  const m=G[d-1][2],oth=[2,Math.max(3,Math.round(m*.2)),Math.round(m*.5)];
  b.innerHTML='<div class="tri">'+[0,1,2].map(i=>'<button class="gbw" data-i="'+i+'" aria-label="Coffre '+(i+1)+'"><em></em>'+gift()+'</button>').join("")+'</div><p>Choisis un coffre.</p>';
  const bs=[...b.querySelectorAll(".tri button")];
  bs.forEach(btn=>btn.onclick=()=>{const c=+btn.dataset.i;bs.forEach((x,i)=>{x.disabled=true;x.classList.add("open");if(i===c)x.classList.add("pick");x.querySelector("em").textContent="+"+(i===c?gain:oth[rnd(3)]);});setTimeout(()=>claim(d,gain),1800);});
};
GM.wheel=(d,gain,b)=>{
  const m=G[d-1][2],seg=[2,Math.max(3,Math.round(m*.2)),2,Math.round(m*.5),2,Math.max(3,Math.round(m*.2)),2,m];
  if(!seg.includes(gain))seg[1]=gain;
  const pt=(a,r)=>{a=a*Math.PI/180;return[(160+r*Math.sin(a)).toFixed(1),(160-r*Math.cos(a)).toFixed(1)];};
  let s='<svg viewBox="0 0 320 320">';
  seg.forEach((v,i)=>{const a=i*45,p0=pt(a,146),p1=pt(a+45,146);s+='<path d="M160 160L'+p0.join(" ")+'A146 146 0 0 1 '+p1.join(" ")+'Z" fill="'+(i%2?"#FFC83D":"#1D4ED8")+'"/><text transform="rotate('+(a+22.5)+' 160 160)" x="160" y="64" text-anchor="middle" font-size="26" font-weight="800" fill="'+(i%2?"#0B1630":"#fff")+'">'+v+'</text>';});
  s+='<circle cx="160" cy="160" r="150" fill="none" stroke="#fff" stroke-width="10"/>';
  for(let i=0;i<16;i++){const q=pt(i*22.5,150);s+='<circle class="lt" cx="'+q[0]+'" cy="'+q[1]+'" r="4.5" fill="#FFC83D"/>';}
  s+='<circle cx="160" cy="160" r="28" fill="#fff" stroke="#0B1630" stroke-width="4"/><text x="160" y="170" text-anchor="middle" font-size="28" font-weight="800" fill="#1D4ED8">M</text></svg>';
  b.innerHTML='<div class="wwrap"><svg class="pt" viewBox="0 0 40 40"><path d="M20 38L6 6h28z" fill="#E53935" stroke="#fff" stroke-width="3"/></svg><div class="wheel" id="wh">'+s+'</div></div><button class="go" id="sp">Tourner la roue</button>';
  $("sp").onclick=()=>{
    $("sp").disabled=true;
    const ix=seg.map((v,i)=>v===gain?i:-1).filter(i=>i>=0),i=ix[rnd(ix.length)],R=360*6-(i*45+22.5)+(Math.random()*20-10),w=$("wh");
    w.style.transition=reduce?"none":"transform 5s cubic-bezier(.1,.7,.1,1)";w.style.transform="rotate("+R+"deg)";
    setTimeout(()=>claim(d,gain),reduce?200:5500);
  };
};
GM.scratch=(d,gain,b)=>{
  const pool=[5,10,15,20,30,50],r=()=>pool[rnd(6)];let v=gain>2?[gain,gain,gain]:[r(),r(),r()];
  if(gain<=2)while(v[0]===v[1]&&v[1]===v[2])v[2]=r();
  b.innerHTML='<div class="tk"><b>Carte à gratter</b><span>Trouve 3 montants identiques</span><div class="tg">'+v.map(n=>'<div class="sp"><em>'+n+'</em><canvas width="96" height="96"></canvas></div>').join("")+'</div></div><p>Gratte les 3 cases avec ton doigt.</p>';
  let left=3;
  b.querySelectorAll("canvas").forEach(cv=>{
    const x=cv.getContext("2d"),g=x.createLinearGradient(0,0,96,96);
    g.addColorStop(0,"#E3E9F5");g.addColorStop(.5,"#9AA6BF");g.addColorStop(1,"#D5DCEB");x.fillStyle=g;x.fillRect(0,0,96,96);
    x.strokeStyle="rgba(255,255,255,.45)";x.lineWidth=4;for(let i=-96;i<192;i+=14){x.beginPath();x.moveTo(i,96);x.lineTo(i+96,0);x.stroke();}
    x.fillStyle="#fff";x.font="800 34px Inter,system-ui";x.textAlign="center";x.fillText("?",48,60);
    x.globalCompositeOperation="destination-out";
    let dn=false,n=0,ok=false;
    const chk=()=>{const a=x.getImageData(0,0,96,96).data;let c=0;for(let i=3;i<a.length;i+=16)if(a[i]===0)c++;if(c/(a.length/16)>.45&&!ok){ok=true;cv.style.opacity=0;if(--left===0)setTimeout(()=>claim(d,gain),900);}};
    const sc=e=>{if(!dn||ok)return;const q=cv.getBoundingClientRect();x.beginPath();x.arc((e.clientX-q.left)*96/q.width,(e.clientY-q.top)*96/q.height,13,0,7);x.fill();if(++n%4===0)chk();};
    cv.onpointerdown=e=>{dn=true;cv.setPointerCapture(e.pointerId);sc(e);};cv.onpointermove=sc;cv.onpointerup=()=>{dn=false;};
  });
};
GM.coin=(d,gain,b)=>{
  b.innerHTML='<div class="coin3d" id="cn">M</div><div class="two"><button class="go alt" data-s="Pile">Pile</button><button class="go alt" data-s="Face">Face</button></div>';
  b.querySelectorAll(".two button").forEach(btn=>btn.onclick=()=>{
    b.querySelectorAll("button").forEach(x=>{x.disabled=true;});
    const pick=btn.dataset.s,res=gain>2?pick:(pick==="Pile"?"Face":"Pile"),c=$("cn");
    c.style.transition=reduce?"none":"transform 1.4s ease-out";c.style.transform="rotateY(1080deg)";
    setTimeout(()=>{c.textContent=res;},reduce?0:1400);
    setTimeout(()=>claim(d,gain),reduce?200:2300);
  });
};
const Q=[["Dans quelle ville se trouve ton université ?",["Daloa","Bouaké","Korhogo","Man"],0],["Quelle est la capitale politique de la Côte d’Ivoire ?",["Abidjan","Yamoussoukro","San-Pédro","Daloa"],1],["Quelle monnaie utilise-t-on en Côte d’Ivoire ?",["Le dollar","Le franc CFA","Le naira","Le cedi"],1],["Quelle est la devise de la Côte d’Ivoire ?",["Union, Discipline, Travail","Unité, Progrès, Paix","Paix, Travail, Patrie","Liberté, Égalité, Fraternité"],0]];
GM.quiz=(d,gain,b)=>{
  const q=Q[rnd(Q.length)],m=G[d-1][2];
  b.innerHTML='<div class="qq">?</div><h3>'+q[0]+'</h3><div class="opt">'+q[1].map((o,i)=>'<button class="go alt" data-i="'+i+'">'+o+'</button>').join("")+'</div>';
  const bs=[...b.querySelectorAll(".opt button")];
  bs.forEach(x=>x.onclick=()=>{const i=+x.dataset.i;bs.forEach((y,k)=>{y.disabled=true;if(k===q[2])y.classList.add("ok");else if(k===i)y.classList.add("ko");});setTimeout(()=>claim(d,i===q[2]?m:2),1300);});
};
const HUNT=["UJLOG-TRESOR-01","UJLOG-TRESOR-02"],SEED="UJLOG-TRESOR-00",PRIZE=10000,QRK="ujlog_qr_used";
const usedQR=()=>{try{return JSON.parse(localStorage.getItem(QRK)||"[]").concat(SEED);}catch(e){return[SEED];}};
let huntCb=null;function startHunt(cb){huntCb=cb;openStage(0);GM.qr(0,0,$("stBody"));}
function winHunt(){
  stopCam();const r=huntCb?huntCb(PRIZE):{bal:0};
  result({small:"Chasse au trésor",title:"Tu as trouvé le trésor !",amt:PRIZE,bal:r.bal,note:"Ajoutés à ton solde. Ce QR code est maintenant épuisé : personne d’autre ne peut le scanner.",ms:1400,conf:true});
}
GM.qr=(d,gain,b)=>{
  const QRI='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9V5a2 2 0 0 1 2-2h4M15 3h4a2 2 0 0 1 2 2v4M21 15v4a2 2 0 0 1-2 2h-4M9 21H5a2 2 0 0 1-2-2v-4"/><path d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM14 14h2v2h-2z"/></svg>';
  b.innerHTML='<div class="qrh"><div class="qrb2" id="qb"><video id="qv" playsinline muted></video><div class="qph">'+QRI+'<span>Caméra éteinte</span></div><i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i><u></u></div><div class="chips"><span><b>10 000</b>MONLoG</span><span><b>2</b>par mois</span><span><b>1 fois</b>par QR code</span></div><p class="st" id="qm" role="status">Trouve un QR code caché sur le campus et scanne-le.</p><button class="go" id="qc">'+QRI+'Activer la caméra</button><div class="or"><span>ou saisis le code</span></div><div class="qin"><input id="qi" placeholder="Code du QR" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Code du QR"><button class="go" id="qk">Valider</button></div></div>';
  let on=true;const msg=(m,k)=>{const e=$("qm");e.textContent=m;e.className="st"+(k?" "+k:"");};
  const send=c=>{
    c=(c||"").trim().toUpperCase();
    if(!c)return msg("Saisis un code ou scanne un QR code.","err");
    if(!HUNT.concat(SEED).includes(c))return msg("Ce code n’est pas un QR de la chasse au trésor UJLoG.","err");
    if(usedQR().includes(c))return msg("Ce QR code a déjà été scanné par un autre étudiant. Cherches-en un autre.","err");
    try{localStorage.setItem(QRK,JSON.stringify(usedQR().concat(c)));}catch(e){}
    on=false;winHunt();
  };
  stopCam=()=>{on=false;const v=$("qv"),s=v&&v.srcObject;if(s)s.getTracks().forEach(t=>t.stop());const q=$("qb");if(q)q.classList.remove("live");};
  $("qc").onclick=async()=>{
    if(!("BarcodeDetector" in window)||!navigator.mediaDevices)return msg("Ton navigateur ne lit pas les QR codes ici. Saisis le code à la main.","err");
    try{
      const st=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),v=$("qv"),det=new BarcodeDetector({formats:["qr_code"]});
      on=true;v.srcObject=st;await v.play();$("qb").classList.add("live");msg("Vise le QR code.");
      (async function loop(){if(!on)return;try{const r=await det.detect(v);if(r.length)send(r[0].rawValue);}catch(e){}if(on)setTimeout(loop,400);})();
    }catch(e){msg("Caméra non autorisée. Saisis le code à la main.","err");}
  };
  $("qk").onclick=()=>send($("qi").value);
  $("qi").onkeydown=e=>{if(e.key==="Enter")send($("qi").value);};
  
  
};
$("sBack").onclick=closeStage;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&R.classList.contains("on"))closeStage();});
window.UJGAMES={play,hunt:startHunt};
let remShown=false;
function tick(){
  const mb=document.getElementById("mb"),st=window.UJGIFT&&UJGIFT.state&&UJGIFT.state();
  if(remShown||!mb||!st||st.open)return;
  remShown=true;
  const r=document.createElement("div");r.id="ujr";r.setAttribute("role","status");
  r.innerHTML='<p><b>Ton cadeau du jour t’attend</b><span>'+st.name+'</span></p><button class="o">Ouvrir</button><button class="l">Plus tard</button>';
  document.body.appendChild(r);setTimeout(()=>r.classList.add("on"),50);
  const off=()=>{r.classList.remove("on");setTimeout(()=>r.remove(),400);};
  r.querySelector(".l").onclick=off;
  r.querySelector(".o").onclick=()=>{off();const h=document.querySelector(".v29ln[data-og]");if(h)h.click();let n=0;const iv=setInterval(()=>{const b=document.querySelector('[data-ac="gopen"]');if(b&&b.offsetParent){clearInterval(iv);b.click();}else if(++n>25)clearInterval(iv);},200);};
}
setInterval(tick,1500);
})();

}catch(e){console.error("[ujlog] ujg-js",e)}
/* ==== giftJs ==== */
try{

(()=>{const CHG='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
const R=document.documentElement,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const HTML="<!DOCTYPE html>\n<html lang=\"fr\"><head><meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n<title>Cadeaux My UJLoG : 80 cadeaux animés<\/title>\n<style>\n:root{--bg:#F2F8F4;--pn:#FFFFFF;--ink:#0B1B12;--mu:#5B7463;--ln:#DCE8E0;--pill:#E2EFE6;color-scheme:light dark;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#0A0F14;--pn:#161A24;--ink:#F1F5F2;--mu:#9AA8A0;--ln:#262C38;--pill:#232A36}}\nhtml{scroll-padding-top:env(safe-area-inset-top,0px)}*{box-sizing:border-box;margin:0}\nbody{background:var(--bg);color:var(--ink);font:15px/1.4 system-ui,-apple-system,sans-serif;max-width:560px;margin:auto;padding:14px 0 90px}\n.hd{display:flex;justify-content:space-between;align-items:center;padding:6px 16px 4px}.hd h1{font-size:22px;font-weight:800}.hd span{font-size:12.5px;color:var(--mu)}\n#tabs{display:flex;gap:8px;overflow-x:auto;padding:8px 14px}#tabs button{flex:none;border:0;border-radius:999px;padding:7px 13px;background:var(--pill);color:var(--ink);font:600 13px system-ui;cursor:pointer}#tabs button.on{background:#15803D;color:#fff}\n#grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;padding:6px 10px;background:var(--pn);border-radius:20px;margin:6px 8px}\n.t{background:none;border:0;color:inherit;font:inherit;text-align:center;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 2px 6px;border-radius:14px;position:relative}\n.t.sel{background:rgba(21,128,61,.16);outline:1.5px solid #22A653}\n.t .st{width:100%;aspect-ratio:1;padding:6px}.t svg{width:100%;height:100%;overflow:visible}\n.t b{font-size:11.5px;font-weight:600;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.t span{font-size:11.5px;color:var(--mu);display:flex;align-items:center;gap:4px}.t span:before{content:\"\";width:11px;height:11px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#FFF0B3,#F5B82E 60%,#C98A0B)}\n.send{position:absolute;left:0;right:0;bottom:0;background:#15803D;color:#fff;font:700 13px system-ui;padding:7px 0;border-radius:0 0 14px 14px;margin:0}\n.t.sel span{visibility:hidden}.t:focus-visible{outline:3px solid #22A653}\n.ft{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(10px + env(safe-area-inset-bottom,0px));width:min(540px,calc(100% - 20px));background:var(--pn);border:1px solid var(--ln);border-radius:16px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;font-size:13px;z-index:5}\n.ft button{background:#15803D;color:#fff;border:0;border-radius:10px;padding:8px 14px;font:700 13px system-ui}\nsvg *{transform-box:fill-box;transform-origin:center}.t svg *,.bn svg *{animation-play-state:paused!important}\n.sway{animation:sway 2.6s ease-in-out infinite}.bob{animation:bob 1.8s ease-in-out infinite}.beat{animation:beat 1.1s ease-in-out infinite}.spin{animation:spin 6s linear infinite}.pulse{animation:pulse 1.3s ease-in-out infinite}.shake{animation:shake .12s linear infinite}.flip{animation:flip 2s ease-in-out infinite}.fly{animation:fly 1.8s ease-in-out infinite}.bounce{animation:bounce .9s cubic-bezier(.3,0,.6,1) infinite}\n.fl{animation:flick .14s ease-in-out infinite alternate;transform-origin:50% 100%}.rs{animation:rise 2s ease-out infinite}.hl{animation:spin 6s linear infinite}.ob{animation:spin 2.8s linear infinite}.sp{animation:twk 1.4s ease-in-out infinite}.sp2{animation:twk 1.4s .7s ease-in-out infinite}\n.wl{animation:flapl .4s ease-in-out infinite alternate;transform-origin:100% 60%}.wr{animation:flapr .4s ease-in-out infinite alternate;transform-origin:0 60%}.rg{animation:ring 1.6s ease-out infinite}.cf{animation:fall 1.5s linear infinite}.cf2{animation:fall 1.5s .75s linear infinite}\n@keyframes sway{0%,100%{transform:rotate(-9deg) translateY(0)}50%{transform:rotate(9deg) translateY(-6px)}}@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}\n@keyframes beat{0%,100%{transform:scale(1)}15%{transform:scale(1.2)}30%{transform:scale(1)}45%{transform:scale(1.12)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.16)}}\n@keyframes shake{0%{transform:translate(-1.5px,0)}50%{transform:translate(1.5px,-1.5px)}100%{transform:translate(-1.5px,1.5px)}}@keyframes flip{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.35)}}\n@keyframes fly{0%,100%{transform:translate(-8px,5px) rotate(-5deg)}50%{transform:translate(10px,-10px) rotate(6deg)}}@keyframes bounce{0%,100%{transform:translateY(10px) scale(1.08,.92)}50%{transform:translateY(-14px) scale(.95,1.06)}}\n@keyframes flick{from{transform:scaleY(.8)}to{transform:scaleY(1.18)}}@keyframes rise{0%{transform:translateY(8px);opacity:0}25%{opacity:.9}100%{transform:translateY(-26px);opacity:0}}\n@keyframes twk{0%,100%{transform:scale(.2);opacity:0}50%{transform:scale(1.3);opacity:1}}@keyframes flapl{from{transform:rotate(-16deg) scaleX(.8)}to{transform:rotate(12deg) scaleX(1.05)}}@keyframes flapr{from{transform:rotate(16deg) scaleX(.8)}to{transform:rotate(-12deg) scaleX(1.05)}}\n@keyframes ring{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.8);opacity:0}}@keyframes fall{from{transform:translateY(-14px);opacity:0}20%{opacity:1}to{transform:translateY(64px);opacity:0}}\n.ov{position:fixed;inset:0;z-index:20;background:rgba(3,8,6,.9);overflow:hidden;color:#fff}.ov[hidden]{display:none}\n.ov.g{background:radial-gradient(circle at 50% 42%,#3B1B7A 0,#0A0420 74%)}.ov.l{background:radial-gradient(circle at 50% 42%,#5A4106 0,#0A0702 74%)}\n.rays{position:absolute;left:50%;top:42%;width:150vmax;height:150vmax;margin:-75vmax;background:repeating-conic-gradient(from 0deg,rgba(255,224,138,.22) 0 6deg,transparent 6deg 18deg);-webkit-mask:radial-gradient(circle,#000 0,transparent 55%);mask:radial-gradient(circle,#000 0,transparent 55%);animation:spin 14s linear infinite}\n.big{position:absolute;left:50%;top:42%;width:min(320px,76vw);aspect-ratio:1;margin:calc(min(320px,76vw)/-2) 0 0 calc(min(320px,76vw)/-2)}.big svg{width:100%;height:100%;overflow:visible}\n.big.rise .a{animation:krise var(--d) ease-in-out both}.big.drop .a{animation:kdrop var(--d) ease-in-out both}.big.zoom .a{animation:kzoom var(--d) ease-in-out both}.big.launch .a{animation:klaunch var(--d) ease-in-out both}\n.big .gs{animation:gsh var(--d) ease-in-out both}\n@keyframes krise{0%{transform:translateY(70px) scale(.2);opacity:0}9%{transform:translateY(0) scale(1.22);opacity:1}16%{transform:scale(1)}32%{transform:translate(-34px,-16px) rotate(-8deg)}52%{transform:translate(30px,-26px) rotate(8deg) scale(1.06)}72%{transform:translate(-20px,-36px) rotate(-5deg)}88%{transform:translate(0,-50px) scale(1.16);opacity:1}100%{transform:translateY(-110px) scale(1.55);opacity:0}}\n@keyframes kdrop{0%{transform:translateY(-300px) rotate(-18deg) scale(.6);opacity:0}11%{transform:translateY(0) scale(1.14,.86);opacity:1}15%{transform:scale(.94,1.1)}20%{transform:scale(1)}70%{transform:scale(1.03)}90%{transform:scale(1.2);opacity:1}100%{transform:scale(1.7);opacity:0}}\n@keyframes kzoom{0%{transform:scale(0) rotate(-360deg);opacity:0}13%{transform:scale(1.28) rotate(0);opacity:1}20%{transform:scale(1)}55%{transform:rotate(9deg) scale(1.08)}85%{transform:rotate(-7deg) scale(1.12);opacity:1}100%{transform:scale(1.8) rotate(0);opacity:0}}\n@keyframes klaunch{0%{transform:translate(-40px,200px) scale(.4);opacity:0}9%{transform:translate(0,40px) scale(1);opacity:1}38%{transform:translate(0,0)}60%{transform:translate(0,-24px) rotate(-3deg)}80%{transform:translate(70px,-360px) scale(.7) rotate(14deg);opacity:1}100%{transform:translate(140px,-760px) scale(.3) rotate(18deg);opacity:0}}\n@keyframes gsh{0%{opacity:0;transform:scale(.3)}12%{opacity:.6;transform:scale(1)}85%{opacity:.5;transform:scale(1.1)}100%{opacity:0;transform:scale(.4)}}\n#fx{position:absolute;inset:0;pointer-events:none}.pt{position:absolute;pointer-events:none}.pt.s{clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)}.pt.d{border-radius:50%}.pt.b{border-radius:2px}\n.rg2{position:absolute;left:50%;top:42%;width:120px;height:120px;margin:-60px;border-radius:50%;border:3px solid rgba(255,255,255,.8)}\n.bn{position:absolute;left:12px;bottom:calc(36px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:10px;background:rgba(0,0,0,.55);border-radius:999px;padding:6px 14px 6px 6px;animation:sl .5s cubic-bezier(.2,1.3,.4,1) both}\n@keyframes sl{from{transform:translateX(-120%)}to{transform:none}}\n.bn .av{width:36px;height:36px;border-radius:50%;background:#15803D;display:grid;place-items:center;font-weight:800}.bn strong{display:block;font-size:13px}.bn span{font-size:12px;opacity:.85}.bn .mi{width:38px;height:38px}.bn .mi svg{width:100%;height:100%}\n.bn em{font:italic 800 26px system-ui;color:#FFE08A;animation:cb .35s cubic-bezier(.2,1.6,.4,1)}@keyframes cb{from{transform:scale(2.2)}to{transform:scale(1)}}\n.ctl{position:absolute;left:0;right:0;top:calc(42% + min(190px,45vw));display:flex;gap:10px;justify-content:center}.ctl[hidden]{display:none}.ctl button{border:0;border-radius:999px;padding:10px 20px;font:700 14px system-ui;background:#15803D;color:#fff}.ctl button+button{background:rgba(255,255,255,.18)}\n@media(prefers-reduced-motion:reduce){svg *{animation:none!important}.big .a,.big .gs,.rays{animation:none!important}}\n.big{filter:drop-shadow(0 0 26px rgba(255,235,160,.5))}.bm{position:absolute;left:50%;top:-5%;width:90vw;height:78%;margin-left:-45vw;background:linear-gradient(180deg,rgba(255,244,190,.6),transparent 92%);clip-path:polygon(40% 0,60% 0,100% 100%,0 100%);opacity:0;animation:bmk var(--dd,7s) ease-in-out both}@keyframes bmk{0%,7%{opacity:0}12%{opacity:.95}85%{opacity:.5}100%{opacity:0}}\n.big.drive .a{animation:kdrive var(--d) ease-in-out both}@keyframes kdrive{0%{transform:translateX(-520px) scale(.9);opacity:0}6%{opacity:1}15%{transform:translateX(0) scale(1.05,.95)}20%{transform:scale(1)}45%{transform:translate(0,-8px)}60%{transform:translate(0,0) scale(1.04)}86%{transform:translateX(0) scale(1.12);opacity:1}100%{transform:translateX(560px) scale(1.1);opacity:0}}\n<\/style>\n<style id=\"ov2\">\nbody{padding:0 0 28px}.hd{position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px 10px;background:var(--bg)}\n.hd h1{font:800 26px/1.1 system-ui;letter-spacing:-.02em}.hd p{margin-top:3px;font-size:13px;color:var(--mu)}\n.wal{display:flex;align-items:center;gap:8px;background:var(--pn);border:1px solid var(--ln);border-radius:999px;padding:4px 4px 4px 12px}.wal b{display:flex;align-items:center;gap:7px;font:800 15px system-ui}.wal b:before{content:\"\";width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#FFF0B3,#F5B82E 60%,#C98A0B)}\n.wal button{width:30px;height:30px;border:0;border-radius:50%;background:#15803D;color:#fff;font:700 19px/1 system-ui}\n#mt{margin:2px 16px 8px}#tabs{padding:4px 16px 12px}#tabs button{background:var(--pn);border:1px solid var(--ln);padding:8px 15px}#tabs button.on{background:#15803D;border-color:#15803D}\n#grid,.gc{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;padding:0 16px;background:none;border-radius:0;margin:0}.gc{padding:0}\n.sec{grid-column:1/-1;display:flex;align-items:baseline;justify-content:space-between;margin-top:8px;padding-bottom:6px;border-bottom:1px solid var(--ln)}.sec b{font:800 16px system-ui}.sec small{color:var(--mu);font-size:12px}\n.t{background:var(--pn);border:1px solid var(--ln);border-radius:18px;padding:10px 6px;gap:6px}.t .st{width:70%;padding:0}\n.t b{white-space:normal;line-height:1.2;min-height:2.4em;display:flex;align-items:center;justify-content:center;font-size:12.5px;padding:0 2px}.t span{padding:3px 10px;border-radius:999px;background:var(--pill);font:700 12px system-ui;color:var(--ink)}\n#mine{padding:4px 16px}.sub{margin:4px 0 10px}.rw{margin:8px 0;border:1px solid var(--ln)}\n#sheet .pn::before{content:\"\";display:block;width:40px;height:4px;border-radius:2px;background:var(--ln);margin:-6px auto 14px}#sheet .gb{width:132px;height:132px;border-radius:30px;background:var(--pill);padding:12px}\n<\/style>\n<style id=\"ov3\">\n:root{--bg:#F3F7F4;--pn:#FFFFFF;--ink:#0C1A12;--mu:#66786D;--ln:#E3ECE6;--pill:#EAF3ED;--gd:#15803D}\n:root[data-theme=dark]{--bg:#000;--pn:#121212;--ink:#F5F5F5;--mu:#A3A3A3;--ln:#2A2A2A;--pill:#1B2A21}\nbody{background:var(--bg);color:var(--ink);padding:0 0 32px}\n.mc{display:inline-block;width:15px;height:15px;flex:none;vertical-align:-3px;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3CradialGradient id='g' cx='.35' cy='.3' r='.9'%3E%3Cstop offset='0' stop-color='%23FFF1B8'/%3E%3Cstop offset='.55' stop-color='%23FFC83D'/%3E%3Cstop offset='1' stop-color='%23C77D0A'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='16' cy='16' r='15' fill='url(%23g)'/%3E%3Ccircle cx='16' cy='16' r='11.5' fill='none' stroke='%23B8730A' stroke-opacity='.55' stroke-width='1.2'/%3E%3Cpath d='M10.5 21.5v-10l5.5 6.5 5.500-6.500v10' fill='none' stroke='%237A4300' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") center/contain no-repeat}\n.mc.big{width:40px;height:40px;vertical-align:0;filter:drop-shadow(0 3px 5px rgba(199,125,10,.35))}\n.hd{position:sticky;top:0;z-index:10;display:block;padding:12px 16px 10px;background:var(--bg)}\n.wc{display:flex;align-items:center;gap:12px;padding:12px 12px 12px 14px;background:var(--pn);border:1px solid var(--ln);border-radius:22px;box-shadow:0 8px 22px rgba(12,26,18,.07)}\n.wt{flex:1;min-width:0}.wt small{display:block;font:600 12px system-ui;color:var(--mu);letter-spacing:.02em}.wt b{display:block;font:800 24px/1.1 system-ui;letter-spacing:-.02em;margin-top:1px}\n#rc{width:auto;height:auto;border:0;border-radius:999px;padding:11px 18px;background:linear-gradient(135deg,#22A653,#15803D);color:#fff;font:800 13.5px system-ui;box-shadow:0 6px 14px rgba(21,128,61,.3)}\n#grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;padding:6px 16px 0;background:none;border-radius:0;margin:0}\n.t{background:var(--pn);border:1px solid var(--ln);border-radius:20px;padding:12px 6px 10px;gap:8px;box-shadow:0 2px 8px rgba(12,26,18,.04);transition:transform .15s}\n.t:active{transform:scale(.97)}\n.t .st{width:74%;padding:0}\n.t b{min-height:2.4em;font:700 12.5px/1.2 system-ui;color:var(--ink)}\n.t span{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:999px;background:var(--pill);font:800 12px system-ui;color:var(--ink)}\n.t span:before,.wal b:before{display:none}\n.gc{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;padding:0;background:none;border-radius:0}\n.sub{display:flex;gap:4px;margin:6px 0 10px;padding:4px;background:var(--pill);border-radius:14px}\n.sub button{flex:1;border:0;border-radius:11px;padding:9px 6px;background:none;color:var(--mu);font:700 13px system-ui}\n.sub button.on{background:var(--pn);color:var(--gd);box-shadow:0 1px 5px rgba(0,0,0,.12)}\n.rw{background:var(--pn);border:1px solid var(--ln);border-radius:18px}\n#sheet .pn{background:var(--pn);border-radius:28px 28px 0 0}\n#sheet .gb{background:var(--pill)}\n#sheet .mu .mc{width:13px;height:13px;vertical-align:-2px}\n.cv{display:inline-flex;align-items:center;gap:6px}\n.ro b.cv .mc{width:16px;height:16px}\n#sheet .gs{margin-top:8px;text-align:left}#sheet .gs>b{display:block;font:800 14px system-ui;margin:6px 2px}#sheet .gs button{display:flex;align-items:center;gap:12px;width:100%;border:0;background:var(--pill);border-radius:14px;padding:10px 12px;margin-top:6px;text-align:left;color:var(--ink)}#sheet .gs i{flex:none;width:28px;height:28px;border-radius:50%;background:var(--gd);color:#fff;display:grid;place-items:center;font:800 13px system-ui;font-style:normal}#sheet .gs strong{display:block;font:700 14px system-ui}#sheet .gs small{display:block;font:12.5px system-ui;color:var(--mu)}#sheet .pp{display:flex;align-items:center;justify-content:center;gap:8px;font:800 26px/1 system-ui;margin:8px 0 4px}#sheet .pp .mc{width:24px;height:24px;vertical-align:0}#sheet .no{text-align:center;color:#E02020;font:700 13.5px system-ui;margin:2px 0 0}#sheet h2{margin-top:10px}#sheet .qt{margin:12px 0 6px}#sheet .pr{margin-top:14px}\n#sheet .gs{margin:14px 0 0;border:1px solid var(--ln);border-radius:18px;overflow:hidden;background:var(--pn)}#sheet .gs button{gap:14px;margin:0;padding:13px 14px;border-radius:0;background:none;transition:background .15s}#sheet .gs button+button{border-top:1px solid var(--ln)}#sheet .gs button:active{background:var(--pill)}#sheet .gs button:focus-visible{outline:2px solid #22A653;outline-offset:-2px}#sheet .gs button:after{content:\"\";flex:none;width:8px;height:8px;margin:0 4px 0 auto;border:solid var(--mu);border-width:2px 2px 0 0;transform:rotate(45deg)}#sheet .gs i{width:32px;height:32px;box-shadow:0 0 0 4px rgba(21,128,61,.14)}#sheet .gs strong{font:700 14.5px/1.25 system-ui}#sheet .gs small{margin-top:1px;font:12.5px/1.3 system-ui}#sheet .gs+.sc{margin-top:16px}\n#grid,.gc{gap:14px 6px;padding:10px 14px 28px}.gc{padding:0}#grid .t,.gc .t{gap:6px;padding:4px 2px;background:none;border:0;border-radius:0;box-shadow:none;justify-content:flex-start}#grid .t .st,.gc .t .st{width:88%;aspect-ratio:1;padding:0;border-radius:0;background:none}#grid .t b,.gc .t b{min-height:2.4em;padding:0 2px;font:700 13px/1.2 system-ui}#grid .t span,.gc .t span{margin-top:auto;justify-content:center;gap:6px;padding:6px 13px;border-radius:999px;background:rgba(245,184,46,.16);font:800 13px system-ui}\n#sheet .gb{width:148px;height:148px;border-radius:24px;margin:4px auto 0;padding:14px}#sheet h2{margin-top:14px;font:800 21px/1.2 system-ui;letter-spacing:-.01em}#sheet .pp{width:fit-content;margin:10px auto 2px;padding:8px 16px;border-radius:14px;background:rgba(245,184,46,.16);font:800 22px/1 system-ui}#sheet .pp .mc{width:22px;height:22px}#sheet .qt{width:fit-content;gap:4px;margin:14px auto 4px;padding:4px;border:1px solid var(--ln);border-radius:999px}#sheet .qt button{width:38px;height:38px;background:var(--pill);font:800 20px/1 system-ui}#sheet .qt button:active{transform:scale(.92)}#sheet .qt b{min-width:44px;font:800 18px system-ui}#sheet .no{width:fit-content;margin:12px auto 0;padding:8px 14px;border-radius:12px;background:rgba(224,32,32,.1);font:700 13.5px system-ui}#sheet .pr,#sheet .sc{border-radius:16px;padding:15px}#sheet .pr{margin-top:16px;box-shadow:0 6px 14px rgba(21,128,61,.25)}#sheet .pr+.sc{margin-top:8px}#sheet .gb.gm{width:92px;height:92px;border-radius:20px;padding:10px;margin:2px auto 0}#sheet .frs{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:2px 0 4px}#sheet .frs .fr{width:auto;margin:0;padding:9px 15px;border-radius:999px;justify-content:center;font:700 13.5px system-ui}#sheet input{margin-top:10px;padding:13px 14px;border-radius:14px;font:600 14.5px system-ui}#sheet .tier{padding:14px 16px;border-radius:16px}#mine{padding:8px 16px 28px}.mb{display:inline-flex;align-items:center;gap:6px;margin:4px 0 12px;padding:8px 14px 8px 10px;border:0;border-radius:999px;background:var(--pill);color:var(--ink);font:700 13.5px system-ui}.mb:before{content:\"\";width:8px;height:8px;margin:0 2px 0 4px;border:solid currentColor;border-width:0 0 2px 2px;transform:rotate(45deg)}.ms{display:flex;align-items:baseline;gap:8px;margin:6px 2px 14px}.ms b{font:800 36px/1 system-ui;letter-spacing:-.02em}.ms span{font:600 14px system-ui;color:var(--mu)}.ml2{display:flex;flex-direction:column;border:1px solid var(--ln);border-radius:20px;background:var(--pn);overflow:hidden}.mg{display:flex;align-items:center;gap:12px;width:100%;padding:12px 14px;border:0;background:none;color:var(--ink);text-align:left;font:inherit}.mg+.mg{border-top:1px solid var(--ln)}.mg:active{background:var(--pill)}.mg .a{flex:none;width:58px;height:58px;padding:7px;border-radius:16px;background:var(--pill)}.mg .a svg{width:100%;height:100%;overflow:visible}.mg svg *{animation-play-state:paused!important}.mg .x{flex:1;min-width:0}.mg .x b{display:block;font:700 15px/1.2 system-ui}.mg .x small{display:flex;align-items:center;gap:5px;margin-top:3px;font:600 12.5px system-ui;color:var(--mu)}.mg u{flex:none;padding:4px 10px;border-radius:999px;background:rgba(245,184,46,.16);text-decoration:none;font:800 13px system-ui}.mg em{flex:none;padding:8px 14px;border-radius:999px;background:linear-gradient(135deg,#22A653,#15803D);color:#fff;font:800 13px system-ui;font-style:normal}.mlk{display:flex;gap:8px;margin-top:16px}.mlk button{flex:1;padding:12px;border:1px solid var(--ln);border-radius:14px;background:none;color:var(--ink);font:700 13.5px system-ui}\n<\/style>\n<style id=\"ov5\">#sg{margin:6px 16px 8px}#sg[hidden]{display:none!important}.lb{font:700 12.5px system-ui;color:var(--mu);margin:14px 2px 6px}.wx{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;margin:12px 0 2px}.wx>div{background:var(--pill);border-radius:16px;padding:12px 8px;text-align:center}.wx small{display:block;color:var(--mu);font:600 11.5px system-ui}.wx b{display:flex;gap:5px;justify-content:center;align-items:center;margin-top:4px;font:800 16px system-ui}.wx .ar{color:#15803D;font:800 20px system-ui}.rl{max-height:210px;overflow:auto;border:1px solid var(--ln);border-radius:16px}.rc{display:flex;align-items:center;gap:12px;width:100%;padding:10px 12px;border:0;background:none;color:var(--ink);text-align:left;font:inherit}.rc+.rc{border-top:1px solid var(--ln)}.rc.on{background:rgba(21,128,61,.12)}.rc .av{flex:none;width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#22A653,#15803D);color:#fff;display:grid;place-items:center;font:800 14px system-ui}.rc b{display:block;font:700 14px system-ui}.rc small{color:var(--mu);font:12px system-ui}.rc .ck{margin-left:auto;flex:none;width:22px;height:22px;border-radius:50%;border:2px solid var(--ln)}.rc.on .ck{background:#15803D;border-color:#15803D;box-shadow:inset 0 0 0 4px var(--pn)}.ok2{width:72px;height:72px;border-radius:50%;background:#15803D;color:#fff;display:grid;place-items:center;margin:6px auto 12px;font:800 36px system-ui;animation:pop .4s cubic-bezier(.2,1.6,.4,1)}@keyframes pop{from{transform:scale(.3)}}#sheet .pr[disabled]{opacity:.45}#sheet h2+.mu{margin-bottom:6px}.qg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.qg button{border:1px solid var(--ln);background:var(--pn);color:var(--ink);border-radius:14px;padding:13px 4px;font:800 14px system-ui;transition:.15s}.qg button.on{border-color:#15803D;background:rgba(21,128,61,.12);color:#15803D;box-shadow:0 0 0 3px rgba(21,128,61,.14)}.qg button:active{transform:scale(.97)}.ig{position:relative;margin-top:10px}#sheet .ig input{margin:0;padding-right:84px}.ig span{position:absolute;right:14px;top:50%;transform:translateY(-50%);color:var(--mu);font:700 12.5px system-ui}.sm{margin-top:12px;border:1px solid var(--ln);border-radius:16px;padding:0 14px}.sm .ro:first-child{border-top:0}.big2{display:flex;align-items:center;justify-content:center;gap:8px;font:800 36px/1 system-ui;margin:2px 0}.big2 .mc{width:30px;height:30px;vertical-align:0}.pg2{height:10px;border-radius:6px;background:var(--pill);overflow:hidden;margin:12px 2px 14px}.pg2 i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#22A653,#15803D);transition:width 1.3s cubic-bezier(.2,.8,.2,1)}<\/style><\/head><body>\n<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"><defs id=\"defs\"><\/defs><\/svg>\n<span id=\"bl\" hidden><\/span><div class=\"sub\" id=\"sg\"><button data-s=\"shop\" class=\"on\">Boutique<\/button><button data-s=\"own\">À offrir<\/button><\/div>\n<div id=\"grid\"><\/div>\n<div class=\"ov\" id=\"ov\" hidden role=\"dialog\" aria-label=\"Animation du cadeau\"><div class=\"rays\" id=\"rays\"><\/div><div id=\"fx\"><\/div><div class=\"big\" id=\"big\"><\/div><div class=\"bm\" id=\"bm\"><\/div><div id=\"fl\" style=\"position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none\"><\/div><\/div>\n<script>\nvar GR={gold:['#FFF6C9','#F5B82E','#9A6408'],grn:['#8CF0AE','#15A04A','#064E2B'],red:['#FFB0B0','#E11D2E','#6E0A14'],blu:['#B5D2FF','#2F6BFF','#102A8A'],pur:['#E4D0FF','#8B3DF0','#2E1670'],wht:['#FFFFFF','#EEF4F0','#B9CBC0'],pink:['#FFD3E6','#EC4899','#8A1250'],ora:['#FFE0A8','#F97316','#8A2E0A'],cya:['#CDFAFF','#06B6D4','#0A5F77'],gry:['#F2F4F7','#98A2B3','#475467'],nav:['#6B7DA6','#233152','#0B1020']};\ndocument.getElementById('defs').innerHTML=Object.keys(GR).map(function(k){return '<radialGradient id=\"'+k+'\" cx=\".34\" cy=\".28\" r=\".95\"><stop offset=\"0\" stop-color=\"'+GR[k][0]+'\"/><stop offset=\".5\" stop-color=\"'+GR[k][1]+'\"/><stop offset=\"1\" stop-color=\"'+GR[k][2]+'\"/><\/radialGradient>'}).join('')+'<filter id=\"bv\" x=\"-25%\" y=\"-25%\" width=\"150%\" height=\"150%\" color-interpolation-filters=\"sRGB\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"2.4\" result=\"b\"/><feSpecularLighting in=\"b\" surfaceScale=\"4\" specularConstant=\".9\" specularExponent=\"24\" lighting-color=\"#fff\" result=\"sp\"><fePointLight x=\"22\" y=\"6\" z=\"70\"/><\/feSpecularLighting><feComposite in=\"sp\" in2=\"SourceAlpha\" operator=\"in\" result=\"s2\"/><feComposite in=\"SourceGraphic\" in2=\"s2\" operator=\"arithmetic\" k1=\"0\" k2=\"1\" k3=\".9\" k4=\"0\" result=\"lit\"/><feDropShadow in=\"lit\" dx=\"0\" dy=\"3\" stdDeviation=\"2.4\" flood-color=\"#000\" flood-opacity=\".5\"/><\/filter>';\nvar SH={\nfeather:['<path d=\"M70 12C40 18 22 42 24 78c6-6 10-14 14-22 18 0 32-14 32-44z\" fill=\"{a}\"/><path d=\"M24 80C34 56 46 38 66 20\" stroke=\"#fff\" stroke-opacity=\".8\" stroke-width=\"2.2\" fill=\"none\"/>','sway'],\nsmile:['<circle cx=\"50\" cy=\"50\" r=\"34\" fill=\"{a}\"/><circle cx=\"39\" cy=\"43\" r=\"4.5\" fill=\"#3A2A05\"/><circle cx=\"61\" cy=\"43\" r=\"4.5\" fill=\"#3A2A05\"/><path d=\"M35 58q15 16 30 0\" stroke=\"#3A2A05\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/>','bounce'],\ncup:['<path class=\"rs\" d=\"M36 34c-7-8 6-10 0-18M50 34c-7-8 6-10 0-18M64 34c-7-8 6-10 0-18\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M22 42h46v24a16 16 0 0 1-16 16H38a16 16 0 0 1-16-16z\" fill=\"{a}\"/><path d=\"M68 48h6a9 9 0 0 1 0 18h-8\" fill=\"none\" stroke=\"{a}\" stroke-width=\"5\"/><path d=\"M22 48h46v7H22z\" fill=\"{b}\"/>','bob'],\nheart:['<path d=\"M50 86C12 60 8 34 27 24c10-5 19 0 23 8 4-8 13-13 23-8 19 10 15 36-23 62z\" fill=\"{a}\"/><path d=\"M29 33c4-4 10-4 14 2\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/>','beat'],\nstar:['<path d=\"M50 8l13 27 29 4-21 21 5 29-26-14-26 14 5-29L8 39l29-4z\" fill=\"{a}\"/><path d=\"M50 22l6 14\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"3\" stroke-linecap=\"round\"/>','pulse'],\ncandy:['<path d=\"M10 34l22 16-22 16zM90 34L68 50l22 16z\" fill=\"{b}\"/><circle cx=\"50\" cy=\"50\" r=\"24\" fill=\"{a}\"/><path d=\"M34 40c12 2 20 10 22 22\" stroke=\"#fff\" stroke-opacity=\".7\" stroke-width=\"4\" fill=\"none\"/>','sway'],\nflower:['<g fill=\"{a}\"><circle cx=\"50\" cy=\"26\" r=\"16\"/><circle cx=\"74\" cy=\"44\" r=\"16\"/><circle cx=\"65\" cy=\"72\" r=\"16\"/><circle cx=\"35\" cy=\"72\" r=\"16\"/><circle cx=\"26\" cy=\"44\" r=\"16\"/><\/g><circle cx=\"50\" cy=\"52\" r=\"12\" fill=\"{b}\"/>','spin'],\nmango:['<path d=\"M50 14c24 0 38 24 30 46-8 22-36 28-52 12C12 56 22 14 50 14z\" fill=\"{a}\"/><path d=\"M50 14c4-8 12-8 18-4-4 6-10 8-18 4z\" fill=\"{b}\"/><path d=\"M34 40c4-8 10-12 18-12\" stroke=\"#fff\" stroke-opacity=\".5\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/>','bob'],\nballoon:['<ellipse cx=\"50\" cy=\"40\" rx=\"26\" ry=\"31\" fill=\"{a}\"/><path d=\"M45 70h10l-5 7z\" fill=\"{a}\"/><path d=\"M50 77q-8 8 0 16\" stroke=\"#fff\" fill=\"none\" stroke-width=\"2\"/><path d=\"M36 28c4-8 12-10 16-8\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"4\" fill=\"none\"/>','sway'],\nicecream:['<path d=\"M34 54h32L50 92z\" fill=\"{b}\"/><circle cx=\"50\" cy=\"40\" r=\"23\" fill=\"{a}\"/><circle cx=\"50\" cy=\"16\" r=\"5\" fill=\"#E11D2E\"/>','bob'],\ngift:['<rect x=\"18\" y=\"40\" width=\"64\" height=\"44\" rx=\"4\" fill=\"{a}\"/><rect x=\"14\" y=\"30\" width=\"72\" height=\"16\" rx=\"4\" fill=\"{a}\"/><rect x=\"44\" y=\"30\" width=\"12\" height=\"54\" fill=\"{b}\"/><path d=\"M50 30C36 10 22 22 36 30zM50 30c14-20 28-8 14 0z\" fill=\"{b}\"/>','beat'],\nbook:['<rect x=\"18\" y=\"20\" width=\"64\" height=\"62\" rx=\"5\" fill=\"{a}\"/><rect x=\"24\" y=\"26\" width=\"52\" height=\"50\" rx=\"3\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".8\" stroke-width=\"1.8\"/><path d=\"M50 36l5 10 11 1-8 7 3 11-11-6-11 6 3-11-8-7 11-1z\" fill=\"{b}\"/>','sway'],\nbulb:['<path d=\"M50 10a27 27 0 0 0-15 50v9h30v-9A27 27 0 0 0 50 10z\" fill=\"{a}\"/><rect x=\"37\" y=\"72\" width=\"26\" height=\"8\" rx=\"3\" fill=\"{b}\"/><rect x=\"42\" y=\"82\" width=\"16\" height=\"6\" rx=\"3\" fill=\"{b}\"/>','pulse'],\nheadset:['<path d=\"M20 58V50a30 30 0 0 1 60 0v8\" fill=\"none\" stroke=\"{b}\" stroke-width=\"7\" stroke-linecap=\"round\"/><rect x=\"12\" y=\"54\" width=\"17\" height=\"28\" rx=\"6\" fill=\"{a}\"/><rect x=\"71\" y=\"54\" width=\"17\" height=\"28\" rx=\"6\" fill=\"{a}\"/>','beat'],\nmic:['<rect x=\"37\" y=\"8\" width=\"26\" height=\"44\" rx=\"13\" fill=\"{a}\"/><path d=\"M27 42a23 23 0 0 0 46 0M50 66v16M37 86h26\" fill=\"none\" stroke=\"{b}\" stroke-width=\"5\" stroke-linecap=\"round\"/>','sway'],\nscroll:['<rect x=\"14\" y=\"24\" width=\"72\" height=\"50\" rx=\"4\" fill=\"{a}\" stroke=\"#E0B33C\" stroke-width=\"3\"/><path d=\"M26 38h48M26 48h34M26 58h24\" stroke=\"#9DB8A5\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M62 70l-3 16 10-5 10 5-3-16z\" fill=\"#B3121F\"/><circle cx=\"71\" cy=\"62\" r=\"10\" fill=\"{b}\"/>','sway'],\ncake:['<rect x=\"20\" y=\"52\" width=\"60\" height=\"30\" rx=\"5\" fill=\"{a}\"/><path d=\"M20 62q10 8 20 0t20 0 20 0\" stroke=\"{b}\" stroke-width=\"6\" fill=\"none\"/><rect x=\"47\" y=\"32\" width=\"6\" height=\"20\" fill=\"{b}\"/><path class=\"fl\" d=\"M50 12c7 6 5 13 0 16-5-3-7-10 0-16z\" fill=\"#FFB02E\"/>','bob'],\nball:['<circle cx=\"50\" cy=\"50\" r=\"34\" fill=\"#fff\"/><path d=\"M50 34l14 10-5 17H41l-5-17z\" fill=\"#0B1B12\"/><path d=\"M50 34V17M64 44l17-6M59 61l10 15M41 61L31 76M36 44l-17-6\" stroke=\"#0B1B12\" stroke-width=\"3\"/>','bounce'],\ncamera:['<rect x=\"12\" y=\"30\" width=\"76\" height=\"52\" rx=\"10\" fill=\"{a}\"/><rect x=\"34\" y=\"20\" width=\"24\" height=\"14\" rx=\"4\" fill=\"{a}\"/><circle cx=\"50\" cy=\"56\" r=\"19\" fill=\"#fff\"/><circle cx=\"50\" cy=\"56\" r=\"12\" fill=\"{b}\"/><circle cx=\"77\" cy=\"40\" r=\"3.5\" fill=\"#fff\"/>','sway'],\nrocket:['<g class=\"shake\"><path d=\"M50 8c14 12 18 30 16 54H34C32 38 36 20 50 8z\" fill=\"url(#wht)\"/><path d=\"M50 8c8 8 12 17 14 28H36c2-11 6-20 14-28z\" fill=\"{a}\"/><circle cx=\"50\" cy=\"46\" r=\"7\" fill=\"{b}\" stroke=\"#fff\" stroke-width=\"2.5\"/><path d=\"M34 52L20 72l14-4zM66 52l14 20-14-4z\" fill=\"{a}\"/><path class=\"fl\" d=\"M42 64c0 10 4 16 8 26 4-10 8-16 8-26z\" fill=\"url(#gold)\"/><\/g>','pulse'],\nflame:['<path class=\"fl\" d=\"M50 6c4 18 28 28 28 56a28 28 0 0 1-56 0c0-14 8-20 14-30 2 8 6 12 10 14-2-14 0-26 4-40z\" fill=\"{a}\"/><path class=\"fl\" d=\"M50 50c3 10 15 14 15 28a15 15 0 0 1-30 0c0-8 6-12 15-28z\" fill=\"{b}\"/>','bob'],\nbolt:['<path d=\"M58 6L22 54h24l-6 40 38-52H52z\" fill=\"{a}\" stroke=\"{b}\" stroke-width=\"3\" stroke-linejoin=\"round\"/>','pulse'],\nmoon:['<path d=\"M66 12a38 38 0 1 0 22 62A32 32 0 0 1 66 12z\" fill=\"{a}\"/><circle cx=\"36\" cy=\"46\" r=\"5\" fill=\"{b}\" opacity=\".5\"/><circle cx=\"46\" cy=\"68\" r=\"3.5\" fill=\"{b}\" opacity=\".5\"/>','sway'],\nsun:['<circle cx=\"50\" cy=\"50\" r=\"22\" fill=\"{a}\"/><g stroke=\"{b}\" stroke-width=\"5\" stroke-linecap=\"round\"><path d=\"M50 8v12M50 80v12M8 50h12M80 50h12M20 20l9 9M71 71l9 9M80 20l-9 9M29 71l-9 9\"/><\/g>','spin'],\ntrophy:['<path d=\"M30 16h40v24a20 20 0 0 1-40 0z\" fill=\"{a}\"/><path d=\"M30 22H16c0 14 6 20 16 22M70 22h14c0 14-6 20-16 22\" fill=\"none\" stroke=\"{a}\" stroke-width=\"4\"/><rect x=\"44\" y=\"58\" width=\"12\" height=\"14\" fill=\"{a}\"/><rect x=\"30\" y=\"72\" width=\"40\" height=\"12\" rx=\"3\" fill=\"{a}\"/><path d=\"M50 24l3 6 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1z\" fill=\"#fff\"/>','bob'],\nplane:['<path d=\"M8 46L92 10 48 62z\" fill=\"{a}\"/><path d=\"M92 10L66 90 48 62z\" fill=\"{b}\"/>','fly'],\ncrown:['<path d=\"M16 74L12 32l22 18 16-26 16 26 22-18-4 42z\" fill=\"{a}\"/><rect x=\"16\" y=\"74\" width=\"68\" height=\"10\" rx=\"3\" fill=\"{a}\"/><circle cx=\"50\" cy=\"60\" r=\"5\" fill=\"url(#red)\"/><circle cx=\"30\" cy=\"62\" r=\"4\" fill=\"url(#blu)\"/><circle cx=\"70\" cy=\"62\" r=\"4\" fill=\"url(#grn)\"/>','bob'],\nring:['<circle cx=\"50\" cy=\"64\" r=\"24\" fill=\"none\" stroke=\"{a}\" stroke-width=\"9\"/><path d=\"M36 26h28l9 12-23 20-23-20z\" fill=\"{b}\"/><path d=\"M36 26l14 32 14-32\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".7\" stroke-width=\"2\"/>','sway'],\ndiamond:['<path d=\"M28 30h44l14 18-36 40L14 48z\" fill=\"{a}\"/><path d=\"M14 48h72M28 30l22 18 22-18M50 48v40M36 48l14 40 14-40\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".7\" stroke-width=\"2\"/>','flip'],\nplanet:['<circle cx=\"50\" cy=\"50\" r=\"24\" fill=\"{a}\"/><ellipse cx=\"50\" cy=\"54\" rx=\"44\" ry=\"12\" fill=\"none\" stroke=\"{b}\" stroke-width=\"5\" transform=\"rotate(-20 50 50)\"/>','bob'],\ngalaxy:['<ellipse cx=\"50\" cy=\"50\" rx=\"44\" ry=\"16\" fill=\"none\" stroke=\"{a}\" stroke-width=\"5\"/><ellipse cx=\"50\" cy=\"50\" rx=\"44\" ry=\"16\" fill=\"none\" stroke=\"url(#grn)\" stroke-width=\"3\" transform=\"rotate(60 50 50)\"/><ellipse cx=\"50\" cy=\"50\" rx=\"44\" ry=\"16\" fill=\"none\" stroke=\"{b}\" stroke-width=\"3\" transform=\"rotate(120 50 50)\"/><circle cx=\"50\" cy=\"50\" r=\"12\" fill=\"url(#gold)\"/>','spin']};\nSH.cloud=['<path d=\"M26 72a17 17 0 0 1 3-33 23 23 0 0 1 44 6 15 15 0 0 1-2 27z\" fill=\"{a}\"/><path d=\"M34 46c4-6 10-8 16-6\" stroke=\"#fff\" stroke-opacity=\".7\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/>','bob'];\nSH.note=['<path d=\"M38 68V24l38-9v46\" fill=\"none\" stroke=\"{b}\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"29\" cy=\"70\" rx=\"13\" ry=\"10\" fill=\"{a}\"/><ellipse cx=\"67\" cy=\"61\" rx=\"13\" ry=\"10\" fill=\"{a}\"/>','bounce'];\nSH.drum=['<path d=\"M16 38v28c0 8 15 14 34 14s34-6 34-14V38z\" fill=\"{a}\"/><ellipse cx=\"50\" cy=\"38\" rx=\"34\" ry=\"13\" fill=\"{b}\"/><path d=\"M16 38l30 40M84 38L54 78M38 50l-8 24M62 50l8 24\" stroke=\"#fff\" stroke-opacity=\".55\" stroke-width=\"2.4\"/>','beat'];\nSH.bell=['<path d=\"M50 10c-18 0-27 14-27 31 0 14-6 19-11 25h76c-5-6-11-11-11-25 0-17-9-31-27-31z\" fill=\"{a}\"/><circle cx=\"50\" cy=\"78\" r=\"9\" fill=\"{b}\"/><path d=\"M36 30c4-6 9-9 15-9\" stroke=\"#fff\" stroke-opacity=\".7\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/>','sway'];\nSH.rainbow=['<g fill=\"none\" stroke-width=\"8\" stroke-linecap=\"round\"><path d=\"M8 78a42 42 0 0 1 84 0\" stroke=\"#E11D2E\"/><path d=\"M17 78a33 33 0 0 1 66 0\" stroke=\"#F5B82E\"/><path d=\"M26 78a24 24 0 0 1 48 0\" stroke=\"#15A04A\"/><path d=\"M35 78a15 15 0 0 1 30 0\" stroke=\"#2F6BFF\"/><\/g><ellipse cx=\"14\" cy=\"80\" rx=\"12\" ry=\"7\" fill=\"#fff\"/><ellipse cx=\"86\" cy=\"80\" rx=\"12\" ry=\"7\" fill=\"#fff\"/>','pulse'];\nSH.butterfly=['<path d=\"M50 50C26 14 6 26 13 52c4 15 23 19 37-2zM50 50C74 14 94 26 87 52c-4 15-23 19-37-2z\" fill=\"{a}\"/><circle cx=\"28\" cy=\"46\" r=\"7\" fill=\"{b}\" opacity=\".7\"/><circle cx=\"72\" cy=\"46\" r=\"7\" fill=\"{b}\" opacity=\".7\"/><rect x=\"46.5\" y=\"28\" width=\"7\" height=\"46\" rx=\"3.5\" fill=\"{b}\"/>','flip'];\nSH.shield=['<path d=\"M50 8l36 12v26c0 22-16 36-36 46C30 82 14 68 14 46V20z\" fill=\"{a}\"/><path d=\"M50 26l8 16 18 2-13 12 4 18-17-9-17 9 4-18-13-12 18-2z\" fill=\"{b}\"/>','pulse'];\nSH.bag=['<path d=\"M35 40v-9a15 15 0 0 1 30 0v9\" fill=\"none\" stroke=\"{b}\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M18 38h64l-4 46H22z\" fill=\"{a}\"/><circle cx=\"38\" cy=\"50\" r=\"3.5\" fill=\"{b}\"/><circle cx=\"62\" cy=\"50\" r=\"3.5\" fill=\"{b}\"/>','sway'];\nSH.coin=['<circle cx=\"50\" cy=\"50\" r=\"36\" fill=\"{a}\"/><circle cx=\"50\" cy=\"50\" r=\"28\" fill=\"none\" stroke=\"{b}\" stroke-width=\"3.5\"/><text x=\"50\" y=\"61\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"{b}\" font-family=\"system-ui,sans-serif\">M<\/text>','flip'];\nSH.medal=['<path d=\"M28 6h15l7 24 7-24h15L62 42H38z\" fill=\"{b}\"/><circle cx=\"50\" cy=\"66\" r=\"24\" fill=\"{a}\"/><circle cx=\"50\" cy=\"66\" r=\"18\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"2.4\"/><path d=\"M50 54l4 8 9 1-6 6 2 9-9-4-9 4 2-9-6-6 9-1z\" fill=\"#fff\"/>','sway'];\nSH.car=['<path d=\"M6 66c0-8 3-13 11-15l12-13c4-4 9-6 15-6h16c7 0 13 3 17 9l7 9c7 2 12 6 12 14v5H6z\" fill=\"{a}\"/><path d=\"M33 40l8-8c3-3 6-4 11-4h10c4 0 7 2 9 5l5 7z\" fill=\"#CFE9FF\"/><path d=\"M52 28v12\" stroke=\"{a}\" stroke-width=\"3\"/><circle cx=\"28\" cy=\"72\" r=\"12\" fill=\"#1B1F27\"/><circle cx=\"28\" cy=\"72\" r=\"5\" fill=\"{b}\"/><circle cx=\"76\" cy=\"72\" r=\"12\" fill=\"#1B1F27\"/><circle cx=\"76\" cy=\"72\" r=\"5\" fill=\"{b}\"/><circle cx=\"92\" cy=\"58\" r=\"3.5\" fill=\"#FFF3A8\"/>','shake'];\nSH.jet=['<path d=\"M50 6c4 0 6 6 6 14v22l36 22v9L56 58v17l13 10v7L50 88l-19 6v-7l13-10V58L8 73v-9l36-22V20c0-8 2-14 6-14z\" fill=\"{a}\"/><path d=\"M50 12c2 0 3 4 3 10v12h-6V22c0-6 1-10 3-10z\" fill=\"{b}\"/><path d=\"M8 66l34-20v6L8 73zM92 66L58 46v6l34 21z\" fill=\"{b}\" opacity=\".8\"/>','fly'];\nSH.hotair=['<path d=\"M50 6C26 6 13 24 13 40c0 14 10 26 23 34h28c13-8 23-20 23-34C87 24 74 6 50 6z\" fill=\"{a}\"/><path d=\"M50 6c-11 9-15 21-15 34s5 25 15 34c10-9 15-21 15-34S61 15 50 6z\" fill=\"{b}\"/><path d=\"M38 74l4 8M62 74l-4 8\" stroke=\"#5A3A12\" stroke-width=\"2.4\"/><rect x=\"40\" y=\"82\" width=\"20\" height=\"12\" rx=\"2\" fill=\"#B87A2E\"/>','sway'];\nSH.bike=['<g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"68\" r=\"17\" stroke=\"#1B1F27\" stroke-width=\"5\"/><circle cx=\"78\" cy=\"68\" r=\"17\" stroke=\"#1B1F27\" stroke-width=\"5\"/><path d=\"M24 68l17-32h26l11 32M41 36l15 32M33 28h13M60 28l7 8\" stroke=\"{a}\" stroke-width=\"5\"/><\/g><circle cx=\"56\" cy=\"68\" r=\"5\" fill=\"{b}\"/>','bounce'];\nSH.moto=['<circle cx=\"22\" cy=\"70\" r=\"15\" fill=\"none\" stroke=\"#1B1F27\" stroke-width=\"7\"/><circle cx=\"80\" cy=\"70\" r=\"15\" fill=\"none\" stroke=\"#1B1F27\" stroke-width=\"7\"/><path d=\"M22 70l14-22h26l10 12 8 10M42 48l-6-14h14\" fill=\"none\" stroke=\"{a}\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M34 44h28l8 12H38z\" fill=\"{a}\"/><circle cx=\"52\" cy=\"62\" r=\"8\" fill=\"{b}\"/><circle cx=\"86\" cy=\"44\" r=\"4\" fill=\"#FFF3A8\"/>','shake'];\nSH.basket=['<circle cx=\"50\" cy=\"50\" r=\"36\" fill=\"{a}\"/><g fill=\"none\" stroke=\"#3A1A05\" stroke-width=\"2.8\"><path d=\"M14 50h72M50 14v72\"/><path d=\"M24 22c15 11 15 45 0 56M76 22c-15 11-15 45 0 56\"/><\/g>','bounce'];\nSH.racket=['<ellipse cx=\"42\" cy=\"38\" rx=\"24\" ry=\"30\" fill=\"none\" stroke=\"{a}\" stroke-width=\"7\"/><g stroke=\"#fff\" stroke-opacity=\".85\" stroke-width=\"1.6\"><path d=\"M30 14v48M42 10v56M54 14v48M20 26h44M18 38h48M22 50h40\"/><\/g><path d=\"M58 62l22 24\" stroke=\"{b}\" stroke-width=\"9\" stroke-linecap=\"round\"/><circle cx=\"82\" cy=\"22\" r=\"10\" fill=\"#D7F34A\"/><path d=\"M75 18c4 3 4 9 0 12M89 14c-4 3-4 9 0 12\" stroke=\"#fff\" stroke-width=\"1.8\" fill=\"none\"/>','sway'];\nSH.lion=['<g fill=\"{a}\"><circle cx=\"50\" cy=\"16\" r=\"14\"/><circle cx=\"76\" cy=\"26\" r=\"14\"/><circle cx=\"86\" cy=\"52\" r=\"14\"/><circle cx=\"76\" cy=\"78\" r=\"14\"/><circle cx=\"50\" cy=\"88\" r=\"14\"/><circle cx=\"24\" cy=\"78\" r=\"14\"/><circle cx=\"14\" cy=\"52\" r=\"14\"/><circle cx=\"24\" cy=\"26\" r=\"14\"/><circle cx=\"50\" cy=\"52\" r=\"34\"/><\/g><circle cx=\"33\" cy=\"32\" r=\"8\" fill=\"{b}\"/><circle cx=\"67\" cy=\"32\" r=\"8\" fill=\"{b}\"/><circle cx=\"50\" cy=\"55\" r=\"25\" fill=\"{b}\"/><circle cx=\"40\" cy=\"49\" r=\"4\" fill=\"#2B1708\"/><circle cx=\"60\" cy=\"49\" r=\"4\" fill=\"#2B1708\"/><circle cx=\"41.4\" cy=\"47.6\" r=\"1.4\" fill=\"#fff\"/><circle cx=\"61.4\" cy=\"47.6\" r=\"1.4\" fill=\"#fff\"/><path d=\"M44 57h12l-6 7z\" fill=\"#B3441A\"/><path d=\"M50 64q-6 9-13 4M50 64q6 9 13 4\" stroke=\"#2B1708\" stroke-width=\"2.6\" fill=\"none\" stroke-linecap=\"round\"/>','beat'];\nSH.elephant=['<circle cx=\"17\" cy=\"42\" r=\"19\" fill=\"{a}\"/><circle cx=\"83\" cy=\"42\" r=\"19\" fill=\"{a}\"/><circle cx=\"17\" cy=\"42\" r=\"11\" fill=\"#F7B6CB\" opacity=\".8\"/><circle cx=\"83\" cy=\"42\" r=\"11\" fill=\"#F7B6CB\" opacity=\".8\"/><circle cx=\"50\" cy=\"44\" r=\"28\" fill=\"{a}\"/><path d=\"M41 54c0 22 2 36 14 42 6 3 13-2 10-9-6 1-10-3-10-10 0-8 1-15 1-23z\" fill=\"{a}\"/><circle cx=\"39\" cy=\"40\" r=\"3.6\" fill=\"#1B1F27\"/><circle cx=\"61\" cy=\"40\" r=\"3.6\" fill=\"#1B1F27\"/><path d=\"M37 60q-5 9 1 13M63 60q5 9-1 13\" stroke=\"#fff\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/>','sway'];\nSH.giraffe=['<path d=\"M40 94V42h20v52z\" fill=\"{a}\"/><ellipse cx=\"50\" cy=\"30\" rx=\"20\" ry=\"16\" fill=\"{a}\"/><ellipse cx=\"50\" cy=\"38\" rx=\"12\" ry=\"9\" fill=\"{b}\"/><path d=\"M42 16V7M58 16V7\" stroke=\"#8A5A1A\" stroke-width=\"3\"/><circle cx=\"42\" cy=\"6\" r=\"4\" fill=\"#8A5A1A\"/><circle cx=\"58\" cy=\"6\" r=\"4\" fill=\"#8A5A1A\"/><ellipse cx=\"27\" cy=\"26\" rx=\"9\" ry=\"4.5\" fill=\"{a}\" transform=\"rotate(-24 27 26)\"/><ellipse cx=\"73\" cy=\"26\" rx=\"9\" ry=\"4.5\" fill=\"{a}\" transform=\"rotate(24 73 26)\"/><circle cx=\"42\" cy=\"27\" r=\"3.2\" fill=\"#1B1F27\"/><circle cx=\"58\" cy=\"27\" r=\"3.2\" fill=\"#1B1F27\"/><circle cx=\"46\" cy=\"38\" r=\"1.6\" fill=\"#7A3F12\"/><circle cx=\"54\" cy=\"38\" r=\"1.6\" fill=\"#7A3F12\"/><g fill=\"#9A5B14\"><circle cx=\"46\" cy=\"58\" r=\"5\"/><circle cx=\"55\" cy=\"72\" r=\"5\"/><circle cx=\"46\" cy=\"84\" r=\"4\"/><\/g>','sway'];\nSH.penguin=['<ellipse cx=\"19\" cy=\"62\" rx=\"7\" ry=\"16\" fill=\"{a}\" transform=\"rotate(14 19 62)\"/><ellipse cx=\"81\" cy=\"62\" rx=\"7\" ry=\"16\" fill=\"{a}\" transform=\"rotate(-14 81 62)\"/><ellipse cx=\"50\" cy=\"56\" rx=\"30\" ry=\"36\" fill=\"{a}\"/><ellipse cx=\"50\" cy=\"64\" rx=\"19\" ry=\"27\" fill=\"#fff\"/><circle cx=\"41\" cy=\"42\" r=\"6\" fill=\"#fff\"/><circle cx=\"59\" cy=\"42\" r=\"6\" fill=\"#fff\"/><circle cx=\"42\" cy=\"43\" r=\"2.8\" fill=\"#111\"/><circle cx=\"58\" cy=\"43\" r=\"2.8\" fill=\"#111\"/><path d=\"M43 50h14l-7 9z\" fill=\"{b}\"/><ellipse cx=\"39\" cy=\"92\" rx=\"10\" ry=\"4.5\" fill=\"{b}\"/><ellipse cx=\"61\" cy=\"92\" rx=\"10\" ry=\"4.5\" fill=\"{b}\"/>','bounce'];\nSH.panda=['<circle cx=\"22\" cy=\"24\" r=\"12\" fill=\"#1B1F27\"/><circle cx=\"78\" cy=\"24\" r=\"12\" fill=\"#1B1F27\"/><circle cx=\"50\" cy=\"54\" r=\"34\" fill=\"url(#wht)\"/><ellipse cx=\"35\" cy=\"50\" rx=\"8\" ry=\"11\" fill=\"#1B1F27\" transform=\"rotate(20 35 50)\"/><ellipse cx=\"65\" cy=\"50\" rx=\"8\" ry=\"11\" fill=\"#1B1F27\" transform=\"rotate(-20 65 50)\"/><circle cx=\"36\" cy=\"49\" r=\"3\" fill=\"#fff\"/><circle cx=\"64\" cy=\"49\" r=\"3\" fill=\"#fff\"/><ellipse cx=\"50\" cy=\"62\" rx=\"6\" ry=\"4.5\" fill=\"#1B1F27\"/><path d=\"M50 66q-5 7-10 3M50 66q5 7 10 3\" stroke=\"#1B1F27\" stroke-width=\"2.4\" fill=\"none\" stroke-linecap=\"round\"/>','bob'];\nSH.cat=['<path d=\"M16 42L20 8l26 16zM84 42L80 8 54 24z\" fill=\"{a}\"/><path d=\"M24 34l2-14 10 7zM76 34l-2-14-10 7z\" fill=\"{b}\"/><circle cx=\"50\" cy=\"56\" r=\"34\" fill=\"{a}\"/><ellipse cx=\"38\" cy=\"52\" rx=\"5\" ry=\"6\" fill=\"#1B1F27\"/><ellipse cx=\"62\" cy=\"52\" rx=\"5\" ry=\"6\" fill=\"#1B1F27\"/><circle cx=\"39.5\" cy=\"50\" r=\"1.8\" fill=\"#fff\"/><circle cx=\"63.5\" cy=\"50\" r=\"1.8\" fill=\"#fff\"/><path d=\"M46 62h8l-4 5z\" fill=\"{b}\"/><path d=\"M50 67q-5 6-10 3M50 67q5 6 10 3\" stroke=\"#1B1F27\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M12 58l18 3M12 66l18-2M88 58L70 61M88 66L70 64\" stroke=\"#fff\" stroke-opacity=\".8\" stroke-width=\"1.6\"/>','bob'];\nvar star4=function(x,y,c,k){return '<path class=\"'+k+'\" d=\"M'+x+' '+(y-7)+'l2 5 5 2-5 2-2 5-2-5-5-2 5-2z\" fill=\"'+c+'\"/>'};\nvar HL='<circle class=\"hl\" cx=\"50\" cy=\"50\" r=\"46\" fill=\"none\" stroke=\"#FFE08A\" stroke-width=\"7\" stroke-dasharray=\"3 12\" opacity=\".6\"/>',RG='<circle class=\"rg\" cx=\"50\" cy=\"50\" r=\"30\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>',\nWG='<path class=\"wl\" d=\"M32 54C8 30 2 56 10 68c8 8 16-2 22-8z\" fill=\"#fff\" opacity=\".92\"/><path class=\"wr\" d=\"M68 54c24-24 30 2 22 14-8 8-16-2-22-8z\" fill=\"#fff\" opacity=\".92\"/>',\nOB='<g class=\"ob\"><circle cx=\"97\" cy=\"50\" r=\"3\" fill=\"#fff\"/><circle cx=\"3\" cy=\"50\" r=\"2.4\" fill=\"#FFE08A\"/><\/g>',\nSP=star4(84,20,'#fff','sp')+star4(14,26,'#FFE08A','sp2')+star4(80,82,'#9CC2FF','sp2'),\nCF='<rect class=\"cf\" x=\"18\" y=\"2\" width=\"5\" height=\"9\" fill=\"#FF8A8A\"/><rect class=\"cf2\" x=\"78\" y=\"0\" width=\"5\" height=\"9\" fill=\"#9CC2FF\"/><rect class=\"cf\" x=\"52\" y=\"-2\" width=\"5\" height=\"9\" fill=\"#5FE08A\"/>';\nvar L='Plume|1000|feather|grn|wht|;Nuage|1200|cloud|wht|cya|;Sourire|1500|smile|gold||;Note de musique|1800|note|pur|gold|;Café du campus|2000|cup|wht|grn|;Papillon|2200|butterfly|cya|pur|;Cœur vert|2500|heart|grn||s;Cloche|2800|bell|gold|red|;Étoile|3000|star|gold||;Pièce MONLoG|3200|coin|gold|ora|;Bonbon|3500|candy|pink|pur|;Fleur|4000|flower|pink|gold|;Sac campus|4200|bag|grn|gold|;Mangue|4500|mango|ora|grn|;Ballon|5000|balloon|red||;Arc-en-ciel|5500|rainbow|wht|wht|s;Rose|6000|flower|red|gold|s;Tambour|6500|drum|red|gold|;Glace|7000|icecream|pink|ora|;Cadeau surprise|8000|gift|blu|gold|;Médaille|9000|medal|gold|red|;Livre d’or|10000|book|gold|wht|s;Basket|11000|basket|ora||;Ampoule|12000|bulb|gold|wht|s;Chaton|13000|cat|ora|pink|;Casque|14000|headset|pur|cya|;Vélo|15000|bike|red|gold|;Micro|16000|mic|pur|gold|;Panda|17000|panda|||;Diplôme|18000|scroll|wht|red|;Raquette|19000|racket|grn|gold|;Gâteau|20000|cake|pink|gold|;Pingouin|22000|penguin|nav|ora|;Ballon de foot|23000|ball|grn||;Moto|25000|moto|red|gold|;Appareil photo|26000|camera|blu|cya|;Bouclier|28000|shield|blu|gold|;Fusée|30000|rocket|red|blu|;Flamme|35000|flame|ora|gold|;Éclair|40000|bolt|gold|ora|s;Lune|45000|moon|gold|ora|o;Girafe|48000|giraffe|gold|ora|;Soleil|50000|sun|gold|ora|h;Voiture de sport|55000|car|red|gold|;Bouquet|60000|flower|pink|gold|so;Montgolfière|65000|hotair|red|gold|s;Trophée|70000|trophy|gold||c;Cœur ailé|80000|heart|red||w;Éléphant|85000|elephant|gry|gry|s;Avion en papier|90000|plane|cya|blu|s;Couronne|100000|crown|gold||s;Lion|120000|lion|ora|gold|s;Bague|130000|ring|gold|cya|s;Jet privé|150000|jet|wht|blu|s;Diamant|170000|diamond|blu||s;Étoile d’or|180000|star|gold||h;Fusée turbo|200000|rocket|gold|red|h;Cœur de feu|220000|heart|red||ho;Trophée d’or|250000|trophy|gold||hc;Voiture de luxe|280000|car|gold|red|hs;Couronne royale|300000|crown|gold||hw;Éléphant royal|330000|elephant|gry|gry|hos;Lion royal|360000|lion|gold|ora|hws;Montgolfière dorée|390000|hotair|gold|pur|hos;Lune dorée|420000|moon|gold|ora|hos;Jet royal|450000|jet|gold|red|hs;Girafe étoilée|480000|giraffe|gold|ora|hos;Cadeau royal|500000|gift|gold|red|hs;Pingouin polaire|530000|penguin|nav|cya|hos;Panda magique|560000|panda|||hos;Moto de légende|600000|moto|gold|red|hs;Chat des étoiles|640000|cat|pur|gold|hos;Planète|700000|planet|pur|gold|os;Soleil radieux|750000|sun|gold|red|hr;Phénix|800000|flame|red|gold|hw;Diamant bleu|850000|diamond|cya||ho;Couronne céleste|900000|crown|cya|gold|hwos;Cœur galactique|940000|heart|pur||hor;Coffre MONLoG|960000|gift|gold|pur|hosr;Galaxie UJLoG|1000000|galaxy|pur|gold|s';\nvar TI={p:'Petits',m:'Moyens',g:'Grands',l:'Légendaires'},DUR={p:5,m:6.5,g:7.5,l:9},\nFAM={rocket:'launch',plane:'launch',crown:'drop',trophy:'drop',gift:'drop',book:'drop',cake:'drop',camera:'drop',mic:'drop',headset:'drop',bulb:'drop',scroll:'drop',star:'zoom',sun:'zoom',moon:'zoom',diamond:'zoom',ring:'zoom',planet:'zoom',galaxy:'zoom',bolt:'zoom',flame:'zoom',coin:'zoom',shield:'zoom',rainbow:'zoom',medal:'drop',bell:'drop',drum:'drop',bag:'drop',car:'drive',moto:'drive',bike:'drive',jet:'launch',basket:'drop',racket:'zoom',lion:'zoom',elephant:'drop',penguin:'drop'},\nCOL={p:['#5FE08A','#fff','#BFF5D2'],m:['#9CC2FF','#fff','#FFE08A','#5FE08A'],g:['#FFE08A','#C9A8FF','#fff','#FF8AC6','#9CC2FF'],l:['#FFE08A','#F5B82E','#fff','#FFF6C9','#FF8A8A','#9CC2FF']};\nvar G=L.split(';').map(function(r){var x=r.split('|'),p=+x[1];return{n:x[0],p:p,s:x[2],a:x[3],b:x[4]||'wht',m:x[5]||'',t:p<=7000?'p':p<=30000?'m':p<=200000?'g':'l'}}).sort(function(a,b){return a.p-b.p});\nvar P=function(k){return 'url(#'+k+')'},$=function(i){return document.getElementById(i)},f=function(n){return n.toLocaleString('fr-FR')};\nfunction art(g,big){var s=SH[g.s],m=g.m;return '<svg viewBox=\"0 0 100 100\" aria-hidden=\"true\">'+(big?'<ellipse class=\"gs\" cx=\"50\" cy=\"92\" rx=\"28\" ry=\"5\" fill=\"#000\" opacity=\".4\"/>':'')+(m.indexOf('h')>-1?HL:'')+(m.indexOf('r')>-1?RG:'')+(m.indexOf('w')>-1?WG:'')+'<g class=\"a\"><g filter=\"url(#bv)\"><g class=\"'+s[1]+'\">'+s[0].replace(/\\{a\\}/g,P(g.a)).replace(/\\{b\\}/g,P(g.b))+'<\/g><\/g><\/g>'+(m.indexOf('o')>-1?OB:'')+(m.indexOf('s')>-1?SP:'')+(m.indexOf('c')>-1?CF:'')+'<\/svg>'}\nvar cur='all',sel=-1,bal=120000,last=0,TM=[],IV=0;\nvar TD={p:'Jusqu’à 7 000',m:'De 7 000 à 30 000',g:'De 30 000 à 200 000',l:'Au‑delà de 200 000'};\nsName='rg2';$('ov').appendChild(r);r.animate([{transform:'scale(.3)',opacity:.9},{transform:'scale('+sc+')',opacity:0}],{duration:1200,easing:'ease-out'}).onfinish=function(){r.remove()}}\nfunction emit(t,n,x,y){var fx=$('fx'),c=COL[t],W=innerWidth,H=innerHeight;for(var k=0;k<n;k++){var e=document.createElement('i'),r=Math.random(),sz=6+Math.random()*(t=='l'?18:11),rain=(t=='g'||t=='l')&&r<.4;e.className='pt '+(r<.5?'s':r<.8?'d':'b');e.style.cssText='width:'+sz+'px;height:'+(r<.8?sz:sz*1.6)+'px;background:'+c[Math.floor(Math.random()*c.length)]+';left:'+(rain?Math.random()*W:(x==null?W/2:x))+'px;top:'+(rain?-20:(y==null?H*.42:y))+'px';fx.appendChild(e);var dx=rain?(Math.random()-.5)*80:(Math.random()-.5)*(x==null?W*1.1:150),dy=rain?H+40:-(60+Math.random()*(x==null?H*.5:130));e.animate([{transform:'translate(0,0) scale(.3) rotate(0)',opacity:1},{transform:'translate('+dx+'px,'+dy+'px) scale(1) rotate('+Math.random()*540+'deg)',opacity:0}],{duration:1600+Math.random()*1800,easing:rain?'ease-in':'cubic-bezier(.15,.7,.3,1)'}).onfinish=function(){this.effect.target.remove()}}}\nfunction stop(){TM.forEach(clearTimeout);TM=[];clearInterval(IV);$('fx').innerHTML='';document.querySelectorAll('.rg2').forEach(function(x){x.remove()})}\nfunction at(){var r=$('big').querySelector('.a').getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2]}\nfunction shake(a){$('ov').animate([{transform:'translate(0,0)'},{transform:'translate('+a+'px,'+(-a)+'px)'},{transform:'translate('+(-a)+'px,'+a+'px)'},{transform:'translate('+a/2+'px,'+a/2+'px)'},{transform:'translate(0,0)'}],{duration:420})}\nfunction flash(){$('fl').animate([{opacity:0},{opacity:.8},{opacity:0}],{duration:520})}\nfunction play(i){stop();last=i;var g=G[i],D=DUR[g.t],b=$('big'),fam=FAM[g.s]||'rise',T=g.t,big=T=='g'||T=='l',z=function(ms,fn){TM.push(setTimeout(fn,ms))};\n$('ov').className='ov p';$('ov').hidden=false;b.className='big '+fam;b.style.setProperty('--d',D+'s');b.innerHTML=art(g,1);$('rays').style.display='none';\nvar bm=$('bm');bm.style.display='none';bm.style.setProperty('--dd',D+'s');bm.style.animation='none';void bm.offsetWidth;bm.style.animation='';\nflash();ring(2.4);emit(T,T=='l'?34:16);\nz({drop:.11,zoom:.13,rise:.09,launch:.09,drive:.14}[fam]*D*1000,function(){ring(3);flash();if(big)shake(T=='l'?14:9);emit(T,big?40:20)});\nIV=setInterval(function(){var p=at();emit(T,T=='l'?3:big?2:1,p[0],p[1]);if(fam=='launch')emit('l',3,p[0],p[1]+70)},{p:130,m:90,g:60,l:40}[T]);\nz(D*880,function(){clearInterval(IV)});\nz(D*870,function(){ring(3.6);if(big)shake(T=='l'?18:11);emit(T,T=='l'?70:big?50:24,innerWidth/2,innerHeight*.42);flash()});\nz(D*1000,close)}\nfunction close(){stop();$('ov').hidden=true}\n$('ov').onclick=close;document.onkeydown=function(e){if(e.key=='Escape')close()};\n<\/script><script>(function(){\nvar LS='ujGift',S=null,FEE=.15,LINK={wave:'',mc:''},WAVE='0506172317';\ntry{S=JSON.parse(localStorage.getItem(LS)||'null')}catch(e){}\nS=S||{bal:0,inv:{},rec:[],hist:[],pend:[]};var PQ={},PN=0,MAIN=0;function pc(op,arg,cb){var id=++PN;PQ[id]=cb||function(){};try{parent.postMessage({ujg:1,id:id,op:op,arg:arg},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(e){}setTimeout(function(){var c=PQ[id];if(c){delete PQ[id];c(null)}},3000)}pc('st',0)\nvar TIERS=[[5000,500],[10000,1000],[15000,1500],[20000,2000],[50000,5000],[150000,15000]],FR=['Étudiant 1','Étudiant 2','Étudiant 3','UJLoG','Resto U'];\nvar LD=false;function sv(){try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}if(LD)pc('save',{d:JSON.stringify(S)})}\nfunction setBal(v,l){var d=S.bal-v;if(d>0&&S.bal<d)return false;if(d>0)pc('gspend',{n:d,l:l||'Cadeau'});else if(d<0)pc('gcredit',{n:-d,l:l||'Cadeau'});S.bal=v;bal=v;$('bl').textContent=f(v);sv();return true}\nfunction now(){return new Date().toLocaleString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}\nfunction log(t,d,a){S.hist.unshift({t:t,d:d,a:a,at:now()});S.hist=S.hist.slice(0,60);sv()}\nfunction net(g){return Math.floor(g.p*(1-FEE))}\nbal=S.bal;$('bl').textContent=f(bal);\nvar st=document.createElement('style');\nst.textContent='#tabs[hidden],#grid[hidden],#mine[hidden]{display:none!important}#sg[hidden]{display:none!important}#mt{display:flex;gap:6px;margin:6px 14px;padding:4px;border-radius:14px;background:var(--pill)}#mt button,.sub button{flex:1;border:0;border-radius:11px;padding:9px;background:none;color:var(--ink);font:700 13.5px system-ui}#mt button.on,.sub button.on{background:#15803D;color:#fff}.sub{display:flex;gap:6px;margin:6px 14px}.sub button{background:var(--pill);padding:7px;font-size:12.5px}#mine{padding:4px 8px}.gc{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;padding:6px 10px;background:var(--pn);border-radius:20px}.gc .t i{position:absolute;top:2px;right:4px;font:800 11px system-ui;font-style:normal;background:#15803D;color:#fff;border-radius:9px;padding:1px 6px}.rw{display:flex;align-items:center;gap:10px;padding:10px 12px;margin:6px 6px;background:var(--pn);border-radius:16px}.rw .a{width:46px;height:46px;flex:none}.rw .a svg{width:100%;height:100%}.rw .x{flex:1;min-width:0}.rw .x b{display:block;font-size:13.5px}.rw .x small{color:var(--mu);font-size:12px}.rw button{border:0;border-radius:10px;padding:8px 10px;background:#15803D;color:#fff;font:700 12px system-ui}.rw button[disabled]{background:var(--pill);color:var(--mu)}.em{text-align:center;color:var(--mu);padding:30px 20px;font-size:13.5px}.em button,.lk{margin-top:10px;border:0;border-radius:10px;padding:9px 14px;background:var(--pill);color:var(--ink);font:700 13px system-ui}#sheet{position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.5);display:flex;align-items:flex-end}#sheet[hidden]{display:none}#sheet .pn{width:100%;max-width:560px;margin:auto;max-height:88vh;overflow:auto;background:var(--pn);border-radius:24px 24px 0 0;padding:18px 18px calc(18px + env(safe-area-inset-bottom,0px));animation:up .25s ease}@keyframes up{from{transform:translateY(40px);opacity:0}}#sheet h2{font:800 19px system-ui;text-align:center}#sheet .mu{color:var(--mu);text-align:center;font-size:12.5px;margin:4px 0 10px}#sheet .gb{width:120px;height:120px;margin:0 auto}#sheet .gb{overflow:hidden;position:relative;z-index:0}#sheet .gb svg{width:100%;height:100%;overflow:hidden;pointer-events:none}#sheet .qt,#sheet .ro,#sheet .pr,#sheet .sc{position:relative;z-index:1}.qt{display:flex;justify-content:center;align-items:center;gap:18px;margin:8px 0}.qt button{width:38px;height:38px;border-radius:50%;border:0;background:var(--pill);color:var(--ink);font:800 20px system-ui}.qt b{font-size:20px;min-width:30px;text-align:center}.ro{display:flex;justify-content:space-between;padding:8px 2px;border-top:1px solid var(--ln);font-size:14px}.pr,.sc{display:block;width:100%;border:0;border-radius:14px;padding:14px;margin-top:10px;font:800 15px system-ui}.pr{background:linear-gradient(135deg,#22A653,#15803D);color:#fff}.sc{background:var(--pill);color:var(--ink)}.tier,.fr{display:flex;justify-content:space-between;align-items:center;width:100%;border:1px solid var(--ln);background:none;color:var(--ink);border-radius:14px;padding:13px 14px;margin-top:8px;font:700 14.5px system-ui}.tier.on,.fr.on{border-color:#15803D;background:rgba(21,128,61,.12)}.tier span{color:#15803D}#sheet input{width:100%;border:1px solid var(--ln);background:var(--bg);color:var(--ink);border-radius:12px;padding:12px;margin-top:8px;font:15px system-ui}#tt{position:fixed;left:50%;bottom:90px;transform:translateX(-50%);z-index:70;background:#0B1B12;color:#fff;padding:11px 16px;border-radius:12px;font:600 13px system-ui;max-width:86vw;text-align:center}';\ndocument.head.appendChild(st);document.head.appendChild(document.getElementById('ov2'));document.head.appendChild(document.getElementById('ov3'));\ndocument.body.insertAdjacentHTML('beforeend','<div id=\"mine\" hidden><\/div><div id=\"sheet\" hidden><\/div>');\nvar sh=$('sheet'),sub='own',view='shop';(function(){var b=$('bl'),p=function(){try{parent.__gfBal(b.textContent)}catch(e){}};new MutationObserver(p).observe(b,{childList:true,characterData:true,subtree:true});p()})();\nfunction toast(m){var o=$('tt');o&&o.remove();var d=document.createElement('div');d.id='tt';d.textContent=m;document.body.appendChild(d);setTimeout(function(){d.remove()},2600)}\nfunction sheet(h,fn){sh.innerHTML='<div class=\"pn\">'+h+'<\/div>';sh.hidden=false;sh._h=fn;sh._i=null}\nsh.oninput=function(e){if(sh._i)sh._i(e)};sh.onclick=function(e){if(e.target===sh){sh.hidden=true;return}var b=e.target.closest('[data-a]');if(b&&sh._h)sh._h(b.dataset.a,b)};\nvar sg='shop';function show(){var m=view=='mine',o=!m&&sg=='own',n=0;for(var k in S.inv)n+=S.inv[k];$('sg').hidden=m;[].forEach.call($('sg').children,function(b){b.classList.toggle('on',b.dataset.s==sg)});$('sg').children[1].textContent='À offrir'+(n?' · '+n:'');$('grid').hidden=m||o;$('mine').hidden=!(m||o);pc('title',{v:view});if(m)drawRec();else if(o)drawOwn()}\nfunction setView(v){view=v;show()}\nwindow.__go=setView;window.__rech=rech;window.addEventListener('message',function(e){var d=e.data;if(!d)return;if(d.ujgr){var cb=PQ[d.id];delete PQ[d.id];if(d.st){MAIN=d.st.main;if(d.st.gift!==S.bal){S.bal=d.st.gift;bal=S.bal;$('bl').textContent=f(S.bal)}}if(cb)cb(d.res)}else if(d.ujgcmd=='go')setView(d.tab);else if(d.ujgcmd=='rech')rech()});\n$('grid').onclick=function(e){var b=e.target.closest('.t');b&&detail(+b.dataset.i)};\n$('rc')&&($('rc').onclick=earn);\nfunction detail(i){var g=G[i],q=1;(function d(){var tot=g.p*q,ok=S.bal>=tot;\nsheet('<div class=\"gb\">'+art(g)+'<\/div><h2>'+g.n+'<\/h2><p class=\"pp\"><i class=\"mc\"><\/i>'+f(tot)+'<\/p><div class=\"qt\"><button data-a=\"m\" aria-label=\"Moins\">−<\/button><b>'+q+'<\/b><button data-a=\"p\" aria-label=\"Plus\">+<\/button><\/div>'+(ok?'<button class=\"pr\" data-a=\"bg\">Offrir<\/button><button class=\"sc\" data-a=\"buy\">Garder pour l’offrir plus tard<\/button>':'<p class=\"no\">Solde cadeau insuffisant<\/p><button class=\"pr\" data-a=\"top\">Recharger depuis mon solde<\/button><button class=\"sc\" data-a=\"rech\">Gagner des MONLoG<\/button>'),\nfunction(a){\nif(a=='m'){q=Math.max(1,q-1);d()}else if(a=='p'){q=Math.min(99,q+1);d()}else if(a=='top')rech(i);else if(a=='rech')steps(i);\nelse if(a=='buy'){if(!setBal(S.bal-tot,g.n+' ×'+q)){toast('Solde cadeau insuffisant');return}S.inv[i]=(S.inv[i]||0)+q;log('Achat',g.n+' ×'+q,-tot);sh.hidden=true;toast('Ajouté à « À offrir »');if(view!='mine'&&sg=='own')drawOwn()}\nelse if(a=='bg')give(i,q,false)})})()}\nfunction steps(i){sheet('<h2>Pour gagner des MONLoG<\/h2><div class=\"gs\">'+[['Récompense du jour','Ouvre ton cadeau chaque jour'],['Jeux','Joue au jeu du jour'],['Interactions','Reçois des mentions j’aime et des abonnés'],['Publications','Publie une photo, lance un sondage'],['Invitations','Invite un ami sur UJLoG']].map(function(r,k){return'<button data-a=\"g'+k+'\"><i>'+(k+1)+'<\/i><span><strong>'+r[0]+'<\/strong><small>'+r[1]+'<\/small><\/span><\/button>'}).join('')+'<\/div><button class=\"sc\" data-a=\"back\">Retour<\/button>',function(a){var PG=['go:sol|Boîte cadeau','go:sol|Cadeaux','go:sol|Mes interactions','go:sol|Gagner aujourd’hui','go:sol|Gagner aujourd’hui','go:sol|Gagner aujourd’hui'];if(a=='back')sh.hidden=true;else if(a[0]=='g')earn(PG[+a[1]])})}\nfunction esc(s){return String(s).replace(/[&<>\"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]})}\nvar AB=[['Awa Koné','UJ-AGRO-26-KA'],['Yao Kouadio','UJ-ENV-26-KY'],['Fatou Traoré','UJ-JUR-26-TF'],['Koffi Bamba','UJ-SSH-26-BK'],['Mariam Diallo','UJ-SEG-26-DM'],['Ibrahim Soro','UJ-AGRO-26-SI']];\nfunction give(i,q,inv){var g=G[i],to=null,qs='',msg='',tot=g.p*q;\nfunction ini(n){return n.split(' ').map(function(w){return w[0]}).join('').slice(0,2).toUpperCase()}\nfunction rows(){var s=qs.trim().toLowerCase(),l=AB.filter(function(x){return !s||x[0].toLowerCase().indexOf(s)>-1||x[1].toLowerCase().indexOf(s)>-1}),h=l.map(function(x){return'<button class=\"rc'+(to&&to[1]==x[1]?' on':'')+'\" data-a=\"r\" data-u=\"'+x[1]+'\"><span class=\"av\">'+ini(x[0])+'<\/span><span><b>'+x[0]+'<\/b><small>'+x[1]+'<\/small><\/span><i class=\"ck\"><\/i><\/button>'}).join('');\nif(s.length>=3&&!AB.some(function(x){return x[1].toLowerCase()==s}))h+='<button class=\"rc'+(to&&to[2]?' on':'')+'\" data-a=\"c\"><span class=\"av\">@<\/span><span><b>Envoyer à « '+esc(qs.trim())+' »<\/b><small>Pseudo ou UJ-ID<\/small><\/span><i class=\"ck\"><\/i><\/button>';\nreturn h||'<p class=\"em\" style=\"padding:14px\">Aucun abonné trouvé<\/p>'}\n(function d(){var low=!inv&&S.bal<tot;\nsheet('<div class=\"gb gm\">'+art(g)+'<\/div><h2>Offrir « '+g.n+' »'+(q>1?' ×'+q:'')+'<\/h2><p class=\"mu\">'+(inv?'Déjà dans tes cadeaux à offrir':f(tot)+' MONLoG')+'<\/p><div class=\"lb\">Destinataire<\/div><input id=\"pn\" placeholder=\"Rechercher un abonné, un pseudo ou un UJ-ID\" value=\"'+esc(qs)+'\" autocomplete=\"off\"><div class=\"lb\">Mes abonnés<\/div><div class=\"rl\" id=\"rl\">'+rows()+'<\/div><div class=\"lb\">Message (facultatif)<\/div><input id=\"ms\" maxlength=\"80\" placeholder=\"Écris un petit mot\" value=\"'+esc(msg)+'\"><div class=\"ro\" style=\"margin-top:12px\"><span>Destinataire<\/span><b>'+(to?esc(to[0]):'Non choisi')+'<\/b><\/div>'+(inv?'':'<div class=\"ro\"><span>Solde cadeau après envoi<\/span><b class=\"cv\"'+(low?' style=\"color:#E11D2E\"':'')+'><i class=\"mc\"><\/i>'+f(S.bal-tot)+'<\/b><\/div>')+(low?'<p class=\"no\">Solde cadeau insuffisant<\/p><button class=\"pr\" data-a=\"top\">Recharger depuis mon solde<\/button>':'<button class=\"pr\" data-a=\"go\"'+(to?'':' disabled')+'>Envoyer le cadeau<\/button>')+'<button class=\"sc\" data-a=\"x\">Annuler<\/button>',function(a,b){\nif(a=='r'){to=AB.filter(function(x){return x[1]==b.dataset.u})[0];d()}\nelse if(a=='c'){var u=qs.trim();to=[u,u,1];d()}\nelse if(a=='top')rech(function(){give(i,q,inv)})\nelse if(a=='x')sh.hidden=true\nelse if(a=='go'){if(!to)return;if(inv){if((S.inv[i]||0)<q){toast('Cadeau indisponible');return}S.inv[i]-=q;if(!S.inv[i])delete S.inv[i]}else if(!setBal(S.bal-tot,g.n+' ×'+q)){toast('Solde cadeau insuffisant');return}\nlog('Envoi',g.n+(q>1?' ×'+q:'')+' → '+esc(to[0])+(msg.trim()?' · « '+esc(msg.trim())+' »':''),inv?0:-tot);sv();sh.hidden=true;play(i);toast('Cadeau envoyé à '+to[0]);show()}});\nsh._i=function(e){if(e.target.id=='pn'){qs=e.target.value;$('rl').innerHTML=rows()}else if(e.target.id=='ms')msg=e.target.value}})()}\nfunction cnt(el,a,b,ms){if(!el)return;var t0=performance.now();(function s(n){var q=Math.min(1,(n-t0)/ms);el.textContent=f(Math.round(a+(b-a)*(1-Math.pow(1-q,3))));if(q<1)requestAnimationFrame(s)})(t0)}\nfunction rech(ret){pc('st',0,function(){var amt=0,QA=[10000,50000,100000,500000,1000000],m=MAIN;\nfunction upd(){var el=$('ra'),n=el?(parseInt(el.value.replace(/\\D/g,''),10)||0):amt,ok=n>0&&n<=m,bt=$('rg'),er=$('re');amt=n;$('pa')&&($('pa').textContent=f(ok?n:0));$('pm')&&($('pm').textContent=f(m-(ok?n:0)));$('pv')&&($('pv').textContent=f(S.bal+(ok?n:0)));document.querySelectorAll('.qg button').forEach(function(x){x.classList.toggle('on',+x.dataset.v==n&&n>0)});if(bt){bt.disabled=!ok;bt.textContent=n>0?'Recharger '+f(n)+' MONLoG':'Recharger'}if(er)er.textContent=n>m?'Solde principal insuffisant ('+f(m)+' disponibles)':''}\nfunction row(l,id,v){return'<div class=\"ro\"><span>'+l+'<\/span><b class=\"cv\"><i class=\"mc\"><\/i><span id=\"'+id+'\">'+v+'<\/span><\/b><\/div>'}\nfunction d(){var fits=QA.filter(function(x){return x<m});\nsheet('<h2>Recharger UJCadeau<\/h2><p class=\"mu\">Transfère des MONLoG de ton solde principal vers ton solde cadeau.<\/p><div class=\"wx\"><div><small>Solde principal<\/small><b><i class=\"mc\"><\/i>'+f(m)+'<\/b><\/div><span class=\"ar\">→<\/span><div><small>Solde cadeau<\/small><b><i class=\"mc\"><\/i>'+f(S.bal)+'<\/b><\/div><\/div>'+(m>0?'<div class=\"lb\">Montant à transférer<\/div><div class=\"qg\">'+fits.map(function(x){return'<button data-a=\"q\" data-v=\"'+x+'\">'+f(x)+'<\/button>'}).join('')+'<button data-a=\"q\" data-v=\"'+m+'\">Tout<\/button><\/div><div class=\"ig\"><input id=\"ra\" inputmode=\"numeric\" placeholder=\"Autre montant\" autocomplete=\"off\" value=\"'+(amt||'')+'\"><span>MONLoG<\/span><\/div><p class=\"no\" id=\"re\" style=\"background:none;padding:0;margin:8px auto 0\"><\/p><div class=\"sm\">'+row('Montant transféré','pa','0')+row('Solde principal après','pm',f(m))+row('Solde cadeau après','pv',f(S.bal))+'<\/div>':'<p class=\"no\">Ton solde principal est vide<\/p>')+'<button class=\"pr\" id=\"rg\" data-a=\"go\" disabled>Recharger<\/button><button class=\"sc\" data-a=\"pay\">Acheter des MONLoG (Wave, Mertercars)<\/button>',function(a,b){\nif(a=='q'){amt=+b.dataset.v;$('ra').value=amt;upd()}else if(a=='pay')tiers();\nelse if(a=='go'){upd();if(!(amt>0&&amt<=m))return;var n=amt,o=S.bal;$('rg').disabled=true;$('rg').textContent='Transfert en cours…';pc('topup',{n:n},function(r){if(!r){toast('Recharge impossible pour le moment');d();return}\nS.bal=r.gift;bal=r.gift;$('bl').textContent=f(r.gift);log('Recharge','Depuis le solde principal',n);\nsheet('<div class=\"ok2\">✓<\/div><h2>Recharge effectuée<\/h2><p class=\"mu\">+'+f(n)+' MONLoG ajoutés à ton solde cadeau<\/p><div class=\"lb\" style=\"text-align:center\">Solde cadeau<\/div><div class=\"big2\"><i class=\"mc\"><\/i><span id=\"cg\">'+f(o)+'<\/span><\/div><div class=\"pg2\"><i id=\"cb\" style=\"width:'+(r.gift?Math.round(o/r.gift*100):0)+'%\"><\/i><\/div><div class=\"sm\">'+row('Montant transféré','x1',f(n))+row('Solde principal','cm',f(m))+'<\/div><button class=\"pr\" data-a=\"x\">Continuer<\/button>',function(){sh.hidden=true;if(typeof ret=='function')ret();else if(typeof ret=='number')detail(ret);else show()});\ncnt($('cg'),o,r.gift,1300);cnt($('cm'),m,r.main,1300);requestAnimationFrame(function(){requestAnimationFrame(function(){$('cb').style.width='100%'})})})}});\nsh._i=function(e){if(e.target.id=='ra')upd()};upd()}\nd()})}\nfunction tiers(){sheet('<h2>Acheter des MONLoG<\/h2><p class=\"mu\">Choisis un palier. Paiement par Wave ou Mertercars.<\/p>'+TIERS.map(function(t,k){return'<button class=\"tier\" data-a=\"t\" data-k=\"'+k+'\"><b>'+f(t[0])+' MONLoG<\/b><span>'+f(t[1])+' FCFA<\/span><\/button>'}).join('')+'<button class=\"sc\" data-a=\"bk\">Retour<\/button>',function(a,b){if(a=='t')pay(+b.dataset.k);else if(a=='bk')rech()})}\nfunction pay(k){var t=TIERS[k],m='wave';(function d(){sheet('<h2>Payer '+f(t[1])+' FCFA<\/h2><p class=\"mu\">'+f(t[0])+' MONLoG · déblocage sous 12 h après vérification<\/p><button class=\"fr'+(m=='wave'?' on':'')+'\" data-a=\"mw\">Wave<\/button><button class=\"fr'+(m=='mc'?' on':'')+'\" data-a=\"mm\">Mertercars<\/button><div class=\"ro\"><span>Numéro marchand<\/span><b>'+WAVE+'<\/b><\/div><button class=\"sc\" data-a=\"open\">Ouvrir '+(m=='wave'?'Wave':'Mertercars')+'<\/button><input id=\"ref\" placeholder=\"Référence de la transaction\"><button class=\"pr\" data-a=\"ok\">J’ai payé, envoyer pour validation<\/button>',function(a){\nif(a=='mw'){m='wave';d()}else if(a=='mm'){m='mc';d()}\nelse if(a=='open'){var u=LINK[m];if(u)window.open(u,'_blank');else toast('Lien marchand à renseigner. Envoie '+f(t[1])+' FCFA au '+WAVE)}\nelse if(a=='ok'){var r=$('ref').value.trim();if(r.length<6){toast('Saisis la référence de la transaction');return}S.pend.unshift({id:'R'+Date.now().toString(36).toUpperCase(),m:m,k:k,r:r,at:now()});log('Recharge',f(t[0])+' MONLoG · en attente',0);sv();sheet('<h2>Demande envoyée ✓<\/h2><p class=\"mu\">Ton paiement de '+f(t[1])+' FCFA sera vérifié. Les '+f(t[0])+' MONLoG seront crédités sous 12 h.<\/p><button class=\"pr\" data-a=\"x\">Terminer<\/button>',function(){sh.hidden=true;if(view!='mine'&&sg=='own')drawOwn()})}})})()}\nfunction drawOwn(){var M=$('mine'),ks=Object.keys(S.inv),c=0,h='';ks.forEach(function(k){c+=S.inv[k]});\nh+=ks.length?'<div class=\"ms\"><b>'+c+'<\/b><span>cadeau'+(c>1?'x':'')+' prêt'+(c>1?'s':'')+' à offrir<\/span><\/div><div class=\"ml2\">'+ks.map(function(k){var g=G[k];return'<button class=\"mg\" data-o=\"'+k+'\"><div class=\"a\">'+art(g)+'<\/div><span class=\"x\"><b>'+g.n+'<\/b><small><i class=\"mc\"><\/i>'+f(g.p)+'<\/small><\/span><u>×'+S.inv[k]+'<\/u><em>Offrir<\/em><\/button>'}).join('')+'<\/div>':'<div class=\"em\">Aucun cadeau en attente.<br>Les cadeaux gardés pour plus tard apparaissent ici.<br><button data-g=\"1\">Aller à la boutique<\/button><\/div>';\nh+=S.pend.map(function(p,n){return'<div class=\"rw\"><div class=\"x\"><b>Recharge '+f(TIERS[p.k][0])+' MONLoG<\/b><small>'+(p.m=='wave'?'Wave':'Mertercars')+' · réf. '+esc(p.r)+' · '+p.at+'<br>En attente de validation (12 h)<\/small><\/div><button data-v=\"'+n+'\">Valider (test admin)<\/button><\/div>'}).join('');\nif(S.hist.length)h+='<div class=\"lb\">Historique<\/div>'+S.hist.slice(0,30).map(function(x){return'<div class=\"rw\"><div class=\"x\"><b>'+x.t+' · '+x.d+'<\/b><small>'+x.at+'<\/small><\/div><b style=\"color:'+(x.a<0?'#E11D2E':'#15803D')+'\">'+(x.a?(x.a>0?'+':'')+f(x.a):'')+'<\/b><\/div>'}).join('');\nM.innerHTML=h}\nfunction rowc(l,v,b){return'<div class=\"ro\"><span>'+l+'<\/span><b class=\"cv\"'+(b?' style=\"color:#15803D\"':'')+'><i class=\"mc\"><\/i>'+v+'<\/b><\/div>'}\nfunction recv(n){var r=S.rec[n];if(!r)return;var g=G[r.i],v=net(g);\nsheet('<div class=\"gb\">'+art(g)+'<\/div><h2>'+g.n+'<\/h2><p class=\"mu\">Reçu de '+esc(r.from)+' · '+r.at+'<\/p><div class=\"sm\">'+rowc('Valeur du cadeau',f(g.p))+rowc('Commission 15 %','−'+f(g.p-v))+rowc('Tu reçois',f(v),1)+'<\/div><button class=\"pr\" data-a=\"cv\">Convertir en '+f(v)+' MONLoG<\/button><button class=\"sc\" data-a=\"pl\">Revoir l’animation<\/button>',function(a){if(a=='cv')doConv([n]);else if(a=='pl'){sh.hidden=true;play(r.i)}})}\nfunction allConv(){var tot=0,v=0;S.rec.forEach(function(r){tot+=G[r.i].p;v+=net(G[r.i])});if(!S.rec.length)return;\nsheet('<h2>Convertir '+S.rec.length+' cadeau'+(S.rec.length>1?'x':'')+' ?<\/h2><p class=\"mu\">Les MONLoG seront crédités sur ton solde principal.<\/p><div class=\"sm\">'+rowc('Valeur des cadeaux',f(tot))+rowc('Commission 15 %','−'+f(tot-v))+rowc('Tu reçois',f(v),1)+'<\/div><button class=\"pr\" data-a=\"ok\">Confirmer la conversion<\/button><button class=\"sc\" data-a=\"x\">Annuler<\/button>',function(a){if(a=='ok')doConv(S.rec.map(function(x,i){return i}));else sh.hidden=true})}\nfunction doConv(idx){var gs=idx.map(function(i){return S.rec[i]}).filter(Boolean);if(!gs.length)return;var tot=0,v=0,nm=gs.length>1?gs.length+' cadeaux':G[gs[0].i].n,m0=MAIN;gs.forEach(function(r){tot+=G[r.i].p;v+=net(G[r.i])});\npc('conv',{n:v,l:nm},function(r){if(!r){toast('Conversion impossible pour le moment');return}\nS.rec=S.rec.filter(function(x,i){return idx.indexOf(i)<0});log('Conversion',nm+' → +'+f(v)+' sur le solde principal',0);sv();\nsheet('<div class=\"ok2\">✓<\/div><h2>Conversion effectuée<\/h2><p class=\"mu\">+'+f(v)+' MONLoG crédités sur ton solde principal<\/p><div class=\"lb\" style=\"text-align:center\">Solde principal<\/div><div class=\"big2\"><i class=\"mc\"><\/i><span id=\"cg\">'+f(m0)+'<\/span><\/div><div class=\"pg2\"><i id=\"cb\" style=\"width:'+(r.main?Math.round(m0/r.main*100):0)+'%\"><\/i><\/div><div class=\"sm\">'+rowc('Valeur des cadeaux',f(tot))+rowc('Commission 15 %','−'+f(tot-v))+rowc('Crédité',f(v),1)+'<\/div><button class=\"pr\" data-a=\"x\">Continuer<\/button>',function(){sh.hidden=true;show()});\ncnt($('cg'),m0,r.main,1300);requestAnimationFrame(function(){requestAnimationFrame(function(){$('cb').style.width='100%'})});show()})}\nfunction drawRec(){var n=S.rec.length,v=0;S.rec.forEach(function(r){v+=net(G[r.i])});$('mine').innerHTML='<div class=\"ms\"><b>'+n+'<\/b><span>cadeau'+(n>1?'x':'')+' reçu'+(n>1?'s':'')+'<\/span><\/div>'+(n?'<div class=\"sm\" style=\"margin:0 0 10px\">'+rowc('Valeur nette à convertir',f(v))+'<\/div><button class=\"pr\" style=\"margin:0 0 12px\" data-c=\"1\">Tout convertir en MONLoG<\/button><div class=\"ml2\">'+S.rec.map(function(r,i){var g=G[r.i];return'<button class=\"mg\" data-n=\"'+i+'\"><div class=\"a\">'+art(g)+'<\/div><span class=\"x\"><b>'+g.n+'<\/b><small>de '+esc(r.from)+' · '+r.at+'<\/small><\/span><u><i class=\"mc\"><\/i>'+f(net(g))+'<\/u><em>Convertir<\/em><\/button>'}).join('')+'<\/div><p class=\"mu\" style=\"text-align:center;font-size:12px;margin:10px 0\">Commission de conversion : 15 %<\/p>':'<div class=\"em\">Tu n’as pas encore reçu de cadeau.<\/div>')+'<div class=\"em\" style=\"padding:6px\"><button data-t=\"1\">Recevoir un cadeau (test)<\/button><\/div>'}\n$('sg').onclick=function(e){var b=e.target.closest('button');if(!b)return;sg=b.dataset.s;show()};\n$('mine').onclick=function(e){var b=e.target.closest('button');if(!b)return;var d=b.dataset;\nif(d.g){sg='shop';show()}else if(d.o)give(+d.o,1,true);else if(d.c)allConv();else if(d.n!=null)recv(+d.n);\nelse if(d.t){S.rec.unshift({i:Math.floor(Math.random()*G.length),from:AB[Math.floor(Math.random()*AB.length)][0],at:now()});sv();drawRec()}\nelse if(d.v){var p=S.pend.splice(+d.v,1)[0];setBal(S.bal+TIERS[p.k][0],'Recharge');log('Recharge',f(TIERS[p.k][0])+' MONLoG validée',TIERS[p.k][0]);drawOwn();toast('Recharge validée')}};\npc('load',0,function(r){try{var o=JSON.parse(r);['inv','rec','hist','pend'].forEach(function(k){if(o[k]!=null)S[k]=o[k]})}catch(e){}LD=true;show()});\n})();\nfunction earn(p){pc('earn',{p:p})}<\/script><\/body><\/html>\n";
const GI='<svg class="i" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v9h14v-9"/><path d="M12 8c-2-4-6-3-5 0 .6 1.5 3 1 5 0zM12 8c2-4 6-3 5 0-.6 1.5-3 1-5 0z"/></svg>';
function open(tab){
 let d=$('#gfOv');if(d)d.remove();
 d=document.createElement('div');d.id='gfOv';
 const tt=v=>v=='mine'?'Cadeaux reçus':'Boutique de cadeaux',tb=v=>v=='mine'?'Mes cadeaux':'UJCadeau';
 d.innerHTML='<style>#gfOv .gv em.cnt{color:#15803D}#gfOv .gv em{transition:color .25s}</style><div class="gbar"><button aria-label="Retour">'+CHG+'</button><div class="gt"><b>'+tb(tab)+'</b><small>'+tt(tab)+'</small></div><span class="gbal"'+(tab=='mine'?' style="display:none"':'')+'><i></i><span class="gv"><small>Solde cadeau</small><em style="font-style:normal">'+(()=>{try{return UJGIFT.gbal().toLocaleString('fr-FR')}catch(e){return '0'}})()+'</em></span><button type="button" class="gadd" aria-label="Recharger mes MONLoG">+</button></span></div><iframe title="Cadeaux"></iframe>';
 window.__gfBal=t=>{};
 window.__gfTitle=v=>{const b=d.querySelector('.gt small'),c=d.querySelector('.gt b'),g=d.querySelector('.gbal');if(b)b.textContent=tt(v);if(c)c.textContent=tb(v);if(g)g.style.display=v=='mine'?'none':''};
 const th=R.dataset.theme=='dark'||(R.dataset.theme!='light'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
 d.querySelector('button').onclick=()=>d.remove();
 const f=d.querySelector('iframe');
  const hd=()=>{const e=d.querySelector('.gbal em');if(!e)return;const to=UJGIFT.gbal(),from=+e.dataset.v||+String(e.textContent).replace(/\D/g,'')||0;cancelAnimationFrame(e._r);if(from===to||matchMedia('(prefers-reduced-motion:reduce)').matches){e.textContent=to.toLocaleString('fr-FR');e.dataset.v=to;e.classList.remove('cnt');return}const t0=performance.now(),st=n=>{const q=Math.min(1,(n-t0)/1300),v=Math.round(from+(to-from)*(1-Math.pow(1-q,3)));e.textContent=v.toLocaleString('fr-FR');e.dataset.v=v;e.classList.toggle('cnt',q<1);if(q<1)e._r=requestAnimationFrame(st)};e._r=requestAnimationFrame(st)};
  const onm=ev=>{if(!d.isConnected){removeEventListener('message',onm);return}if(ev.source!==f.contentWindow)return;const m=ev.data;if(!m||!m.ujg)return;let res=null;const a=m.arg||{};try{if(m.op=='st')res=true;else if(m.op=='topup')res=UJGIFT.topup(a.n);else if(m.op=='gspend')res=UJGIFT.gspend(a.n,a.l);else if(m.op=='gcredit')res=UJGIFT.gcredit(a.n,a.l);else if(m.op=='conv')res=UJGIFT.conv(a.n,a.l);else if(m.op=='load')res=UJGIFT.gload();else if(m.op=='save')UJGIFT.gsave(a.d);else if(m.op=='title')window.__gfTitle(a.v);else if(m.op=='earn'){UJGIFT.earn(a.p);return}}catch(_){}hd();ev.source.postMessage({ujgr:1,id:m.id,res:res,st:{main:UJGIFT.bal(),gift:UJGIFT.gbal()}},(location.origin==String(null)?String.fromCharCode(42):location.origin))};
  addEventListener('message',onm);
  f.onload=()=>{try{f.contentWindow.postMessage({ujgcmd:'go',tab:tab},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(_){}};d.querySelector('.gadd').onclick=()=>{try{f.contentWindow.postMessage({ujgcmd:'rech'},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(_){}};
 f.srcdoc=HTML.replace('<html lang="fr">','<html lang="fr" data-theme="'+th+'">');document.body.appendChild(d);
}

document.addEventListener('click',e=>{const g=e.target.closest('[data-gift]');if(g){e.stopImmediatePropagation();e.preventDefault();open(g.dataset.gift)}},true);
})();

}catch(e){console.error("[ujlog] giftJs",e)}
/* ==== v83ProJs ==== */
try{

(()=>{
const R=document.documentElement,RM=matchMedia('(prefers-reduced-motion:reduce)'),ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,S=new WeakMap;
function build(w){
 if(w.dataset.d3)return;w.dataset.d3=1;
 const h=w.innerHTML;let s='';for(let i=1;i<=8;i++)s+='<span class="e3" aria-hidden="true" style="transform:translateZ(-'+i+'px)">'+h+'</span>';
 w.insertAdjacentHTML('beforeend',s);
 let ang=0,drag=0,moved=0,x0=0,a0=0,raf=0;
 const set=a=>{ang=a;const m=((a%360)+360)%360,d=Math.min(m,360-m);w.style.transform='perspective(700px) rotateX('+(-10*Math.min(1,d/40)).toFixed(2)+'deg) rotateY('+a.toFixed(2)+'deg)'};
 const tween=(to,ms)=>{cancelAnimationFrame(raf);const f0=ang,t0=performance.now(),f=t=>{const k=Math.min(1,(t-t0)/ms);set(f0+(to-f0)*ease(k));if(k<1)raf=requestAnimationFrame(f);else set(((to%360)+360)%360)};raf=requestAnimationFrame(f)};
 S.set(w,{spin:()=>{if(!drag&&R.dataset.mode==='pro'&&!RM.matches&&!document.hidden)tween(ang+360,1500)}});
 w.addEventListener('pointerdown',e=>{return;drag=1;moved=0;x0=e.clientX;a0=ang;cancelAnimationFrame(raf);try{w.setPointerCapture(e.pointerId)}catch(_){}});
 w.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-x0;if(Math.abs(dx)>6)moved=1;if(moved)set(a0+dx*1.2)});
 const up=()=>{if(!drag)return;drag=0;if(moved)tween(Math.round(ang/360)*360,600);else tween(ang+360,1100)};
 w.addEventListener('pointerup',up);w.addEventListener('pointercancel',up);
 w.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=0}},true);
 set(0);
}
let q=0;const scan=()=>{q=0;document.querySelectorAll('.wm').forEach(build)};
new MutationObserver(()=>{if(!q)q=requestAnimationFrame(scan)}).observe(document.body,{childList:true,subtree:true});
scan();
})();

}catch(e){console.error("[ujlog] v83ProJs",e)}
/* ==== v28ProJs ==== */
try{

(()=>{
document.documentElement.dataset.mode='pro';
const ic=p=>'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';
const IC={Mode:'<path d="M4 9l3-5 3 2h4l3-2 3 5-3 2v9H7v-9z"/>',Tech:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',Services:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',Livres:'<path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M5 17a3 3 0 013-3h11"/>',Nourriture:'<path d="M7 3v8M4 3v5a3 3 0 006 0V3M7 11v10M17 3c-2 2-3 5-3 8h3v10"/>'};
const CHV=ic('<path d="M15 5l-7 7 7 7"/>'),bag=z=>'<svg viewBox="0 0 24 24" width="'+z+'" height="'+z+'" aria-hidden="true"><path d="M5 8.5h14l-1.1 11.2a1 1 0 01-1 .8H7.1a1 1 0 01-1-.8z" fill="#fff"/><path d="M9 8.5V7a3 3 0 016 0v1.5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M9.2 17v-5l2.8 3 2.8-3v5" fill="none" stroke="#D3122B" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',LGM=()=>'<svg class="mkbag" viewBox="0 0 48 48" aria-hidden="true"><path d="M16 20v-5a8 8 0 0116 0v5" fill="none" stroke="#9E0A1E" stroke-width="3.6" stroke-linecap="round"/><path d="M6.5 18.5h35l-2.4 24a3.4 3.4 0 01-3.4 3H12.3a3.4 3.4 0 01-3.4-3z" fill="#E3182F"/><path d="M6.5 18.5h35l-.5 5.2c-8 3.2-26 3.2-34 0z" fill="#fff" fill-opacity=".2"/><path d="M8.9 42.5a3.4 3.4 0 003.4 3h23.4a3.4 3.4 0 003.4-3l.4-4.3c-9 3-21.8 3-30.8 0z" fill="#7A0614" fill-opacity=".28"/><path d="M15.5 39.5V27.2l8.5 9.6 8.5-9.6v12.3" fill="none" stroke="#fff" stroke-width="3.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',MK=LGM(),MKL=LGM();window.UJMKLG=LGM;
const addBtns=()=>document.querySelectorAll('.hd4').forEach(h=>{if(h.querySelector('.mkbtn'))return;const t=h.querySelector('[data-gbell]')||h.querySelector('.pf');if(!t)return;
 const m=document.createElement('button');m.className='ib mkbtn';m.dataset.mk='1';m.setAttribute('aria-label','Marketplace — bientôt disponible');m.innerHTML=MK;t.after(m)});
new MutationObserver(()=>addBtns()).observe(document.body,{childList:true,subtree:true});addBtns();
const P=[['Pagne wax 6 yards',8500,'Mode','#E11D48'],['Écouteurs Bluetooth',6000,'Tech','#2563EB'],['Cours particuliers de maths',3000,'Services','#7C3AED'],['Livre de droit civil',5500,'Livres','#0891B2'],['Plateau de garba',1000,'Nourriture','#F97316'],['Chargeur rapide 20 W',4500,'Tech','#16A34A'],['Sac à dos campus',12000,'Mode','#0B1630'],['Impression et reliure',500,'Services','#475569']];
const CAT=['Tout','Mode','Tech','Livres','Nourriture','Services'],fm=n=>n.toLocaleString('fr-FR').replace(/\u202f/g,' ')+' FCFA',toast=t=>{document.getElementById('ujToast')?.remove();const d=document.createElement('div');d.id='ujToast';d.textContent=t;d.style.cssText='position:fixed;left:50%;bottom:90px;transform:translateX(-50%);z-index:100003;max-width:84vw;padding:12px 18px;border-radius:14px;background:#0B1630;color:#fff;font:600 13.5px/1.4 system-ui;text-align:center';document.body.appendChild(d);setTimeout(()=>d.remove(),2400)};
function market(){document.getElementById('mkOv')?.remove();let c='Tout',q='';const d=document.createElement('div');d.id='mkOv';
 d.innerHTML='<div class="vmbar"><button aria-label="Fermer">'+CHV+'</button><span class="vml">'+MKL+'</span>Marketplace<button class="sell">Vendre</button></div><input type="search" placeholder="Rechercher un article" aria-label="Rechercher"><div class="vmc">'+CAT.map(x=>'<button data-c="'+x+'" aria-pressed="'+(x==c)+'">'+x+'</button>').join('')+'</div><div class="vmg"></div>';
 const gr=d.querySelector('.vmg'),draw=()=>{const f=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(),r=P.filter(p=>(c=='Tout'||p[2]==c)&&f(p[0]).includes(f(q)));
  gr.innerHTML=r.length?r.map((p,i)=>'<button class="vmp" data-i="'+P.indexOf(p)+'"><i style="background:'+p[3]+'">'+ic(IC[p[2]]).replace('width="22" height="22"','')+'</i><b>'+p[0]+'</b><span>'+fm(p[1])+'</span></button>').join(''):'<p style="grid-column:1/-1;text-align:center;opacity:.6;padding:30px">Aucun article trouvé.</p>'};
 d.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.getAttribute('aria-label')=='Fermer')return d.remove();if(b.classList.contains('sell'))return toast('Vendre un article : bientôt disponible');if(b.dataset.c){c=b.dataset.c;d.querySelectorAll('.vmc button').forEach(x=>x.setAttribute('aria-pressed',x.dataset.c==c));return draw()}if(b.dataset.i)toast(P[b.dataset.i][0]+' : contact du vendeur bientôt disponible')};
 d.querySelector('input').oninput=e=>{q=e.target.value;draw()};draw();document.body.appendChild(d)}
function showSectionSoon(title){
  document.getElementById('ujMarketSoon')?.remove();
  const o=document.createElement('div');
  o.id='ujMarketSoon';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label',title+' pas encore en service');
  o.style.cssText='position:fixed;inset:0;z-index:100010;display:grid;place-items:center;padding:22px;background:rgba(8,16,32,.54);backdrop-filter:blur(5px);animation:ujSoonFade .25s ease both';
  o.innerHTML=`
  <style>
    @keyframes ujSoonFade{from{opacity:0}to{opacity:1}}
    @keyframes ujSoonPop{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
    @keyframes ujHourglass{0%,100%{transform:rotate(0deg)}45%{transform:rotate(180deg)}55%{transform:rotate(180deg)}}
    @keyframes ujRing{0%,100%{transform:scale(1);opacity:.45}50%{transform:scale(1.12);opacity:.9}}
    @keyframes ujDot{0%,60%,100%{transform:translateY(0);opacity:.35}30%{transform:translateY(-7px);opacity:1}}
    #ujMarketSoon .uj-soon-card{width:100%;max-width:390px;padding:38px 25px 26px;border-radius:34px;background:#fff;color:#17233e;text-align:center;box-shadow:0 22px 70px rgba(0,0,0,.24);animation:ujSoonPop .38s cubic-bezier(.2,.8,.2,1) both}
    #ujMarketSoon .uj-soon-icon{width:116px;height:116px;margin:0 auto 25px;border:4px solid #e5edff;border-radius:50%;display:grid;place-items:center;position:relative}
    #ujMarketSoon .uj-soon-icon:after{content:'';position:absolute;inset:10px;border:2px solid #8eaff2;border-radius:50%;animation:ujRing 2s ease-in-out infinite}
    #ujMarketSoon .uj-hourglass{width:54px;height:54px;color:#2862df;animation:ujHourglass 3s ease-in-out infinite}
    #ujMarketSoon .uj-soon-title{margin:0 0 12px;font:800 25px/1.2 system-ui,-apple-system,sans-serif;color:#17233e}
    #ujMarketSoon .uj-soon-copy{margin:0 auto;color:#647087;font:600 16px/1.55 system-ui,-apple-system,sans-serif;max-width:330px}
    #ujMarketSoon .uj-dots{display:flex;justify-content:center;gap:10px;margin:24px 0 31px}
    #ujMarketSoon .uj-dots i{width:10px;height:10px;border-radius:50%;background:#9bb9f3;animation:ujDot 1.1s ease-in-out infinite}
    #ujMarketSoon .uj-dots i:nth-child(2){animation-delay:.15s}
    #ujMarketSoon .uj-dots i:nth-child(3){animation-delay:.3s}
    #ujMarketSoon .uj-soon-close{width:100%;padding:17px 18px;border:0;border-radius:23px;background:#168343;color:#fff;font:800 19px system-ui,-apple-system,sans-serif;cursor:pointer}
    @media(prefers-reduced-motion:reduce){#ujMarketSoon *,#ujMarketSoon:before{animation:none!important}}
  </style>
  <div class="uj-soon-card">
    <div class="uj-soon-icon">
      <svg class="uj-hourglass" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M18 8h28M18 56h28M21 9v8c0 7 5 11 11 15-6 4-11 8-11 15v9M43 9v8c0 7-5 11-11 15 6 4 11 8 11 15v9"/>
        <path d="M25 14h14M25 50h14"/>
      </svg>
    </div>
    <h2 class="uj-soon-title">${title}</h2>
    <p class="uj-soon-copy">Cette fonctionnalité n’est pas encore en service. Vous serez informé(e) ultérieurement de sa mise en disponibilité.</p>
    <div class="uj-dots" aria-label="Chargement"><i></i><i></i><i></i></div>
    <button type="button" class="uj-soon-close" data-market-close>Compris</button>
  </div>`;
  const close=()=>o.remove();
  o.addEventListener('click',e=>{if(e.target===o||e.target.closest('[data-market-close]'))close()});
  const esc=e=>{if(e.key==='Escape'){close();document.removeEventListener('keydown',esc)}};document.addEventListener('keydown',esc);
  document.body.appendChild(o);
}
function showMarketSoon(){showSectionSoon('Marketplace')}
document.addEventListener('click',e=>{const b=e.target.closest('[data-mk],.mkbtn');if(b){e.stopImmediatePropagation();e.preventDefault();showMarketSoon()}},true);
document.addEventListener('click',e=>{const b=e.target.closest('.nav [data-go="a2"],.nav [data-go="a3"]');if(b){e.stopImmediatePropagation();e.preventDefault();showSectionSoon(b.dataset.go==='a2'?'Mon campus':'Mon guide')}},true);
})();

}catch(e){console.error("[ujlog] v28ProJs",e)}
/* ==== v29Js ==== */
try{
(()=>{window.UJGIFT=window.UJGIFT||{};window.UJGIFT.earn=pg=>{document.getElementById('gfOv')?.remove();const t=document.createElement('button');t.dataset.mmp='sol';t.style.display='none';document.body.appendChild(t);t.click();t.remove();if(typeof pg=='string'){let n=0;const go=()=>{const m=document.getElementById('mymenu'),p=document.getElementById('mmp-sol');if(m&&p&&!m.hidden&&(p.getClientRects().length>0||n>=12)){setTimeout(()=>{const x=document.createElement('button');x.type='button';x.dataset.ac=pg;x.style.display='none';p.appendChild(x);x.click();x.remove()},250);return}if(++n<40)setTimeout(go,100)};setTimeout(go,100)}}})();
}catch(e){console.error("[ujlog] v29Js",e)}
/* ==== ujlvl-js ==== */
try{
(()=>{const S=window.__UJS;if(!S)return;
/* Niveaux par points MASQUÉS : passer LVL_ON à true pour les réactiver (le code et les points restent conservés). */
const LVL_ON=false;
const D=document,R=D.documentElement,$=(s,r=D)=>r.querySelector(s);
const LV=[[0,'Découverte'],[100,'Argent'],[500,'Or'],[2000,'Premium'],[10000,'Légende']],COL=['#15803D','#3B6EA5','#A16207','#6D28D9','#BE185D'];
const PK=[['Thème émeraude d’origine','Icônes classiques','Commission de conversion : 15 %','Jeu des coffres : 1 partie par jour'],['Thème bleu acier','Anneau autour de ta photo','Badge de niveau dans ton menu','Éléments à la une','2 parties par jour'],['Thème or','Icônes bicolores','Commission réduite à 12 %','Contenus hors ligne','3 parties par jour'],['Thème violet Premium','Icônes lumineuses','Commission réduite à 10 %','Tableau de bord professionnel','4 parties par jour'],['Thème rose Légende','Commission réduite à 8 %','5 parties par jour','Plus de chances de cadeaux rares']];
const fm=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'\u202f');
let xp=0;try{xp=+localStorage.getItem('ujXp')||0}catch(e){}
const lv=x=>{let k=0;LV.forEach((l,i)=>{if(x>=l[0])k=i});return k};let cur=LVL_ON?lv(xp):0;R.dataset.lvl=cur+1;
const info=()=>{const k=cur,n=LV[k+1],a=LV[k][0];return{k,n,pct:n?Math.min(100,Math.round((xp-a)/(n[0]-a)*100)):100}};
const sub=i=>i.n?fm(i.n[0]-xp)+' points avant le niveau '+i.n[1]:'Niveau maximum atteint';
const card=()=>{const i=info();return `<button type="button" class="lvl-card" data-lvl-open="1" data-s="${cur}:${xp}"><span class="lvl-b" style="--c:${COL[i.k]}">${i.k+1}</span><span class="lvl-t"><b>Niveau ${LV[i.k][1]}</b><small>${sub(i)}</small><i><u style="width:${i.pct}%"></u></i></span></button>`};
const ens0=()=>{const b=$('#solb');if(!b)return;const c=$('.lvl-card',b);if(c&&c.dataset.s==cur+':'+xp)return;const t=D.createElement('div');t.innerHTML=card();if(c)c.replaceWith(t.firstChild);else b.insertBefore(t.firstChild,b.firstChild)};
const say=m=>{const t=$('#toast');if(!t)return;t.textContent=m;t.classList.add('on');clearTimeout(say._t);say._t=setTimeout(()=>t.classList.remove('on'),2600)};
const LK=[[/Ajouter des éléments à la une/,2],[/Contenus hors ligne/,3],[/Tableau de bord professionnel/,4]];
const extras=()=>{const m=$('#mymenu');if(!m)return;
m.querySelectorAll('.li,button[data-mmp="pro"]').forEach(r=>{let mn=r.dataset.mmp=='pro'?4:0;LK.forEach(([re,n])=>{if(re.test(r.textContent))mn=n});const lk=r.classList.contains('lvl-lk');
if(mn&&cur+1<mn){if(!lk){r.classList.add('lvl-lk');r.dataset.lvlMin=mn;r.insertAdjacentHTML('beforeend','<em class="lvl-ch">Niveau '+LV[mn-1][1]+'</em>')}}else if(lk){r.classList.remove('lvl-lk');r.querySelector('.lvl-ch')?.remove()}});
const pb=$('#mmpf .mmp b');if(pb){const p=pb.parentNode.querySelector('.lvl-pill'),w=cur?LV[cur][1]:'';if(!w){p&&p.remove()}else if(!p||p.textContent!=w){p&&p.remove();pb.insertAdjacentHTML('afterend','<span class="lvl-pill">'+w+'</span>')}}};
const ens=()=>{if(!LVL_ON)return;ens0();extras()};
const scr=()=>{const i=info();return `<div class="lvo-bar"><button data-lvl-x="1" aria-label="Retour">‹</button><b>Mes niveaux</b></div><div class="lvo-b"><section class="lvo-hero" style="--c:${COL[i.k]}"><span class="lvl-b big" style="--c:${COL[i.k]}">${i.k+1}</span><h2>Niveau ${LV[i.k][1]}</h2><p>${fm(xp)} points d’activité</p><div class="lvo-pb"><u style="width:${i.pct}%"></u></div><small>${sub(i)}</small></section><p class="lvo-nt">Tes points montent quand tu gagnes des MONLoG (cadeaux convertis, bonus, jeux) et quand tu offres des cadeaux. Dépenser ton solde ne te fait jamais redescendre.</p>${LV.map((l,j)=>`<section class="lvo-r${j<=i.k?' on':''}" style="--c:${COL[j]}"><span class="lvl-b" style="--c:${COL[j]}">${j+1}</span><div><b>${l[1]}</b><small>${j?fm(l[0])+' points':'Niveau de départ'}${j<=i.k?' · débloqué':''}</small><ul>${PK[j].map(p=>`<li>${p}</li>`).join('')}</ul></div></section>`).join('')}</div>`};
const open=()=>{let o=$('#lvOv');if(!o){o=D.createElement('div');o.id='lvOv';D.body.appendChild(o)}o.innerHTML=scr();o.hidden=false};
const up=k=>{$('#lvUp')?.remove();const d=D.createElement('div');d.id='lvUp';d.style.setProperty('--c',COL[k]);d.innerHTML=`<div><span class="lvl-b big" style="--c:#fff3">${k+1}</span><h2>Niveau ${LV[k][1]} débloqué !</h2><p>Ton application change de look.</p><ul>${PK[k].map(p=>`<li>${p}</li>`).join('')}</ul><button data-lvl-ok="1">Super</button></div>`;D.body.appendChild(d);try{navigator.vibrate&&navigator.vibrate(30)}catch(e){}};
const add=n=>{n=Math.floor(n);if(!(n>0))return;xp+=n;try{localStorage.setItem('ujXp',xp)}catch(e){}const k=lv(xp);if(LVL_ON&&k>cur){cur=k;R.dataset.lvl=k+1;setTimeout(()=>up(k),1400)}ens();const o=$('#lvOv');if(o&&!o.hidden)o.innerHTML=scr()};
/* points = MONLoG gagnés (hausse du solde) + valeur des cadeaux offerts (baisse du solde cadeau) */
let pc=S.pc,gw=S.gw||0;
Object.defineProperty(S,'pc',{enumerable:true,configurable:true,get:()=>pc,set:v=>{if(v>pc)add(v-pc);pc=v}});
Object.defineProperty(S,'gw',{enumerable:true,configurable:true,get:()=>gw,set:v=>{if(v<gw)add(gw-v);gw=v}});
D.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-lvl-open],[data-lvl-x],[data-lvl-demo],[data-lvl-ok]');if(!t)return;e.stopImmediatePropagation();e.preventDefault();if(t.dataset.lvlOpen)open();else if(t.dataset.lvlX)$('#lvOv').hidden=true;else $('#lvUp')?.remove()},true);
let raf=0;new MutationObserver(()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;ens()})}).observe(D.body,{childList:true,subtree:true});
D.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('.lvl-lk');if(!t)return;e.stopImmediatePropagation();e.preventDefault();say('Se débloque au niveau '+LV[t.dataset.lvlMin-1][1])},true);
const CM=[15,15,12,10,8],G=window.UJGIFT;
if(G&&G.conv){const o=G.conv;G.conv=(n,l)=>{const r=o(n,l);if(!r)return r;const x=Math.round(n/.85*(.15-CM[cur]/100));if(x>0){S.pc+=x;S.tx.unshift(['Bonus de niveau','Commission à '+CM[cur]+' % · '+(l||'Cadeau'),'+'+fm(x)+' MONLoG','coin']);say('Bonus niveau '+LV[cur][1]+' : +'+fm(x)+' MONLoG')}return{main:S.pc}}}
const GK='ujGameDay',tdy=()=>new Date().toDateString();
const gdat=()=>{let o={};try{o=JSON.parse(localStorage.getItem(GK)||'{}')}catch(e){}return o.d==tdy()?o:{d:tdy(),n:0}};
const left=()=>Math.max(0,cur+1-gdat().n);
const award=(a,b)=>{const g=window.UJGIFT;let o={};try{o=JSON.parse(g.gload()||'{}')||{}}catch(e){}o.inv=o.inv||{};o.rec=o.rec||[];o.hist=o.hist||[];o.pend=o.pend||[];o.rec.unshift({i:a+Math.floor(Math.random()*(b-a+1)),from:'Jeu des coffres',at:new Date().toLocaleString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})});g.gsave(JSON.stringify(o))};
const gmv=res=>{let o=$('#gmOv');if(!o){o=D.createElement('div');o.id='gmOv';D.body.appendChild(o)}const L=left();
o.innerHTML=`<div class="lvo-bar"><button data-gm-x="1" aria-label="Retour">‹</button><b>Jeu des coffres</b></div><div class="lvo-b"><p class="lvo-nt">Parties restantes aujourd’hui : <b>${L}</b> sur ${cur+1}.</p><div class="gm-ch">${[0,1,2].map(i=>`<button data-gm-pick="${i}" class="${res&&res.k==i?'op':''}"${res||!L?' disabled':''}><svg aria-hidden="true"><use href="#ux-giftbox"/></svg></button>`).join('')}</div>${res?`<section class="lvo-hero" style="--c:${COL[cur]}"><h2>${res.t}</h2><p>${res.m}</p>${res.g?'<button class="gm-b" data-gm-mine="1">Voir mes cadeaux</button>':''}<button class="gm-b" data-gm-again="1">${L?'Rejouer':'Fermer'}</button></section>`:`<p class="lvo-nt" style="text-align:center">${L?'Choisis un coffre.':'Plus de partie aujourd’hui. Reviens demain ou monte de niveau.'}</p>`}</div>`;o.hidden=false};
const gplay=k=>{if(!left())return;const g=gdat();g.n++;try{localStorage.setItem(GK,JSON.stringify(g))}catch(e){}const L=cur+1,r=Math.random(),pb=.02+.01*L,pm=.15+.03*L;let res;
if(r<pb){award(35,59);res={t:'Cadeau rare !',m:'Un cadeau de grande valeur a été ajouté à Mes cadeaux.',g:1}}else if(r<pb+pm){award(15,34);res={t:'Beau cadeau !',m:'Un cadeau a été ajouté à Mes cadeaux.',g:1}}else if(r<pb+pm+.4){award(0,14);res={t:'Petit cadeau',m:'Un cadeau a été ajouté à Mes cadeaux.',g:1}}else{S.pc+=5;res={t:'+5 MONLoG',m:'Pas de cadeau cette fois, mais un lot de consolation.'}}res.k=k;gmv(res)};
D.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-gm-open],[data-gm-x],[data-gm-pick],[data-gm-mine],[data-gm-again]');if(!t)return;e.stopImmediatePropagation();e.preventDefault();const d=t.dataset;
if(d.gmOpen)gmv();else if(d.gmX)$('#gmOv').hidden=true;else if(d.gmPick!=null)gplay(+d.gmPick);else if(d.gmAgain){left()?gmv():$('#gmOv').hidden=true}else if(d.gmMine){$('#gmOv').hidden=true;const b=D.createElement('button');b.dataset.gift='mine';b.style.display='none';D.body.appendChild(b);b.click();b.remove()}},true);
const JX=[['coffres','Coffres du campus','Chance','🎁','#F59E0B,#EF4444','Ouvre un coffre et tente de gagner un cadeau.'],['memo','Mémoire','Réflexion','🧠','#6366F1,#22D3EE','Retrouve toutes les paires en un minimum de coups.'],['tic','Morpion','Réflexion','⭕','#10B981,#3B82F6','Aligne trois symboles avant l’ordinateur.'],['pop','Ballons','Arcade','🎈','#EC4899,#F97316','Éclate au moins 12 ballons en 15 secondes.'],['snk','Serpent','Arcade','🐍','#22C55E,#065F46','Mange les pommes sans te mordre ni toucher les bords. Glisse le doigt pour tourner.'],['num','Plus ou moins','Chance','🔢','#8B5CF6,#EC4899','Trouve le nombre secret entre 1 et 100 en 7 essais.']];
const GM={};let stp=()=>{},jc='Tous',jg=null;
GM.memo=(b,end)=>{const E=['🍎','🍌','🍇','🍓','🍍','🥝'],c=[...E,...E].sort(()=>Math.random()-.5);let a=null,lk=0,m=0,f=0;b.innerHTML='<p class="jx-i">Coups : <b>0</b></p><div class="jx-gr">'+c.map(()=>'<button>?</button>').join('')+'</div>';const bt=[...b.querySelectorAll('.jx-gr button')];
bt.forEach((x,i)=>x.onclick=()=>{if(lk||x.textContent!='?')return;x.textContent=c[i];if(a==null){a=i;return}m++;b.querySelector('b').textContent=m;if(c[a]==c[i]){a=null;if(++f==6)end(1,'Bravo, en '+m+' coups !')}else{lk=1;const p=a;a=null;setTimeout(()=>{bt[p].textContent=bt[i].textContent='?';lk=0},700)}})};
GM.tic=(b,end)=>{const s=Array(9).fill(''),W=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],w=p=>W.some(l=>l.every(i=>s[i]==p));let ov=0;b.innerHTML='<div class="jx-gr t3">'+s.map(()=>'<button></button>').join('')+'</div>';const bt=[...b.querySelectorAll('button')],st=(i,p)=>{s[i]=p;bt[i].textContent=p=='X'?'❌':'⭕'},fin=()=>{if(w('X')){ov=1;end(1,'Tu as gagné !')}else if(w('O')){ov=1;end(0,'L’ordinateur a gagné.')}else if(s.every(Boolean)){ov=1;end(0,'Match nul.')}return ov};
bt.forEach((x,i)=>x.onclick=()=>{if(ov||s[i])return;st(i,'X');if(fin())return;const e=[];s.forEach((v,k)=>{if(!v)e.push(k)});const t=p=>{for(const k of e){s[k]=p;const r=w(p);s[k]='';if(r)return k}return -1};let k=t('O');if(k<0)k=t('X');if(k<0)k=s[4]?e[Math.floor(Math.random()*e.length)]:4;st(k,'O');fin()})};
GM.pop=(b,end)=>{let sc=0,t=15;b.innerHTML='<p class="jx-i">Score : <b>0</b> · <span>15</span> s</p><div class="jx-ar"></div>';const ar=b.querySelector('.jx-ar'),B=b.querySelector('b'),T=b.querySelector('span');
const sp=setInterval(()=>{const e=D.createElement('button');e.textContent='🎈';e.style.cssText='left:'+Math.random()*80+'%;animation-duration:'+(2.2+Math.random()*1.5)+'s';e.onclick=()=>{e.remove();B.textContent=++sc};e.onanimationend=()=>e.remove();ar.appendChild(e)},450);
const tm=setInterval(()=>{T.textContent=--t;if(t<=0){stp();end(sc>=12,sc+' ballons éclatés')}},1000);stp=()=>{clearInterval(sp);clearInterval(tm)}};
GM.snk=(b,end)=>{b.innerHTML='<p class="jx-i">Pommes : <b>0</b></p><canvas width="300" height="300"></canvas><p class="jx-i">Glisse le doigt pour tourner</p>';const c=b.querySelector('canvas'),x=c.getContext('2d'),B=b.querySelector('b');let s=[[7,7]],d=[1,0],n=[1,0],f=[3,3],sc=0,sx=0,sy=0;
const tu=m=>{if(m[0]+d[0]||m[1]+d[1])n=m},kd=e=>{const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[e.key];if(m)tu(m)};addEventListener('keydown',kd);
c.ontouchstart=e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY};c.ontouchmove=e=>{const dx=e.touches[0].clientX-sx,dy=e.touches[0].clientY-sy;if(Math.abs(dx)+Math.abs(dy)<24)return;tu(Math.abs(dx)>Math.abs(dy)?[Math.sign(dx),0]:[0,Math.sign(dy)]);sx=e.touches[0].clientX;sy=e.touches[0].clientY};
const dr=()=>{x.fillStyle='#0b1b12';x.fillRect(0,0,300,300);x.fillStyle='#ef4444';x.fillRect(f[0]*20,f[1]*20,18,18);x.fillStyle='#4ade80';s.forEach(p=>x.fillRect(p[0]*20,p[1]*20,18,18))};
const tk=setInterval(()=>{d=n;const h=[s[0][0]+d[0],s[0][1]+d[1]];if(h[0]<0||h[1]<0||h[0]>14||h[1]>14||s.some(p=>p[0]==h[0]&&p[1]==h[1])){stp();end(sc>=5,'Pommes mangées : '+sc);return}s.unshift(h);if(h[0]==f[0]&&h[1]==f[1]){B.textContent=++sc;do{f=[Math.floor(Math.random()*15),Math.floor(Math.random()*15)]}while(s.some(p=>p[0]==f[0]&&p[1]==f[1]))}else s.pop();dr()},170);
stp=()=>{clearInterval(tk);removeEventListener('keydown',kd)};dr()};
GM.num=(b,end)=>{const N=1+Math.floor(Math.random()*100);let t=7;b.innerHTML='<p class="jx-i">Essais restants : <b>7</b></p><input type="number" inputmode="numeric" min="1" max="100" placeholder="1 à 100"><button class="jx-go">Valider</button><p class="jx-i jx-m"></p>';const i=b.querySelector('input'),m=b.querySelector('.jx-m'),B=b.querySelector('b');
b.querySelector('.jx-go').onclick=()=>{const v=+i.value;if(!v||t<1)return;B.textContent=--t;i.value='';if(v==N)return end(1,'Trouvé : '+N+' !');if(t<1)return end(0,'Perdu, c’était '+N);m.textContent=v<N?'Plus grand ↑':'Plus petit ↓'}};
const JK='ujJx',rw=()=>{let o={};try{o=JSON.parse(localStorage.getItem(JK)||'{}')}catch(e){}return o.d==tdy()?o:{d:tdy(),n:0}};
const jxEnd=(win,msg)=>{const g=$('#jxG .jx-res');if(!g)return;let r='';if(win){const o=rw();if(o.n<5){o.n++;try{localStorage.setItem(JK,JSON.stringify(o))}catch(e){}S.pc+=2;r='+2 MONLoG gagnés'}else r='Plafond de gains atteint pour aujourd’hui'}
g.innerHTML='<b>'+(win?'Bravo !':'Dommage')+'</b><p>'+msg+'</p>'+(r?'<p>'+r+'</p>':'')+'<button data-jx-again="1">Rejouer</button><button data-jx-x="g">Fermer</button>';g.hidden=false};
const jxh=()=>{let o=$('#jxOv');if(!o){o=D.createElement('div');o.id='jxOv';D.body.appendChild(o)}o.hidden=false;
o.innerHTML=`<div class="lvo-bar"><button data-jx-x="h" aria-label="Retour">‹</button><b>Jeux</b></div><div class="jx-ch">${['Tous','Arcade','Réflexion','Chance'].map(c=>`<button data-jx-c="${c}"${c==jc?' class="on"':''}>${c}</button>`).join('')}</div><div class="jx-gd">${JX.filter(j=>jc=='Tous'||j[2]==jc).map(j=>`<button data-jx-s="${j[0]}"><span style="background:linear-gradient(135deg,${j[4]})">${j[3]}</span>${j[1]}</button>`).join('')}</div>`};
const jxs=id=>{jg=JX.find(x=>x[0]==id);const j=jg;$('#jxSh')?.remove();const s=D.createElement('div');s.id='jxSh';s.innerHTML=`<div class="jx-sh"><div class="jx-hd"><b>${j[1]}</b><button data-jx-x="s" aria-label="Fermer">✕</button></div><div class="jx-bn" style="background:linear-gradient(135deg,${j[4]})">${j[3]}</div><p>${j[5]}</p><em>${j[2]}</em><button class="jx-pl" data-jx-p="1">Jouer maintenant</button></div>`;D.body.appendChild(s)};
const jxp=()=>{if(!jg)return;$('#jxSh')?.remove();if(jg[0]=='coffres'){gmv();return}let o=$('#jxG');if(!o){o=D.createElement('div');o.id='jxG';D.body.appendChild(o)}stp();stp=()=>{};o.hidden=false;o.innerHTML=`<div class="jx-top"><b>${jg[1]}</b><button data-jx-x="g" aria-label="Fermer">✕</button></div><div class="jx-box"></div><div class="jx-res" hidden></div>`;GM[jg[0]](o.querySelector('.jx-box'),jxEnd)};
D.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-jx-open],[data-jx-x],[data-jx-c],[data-jx-s],[data-jx-p],[data-jx-again]');if(!t)return;e.stopImmediatePropagation();e.preventDefault();const d=t.dataset;
if(d.jxOpen)jxh();else if(d.jxC){jc=d.jxC;jxh()}else if(d.jxS)jxs(d.jxS);else if(d.jxP||d.jxAgain)jxp();else if(d.jxX=='s')$('#jxSh')?.remove();else if(d.jxX=='g'){stp();stp=()=>{};$('#jxG').hidden=true}else $('#jxOv').hidden=true},true);
window.UJLEVEL={xp:()=>xp,level:()=>cur+1,name:()=>LV[cur][1],has:n=>cur+1>=n,add};ens();
})();
}catch(e){console.error("[ujlog] ujlvl-js",e)}
/* ==== bloc39 ==== */
try{

/* v66 : menu classé par importance, outils importants sortis des sous-pages */
(function(){
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const lbl=r=>((r.querySelector('b')||{}).textContent||'').trim();
let tries=0;
const run=()=>{
 const mm=$('#mymenu'),home=mm&&$('#mmhome',mm);
 if(!home||!$('#v24-hold',home)||!$('#dmode',home)){if(tries++<40)setTimeout(run,250);return}
 if(home.dataset.v66)return;
 const hold=$('#v24-hold',home),pool=[];
 $$('button.li',home).forEach(b=>{if(!hold.contains(b)&&!b.classList.contains('v65lo'))pool.push(b)});
 ['mmp-set','mmp-act'].forEach(id=>{const pg=$('#'+id,mm);if(pg)$$('button.li',pg).forEach(b=>pool.push(b))});
 const find=l=>pool.find(b=>lbl(b)==l);
 const G=[
  ['Mes outils',['Historique de visionnage','Photos aimées','Publications enregistrées','Archive','Gérer les publications','Centre des activités','Ton code QR']],
  ['Paramètres',['Mode sombre','Notifications','Messages directs','Langue','Accessibilité','Économiseur de données','Contenus hors ligne','Tous les paramètres']],
  ['Confidentialité et sécurité',['Sécurité et autorisations','Compte privé','Centre de confidentialité','Comptes bloqués','Temps d’écran et bien-être']],
  ['Aide et assistance',['Centre d’aide','Espace Assistance','Signaler un problème','Statut du compte','Comment ça marche','À propos','Conditions et politiques']]
 ];
 const used=new Set(),out=[];
 G.forEach(([t,ls])=>{const rows=ls.map(find).filter(Boolean);if(!rows.length)return;rows.forEach(r=>used.add(r));
  const p=document.createElement('p');p.className='mms';p.textContent=t;const c=document.createElement('div');c.className='card';rows.forEach(r=>c.appendChild(r));out.push(p,c)});
 const left=pool.filter(b=>!used.has(b)&&home.contains(b));
 if(left.length){const c=out[out.length-1];left.forEach(b=>c.appendChild(b))}
 $$(':scope>.mms,:scope>.card',home).forEach(n=>{if(!n.classList.contains('v65c'))n.remove()});
 const ref=$('.v65c',home)||hold;
 out.forEach(n=>home.insertBefore(n,ref));
 home.dataset.v66='1';
};
run();
})();

}catch(e){console.error("[ujlog] bloc39",e)}
/* ==== v72-js ==== */
try{

(()=>{
const $=(s,r=document)=>r.querySelector(s),MO=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],P=n=>String(n).padStart(2,'0');
const fire=(el,t)=>el.dispatchEvent(new Event(t,{bubbles:true})),
T=m=>{const t=document.createElement('div');t.className='v72t';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)},
ov=(h,c)=>{const o=document.createElement('div');o.className='v72o '+c;o.innerHTML=h;document.body.appendChild(o);return o},
sheet=(title,body)=>{const o=ov(`<div class="v72s" role="dialog" aria-label="${title}"><div class="gr"></div><h4>${title}</h4>${body}</div>`,'v72sh');o.addEventListener('click',e=>{if(e.target===o||(e.target.closest&&e.target.closest('[data-x]')))o.remove()});return o};
/* liste de choix (UFR, niveau…) */
const pickList=(title,L,cur,cb)=>{
 const o=sheet(title,(L.length>7?'<input class="v72q" placeholder="Rechercher" autocomplete="off">':'')+'<div class="v72l"></div>'),l=$('.v72l',o),q=$('.v72q',o);
 const fill=f=>{l.innerHTML=L.filter(x=>x.toLowerCase().includes(f||'')).map(x=>`<button type="button" class="${x==cur?'on':''}" data-v="${x.replace(/"/g,'&quot;')}">${x}</button>`).join('')};fill('');
 q&&(q.oninput=()=>fill(q.value.trim().toLowerCase()));
 l.onclick=e=>{const b=e.target.closest('button');if(!b)return;cb(b.dataset.v);o.remove()};
 const on=$('.on',l);on&&on.scrollIntoView({block:'center'})};
/* date de naissance : trois roues */
const pickDate=(cur,cb)=>{
 const Y=new Date().getFullYear(),ys=[];for(let a=Y-10;a>=1950;a--)ys.push(a);
 let v=cur?cur.split('-').map(Number):[Y-20,1,1];
 const I={j:v[2]-1,m:v[1]-1,y:Math.max(0,ys.indexOf(v[0]))};
 const o=sheet('Date de naissance','<div class="v72w"><div class="v72c" data-c="j"></div><div class="v72c" data-c="m"></div><div class="v72c" data-c="y"></div><i></i></div><div class="v72r"><button type="button" class="v72g" data-x>Annuler</button><button type="button" class="v72p" data-ok>Valider</button></div>');
 const dim=()=>new Date(ys[I.y],I.m+1,0).getDate(),LS={j:()=>Array.from({length:dim()},(_,i)=>i+1),m:()=>MO,y:()=>ys};
 const build=c=>{const e=$(`[data-c=${c}]`,o),L=LS[c]();I[c]=Math.min(I[c],L.length-1);e.innerHTML='<u></u>'+L.map(t=>`<b>${t}</b>`).join('')+'<u></u>';e.scrollTop=I[c]*44};
 ['j','m','y'].forEach(c=>{build(c);const e=$(`[data-c=${c}]`,o);let t;e.onscroll=()=>{clearTimeout(t);t=setTimeout(()=>{const i=Math.round(e.scrollTop/44);if(i==I[c])return;I[c]=i;if(c!='j')build('j')},90)}});
 $('[data-ok]',o).onclick=()=>{cb(`${ys[I.y]}-${P(I.m+1)}-${P(I.j+1)}`);o.remove()}};
/* photo : recadrage */
const apply=f=>{const i=$('#uf-gal');if(!i)return;const dt=new DataTransfer();dt.items.add(f);i.files=dt.files;i.onchange&&i.onchange();setTimeout(()=>{const d=$('#ujed');d&&prog(d)},500)};
const crop=file=>{
 const url=URL.createObjectURL(file),img=new Image();
 img.onerror=()=>T('Image illisible');
 img.onload=()=>{
  const S=Math.min(320,innerWidth-48),W=img.naturalWidth,H=img.naturalHeight,min=Math.max(S/W,S/H);let sc=min,x=(S-W*sc)/2,y=(S-H*sc)/2,p=null;
  const o=ov(`<h4>Ajuster la photo</h4><div class="v72cr" style="width:${S}px;height:${S}px"><img src="${url}" draggable="false" alt=""></div><input type="range" class="v72z" min="0" max="100" value="0" aria-label="Zoom"><p>Glisse pour cadrer, zoome avec le curseur</p><div class="v72r"><button type="button" class="v72g" data-x>Annuler</button><button type="button" class="v72p" data-ok>Utiliser</button></div>`,'v72crop');
  const im=$('img',o),fr=$('.v72cr',o),z=$('.v72z',o);
  const draw=()=>{x=Math.min(0,Math.max(S-W*sc,x));y=Math.min(0,Math.max(S-H*sc,y));im.style.width=W*sc+'px';im.style.height=H*sc+'px';im.style.transform=`translate(${x}px,${y}px)`};draw();
  z.oninput=()=>{const cx=(S/2-x)/sc,cy=(S/2-y)/sc;sc=min*(1+z.value/100*3);x=S/2-cx*sc;y=S/2-cy*sc;draw()};
  fr.onpointerdown=e=>{p=[e.clientX,e.clientY,x,y];fr.setPointerCapture(e.pointerId)};
  fr.onpointermove=e=>{if(!p)return;x=p[2]+e.clientX-p[0];y=p[3]+e.clientY-p[1];draw()};fr.onpointerup=fr.onpointercancel=()=>p=null;
  o.onclick=e=>{const b=e.target.closest('button');if(!b)return;
   if(b.dataset.x!=null){o.remove();URL.revokeObjectURL(url)}
   else if(b.dataset.ok!=null){const c=document.createElement('canvas');c.width=c.height=512;c.getContext('2d').drawImage(img,-x/sc,-y/sc,S/sc,S/sc,0,0,512,512);c.toBlob(bl=>{apply(new File([bl],'photo.jpg',{type:'image/jpeg'}));o.remove();URL.revokeObjectURL(url)},'image/jpeg',.9)}}};
 img.src=url};
/* photo : appareil photo intégré */
const cam=()=>{
 const md=navigator.mediaDevices;if(!md||!md.getUserMedia){$('#uf-cam').click();return}
 let st,face='user';
 const o=ov('<video playsinline autoplay muted></video><div class="v72ct"><button type="button" data-x aria-label="Fermer">✕</button><button type="button" data-f aria-label="Retourner la caméra">⟲</button></div><button type="button" class="v72k" data-s aria-label="Prendre la photo"></button>','v72cam'),v=$('video',o);
 const stop=()=>{st&&st.getTracks().forEach(t=>t.stop())},close=()=>{stop();o.remove()};
 const go=async()=>{stop();try{st=await md.getUserMedia({video:{facingMode:face},audio:false});v.srcObject=st;v.style.transform=face=='user'?'scaleX(-1)':''}catch(_){close();$('#uf-cam').click()}};go();
 o.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.x!=null)close();else if(b.dataset.f!=null){face=face=='user'?'environment':'user';go()}
  else if(b.dataset.s!=null&&v.videoWidth){const c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;const g=c.getContext('2d');if(face=='user'){g.translate(c.width,0);g.scale(-1,1)}g.drawImage(v,0,0);c.toBlob(bl=>{close();crop(new File([bl],'selfie.jpg',{type:'image/jpeg'}))},'image/jpeg',.92)}}};
/* jauge de complétion */
const prog=d=>{const g=k=>(($('#uf-'+k,d)||{}).value||'').trim(),a=['pre','nom','pse','bio','tel','dn','fi'].filter(g).length+($('#uf-av',d).style.backgroundImage?1:0),p=Math.round(a/8*100),f=$('.v72pg i',d),t=$('.v72pt',d);if(f){f.style.width=p+'%';t.textContent=p>=100?'Profil complet 🎉':'Profil complété à '+p+' %'}};
/* mise en place dans « Modifier le profil » */
const up=d=>{
 const dn=$('#uf-dn',d);
 if(dn){dn.type='hidden';const b=document.createElement('button');b.type='button';b.className='v72b d';
  const sh=()=>{const s=dn.value.split('-');if(s.length==3){b.textContent=(+s[2])+' '+MO[s[1]-1]+' '+s[0];b.classList.remove('mt')}else{b.textContent='Choisir une date';b.classList.add('mt')}};sh();dn.after(b);
  b.onclick=()=>pickDate(dn.value,v=>{dn.value=v;sh();fire(dn,'input')})}
 ['ufr','nv'].forEach(k=>{const s=$('#uf-'+k,d);if(!s)return;s.style.display='none';const b=document.createElement('button');b.type='button';b.className='v72b';
  const sh=()=>{const o=s.options[s.selectedIndex];b.textContent=o?o.text:'Choisir'};sh();s.after(b);
  b.onclick=()=>pickList(s.parentNode.firstElementChild.textContent,[...s.options].map(o=>o.text),s.value,v=>{s.value=v;sh();fire(s,'change');fiSync()})});

 const FL={'Agroforesterie':{tc:['Tronc commun Agroforesterie – Environnement'],l3:['Sciences de la Vie et de la Terre','Bioressources-Agronomie','Biotechnologies agroalimentaires','Biologie – santé','Nouvelles Technologies d’Agriculture (LP N-TechAgri)','Métiers de Technicien Agricole en Ressources Végétales (MTARV)'],ms:['Bioressources-Agronomie','Biosécurité alimentaire','Biotechnologies agroalimentaires','Phytothérapie et pharmacopée des substances naturelles'],dm:['Agriculture et Foresterie Tropicale (AGRITROP)','Biologie et Santé (BioSanté)','Écologie, Biodiversité et Évolution (EBE)','Géosciences et Environnement (GE)']},
 'Environnement':{tc:['Tronc commun Agroforesterie – Environnement'],l3:['Biodiversité et gestion durable des écosystèmes','Productions animale et Halieutique','Sciences de la terre','Génie de l’eau et de l’environnement (GEE)','Environnement et Gestion Durable des Ressources Naturelles (EGERNA)','Physique – chimie','Qualité Hygiène Sécurité Environnement (QHSE) en FOAD'],ms:['Physique-chimie','Géo-matériaux et géotechnique','Mines et énergies','Productions aquacoles','QHSE en FOAD','Génie de l’eau et de l’environnement (GEE)','Environnement et Gestion Durable des Ressources Naturelles (EGERNA)','Environnement minier et développement durable','Ingénierie et certification agricole en zone tropicale'],dm:['Géosciences et Environnement (GE)','Écologie, Biodiversité et Évolution (EBE)']},
 'Sciences sociales et humaines':{tc:['Tronc commun Histoire – Géographie','Tronc commun Sociologie – Anthropologie'],l3:['Histoire','Géographie','Histoire – Géographie','Sociologie – Anthropologie'],ms:['Anthropologie du développement communautaire','Histoire des civilisations-sociétés-environnement','Histoire politique et économique','Géographie de la population et du développement rural','Géographie physique, de l’environnement et des eaux','Sociologie du développement rural'],dm:['Anthropologie du développement communautaire (ADC)','Sciences Historiques (HIS)','Sciences Géographiques (SG)','Sciences Sociologiques (SOC)']},
 'Sciences économiques et de gestion':{tc:['Tronc commun en sciences économiques et de gestion'],l3:['Économie','Modélisation, statistique, économique et financière','Économie agricole et agroforestière','Gestion','Marketing','Management des organisations','Gestion comptable et financière'],ms:['Management des organisations','Gestion comptable et financière','Économie agricole et agroforestière','Économie du travail et des ressources humaines'],dm:['Sciences Économiques (ECO)','Sciences de Gestion (GES)']},
  'Géosciences et environnement':{tc:['Licence FOAD Géosciences et Environnement'],l3:['Géosciences et Environnement (Licence FOAD)','Sciences de la Terre (ST)','Eau, Hygiène, Assainissement (LP EHA)'],ms:['QHSE (Qualité, Hygiène, Sécurité, Environnement)','Génie de l’eau et de l’environnement (GEE)','Eau, Hygiène, Assainissement (EHA)','GG','MGE','Certificat DD&RSE'],dm:['Géosciences et Environnement (GE)']},
 'Sciences juridiques':{tc:['Tronc commun en sciences juridiques'],l3:['Droit public','Droit privé'],ms:['Master Recherche Droit Privé','Master Recherche Droit Public','Master Professionnel Droit de l’Environnement et du Développement Durable','Master Professionnel Droit des Affaires'],dm:['Droit public (DPU)','Droit privé (DPV)']}};
 const ufr=$('#uf-ufr',d),nv=$('#uf-nv',d),fi=$('#uf-fi',d);let fb;
 if(ufr&&![...ufr.options].some(o=>o.text=='Géosciences et environnement'))ufr.add(new Option('Géosciences et environnement'));
 const NVA=nv?[...nv.options].map(o=>o.text):[];
 const lvSync=()=>{if(!ufr||!nv)return;const f=FL[ufr.value],A=f&&f.lv?f.lv:NVA;if([...nv.options].map(o=>o.text).join('|')!=A.join('|')){const c=nv.value;nv.innerHTML=A.map(x=>`<option>${x}</option>`).join('');nv.value=A.includes(c)?c:A[0];nv.nextElementSibling.textContent=nv.value;fire(nv,'change')}};
 const opts=()=>{const f=FL[ufr.value],n=nv.value;return !f?[]:/^Licence [12]$/.test(n)?f.tc:n=='Licence 3'?f.l3:/^Master/.test(n)?f.ms:f.dm};
 const fiSync=init=>{lvSync();if(!fi)return;const L=opts();if(!(init&&fi.value)&&!L.includes(fi.value)){fi.value=L.length==1?L[0]:'';fire(fi,'input')}
  const lk=L.length==1,lb=fi.closest('label');fb.textContent=fi.value||'Choisir la filière';fb.classList.toggle('mt',!fi.value);fb.disabled=lk;lb.classList.toggle('v72lk',lk)};
 if(fi){fi.type='hidden';fb=document.createElement('button');fb.type='button';fb.className='v72b';fi.after(fb);fb.onclick=()=>{const L=opts();L.length?pickList('Filière',L,fi.value,v=>{fi.value=v;fire(fi,'input');fiSync()}):T('Choisis d’abord ton UFR et ton niveau')}}

 const bp=$('#uf-bp',d);bp&&bp.insertAdjacentHTML('afterend','<div class="v72pg"><i></i></div><div class="v72pt"></div>');fiSync(1);setTimeout(()=>prog(d),50)};
new MutationObserver(()=>{
 const d=$('#ujed');if(d&&!d.dataset.v72){d.dataset.v72=1;up(d)}
 const s=$('#ujsh');if(s&&!s.dataset.v72){s.dataset.v72=1;const o=window.UJSH_CLICK;window.UJSH_CLICK=e=>{const b=e.target.closest&&e.target.closest('button');if(b&&b.dataset.a=='cam'){s.remove();cam();return}o&&o(e)}}
}).observe(document.body,{childList:true});
/* le fichier choisi passe par le recadrage avant d'être appliqué */
addEventListener('change',e=>{const t=e.target;if(t&&(t.id=='uf-gal'||t.id=='uf-cam')&&t.files&&t.files[0]){e.stopPropagation();const f=t.files[0];t.value='';crop(f)}},true);
['input','change'].forEach(n=>addEventListener(n,()=>{const d=$('#ujed');d&&prog(d)},true));
})();

}catch(e){console.error("[ujlog] v72-js",e)}
/* ==== v72m-js ==== */
try{

(()=>{
const $=(s,r=document)=>r.querySelector(s),T=m=>{const t=document.createElement('div');t.className='v72t';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)};
const CR='https://www.croudaloa.ci/',PCS=['Le formulaire de demande d’admission ou de réadmission, renseigné en ligne puis imprimé','Le formulaire de demande de la carte de bénéficiaire des œuvres universitaires, renseigné','Le formulaire de la vie associative, renseigné','La fiche d’engagement individuel et parental, renseignée en ligne puis imprimée','Photocopie de la carte d’étudiant de l’année en cours ou du reçu d’inscription délivré par la scolarité de l’UJLoG','Photocopie de l’attestation de réussite au Bac (première année) ou de l’attestation de passage en année supérieure (anciens)','Photocopie de la carte de bénéficiaire des œuvres universitaires','Photocopie de la carte d’identité (Ivoiriens) ou de la carte consulaire / du passeport (étrangers)','Une photo couleur à coller sur la pochette (chemise à rabat bleue pour les filles, rouge pour les garçons)'];
const prt=(t,items,note)=>{const h=`<!doctype html><meta charset="utf-8"><title>${t}</title><style>body{font:14px/1.5 Arial,sans-serif;margin:28px;color:#111}h1{font-size:20px;margin:0 0 4px}.s{color:#555;margin-bottom:16px}ul{padding:0}li{margin:11px 0;list-style:none;padding-left:26px;position:relative}li:before{content:"☐";position:absolute;left:0;font-size:18px}.f{margin-top:24px;font-size:12px;color:#555}</style><h1>${t}</h1><div class="s">Établi le ${new Date().toLocaleDateString('fr-FR')} · My UJLoG</div><p>Nom et prénoms : ____________________________ &nbsp; Matricule : ______________</p><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul><div class="f">${note}</div>`;
 const f=document.createElement('iframe');f.style.cssText='position:fixed;width:0;height:0;border:0;right:0;bottom:0';document.body.appendChild(f);f.onload=()=>{try{f.contentWindow.focus();f.contentWindow.print()}catch(_){T('Impression indisponible ici')}setTimeout(()=>f.remove(),60000)};f.srcdoc=h};
const A=(h,t,c)=>`<a class="${c||''}" href="${h}" target="_blank" rel="noopener">${t}</a>`;
const ACC=window.UJACC||[];
const GU=[['Orienté(e) et inscrit(e) au MESRS',A('https://inscription.mesrs-ci.net','Portail MESRS','')+' : tu y retrouves ton inscription et ta fiche d’inscription.'],['Inscription à l’UJLoG',A('https://ujlog.edu.ci/ufr-efc/scolarite/inscription-et-reinscription/','Inscription et réinscription','')+' sur le site de l’université.'],['Carte de bénéficiaire des œuvres universitaires','Elle est exigée pour le restaurant universitaire, les activités sociales, culturelles et sportives, le logement et les dossiers de bourses. Elle est renouvelable chaque année universitaire.'],['Hébergement en résidence (CROU-D)','Demande en ligne dans ton Espace Logement, puis dépôt du dossier physique au service Logement. Voir l’onglet Imprimer.'],['Restauration, social, sport, culture',A(CR+'service-restauration','Restauration','')+' · '+A(CR+'service-social','Service social','')+' · '+A(CR+'service-sport','Sport','')]];
let tab=0;
const ren=o=>{$('.v72tb',o).innerHTML=['Imprimer','Accès','Guide'].map((t,i)=>`<button type="button" data-t="${i}" class="${i==tab?'on':''}">${t}</button>`).join('');
 $('.v72mb',o).innerHTML=tab==0?`<div class="v72cd"><h3>Dossier d’hébergement CROU-D 2026-2027</h3><div class="v72al">D’après le site du CROU-D : demandes en ligne du 6 au 23 octobre 2026 ; dépôt physique des dossiers « jusqu’à nouvel ordre » ; pour les demandes validées, loyer de 54 000 FCFA en une seule fois au guichet de l’Agent Comptable, depuis le 9 novembre 2026.</div><p>Pièces à fournir (liste officielle) :</p><ol>${PCS.map(x=>`<li>${x}</li>`).join('')}</ol><p class="mu">Les formulaires 1 à 4 se remplissent dans ton Espace Logement du CROU-D, qui génère la version à imprimer avec tes informations. L’application ne peut pas les imprimer à ta place.</p><div class="v72ac">${A(CR+'login','Mon Espace Logement')}${A(CR+'View/PHP/telecharger-pieces.php','Pièces officielles','s')}<button type="button" data-p="1" class="s">Imprimer ma check-list</button></div></div><div class="v72cd"><h3>Fiche d’inscription MESRS</h3><p>Ta fiche d’inscription et ton reçu de paiement se retrouvent sur le portail du MESRS. Vérifie sur place la liste exacte des documents demandés.</p><div class="v72ac">${A('https://inscription.mesrs-ci.net','Portail MESRS')}</div></div>`
 :tab==1?`<div class="v72cd"><h3>Conditions d’accès et débouchés</h3><p class="mu">Source : document d’admission de l’UJLoG publié par le ministère de l’Enseignement supérieur (rentrée 2024-2025). Les conditions peuvent changer.</p>${ACC.map(a=>`<details><summary>${a[1]}</summary><p><b>UFR :</b> ${a[0].replace(/^UFR /,'')}<br><b>Bac :</b> ${a[2]}${a[3]?`<br><b>Âge maximum :</b> ${a[3]}`:''}<br><b>Moyennes exigées :</b> ${a[4]}${a[5]?`<br><b>Débouchés :</b> ${a[5]}`:''}</p></details>`).join('')}</div>`
 :`<div class="v72cd"><h3>Guide du nouvel étudiant</h3><ol>${GU.map(g=>`<li><b>${g[0]}</b><br>${g[1]}</li>`).join('')}</ol></div>`};
const open=()=>{if($('.v72m'))return;tab=0;const o=document.createElement('div');o.className='v72o v72m';o.innerHTML='<div class="v72mh"><button type="button" data-x aria-label="Fermer">✕</button><b>Documents et démarches</b><span style="width:40px"></span></div><div class="v72tb"></div><div class="v72mb"></div>';document.body.appendChild(o);ren(o);
 o.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.x!=null)o.remove();else if(b.dataset.t!=null){tab=+b.dataset.t;ren(o)}else if(b.dataset.p!=null)prt('Dossier d’hébergement CROU-D',PCS,'Source : croudaloa.ci/pieces-readmission. Vérifie la liste à jour auprès du service Logement du CROU-D.')}};
addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-v72m]');if(b){e.preventDefault();e.stopPropagation();open()}},true);
})();

}catch(e){console.error("[ujlog] v72m-js",e)}
/* ==== v75-js ==== */
try{
(()=>{
const HG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3v3.5c0 1.6 1 3 2.6 4L12 12l2.4-1.5c1.6-1 2.6-2.4 2.6-4V3M7 21v-3.5c0-1.6 1-3 2.6-4L12 12l2.4 1.5c1.6 1 2.6 2.4 2.6 4V21"/></svg>';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const show=(t,m)=>{const o=document.querySelector('.w75');o&&o.remove();const d=document.createElement('div');d.className='w75';d.setAttribute('role','dialog');d.innerHTML='<div class="p"><div class="an">'+HG+'</div><h3>'+esc(t)+'</h3><p>'+esc(m)+'</p><span class="d"><i></i><i></i><i></i></span><button type="button" data-w75x>Compris</button></div>';d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-w75x]'))d.remove()});document.body.appendChild(d)};
window.UJ_WAIT=show;
addEventListener('click',e=>{const t=e.target;if(!t||!t.closest)return;
 const w=t.closest('[data-w75]');if(w){e.preventDefault();e.stopImmediatePropagation();show(w.dataset.w75,'En attente de mise en ligne. Ce document sera disponible ici dès qu’il sera publié par l’université.');return}
 const s=t.closest('[data-soon]');if(s&&!s.closest('#mymenu')&&!s.closest('.w75')){e.preventDefault();e.stopImmediatePropagation();show('Momentanément indisponible','Ce module n’a pas encore de ressources. Il sera disponible très bientôt.')}
},true);
})()
}catch(e){console.error("[ujlog] v75-js",e)}
/* ==== v76-js ==== */
try{
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const mem={};
const LS={get(k,d){try{const v=localStorage.getItem(k);if(v!=null)return JSON.parse(v)}catch(_){}return k in mem?mem[k]:d},set(k,v){mem[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(_){}},del(k){delete mem[k];try{localStorage.removeItem(k)}catch(_){}}};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tst=m=>{try{toast(m)}catch(_){}};
const icn=(n,s)=>{try{return I(n,s)}catch(_){return''}};
/* ---------- boîte de dialogue ---------- */
const dlg=(t,m,btns)=>{const o=$('.m76');o&&o.remove();const d=document.createElement('div');d.className='m76';d.innerHTML='<div class="p"><h3>'+esc(t)+'</h3><p>'+esc(m)+'</p><div class="r">'+btns.map((b,i)=>'<button type="button" class="'+(b.c||'')+'" data-i="'+i+'">'+esc(b.l)+'</button>').join('')+'</div></div>';d.addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(b){d.remove();const f=btns[+b.dataset.i].f;f&&f()}else if(e.target===d)d.remove()});document.body.appendChild(d)};
/* ---------- noms abrégés + badge ---------- */
const ab=t=>{const p=String(t||'').trim().split(/\s+/).filter(Boolean);let k=0;return p.map(w=>{const nom=w.length>1&&w===w.toUpperCase()&&w!==w.toLowerCase();if(nom)return w;k++;return k>1&&w.length>2?w[0].toUpperCase()+'.':w}).join(' ')};
const isVer=()=>window.UJVER>=4;
const paintName=(el,badge)=>{if($('.nmt',el)||el.closest('.v29n'))return;
 const tn=[...el.childNodes].filter(n=>n.nodeType==3);const raw=tn.map(n=>n.nodeValue).join('').trim();
 if(tn.length&&raw){const w=ab(raw);if(w!==raw){tn[0].nodeValue=w;tn.slice(1).forEach(n=>n.nodeValue='')}}
 $$('.vb',el).filter(x=>!x.closest('.b76')).forEach(x=>x.remove());
 const b=$(':scope > .b76',el),want=badge&&isVer()&&window.UJBDG;
 if(want&&!b){const sz=el.matches('.tkt')?22:16;try{el.insertAdjacentHTML('afterbegin','<span class="b76">'+UJBDG('EC',sz)+'</span>')}catch(_){}}
 else if(!want&&b)b.remove()};
let busy=0,sch=0,mo;
const paintAll=()=>{$$('[data-ownh]').forEach(e=>paintName(e,true));$$('.igme .ih .fl b').forEach(e=>paintName(e,true));$$('.igme .cp p>b').forEach(e=>paintName(e,false));$$('#mypr .tkt').forEach(e=>paintName(e,true))};
const run=()=>{sch=0;if(busy)return;busy=1;try{paintAll();pauseRow()}catch(_){}try{mo.takeRecords()}catch(_){}busy=0};
mo=new MutationObserver(()=>{if(!sch){sch=1;requestAnimationFrame(run)}});
/* ---------- modération ---------- */
const norm=t=>String(t||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/0/g,'o').replace(/1/g,'i').replace(/3/g,'e').replace(/5/g,'s').replace(/[@4]/g,'a').replace(/\$/g,'s').replace(/(.)\1{2,}/g,'$1');
const RULES=[
['Insulte ou harcèlement',/\b(connard|connasse|conard|salope|salop|pute|putes|encule|enculer|fdp|ntm|nique ta|ta mere|batard|batarde|ordure|abruti|abrutie|imbecile|cretin|cretine|debile|merdeux|sale con|sale chienne)\b/],
['Menace ou violence',/\b(je te tue|je vais te tuer|je vais te frapper|je vais te massacrer|je vais t egorger|je vais te buter|creve|crever|egorger|massacrer|a mort)\b/],
['Propos discriminatoire',/\b(sale (noir|noire|blanc|blanche|arabe|juif|juive|etranger|etrangere|negre|musulman|chretien)|negre|negresse|retourne (dans|chez) ton pays|race inferieure)\b/],
['Arnaque ou spam',/(gagne\w* (de l ?argent|\d+ ?(fcfa|f cfa)) (facilement|rapidement|sans effort)|double\w* (ton|votre|vos) argent|envoie\w*.{0,20}mot de passe|clique\w* (ici|sur le lien) pour gagner|monlog gratuit)/]];
const check=t=>{const n=norm(t);for(const [r,rx] of RULES)if(rx.test(n))return r;return''};
const hist=()=>LS.get('uj76_inf',[]);
window.UJMOD={inf:()=>hist().length,check,state:()=>LS.get('uj76_lock',null)};
const lockSet=o=>{LS.set('uj76_lock',o);render()};
const sanction=r=>{const h=hist();h.push({r,t:Date.now()});LS.set('uj76_inf',h);lockSet({type:'sanction',until:Date.now()+72*36e5,reason:r})};
const pause=d=>lockSet({type:'pause',until:Date.now()+d*864e5,days:d});
/* ---------- écran de blocage ---------- */
let ov=null,tm=0;
const parts=ms=>{const s=Math.max(0,Math.ceil(ms/1e3));return[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60]};
const dt=u=>new Date(u).toLocaleString('fr-FR',{weekday:'long',day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'});
const unlock=()=>{LS.del('uj76_lock');if(ov){ov.remove();ov=null}clearInterval(tm);tm=0;[...document.body.children].forEach(c=>c.removeAttribute&&c.removeAttribute('inert'))};
const render=()=>{const lk=LS.get('uj76_lock',null);if(!lk)return;if(lk.until<=Date.now()){unlock();tst('Ton compte est de nouveau accessible');return}
 $('.m76')&&$('.m76').remove();$('#pg76')&&$('#pg76').remove();
 if(!ov){ov=document.createElement('div');ov.id='lk76';ov.setAttribute('role','alertdialog');ov.setAttribute('aria-modal','true');document.body.appendChild(ov);[...document.body.children].forEach(c=>{if(c!==ov&&!/^(SCRIPT|STYLE)$/.test(c.tagName))c.setAttribute('inert','')})}
 const sa=lk.type=='sanction';ov.className=sa?'':'pa';
 const lockI='<svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',moonI='<svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/></svg>';
 ov.innerHTML='<div class="ic">'+(sa?lockI:moonI)+'</div><h1>'+(sa?'Compte restreint':'Auto-déconnexion en cours')+'</h1><p>'+(sa?'Une infraction aux règles de la communauté a été détectée : <b>'+esc(lk.reason)+'</b>. Ton compte est sous contrôle et reste inaccessible pendant 72 heures.':'Tu as choisi de te déconnecter pendant '+lk.days+' jours. Tu ne peux pas utiliser ton compte avant la fin de ce délai.')+'</p><div class="t"><div><b data-p="0">0</b><span>jours</span></div><div><b data-p="1">0</b><span>heures</span></div><div><b data-p="2">0</b><span>min</span></div><div><b data-p="3">0</b><span>sec</span></div></div><small>Accès rétabli automatiquement le '+esc(dt(lk.until))+'.'+(sa?' Relis les règles de la communauté avant ton retour.':'')+'</small>';
 const tick=()=>{const l=LS.get('uj76_lock',null);if(!l||l.until<=Date.now()){unlock();tst('Ton compte est de nouveau accessible');return}parts(l.until-Date.now()).forEach((v,i)=>{const e=$('[data-p="'+i+'"]',ov);if(e)e.textContent=i?String(v).padStart(2,'0'):v})};tick();clearInterval(tm);tm=setInterval(tick,1000)};
/* ---------- auto-déconnexion ---------- */
const openPause=()=>{$('#pg76')&&$('#pg76').remove();const pg=document.createElement('div');pg.id='pg76';let sel=0;const D=[3,5,7,14];
 pg.innerHTML='<div class="h"><button type="button" data-x aria-label="Retour">'+icn('chv',22)+'</button><b>Auto-déconnexion</b></div><div class="ic"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/></svg></div><h2>Fais une pause de My UJLoG</h2><p>Choisis la durée pendant laquelle tu veux rester déconnecté(e). Tu n’auras aucun accès à ton compte pendant ce temps, et rien ne pourra l’annuler. La durée maximale est de 2 semaines.</p><div class="g">'+D.map(d=>'<button type="button" data-d="'+d+'" aria-pressed="false"><b>'+d+'</b><span>jours</span>'+(d==14?'<em>Maximum · 2 semaines</em>':'')+'</button>').join('')+'</div><p class="n" id="pg76n"></p><button type="button" class="go" data-go76 disabled>Activer l’auto-déconnexion</button>';
 pg.addEventListener('click',e=>{const x=e.target.closest('[data-x]');if(x){pg.remove();return}
  const b=e.target.closest('[data-d]');if(b){sel=+b.dataset.d;$$('[data-d]',pg).forEach(k=>k.setAttribute('aria-pressed',k==b));$('#pg76n',pg).textContent='Retour possible le '+dt(Date.now()+sel*864e5);$('[data-go76]',pg).disabled=false;return}
  if(e.target.closest('[data-go76]')&&sel)dlg('Confirmer l’auto-déconnexion ?','Tu ne pourras plus utiliser ton compte pendant '+sel+' jours, jusqu’au '+dt(Date.now()+sel*864e5)+'. Cette décision ne peut pas être annulée.',[{l:'Annuler',c:'o'},{l:'Confirmer',c:'d',f:()=>pause(sel)}])});
 document.body.appendChild(pg)};
function pauseRow(){const h=$('#mmhome');if(!h||$('[data-a76="pause"]',h))return;const r=$$('button.li',h).find(b=>{const e=b.querySelector('b');return e&&e.textContent.trim()=='Comptes bloqués'});if(!r)return;
 const n=document.createElement('button');n.type='button';n.className='li';n.dataset.a76='pause';n.style.cssText='width:100%;text-align:left';n.innerHTML=icn('clk')+'<div class="fl"><b>Auto-déconnexion</b></div><span class="mu" style="font-size:13px">3 à 14 jours</span>'+icn('chv');r.after(n)}
/* ---------- publications : modifier depuis la console de départ ---------- */
let ED=null,SNAP=null,pubTxt='',pubTitle='';
const clearComp=()=>{try{g13('ptx').value='';g13('pyt').value='';g13('pvw').hidden=true;g13('pvbtn').setAttribute('aria-pressed','false');g13('pfile').value='';Q13.d=[];Q13.bg=-1;Q13.mo=-1;Q13.lc=-1;Q13.au=0;Q13.pan='';g13('ppan').hidden=true;g13('ppan').innerHTML='';pCard();pCtx();pAud();pTools();pSet()}catch(_){}};
const endEdit=()=>{ED=null;const b=$('#ppub'),t=$('#a13 .cmpt');if(b&&pubTxt)b.textContent=pubTxt;if(t&&pubTitle)t.textContent=pubTitle};
const startEdit=a=>{try{shClose()}catch(_){}ED=a;const s=a._s76||{tx:a._tx||'',d:[],bg:-1,mo:-1,lc:-1,au:0,yv:''};go('a13');
 setTimeout(()=>{try{const b=$('#ppub'),t=$('#a13 .cmpt');pubTxt=pubTxt||b.textContent;pubTitle=pubTitle||t.textContent;b.textContent='Enregistrer';t.textContent='Modifier la publication';
  g13('ptx').value=s.tx;g13('pyt').value=s.yv||'';if(s.yv){g13('pvw').hidden=false;g13('pvbtn').setAttribute('aria-pressed','true')}
  Q13.d=(s.d||[]).slice();Q13.bg=s.bg;Q13.mo=s.mo;Q13.lc=s.lc;Q13.au=s.au;pSet();pCard();pCtx();pAud();pTools();pChk()}catch(_){}},150)};
setInterval(()=>{if(ED&&!(($('#a13')||{}).offsetParent)){endEdit();clearComp()}},600);
/* ---------- vérification du profil : étapes réelles ---------- */
let PASS=0;
const passStep=b=>{PASS=1;const e=b&&b.isConnected?b:$('[data-ac="ver"]');if(e)e.click();setTimeout(()=>{try{const x=(($('#mmp-det')||{}).innerText||'');if(/Ton profil est vérifié|4 sur 4/.test(x)&&window.UJV_SET)UJV_SET()}catch(_){}},120)};
const stepVer=b=>{const mm=(($('#mmp-det')||{}).innerText||'').match(/(\d) sur 4/),n=mm?+mm[1]:0;
 if(n==0){const U=window.UJX||{},need=[['pre','prénoms'],['nom','nom'],['dn','date de naissance'],['tel','téléphone'],['ufr','UFR'],['fi','filière'],['nv','niveau']].filter(([k])=>!String(U[k]||'').trim()).map(x=>x[1]);
  if(need.length){dlg('Préinscription incomplète','Complète d’abord ton profil : '+need.join(', ')+'.',[{l:'Plus tard',c:'o'},{l:'Compléter',f:()=>{const t=document.createElement('button');t.dataset.pedit='1';t.style.display='none';document.body.appendChild(t);t.click();t.remove()}}]);return}
  tst('Préinscription complète');passStep(b);return}
 if(n==1){if(!(window.UJCARD&&UJCARD.filled&&UJCARD.filled())){dlg('Carte étudiante manquante','Scanne d’abord le QR code au dos de ta carte pour remplir ta carte étudiante.',[{l:'Plus tard',c:'o'},{l:'Scanner ma carte',f:()=>{try{$('#mymenu').hidden=true}catch(_){}go('a5')}}]);return}
  tst('Carte étudiante reconnue');passStep(b);return}
 if(n==2){const f=document.createElement('input');f.type='file';f.accept='image/*';f.setAttribute('capture','user');f.onchange=async()=>{const fl=f.files[0];if(!fl)return;try{if('FaceDetector' in window){const bm=await createImageBitmap(fl),r=await new FaceDetector().detect(bm);if(!r.length){tst('Aucun visage détecté, réessaie en pleine lumière');return}}}catch(_){}tst('Visage authentifié');passStep(b)};f.click();return}
 dlg('Empreinte digitale','Cette étape est facultative. Tu peux l’activer si ton téléphone le permet.',[{l:'Passer',c:'o',f:()=>passStep(b)},{l:'Activer',f:async()=>{let ok=false;try{if(window.PublicKeyCredential&&await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()){await navigator.credentials.create({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),rp:{name:'My UJLoG'},user:{id:crypto.getRandomValues(new Uint8Array(16)),name:'etudiant',displayName:'Étudiant'},pubKeyCredParams:[{type:'public-key',alg:-7}],authenticatorSelection:{authenticatorAttachment:'platform',userVerification:'required'},timeout:60000}});ok=true}}catch(_){}tst(ok?'Empreinte activée':'Empreinte non disponible : étape facultative passée');passStep(b)}}])};
/* ---------- clics ---------- */
addEventListener('click',e=>{const t=e.target;if(!t||!t.closest)return;
 const v=t.closest('[data-ac="ver"]');if(v){if(PASS){PASS=0;return}e.preventDefault();e.stopImmediatePropagation();stepVer(v);return}
 if(t.closest('[data-a76="pause"]')){e.preventDefault();e.stopImmediatePropagation();openPause();return}
 const pp=t.closest('#ppub');if(pp&&!pp.disabled){const tx=$('#ptx').value+' '+($('#pyt')?$('#pyt').value:''),r=check(tx);if(r){e.preventDefault();e.stopImmediatePropagation();sanction(r);return}
  SNAP={tx:$('#ptx').value,d:Q13.d.slice(),bg:Q13.bg,mo:Q13.mo,lc:Q13.lc,au:Q13.au,yv:$('#pyt').value};const before=new Set($$('#a1 .igme')),old=ED;
  setTimeout(()=>{const a=$$('#a1 .igme').find(x=>!before.has(x));if(a&&SNAP)a._s76=SNAP;if(old&&a&&old!==a){try{delPost(old)}catch(_){}try{window.UJRMPOST&&UJRMPOST(old)}catch(_){}const mu=a.querySelector('.ih .fl .mu');if(mu)mu.textContent=mu.textContent.replace('À l’instant','Modifiée à l’instant');tst('Publication modifiée')}
   if(old){endEdit()}SNAP=null},40);return}
 const sd=t.closest('[data-sx="send"]');if(sd){const c=document.querySelector('#cmi'),r=c&&check(c.value);if(r){e.preventDefault();e.stopImmediatePropagation();sanction(r);return}}
 const ed=t.closest('[data-sx="edme"]');if(ed&&typeof cp!=='undefined'&&cp&&cp.classList.contains('igme')){e.preventDefault();e.stopImmediatePropagation();startEdit(cp)}
},true);
const start=()=>{mo.observe(document.body,{childList:true,subtree:true,characterData:true});run();render();setInterval(()=>{if(LS.get('uj76_lock',null)&&!ov)render()},2000)};
document.readyState=='loading'?addEventListener('DOMContentLoaded',start):start();
})()
}catch(e){console.error("[ujlog] v76-js",e)}
/* ==== v79-carte ==== */
try{

(function(){
if(window.__v79)return;window.__v79=1;
var KEY='uj79_card';
var B={ip:'',nom:'',pre:'',dn:'',lieu:'',ufr:'',fil:'',niv:'',num:''};
/* Fiche renvoyée après lecture du QR code. À remplacer par la vraie recherche côté serveur. */
var REG=[];/* registre des cartes : fourni par le serveur (API universitaire) */
var C=Object.assign({},B);
try{var sv=sessionStorage.getItem(KEY);if(sv)C=Object.assign({},B,JSON.parse(sv))}catch(e){}
var root=document.getElementById('a5');if(!root)return;
root.addEventListener('contextmenu',function(e){e.preventDefault()});root.addEventListener('dragstart',function(e){e.preventDefault()});
var rec=root.querySelector('.ucf:not(.ucb) svg'),ver=root.querySelector('.ucb svg');
if(!rec||!ver)return;
function tx(svg,x,y){var l=svg.querySelectorAll('text');for(var i=0;i<l.length;i++){if(l[i].getAttribute('x')==x&&l[i].getAttribute('y')==y)return l[i]}return null}
function fit(el,txt,x){
 if(!el.__fs)el.__fs=parseFloat(el.getAttribute('font-size'))||40;
 var fs=el.__fs,w=0,i,c;
 for(i=0;i<txt.length;i++){c=txt.charAt(i);w+=(c==c.toUpperCase()&&c!=c.toLowerCase()||'0123456789'.indexOf(c)>=0)?0.7:0.56}
 var avail=1560-x;if(w*fs>avail)fs=Math.floor(avail/w);
 el.setAttribute('font-size',fs)}
function put(svg,x,y,txt){var el=tx(svg,x,y);if(!el)return;el.textContent=txt;el.removeAttribute('textLength');el.removeAttribute('lengthAdjust');if(svg===rec)fit(el,txt,x)}
function dnf(){if(!C.dn)return '';var m=C.dn.split('-');var d=m.length==3?m[2]+'/'+m[1]+'/'+m[0]:C.dn;return C.lieu?d+' à '+C.lieu:d}
function render(){
 put(rec,805,428,'IP :');
 var lb=tx(rec,805,428);if(lb)lb.setAttribute('textLength','55');
 put(rec,960,428,C.ip);
 put(rec,702,534,C.nom);put(rec,702,626,C.pre);put(rec,702,718,dnf());
 put(rec,702,811,C.ufr);put(rec,702,866,C.fil);put(rec,702,974,C.niv);
 var nv=tx(ver,606,1032);if(nv){nv.textContent=C.num;nv.removeAttribute('textLength');nv.removeAttribute('lengthAdjust')}
 ui()}
function filled(){return !!(C.ip||C.nom)}
/* Bouton, texte d’aide, actions */
var row=root.querySelector('.row[style*="gap:10px"]'),hint=root.querySelector('p.mu');
var btn=document.createElement('button');btn.type='button';btn.id='v79-sc';btn.className='btn';btn.style.cssText='width:100%;margin:0 0 10px';
btn.innerHTML='<svg class="i" aria-hidden="true" style="width:20px;height:20px"><use href="#qr"></use></svg><span></span>';
var clr=document.createElement('button');clr.type='button';clr.id='v79-cl';clr.textContent='Vider la carte';clr.style.cssText='display:none;margin:2px auto 8px;font-size:13px;font-weight:700;color:var(--mu);text-decoration:underline';
if(row){row.parentNode.insertBefore(btn,row);row.parentNode.insertBefore(clr,row)}
function ui(){
 var f=filled();
 btn.querySelector('span').textContent=f?'Scanner une autre carte':'Scanner ma carte';
 if(hint)hint.textContent=f?'Touchez la carte pour la retourner':'Ta carte est vierge : scanne le QR code au dos de ta carte pour la remplir.';
 clr.style.display=f?'block':'none';
 if(row){var bs=row.querySelectorAll('button');for(var i=0;i<bs.length;i++){bs[i].disabled=!f;bs[i].style.opacity=f?'':'.45'}}}
function say(m){try{toast(m)}catch(e){}}
function tc(s){return String(s||'').toLowerCase().split(' ').map(function(w){return w?w.charAt(0).toUpperCase()+w.slice(1):w}).join(' ')}
function syncProfile(r){
 var U=window.UJX;if(!U)return;
 var ufr=r.ufr.indexOf('/')>=0?r.ufr.split('/')[1]:r.ufr,fil=r.fil.indexOf('LICENCE ')==0?r.fil.slice(8):r.fil,niv=r.niv.indexOf('(')>0?r.niv.slice(0,r.niv.indexOf('(')).trim():r.niv;
 U.nom=tc(r.nom);U.pre=tc(r.pre);U.dn=r.dn;U.ufr=tc(ufr);U.nv=niv;U.fi=tc(fil);
 try{window.UJID&&window.UJID()}catch(e){}
 try{var m=MB[0];m.fn=U.pre;m.ln=U.nom.toUpperCase();m.n=(U.pre+' '+U.nom).trim();m.h=U.pse||String(U.id).toLowerCase();m.g=U.ufr;if(typeof renderMy=='function')renderMy()}catch(e){}
 try{if(window.UJV_REFRESH)window.UJV_REFRESH()}catch(e){}}
function save(){try{sessionStorage.setItem(KEY,JSON.stringify(C))}catch(e){}}
function fill(r){
 r=Object.assign({},B,r);
 var keys=['ip','nom','pre','dn','ufr','fil','niv','num'],i=0;C=Object.assign({},B);render();
 (function step(){
  if(i>=keys.length){save();syncProfile(r);render();say('Carte remplie');return}
  var k=keys[i++];C[k]=r[k]||'';if(k=='dn')C.lieu=r.lieu||'';render();setTimeout(step,170)})()}
function parseQR(t){
 var s=String(t||'').split(String.fromCharCode(10)).join(' ').split(String.fromCharCode(13)).join(' ').split(String.fromCharCode(9)).join(' ');
 var p=s.split(' ').filter(function(x){return x});
 if(p.length<3)return null;
 var a=p[0].toUpperCase();if(a.length<8||!/[0-9]{6,}/.test(a))return null;
 return {ip:a,nom:p[1].toUpperCase(),pre:p.slice(2).join(' ').toUpperCase()}}
function lookup(t){
 var q=parseQR(t);
 if(q){var m=null;for(var i=0;i<REG.length;i++){if(REG[i].ip==q.ip)m=REG[i]}return Object.assign({},B,m||{},q)}
 var s=String(t||'').toUpperCase();
 for(var j=0;j<REG.length;j++){if(s.indexOf(REG[j].ip)>=0||s.indexOf(REG[j].num)>=0)return Object.assign({},B,REG[j])}
 try{var o=JSON.parse(t);if(o&&(o.ip||o.nom))return Object.assign({},B,o)}catch(e){}
 return null}
/* Scanner */
var st=document.createElement('style');st.id='v79-css';
st.textContent='#v79-ov{position:fixed;inset:0;z-index:100000;background:#000;color:#fff;display:none;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;text-align:center;font:600 15px/1.4 Inter,system-ui,sans-serif}#v79-ov.on{display:flex}#v79-ov video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.9}#v79-ov .fr{position:relative;width:240px;height:240px;border-radius:24px;box-shadow:0 0 0 9999px rgba(0,0,0,.55),inset 0 0 0 3px #fff}#v79-ov .tt,#v79-ov .ms,#v79-ov .ac{position:relative}#v79-ov .tt{font:800 20px Inter,system-ui,sans-serif}#v79-ov .ms{min-height:42px;max-width:300px;color:#E4F5EA}#v79-ov .ac{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}#v79-ov .ac button{height:44px;padding:0 18px;border-radius:22px;border:0;font:700 15px Inter,system-ui,sans-serif;background:#fff;color:#0B1630}#v79-ov .ac .p{background:#15803D;color:#fff}#v79-sc:active{transform:scale(.98)}#a5 .ucw{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}';
document.head.appendChild(st);
var ov=document.createElement('div');ov.id='v79-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','Scanner ma carte');
ov.innerHTML='<video playsinline muted></video><div class="tt">Scanner ma carte</div><div class="fr"></div><div class="ms" id="v79-ms"></div><div class="ac"><button type="button" id="v79-x">Annuler</button></div>';
document.body.appendChild(ov);
var vid=ov.querySelector('video'),ms=ov.querySelector('#v79-ms'),stream=null,timer=0,det=null;
function msg(m){ms.textContent=m}
function stop(){clearTimeout(timer);timer=0;if(stream){stream.getTracks().forEach(function(t){t.stop()});stream=null}vid.srcObject=null}
function close(){stop();ov.classList.remove('on')}
function loop(){
 if(!stream)return;
 det.detect(vid).then(function(r){
  if(r&&r.length){var f=lookup(r[0].rawValue);if(f){close();fill(f)}else{msg('Ce QR code n’appartient pas à une carte d’étudiant UJLoG. Réessaie avec le QR code au dos de ta carte.');timer=setTimeout(loop,900)}}
  else timer=setTimeout(loop,250)}).catch(function(){timer=setTimeout(loop,400)})}
function open(){
 ov.classList.add('on');msg('Place le QR code au dos de ta carte dans le cadre.');
 if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.BarcodeDetector){msg('Le scan par caméra n’est pas disponible sur cet appareil. Saisis les informations de ta carte manuellement.');return}
 try{det=new BarcodeDetector({formats:['qr_code']})}catch(e){msg('Le scan par caméra n’est pas disponible sur cet appareil. Saisis les informations de ta carte manuellement.');return}
 navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false}).then(function(s){stream=s;vid.srcObject=s;var p=vid.play();if(p&&p.catch)p.catch(function(){});loop()}).catch(function(){msg('Autorise l’accès à la caméra pour scanner ta carte.')})}
btn.addEventListener('click',open);
ov.querySelector('#v79-x').addEventListener('click',close);
clr.addEventListener('click',function(){C=Object.assign({},B);try{sessionStorage.removeItem(KEY)}catch(e){}render();say('Carte vidée')});
window.UJCARD={scan:function(t){var f=lookup(t);if(f){fill(f);return true}return false},filled:function(){return filled()}};
render();
if(filled())syncProfile(REG[0]&&C.ip==REG[0].ip?REG[0]:C);
})();


}catch(e){console.error("[ujlog] v79-carte",e)}
/* ==== v100-menu ==== */
try{

(function(){
if(window.__v100)return;window.__v100=1;
var DUR=600,EASE='cubic-bezier(.22,.8,.24,1)';
var RM=false;try{RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}
var mm=null,btn=null,clone=null,vis='',hid=false,open=false,closing=false,skip=false,obs=null;
var easeOut=function(u){return 1-Math.pow(1-u,3)},easeIO=function(u){return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2};
function logo(){return mm?mm.querySelector('#mmhome .mmlogo'):null}
function usable(){return !!(btn&&btn.isConnected&&btn.getBoundingClientRect().width>0)}
function ctr(r,mr){return {x:r.left-mr.left+r.width/2,y:r.top-mr.top+r.height/2}}
function origin(mr){
  if(usable())return ctr(btn.getBoundingClientRect(),mr);
  var l=logo();if(l&&l.getClientRects().length)return ctr(l.getBoundingClientRect(),mr);
  return {x:mr.width/2,y:40}}
function radius(o,mr){return Math.hypot(Math.max(o.x,mr.width-o.x),Math.max(o.y,mr.height-o.y))+24}
/* trajectoire courbe (léger virage vers le bas) + petit effet de gonflement */
function path(dx,dy,ease){
  var n=16,k=[],cx=dx*.5,cy=dy*.5+Math.min(110,Math.hypot(dx,dy)*.5);
  for(var i=0;i<=n;i++){var u=i/n,t=ease(u),b=2*(1-t)*t,c=t*t,s=1+.24*Math.sin(Math.PI*u);
    k.push({transform:'translate('+(b*cx+c*dx).toFixed(2)+'px,'+(b*cy+c*dy).toFixed(2)+'px) scale('+s.toFixed(3)+')',offset:u})}
  return k}
function mkClone(rect){
  var par=mm.offsetParent||mm.parentNode,pr=par.getBoundingClientRect();
  var src=usable()?btn:logo(),cs=getComputedStyle(src),c=src.cloneNode(true);
  ['data-menu','id','data-mmx','aria-label'].forEach(function(a){c.removeAttribute(a)});
  c.setAttribute('aria-hidden','true');c.tabIndex=-1;c.className='ib v100f';
  var s=c.style;s.width=rect.width+'px';s.height=rect.height+'px';s.boxSizing='border-box';
  s.color=cs.color;s.background=cs.backgroundColor;s.borderRadius=cs.borderRadius;s.boxShadow='none';s.border='0';
  s.left=(rect.left-pr.left+par.scrollLeft)+'px';s.top=(rect.top-pr.top+par.scrollTop)+'px';
  par.appendChild(c);return c}
function hideBtn(){if(!hid&&btn){vis=btn.style.visibility;btn.style.visibility='hidden';hid=true}}
function cleanup(){
  if(clone){clone.remove();clone=null}
  if(hid&&btn&&btn.isConnected)btn.style.visibility=vis;hid=false;
  var L=logo();if(L)L.style.visibility=''}
function stagger(){
  var home=mm.querySelector('#mmhome');if(!home||home.hidden||!home.animate)return;
  var vh=mm.clientHeight,i=0;
  [].slice.call(home.children).forEach(function(e){
    if(e.classList.contains('mmtop')||e.hidden||!e.getClientRects().length)return;
    if(e.getBoundingClientRect().top>vh+40)return;
    e.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}],{duration:440,delay:200+i*40,easing:EASE,fill:'backwards'});i++});
  var av=home.querySelector('.mma');
  if(av)av.animate([{opacity:0,transform:'scale(.6)'},{opacity:1,transform:'scale(1)'}],{duration:520,delay:150,easing:'cubic-bezier(.34,1.56,.64,1)',fill:'backwards'});
  [].slice.call(home.querySelectorAll('#mmpf .fl,#mmpf .mmo')).forEach(function(e,j){
    e.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:420,delay:260+j*70,easing:EASE,fill:'backwards'})})}
function openAnim(){
  if(RM)return;
  var mr=mm.getBoundingClientRect(),o=origin(mr),R=radius(o,mr),L=logo();
  mm.animate([{clipPath:'circle(0px at '+o.x+'px '+o.y+'px)'},{clipPath:'circle('+R+'px at '+o.x+'px '+o.y+'px)'}],{duration:DUR,easing:EASE});
  stagger();
  if(!usable()||!L)return;
  var br=btn.getBoundingClientRect(),lr=L.getBoundingClientRect(),c=clone=mkClone(br);
  hideBtn();L.style.visibility='hidden';
  var a=c.animate(path(lr.left-br.left,lr.top-br.top,easeOut),{duration:DUR+60,easing:'linear',fill:'forwards'});
  a.onfinish=function(){if(c===clone){L.style.visibility='';c.remove();clone=null}}}
function closeAnim(done){
  if(RM){cleanup();done();return}
  mm.scrollTop=0;
  var mr=mm.getBoundingClientRect(),o=origin(mr),R=radius(o,mr),L=logo(),home=mm.querySelector('#mmhome');
  var fly=!!(usable()&&L&&L.getClientRects().length),pending=fly?2:1;
  function end(){cleanup();done();try{mm.getAnimations({subtree:true}).forEach(function(x){x.cancel()})}catch(e){}}
  function fin(){if(--pending<=0)end()}
  if(home&&!home.hidden)[].slice.call(home.children).forEach(function(e){
    if(!e.classList.contains('mmtop'))e.animate([{opacity:1},{opacity:0}],{duration:200,easing:'ease-out',fill:'forwards'})});
  var a=mm.animate([{clipPath:'circle('+R+'px at '+o.x+'px '+o.y+'px)'},{clipPath:'circle(0px at '+o.x+'px '+o.y+'px)'}],{duration:DUR,delay:60,easing:EASE,fill:'both'});
  a.onfinish=fin;
  if(!fly)return;
  var lr=L.getBoundingClientRect(),br=btn.getBoundingClientRect(),c=clone=mkClone(lr);
  hideBtn();L.style.visibility='hidden';
  var dx=br.left-lr.left,dy=br.top-lr.top;
  var f=c.animate(path(dx,dy,easeIO),{duration:DUR,delay:60,easing:'linear',fill:'both'});
  f.onfinish=function(){
    /* arrivé : l'icône disparaît dans le bouton d'origine, qui reprend sa place */
    if(hid){btn.style.visibility=vis;hid=false}
    try{btn.animate([{transform:'scale(.82)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],{duration:300,easing:EASE})}catch(e){}
    var end0='translate('+dx+'px,'+dy+'px)';
    var g=c.animate([{opacity:1,transform:end0+' scale(1)'},{opacity:0,transform:end0+' scale(.6)'}],{duration:180,easing:'ease-out',fill:'forwards'});
    g.onfinish=fin}}
function onMut(){
  if(!mm)return;
  if(!mm.hidden&&!open){open=true;openAnim()}
  else if(mm.hidden&&open){open=false;cleanup();btn=null}}
function init(){
  if(obs)return true;
  mm=document.getElementById('mymenu');if(!mm)return false;
  obs=new MutationObserver(onMut);
  obs.observe(mm,{attributes:true,attributeFilter:['hidden']});
  return true}
if(!init()){var iv=setInterval(function(){if(init())clearInterval(iv)},400)}
window.addEventListener('click',function(e){
  var t=e.target;if(!t||!t.closest)return;
  var m=t.closest('[data-menu]');
  if(m){init();btn=m;return}
  var x=t.closest('[data-mmx]');if(!x)return;
  if(skip){skip=false;return}
  if(!mm||mm.hidden)return;
  e.preventDefault();e.stopImmediatePropagation();
  if(closing)return;closing=true;
  closeAnim(function(){skip=true;closing=false;x.click()})},true);
})();

}catch(e){console.error("[ujlog] v100-menu",e)}
/* ==== v81-btn-align-js ==== */
try{

/* v81 : filet de sécurité — centre le texte des boutons pleins (texte seul) qui héritaient de l'alignement à gauche global */
(function(){
  var rules=[],seen=-1;
  function load(){
    if(seen===document.styleSheets.length)return;
    seen=document.styleSheets.length;rules=[];
    (function walk(list){
      for(var i=0;i<list.length;i++){
        var r=list[i];
        if(r.cssRules&&!r.selectorText){try{walk(r.cssRules)}catch(e){}continue}
        if(r.style&&r.style.textAlign&&r.selectorText&&r.selectorText.trim()!=='button')rules.push(r.selectorText)
      }
    })(Array.prototype.concat.apply([],Array.prototype.map.call(document.styleSheets,function(s){try{return Array.prototype.slice.call(s.cssRules)}catch(e){return[]}})));
  }
  function fix(b){
    if(b.__v81)return;b.__v81=1;
    if(b.childElementCount||!b.textContent.trim())return;
    var cs=getComputedStyle(b);
    if(cs.textAlign!=='left'&&cs.textAlign!=='start')return;
    if(cs.backgroundColor==='rgba(0, 0, 0, 0)'&&cs.backgroundImage==='none')return;
    if(cs.justifyContent==='space-between')return;
    for(var i=0;i<rules.length;i++){try{if(b.matches(rules[i]))return}catch(e){}}
    b.style.textAlign='center';
    if(cs.display.indexOf('flex')>-1)b.style.justifyContent='center';
  }
  function scan(n){
    if(n.nodeType!==1)return;
    if(n.tagName==='BUTTON')fix(n);
    var l=n.getElementsByTagName?n.getElementsByTagName('button'):[];
    for(var i=0;i<l.length;i++)fix(l[i]);
  }
  var q=[],t=0;
  function flush(){t=0;load();var a=q;q=[];a.forEach(scan)}
  function start(){
    load();scan(document.body);
    new MutationObserver(function(ms){
      ms.forEach(function(m){for(var i=0;i<m.addedNodes.length;i++)q.push(m.addedNodes[i])});
      if(!t)t=requestAnimationFrame(flush);
    }).observe(document.body,{childList:true,subtree:true});
  }
  if(document.body)start();else document.addEventListener('DOMContentLoaded',start);
})();

}catch(e){console.error("[ujlog] v81-btn-align-js",e)}
/* ==== v86-av ==== */
try{

/* v86 : la photo de profil remplace l'icône partout, en direct */
(function(){
  var IC='<svg viewBox="0 0 24 24" width="SZ" height="SZ" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>';
  window.UJ_AV=function(ph){
    ph=ph||'';window.UJ_AVPH=ph;try{UJ_PF()}catch(e){}
    try{MB[0].av=ph}catch(e){}
    try{typeof renderMy=='function'&&renderMy()}catch(e){}
    document.querySelectorAll('.v29pp,.mma,#pav,.igme .ih .av').forEach(function(n){
      n.style.background=ph?"url('"+ph+"') center/cover":'';
      if(ph)n.innerHTML='';
      else if(!n.querySelector('svg'))n.innerHTML=IC.replace(/SZ/g,n.classList.contains('v29pp')?34:24);
    });
    document.querySelectorAll('.v29h').forEach(function(h){h.dataset.k=''});
  };
  /* v91 : la photo de profil remplace aussi l'icône « Mon espace » de l'en-tête */
  var pfq=0;
  window.UJ_PF=function(){
    var ph=window.UJ_AVPH!==undefined?window.UJ_AVPH:String((window.UJX||{}).ph||'');
    document.querySelectorAll('.hd4 .ib.pf').forEach(function(b){
      var cur=b.dataset.ph||'';
      if(ph){
        if(cur===ph)return;
        if(!cur)b.dataset.orig=b.innerHTML;
        var i=document.createElement('img');i.className='pfph';i.alt='';i.src=ph;
        b.innerHTML='';b.appendChild(i);b.dataset.ph=ph;b.classList.add('hasph');
      }else if(cur){
        b.innerHTML=b.dataset.orig||'';b.dataset.ph='';b.classList.remove('hasph');
      }
    });
  };
  function pfSoon(){if(!pfq)pfq=requestAnimationFrame(function(){pfq=0;try{UJ_PF()}catch(e){}})}
  function pfStart(){new MutationObserver(pfSoon).observe(document.body,{childList:true,subtree:true});pfSoon()}
  if(document.body)pfStart();else document.addEventListener('DOMContentLoaded',pfStart);
})();

}catch(e){console.error("[ujlog] v86-av",e)}
/* ==== v86-av-end ==== */
try{

}catch(e){console.error("[ujlog] v86-av-end",e)}
/* ==== v87-sync ==== */
try{

/* v87 : synchronisation centrale — les champs [UFR], [Niveau], [NOM Prénom], [UJ-ID], [Bio…] se remplissent avec le profil, partout et en direct */
(function(){
  var RX=/\[(NOM Prénom|Nom Prénom|UJ-ID|UFR|Niveau|Filière|Bio, en une ligne)\]/g,T=[],busy=0,tm=0,obs;
  function vals(){
    var U=window.UJX||{},nom=String(U.nom||'').trim(),pre=String(U.pre||'').trim(),id='';
    try{id=window.UJID?String(UJID()||''):''}catch(e){}
    var cap=nom?nom.charAt(0).toUpperCase()+nom.slice(1).toLowerCase():'';
    return{'NOM Prénom':(nom.toUpperCase()+' '+pre).trim(),'Nom Prénom':(cap+' '+pre).trim(),'UJ-ID':id,'UFR':String(U.ufr||''),'Niveau':String(U.nv||''),'Filière':String(U.fi||''),'Bio, en une ligne':String(U.bio||'').trim()};
  }
  function fill(o,v){return o.replace(RX,function(m,k){return v[k]||m})}
  function scan(){
    tm=0;busy=1;
    try{
      var v=vals(),known=new Set(T.map(function(t){return t.n})),w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode&&n.parentNode.nodeName;return p==='SCRIPT'||p==='STYLE'||p==='TEXTAREA'?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n;
      while((n=w.nextNode())){if(!known.has(n)&&n.nodeValue.indexOf('[')>-1){RX.lastIndex=0;if(RX.test(n.nodeValue)){T.push({n:n,o:n.nodeValue,w:n.nodeValue});known.add(n)}}}
      RX.lastIndex=0;
      T=T.filter(function(t){
        if(!t.n.isConnected)return false;
        if(t.n.nodeValue!==t.w&&t.n.nodeValue!==t.o)return false; /* le texte a été réécrit par l'appli */
        var x=fill(t.o,v);if(t.n.nodeValue!==x)t.n.nodeValue=x;t.w=x;return true;
      });
    }catch(e){}
    if(obs)obs.takeRecords();busy=0;
  }
  function later(){if(!tm)tm=setTimeout(scan,250)}
  window.UJ_SYNC=function(){
    try{var U=window.UJX||{};window.UJ_AV&&UJ_AV(U.ph||'')}catch(e){}
    later();
  };
  function start(){
    obs=new MutationObserver(function(){if(!busy)later()});
    obs.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['class','hidden']});
    window.addEventListener('message',function(e){if(e.data&&(e.data.t=='ujvset'||e.data.t=='ujsave'))setTimeout(window.UJ_SYNC,300)});
    document.addEventListener('click',function(){setTimeout(later,120)},true);
    scan();
  }
  if(document.body)start();else document.addEventListener('DOMContentLoaded',start);
})();

}catch(e){console.error("[ujlog] v87-sync",e)}
/* ==== ujDbConfig ==== */
try{

/* ===== CONFIG BASE DE DONNÉES UJLoG (Supabase) =====
   Renseignez ici le nouveau backend UJLoG pour activer la console boutique. Tant que url/key sont vides, l'application et la Marketplace n'utilisent aucune base distante : la console s'ouvre en mode aperçu. */
window.UJ_DB={url:'https://upkabxtzgzbjpageeiia.supabase.co',key:'sb_publishable_-bkL4MSypS7MmsAEyIkP7g_Cq7cauKT'};

}catch(e){console.error("[ujlog] ujDbConfig",e)}
/* ==== v102MarketJs ==== */
try{

(()=>{
/* v102 · Marketplace = vitrine de Siam's Boutique (MA BOUTIQUE V46).
   Le code de la vitrine client (accueil, catégories, fiche article, panier, paiement, suivi de commande)
   est copié tel quel dans <script id="mkBoutiqueSrc"> et s'exécute dans la marketplace, branché sur les
   mêmes boutiques (Supabase) que l'ancienne boutique. */
const UJ=window.UJ_DB||{};const OWN=!!(UJ.url&&UJ.key);
const SB=OWN?UJ.url:'',KEY=OWN?UJ.key:'';
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fold=s=>String(s==null?'':s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const WMH='<span class="mk-wm"><span class="mk-wn">UJL<i>o</i>G</span><span class="mk-ws">Marketplace</span></span>';
const CHV='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
const SRCH='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>';
const TICK='<svg class="mk-tick" viewBox="0 0 24 24" aria-label="Boutique vérifiée" role="img"><circle cx="12" cy="12" r="11" fill="#1D9BF0"/><path d="m7.4 12.4 3 3 6.2-6.6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const PAL=['#E11D48','#2563EB','#0891B2','#F97316','#475569','#0F766E','#7C3AED','#15803D'];
const TYPES={'vente-ligne':'Boutique en ligne','restauration':'Restauration'};
const ini=n=>String(n||'').split(/\s+/).filter(w=>/^[A-Za-zÀ-ÿ0-9]/.test(w)).slice(0,2).map(w=>w[0]).join('').toUpperCase()||'B';
const hue=n=>{let h=0;for(const c of String(n||''))h=(h*31+c.charCodeAt(0))>>>0;return PAL[h%PAL.length]};
const logo=(s,z)=>s.photo_url?'<img class="mk-sl" style="width:'+z+'px;height:'+z+'px;object-fit:cover" src="'+esc(s.photo_url)+'" alt="" loading="lazy">':'<span class="mk-sl" style="--c:'+hue(s.name)+';width:'+z+'px;height:'+z+'px;font-size:'+Math.round(z*.38)+'px" aria-hidden="true">'+esc(ini(s.name))+'</span>';
const toast=t=>{document.getElementById('ujToast')?.remove();const d=document.createElement('div');d.id='ujToast';d.textContent=t;d.style.cssText='position:fixed;left:50%;bottom:90px;transform:translateX(-50%);z-index:100003;max-width:84vw;padding:12px 18px;border-radius:14px;background:#0B1630;color:#fff;font:600 13.5px/1.4 system-ui;text-align:center';document.body.appendChild(d);setTimeout(()=>d.remove(),2400)};

const SRC={};
const getSrc=(id)=>{id=id||'mkBoutiqueSrc';if(SRC[id]==null){const n=(window.__MKTXT||{})[id];SRC[id]=(n||'').replace(/<@@S@@\/script/g,'<'+'/script').replace(/<@@C@@!--/g,'<'+'!--');if(id==='mkBoutiqueSrc'){SRC[id]=SRC[id].replace('</head>','<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&family=Figtree:wght@400;500;600;700;800&display=swap"><style id="ujGreen">:root{--ink:#0B1630;--indigo:#15803D;--indigo-dark:#0F6B31;--indigo-tint:#E4F5EA;--cyan:#3DBE6A;--mango:#15803D;--mango-dark:#0F6B31;--mango-tint:#E4F5EA;--siams-orange:#15803D;--siams-orange-dark:#0F6B31;--text:#0B1630;--action:#15803D;--action-dark:#0F6B31;--action-tint:#E4F5EA;--action-shadow:rgba(21,128,61,.38);--accent-1:#0F6B31;--accent-2:#15803D}#bottom-nav{display:none!important}html body,html body *:not(svg):not(path):not([class*=mono]){font-family:"Figtree",system-ui,sans-serif!important}html body h1,html body h2,html body h3,html body .t,html body .jm-hd,html body .page-title,html body .home-section-row h3{font-family:"Bricolage Grotesque","Figtree",system-ui,sans-serif!important;letter-spacing:-.01em}html[data-theme=dark]{filter:invert(1) hue-rotate(180deg)}html[data-theme=dark] body{background:var(--paper,#fff)}html[data-theme=dark] img,html[data-theme=dark] video,html[data-theme=dark] canvas,html[data-theme=dark] .leaflet-container,html[data-theme=dark] [style*=background-image],html[data-theme=dark] .jm-hd.fl,html[data-theme=dark] .jm-ban,html[data-theme=dark] .jm-av{filter:invert(1) hue-rotate(180deg)}</style></head>').replace('content="#0B0E17"','content="#0B1630"')}}return SRC[id]};
const st={root:null};
window.addEventListener('message',e=>{
 const d=e.data;if(!d||!d.ujmk||!st.root)return;
 if(![].some.call(st.root.querySelectorAll('iframe'),f=>f.contentWindow===e.source))return;
 if(d.ujmk==='store')return openStore(String(d.slug||''),String(d.name||''),d.id?String(d.id):null);
 if(d.ujmk==='checkout'){const l=(Array.isArray(d.queue)?d.queue:[]).filter(x=>x&&x.slug).map(x=>({slug:String(x.slug),name:String(x.name||'Boutique')}));if(!l.length)return;st.q={list:l,i:0};return qOpen(0)}
 if(d.ujmk==='next'){if(st.q&&st.q.i+1<st.q.list.length)qOpen(st.q.i+1);return}
 if(d.ujmk==='qdone')return back();
 if(d.ujmk==='simexit')return back();
 if(d.ujmk==='plans'){back();return partSheet(true)}
 
});
/* Profil étudiant UJLoG transmis à la marketplace : plus de compte à créer pour commander */
const me=()=>{try{const U=window.UJX||{};const nom=String(U.nom||'').trim(),pre=String(U.pre||'').trim(),name=(pre+' '+nom).trim();let id='';try{id=String((window.UJID?window.UJID():U.id)||'')}catch(e){}
 return (name||U.tel||id)?{id:id,nom:nom,pre:pre,name:name,tel:String(U.tel||''),em:String(U.em||''),ufr:String(U.ufr||''),nv:String(U.nv||'')}:null}catch(e){return null}};
const UJNAV='<style id="ujNavApp">html body #client-nav.client-nav{position:fixed!important;left:14px!important;right:14px!important;bottom:calc(14px + env(safe-area-inset-bottom,0px))!important;transform:none!important;width:auto!important;max-width:452px!important;margin:0 auto!important;height:58px!important;padding:4px!important;gap:0!important;border-radius:29px!important;border:1px solid rgba(255,255,255,.6)!important;background:rgba(255,255,255,.9)!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 8px 26px rgba(11,22,48,.22)!important;align-items:stretch!important;z-index:50}:root[data-theme=dark] body #client-nav.client-nav{background:rgba(15,24,48,.9)!important;border-color:rgba(255,255,255,.12)!important}html body #client-nav .nav-item,html body #client-nav .nav-item.active{flex:1!important;min-height:0!important;height:auto!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:1px!important;padding:0!important;border-radius:23px!important;background:transparent!important;box-shadow:none!important;color:var(--text-soft,#5A6580)!important}html body #client-nav .nav-item.active{color:var(--text,#0B1630)!important}html body #client-nav .nav-indicator{display:none!important}html body #client-nav .nav-item svg{width:22px!important;height:22px!important;transform:none!important}html body #client-nav .nav-item .nav-label{font-size:10px!important;font-weight:600!important}html body #client-nav .nav-item.active .nav-label{font-weight:800!important}html body #client-nav .cn-badge{top:5px!important;right:calc(50% - 20px)!important}</style>';
const MKFIX='<style>html[data-mkh="1"] #home-empty,html[data-mkh="1"] #shop-empty,html[data-mkh="1"] [id^="shop-empty__"],html[data-mkh="1"] [id^="home-empty__"]{display:none!important}html[data-mkm="1"] #sheet,html[data-mkm="1"] #overlay,html[data-mkm="1"] .sheet,html[data-mkm="1"] .menu-item{display:none!important}</style>';
function frame(box,o){
 const f=document.createElement('iframe');f.className='mk-if';f.title=o.title||'Boutique';
 if(o.slug)f.dataset.slug=o.slug;if(o.market)f.dataset.market='1';if(o.sell)f.dataset.sell='1';if(o.product)f.dataset.product=o.product;
 f.setAttribute('allow','geolocation; camera; clipboard-write; fullscreen');
 box.querySelector('.mk-load')?.remove();const ld=document.createElement('div');ld.className='mk-load';ld.setAttribute('role','status');ld.innerHTML='<span class="mk-spin"></span>';box.appendChild(ld);f.style.visibility='hidden';let tk=0;const fin=()=>{clearInterval(iv);f.style.visibility='';ld.remove()};const iv=setInterval(()=>{tk++;try{const r=f.contentDocument&&f.contentDocument.getElementById('page-root');if((r&&r.children.length)||tk>75)fin()}catch(e){if(tk>75)fin()}},120);
 const cfg={market:!!o.market,slug:o.slug||null,product:o.product||null,q:o.q||null,u:me(),dark:dk(),sim:!!o.sell};
 const __mk=()=>{const html=getSrc(o.sell?'mkConsoleSrc':null).replace('</head>',UJNAV+MKFIX+'</head>').replace('<head>','<head><script>window.__UJCFG='+JSON.stringify(cfg).replace(/</g,'\\u003c')+';document.documentElement.setAttribute("data-theme",window.__UJCFG.dark?"dark":"light");document.documentElement.setAttribute("data-mkh",(window.__UJCFG.sim||(window.__UJCFG.market&&!window.__UJCFG.slug))?"1":"");document.documentElement.setAttribute("data-mkm",window.__UJCFG.sim?"":"1");</'+'script>');f.srcdoc=html};box.appendChild(f);__mkLoad(o.sell?'mkConsoleSrc':'mkBoutiqueSrc').then(__mk,()=>{try{f.remove()}catch(e){}});return f;
}
function qOpen(i){const q=st.q;if(!q||!q.list[i])return;q.i=i;const s=q.list[i],nx=q.list[i+1];openStore(s.slug,s.name,null,false,{pos:i+1,total:q.list.length,next:nx?nx.name:''})}
function openStore(slug,name,product,sell,q){
 const r=st.root;if(!r||(!slug&&!sell))return;
 const ov=r.querySelector('.mk-ov');
 ov.innerHTML='';
 frame(ov,{slug:slug,product:product,sell:sell,title:name,q:q||null});
 r.classList.add('inshop');if(sell)r.classList.add('insell-auth');r.querySelector('.mk-ttl').textContent=(name||'Boutique')+(q?' · commande '+q.pos+'/'+q.total:'');
}
function back(){
 const r=st.root;if(!r)return;
 if(r.classList.contains('inshop')){r.querySelector('.mk-ov').innerHTML='';r.classList.remove('inshop');r.classList.remove('insell-auth');st.q=null;try{const mf=r.querySelector('.mk-fr>iframe');mf&&mf.contentWindow.postMessage({ujmk:'refresh',u:me()},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(e){}r.querySelector('.mk-ttl').innerHTML=WMH;return}
 close();
}
function close(){st.root&&st.root.remove();st.root=null}
window.addEventListener('message',function(e){try{var d=e.data;if(d&&d.ujmk==='route'&&st.root&&st.root.classList.contains('inshop')){var AUTH=/^(register|login|activation-code|verify-otp|account-contract|account-contract-read|account-contract-notice|account-id|business-type)$/.test(d.name);st.root.classList.toggle('insell-auth',AUTH&&!!st.root.querySelector('.mk-ov iframe[data-sell]'))}}catch(x){}});

const dk=()=>{const t=document.documentElement.dataset.theme;return t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)};
function pushTheme(){const r=st.root;if(!r)return;const d=dk();r.classList.toggle('dk',d);r.querySelectorAll('iframe').forEach(f=>{try{f.contentWindow.postMessage({ujmk:'theme',dark:d},(location.origin==String(null)?String.fromCharCode(42):location.origin))}catch(e){}})}
try{new MutationObserver(pushTheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});matchMedia('(prefers-color-scheme: dark)').addEventListener('change',pushTheme)}catch(e){}
function act(t){
 const a=t.dataset.a;
 if(a=='close')return back();
 if(a=='sell')return partSheet();
}
function open(){
 document.getElementById('mkOv')?.remove();st.root&&st.root.remove();
 const r=document.createElement('div');r.id='mkV';r.setAttribute('role','dialog');r.setAttribute('aria-label','Marketplace');st.root=r;
 const lg0='<span class="mk-lg"><img alt="" src="data:image/webp;base64,UklGRgQDAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSGgAAAABcOS2jSTp/5/2qbuSlHr2JSImgNpsytRsPSCCPZFsiGZZRGsiWxDdpQgvRPlSIn0i2gcRv4io3wWRvwPy9//nR+y4A3DjLsCMi8CLYyvOOnEpGLHqw7oNpSZUe1BvQasB/XsxdRdqAVZQOCB2AgAA8A8AnQEqYABgAD5tMpNHJCMhoS1TOGCADYliANG5yD6f85xw/ZPwEHXoy8RDpHeYDdAOlE/mfqAdJd+5uEIfzNDKvGC3w3AYcIeb5mTkWbUURwk+ze2xhW+CV96/mPhnGK8SOiV7RX0JZ5TTulHPHvFRW8xg1KkA/THtTLtgJNrp8fbbgyWdsAD+vyiY/8XDGMv/ZR2vmSxDJ1qLV+3vx0ZAB+hJsi38kZIOD/3SXdFbmRtj5I3FFP98X+yRlVXAWkJTqZ7jsRXwseOQ6iObf2rr7lVQ8gWgAA73vNUlnRE71G1cr3V5Y9Jb8Pe/1OADmrmwoKO0t65qKgHsOa4B3BzAEu55EmFi3fNeBc1exlrcIMERZBTdoFdZJJIZ/ZSfNvBFscHh1knZ/MsdRyEEqvmcRhx3p7HOi1yFWvKcaRsIlJPcm15pg3mm+fPREDH+8bfvk/SX3jwRYz0YZdBi5sfecd3pekQ1XeBhO2aMuN5leDHfHm7bnVW+ThXJ8DegXYOzi3ljfoPQJpHB91zsduEFufBYJV7+4YbJSt3VOHxppynsGaCOvgLKTZ486gMmVQPP7A5b4MY6b/qp8s2FLHx79wLTj3t5ssbN/wUv9VmYJyKvSKtafYOF6PXm/xeyFGuxA8cbMRWIoXorUco3lnmCzru6PQtSJYbA6HqJ6KzuyiEyIi1eCScXBmTnhkAsXr3iicHkcWFJ0AFzsh10duwEPKf7/4uiRkQNwRCxBwxmgABWDhS39j0jJoU5XR4JZHQLHhh6Qbh7dVy/vxe9CRDpgqYLpuAowACD9rRaaAVWuR/Yvew4bDwfZQk5z4StRQ6x2AAA" style="width:30px;height:30px;border-radius:9px;display:block"></span>';const WM=WMH;const bag=document.querySelector('.hd4 .ib.mkbtn .mkbag');const lg=bag?'<span class="mk-lg">'+bag.outerHTML+'</span>':lg0;
 r.innerHTML='<div class="mk-bar"><button class="mk-ib" data-a="close" aria-label="Retour">'+CHV+'</button>'+lg+'<b class="mk-ttl">'+WM+'</b><button class="mk-sell" data-a="sell">Partenaire</button></div>'
  +'<div class="mk-fr"><div class="mk-ov"></div></div>';
 r.addEventListener('click',e=>{const t=e.target.closest('[data-a]');if(t&&r.contains(t))act(t)});
 r.addEventListener('keydown',e=>{if(e.key=='Escape')back()});
 document.body.appendChild(r);r.classList.toggle('dk',dk());
 frame(r.querySelector('.mk-fr'),{market:true,title:'Marketplace'});
}
/* v113 · Vendre un article (annonce d'étudiant) */
const KEY_A='ujmk_annonces',CATS=['Livres et cours','Téléphones et accessoires','Vêtements','Informatique','Logement et meubles','Nourriture','Services','Autre'];
const sty=document.createElement('style');sty.textContent='#mkSell{position:absolute;inset:0;z-index:5;overflow:auto;background:#fff;color:#111;padding:16px 16px 40px;font:15px/1.4 system-ui,sans-serif}#mkV.dk #mkSell{background:#12161c;color:#eef1f5}#mkSell h2{font-size:20px;margin:0 0 4px}#mkSell p{margin:0 0 14px;color:#667}#mkSell label{display:block;font-weight:700;font-size:13px;margin:12px 0 5px}#mkSell input,#mkSell select,#mkSell textarea{width:100%;box-sizing:border-box;border:1.5px solid #d9dde3;border-radius:12px;padding:11px 12px;font:inherit;background:transparent;color:inherit}#mkSell textarea{min-height:84px}#mkSell .r2{display:grid;grid-template-columns:1fr 1fr;gap:10px}#mkSell .ph{display:flex;gap:8px;flex-wrap:wrap}#mkSell .ph img{width:72px;height:72px;object-fit:cover;border-radius:10px}#mkSell .ad{width:72px;height:72px;border:1.5px dashed #9aa3b0;border-radius:10px;display:grid;place-items:center;font-size:26px;color:#667}#mkSell .go{width:100%;margin-top:18px;border:0;border-radius:12px;padding:14px;background:#15803D;color:#fff;font:700 16px inherit}#mkSell .cl{float:right;border:0;background:none;font-size:26px;color:inherit}#mkSell .it{display:flex;gap:10px;align-items:center;padding:10px 0;border-top:1px solid #e3e6eb}#mkSell .it img{width:48px;height:48px;border-radius:8px;object-fit:cover;background:#e5e7eb}#mkSell .it div{flex:1;min-width:0}#mkSell .it small{display:block;color:#667}#mkSell .it button{border:0;background:none;color:#c0392b;font-weight:700}#mkSell .sh{margin-top:16px;background:none;border:0;color:#15803D;font-weight:700;padding:0}';document.head.appendChild(sty);
const rd=()=>{try{return JSON.parse(localStorage.getItem(KEY_A)||'[]')}catch(e){return[]}},wr=l=>{try{localStorage.setItem(KEY_A,JSON.stringify(l))}catch(e){toast('Mémoire pleine : retirez une annonce')}};
const shrink=f=>new Promise(ok=>{const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const k=Math.min(1,640/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=i.width*k;c.height=i.height*k;c.getContext('2d').drawImage(i,0,0,c.width,c.height);ok(c.toDataURL('image/jpeg',.75))};i.onerror=()=>ok('');i.src=r.result};r.onerror=()=>ok('');r.readAsDataURL(f)});
function sellSheet(){const r=st.root;if(!r)return;r.querySelector('#mkSell')?.remove();const u=me()||{};let ph=[];const d=document.createElement('div');d.id='mkSell';
 const draw=()=>{const L=rd();d.innerHTML='<button class="cl" data-s="x" aria-label="Fermer">×</button><h2>Vendre un article</h2><p>Votre annonce est publiée après validation par un responsable.</p><label>Photos (3 maximum)</label><div class="ph">'+ph.map(x=>'<img alt="" src="'+x+'">').join('')+(ph.length<3?'<label class="ad" style="margin:0">+<input type="file" accept="image/*" hidden data-s="f"></label>':'')+'</div><label>Titre</label><input id="sT" maxlength="70" placeholder="Ex. Calculatrice Casio fx-92"><div class="r2"><div><label>Prix (FCFA)</label><input id="sP" inputmode="numeric" placeholder="5000"></div><div><label>État</label><select id="sE"><option>Neuf</option><option selected>Bon état</option><option>Usé</option></select></div></div><label>Catégorie</label><select id="sC">'+CATS.map(c=>'<option>'+esc(c)+'</option>').join('')+'</select><label>Description</label><textarea id="sD" maxlength="400" placeholder="Détails utiles pour l’acheteur"></textarea><label>Téléphone</label><input id="sH" inputmode="tel" value="'+esc(u.tel||'')+'" placeholder="07 00 00 00 00"><button class="go" data-s="ok">Envoyer pour validation</button>'+(L.length?'<h2 style="margin-top:26px;font-size:17px">Mes annonces</h2>'+L.map((a,i)=>'<div class="it"><img alt="" src="'+(a.ph&&a.ph[0]||'')+'"><div><b>'+esc(a.t)+'</b><small>'+esc(a.p)+' F · En attente de validation</small></div><button data-s="del" data-i="'+i+'">Retirer</button></div>').join(''):'')+(OWN?'<button class="sh" data-s="shop">Ouvrir une boutique complète</button>':'')};
 draw();r.appendChild(d);
 d.addEventListener('change',async e=>{if(e.target.dataset.s!=='f'||!e.target.files[0])return;const v=await shrink(e.target.files[0]);if(v){const k={t:d.querySelector('#sT').value,p:d.querySelector('#sP').value,h:d.querySelector('#sH').value,c:d.querySelector('#sC').value,d:d.querySelector('#sD').value};ph.push(v);draw();d.querySelector('#sT').value=k.t;d.querySelector('#sP').value=k.p;d.querySelector('#sH').value=k.h;d.querySelector('#sC').value=k.c;d.querySelector('#sD').value=k.d}});
 d.addEventListener('click',e=>{const b=e.target.closest('[data-s]');if(!b)return;const a=b.dataset.s;if(a==='x')return d.remove();if(a==='shop'){d.remove();return partSheet()}
  if(a==='del'){const L=rd();L.splice(+b.dataset.i,1);wr(L);const k=d.scrollTop;draw();d.scrollTop=k;return}
  if(a==='ok'){const t=d.querySelector('#sT').value.trim(),p=d.querySelector('#sP').value.replace(/\D/g,''),h=d.querySelector('#sH').value.trim();if(!t||!p||Number(p)<=0||h.length<8){toast('Renseignez le titre, un prix et un téléphone valide');return}
   const L=rd();L.unshift({t:t,p:p,h:h,c:d.querySelector('#sC').value,e:d.querySelector('#sE').value,d:d.querySelector('#sD').value.trim(),ph:ph,u:u.id||'',at:Date.now()});wr(L);ph=[];toast('Annonce envoyée · un responsable va la valider');draw();d.scrollTop=0}})}

/* v116 · Console partenaire : abonnement Standard / Pro (stockage local, sans l'ancienne base) */
const PK='ujmk_partner_v1',DAY=86400000,OPS=['Orange Money','Wave'];
const PLANS={
 standard:{n:'Standard',tag:'Lancez votre boutique',hl:['15 articles publiés','2 photos par article','Photo de profil et couverture'],price:1000,max:15,photos:2,f:['Jusqu’à 15 articles publiés','2 photos par article','Badge « Boutique vérifiée »','Photo de profil et couverture de la boutique','Page boutique dans la Marketplace']},
 pro:{n:'Pro',tag:'Développez votre activité',hl:['Articles illimités','5 photos par article','Prix barré et promotions','Mise en vedette des articles'],price:2000,max:Infinity,photos:5,f:['Articles illimités','Jusqu’à 5 photos par article','Badge « Boutique certifiée »','Prix barré et promotions','Mise en vedette des articles']}
};
const ROS=(()=>{let d='';for(let i=0;i<=160;i++){const t=i/160*Math.PI*2,r=10.5+1*Math.cos(10*t);d+=(i?'L':'M')+(12+r*Math.cos(t)).toFixed(2)+' '+(12+r*Math.sin(t)).toFixed(2)}return d+'Z'})();
const SEAL=(id,c1,c2,lab,ring)=>`<svg class="pt-seal" viewBox="0 0 24 24" role="img" aria-label="${lab}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><path d="${ROS}" fill="url(#${id})"/>${ring?'<circle cx="12" cy="12" r="7.9" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width=".6"/>':''}<path d="m7.7 12.3 3 3 5.7-6.1" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const VER=SEAL('pgV','#5CBBFF','#1877F2','Boutique vérifiée',false),CERT=SEAL('pgC','#FFD24D','#D98E04','Boutique certifiée',true);
const CK='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
const pget=()=>{let s=null;try{s=JSON.parse(localStorage.getItem(PK)||'null')}catch(e){}s=s||{};s.shop=s.shop||{};s.items=Array.isArray(s.items)?s.items:[];s.sub=s.sub||null;if(s.sub&&!(s.sub.ref&&!/^(DEMO|TEST|SIM)/i.test(String(s.sub.ref))))s.sub=null;return s};
const pset=s=>{try{localStorage.setItem(PK,JSON.stringify(s));return true}catch(e){toast('Mémoire pleine : retirez une photo');return false}};
const subOk=s=>!!(s.sub&&s.sub.exp>Date.now());
const planOf=s=>subOk(s)?PLANS[s.sub.plan]:null;
const fmt=n=>String(Math.round(Number(n)||0)).replace(/\B(?=(\d{3})+(?!\d))/g,' ')+' FCFA';
const dt=t=>new Date(t).toLocaleDateString('fr-FR');
const shrink2=(f,max,q)=>new Promise(ok=>{const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=Math.round(i.width*k);c.height=Math.round(i.height*k);c.getContext('2d').drawImage(i,0,0,c.width,c.height);ok(c.toDataURL('image/jpeg',q))};i.onerror=()=>ok('');i.src=r.result};r.onerror=()=>ok('');r.readAsDataURL(f)});
/* ───────── PAIEMENT · point de branchement de l'agrégateur ─────────
   Contrat attendu (à fournir via window.UJPAY avant ce script, ou en remplaçant PAY ci-dessous) :
     create(order) -> Promise<{ref}>            lance la demande de paiement
     check(ref)    -> Promise<{status:'pending'|'success'|'failed', reason?}>
   order = {orderId, amount, currency:'XOF', plan, operator:'orange|wave', phone:'+2250700000000', description}
   IMPORTANT : le simulateur de paiement est neutralisé dans cette version. Le raccordement
   doit passer par Supabase Edge Functions. La clé secrète GeniusPay ne doit JAMAIS figurer
   dans ce fichier et l'abonnement ne doit être confirmé que par le serveur après webhook signé. */
const digits=x=>String(x||'').replace(/\D/g,'');
const PERR=(code,msg)=>Object.assign(new Error(msg||''),{code});
const PAYURL=OWN?(String(UJ.url).replace(/\/+$/,'')+'/functions/v1'):'',PAYKEY=OWN?UJ.key:'';
const gpCall=async(fn,body)=>{if(!PAYURL||!PAYKEY)throw PERR('unavailable','Le paiement sera activé après la configuration de la base UJLoG.');let r,j={};
 try{r=await fetch(PAYURL+'/'+fn,{method:'POST',headers:{'Content-Type':'application/json',apikey:PAYKEY,Authorization:'Bearer '+PAYKEY},body:JSON.stringify(body)})}catch(e){throw PERR('network')}
 try{j=await r.json()}catch(e){}
 if(r.status===404||r.status===503)throw PERR('unavailable');
 if(!r.ok)throw PERR(j.code||'failed',j.message);
 return j};
const DEMO_PAY={demo:false,create:o=>gpCall('geniuspay-create',o),check:ref=>gpCall('geniuspay-status',{ref})};
const PAY=Object.assign({country:{code:'+225',len:10},operators:[
 {id:'orange',name:'Orange Money',img:'data:image/webp;base64,UklGRmoFAABXRUJQVlA4IF4FAABwIQCdASqQAJAAPm02l0ikIyIhIhmZ4IANiWdu4XSZeBwx27TYZAFiA/gHMUdQDzAfrN+nPCAfuB1nPoAeWN+2PwR/t/+0HsoZgB2Yf1zlH/a3OL/Yb7Z+YHIDvEf5D/ad8W49/PP813OXoR9Xf8l+FfwU/nP9v/M7mBqAH5n/539m91P+d/ZHzv/S/+x9wT+Yf0n/Ydij0bBkXwCz+mEL4BZ/TCF8AJyiy3Mn14Zfzn9B5UzSCZdANI9xWgy1F/27oGcbi2MPu4Wv6arpyyhMdOBj3znjL1OJy+tK4KK4IsiUPhLhzkOVQsARbz0n4fEpM0lQRK56N+c1JuYmI1P3nbN43EusiqjgFn9MIXwCz+mD8AAA/v+s8ACVY67MXXQ7OrslYwpltxJn9C2hUqBbDqeIpReegRBogSx3X5sGCHzfwCQoV10j+QtWFAe0+tMkcAFXeZegOdJfUol4fr/rcdXBw1aWSkoXW9bDamYkeQ0pYcj+oTp+bDFf+1gE0pfdYvZEt+mDmbgk640/hcaUtVubH7/8PG1y0ou7Q6m9PsKaeifqwHqgzvqVESV9XI9CcJIl7V/X08Trtfr+//iXdoDFa2331zj/aFbOpA/j+dCqlhHSY72cm5uwCPoLhwHwuMZaupZxnAYePZp0qPz/+ZVi/ug8UOt6jGXOszKEHj6lvFEj7n9I3y7T3y4frysyVdMHvT5Rr9Zv5GWd2VZgW1omtovQoHfoMPP2EM9jhmfcqIPPYol/ybkF/ENd36aOeTvpldTcgpsAy3Kvj8BGygUfCtv8k3J8PmhoTGE/hIf+Sa69bZp9Sn+g6M/pNswYpA5Q/kYYuXoaksxtTR0H/2J4BN3QIgWEDHd1+3W5NyugxE2DlCfOQEj347u6Wh/k99dbEj0Zb+CDXIT/5/Sl3tQuQnyy3t5wNFOW6ISuwNf+L/DczR85dcmF5/7rapzBGPFeWyLReh4iv0wRzzQQHLo3QHJIJS1Bz7nx4vZK/KoLl1k/SnGq4n/Fl1v/ucdMW24K3uf/7xFNxWfB4AbttV9ODvTVS0ILssHK6z++uOV8dIj+2Od62ZYCBa+YxTiscARs/5Af/6n06H6UvlJGd3OMYPZi71L+tUfHUYgH4zxPtjA+dKKmSldxj0kqievdMizG9GDrj+RKepVSFzh37VL08tnvcq4q087w/n9IZcTyMw86/gYCY170OuefcHH8BdqHDV18sX7cNeII6mg++DlEhc5Bc++daTnkAbo0EOJt2C2Dv8S1wx56uWSGciUtZwjRnmUJHgZjV/yhR+TPE2U2otWZqh/x4eMqH/YSuw1tpLHoCh83RRLm6yw9NNQQTHKo5PC6q1m/fkF2QPJLhhmVfzf5oTmcBEjR9SJ6BgF/YRsH8yygc1XR+ClyDfaZ7/mH29TGQVEXSlVzzvzMuVvjLv+pheOPqyCtleMVS64zwrE20CP4D/pCwX+8/evWKfw+zPXqFUc5lYbVE+LoeDGDJPjJhkAS9/CLJa/Rn34mp/MiI0ERvDG5r9OFVcajueo17VI9UxFamouyN56/mZveS38Rv1cu8mR3gAoHWPqg8bYK5p0hROnEWE3v4G9nLvGscp1IKcBpcttkz/X1wQYdtg5h1tyOaa0XIabN/nNULGyzrUSAYPojC72Zy2tinHYUJ3cvxD+q357aoCdIYwYHa0vayxR3Z1+Va2AtX1JVgXl/UV/TTlyoRP6lKzEWUyWZlrQ349Mt1pdJ5eXY/o+SfJcl9w8Q+YaQ28f2fquOqeKKvEZ9o94LzJgL2LNJH2KlWj7vRYUuNmW0L7r//KfpGHWATGvz3iAAAAA=',c:'#000',t:'#fff'},
 {id:'wave',name:'Wave',img:'data:image/webp;base64,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',c:'#1DC8F2',t:'#06323d'},
 {id:'mtn',name:'MTN Mobile Money',img:'data:image/webp;base64,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',c:'#FFCC00',t:'#000'},
 {id:'moov',name:'Moov Money',img:'assets/2585e53dad3e.webp',c:'#0A56B7',t:'#fff'},
 {id:'card',name:'Carte prépayée',short:'Carte',c:'#7C5CFF',t:'#fff',card:1}]},DEMO_PAY,window.UJPAY||{});
const fmtTel=x=>digits(x).slice(0,PAY.country.len).replace(/(\d{2})(?=\d)/g,'$1 ');
const psty=document.createElement('style');psty.textContent=`
#mkPart{--pb:#F4F6FA;--pc:#fff;--pi:#0B1630;--pm:#5A6580;--pl:#E3E8F1;--pg:#15803D;position:absolute;inset:0;z-index:5;overflow:auto;background:var(--pb);color:var(--pi);font:15px/1.4 var(--b,system-ui),system-ui,sans-serif}
#mkV.dk #mkPart{--pb:#0E1116;--pc:#181C23;--pi:#F1F4F9;--pm:#9AA4B5;--pl:#262C37;--pg:#3DBE6A}
#mkPart *{box-sizing:border-box}
#mkPart button{font-family:inherit;cursor:pointer;border:0;-webkit-tap-highlight-color:transparent}
.pt-bar{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:10px;padding:calc(10px + env(safe-area-inset-top,0px)) 14px 10px;background:var(--pc);border-bottom:1px solid var(--pl)}
.pt-bar b{font:800 18px var(--h,system-ui)}
.pt-ib{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:var(--pb);color:var(--pi)}
.pt-sc{padding:16px 16px calc(40px + env(safe-area-inset-bottom,0px))}
.pt-sc h2{margin:0 0 6px;font:800 22px/1.2 var(--h,system-ui);letter-spacing:-.01em}
.pt-sc h3{margin:24px 0 8px;font:800 17px var(--h,system-ui)}
.pt-mu{margin:0 0 14px;color:var(--pm);font-size:14px}
.pt-note{margin:12px 0;padding:11px 12px;border-radius:12px;background:color-mix(in srgb,#F59E0B 14%,var(--pc));border:1px solid color-mix(in srgb,#F59E0B 40%,transparent);font-size:13px;line-height:1.45}
.pt-note .pt-lk{display:inline;margin:0;padding:0}
.pt-plan{position:relative;margin-top:14px;padding:16px;border-radius:20px;background:var(--pc);border:1.5px solid var(--pl)}
.pt-plan.pro{border-color:#15803D;box-shadow:0 12px 26px -16px rgba(21,128,61,.6)}
.pt-rb{position:absolute;top:-10px;right:14px;padding:3px 10px;border-radius:999px;background:#15803D;color:#fff;font:800 11px var(--b,system-ui);font-style:normal}
.pt-ph{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
.pt-ph b{font:800 19px var(--h,system-ui)}.pt-ph strong{font:800 21px var(--h,system-ui);color:var(--pg);white-space:nowrap}.pt-ph span{font-size:13px;color:var(--pm)}
.pt-plan ul{list-style:none;margin:12px 0 14px;padding:0;display:flex;flex-direction:column;gap:8px}
.pt-plan li{display:flex;gap:8px;align-items:flex-start;font-size:14px}.pt-plan li svg{flex:none;margin-top:2px;color:var(--pg)}
.pt-go{width:100%;height:48px;border-radius:999px;background:#15803D;color:#fff;font:800 15px var(--b,system-ui)}
.pt-go.alt{background:var(--pc);color:var(--pg);border:1.5px solid var(--pg)!important}
.pt-lk{display:block;margin:16px auto 0;padding:6px;background:none;color:var(--pg);font:700 13.5px var(--b,system-ui);text-align:center}
.pt-sum{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px;border-radius:16px;background:var(--pc);border:1.5px solid var(--pl)}.pt-sum b{font:800 18px var(--h,system-ui);color:var(--pg);white-space:nowrap}
.pt-l{display:block;margin:16px 0 6px;font-weight:700;font-size:13px}
#mkPart input:not([type=file]):not([type=checkbox]),#mkPart select,#mkPart textarea{width:100%;border:1.5px solid var(--pl);border-radius:12px;padding:11px 12px;font:inherit;background:var(--pc);color:inherit}
#mkPart textarea{min-height:90px;resize:vertical}
.pt-ops{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pt-op{padding:12px 8px;border-radius:12px;background:var(--pc);border:1.5px solid var(--pl)!important;color:var(--pi);font:700 13.5px var(--b,system-ui)}
.pt-op.on{border-color:#15803D!important;background:color-mix(in srgb,#15803D 12%,var(--pc));color:var(--pg)}
.pt-cv{height:130px;margin:0 -16px;background-size:cover;background-position:center}
.pt-id{display:flex;align-items:center;gap:12px;margin-top:-30px;position:relative}
.pt-id .mk-sl{border:3px solid var(--pb)}
.pt-id div{min-width:0;padding-top:26px}.pt-id b{display:flex;align-items:center;gap:5px;font:800 18px var(--h,system-ui)}.pt-id div span{font-size:12.5px;color:var(--pm)}
.pt-use{margin-top:16px;padding:12px 14px;border-radius:14px;background:var(--pc);border:1.5px solid var(--pl);font-size:14px}
.pt-use i{display:block;height:7px;margin-top:9px;border-radius:99px;background:var(--pl);overflow:hidden}.pt-use u{display:block;height:100%;background:#15803D;border-radius:99px}
.pt-act{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
.pt-up{display:flex;flex-direction:column;gap:6px;margin-top:14px;padding:14px;border-radius:16px;background:color-mix(in srgb,#15803D 10%,var(--pc));border:1.5px solid #15803D}.pt-up span{font-size:13px;color:var(--pm);margin-bottom:6px}
.pt-it{display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid var(--pl)}
.pt-it img,.pt-im{width:52px;height:52px;border-radius:10px;object-fit:cover;background:var(--pl);flex:none}
.pt-it div{flex:1;min-width:0}.pt-it b{display:block;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pt-it small{color:var(--pm);font-size:12.5px}.pt-it s{opacity:.7}
.pt-it button{background:none;color:var(--pg);font-weight:700;font-size:13px;padding:6px 4px}.pt-it button.dl{color:#C0392B}
.pt-empty{padding:22px 12px;text-align:center;border-radius:14px;border:1.5px dashed var(--pl);color:var(--pm);font-size:13.5px}
.pt-cvup{position:relative;display:grid;place-items:center;height:130px;margin:0 -16px;background-size:cover;background-position:center;background-color:var(--pl);cursor:pointer}
.pt-cvup span{padding:8px 14px;border-radius:999px;background:rgba(0,0,0,.55);color:#fff;font:700 13px var(--b,system-ui)}
.pt-avw{display:flex;align-items:center;gap:12px;margin-top:-34px;position:relative}.pt-avw small{margin-top:30px;color:var(--pm);font-weight:600}
.pt-avup{position:relative;display:block;cursor:pointer}.pt-avup .mk-sl{border:3px solid var(--pb)}
.pt-avup em{position:absolute;right:-2px;bottom:-2px;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:#15803D;color:#fff;font:800 16px/1 system-ui;font-style:normal;border:2px solid var(--pb)}
.pt-ph3{display:flex;gap:8px;flex-wrap:wrap}.pt-ph3 img{width:76px;height:76px;object-fit:cover;border-radius:12px}
.pt-add{width:76px;height:76px;border:1.5px dashed var(--pm);border-radius:12px;display:grid;place-items:center;font-size:26px;color:var(--pm);cursor:pointer}
.pt-r2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pt-lock{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;padding:12px;border-radius:12px;background:var(--pc);border:1.5px dashed var(--pl)!important;color:var(--pm);font:600 13.5px var(--b,system-ui);text-align:left}
.pt-tag{padding:2px 8px;border-radius:999px;background:#15803D;color:#fff;font:800 10.5px var(--b,system-ui);letter-spacing:.05em}
.pt-chk{display:flex;align-items:center;gap:10px;padding:12px;border-radius:12px;background:var(--pc);border:1.5px solid var(--pl);font-weight:600;font-size:14px}.pt-chk input{width:20px;height:20px;accent-color:#15803D}
.pt-bar b{font:700 17px var(--h,system-ui)}
.pt-sc h2{font:700 25px/1.15 var(--h,system-ui);letter-spacing:-.02em}
.pt-go{height:50px;border-radius:12px;font:700 15px var(--b,system-ui)}
.pt-pl .pt-mu{margin:0 0 18px;font-size:14px;line-height:1.5}
.pt-pc{position:relative;display:block;width:100%;margin-top:10px;padding:16px;border-radius:14px;background:var(--pc);border:1.5px solid var(--pl);text-align:left;color:inherit;cursor:pointer;transition:border-color .15s;-webkit-tap-highlight-color:transparent}
.pt-pc.on{border-color:var(--pi)}
.pt-pt{display:flex;align-items:flex-start;gap:12px}
.pt-rd{flex:none;width:20px;height:20px;margin-top:2px;border-radius:50%;border:1.5px solid var(--pm);display:grid;place-items:center}
.pt-pc.on .pt-rd{border-color:var(--pi);background:var(--pi)}.pt-pc.on .pt-rd:after{content:"";width:7px;height:7px;border-radius:50%;background:var(--pc)}
.pt-pn{flex:1;min-width:0}.pt-pn b{display:block;font:700 17px var(--h,system-ui)}.pt-pn small{display:block;margin-top:2px;color:var(--pm);font-size:13px}
.pt-pr{text-align:right;white-space:nowrap}.pt-pr strong{display:block;font:700 24px/1.1 var(--h,system-ui);letter-spacing:-.02em;color:var(--pi)}.pt-pr small{color:var(--pm);font-size:12px}
.pt-bdg{display:flex;align-items:center;gap:8px;margin:14px 0 0;padding:12px 0 0;border-top:1px solid var(--pl);background:none;border-radius:0;font:500 13px var(--b,system-ui);color:var(--pm)}.pt-bdg svg{width:18px;height:18px;flex:none}
.pt-sc .pt-h3{margin:28px 0 10px;font:700 15px var(--h,system-ui)}
.pt-cmp{border-radius:14px;overflow:hidden;background:var(--pc);border:1.5px solid var(--pl)}
.pt-cr{display:grid;grid-template-columns:1.5fr 1fr 1fr;align-items:stretch;padding:0;border-top:1px solid var(--pl);font-size:13.5px}
.pt-cr:first-child{border-top:0}
.pt-cr>span{display:flex;align-items:center;padding:12px 10px}
.pt-cr>span:first-child{padding-left:14px;color:var(--pm)}
.pt-cr>span:not(:first-child){justify-content:center;text-align:center;font-weight:600}
.pt-cr>span.on{background:color-mix(in srgb,var(--pi) 5%,transparent)}
.pt-cr.h>span{font-size:12px;font-weight:700;color:var(--pm);letter-spacing:.02em}.pt-cr.h>span.on{color:var(--pi)}
.pt-no{font-style:normal;color:var(--pm);opacity:.6}.pt-yes{display:inline-flex;color:var(--pg)}
.pt-lk{font-weight:600;color:var(--pm);text-decoration:underline;text-underline-offset:3px}
.pt-cta{position:sticky;bottom:0;z-index:3;padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));background:var(--pc);border-top:1px solid var(--pl)}
.pt-cta small{display:block;margin-top:8px;text-align:center;color:var(--pm);font-size:12px}
#mkPart .pt-sc h2{margin:0 0 8px}
#mkPart .pt-sc h3{margin:24px 0 8px}
#mkPart .pt-sc .pt-h3{margin:28px 0 10px}
#mkPart p.pt-mu{margin:0 0 18px}
.pt2-top{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:calc(12px + env(safe-area-inset-top,0px)) 16px 4px}
.pt2-xb{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:color-mix(in srgb,var(--pi) 8%,transparent);color:var(--pi)}
.pt2-pill{height:40px;padding:0 16px;border-radius:999px;background:color-mix(in srgb,var(--pi) 10%,var(--pc));color:var(--pi);font:700 13.5px var(--b,system-ui);border:1px solid color-mix(in srgb,var(--pi) 12%,transparent)!important}
.pt2-dh{background:linear-gradient(180deg,color-mix(in srgb,var(--g1) 42%,var(--pb)),var(--pb) 190px);margin-bottom:-6px}
.pt2-dh .pt2-top{position:static}
.pt2{padding-top:10px}
#mkPart .pt2 h1{margin:14px 0 8px;font:700 30px/1.12 var(--h,system-ui);letter-spacing:-.02em}
#mkPart .pt2 .pt2-sub{margin:0 0 6px;color:var(--pi);font-size:15.5px;line-height:1.4;font-weight:500}
#mkPart .pt2 .pt2-h{margin:30px 0 12px;font:600 17px var(--h,system-ui)}
#mkPart .pt2 .pt2-ch{margin:20px 0 14px;color:var(--pm);font-weight:600;font-size:15px}
#mkPart .pt2 .pt2-pr{margin:0;color:var(--pm);font-size:14px}
.pt2-li{display:flex;align-items:center;gap:14px;padding:16px 14px;margin-bottom:10px;border-radius:20px;border:1.5px solid var(--pl);background:var(--pb);cursor:pointer}
.pt2-li:active{background:color-mix(in srgb,var(--pi) 5%,var(--pb))}
.pt2-lt{flex:1;min-width:0}.pt2-lt b{display:block;font:600 16px var(--h,system-ui)}.pt2-lt small{display:block;margin-top:2px;color:var(--pm);font-size:14px;line-height:1.35}
.pt2-li>svg:last-child{color:var(--pm);flex:none}
.pt2-ic{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:50%;background:color-mix(in srgb,#15803D 14%,var(--pc));color:var(--pg)}
.pt2-pc{margin-bottom:14px;padding:22px 20px 20px;border-radius:26px;background:color-mix(in srgb,#1D9BF0 9%,var(--pc))}
.pt2-pc:nth-of-type(2){background:color-mix(in srgb,#1D9BF0 9%,var(--pc))}
.pt2-pn{display:block;font:700 18px var(--h,system-ui)}.pt2-pt{margin-top:12px;font:600 16px var(--b,system-ui)}.pt2-pp{margin-top:6px;color:var(--pm);font-size:14.5px}
.pt2-fl{display:grid;gap:14px;margin:22px 0}.pt2-fr{display:flex;align-items:center;gap:12px;font:600 15px/1.3 var(--b,system-ui)}.pt2-fr svg{flex:none;width:22px;height:22px}
.pt2-btn{display:block;width:100%;height:50px;border-radius:999px;background:color-mix(in srgb,var(--pi) 8%,transparent);color:#1D9BF0;font:700 16px var(--b,system-ui)}
#mkV.dk .pt2-btn{color:#5AB4F8}
.pt2-g{margin-bottom:14px;border-radius:20px;border:1.5px solid var(--pl);background:var(--pb);overflow:hidden}
.pt2-gh{display:flex;align-items:center;gap:12px;padding:15px 14px;font:600 16px var(--h,system-ui)}
.pt2-gr{display:flex;align-items:center;gap:12px;padding:15px 14px;border-top:1.5px solid var(--pl);font:500 15.5px/1.3 var(--b,system-ui)}.pt2-gr svg{flex:none;width:22px;height:22px}
.pt2-up{margin-top:6px;padding:20px;border-radius:22px;background:color-mix(in srgb,var(--pi) 5%,var(--pb));text-align:center}.pt2-up b{display:block;font:600 18px var(--h,system-ui)}.pt2-up span{display:block;margin:8px 0 16px;color:var(--pm);font-size:14px;line-height:1.45}
.pt-cta{padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px))}
#mkPart .pt-cta .pt2-lg{margin:0 0 12px;color:var(--pm);font-size:12.5px;line-height:1.45;text-align:center}
.pt-cta .pt-go{border-radius:999px}
.pt2 .pt-lk{margin-top:26px}
.pt-seal{width:20px;height:20px;flex:none;vertical-align:middle;overflow:visible}
.pt-id b .pt-seal{width:18px;height:18px}
.pt2-gr svg.pt-seal,.pt2-fr svg.pt-seal,.pt2-gh svg.pt-seal{width:22px;height:22px}
.pt2-top .pt2-xb,.pt2-top .pt2-pill{background:color-mix(in srgb,var(--pc) 62%,transparent);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border:1px solid color-mix(in srgb,var(--pi) 10%,transparent)!important}
.pt2-dh{margin:calc(-56px - env(safe-area-inset-top,0px)) 0 0;padding:calc(66px + env(safe-area-inset-top,0px)) 16px 14px;text-align:center;background:radial-gradient(130% 100% at 50% 0%,color-mix(in srgb,var(--g1) 36%,transparent),transparent 74%)}
.pt2-seal{display:flex;justify-content:center;margin-bottom:6px}.pt2-seal svg{width:78px;height:78px;filter:drop-shadow(0 10px 22px color-mix(in srgb,var(--g1) 55%,transparent))}
#mkPart .pt2-dh h1{margin:10px 0 8px}
.pt-sm{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}
.pt-sm div{padding:12px 14px;border-radius:14px;background:var(--pc);border:1.5px solid var(--pl)}
.pt-sm b{display:block;font:700 18px var(--h,system-ui)}.pt-sm span{font-size:12px;color:var(--pm)}
.pt-it{flex-wrap:wrap}
.pt-it .pt-ia{flex:0 0 100%;display:flex;gap:6px;flex-wrap:wrap;padding-left:0}
.pt-it .pt-ia button{padding:6px 12px;border-radius:999px;background:var(--pb);color:var(--pi);font-weight:600;font-size:12.5px}
.pt-it .pt-ia button.dl{color:#C0392B}
.pt-cta .pt-go.plan{background:linear-gradient(135deg,var(--c1),var(--c2));color:var(--ct);height:52px;font-size:16px;box-shadow:0 12px 24px -12px var(--c2)}
.pt-cta{border-top-color:color-mix(in srgb,var(--c2,var(--pl)) 35%,var(--pl))}
.pt-cta{position:static;z-index:auto;padding:6px 16px calc(36px + env(safe-area-inset-bottom,0px));background:none;border-top:0!important;box-shadow:none}
#mkPart .pt-cta .pt2-lg{margin:0 0 14px}
.pt2-sl{flex:none;display:grid;place-items:center;width:40px;height:40px}.pt2-sl svg{width:40px;height:40px}
.pt2-pr2{display:block;margin-top:8px;font:700 14px var(--b,system-ui);font-style:normal;color:var(--pi)}
.pt2-why{display:grid;gap:6px}.pt2-wy{display:flex;align-items:center;gap:14px;padding:6px 2px}
.pt2-wy b{display:block;font:600 15px var(--b,system-ui)}.pt2-wy small{display:block;margin-top:1px;color:var(--pm);font-size:13.5px;line-height:1.35}
.pt3{padding-top:14px}
#mkPart .pt3 h3.pt3-h{margin:26px 0 10px;font:600 15px var(--h,system-ui)}
.pt3-demo{margin-left:auto;padding:3px 10px;border-radius:999px;background:color-mix(in srgb,#F59E0B 18%,var(--pc));color:#C27C0E;font:700 11px var(--b,system-ui);border:1px solid color-mix(in srgb,#F59E0B 40%,transparent)}
.pt3-rc{border-radius:18px;border:1.5px solid var(--pl);background:var(--pc);overflow:hidden}
.pt3-rh{display:flex;align-items:center;gap:12px;padding:16px 16px 14px}.pt3-rh b{display:block;font:600 16px var(--h,system-ui)}.pt3-rh small{color:var(--pm);font-size:13px}
.pt3-rw{display:flex;justify-content:space-between;gap:12px;padding:12px 16px;border-top:1px solid var(--pl);font-size:14px}.pt3-rw span{color:var(--pm)}.pt3-rw b{font-weight:600;text-align:right;overflow-wrap:anywhere}
.pt3-tt{display:flex;justify-content:space-between;align-items:baseline;padding:16px;border-top:1.5px solid var(--pl);background:color-mix(in srgb,var(--pi) 4%,var(--pc))}.pt3-tt span{font-weight:600}.pt3-tt strong{font:700 22px var(--h,system-ui);letter-spacing:-.01em}
.pt3-ops{display:grid;gap:10px}
.pt3-op{display:flex;align-items:center;gap:14px;padding:13px 14px;border-radius:16px;border:1.5px solid var(--pl);background:var(--pc);cursor:pointer;-webkit-tap-highlight-color:transparent}
.pt3-op.on{border-color:var(--pi)}
.pt3-op div{flex:1;min-width:0}.pt3-op b{display:block;font:600 15px var(--b,system-ui)}.pt3-op small{color:var(--pm);font-size:12.5px}
.pt3-lg{display:grid;place-items:center;flex:none;width:44px;height:44px;border-radius:12px;font:800 12px var(--b,system-ui);letter-spacing:-.01em}
.pt3-rd{flex:none;width:20px;height:20px;border-radius:50%;border:1.5px solid var(--pm);display:grid;place-items:center}
.pt3-op.on .pt3-rd{border-color:var(--pi);background:var(--pi)}.pt3-op.on .pt3-rd:after{content:"";width:7px;height:7px;border-radius:50%;background:var(--pc)}
.pt3-ph{display:flex;align-items:center;border:1.5px solid var(--pl);border-radius:14px;background:var(--pc);overflow:hidden}
.pt3-ph:focus-within{border-color:var(--pi)}
.pt3-ph span{padding:0 12px 0 14px;font-weight:600;color:var(--pm);border-right:1.5px solid var(--pl);align-self:stretch;display:flex;align-items:center}
#mkPart .pt3-ph input.pt3-in{border:0!important;border-radius:0;background:none;padding:14px;font:600 17px var(--b,system-ui);letter-spacing:.04em;outline:0}
.pt3-hp{display:block;margin-top:8px;color:var(--pm);font-size:13px}.pt3-hp.err{color:#E5484D}
.pt3-act{margin-top:26px}
.pt3-act .pt-go.plan{background:linear-gradient(135deg,var(--c1),var(--c2));color:var(--ct);height:52px;font-size:16px;box-shadow:0 12px 24px -12px var(--c2)}
.pt3-act .pt-go[disabled]{opacity:.4;box-shadow:none;cursor:not-allowed}
#mkPart .pt3-sec{display:flex;align-items:flex-start;justify-content:center;gap:8px;margin:14px 0 0;color:var(--pm);font-size:12.5px;line-height:1.45;text-align:center}.pt3-sec svg{width:16px;height:16px;flex:none;margin-top:1px}
.pt3c{text-align:center;padding-top:44px}
#mkPart .pt3c h2{margin:22px 0 10px}#mkPart .pt3c p{margin:0 0 22px;color:var(--pm);font-size:15px;line-height:1.5}#mkPart .pt3c p b{color:var(--pi)}
#mkPart .pt3c .pt3-note{margin:16px 0 0;font-size:12.5px}
.pt3-spin{width:64px;height:64px;margin:0 auto;border-radius:50%;border:4px solid var(--pl);border-top-color:#15803D;animation:pt3s 1s linear infinite}
@keyframes pt3s{to{transform:rotate(360deg)}}
.pt3-st{list-style:none;margin:0 0 24px;padding:0;text-align:left;display:grid;gap:12px}
.pt3-st li{display:flex;align-items:center;gap:12px;font-size:14.5px;color:var(--pm)}
.pt3-st li i{display:grid;place-items:center;flex:none;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--pl);color:#fff}
.pt3-st li.dn{color:var(--pi)}.pt3-st li.dn i{background:#15803D;border-color:#15803D}.pt3-st li.dn i svg{width:14px;height:14px}
.pt3-st li.cr{color:var(--pi);font-weight:600}.pt3-st li.cr i{border-color:#15803D;border-top-color:transparent;animation:pt3s 1s linear infinite}
.pt3-ko{display:grid;place-items:center;width:72px;height:72px;margin:0 auto;border-radius:50%;background:color-mix(in srgb,#E5484D 16%,var(--pc));color:#E5484D}.pt3-ko svg{width:32px;height:32px}
.pt3-lg{width:52px;height:52px;border-radius:14px;object-fit:cover;display:block}
.pt3-op{padding:12px 14px}
.pt3-ko{animation:pt3sh .45s ease .1s both}@keyframes pt3sh{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(3px)}}@media (prefers-reduced-motion:reduce){.pt3-ko{animation:none}}
.pk{padding-top:36px}
.pk-ico{position:relative;width:112px;height:112px;margin:0 auto;color:var(--k);display:grid;place-items:center}
.pk-ico svg{position:relative;z-index:2;width:112px;height:112px;overflow:visible;animation:pkSh .5s cubic-bezier(.36,.07,.19,.97) 1.05s both,pkFl 3.6s ease-in-out 1.8s infinite}
.pk-bg{fill:color-mix(in srgb,var(--k) 14%,var(--pc));stroke:none;transform-origin:60px 60px;animation:pkPop .5s cubic-bezier(.2,1.4,.4,1) both}
.pk-c{fill:none;stroke:var(--k);stroke-width:3.5;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;transform:rotate(-90deg);transform-origin:60px 60px;animation:pkDr .7s cubic-bezier(.65,0,.35,1) .1s forwards}
.pk-g{fill:none;stroke:var(--k);stroke-width:5;stroke-linecap:round;stroke-linejoin:round}
.pk-g path{stroke-dasharray:1;stroke-dashoffset:1;animation:pkDr .38s ease-out .7s forwards}
.pk-g path+path{animation-delay:.9s}.pk-g path+path+path{animation-delay:1s}
.pk-g circle{opacity:0;animation:pkIn .2s ease 1s forwards}
.pk-r{position:absolute;inset:6px;border-radius:50%;border:2px solid var(--k);opacity:0;animation:pkRg 2.6s ease-out 1s infinite}.pk-r.r2{animation-delay:1.9s}
.pk-ico:before{content:"";position:absolute;inset:-18px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--k) 30%,transparent),transparent 68%);opacity:0;animation:pkGl .8s ease .6s forwards}
.pk-chip{display:inline-flex;align-items:center;gap:7px;margin-top:20px;padding:5px 12px;border-radius:99px;font:700 12px var(--h,system-ui);letter-spacing:.04em;text-transform:uppercase;color:var(--k);background:color-mix(in srgb,var(--k) 13%,transparent);border:1px solid color-mix(in srgb,var(--k) 30%,transparent);animation:pkUp .45s ease .5s both}
.pk-chip i{width:7px;height:7px;border-radius:50%;background:var(--k);animation:pkBl 1.6s ease-in-out infinite}
.pk h2,.pk>p,.pk-det,.pk-rc,.pk-ok,.pk-tips,.pk .pt3-act,.pk .pt2-btn,.pk-sec{animation:pkUp .5s ease both}
.pk h2{animation-delay:.6s}.pk>p{animation-delay:.68s}.pk-rc{animation-delay:.78s}.pk-ok{animation-delay:.86s}.pk-tips{animation-delay:.94s}.pk .pt3-act{animation-delay:1.02s}.pk .pt2-btn{animation-delay:1.1s}.pk-sec{animation-delay:1.18s}
.pk-det{margin:-8px 0 16px;padding:9px 12px;border-radius:12px;font-size:12.5px;line-height:1.4;color:var(--pm);background:color-mix(in srgb,var(--k) 8%,transparent);border:1px dashed color-mix(in srgb,var(--k) 35%,transparent)}
.pk-rc{margin:0 0 14px;text-align:left}.pk-rc .pt3-rw:first-child{border-top:0}.pk-am{font-weight:800;color:var(--pi)}
.pk-ok{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 0 14px;font-size:13px;font-weight:600;color:var(--pi)}
.pk-ok:before{content:"";width:8px;height:8px;border-radius:50%;background:#15803D;box-shadow:0 0 0 4px color-mix(in srgb,#15803D 22%,transparent)}
.pk-tips{margin:0 0 6px;padding:14px 16px;border-radius:16px;text-align:left;background:var(--pc);border:1.5px solid var(--pl)}
.pk-tips b{display:block;margin-bottom:8px;font:700 14px var(--h,system-ui);color:var(--pi)}
.pk-tips ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.pk-tips li{position:relative;padding-left:22px;font-size:13.5px;line-height:1.4;color:var(--pm)}
.pk-tips li:before{content:"";position:absolute;left:2px;top:6px;width:9px;height:9px;border-radius:50%;border:2px solid var(--k)}
.pk-sec{margin:18px 0 0;font-size:12px;color:var(--pm)}
@keyframes pkDr{to{stroke-dashoffset:0}}@keyframes pkIn{to{opacity:1}}
@keyframes pkPop{0%{transform:scale(.4);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes pkSh{10%,90%{transform:translateX(-2px)}20%,80%{transform:translateX(4px)}30%,50%,70%{transform:translateX(-7px)}40%,60%{transform:translateX(7px)}100%{transform:translateX(0)}}
@keyframes pkFl{0%,100%{transform:scale(1)}50%{transform:scale(1.035)}}
@keyframes pkRg{0%{transform:scale(.9);opacity:.55}100%{transform:scale(1.55);opacity:0}}
@keyframes pkGl{to{opacity:1}}@keyframes pkBl{50%{opacity:.35}}
@keyframes pkUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.pk *,.pk{animation:none!important}.pk-c,.pk-g path{stroke-dashoffset:0}.pk-g circle,.pk-ico:before{opacity:1}.pk-r{display:none}}
.pk-win{margin-bottom:4px}
.pk-win svg{animation:pkBo .6s cubic-bezier(.2,1.5,.4,1) .85s both}
.pk-win .pk-g{stroke-width:6}.pk-win .pk-g path{animation-delay:.55s}
.pk-win .pk-r{animation-delay:.9s}.pk-win .pk-r.r2{animation-delay:1.8s}
.pk-p{position:absolute;z-index:1;left:50%;top:50%;width:7px;height:7px;margin:-3.5px;border-radius:50%;background:#22C55E;opacity:0;animation:pkPt .95s cubic-bezier(.1,.7,.3,1) .8s forwards}
.pk-p:nth-child(3n+4){background:#4DB2FF;width:5px;height:5px}.pk-p:nth-child(3n+5){background:#F5A524;border-radius:2px}
.pk-sl{animation:pkUp .5s ease 1.1s both}.pk-win~h1,.pk-win~.pt2-sub{animation:pkUp .5s ease 1.2s both}
@keyframes pkBo{0%{transform:scale(1)}45%{transform:scale(1.14)}100%{transform:scale(1)}}
@keyframes pkPt{0%{opacity:1;transform:rotate(var(--a)) translateY(-44px) scale(.5)}100%{opacity:0;transform:rotate(var(--a)) translateY(-92px) scale(1)}}
@media (prefers-reduced-motion:reduce){.pk-win *,.pk-sl{animation:none!important}.pk-p{display:none}}
.pk-br{--pc:#fff;--pl:color-mix(in srgb,var(--bg,#000) 14%,#fff);--pm:#5f5f5f;--pi:#0b0b0b;--bd:var(--bg,#000);min-height:calc(100vh - 54px);color:#0b0b0b;background:radial-gradient(120% 45% at 50% 0%,color-mix(in srgb,var(--k) 14%,transparent),transparent 72%),#fff}
.pk-brb{background:#fff!important;color:#0b0b0b;border-bottom:2px solid var(--bg,#000)!important}
.pk-br h2{color:#0b0b0b}
.pk-br .pk-rc{background:#fff;border:2px solid var(--bd);box-shadow:5px 5px 0 var(--k)}
.pk-br .pk-rc .pt3-rw{border-top:1px solid color-mix(in srgb,var(--bd) 16%,#fff)}
.pk-br .pk-am{color:var(--bd)}
.pk-br .pk-chip{color:var(--bd);background:color-mix(in srgb,var(--k) 20%,#fff);border-color:var(--k)}
.pk-br .pk-chip i{background:var(--k)}
.pk-br .pk-det{color:#444;background:#fff;border-color:var(--k)}
.pk-br .pt2-btn{color:var(--bd);background:#fff;border:2px solid var(--bd)}
.pk-br .pt3-act .pt-go.plan{border:2px solid var(--bd);box-shadow:4px 4px 0 var(--bd)}
.pk-br .pk-sec{color:#6b6b6b}
.pt3-go{flex:none;display:grid;color:var(--pm)}.pt3-go svg{width:20px;height:20px;transform:rotate(180deg)}
.op-hd{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:4px 0 20px}.op-hd .pt3-lg{width:72px;height:72px;border-radius:20px}.op-hd b{font:800 20px var(--h,system-ui)}.op-hd small{color:var(--pm);font-size:13.5px}
#mkV #mkPart[data-th=w],#mkV.dk #mkPart[data-th=w]{--pb:#fff;--pc:#fff;--pi:#06233A;--pm:#5C7083;--pl:#CFE9F6;--ac:#1DC8FF;--act:#001826}
#mkV #mkPart[data-th=o],#mkV.dk #mkPart[data-th=o]{--pb:#000;--pc:#141414;--pi:#fff;--pm:#A8A8A8;--pl:#2E2E2E;--ac:#FF7900;--act:#000}
#mkPart[data-th] .pt-bar{border-bottom:2px solid var(--ac)}
#mkPart[data-th] .pt-ib{background:color-mix(in srgb,var(--ac) 16%,var(--pb));color:var(--pi)}
#mkPart[data-th] .pt3-rc{border:2px solid var(--ac)}
#mkPart[data-th] .pt3-ph{border-width:2px}#mkPart[data-th] .pt3-ph:focus-within{border-color:var(--ac)}
#mkPart[data-th] .pt3-ph input.pt3-in{color:var(--pi);background:transparent;caret-color:var(--ac)}
#mkPart[data-th] .pt3-spin{border-color:var(--pl);border-top-color:var(--ac)}
#mkPart[data-th] .pt3-st li.dn i{background:var(--ac);border-color:var(--ac);color:var(--act)}
#mkPart[data-th] .pt3-st li.cr i{border-color:var(--ac);border-top-color:transparent}
#mkPart[data-th] .pt3-st li.cr,#mkPart[data-th] .pt3-st li.dn{color:var(--pi)}
#mkV #mkPart[data-th=m],#mkV.dk #mkPart[data-th=m]{--pb:#fff;--pc:#fff;--pi:#0B2A3A;--pm:#5A6B75;--pl:#DCE6EA;--ac:#00425F;--act:#FFCC00}
#mkV #mkPart[data-th=v],#mkV.dk #mkPart[data-th=v]{--pb:#fff;--pc:#fff;--pi:#06214A;--pm:#506478;--pl:#CFDDF3;--ac:#0A56B7;--act:#fff}
#mkV #mkPart[data-th=c],#mkV.dk #mkPart[data-th=c]{--pb:#120C2E;--pc:#1C1445;--pi:#fff;--pm:#B3A9DB;--pl:#352A73;--ac:#7C5CFF;--act:#fff}
#mkPart .pp-pr{position:relative;width:96px;height:96px;margin:0 auto}#mkPart .pp-pr .pt3-lg{position:relative;z-index:1;width:96px;height:96px;border-radius:26px;font-size:15px}
#mkPart .pp-pr i{position:absolute;inset:0;border-radius:26px;border:2px solid var(--ac,#15803D);animation:ppu 2s ease-out infinite}#mkPart .pp-pr i:nth-child(2){animation-delay:1s}
@keyframes ppu{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.6);opacity:0}}@media (prefers-reduced-motion:reduce){#mkPart .pp-pr i{animation:none;opacity:.3}}
#mkPart .pp-cdp{display:inline-block;margin-top:22px;padding:4px 12px;border-radius:999px;font-size:13px;color:var(--pm);border:1.5px solid var(--pl)}#mkPart .pp-cdp b{color:var(--pi);font-variant-numeric:tabular-nums}
#mkPart .pt3c h2{margin:14px 0 6px}#mkPart .pp-amt{font:800 34px var(--h,system-ui);letter-spacing:-.02em;margin-bottom:6px}#mkPart .pt3c p.pp-to{margin:0 0 18px}
#mkPart .pp-tip{display:flex;gap:12px;align-items:flex-start;text-align:left;margin-bottom:22px;padding:12px 14px;border-radius:14px;font-size:13.5px;line-height:1.45;background:color-mix(in srgb,var(--ac,#15803D) 10%,var(--pc));border:1px solid color-mix(in srgb,var(--ac,#15803D) 38%,transparent)}
#mkPart .pp-tip svg{width:20px;height:20px;flex:none;stroke:var(--ac,#15803D)}
#mkPart .pt3-st li{position:relative}#mkPart .pt3-st li:not(:last-child)::after{content:"";position:absolute;left:10px;top:23px;width:2px;height:13px;background:var(--pl)}#mkPart .pt3-st li.dn::after{background:var(--ac,#15803D)}
#mkPart .pt3-go{flex:none;display:grid;color:var(--pm)}#mkPart .pt3-go svg{width:20px;height:20px;transform:rotate(180deg)}
`;document.head.appendChild(psty);
function ujCelebrate(name,photo,uid){
 try{
  if(document.getElementById('uj138-cel'))return;
  var st=document.createElement('style');st.id='uj138-cel-st';
  st.textContent='@keyframes ujcPop{0%{transform:scale(.3);opacity:0}60%{transform:scale(1.08);opacity:1}100%{transform:scale(1)}}@keyframes ujcRing{0%{transform:scale(.6);opacity:.7}100%{transform:scale(2.3);opacity:0}}@keyframes ujcDraw{to{stroke-dashoffset:0}}@keyframes ujcUp{from{transform:translateY(14px);opacity:0}to{transform:none;opacity:1}}@keyframes ujcFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(var(--dx),110vh) rotate(var(--r));opacity:.9}}#uj138-cel{position:fixed;inset:0;z-index:100010;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;text-align:center;color:#fff;background:radial-gradient(circle at 50% 38%,#1E9A55 0,#0B4F28 62%,#06361C 100%);font-family:inherit;overflow:hidden}#uj138-cel .bd{position:relative;width:112px;height:112px;display:grid;place-items:center}#uj138-cel .bd i.rg{position:absolute;inset:0;border-radius:50%;border:2px solid rgba(255,255,255,.55);animation:ujcRing 2.2s ease-out infinite}#uj138-cel .bd i.rg:nth-child(2){animation-delay:.7s}#uj138-cel .bd i.rg:nth-child(3){animation-delay:1.4s}#uj138-cel .lg{position:relative;width:104px;height:104px;border-radius:30px;background:#fff;color:#15803D;display:grid;place-items:center;font:800 38px system-ui;overflow:hidden;box-shadow:0 22px 44px -14px rgba(0,0,0,.5);animation:ujcPop .7s cubic-bezier(.2,.9,.3,1.2) both}#uj138-cel .lg img{width:100%;height:100%;object-fit:cover}#uj138-cel .ck{position:absolute;right:-6px;bottom:-6px;width:38px;height:38px;border-radius:50%;background:#F59E0B;display:grid;place-items:center;border:3px solid #0B4F28;animation:ujcPop .5s .55s cubic-bezier(.2,.9,.3,1.3) both}#uj138-cel .ck path{stroke-dasharray:22;stroke-dashoffset:22;animation:ujcDraw .4s .95s ease forwards}#uj138-cel h2{margin:6px 0 0;font-size:24px;animation:ujcUp .5s .6s both}#uj138-cel p{margin:0;font-size:14px;opacity:.92;animation:ujcUp .5s .75s both}#uj138-cel .id{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.3);font:700 14px monospace;letter-spacing:.06em;animation:ujcUp .5s .9s both}#uj138-cel button{margin-top:10px;border:0;border-radius:16px;padding:14px 26px;background:#fff;color:#0B4F28;font:800 15px system-ui;cursor:pointer;animation:ujcUp .5s 1.05s both}#uj138-cel .cf{position:absolute;top:0;width:9px;height:14px;border-radius:2px;animation:ujcFall var(--t) linear var(--d) infinite}@media(prefers-reduced-motion:reduce){#uj138-cel *{animation-duration:.01s!important;animation-delay:0s!important;animation-iteration-count:1!important}}';
  var o=document.createElement('div');o.id='uj138-cel';o.setAttribute('role','dialog');o.setAttribute('aria-label','Boutique créée');
  var cols=['#FBBF24','#fff','#34C77B','#60A5FA','#F472B6'],cf='';
  for(var i=0;i<26;i++){cf+='<i class="cf" style="left:'+(Math.random()*100).toFixed(1)+'%;background:'+cols[i%5]+';--dx:'+Math.round(Math.random()*120-60)+'px;--r:'+Math.round(Math.random()*720-360)+'deg;--t:'+(2.6+Math.random()*2.2).toFixed(1)+'s;--d:'+(Math.random()*1.6).toFixed(1)+'s"></i>'}
  var ini=String(name||'B').trim().split(/\s+/).slice(0,2).map(function(w){return w[0]}).join('').toUpperCase()||'B';
  var e=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  o.innerHTML=cf+'<div class="bd"><i class="rg"></i><i class="rg"></i><i class="rg"></i><div class="lg">'+(photo?'<img alt="" src="'+e(photo)+'">':e(ini))+'</div><span class="ck"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span></div><h2>Boutique créée</h2><p>'+e(name)+' est prête à vendre sur la Marketplace UJLoG.</p>'+(uid?'<div class="id">ID '+e(uid)+'</div>':'')+'<button type="button">Accéder à ma boutique</button>';
  document.head.appendChild(st);document.body.appendChild(o);
  o.querySelector('button').onclick=function(){o.style.transition='opacity .3s';o.style.opacity='0';setTimeout(function(){o.remove();st.remove()},320)};
 }catch(x){}
}
function genUJM(){var c='23456789ABCDEFGHJKLMNPQRSTUVWXYZ',r='';for(var i=0;i<6;i++)r+=c[Math.floor(Math.random()*c.length)];return 'UJM-'+r}

function partSheet(force){
 const r=st.root;if(!r)return;r.querySelector('#mkPart')?.remove();
 try{const raw=JSON.parse(localStorage.getItem(PK)||'null');if(raw&&raw.sub&&!(raw.sub.ref&&!/^(DEMO|TEST|SIM)/i.test(String(raw.sub.ref)))){raw.sub=null;localStorage.setItem(PK,JSON.stringify(raw))}}catch(e){}
 if(!force&&subOk(pget()))return openStore(null,'Ma boutique',null,true);
 const d=document.createElement('div');d.id='mkPart';let v=force?'plans':(()=>{try{const s0=pget();return subOk(s0)&&!s0.shop.name?'shop':(subOk(s0)?'home':'plans')}catch(e){return 'plans'}})(),tmp={},timer=null,tk=null;const TMO=180000;const stop=()=>{if(timer){clearInterval(timer);timer=null}if(tk){clearInterval(tk);tk=null}};const tick=()=>{const el=g('#cd');if(!el||!tmp.t0)return;const sc=Math.max(0,Math.ceil((TMO-(Date.now()-tmp.t0))/1000));el.textContent=Math.floor(sc/60)+':'+String(sc%60).padStart(2,'0')};
 const S=()=>pget(),g=q=>d.querySelector(q);
 const PRE=(()=>{const X=window.UJX||{};let addr='';if(X.lg==='Quartier')addr=X.qt||'';else if(X.lg==='Cité universitaire')addr='Cité universitaire'+(X.bt?', bât. '+X.bt:'');return{tel:String(X.tel||''),addr:String(addr).slice(0,60)}})();
 const bar=(t,to)=>`<div class="pt-bar"><button class="pt-ib" data-p="${to}" aria-label="Retour">${CHV}</button><b>${t}</b></div>`;
 const cvStyle=sh=>sh.cover?`background-image:url(${esc(sh.cover)})`:`background-image:linear-gradient(135deg,${hue(sh.name||'x')},#0B1630)`;
 const IC=x=>`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${x}</svg>`;
 const IX=x=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${x}</svg>`;
 const I={store:IX('<path d="M4 9l1-5h14l1 5M5 9v10h14V9M9 19v-5h6v5"/>'),img:IX('<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.6"/><path d="m4 18 5-5 4 4 3-3 4 4"/>'),usr:IX('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'),grid:IX('<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'),tag:IX('<path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="8.5" r="1.3"/>'),star:IX('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),chv:IX('<path d="m9 5 7 7-7 7"/>'),x:IX('<path d="M6 6l12 12M18 6 6 18"/>'),tools:IX('<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>'),share:IX('<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/>'),copy:IX('<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8"/>'),chart:IX('<path d="M5 20v-7M12 20V5M19 20v-10"/>'),clock:IX('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),box:IX('<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/>')};
 const GEM=c=>`<svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true"><path d="M7 3h10l5 6-10 13L2 9z" fill="${c}"/><path d="m12 8.2 1.1 2.3 2.5.3-1.8 1.7.5 2.5L12 13.8l-2.3 1.2.5-2.5-1.8-1.7 2.5-.3z" fill="#fff"/></svg>`;
 const GC={standard:'#1D9BF0',pro:'#E8A700'},CB={standard:['#4DB2FF','#1877F2','#fff'],pro:['#FFD24D','#E39A00','#2A1B00']},dtl=t=>new Date(t).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}),num=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const BDG=k=>k==='pro'?CERT:VER;
 const subs=s=>{const p=planOf(s),sb=s.sub,PH=IX('<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>');
  const offer=(k,t)=>`<div class="pt2-li" role="button" tabindex="0" data-p="det" data-k="${k}"><span class="pt2-sl">${k==='pro'?CERT:VER}</span><div class="pt2-lt"><b>Partenaire ${PLANS[k].n}</b><small>${t}</small><em class="pt2-pr2">${num(PLANS[k].price)} FCFA / mois</em></div>${I.chv}</div>`;
  const why=(ic,t,d)=>`<div class="pt2-wy"><span class="pt2-ic">${ic}</span><div><b>${t}</b><small>${d}</small></div></div>`;
  const card=sb?`<div class="pt2-li" role="button" tabindex="0" data-p="det" data-k="${sb.plan}"><span class="pt2-sl">${sb.plan==='pro'?CERT:VER}</span><div class="pt2-lt"><b>Partenaire ${PLANS[sb.plan].n}</b><small>${p?'Actif jusqu’au '+dtl(sb.exp):'A expiré le '+dtl(sb.exp)}</small></div>${I.chv}</div>`:'';
  const PT='Articles illimités, badge Certifié et outils de vente avancés.';let disc='';
  if(!p)disc=offer('pro',PT)+offer('standard','15 articles, 2 photos par article et badge Vérifié.')+`<button class="pt2-btn" data-p="plans" style="color:var(--pg);margin-top:4px">Comparer les forfaits</button>`;
  else if(sb.plan==='standard')disc=offer('pro',PT);
  return `<div class="pt2-top"><button class="pt2-xb" data-p="${p?'home':'x'}" aria-label="Fermer">${I.x}</button></div><div class="pt-sc pt2"><h1>Abonnements</h1><p class="pt2-sub">Retrouvez et gérez votre abonnement partenaire au même endroit.</p>`
  +(sb?`<h3 class="pt2-h">${p?'Mon abonnement':'Renouveler'}</h3>${card}`:'')
  +(disc?`<h3 class="pt2-h">Découvrir</h3>${disc}`:'')
  +(!p?`<h3 class="pt2-h">Pourquoi devenir partenaire</h3><div class="pt2-why">${why(I.store,'Votre vitrine sur le campus','Vos articles visibles par les étudiants.')}${why(PH,'Paiement Mobile Money','Orange Money ou Wave.')}${why(I.clock,'30 jours, sans engagement','Pas de renouvellement automatique.')}</div>`:'')
  +`</div>`};
 const plans=s=>{const row=(ic,t)=>`<div class="pt2-fr">${ic}<span>${t}</span></div>`;
  const F={standard:[row(I.grid,'15 articles publiés'),row(I.img,'2 photos par article'),row(VER,'Badge Boutique vérifiée'),row(I.tools,'Outils de gestion de base')],pro:[row(I.grid,'Articles illimités'),row(I.img,'5 photos par article'),row(CERT,'Badge Boutique certifiée'),row(I.tag,'Outils de vente et de gestion avancés')]};
  return `<div class="pt2-top"><button class="pt2-xb" data-p="subs" aria-label="Retour">${I.x}</button></div><div class="pt-sc pt2" style="text-align:center"><h1>Boutique Partenaire</h1><p class="pt2-sub">Vendez sur la Marketplace UJLoG et touchez tous les étudiants du campus.</p><p class="pt2-ch">Choisissez votre forfait</p>`
  +Object.keys(PLANS).map(k=>{const o=PLANS[k];return `<div class="pt2-pc" style="text-align:left;background:color-mix(in srgb,${GC[k]} 9%,var(--pc))"><b class="pt2-pn">${o.n}</b><div class="pt2-pt">${o.tag}</div><div class="pt2-pp">${num(o.price)} FCFA / mois</div><div class="pt2-fl">${F[k].join('')}</div><button class="pt2-btn" data-p="det" data-k="${k}" style="color:${GC[k]}">Voir tous les avantages</button></div>`}).join('')+`</div>`};
 const sumHtml=s=>{const it=s.items,promo=it.filter(x=>x.o>0).length,vd=it.filter(x=>x.f).length,stock=it.filter(x=>!x.s).reduce((a,x)=>a+Number(x.p||0),0);return `<div class="pt-sm"><div><b>${it.length}</b><span>Articles</span></div><div><b>${promo}</b><span>En promotion</span></div><div><b>${vd}</b><span>En vedette</span></div><div><b>${fmt(stock)}</b><span>Valeur du stock</span></div></div>`};
 const detail=s=>{const sel=tmp.sel||'pro',o=PLANS[sel],pro=sel==='pro',ren=s.sub&&s.sub.plan===sel;
  const grp=(t,ic,rows)=>`<div class="pt2-g"><div class="pt2-gh">${ic}<b>${t}</b></div>${rows.map(r=>`<div class="pt2-gr">${r[0]}<span>${r[1]}</span></div>`).join('')}</div>`;
  const tools=pro?grp('Outils de vente',I.tag,[[I.tag,'Prix barré et promotions'],[I.star,'Mise en vedette des articles'],[I.share,'Partage d’un article sur WhatsApp']])+grp('Outils de gestion',I.tools,[[I.box,'Articles épuisés ou disponibles'],[I.copy,'Duplication d’un article en un geste'],[I.chart,'Résumé de la boutique : articles, promotions, stock']]):grp('Outils de gestion',I.tools,[[I.box,'Articles épuisés ou disponibles'],[I.clock,'Horaires d’ouverture de la boutique']])+`<div class="pt2-up"><b>Développez votre boutique</b><span>Passez à Pro : articles illimités, badge Certifié, promotions, mise en vedette, partage WhatsApp et résumé de la boutique.</span><button class="pt2-btn" data-p="sel" data-k="pro" style="background:linear-gradient(135deg,#FFD24D,#E39A00);color:#2A1B00">Passer à Pro</button></div>`;
  return `<div class="pt2-top"><button class="pt2-xb" data-p="subs" aria-label="Fermer">${I.x}</button><button class="pt2-pill" data-p="plans">Voir tous les forfaits</button></div><div class="pt2-dh pt2" style="--g1:${GC[sel]}"><div class="pt2-seal">${pro?CERT:VER}</div><h1>Partenaire <span style="color:${GC[sel]}">${o.n}</span></h1><p class="pt2-sub" style="margin-bottom:6px">${o.tag}.</p><p class="pt2-pr">${num(o.price)} FCFA / mois</p></div><div class="pt-sc pt2" style="padding-top:14px;padding-bottom:6px"><div style="text-align:left">`
  +grp('Votre boutique',I.store,[[I.usr,'Photo de profil et couverture'],[I.store,'Page boutique dans la Marketplace'],[pro?CERT:VER,'Badge « Boutique '+(pro?'certifiée':'vérifiée')+' »']])
  +grp('Vos articles',I.grid,[[I.grid,pro?'Articles illimités':o.max+' articles publiés'],[I.img,pro?'Jusqu’à 5 photos par article':o.photos+' photos par article']])
  +tools+`</div></div><div class="pt-cta" style="--c1:${CB[sel][0]};--c2:${CB[sel][1]};--ct:${CB[sel][2]}"><p class="pt2-lg">L’abonnement dure 30 jours et ne se renouvelle pas automatiquement. Paiement par Mobile Money.</p><button class="pt-go plan" data-p="buy" data-k="${sel}">${ren?'Renouveler':'Continuer'}</button><small>Renouvelez quand vous le souhaitez.</small></div>`};
 const LOCK=IX('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>');
 const opLogo=o=>o.img?`<img class="pt3-lg" alt="${esc(o.name)}" src="${o.img}">`:`<span class="pt3-lg" style="background:${o.c};color:${o.t}">${esc(o.short||o.name)}</span>`;
 const opOf=id=>PAY.operators.find(o=>o.id===id)||{name:''};
 const payv=s=>{const k=tmp.k,q=PLANS[k],cur=planOf(s),base=cur&&s.sub.plan===k?s.sub.exp:Date.now(),until=base+30*DAY;tmp.until=until;
  const ops=PAY.operators.map(o=>`<div class="pt3-op" role="button" tabindex="0" data-p="op" data-o="${o.id}">${opLogo(o)}<div><b>${o.name}</b><small>${o.card?"Visa ou Mastercard prépayée":"Payer avec "+o.name}</small></div><span class="pt3-go">${CHV}</span></div>`).join('');
  return `<div class="pt-bar"><button class="pt-ib" data-p="detail" aria-label="Retour">${CHV}</button><b>Paiement</b>${PAY.demo?'<span class="pt3-demo">Mode test</span>':''}</div><div class="pt-sc pt3">`
  +`<div class="pt3-rc"><div class="pt3-rh"><span class="pt2-sl">${k==='pro'?CERT:VER}</span><div><b>Partenaire ${q.n}</b><small>Abonnement mensuel · Marketplace UJLoG</small></div></div><div class="pt3-rw"><span>Durée</span><b>30 jours</b></div><div class="pt3-rw"><span>Valable jusqu’au</span><b>${dtl(until)}</b></div><div class="pt3-rw"><span>Renouvellement</span><b>Manuel</b></div><div class="pt3-tt"><span>Total à payer</span><strong>${num(q.price)} FCFA</strong></div></div>`
  +`<h3 class="pt3-h">Choisissez votre moyen de paiement</h3><div class="pt3-ops">${ops}</div>`
  +`<p class="pt3-sec" style="margin-top:18px">${LOCK}<span>Aucun numéro ni code secret n’est enregistré dans l’application.</span></p></div>`};
 const PHI=IX('<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>');
 const TIPS={orange:'Une notification Orange Money doit apparaître sur votre téléphone. Ouvrez-la et validez avec votre code secret.',wave:'Ouvrez l’application Wave, puis validez la demande de paiement avec votre code secret.',mtn:'Une notification MTN Mobile Money doit apparaître sur votre téléphone. Ouvrez-la et validez avec votre code secret.',moov:'Une notification Moov Money doit apparaître sur votre téléphone. Ouvrez-la et validez avec votre code secret.',card:'Saisissez votre carte sur la page sécurisée. Votre banque peut vous envoyer un code de confirmation par SMS.'};
 const opayv=s=>{const k=tmp.k,q=PLANS[k],o=opOf(tmp.op),bc=BR(o.name)||['#15803D','#34C77B','#000','#fff'],card=!!o.card,ready=card||digits(tmp.tel).length===PAY.country.len,until=tmp.until||(Date.now()+30*DAY),row=(a,b)=>`<div class="pt3-rw"><span>${a}</span><b>${b}</b></div>`;
  if(!tmp.oid)tmp.oid='UJ'+Date.now().toString(36).toUpperCase();
  const form=card?`<div class="pp-tip" style="margin-top:22px">${LOCK}<span>Vous serez redirigé vers la page sécurisée GeniusPay pour saisir votre carte. Les informations de carte ne passent jamais par l’application.</span></div>`
   :`<h3 class="pt3-h">Votre numéro ${esc(o.name)}</h3><div class="pt3-ph"><span>${PAY.country.code}</span><input class="pt3-in" id="pTel" inputmode="numeric" autocomplete="tel-national" placeholder="07 00 00 00 00" value="${fmtTel(tmp.tel)}"></div><small class="pt3-hp" id="pHint">Vous recevrez une demande de confirmation sur ce numéro.</small>`;
  return `<div class="pt-bar"><button class="pt-ib" data-p="chg" aria-label="Retour">${CHV}</button><b>${esc(o.name)}</b>${PAY.demo?'<span class="pt3-demo">Mode test</span>':''}</div><div class="pt-sc pt3">`
  +`<div class="op-hd">${opLogo(o)}<b>Paiement ${esc(o.name)}</b><small>Marketplace UJLoG</small></div>`
  +`<div class="pt3-rc">${row('Référence',esc(tmp.oid))}${row('Offre','Partenaire '+q.n)}${row('Durée','30 jours')}${row('Valable jusqu’au',dtl(until))}<div class="pt3-tt"><span>Total à payer</span><strong>${num(q.price)} FCFA</strong></div></div>`+form
  +`<div class="pt3-act" style="--c1:${bc[0]};--c2:${bc[1]};--ct:${bc[3]}"><button class="pt-go plan" id="pGo" data-p="pay"${ready?'':' disabled'}>${card?'Continuer vers le paiement':'Payer '+num(q.price)+' FCFA'}</button><p class="pt3-sec">${LOCK}<span>Aucun numéro ni code secret n’est enregistré dans l’application.</span></p><p class="pt3-sec" style="margin-top:2px"><span>L’abonnement dure 30 jours et ne se renouvelle pas automatiquement.</span></p></div></div>`};
 const procv=s=>{const q=PLANS[tmp.k],o=opOf(tmp.op),bc=BR(o.name)||['#15803D','#34C77B','#000','#fff'],dg=digits(tmp.tel),mk=PAY.country.code+' '+dg.slice(0,2)+' •• •• '+dg.slice(-2),st=(a,c)=>`<li class="${c}"><i>${c==='dn'?CK:''}</i><span>${a}</span></li>`;
  return `<div class="pt-bar"><b>Paiement en cours</b>${PAY.demo?'<span class="pt3-demo">Mode test</span>':''}</div><div class="pt-sc pt3 pt3c"><div class="pp-pr"><i></i><i></i>${opLogo(o)}</div><span class="pp-cdp">Expire dans <b id="cd">3:00</b></span><h2>${o.card?'Finalisez votre paiement':'Confirmez sur votre téléphone'}</h2><div class="pp-amt">${num(q.price)} FCFA</div><p class="pp-to">${o.card?'Paiement par <b>carte prépayée</b>':'Demande envoyée au <b>'+mk+'</b> via <b>'+esc(o.name)+'</b>'}</p>`
  +(tmp.url?`<div class="pt3-act" style="margin:0 0 18px;--c1:${bc[0]};--c2:${bc[1]};--ct:${bc[3]}"><button class="pt-go plan" data-p="openpay">${o.card?'Ouvrir la page de paiement':'Ouvrir '+esc(o.name)}</button></div>`:'')
  +`<div class="pp-tip">${PHI}<span>${TIPS[o.id]||''}</span></div><ul class="pt3-st">${st('Demande envoyée',tmp.ref?'dn':'cr')}${st('En attente de votre validation',tmp.ref?'cr':'')}${st('Abonnement activé','')}</ul><button class="pt2-btn" data-p="cancel" style="color:var(--pm)">Annuler le paiement</button><p class="pt3-note">Ne fermez pas cette page tant que le paiement n’est pas confirmé.</p></div>`};
 const okv=s=>{const r=tmp.receipt||{},k=r.plan||'pro',q=PLANS[k],cb=CB[k],row=(a,b)=>`<div class="pt3-rw"><span>${a}</span><b>${b}</b></div>`;
  return `<div class="pt2-dh pt2" style="--g1:${GC[k]};margin-top:0;padding-top:calc(40px + env(safe-area-inset-top,0px))"><div class="pk-ico pk-win" style="--k:#22C55E" role="img" aria-label="Paiement confirmé"><i class="pk-r"></i><i class="pk-r r2"></i>${[0,1,2,3,4,5,6,7,8,9].map(n=>'<i class="pk-p" style="--a:'+n*36+'deg"></i>').join('')}<svg viewBox="0 0 120 120" aria-hidden="true"><circle class="pk-bg" cx="60" cy="60" r="44"/><circle class="pk-c" pathLength="1" cx="60" cy="60" r="44"/><g class="pk-g"><path pathLength="1" d="M42 62l13 13 24-28"/></g></svg></div><div class="pt2-seal pk-sl">${k==='pro'?CERT:VER}</div><h1 style="font-size:26px">Paiement confirmé</h1><p class="pt2-sub">Votre abonnement Partenaire ${q.n} est actif.</p></div><div class="pt-sc pt3" style="padding-top:8px"><div class="pt3-rc">${row('Référence',esc(r.ref||''))}${row('Montant',num(q.price)+' FCFA')}${row('Moyen de paiement',esc(r.op||''))}${row('Date',esc(r.date||''))}${row('Valable jusqu’au',dtl(r.until))}</div><div class="pt3-act" style="--c1:${cb[0]};--c2:${cb[1]};--ct:${cb[2]}"><button class="pt-go plan" data-p="fin">${(()=>{try{return((JSON.parse(localStorage.getItem('ujsim_db_v1')||'{}').t||{}).stores||[]).length?'Accéder à ma boutique':'Créer ma boutique'}catch(e){return 'Créer ma boutique'}})()}</button></div></div>`};
 const SUPPORT_WA='';/* numéro WhatsApp du support, format international sans + (ex. 2250700000000) */
 const KO={unavailable:['Paiement momentanément indisponible','Le service de paiement n’est pas encore ouvert. Réessayez un peu plus tard.',0],network:['Connexion impossible','Vérifiez votre connexion internet, puis réessayez.',1],timeout:['Demande non validée','La demande n’a pas été validée à temps. Si vous avez été débité, ne payez pas une seconde fois : contactez le support avec la référence ci-dessous.',1],refused:['Paiement refusé','L’opérateur a refusé la transaction : solde insuffisant, code secret erroné ou plafond atteint.',1],failed:['Paiement non abouti','Le paiement n’a pas pu être confirmé.',1]};
 const BR=n=>{n=String(n||'').toLowerCase();return n.includes('orange')?['#FF7900','#FFA04D','#000','#000']:n.includes('mtn')?['#FFCC00','#FFE066','#00425F','#000','#E6B000']:n.includes('moov')?['#0A56B7','#3B82E0','#06214A','#fff']:n.includes('wave')?['#1DC8FF','#6FE0FF','#001826','#001826']:n.includes('carte')?['#7C5CFF','#A48CFF','#1B1240','#fff']:null};
 const OTH={orange:'o',wave:'w',mtn:'m',moov:'v',card:'c'};
 const KOI={bar:'<path pathLength="1" d="M45 60h30"/>',x:'<path pathLength="1" d="M47 47 73 73"/><path pathLength="1" d="M73 47 47 73"/>',wifi:'<path pathLength="1" d="M36 53a34 34 0 0 1 48 0"/><path pathLength="1" d="M45 63a21 21 0 0 1 30 0"/><path pathLength="1" d="M38 38 82 82"/><circle cx="60" cy="73" r="2.6" fill="currentColor" stroke="none"/>',clock:'<path pathLength="1" d="M60 44v17l11 7"/>',pause:'<path pathLength="1" d="M52 46v28"/><path pathLength="1" d="M68 46v28"/>'};
 const KOM={refused:['bar','#E5484D','Refusé',['Vérifiez que votre solde est suffisant','Saisissez correctement votre code secret','Contrôlez votre plafond de transaction'],'Aucun montant n’a été débité.'],failed:['x','#E5484D','Non abouti',['Vérifiez votre solde avant de réessayer','Réessayez dans quelques instants','Changez de moyen de paiement si besoin'],'Aucun abonnement n’a été activé.'],network:['wifi','#E5484D','Hors connexion',['Activez le Wi‑Fi ou vos données mobiles','Rapprochez-vous d’une zone avec un meilleur réseau','Vérifiez votre solde si une demande est arrivée'],'Aucun abonnement n’a été activé.'],timeout:['clock','#F5A524','Expiré',['Ne payez pas une seconde fois','Consultez vos SMS et votre solde','Contactez le support avec la référence'],'Aucun abonnement n’a été activé.'],unavailable:['pause','#F5A524','Indisponible',['Le service ouvrira prochainement','Revenez un peu plus tard','Aucun montant n’a été débité'],'Aucun abonnement n’a été activé.']};
 const kov=s=>{const cd=KO[tmp.code]?tmp.code:'failed',k=KO[cd],m=KOM[cd],q=PLANS[tmp.k]||{},o=opOf(tmp.op),det=tmp.err&&cd!=='unavailable'&&cd!=='network'?`<div class="pk-det">${esc(tmp.err)}</div>`:'',
  at=tmp.koAt||(tmp.koAt=new Date()),dt=at.toLocaleDateString('fr-FR',{day:'2-digit',month:'short',year:'numeric'})+' à '+at.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}),
  dg=String(tmp.tel||'').replace(/\D/g,''),tel=dg.length>=4?(PAY.country.code+' '+dg.slice(0,2)+' •• •• '+dg.slice(-2)):'',
  bc=BR(o.name),rw=(a,b)=>`<div class="pt3-rw"><span>${a}</span><b>${b}</b></div>`,
  ref=tmp.ref?rw('Référence',esc(tmp.ref)):'',
  sup=SUPPORT_WA?`<button class="pt2-btn" data-p="sup" style="margin-top:6px">Contacter le support</button>`:'';
  return `<div class="pt-bar${bc?' pk-brb':''}"><b>Paiement</b></div><div class="pt-sc pt3 pt3c pk${bc?' pk-br':''}" style="--k:${bc?(bc[4]||bc[0]):m[1]};${bc?'--bg:'+bc[2]:''}"><div class="pk-ico" role="img" aria-label="${k[0]}"><i class="pk-r"></i><i class="pk-r r2"></i><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="pk-bg" cx="60" cy="60" r="44"/><circle class="pk-c" pathLength="1" cx="60" cy="60" r="44"/><g class="pk-g">${KOI[m[0]]}</g></svg></div><span class="pk-chip"><i></i>${m[2]}</span><h2>${k[0]}</h2><p>${k[1]}</p>${det}<div class="pt3-rc pk-rc">${rw('Montant','<span class="pk-am">'+num(q.price||0)+' FCFA</span>')}${q.n?rw('Offre','Partenaire '+q.n+' · 30 jours'):''}${o.name?rw('Moyen de paiement',o.name):''}${tel?rw('Numéro',tel):''}${rw('Date',dt)}${ref}</div>${k[2]?`<div class="pt3-act" style="--c1:${bc?bc[0]:'#4DB2FF'};--c2:${bc?bc[1]:'#1877F2'};--ct:${bc?bc[3]:'#fff'}"><button class="pt-go plan" data-p="retry">Réessayer</button></div><button class="pt2-btn" data-p="chg" style="margin-top:20px">Changer de moyen de paiement</button>`:`<div class="pt3-act" style="--c1:${bc?bc[0]:'#4DB2FF'};--c2:${bc?bc[1]:'#1877F2'};--ct:${bc?bc[3]:'#fff'}"><button class="pt-go plan" data-p="detail">Retour à l’offre</button></div>`}${sup}<p class="pk-sec">Paiement sécurisé · aucun code secret n’est conservé</p></div>`};
 const dash=(s,p)=>{if(s.shop.name&&!s.shop.uid){s.shop.uid=genUJM();pset(s)}const sh=s.shop,k=s.sub.plan,n=s.items.length,left=Math.max(0,Math.ceil((s.sub.exp-Date.now())/DAY)),fin=p.max===Infinity;
  return bar('Ma boutique','x')+`<div class="pt-sc" style="padding-top:0"><div class="pt-cv" style="${cvStyle(sh)}"></div><div class="pt-id">${logo({photo_url:sh.photo,name:sh.name||'B'},72)}<div><b>${esc(sh.name||'Ma boutique')}${k==='pro'?CERT:VER}</b><span>${sh.uid?esc(sh.uid)+' · ':''}Offre ${p.n} · ${left} jour${left>1?'s':''} restant${left>1?'s':''}</span></div></div>`
  +(!sh.name?'<div class="pt-note">Commencez par renseigner le nom, la photo de profil et la couverture de votre boutique.</div>':'')
  +`<div class="pt-use"><b>${n}${fin?'':' / '+p.max}</b> article${n>1?'s':''} publié${n>1?'s':''}${fin?' · illimité':''}${fin?'':`<i><u style="width:${Math.min(100,n/p.max*100)}%"></u></i>`}</div>`
  +(k==='pro'?sumHtml(s):'')+(left<=5?`<div class="pt-note">Votre abonnement se termine dans ${left} jour${left>1?'s':''}. <button class="pt-lk" data-p="buy" data-k="${k}">Renouveler</button></div>`:'')
  +`<div class="pt-act"><button class="pt-go alt" data-p="shop">${sh.name?'Modifier':'Créer'} la boutique</button><button class="pt-go" data-p="new">+ Article</button></div>`
  +(k==='standard'?`<div class="pt-up"><b>Passez en Pro · ${fmt(PLANS.pro.price)} / mois</b><span>Articles illimités, 5 photos par article, badge Certifié, promotions et mise en vedette.</span><button class="pt-go" data-p="det" data-k="pro">Passer en Pro</button></div>`:'')
  +`<h3>Mes articles</h3>`+(n?s.items.map((x,i)=>`<div class="pt-it">${x.ph&&x.ph[0]?`<img alt="" src="${esc(x.ph[0])}">`:'<span class="pt-im"></span>'}<div><b>${esc(x.t)}</b><small>${fmt(x.p)}${x.o?` <s>${fmt(x.o)}</s>`:''}${x.f?' · Vedette':''}${x.s?' · Épuisé':''}</small></div><div class="pt-ia"><button data-p="ed" data-i="${i}">Modifier</button>${k==='pro'?`<button data-p="dup" data-i="${i}">Dupliquer</button><button data-p="shr" data-i="${i}">Partager</button>`:''}<button class="dl" data-p="del" data-i="${i}">Retirer</button></div></div>`).join(''):'<div class="pt-empty">Aucun article pour l’instant.</div>')
  +`<button class="pt-lk" data-p="subs">Gérer mon abonnement</button></div>`};
 const shopv=s=>{const sh=s.shop;return bar(sh.name?'Modifier la boutique':'Créer ma boutique','home')+`<div class="pt-sc" style="padding-top:0"><label class="pt-cvup" style="${cvStyle(sh)}"><span>${sh.cover?'Changer la couverture':'+ Ajouter une couverture'}</span><input type="file" accept="image/*" hidden data-p="fc"></label><div class="pt-avw"><label class="pt-avup">${logo({photo_url:sh.photo,name:sh.name||'B'},84)}<em>+</em><input type="file" accept="image/*" hidden data-p="fa"></label><small>Photo de profil</small></div>`
  +`<label class="pt-l">Nom de la boutique</label><input id="pN" maxlength="40" placeholder="Ex. Chez Awa" value="${esc(sh.name||'')}"><label class="pt-l">Catégorie</label><select id="pC">${CATS.map(c=>`<option${sh.cat===c?' selected':''}>${esc(c)}</option>`).join('')}</select><label class="pt-l">Description</label><textarea id="pD" maxlength="300" placeholder="Que vendez-vous ? Horaires, conditions…">${esc(sh.desc||'')}</textarea><label class="pt-l">Horaires d’ouverture</label><input id="pH" maxlength="60" placeholder="Ex. Lun–Ven, 16 h – 19 h" value="${esc(sh.hours||'')}"><div class="pt-r2"><div><label class="pt-l">Téléphone / WhatsApp</label><input id="pL" inputmode="tel" placeholder="07 00 00 00 00" value="${esc(sh.tel||PRE.tel)}"></div><div><label class="pt-l">Lieu sur le campus</label><input id="pA" maxlength="60" placeholder="Ex. Cité B" value="${esc(sh.addr||PRE.addr)}"></div></div><button class="pt-go" data-p="ssave" style="margin-top:20px">Enregistrer</button></div>`};
 const itemv=(s,p)=>{const x=tmp.item,pro=s.sub.plan==='pro';
  return bar(tmp.idx==null?'Nouvel article':'Modifier l’article','home')+`<div class="pt-sc"><label class="pt-l" style="margin-top:0">Photos (${p.photos} maximum${pro?'':' · 5 en Pro'})</label><div class="pt-ph3">${x.ph.map(i=>`<img alt="" src="${esc(i)}">`).join('')}${x.ph.length<p.photos?`<label class="pt-add">+<input type="file" accept="image/*" hidden data-p="ip"></label>`:''}</div>`
  +`<label class="pt-l">Titre</label><input id="iT" maxlength="70" placeholder="Ex. Calculatrice Casio fx-92" value="${esc(x.t)}"><div class="pt-r2"><div><label class="pt-l">Prix (FCFA)</label><input id="iP" inputmode="numeric" value="${esc(x.p)}"></div><div><label class="pt-l">Catégorie</label><select id="iC">${CATS.map(c=>`<option${x.c===c?' selected':''}>${esc(c)}</option>`).join('')}</select></div></div>`
  +`<label class="pt-l">Prix barré (promotion)</label>`+(pro?`<input id="iO" inputmode="numeric" placeholder="Ancien prix, facultatif" value="${esc(x.o)}">`:`<button class="pt-lock" data-p="upg">Réservé à l’offre Pro<span class="pt-tag">PRO</span></button>`)
  +`<label class="pt-l">Description</label><textarea id="iD" maxlength="400" placeholder="État, taille, conditions…">${esc(x.d)}</textarea>`
  +`<label class="pt-l">Mise en vedette</label>`+(pro?`<label class="pt-chk"><input type="checkbox" id="iF"${x.f?' checked':''}>Afficher cet article en vedette</label>`:`<button class="pt-lock" data-p="upg">Réservé à l’offre Pro<span class="pt-tag">PRO</span></button>`)
  +`<label class="pt-l">Disponibilité</label><label class="pt-chk"><input type="checkbox" id="iS"${x.s?' checked':''}>Marquer comme épuisé</label>`+`<button class="pt-go" data-p="isave" style="margin-top:20px">Publier l’article</button></div>`};
 const draw=()=>{const k=d.scrollTop,s=S(),p=planOf(s);let h;
  if(!p&&!['subs','plans','detail','pay','opay','proc','ok','ko'].includes(v))v='subs';
  h=v==='subs'?subs(s):v==='plans'?plans(s):v==='detail'?detail(s):v==='pay'?payv(s):v==='opay'?opayv(s):v==='proc'?procv(s):v==='ok'?okv(s):v==='ko'?kov(s):v==='shop'?shopv(s):v==='item'?itemv(s,p):dash(s,p);
  const th=(v==='opay'||v==='proc')&&tmp.op?(OTH[tmp.op]||''):'';if(th)d.setAttribute('data-th',th);else d.removeAttribute('data-th');d.innerHTML=h;d.scrollTop=k};
 const keepShop=()=>{const s=S();if(!g('#pN'))return s;Object.assign(s.shop,{name:g('#pN').value.trim(),cat:g('#pC').value,desc:g('#pD').value.trim(),tel:g('#pL').value.trim(),addr:g('#pA').value.trim(),hours:g('#pH').value.trim()});return s};
 const keepItem=()=>{if(!g('#iT'))return;const x=tmp.item;x.t=g('#iT').value;x.p=g('#iP').value.replace(/\D/g,'');x.c=g('#iC').value;x.d=g('#iD').value;if(g('#iO'))x.o=g('#iO').value.replace(/\D/g,'');if(g('#iF'))x.f=g('#iF').checked;if(g('#iS'))x.s=g('#iS').checked};
 const blank=()=>({t:'',p:'',o:'',c:CATS[0],d:'',f:false,s:false,ph:[]});
 draw();r.appendChild(d);
 d.addEventListener('input',e=>{if(e.target.id!=='pTel')return;e.target.value=fmtTel(e.target.value);tmp.tel=e.target.value;const go=g('#pGo');if(go)go.disabled=!(tmp.op&&digits(tmp.tel).length===PAY.country.len)});
 d.addEventListener('change',async e=>{const t=e.target,a=t.dataset.p;if(!a||!t.files||!t.files[0])return;
  if(a==='fc'||a==='fa'){const s=keepShop(),img=await shrink2(t.files[0],a==='fc'?900:300,.72);if(!img){toast('Image illisible');return}if(a==='fc')s.shop.cover=img;else s.shop.photo=img;pset(s);draw();return}
  if(a==='ip'){keepItem();const img=await shrink2(t.files[0],640,.75);if(img){tmp.item.ph.push(img);draw()}}});
 d.addEventListener('click',e=>{const b=e.target.closest('[data-p]');if(!b||b.tagName==='INPUT')return;const a=b.dataset.p,s=S(),p=planOf(s);if(p&&(a==='buy'||a==='upg'||a==='pay')){toast('Votre pass '+p.n+' est en cours jusqu’au '+dt(s.sub.exp)+'. Un nouveau paiement sera possible après cette date.');return}
  if(a==='x'){stop();return d.remove()}
  if(a==='openpay'){if(tmp.url)window.open(tmp.url,'_blank','noopener');return}
  if(a==='stud'){d.remove();return sellSheet()}
  if(a==='home'){v='home';tmp={};return draw()}
  if(a==='plans'){v='plans';d.scrollTop=0;return draw()}
  if(a==='subs'){v='subs';tmp={};d.scrollTop=0;return draw()}
  if(a==='det'){tmp.sel=b.dataset.k;v='detail';d.scrollTop=0;return draw()}
  if(a==='sel'){tmp.sel=b.dataset.k;d.scrollTop=0;return draw()}
  if(a==='buy'){const k=b.dataset.k,q=PLANS[k];if(s.items.length>q.max){toast('Vous avez '+s.items.length+' articles : l’offre '+q.n+' en accepte '+q.max);return}tmp={k:k,sel:k,op:'',tel:''};v='pay';d.scrollTop=0;return draw()}
  if(a==='upg'){if(!p)return;tmp={sel:'pro'};v='detail';d.scrollTop=0;return draw()}
  if(a==='op'){tmp.op=b.dataset.o;tmp.oid='';v='opay';d.scrollTop=0;return draw()}
  if(a==='detail'){v='detail';d.scrollTop=0;return draw()}
  if(a==='cancel'){stop();v='opay';return draw()}
  if(a==='retry'){tmp.oid='';tmp.koAt=null;v='opay';d.scrollTop=0;return draw()}
  if(a==='sup'){const q=PLANS[tmp.k]||{};window.open('https://wa.me/'+SUPPORT_WA+'?text='+encodeURIComponent('Bonjour, problème de paiement UJLoG MarketPlace. Offre '+(q.n||'')+', moyen '+opOf(tmp.op).name+(tmp.ref?', référence '+tmp.ref:'')+'.'),'_blank');return}
  if(a==='chg'){tmp.op='';tmp.oid='';tmp.koAt=null;v='pay';d.scrollTop=0;return draw()}
  if(a==='fin'){stop();d.remove();return openStore(null,'Ma boutique',null,true)}
  if(a==='pay'){const oc=opOf(tmp.op),dg=oc.card?'':digits((g('#pTel')||{}).value);if(!tmp.op||(!oc.card&&dg.length!==PAY.country.len))return;tmp.tel=dg;const q=PLANS[tmp.k],o=opOf(tmp.op),
   order={orderId:tmp.oid||('UJ'+Date.now().toString(36).toUpperCase()),amount:q.price,currency:'XOF',plan:tmp.k,operator:tmp.op,phone:oc.card?'':PAY.country.code+dg,uid:String((window.UJX||{}).id||''),description:'Abonnement Partenaire '+q.n+' · 30 jours'};
   tmp.ref=null;tmp.url='';v='proc';d.scrollTop=0;draw();const t0=Date.now(),alive=()=>d.isConnected&&v==='proc';tmp.t0=t0;tk=setInterval(tick,1000);
   const fail=(m,c)=>{stop();if(!alive())return;tmp.err=m;tmp.code=c||'failed';v='ko';draw()};
   PAY.create(order).then(r=>{if(!alive())return;tmp.ref=r.ref;tmp.url=(r.url&&/^https:\/\//.test(r.url))?r.url:'';if(tmp.url){try{window.open(tmp.url,'_blank','noopener')}catch(e){}}draw();
    timer=setInterval(async()=>{if(!alive())return stop();if(Date.now()-t0>TMO)return fail('','timeout');
     try{const c=await PAY.check(r.ref);if(!alive())return;
      if(c.status==='failed')return fail(c.reason||'',KO[c.code]?c.code:'refused');
      if(c.status==='success'){stop();const pk=PLANS[c.plan]?c.plan:tmp.k,s2=S(),now=Date.now(),cur=planOf(s2),base=cur&&s2.sub.plan===pk?s2.sub.exp:now;
       s2.sub={plan:pk,at:now,exp:base+30*DAY,op:o.name,ref:r.ref};pset(s2);
       tmp.receipt={ref:r.ref,plan:pk,op:o.name,date:new Date().toLocaleString('fr-FR',{dateStyle:'long',timeStyle:'short'}),until:s2.sub.exp};v='ok';d.scrollTop=0;draw()}
     }catch(e){}},2500)}).catch(e=>fail((e&&e.message)||'',(e&&e.code)||'unavailable'));return}
  if(a==='shop'){v='shop';return draw()}
  if(a==='ssave'){const first=!(S().shop&&S().shop.name),prevUid=(S().shop||{}).uid;const s2=keepShop();s2.shop.uid=prevUid||genUJM();if(!s2.shop.name||s2.shop.tel.replace(/\D/g,'').length<8){toast('Renseignez le nom et un téléphone valide');return}if(pset(s2)){v='home';draw();d.scrollTop=0;if(first)ujCelebrate(s2.shop.name,s2.shop.photo,s2.shop.uid);else toast('Boutique enregistrée')}return}
  if(a==='new'){if(s.items.length>=p.max){toast('Limite de '+p.max+' articles atteinte avec l’offre '+p.n);tmp={sel:'pro'};v='detail';d.scrollTop=0;return draw()}tmp={idx:null,item:blank()};v='item';d.scrollTop=0;return draw()}
  if(a==='ed'){const i=+b.dataset.i;tmp={idx:i,item:Object.assign(blank(),s.items[i])};v='item';d.scrollTop=0;return draw()}
  if(a==='dup'&&p&&s.sub.plan==='pro'){const x=s.items[+b.dataset.i];s.items.unshift(Object.assign({},x,{t:x.t+' (copie)',f:false,at:Date.now()}));if(pset(s))toast('Article dupliqué');return draw()}
  if(a==='shr'&&p&&s.sub.plan==='pro'){const x=s.items[+b.dataset.i],sh=s.shop,msg=x.t+' — '+fmt(x.p)+(x.o?' (au lieu de '+fmt(x.o)+')':'')+(x.d?'\n'+x.d:'')+'\n'+(sh.name?'Boutique '+sh.name:'')+(sh.tel?' · '+sh.tel:'')+'\nSur la Marketplace UJLoG';if(navigator.share){navigator.share({text:msg}).catch(()=>{})}else window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank');return}
  if(a==='del'){if(!confirm('Retirer cet article de votre boutique ?'))return;s.items.splice(+b.dataset.i,1);pset(s);return draw()}
  if(a==='isave'){keepItem();const x=tmp.item,pr=Number(x.p),o=Number(x.o||0);
   if(!x.t.trim()||!(pr>0)){toast('Renseignez le titre et un prix');return}
   if(o&&o<=pr){toast('Le prix barré doit être supérieur au prix');return}
   if(tmp.idx==null&&s.items.length>=p.max){toast('Limite de '+p.max+' articles atteinte');tmp={sel:'pro'};v='detail';d.scrollTop=0;return draw()}
   const it={t:x.t.trim(),p:pr,o:o||0,c:x.c,d:x.d.trim(),f:s.sub.plan==='pro'&&!!x.f,s:!!x.s,ph:x.ph.slice(0,p.photos),at:Date.now()};
   if(tmp.idx==null)s.items.unshift(it);else s.items[tmp.idx]=Object.assign(s.items[tmp.idx],it);
   if(pset(s)){toast('Article publié');v='home';tmp={};d.scrollTop=0;draw()}}
 })}

window.UJMK={open,close,show:(sl,n)=>openStore(sl,n),store:openStore,partner:partSheet};
})();

}catch(e){console.error("[ujlog] v102MarketJs",e)}
/* ==== ujia ==== */
try{
window.UJIA=(()=>{const CDN='https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';let wk=null;
const lib=()=>window.Tesseract?Promise.resolve():new Promise((ok,ko)=>{const s=document.createElement('script');s.src=CDN;s.onload=ok;s.onerror=()=>ko(new Error('réseau'));document.head.appendChild(s);setTimeout(()=>ko(new Error('délai')),20000)});
const worker=async()=>{if(!wk){await lib();wk=await Tesseract.createWorker('fra');await wk.setParameters({tessedit_pageseg_mode:'11',preserve_interword_spaces:'1'})}return wk};
const prep=(c,a)=>{const q=a%180,w=q?c.height:c.width,h=q?c.width:c.height,k=Math.min(1.6,1500/Math.max(w,h)),o=document.createElement('canvas');o.width=Math.round(w*k);o.height=Math.round(h*k);const x=o.getContext('2d');x.translate(o.width/2,o.height/2);x.rotate(a*Math.PI/180);x.drawImage(c,-c.width*k/2,-c.height*k/2,c.width*k,c.height*k);
const d=x.getImageData(0,0,o.width,o.height),p=d.data,n=p.length/4,g=new Uint8Array(n),H=new Uint32Array(256);for(let i=0;i<n;i++){g[i]=.299*p[4*i]+.587*p[4*i+1]+.114*p[4*i+2];H[g[i]]++}
let lo=0,hi=255,s=0;while(lo<254&&(s+=H[lo])<n*.02)lo++;s=0;while(hi>lo+1&&(s+=H[hi])<n*.02)hi--;const m=255/Math.max(1,hi-lo);for(let i=0;i<n;i++){p[4*i]=p[4*i+1]=p[4*i+2]=Math.max(0,Math.min(255,(g[i]-lo)*m))}x.putImageData(d,0,0);return o};
const parse=t=>({ip:((t.match(/\d[\d .]{7,16}\d/g)||[]).map(x=>x.replace(/\D/g,'')).filter(x=>x.length>=9&&x.length<=14).sort((a,b)=>b.length-a.length))[0]||'',email:(t.match(/[\w.+-]+@[\w-]+(\.[\w-]+)+/)||[])[0]||'',univ:/gu[eé]d[eé]|universit/i.test(t),lines:t.split(/\n+/).map(s=>s.trim()).filter(s=>s.replace(/[^\p{L}\d]/gu,'').length>2)});
const read=async(c,say)=>{say=say||(()=>{});let b=null;try{const w=await worker();for(const [i,a] of [90,0,270,180].entries()){say('UJIA analyse… '+(i+1)+'/4');const o=prep(c,a),{data}=await w.recognize(o),sc=data.words.reduce((t,x)=>t+(x.confidence>=55&&x.text.replace(/\W/g,'').length>1?x.confidence:0),0);if(!b||sc>b.sc)b={sc,o,t:data.text,a};if(sc>600)break}}catch(e){console.warn('UJIA',e)}
const r=b?parse(b.t):{ip:'',email:'',univ:false,lines:[]};r.canvas=b&&b.sc>150?b.o:c;r.angle=b?b.a:0;return r};
const e=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const html=i=>!i||!i.lines||!i.lines.length?'':'<div class="ujl"><b>Lu par UJIA</b>'+(i.ip?'<br>Numéro : <b>'+e(i.ip)+'</b>':'')+(i.email?'<br>Email : '+e(i.email):'')+'<br>'+i.lines.slice(0,8).map(e).join('<br>')+'</div>';
const faces=async s=>{try{if(!('FaceDetector' in window))return null;return(await new FaceDetector({fastMode:true,maxDetectedFaces:5}).detect(s)).map(f=>f.boundingBox)}catch(_){return null}};
return{nom:'UJIA',version:'1.0',read,parse,faces,html}})();
}catch(e){console.error("[ujlog] ujia",e)}
/* ==== v93js ==== */
try{
(()=>{let p=null;const sync=()=>{const on=!!document.querySelector('.stories .st.me[data-story]');if(on===p)return;p=on;document.querySelectorAll('.v29ph').forEach(e=>e.classList.toggle('ujst',on))};setInterval(()=>{const on=!!document.querySelector('.stories .st.me[data-story]');document.querySelectorAll('.v29ph').forEach(e=>e.classList.toggle('ujst',on))},700);
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.id=='pcust'){e.preventDefault();const b=document.querySelector('[data-padd]');b&&b.click()}})})();
}catch(e){console.error("[ujlog] v93js",e)}
/* ==== v94js ==== */
try{
window.UJLOC=(()=>{let cur=null;const D=['Campus de l’UJLoG','Bibliothèque universitaire','Amphithéâtre','Restaurant universitaire','Résidence universitaire'],V='Daloa, Côte d’Ivoire';
const e=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const inner=l=>'<b>'+e(l.a)+'</b>'+(l.b?'<small>'+e(l.b)+'</small>':'');
const html=l=>l&&l.a?'<div class="ujloc">'+inner(l)+'</div>':'';
const sync=()=>{const o=document.getElementById('ujloc'),b=document.getElementById('stloc');if(o){o.hidden=!cur;o.innerHTML=cur?inner(cur):''}if(b)b.classList.toggle('on',!!cur)};
const set=l=>{cur=l&&l.a&&l.a.trim()?{a:l.a.trim().slice(0,40),b:(l.b||'').trim().slice(0,50)}:null;sync()};
const add=o=>{if(cur)o.loc=cur;return o};
const geo=async()=>{const p=await new Promise((ok,ko)=>navigator.geolocation?navigator.geolocation.getCurrentPosition(ok,ko,{enableHighAccuracy:true,timeout:12000,maximumAge:60000}):ko(0)),y=p.coords.latitude,x=p.coords.longitude;
try{const j=await(await fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=17&accept-language=fr&lat='+y+'&lon='+x)).json(),a=j.address||{},q=a.neighbourhood||a.suburb||a.quarter||a.city_district||a.hamlet||'',v=a.city||a.town||a.village||a.municipality||a.county||'';if(q||v)return{a:q||v,b:[q?v:'',a.country].filter(Boolean).join(', ')}}catch(_){}
const j=await(await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=fr&latitude='+y+'&longitude='+x)).json();return{a:j.locality||j.city||'',b:[j.locality&&j.city&&j.city!=j.locality?j.city:'',j.countryName].filter(Boolean).join(', ')}};
const open=()=>{const d=document.createElement('div');d.className='ujls';d.innerHTML='<div class="ujlp"><b class="ujh">Ajouter un lieu</b><button type="button" class="v29b" data-g>📍 Utiliser ma position</button><small class="mu" data-m></small><label class="v79f"><span>Nom du lieu</span><input id="ujla" maxlength="40" placeholder="Ex. Tazibouo Plateau" autocomplete="off" value="'+(cur?e(cur.a):'')+'"></label><label class="v79f"><span>Ville, pays</span><input id="ujlb" maxlength="50" autocomplete="off" value="'+e(cur?cur.b:V)+'"></label><div class="ujch">'+D.map(x=>'<button type="button" class="chp" data-c="'+e(x)+'">'+e(x)+'</button>').join('')+'</div><button type="button" class="v29b" data-ok>Ajouter à ma story</button>'+(cur?'<button type="button" class="v29b o" data-rm>Retirer le lieu</button>':'')+'</div>';document.body.appendChild(d);
const a=d.querySelector('#ujla'),b=d.querySelector('#ujlb'),m=d.querySelector('[data-m]'),done=l=>{set(l);d.remove()};
d.addEventListener('click',async ev=>{const t=ev.target;if(t===d)return d.remove();const c=t.closest('[data-c]');if(c){a.value=c.dataset.c;return}if(t.closest('[data-rm]'))return done(null);if(t.closest('[data-ok]')){if(!a.value.trim()){a.focus();return}return done({a:a.value,b:b.value})}
if(t.closest('[data-g]')){m.textContent='Recherche de ta position…';try{const l=await geo();if(l&&l.a)return done(l);m.textContent='Lieu introuvable : saisis-le à la main.'}catch(_){m.textContent='Position indisponible : autorise la localisation ou saisis le lieu.'}}})};
document.addEventListener('click',ev=>{if(ev.target.closest('#stloc')){ev.stopPropagation();ev.preventDefault();open()}},true);
return{set,add,html,open,get:()=>cur}})();
}catch(e){console.error("[ujlog] v94js",e)}
/* ==== v101-sync ==== */
try{

/* v101 : synchronisation complète du profil — photo, pseudo et nom aussi sur les derniers éléments restés en dur
   (avatars des commentaires et republications, @vous, ujlog.app/@vous, ligne « compte actuel ») */
(function(){
  var busy=0,raf=0,obs,SK={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1};
  function me(){
    var U=window.UJX||{},h='';
    try{h=String(U.pse||(window.UJID?UJID():'')).toLowerCase()}catch(e){}
    var nom=String(U.nom||'').trim(),pre=String(U.pre||'').trim();
    return{h:h||'vous',ph:String(U.ph||''),nm:((pre+' '+nom.toUpperCase()).trim())||'Vous'};
  }
  function texts(m){
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode;return p&&SK[p.nodeName]?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n,L=[];
    while((n=w.nextNode()))L.push(n);
    L.forEach(function(n){
      var cur=n.nodeValue,o=(n.__v1o!=null&&cur===n.__v1r)?n.__v1o:cur,r=o;
      if(o.indexOf('@vous')>-1)r=o.replace(/@vous(?![A-Za-z0-9._])/g,'@'+m.h);
      else if(o.trim()==='Vous'&&n.parentNode&&n.parentNode.nodeName==='B'&&n.parentNode.parentNode&&n.parentNode.parentNode.classList.contains('fl')&&/compte actuel/.test(n.parentNode.parentNode.textContent))r=o.replace('Vous',m.nm);
      if(r!==cur){n.__v1o=o;n.__v1r=r;n.nodeValue=r}
    });
  }
  function avatars(m){
    document.querySelectorAll('.pva2').forEach(function(n){
      if(m.ph){
        if(n.dataset.v1==='1'&&n.dataset.p===m.ph)return;
        if(n.dataset.v1!=='1')n.dataset.i=n.innerHTML;
        n.style.background="url('"+m.ph+"') center/cover";n.innerHTML='';n.dataset.v1='1';n.dataset.p=m.ph;
      }else if(n.dataset.v1==='1'){
        n.style.background='';n.innerHTML=n.dataset.i||'';n.dataset.v1='';n.dataset.p='';
      }
    });
  }
  function run(){
    raf=0;if(busy)return;busy=1;
    try{
      var m=me();
      texts(m);avatars(m);
      try{if(window.S&&S.acc&&S.acc[0]){S.acc[0].n=m.nm;S.acc[0].h='@'+m.h}}catch(e){}
    }catch(e){}
    if(obs)obs.takeRecords();busy=0;
  }
  function soon(){if(!raf)raf=requestAnimationFrame(run)}
  function start(){
    obs=new MutationObserver(function(){if(!busy)soon()});
    obs.observe(document.body,{childList:true,subtree:true});
    var u=window.UJ_SYNC;
    window.UJ_SYNC=function(){try{u&&u.apply(this,arguments)}finally{setTimeout(soon,350)}};
    addEventListener('message',function(e){if(e.data&&(e.data.t=='ujsave'||e.data.t=='ujvset'))setTimeout(soon,400)});
    document.addEventListener('click',function(){setTimeout(soon,150)},true);
    soon();
  }
  if(document.body)start();else document.addEventListener('DOMContentLoaded',start);
})();

}catch(e){console.error("[ujlog] v101-sync",e)}
/* ==== uj-v145-performance-js ==== */
try{

(function(){
 'use strict';
 /* Synchronisation moins agressive : conserve les rafraîchissements au retour au premier plan. */
 /* intervalMs est défini à 30 secondes dans AutoSync. */
 /* Chargement différé des images non visibles, y compris celles ajoutées après navigation. */
 function tuneImages(root){
  (root||document).querySelectorAll('img').forEach(function(img){
   if(img.dataset.ujLazyDone==='1')return;
   img.dataset.ujLazyDone='1';
   img.decoding='async';
   var r=img.getBoundingClientRect();
   var visible=r.width>0&&r.height>0&&r.top<innerHeight+160&&r.bottom>-160;
   if(!visible && !img.hasAttribute('loading'))img.loading='lazy';
   if(!visible && !img.hasAttribute('fetchpriority'))img.fetchPriority='low';
  });
 }
 function startImages(){
  tuneImages(document);
  try{
   var mo=new MutationObserver(function(records){
    records.forEach(function(rec){rec.addedNodes&&rec.addedNodes.forEach(function(n){
     if(n.nodeType===1){if(n.tagName==='IMG')tuneImages(n.parentNode||document);else tuneImages(n);}
    });});
   });
   mo.observe(document.documentElement,{childList:true,subtree:true});
  }catch(e){}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startImages,{once:true});else startImages();
 /* Délais bornés uniquement pour les services cartographiques externes. Supabase et les uploads ne sont pas touchés. */
 try{
  if(window.fetch&&!window.fetch.__ujTimeout){
   var nativeFetch=window.fetch.bind(window);
   var guardedFetch=function(input,init){
    var url=typeof input==='string'?input:(input&&input.url)||'';
    if(!/router\.project-osrm\.org|nominatim\.openstreetmap\.org|api\.bigdatacloud\.net/i.test(url))return nativeFetch(input,init);
    init=Object.assign({},init||{});
    var ctl=new AbortController(),timer=setTimeout(function(){ctl.abort();},9000);
    if(init.signal){
     if(init.signal.aborted)ctl.abort();
     else init.signal.addEventListener('abort',function(){ctl.abort();},{once:true});
    }
    init.signal=ctl.signal;
    return nativeFetch(input,init).finally(function(){clearTimeout(timer);});
   };
   guardedFetch.__ujTimeout=true;window.fetch=guardedFetch;
  }
 }catch(e){}
 /* V146 : ne pas intercepter le bouton d’aperçu.
    Il conserve son action openStorePreview() dans l’espace partenaire, sans
    rediriger vers la navigation globale de la Marketplace. */
})();

}catch(e){console.error("[ujlog] uj-v145-performance-js",e)}
/* ==== ujm-js ==== */
try{

(function(){
if(window.__ujm)return;window.__ujm=1;
var K='uj_msg_v2',doc=document;
var MEM=[];
var COL=['#0EA5E9','#F59E0B','#F43F5E','#8B5CF6','#14B8A6','#EC4899'];
function E(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function T(){var d=new Date();return('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)}
function ini(n){return n.split(' ').map(function(w){return w[0]}).join('').slice(0,2).toUpperCase()}
function col(n){var h=0;for(var i=0;i<n.length;i++)h+=n.charCodeAt(i);return COL[h%COL.length]}
function seed(){return{id:10,v:"list",tab:"c",seg:"dm",cur:null,info:0,disc:[],c:[]}}
var S;try{S=JSON.parse(localStorage.getItem(K))}catch(e){}if(!S||!S.c)S=seed();
function save(){try{localStorage.setItem(K,JSON.stringify(S,function(k,v){if(['rec','pk','mm','hm','ty','pl','sq','sel','mv','mk'].indexOf(k)>-1)return undefined;if(typeof v=='string'&&v.indexOf('blob:')==0)return'';return v}))}catch(e){}}
function C(id){return S.c.filter(function(c){return c.id==id})[0]}
function reqs(){var r=[];S.c.forEach(function(c){if(c.st=='in')r.push({k:'in',c:c});if(c.t=='g'&&c.adm)(c.jr||[]).forEach(function(n){r.push({k:'jr',c:c,n:n})})});return r}
function av(n,s){return'<span class="ua" style="background:'+col(n)+';'+(s?'width:'+s+'px;height:'+s+'px;font-size:'+s*.38+'px':'')+'">'+E(ini(n))+'</span>'}
var root=doc.createElement('div');root.id='ujm';root.hidden=true;doc.body.appendChild(root);
function sub(c){return c.st=='out'?'En attente d’acceptation':c.st=='req'?'Demande envoyée à l’administrateur':c.st=='no'?'Refusée':c.st=='in'?(c.t=='g'?'Invitation de '+E(c.by||''):'Demande de discussion'):(c.msgs.length?E((c.msgs[c.msgs.length-1].x||c.msgs[c.msgs.length-1].sys||'')):'')}
function unr(c){if(c.rs>Date.now())return 0;var rd=c.rd,l=c.msgs[c.msgs.length-1];if(rd==null)return l&&!l.me&&!l.sys&&c.st=='ok'?1:0;var n=0;for(var i=rd;i<c.msgs.length;i++)if(!c.msgs[i].me&&!c.msgs[i].sys)n++;return n}
function last(c){var l=c.msgs[c.msgs.length-1];if(c.st!='ok')return sub(c);if(c.t=='p'&&!c.msgs.some(function(m){return!m.sys}))return'Écris à la page '+E(c.n);if(!l)return'Dis bonjour à '+E(c.n);if(l.sys)return E(l.sys);return(l.me?'Vous : ':'')+(l.del?'🚫 Message supprimé':l.stk?'🎨 Sticker':l.vn?'🎤 Message vocal':l.img!=null?'📷 Photo':l.f?'📄 '+E(l.f):E(l.x||''))}
function list(){
 var R=reqs(),r=S.tab=='r',h=HL(r,r?'':'<button class="ib" data-a="new" aria-label="Nouvelle discussion">'+ic('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5M18 8v6M15 11h6"/>')+'</button>')+'<div class="ub ulb">';
 if(!r){
  if(1)h+='<input id="uls" class="uin" placeholder="Rechercher une discussion" value="'+E(S.ls||'')+'">';
  if(!S.ls)h+='<button class="ur ur2" data-a="tab:r"><span class="uaw"><span class="ua usq" style="width:56px;height:56px;background:linear-gradient(145deg,#3BDA82,#15803D)">'+ic('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5M15 17.500l2.300 2.300 4-4.600"/>')+'</span></span><span class="fl"><b class="ubo">Demandes de discussion</b><small>'+(R.length?R.length+' en attente de ta réponse':'Aucune demande')+'</small></span>'+(R.length?'<b class="ubd">'+R.length+'</b>':'')+'</button>';
  var L=S.c.filter(function(c){return c.st!='in'&&(!S.ls||c.n.toLowerCase().indexOf(S.ls.toLowerCase())>-1)});
  if(!L.length)h+='<p class="ue">'+(S.ls?'Aucun résultat.':'Aucune discussion. Touche l’icône en haut à gauche pour en démarrer une.')+'</p>';
  L.forEach(function(c){var u=unr(c),l=c.msgs[c.msgs.length-1],on=0;
   h+='<button class="ur ur2" data-a="open:'+c.id+'"><span class="uaw">'+(c.t=='g'?gav(c,56):av(c.n,56))+(on?'<i class="uon2"></i>':'')+'</span><span class="fl"><b class="'+(u?'ubo':'')+'">'+(c.t=='g'?'👥 ':c.t=='p'?'📄 ':'')+E(c.n)+'</b><small class="'+(u?'ubo':'')+'">'+last(c)+'</small></span>'+(u?'<b class="ubd">'+u+'</b>':(!l&&c.st=='ok'?'<span class="ucm">'+ic('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>')+'</span>':'<span class="ut">'+(l&&l.ts||'')+'</span>'))+'</button>'})}
 else{if(!R.length)h+='<p class="ue">Aucune demande en attente.</p>';
  R.forEach(function(q){var c=q.c;
   if(q.k=='in')h+='<div class="ur ur2">'+av(c.n,56)+'<span class="fl"><b class="ubo">'+E(c.n)+'</b><small>'+(c.t=='g'?'Invitation de '+E(c.by||'')+' à rejoindre le groupe':E(c.msgs[0]?c.msgs[0].x:'veut discuter avec toi'))+'</small><span class="uab"><button class="btn" data-a="acc:'+c.id+'">Accepter</button><button class="btn s" data-a="ref:'+c.id+'">Refuser</button></span></span></div>';
   else h+='<div class="ur ur2">'+av(q.n,56)+'<span class="fl"><b class="ubo">'+E(q.n)+'</b><small>veut rejoindre « '+E(c.n)+' »</small><span class="uab"><button class="btn" data-a="ja:'+c.id+':'+E(q.n)+'">Approuver</button><button class="btn s" data-a="jx:'+c.id+':'+E(q.n)+'">Refuser</button></span></span></div>'})}
 return h+'</div>'}
function nw(){
 var h=HD('Nouveau','back','')+'<div class="useg"><button data-a="seg:dm" aria-pressed="'+(S.seg=='dm')+'">Discussion</button><button data-a="seg:g" aria-pressed="'+(S.seg=='g')+'">Groupe</button></div><div class="ub">';
 if(S.seg=='dm'){h+='<p class="us">Le membre devra accepter avant que vous puissiez échanger.</p>';if(!MEM.length)h+='<p class="us">Aucun membre disponible pour le moment.</p>';
  MEM.forEach(function(n){if(S.c.some(function(c){return c.t=='dm'&&c.n==n}))return;h+='<button class="ur ur2" data-a="dm:'+E(n)+'">'+av(n,56)+'<span class="fl"><b>'+E(n)+'</b><small>Envoyer une demande</small></span></button>'})}
 else{h+='<input id="ugn" class="uin" placeholder="Nom du groupe" maxlength="40"><p class="us">Choisis les membres : chacun doit accepter l’invitation.</p>';
  MEM.forEach(function(n){h+='<label class="ur ur2">'+av(n,56)+'<span class="fl"><b>'+E(n)+'</b></span><input type="checkbox" class="ugm" value="'+E(n)+'"></label>'});
  h+='<button class="btn ujw" data-a="mk">Créer le groupe</button><p class="us">Groupes à rejoindre (l’administrateur doit approuver)</p>';
  S.disc.forEach(function(d){var sent=S.c.some(function(c){return c.did==d.id});h+='<div class="ur ur2">'+av(d.n,56)+'<span class="fl"><b>'+E(d.n)+'</b><small>'+E(d.d)+'</small></span>'+(sent?'<span class="ut">Envoyée</span>':'<button class="btn s ujb" data-a="join:'+d.id+'">Demander</button>')+'</div>'})}
 return h+'</div>'}
function ic(p){return'<svg class="i" viewBox="0 0 24 24">'+p+'</svg>'}
var BK=ic('<path d="M15 5l-7 7 7 7"/>'),DOT=ic('<circle cx="12" cy="5" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="12" cy="19" r="1.2"/>'),MIC=ic('<path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4" stroke-width="2.4"/>'),SND=ic('<path d="M12 19V6M6 11.500l6-6 6 6" stroke-width="2.8"/>');
function gav(c,s){var L='';try{L=typeof LOGO!='undefined'?LOGO:''}catch(e){}return'<span class="ua ug2" style="width:'+s+'px;height:'+s+'px;'+(L?'background:#fff url('+L+') center/78% no-repeat':'background:'+col(c.n))+'">'+(L?'':E(ini(c.n)))+'</span>'}
var EMO=["😀", "😂", "🥹", "😍", "😘", "😎", "🤔", "😅", "😭", "😡", "👍", "👎", "🙏", "👏", "🔥", "❤️", "💯", "🎉", "✅", "❌", "😮", "🤝", "💪", "📚", "🎓", "☕", "😴", "🙌", "👌", "🤣", "😉", "🥳", "😢", "😊", "🤗", "🙄"];
var RX=['👍','❤️','😂','😮','🙏'],REP=['Ok, merci 👍','D’accord !','Je regarde ça et je te réponds.','😂😂','Parfait, à demain !'];
function fmt(n){return Math.floor(n/60)+':'+('0'+n%60).slice(-2)}
function bub(c,m,i,g){if(m.sys)return'<p class="us usy">'+E(m.sys)+'</p>';
 if(m.stk&&!m.del)return'<div class="ubb ust1'+(m.me?' me':'')+SC(i)+'" data-a="'+(S.sel?'sl':'mm')+':'+i+'">'+SK(m.stk)+'<i>'+m.ts+(m.me?TK(m):'')+'</i></div>';var b='';if(m.del)b='<span class="udl">🚫 Message supprimé</span>';
 else{if(m.img!=null)b+=m.img?'<img class="uim" src="'+E(m.img)+'" alt="Photo">':'<span class="udl">📷 Photo</span>';
  if(m.f)b+='<div class="udc"><span>📄</span><b>'+E(m.f)+'</b><small>'+E(m.sz||'')+'</small></div>';
  if(m.vn)b+='<div class="uvn"><button data-a="pl:'+i+'" aria-label="Lire">'+(S.pl===i?ic('<path d="M8 5v14M16 5v14"/>'):ic('<path d="M7 4l13 8-13 8z"/>'))+'</button><span class="uwf'+(S.pl===i?' on':'')+'">'+'<u></u><u></u><u></u><u></u><u></u><u></u><u></u><u></u><u></u><u></u><u></u><u></u>'+'</span><b>'+fmt(m.vn)+'</b></div>';
  if(m.x)b+='<span>'+E(m.x)+'</span>'}
 return'<div class="ubb'+(m.me?' me':'')+SC(i)+'" data-a="'+(S.sel?'sl':'mm')+':'+i+'">'+(g&&!m.me?'<b class="uwn" style="color:'+col(m.w)+'">~ '+E(m.w)+'</b>':'')+(m.q&&!m.del?'<div class="uq"><b style="color:'+col(m.q.w)+'">'+E(m.q.w)+'</b>'+E(m.q.x)+'</div>':'')+b+'<i>'+m.ts+(m.me?TK(m):'')+'</i>'+(m.rx?'<em class="urx">'+m.rx+'</em>':'')+'</div>'}
function chat(){var c=C(S.cur),g=c.t=='g',ok=c.st=='ok',q=(S.q||'').toLowerCase();
 var names=S.ty==c.id?'en train d’écrire…':g?(c.m.filter(function(m){return m.st=='ok'}).map(function(m){return m.n}).join(', ')||'Toi uniquement'):(c.blk?'Bloqué(e)':c.rs>Date.now()?'🔕 Restreint(e)':ok?(c.t=='p'?'Message à la page uniquement':'Discussion autorisée'):sub(c));
 var h='<header class="uh uhc uhd">'+MOT+'<button class="ib" data-a="back" aria-label="Retour">'+BK+'</button><button class="uw" data-a="'+(g?'info':c.t=='p'?'nop':'prof')+'">'+(g?gav(c,40):av(c.n,40))+'<span class="fl"><b>'+E(c.n)+'</b><small>'+E(names)+'</small></span></button>'+(ok?'<button class="ib" data-a="sq" aria-label="Rechercher">'+ic('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.5-4.5"/>')+'</button>':'')+'<button class="ib" data-a="hm" aria-label="Plus">'+DOT+'</button></header>';
 if(S.sq)h+='<div class="usb"><input id="usi" class="uin" placeholder="Rechercher dans la discussion" value="'+E(S.q||'')+'"></div>';
 h+='<div class="ub uwp" id="umm">';
 if(ok){var n=0;if(c.msgs.some(function(m){return!m.sys}))h+='<p class="us usy">Aujourd’hui</p>';
  c.msgs.forEach(function(m,i){if(q&&!(m.x||'').toLowerCase().includes(q))return;n++;h+=bub(c,m,i,g)});
  if(q&&!n)h+='<p class="us usy">Aucun résultat</p>';
  if(S.ty==c.id)h+='<div class="ubb ut2"><u></u><u></u><u></u></div>'}
 h+='</div>';
 if(S.hm)h+=MENU(c,g,ok);
 if(S.mm!=null&&c.msgs[S.mm]){var m=c.msgs[S.mm];h+='<div class="uov uob" data-a="mx"><div class="uas"><div class="urr">'+RX.map(function(e){return'<button data-a="rx:'+e+'">'+e+'</button>'}).join('')+'</div><button data-a="rp:'+S.mm+'">'+ic('<path d="M9 14L4 9l5-5M4 9h11a5 5 0 0 1 5 5v3"/>')+'Répondre</button>'+(m.x?'<button data-a="cp">'+ic('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>')+'Copier</button>':'')+(m.me&&!m.del?'<button data-a="del" style="color:var(--red)">'+ic('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>')+'Supprimer</button>':'')+'</div></div>'}
 if(ok){var rq=S.rp!=null&&c.msgs[S.rp];
  if(S.pk=='emo')h+='<div class="uem">'+EMO.map(function(e){return'<button data-a="ei:'+e+'">'+e+'</button>'}).join('')+'</div>';
  if(S.pk=='stk')h+=STP();
  h+=(rq?'<div class="urp"><span><b>'+E(rq.me?'Vous':rq.w)+'</b>'+E(rq.x||'Média')+'</span><button data-a="rpx" aria-label="Annuler">×</button></div>':'');
  if(S.sel)h+=SELB();else if(c.blk)h+='<div class="uc ubn"><span>Tu as bloqué '+E(c.n)+'. Vous ne pouvez plus échanger.</span><button class="ujb" data-a="blk">Débloquer</button></div>';else if(S.rec)h+='<div class="uc"><div class="ucp urec"><i class="urd"></i><b id="urt">0:00</b><span class="fl">Enregistrement…</span><button data-a="rc" style="color:var(--red);font-weight:700">Annuler</button></div><button class="ib ug" data-a="rs" aria-label="Envoyer le message vocal">'+SND+'</button></div>';
  else h+='<div class="uc"><div class="ucp"><button data-a="emo" aria-label="Emojis" class="'+(S.pk=='emo'?'on':'')+'">'+ic('<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>')+'</button><textarea id="uti" rows="1" placeholder="'+(c.t=='p'?'Écrire à la page':'Message')+'" maxlength="1000">'+E(S.dr||'')+'</textarea><button data-a="stk" aria-label="Stickers" class="'+(S.pk=='stk'?'on':'')+'">'+STI+'</button></div><button class="ib ug" id="ubt" data-a="send"'+(S.dr&&S.dr.trim()?'':' hidden')+' aria-label="Envoyer">'+SND+'</button></div>'}
 else h+='<div class="uc ubn"><span>'+(c.st=='out'?'En attente : '+E(c.n)+' doit accepter la discussion avant que tu puisses écrire.':c.st=='req'?'L’administrateur doit approuver ta demande.':'Discussion non autorisée.')+'</span>'+'</div>';
 return h}
function ginfo(){var c=C(S.cur),n=c.m.length+1,gt=S.gt||'m';
 var h='<header class="uh"><button class="ib" data-a="back" aria-label="Retour">'+BK+'</button><span class="fl"></span><span class="ib">'+ic('<rect x="3.500" y="3.500" width="7" height="7" rx="1.500"/><rect x="13.500" y="3.500" width="7" height="7" rx="1.500"/><rect x="3.500" y="13.500" width="7" height="7" rx="1.500"/><path d="M14 14h3v3h-3zM19 19h1.500"/>')+'</span><span class="ib">'+DOT+'</span></header><div class="ub"><div class="ugh">'+gav(c,120)+'<h3>'+E(c.n)+'</h3><small>Groupe • '+n+' membres</small></div>';
 h+='<div class="uac"><button data-a="back"><span>'+ic('<path d="M4 5h16v11H9l-5 4z"/>')+'</span>Discussion</button><button data-a="share"><span>'+ic('<circle cx="6" cy="12" r="2.500"/><circle cx="17" cy="6" r="2.500"/><circle cx="17" cy="18" r="2.500"/><path d="M8.300 11l6.500-3.800M8.300 13l6.500 3.800"/>')+'</span>Partager</button><button data-a="gt:s"><span>'+ic('<circle cx="11" cy="11" r="6.500"/><path d="M20 20l-4.500-4.500"/>')+'</span>Rechercher</button></div>';
 h+='<div class="utb">'+[['m','Membres'],['p','Paramètres']].map(function(t){return'<button data-a="gt:'+t[0]+'" aria-pressed="'+(gt==t[0])+'">'+t[1]+'</button>'}).join('')+'</div>';
 if(gt=='d')h+='<p class="ue">Aucun média partagé pour le moment.</p>';
 else if(gt=='p')h+='<div class="ur"><span class="fl"><b>Approbation des nouveaux membres</b><small>Les invités doivent accepter et l’administrateur doit approuver les demandes d’adhésion.</small></span></div>'+'<button class="ur" data-a="leave:'+c.id+'" style="color:var(--red)"><span class="fl"><b>Quitter le groupe</b></span></button>';
 else{h+='<p class="us"><b>'+n+' membres</b></p>';
  (c.jr||[]).forEach(function(r){h+=c.adm?'<div class="um">'+av(r,48)+'<span class="fl"><b>'+E(r)+'</b><small>demande à rejoindre</small></span><button class="ujb" data-a="ja:'+c.id+':'+E(r)+'">Approuver</button><button class="ujb" data-a="jx:'+c.id+':'+E(r)+'">Refuser</button></div>':''});
  if(c.adm){h+='<button class="um uadd" data-a="addm"><span class="uplus">'+ic('<circle cx="10" cy="8" r="3.500"/><path d="M3 20c0-3.500 3-5.500 7-5.500M18 8v6M15 11h6"/>')+'</span><b>Ajouter des membres</b></button>';
   if(S.am){var o=MEM.filter(function(x){return!c.m.some(function(m){return m.n==x})});h+=o.length?'<div class="um"><select id="uis" class="uin">'+o.map(function(x){return'<option>'+E(x)+'</option>'}).join('')+'</select><button class="btn" data-a="inv:'+c.id+'" style="width:auto">Inviter</button></div>':'<p class="us">Tous les membres sont déjà dans le groupe.</p>'}}
  h+='<div class="um">'+av('Vous',48)+'<span class="fl"><b>Vous</b><small>Mon Reuf</small></span>'+(c.adm?'<em class="uad">Admin du groupe</em>':'')+'</div>';
  c.m.forEach(function(m,i){h+='<div class="um">'+av(m.n,48)+'<span class="fl"><b>'+E(m.n)+'</b><small>'+E(m.r||'Étudiant')+'</small></span>'+(m.st=='wait'?'<em class="uad">Invitation envoyée</em>':(m.a||i==0?'<em class="uad">Admin du groupe</em>':''))+'</div>'})}
 return h+'</div>'}
function render(){root.dataset.v=S.v;if(S.v=='chat'){var c0=C(S.cur);if(c0)c0.rd=c0.msgs.length}root.innerHTML=S.v=='new'?nw():S.v=='prof'?prof():S.v=='chat'?chat():S.v=='ginfo'?ginfo():list();var m=doc.getElementById('umm');if(m)m.scrollTop=m.scrollHeight;grow();badge()}
function badge(){var n=reqs().length;[].forEach.call(doc.querySelectorAll('.ujmb'),function(b){b.textContent=n||'';b.hidden=!n})}
function push(c,m){if(m.me){m.s=1;setTimeout(function(){if(m.s==1){m.s=2;save();if(S.v=='chat'&&C(S.cur)==c)render()}},900)}c.msgs.push(m)}
var A={
 close:function(){root.hidden=true},new:function(){S.v='new'},back:function(){S.v=(S.v=='ginfo'||S.v=='prof')?'chat':'list';S.rp=null},gt:function(a){S.gt=a[0]},addm:function(){S.am=!S.am},rp:function(a){S.rp=+a[0]},rpx:function(){S.rp=null},share:function(){try{navigator.share&&navigator.share({title:C(S.cur).n})}catch(e){}},leave:function(a){S.c=S.c.filter(function(x){return x.id!=a[0]});S.v='list'},
 tab:function(a){S.tab=a[0];S.ls=''},lq:function(){S.lq=!S.lq;S.ls=''},seg:function(a){S.seg=a[0]},open:function(a){S.cur=a[0];S.v='chat';S.info=0},
 dm:function(a){var c={id:'c'+(S.id++),t:'dm',n:a[0],st:'out',msgs:[]};S.c.unshift(c);S.cur=c.id;S.v='chat'},
 mk:function(){var n=(doc.getElementById('ugn').value||'').trim(),s=[].map.call(doc.querySelectorAll('.ugm:checked'),function(x){return x.value});if(!n||!s.length){doc.getElementById('ugn').focus();return}
  var c={id:'g'+(S.id++),t:'g',n:n,st:'ok',adm:1,m:s.map(function(x){return{n:x,st:'wait'}}),jr:[],msgs:[{sys:'Groupe créé. Chaque membre doit accepter son invitation.'}]};S.c.unshift(c);S.cur=c.id;S.v='chat'},
 join:function(a){var d=S.disc.filter(function(x){return x.id==a[0]})[0];S.c.unshift({id:'g'+(S.id++),t:'g',n:d.n,did:d.id,st:'req',m:[],msgs:[]});S.v='list';S.tab='c'},
 acc:function(a){var c=C(a[0]);c.st='ok';if(c.t=='g'){c.m=[{n:c.by||'Admin',st:'ok'}];push(c,{sys:'Tu as rejoint le groupe.'})}S.tab='c';S.cur=c.id;S.v='chat'},
 ref:function(a){var c=C(a[0]);S.c=S.c.filter(function(x){return x!=c})},
 ja:function(a){var c=C(a[0]);c.jr=c.jr.filter(function(n){return n!=a[1]});c.m.push({n:a[1],st:'ok'});push(c,{sys:a[1]+' a été approuvé(e).'})},
 jx:function(a){var c=C(a[0]);c.jr=c.jr.filter(function(n){return n!=a[1]})},
 info:function(){S.v='ginfo';S.gt='m'},
 sm:function(a){var c=C(a[0]);c.m.forEach(function(m){if(m.n==a[1])m.st='ok'})},
 inv:function(a){var c=C(a[0]),n=doc.getElementById('uis').value;c.m.push({n:n,st:'wait'})},
 sim:function(){},
 send:function(){var i=doc.getElementById('uti'),v=i.value.trim();if(!v)return;var cc=C(S.cur),qq=S.rp!=null&&cc.msgs[S.rp];push(cc,{me:1,x:v,ts:T(),q:qq?{w:qq.me?'Vous':qq.w,x:qq.x}:null});S.rp=null}};
var tmr=null;
function stopRec(){clearInterval(tmr);tmr=null;S.rec=0}
function addf(file,cam){var c=C(S.cur);if(!c||!file)return;var m={me:1,ts:T(),x:''};if(/^image\//.test(file.type)){m.img=URL.createObjectURL(file)}else{m.f=file.name;m.sz=file.size>1048576?(file.size/1048576).toFixed(1)+' Mo':Math.max(1,Math.round(file.size/1024))+' Ko'}push(c,m);S.pk=null;save();render()}
['ufi','ufc'].forEach(function(id){var i=doc.createElement('input');i.type='file';i.id=id;i.hidden=true;if(id=='ufc'){i.accept='image/*';i.setAttribute('capture','environment')}doc.body.appendChild(i);i.addEventListener('change',function(){[].forEach.call(i.files,function(f){addf(f)});i.value=''})});
function reply(c){}
var A2={
 mm:function(a){S.mm=+a[0]},mx:function(){S.mm=null},hm:function(){S.hm=!S.hm},hx:function(){S.hm=0},
 sq:function(){S.sq=!S.sq;S.q='';S.hm=0},clr:function(){C(S.cur).msgs=[];S.hm=0},
 emo:function(){S.pk=S.pk=='emo'?null:'emo'},att:function(){S.pk=S.pk=='att'?null:'att'},ei:function(a){S.dr=(S.dr||'')+a[0]},
 doc:function(){var i=doc.getElementById('ufi');i.accept='*/*';i.click()},gal:function(){var i=doc.getElementById('ufi');i.accept='image/*,video/*';i.click()},cam:function(){doc.getElementById('ufc').click()},
 mic:function(){S.rec=Date.now();S.pk=null;clearInterval(tmr);tmr=setInterval(function(){var e=doc.getElementById('urt');if(e)e.textContent=fmt(Math.round((Date.now()-S.rec)/1000))},500)},
 rc:function(){stopRec()},rs:function(){var s=Math.max(1,Math.round((Date.now()-S.rec)/1000)),c=C(S.cur);stopRec();push(c,{me:1,vn:s,ts:T()});reply(c)},
 pl:function(a){var i=+a[0],m=C(S.cur).msgs[i];S.pl=S.pl===i?null:i;if(S.pl===i)setTimeout(function(){if(S.pl===i){S.pl=null;if(S.v=='chat')render()}},(m.vn||3)*1000)},
 rx:function(a){var m=C(S.cur).msgs[S.mm];m.rx=m.rx==a[0]?'':a[0];S.mm=null},
 cp:function(){var m=C(S.cur).msgs[S.mm];try{navigator.clipboard.writeText(m.x)}catch(e){}S.mm=null},
 del:function(){var m=C(S.cur).msgs[S.mm];m.del=1;m.x='';m.img=null;delete m.vn;delete m.f;S.mm=null}};
Object.keys(A2).forEach(function(k){A[k]=A2[k]});
A.rp=function(a){S.rp=+a[0];S.mm=null};
A.send=function(){var i=doc.getElementById('uti'),v=(i?i.value:S.dr||'').trim();if(!v)return;var cc=C(S.cur),qq=S.rp!=null&&cc.msgs[S.rp];push(cc,{me:1,x:v,ts:T(),q:qq?{w:qq.me?'Vous':qq.w,x:qq.x||'Média'}:null});S.rp=null;S.dr='';S.pk=null;reply(cc)};

var MOT='<svg class="uhm" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g transform="rotate(-18 250 40)">'+[0,1,2,3,4,5,6,7].map(function(i){return'<ellipse cx="250" cy="40" rx="'+(28+i*24)+'" ry="'+(18+i*17)+'"/>'}).join('')+'</g></svg>';
function HL(r,b){return'<header class="uh uhl"><button class="ib" data-a="'+(r?'tab:c':'close')+'" aria-label="Retour">'+BK+'</button>'+(r?'<h2>Demandes</h2>':b)+'</header>'} function HD(t,bk,r){return'<header class="uh uhd ulh">'+MOT+'<button class="ib" data-a="'+bk+'" aria-label="Retour">'+BK+'</button><h2>'+t+(t=='Messages'?'<i class="uon"></i>':'')+'</h2><span class="uhr">'+(r||'')+'</span></header>'}
var STI=ic('<rect x="4" y="4" width="16" height="16" rx="5"/><path d="M8.500 13.500a4 4 0 0 0 7 0M9 9.500h.01M15 9.500h.01"/>');
function TK(m){return'<b class="utk s'+(m.s==null?3:m.s)+'"></b>'}
function SC(i){return S.sel&&S.sel.indexOf(i)>-1?' usel':''}
function grow(){var t=doc.getElementById('uti');if(t){t.style.height='auto';t.style.height=Math.min(t.scrollHeight,140)+'px'}}
var STK=[['Bravo','#F59E0B','🎉'],['Merci','#10B981','🙏'],['Salut','#0EA5E9','👋'],['Présent','#6366F1','✋'],['Examen','#F43F5E','📚'],['Café ?','#92400E','☕'],['OK','#15803D','👌'],['SOS','#DC2626','🆘'],['Courage','#8B5CF6','💪'],['Mdr','#EC4899','😂']],SCOL=['#15803D','#0EA5E9','#F59E0B','#F43F5E','#8B5CF6','#14B8A6','#EC4899','#0B1630'],SEMO=['😀','😎','🥳','🤓','😴','🔥','❤️','⭐','🎓','📚','☕','🌴'];
function SK(s){return'<svg class="usk" viewBox="0 0 120 120"><rect x="6" y="6" width="108" height="108" rx="36" fill="'+s.c+'" stroke="#fff" stroke-width="5"/><text x="60" y="66" font-size="44" text-anchor="middle">'+s.e+'</text><text x="60" y="98" font-size="15" font-weight="800" fill="#fff" text-anchor="middle">'+E(s.t||'')+'</text></svg>'}
function STP(){var h='<div class="ukp"><div class="ukg">';STK.forEach(function(s,i){h+='<button data-a="sk:'+i+'">'+SK({t:s[0],c:s[1],e:s[2]})+'</button>'});(S.mys||[]).forEach(function(s,i){h+='<button data-a="ms:'+i+'">'+SK(s)+'</button>'});h+='<button class="ukn" data-a="mks">+<small>Créer</small></button></div>';
if(S.mk){var d=S.sd;h+='<div class="ukm"><div id="upv">'+SK(d)+'</div><input id="ust" class="uin" maxlength="14" placeholder="Texte du sticker" value="'+E(d.t)+'"><div class="ukc">'+SCOL.map(function(c){return'<button data-a="sc:'+c+'" style="background:'+c+'" class="'+(d.c==c?'on':'')+'"></button>'}).join('')+'</div><div class="ukc">'+SEMO.map(function(e){return'<button data-a="se:'+e+'" class="'+(d.e==e?'on':'')+'">'+e+'</button>'}).join('')+'</div><button class="btn" data-a="ssv">Enregistrer et envoyer</button></div>'}
return h+'</div>'}
function SELB(){return'<div class="uc ubn usl"><button class="btn s" data-a="sx">Annuler</button><b>'+S.sel.length+' sélectionné(s)</b><button class="btn" data-a="sdel" style="background:var(--red)"'+(S.sel.length?'':' disabled')+'>Supprimer</button></div>'}
function MENU(c,g,ok){var b=function(a,t,x){return'<button data-a="'+a+'"'+(x?' style="color:var(--red)"':'')+'>'+t+'</button>'},h='<div class="uov" data-a="hx"><div class="upm">';
if(S.mv=='rs')h+='<p class="us" data-a="nop"><b>Restreindre pendant…</b></p>'+b('rs:1','1 jour')+b('rs:3','3 jours')+b('rs:7','7 jours');
else if(S.mv=='cf')h+='<p class="us" data-a="nop"><b>'+(g?'Quitter le groupe ?':'Supprimer la discussion ?')+'</b><br>Cette action est définitive.</p>'+b('leave:'+c.id,g?'Quitter':'Supprimer',1)+b('hx','Annuler');
else{h+=g?b('info','Infos du groupe'):c.t=='p'?'':b('prof','Voir le profil · s’abonner');if(ok)h+=b('sq','Rechercher')+b('selm','Supprimer des messages');
if(!g&&c.t!='p')h+=(c.rs>Date.now()?b('rsx','Lever la restriction'):b('rsm','Restreindre'))+b('blk',c.blk?'Débloquer':'Bloquer',!c.blk);
h+=b('clr','Vider la discussion')+b('cdel',g?'Quitter le groupe':'Supprimer la discussion',1)}
return h+'</div></div>'}
function prof(){var c=C(S.cur),sb=(S.sub||{})[c.n];return HD('Profil','back','')+'<div class="ub"><div class="ugh">'+av(c.n,110)+'<h3>'+E(c.n)+'</h3><small>Étudiant(e) · UJLoG</small></div><div class="uac"><button data-a="back"><span>'+ic('<path d="M4 5h16v11H9l-5 4z"/>')+'</span>Message</button><button data-a="subs"><span>'+ic(sb?'<path d="M5 12.500l4.500 4.500L19 7.500"/>':'<path d="M12 5v14M5 12h14"/>')+'</span>'+(sb?'Abonné(e)':'S’abonner')+'</button></div><p class="us">Sa page</p><div class="ur"><span class="fl"><b>'+(sb?'Tu suis sa page':'Tu ne suis pas sa page')+'</b><small>'+(sb?'Ses publications apparaissent dans ton fil.':'Abonne-toi pour voir ses publications dans ton fil.')+'</small></span></div></div>'}
function sendS(s){var c=C(S.cur);push(c,{me:1,stk:s,ts:T()});S.pk=null;S.mk=0;reply(c)}
Object.assign(A,{nop:function(){},hm:function(){S.hm=!S.hm;S.mv='m'},hx:function(){S.hm=0;S.mv='m'},prof:function(){S.v='prof';S.hm=0},
subs:function(){S.sub=S.sub||{};var n=C(S.cur).n;S.sub[n]=!S.sub[n]},rsm:function(){S.mv='rs'},cdel:function(){S.mv='cf'},
rs:function(a){var c=C(S.cur);c.rs=Date.now()+a[0]*864e5;S.hm=0;S.mv='m';push(c,{sys:'Tu as restreint '+c.n+' pendant '+a[0]+' jour(s).'})},
rsx:function(){C(S.cur).rs=0;S.hm=0},blk:function(){var c=C(S.cur);c.blk=!c.blk;S.hm=0;push(c,{sys:c.blk?'Tu as bloqué '+c.n+'.':'Tu as débloqué '+c.n+'.'})},
selm:function(){S.sel=[];S.hm=0},sx:function(){S.sel=null},sl:function(a){var i=+a[0],k=S.sel.indexOf(i);if(k>-1)S.sel.splice(k,1);else S.sel.push(i)},
sdel:function(){var c=C(S.cur);S.sel.sort(function(x,y){return y-x}).forEach(function(i){var m=c.msgs[i];if(m.me){m.del=1;m.x='';delete m.stk;delete m.vn}else c.msgs.splice(i,1)});S.sel=null},
stk:function(){S.pk=S.pk=='stk'?null:'stk';S.mk=0},mks:function(){S.mk=!S.mk;S.sd=S.sd||{t:'',c:'#15803D',e:'😀'}},sc:function(a){S.sd.c=a[0]},se:function(a){S.sd.e=a[0]},
sk:function(a){var s=STK[+a[0]];sendS({t:s[0],c:s[1],e:s[2]})},ms:function(a){sendS(S.mys[+a[0]])},
ssv:function(){var d=S.sd;(S.mys=S.mys||[]).push({t:d.t.trim()||'Moi',c:d.c,e:d.e});sendS(S.mys[S.mys.length-1])}});
root.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b)return;var p=b.dataset.a.split(':'),f=A[p.shift()],pv=S.v,t0=doc.getElementById('uti');if(t0)S.dr=t0.value;if(f){f(p);if(S.v=='chat'&&pv!='chat'){S.dr='';S.pk=null;S.sq=0;S.q='';S.hm=0;S.mm=null;S.rp=null;if(S.rec)stopRec()}if(S.v!='chat'&&S.rec)stopRec();save();render();if(S.v=='chat'){var i=doc.getElementById('uti');if(i&&p.length==0&&b.dataset.a=='send')i.focus()}}});
root.addEventListener('input',function(e){var id=e.target.id;if(id=='uti'){S.dr=e.target.value;grow();var b=doc.getElementById('ubt'),v=!!S.dr.trim();b.hidden=!v}else if(id=='ust'){S.sd.t=e.target.value;var pv=doc.getElementById('upv');if(pv)pv.innerHTML=SK(S.sd)}else if(id=='usi'||id=='uls'){var v2=e.target.value;if(id=='usi')S.q=v2;else S.ls=v2;render();var n=doc.getElementById(id);n.focus();n.setSelectionRange(v2.length,v2.length)}});
root.addEventListener('keydown',function(e){if(e.key=='Enter'&&e.target.id=='uti'&&!e.shiftKey&&!('ontouchstart' in window)){e.preventDefault();A.send();save();render();var i=doc.getElementById('uti');if(i)i.focus()}});
function open(){S.v='list';root.hidden=false;render()}
function openToPage(n){n=String(n||'').trim();if(!n)return open();var c=S.c.filter(function(x){return x.t=='p'&&x.n==n})[0];if(!c){c={id:'p'+(S.id++),t:'p',n:n,st:'ok',msgs:[{sys:'Ce message est envoyé uniquement à la page « '+n+' ». Pour discuter avec une personne, utilise ta messagerie (Nouvelle discussion).'}]};S.c.unshift(c)}S.cur=c.id;S.v='chat';S.dr='';S.pk=null;S.sq=0;S.q='';S.hm=0;S.mm=null;S.rp=null;root.hidden=false;save();render()}
function openTo(n){n=String(n||'').trim();if(!n)return open();var c=S.c.filter(function(x){return x.t=='dm'&&x.n==n})[0];if(!c){c={id:'c'+(S.id++),t:'dm',n:n,st:'out',msgs:[]};S.c.unshift(c)}S.cur=c.id;S.v='chat';S.dr='';S.pk=null;S.sq=0;S.q='';S.hm=0;S.mm=null;S.rp=null;root.hidden=false;save();render()}
doc.addEventListener('click',function(e){var t=e.target.closest('[data-msgpage],[data-msgto],[data-msg],[data-soon="Messages directs"]');if(!t)return;e.preventDefault();e.stopPropagation();t.hasAttribute('data-msgpage')?openToPage(t.getAttribute('data-msgpage')):t.hasAttribute('data-msgto')?openTo(t.getAttribute('data-msgto')):open()},true);
try{localStorage.removeItem('uj_msg_v1')}catch(e){}window.UJMSG={members:function(a){MEM=(a||[]).map(String);if(!root.hidden)render()},groups:function(a){S.disc=a||[];if(!root.hidden)render()},openWith:openTo,openPage:openToPage};setInterval(badge,1500);badge();
})();

}catch(e){console.error("[ujlog] ujm-js",e)}
/* ==== pro88-js ==== */
try{

(function(){
const TIERS=[[20000,2000],[1000,200],[100,20],[50,10]];
const gainT=(T,v)=>{for(const [n,f] of T)if(v>=n)return f;return 0};
const tot=p=>p[1]+p[2]+p[3],gain=p=>gainT(TIERS,tot(p));
const NEXT=v=>{for(const [n,f] of [...TIERS].reverse())if(v<n)return [n,f];return null};
let POSTS=[];/* [titre, vues, J’aime, commentaires] : alimenté par le serveur */
const DAYS=['L','M','M','J','V','S','D'].map(d=>[d,0]);
const fr=n=>n.toLocaleString('fr-FR').replace(/\u202f/g,' ');
const badge=sz=>{try{return window.UJBDG?window.UJBDG('PN',sz):''}catch(e){return''}};
let ov=null;
const MEM={};
const st={get(k){try{const v=localStorage.getItem(k);if(v!==null)return JSON.parse(v)}catch(e){}return MEM[k]===undefined?null:MEM[k]},set(k,v){MEM[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){delete MEM[k];try{localStorage.removeItem(k)}catch(e){}}};
/* Les codes d’activation sont vérifiés par le serveur (UJ_API.checkCode), jamais dans l’appli. */
const CATS=['Média','Commerce','Association','Service','Éducation','Événementiel','Autre'];
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let draftLogo='';
function toast(t){const e=document.createElement('div');e.className='tg';e.textContent=t;ov.appendChild(e);setTimeout(()=>e.remove(),2200)}
function reg(pg){try{if(typeof ACC==='undefined')return;if(!ACC.some(x=>x.n===pg.name))ACC.push({n:pg.name,l:pg.badge||'PN'});if(typeof PS!=='undefined'&&!PS[pg.name])PS[pg.name]=[];try{renderAcc()}catch(e){}}catch(e){}}
function deco(){const pg=st.get('uj88_page'),pp=document.getElementById('pgp');if(!pg||!pp||pp.dataset.n!==pg.name)return;const bio=pp.querySelector('.pgbio div');if(bio&&bio.textContent.indexOf('[Bio')===0)bio.textContent=pg.desc;const sb=pp.querySelector('.v29s');if(sb&&sb.textContent.indexOf(pg.cat)!==0)sb.textContent=pg.cat+' · Page professionnelle';if(pg.logo)pp.querySelectorAll('.v29t img.lg').forEach(i=>{if(i.getAttribute('src')!==pg.logo)i.src=pg.logo})}
function dash(pg){
 reg(pg);
 if(ov)ov.remove();
const views=POSTS.reduce((a,p)=>a+p[1],0),likes=POSTS.reduce((a,p)=>a+p[2],0),coms=POSTS.reduce((a,p)=>a+p[3],0),all=views+likes+coms,total=POSTS.reduce((a,p)=>a+gain(p),0),avail=Math.max(0,total-(window.UJCREATOR?UJCREATOR.held('Page pro'):0));
const top=POSTS.slice().sort((a,b)=>tot(b)-tot(a))[0],last=POSTS[POSTS.length-1],nx=last?NEXT(tot(last)):null,mx=Math.max(1,...DAYS.map(d=>d[1]));
 ov=document.createElement('div');ov.id='pro88';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','Espace professionnel');
 ov.innerHTML=`<div class="h"><button data-x aria-label="Retour">‹</button><b>Espace pro</b></div><div class="w">
 <div class="c pc">${pg.logo?`<img class="lg" alt="" src="${pg.logo}">`:`<span class="lg">${esc(pg.name.slice(0,1).toUpperCase())}</span>`}<div style="min-width:0"><b style="display:flex;align-items:center;gap:6px">${esc(pg.name)} ${badge(18)}</b><small>${esc(pg.cat)} · Page professionnelle</small><br><small>${esc(pg.desc)}</small></div></div>
 <div class="c bk"><small>Gains disponibles</small><div class="big">${fr(avail)} FCFA</div>
${nx?`<div class="pg"><i style="width:${Math.min(100,Math.round(tot(last)/nx[0]*100))}%"></i></div><small>Dernière publication : ${tot(last)} / ${nx[0]} interactions pour +${nx[1]} FCFA</small>`:''}
 <button class="cta" data-wd>Demander un retrait</button><small>Retrait minimum : 2 000 FCFA</small></div>
<div class="g4"><div class="c"><small>Vues</small><b>${fr(views)}</b></div><div class="c"><small>J’aime</small><b>${fr(likes)}</b></div><div class="c"><small>Commentaires</small><b>${fr(coms)}</b></div><div class="c"><small>Total interactions</small><b>${fr(all)}</b></div></div>
 <div class="c"><h3>Vues sur 7 jours</h3><div class="bars">${DAYS.map(d=>`<i style="height:${Math.round(d[1]/mx*100)}%" title="${d[1]}"></i>`).join('')}</div><div style="display:flex;gap:6px">${DAYS.map(d=>`<small style="flex:1;text-align:center">${d[0]}</small>`).join('')}</div></div>
<div class="c"><h3>Décryptage par publication</h3>${POSTS.length?POSTS.map(p=>`<div class="r"><span>${esc(p[0])}<br><small>${fr(p[1])} vues + ${fr(p[2])} J’aime + ${fr(p[3])} commentaires = ${fr(tot(p))}</small></span><b>${gain(p)?'+'+gain(p)+' F':'—'}</b></div>`).join(''):'<small>Aucune publication pour l’instant.</small>'}${top?`<small>Meilleure publication : ${esc(top[0])}</small>`:''}</div>
 <button class="ob" data-view>Voir ma page publique</button>
 <button class="gh" data-reset>Supprimer ma page</button>
<div class="c"><h3>Paliers de rémunération</h3><small>Par publication, selon le total vues + J’aime + commentaires</small>${[...TIERS].reverse().map(([n,f])=>`<div class="r"><span>${fr(n)} interactions</span><b>${fr(f)} F</b></div>`).join('')}</div>
 </div>`;
 ov.addEventListener('click',e=>{if(e.target.closest('[data-x]')){ov.remove();ov=null}else if(e.target.closest('[data-wd]')){if(window.UJCREATOR)UJCREATOR.withdraw({bal:avail,label:'Page pro',reserve:function(){}})}else if(e.target.closest('[data-view]')){ov.remove();ov=null;try{pgOpen(pg.name,0)}catch(err){}}else if(e.target.closest('[data-reset]')){try{if(typeof ACC!=='undefined'){const i=ACC.findIndex(x=>x.n===pg.name);if(i>0)ACC.splice(i,1);renderAcc()}}catch(err){}st.del('uj88_page');open()}});
 document.body.appendChild(ov);
}
function act(){
 if(ov)ov.remove();draftLogo='';
 ov=document.createElement('div');ov.id='pro88';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','Créer ma page professionnelle');
 ov.innerHTML=`<div class="h"><button data-x aria-label="Retour">‹</button><b>Créer ma page pro</b></div><div class="w"><div class="c"><h3>Code d’activation</h3><small>Ce code à usage unique est remis par l’équipe UJLoG. Il détermine le badge de ta page.</small><div class="fm" style="margin-top:10px"><input id="p88c" placeholder="Ex. UJP-0000" autocomplete="off" autocapitalize="characters"></div></div>
 <div class="c fm"><h3 style="margin:0">Ma page</h3><label for="p88n">Nom de la page</label><input id="p88n" maxlength="40" autocomplete="off"><label for="p88k">Catégorie</label><select id="p88k">${CATS.map(c=>`<option>${c}</option>`).join('')}</select><label for="p88d">Description</label><textarea id="p88d" rows="3" maxlength="200"></textarea><label>Logo</label><div class="pc"><span class="lg" id="p88p">🏷️</span><input id="p88f" type="file" accept="image/*"></div></div>
 <div class="er" id="p88e" role="alert"></div><button class="ob" data-go>Créer ma page</button></div>`;
 ov.addEventListener('change',e=>{if(e.target.id!=='p88f')return;const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),z=256,k=Math.min(1,z/Math.max(im.width,im.height));c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);draftLogo=c.toDataURL('image/jpeg',.85);const p=ov.querySelector('#p88p');p.innerHTML='';p.style.background=`center/cover url(${draftLogo})`};im.src=r.result};r.readAsDataURL(f)});
 ov.addEventListener('click',e=>{if(e.target.closest('[data-x]')){ov.remove();ov=null;return}if(!e.target.closest('[data-go]'))return;
  const q=id=>ov.querySelector('#'+id),er=m=>{q('p88e').textContent=m},code=q('p88c').value.trim().toUpperCase(),name=q('p88n').value.trim(),desc=q('p88d').value.trim(),used=st.get('uj88_used')||[];
  if(name.length<2){er('Indique le nom de ta page.');return}if(desc.length<10){er('Ajoute une description (10 caractères minimum).');return}const chk=window.UJ_API&&window.UJ_API.checkCode;if(!chk){er('Activation indisponible pour le moment.');return}chk(code).then(bt=>{if(!bt){er('Code invalide ou déjà utilisé.');return}const pg={name,cat:q('p88k').value,desc,logo:draftLogo,badge:bt,code,at:Date.now()};st.set('uj88_page',pg);dash(pg);toast('Ta page professionnelle est créée')}).catch(()=>er('Vérification impossible, réessaie.'));});
 document.body.appendChild(ov);
}
function open(){const pg=st.get('uj88_page');if(pg)dash(pg);else act()}
window.UJPRO={open};
function inject(){
 return; /* Espace pro retiré */
 const m=document.getElementById('mymenu');if(!m)return;
 const t=[...m.querySelectorAll('p.mms')].find(p=>/Mes outils/.test(p.textContent));if(!t)return;
 const card=t.nextElementSibling;if(!card||card.querySelector('[data-pro88]'))return;
 const src=card.querySelector('button.li');if(!src)return;
 const b=src.cloneNode(true);[...b.attributes].forEach(a=>{if(a.name!=='class'&&a.name!=='type')b.removeAttribute(a.name)});
 b.setAttribute('data-pro88','1');b.type='button';
 const bt=b.querySelector('b');if(bt)bt.textContent='Espace pro';
 const sm=b.querySelector('small,span:not(:has(svg))');if(sm&&sm!==bt&&!sm.querySelector('svg'))sm.textContent='Statistiques et gains';
 const ic=b.querySelector('svg');if(ic)ic.innerHTML='<rect x="4" y="11" width="3.5" height="9" rx="1"/><rect x="10.2" y="6" width="3.5" height="14" rx="1"/><rect x="16.5" y="13" width="3.5" height="7" rx="1"/>';
 b.addEventListener('click',e=>{e.stopPropagation();open()});
 card.insertBefore(b,card.firstChild);
}
new MutationObserver(()=>{inject();deco()}).observe(document.documentElement,{childList:true,subtree:true});
{const p0=st.get('uj88_page');if(p0)reg(p0)}
document.addEventListener('DOMContentLoaded',inject);setTimeout(inject,800);
})();

}catch(e){console.error("[ujlog] pro88-js",e)}
/* ==== crjs ==== */
try{

(function(){
var fm=n=>n>=1000?(n/1000).toFixed(1).replace('.',',')+' k':String(n);
var BADGES=[['EC','Certifié','Vérification',0,0],['EA','Argent','500 F · 30 jours',500,30],['EO','Or','500 F · 40 jours',500,40],['EP','Premium','1 000 F · 50 jours',1000,50]],B={},DAY=864e5;
try{B=JSON.parse(localStorage.getItem('uj_badges')||'{}')}catch(e){}
function unl(c){return c=='EC'?K.id=='ok':!!B[c]}
function act(c){return c=='EC'?K.id=='ok':(B[c]===1||B[c]>Date.now())}
function left(c){return Math.max(1,Math.ceil((B[c]-Date.now())/DAY))}
function saveB(){try{localStorage.setItem('uj_badges',JSON.stringify(B))}catch(e){}}
function step(){for(var i=0;i<BADGES.length;i++){var c=BADGES[i][0];if(!unl(c)){if(!i)return{c:c,k:'verify'};var p=BADGES[i-1][0];return(p=='EC'||!act(p))?{c:c,k:'buy'}:{c:c,k:'wait',d:left(p)}}}return null}
var RULES=[['500 abonnés, gardés 30 jours de suite',s=>s.f>=500&&s.fd>=30,s=>s.f+' / 500 · '+s.fd+' / 30 j'],['5 000 interactions au total (vues uniques + J’aime + commentaires)',s=>s.it>=5000,s=>fm(s.it)+' / 5 000'],['3 publications par jour',s=>s.dp>=3,s=>s.dp+' / 3'],['Aucune sanction récente',s=>!s.sanc,s=>s.sanc?'Sanction':'Aucune']];
var K={};try{K=JSON.parse(localStorage.getItem('uj_cr_k')||'{}')}catch(e){}
function saveK(){try{localStorage.setItem('uj_cr_k',JSON.stringify(K))}catch(e){}}
var VER=[['id','Pièce d’identité vérifiée (passeport, CMU ou pièce d’identité)',k=>k.id=='ok',k=>k.id=='pending'?'En vérification':'À faire','Vérifier'],['age','Avoir 18 ans minimum',k=>k.id=='ok',k=>k.id=='ok'?'Confirmé par la pièce':'Selon la pièce',''],['ph','Numéro vérifié par SMS',k=>!!k.ph,k=>k.ph?'Vérifié':'À faire','Vérifier'],['mm','Compte Orange Money ou Wave lié',k=>!!k.mm,k=>k.mm||'À faire','Lier'],['orig','Charte : photos originales uniquement',k=>!!k.orig,k=>k.orig?'Acceptée':'À accepter','Accepter']];
var st={on:false,posts:[],aud:{f:0,fd:0,sanc:false}},V={},L={},C={};
try{st.on=localStorage.getItem('uj_creator')==='1';V=JSON.parse(localStorage.getItem('uj_cr_views')||'{}');L=JSON.parse(localStorage.getItem('uj_cr_likes')||'{}');C=JSON.parse(localStorage.getItem('uj_cr_coms')||'{}')}catch(e){}
var ic={plus:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',menu:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',chv:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--mu)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',ck:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',usr:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>'};
function cnt(o){var t=0;for(var k in o)t+=o[k].length;return t}
function stats(){var v=cnt(V),l=cnt(L),c=cnt(C),td=new Date().toDateString();return{f:st.aud.f,fd:st.aud.fd,v:v,l:l,c:c,it:v+l+c,p:st.posts.length,dp:st.posts.filter(function(p){return new Date(p.t).toDateString()==td}).length,sanc:st.aud.sanc}}
function pit(id){return(V[id]||[]).length+(L[id]||[]).length+(C[id]||[]).length}
function esc(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML}
function nm(){var e=document.querySelector('#mypr h1,#mypr h2');return(e&&e.textContent.trim())||'Mon profil'}
function setOn(v){st.on=v;try{localStorage.setItem('uj_creator',v?'1':'0')}catch(e){}}
function go(id){document.querySelectorAll('.bd').forEach(b=>b.classList.toggle('on',b.id==id));var s=document.querySelector('#'+id+' .sc');if(s)s.scrollTop=0}
function allOk(){var t=stats();return BADGES.every(b=>unl(b[0]))&&RULES.every(r=>r[1](t))&&VER.every(v=>v[2](K))}
function prog(){var t=stats();return BADGES.filter(b=>unl(b[0])).length+RULES.filter(r=>r[1](t)).length+VER.filter(v=>v[2](K)).length}
/* Vues : une seule vue comptée par spectateur et par publication */
function viewer(){try{var v=localStorage.getItem('uj_vid');if(!v){v='v'+Math.random().toString(36).slice(2,9);localStorage.setItem('uj_vid',v)}return v}catch(e){return'v0'}}
function regView(pid,vid){var a=V[pid]=V[pid]||[];if(a.indexOf(vid)>-1)return false;a.push(vid);try{localStorage.setItem('uj_cr_views',JSON.stringify(V))}catch(e){}render();return true}
function regSet(R,key,pid,vid,on){var a=R[pid]=R[pid]||[],i=a.indexOf(vid);if(on&&i<0)a.push(vid);else if(!on&&i>-1)a.splice(i,1);else return false;try{localStorage.setItem(key,JSON.stringify(R))}catch(e){}render();return true}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-crid] .lkb');if(!b)return;var pid=b.closest('[data-crid]').dataset.crid;setTimeout(function(){regSet(L,'uj_cr_likes',pid,viewer(),b.getAttribute('aria-pressed')=='true')},0)},true);
var MIN=2000,WD=[];try{WD=JSON.parse(localStorage.getItem('uj_cr_wd')||'[]')}catch(e){}
function saveWD(){try{localStorage.setItem('uj_cr_wd',JSON.stringify(WD.slice(0,50)))}catch(e){}}
function toastc(m){var d=document.createElement('div');d.className='crtt';d.setAttribute('role','status');d.textContent=m;document.body.appendChild(d);setTimeout(function(){d.remove()},5000)}
function note(m){W.tx.unshift({t:Date.now(),l:m,a:0});W.tx=W.tx.slice(0,50);saveW();toastc(m);render()}
function API(){return window.UJ_API||{}}
function held(src){return WD.filter(function(x){return x.src==src&&x.st!='rejected'}).reduce(function(t,x){return t+x.a},0)}
function wdFlow(o){
 var ops=['Orange Money','Wave','MTN Money','Moov Money'],op=ops[0];
 var d=document.createElement('div');d.className='cro crfx';
 d.innerHTML='<div class="crsh" role="dialog" aria-label="Retirer mes gains"><h2>Retirer mes gains</h2><small style="color:var(--mu)">Disponible : '+fm2(o.bal)+' · retrait minimum '+fm2(MIN)+'</small><input class="crph" type="tel" inputmode="numeric" placeholder="Montant (min. 2 000 F)" data-a><div class="crop" style="flex-wrap:wrap">'+ops.map(function(x,i){return'<button aria-pressed="'+(i==0)+'" style="min-width:45%">'+x+'</button>'}).join('')+'</div><input class="crph" type="tel" inputmode="numeric" maxlength="10" placeholder="Numéro de réception (10 chiffres)" data-p><small class="wde" role="alert" style="color:#C81E1E"></small><button class="crgo" disabled>Demander le retrait</button></div>';
 document.body.appendChild(d);
 var ia=d.querySelector('[data-a]'),ip=d.querySelector('[data-p]'),g=d.querySelector('.crgo'),er=d.querySelector('.wde'),ob=d.querySelectorAll('.crop button');
 function chk(){var a=+ia.value;er.textContent=a&&a<MIN?'Retrait minimum : '+fm2(MIN):(a>o.bal?'Solde insuffisant':'');g.disabled=!(a>=MIN&&a<=o.bal&&ip.value.length==10)}
 ob.forEach(function(x,i){x.onclick=function(){ob.forEach(function(y){y.setAttribute('aria-pressed',y===x)});op=ops[i]}});
 ia.oninput=function(){ia.value=ia.value.replace(/\D/g,'');chk()};ip.oninput=function(){ip.value=ip.value.replace(/\D/g,'');chk()};
 g.onclick=function(){var a=+ia.value,p=ip.value;g.disabled=true;g.textContent='Envoi…';
  var req={id:'wd'+Date.now(),a:a,op:op,ph:p,src:o.label||'Creator',st:'pending',t:Date.now(),sent:0},A=API();
  (A.withdraw?A.withdraw({id:req.id,amount:a,operator:op,phone:p}).then(function(){req.sent=1}):Promise.resolve()).then(function(){
   o.reserve(a);WD.unshift(req);saveWD();render();
   d.querySelector('.crsh').innerHTML='<h2>Retrait en cours</h2><p>Ta demande de <b>'+fm2(a)+'</b> vers '+esc(op)+' ···'+esc(p.slice(-2))+' est en cours de validation. Tu recevras un message dès qu’elle sera créditée.</p><button class="crgo">Fermer</button>';
   d.querySelector('.crgo').onclick=function(){d.remove()}
  }).catch(function(){g.disabled=false;g.textContent='Réessayer';er.textContent='Envoi impossible, réessaie.'})};
 d.onclick=function(e){if(e.target===d)d.remove()};
}
function syncAll(){var A=API();
 if(A.creatorState)A.creatorState().then(function(r){if(!r)return;if(typeof r.bal=='number'){W.bal=r.bal;saveW()}if(r.kyc){K.id=r.kyc;saveK()}if(r.audience)st.aud=r.audience;render()}).catch(function(){});
 if(!A.withdrawals)return;
 if(A.withdraw)WD.filter(function(x){return!x.sent}).forEach(function(x){A.withdraw({id:x.id,amount:x.a,operator:x.op,phone:x.ph}).then(function(){x.sent=1;saveWD()}).catch(function(){})});
 A.withdrawals().then(function(list){(list||[]).forEach(function(r){var x=WD.filter(function(y){return y.id==r.id})[0];if(!x||x.st!='pending'||r.status=='pending')return;
  if(r.status=='paid'){x.st='paid';saveWD();note('Ton retrait de '+fm2(x.a)+' a été crédité sur '+x.op+' ···'+x.ph.slice(-2)+'.')}
  else if(r.status=='rejected'){x.st='rejected';saveWD();if(x.src=='Creator'){W.bal+=x.a;saveW()}note('Ton retrait de '+fm2(x.a)+' n’a pas pu être validé. Le montant est de nouveau disponible.')}})}).catch(function(){})}
window.UJCREATOR={view:regView,like:function(p,v,on){return regSet(L,'uj_cr_likes',p,v,on!==false)},comment:function(p,v){return regSet(C,'uj_cr_coms',p,v,true)},audience:function(a){st.aud=a;render()},withdraw:wdFlow,held:held};
setInterval(syncAll,60000);document.addEventListener('visibilitychange',function(){if(!document.hidden)syncAll()});setTimeout(syncAll,1500);
var io=window.IntersectionObserver&&new IntersectionObserver(es=>es.forEach(en=>{var el=en.target;if(en.isIntersecting){el._ct=setTimeout(()=>regView(el.dataset.crid,viewer()),1000)}else clearTimeout(el._ct)}),{threshold:.6});
var W={bal:0,tx:[]};try{W=JSON.parse(localStorage.getItem('uj_cr_w')||'null')||W}catch(e){}
function saveW(){try{localStorage.setItem('uj_cr_w',JSON.stringify(W))}catch(e){}}
function credit(a,l){W.bal+=a;W.tx.unshift({t:Date.now(),l:l,a:a});W.tx=W.tx.slice(0,50);saveW();render()}
function walletHTML(){return'<div class="crsd"><small>Solde Creator</small><b>'+fm2(W.bal)+'</b><small>'+(K.mm?'Versé sur '+esc(K.mm):'Aucun compte Mobile Money lié')+'</small><div class="ro"><button data-cwd>Retirer</button><button class="g" data-chist>Historique</button></div></div>'}
function withdraw(){wdFlow({bal:W.bal,label:'Creator',reserve:function(a){W.bal-=a;saveW()}})}
function hist(){var dt=function(t){return new Date(t).toLocaleDateString('fr-FR')},pw=WD.filter(function(x){return x.st=='pending'}).map(function(x){return'<p><span>Retrait en cours de validation<br><small style="color:var(--mu)">'+dt(x.t)+' · '+esc(x.op)+' ···'+esc(x.ph.slice(-2))+'</small></span><span>'+fm2(x.a)+'</span></p>'}).join('');var m=ov('<h2>Historique des gains</h2><div class="ru crtx">'+pw+(W.tx.length?W.tx.map(function(x){return'<p><span>'+esc(x.l)+'<br><small style="color:var(--mu)">'+dt(x.t)+'</small></span>'+(x.a?'<span class="'+(x.a>0?'pos':'')+'">'+(x.a>0?'+':'−')+fm2(Math.abs(x.a))+'</span>':'')+'</p>'}).join(''):(pw?'':'<p>Aucun mouvement pour l’instant.</p>'))+'</div><button class="r" data-a="x">Retour</button>','crm');m.onclick=function(e){if(e.target.closest('[data-a]'))m.remove()}}
function analysis(){var t=stats(),pc=function(n){return t.it?Math.round(n*100/t.it)+' %':'0 %'};
 var rows=st.posts.map(function(p){var v=(V[p.id]||[]).length,l=(L[p.id]||[]).length,c=(C[p.id]||[]).length;return'<p><span>'+esc((p.c||'Publication').slice(0,40))+'<br><small style="color:var(--mu)">'+v+' vues + '+l+' J’aime + '+c+' commentaires</small></span><span class="pos">'+(v+l+c)+'</span></p>'}).join('');
 var m=ov('<h2>Analyse des interactions</h2><div class="ru crtx"><p><span>Vues uniques</span><span>'+t.v+' · '+pc(t.v)+'</span></p><p><span>J’aime</span><span>'+t.l+' · '+pc(t.l)+'</span></p><p><span>Commentaires</span><span>'+t.c+' · '+pc(t.c)+'</span></p><p><b>Total des interactions</b><b>'+t.it+' / 5 000</b></p></div><h2>Décryptage par publication</h2><div class="ru crtx">'+(rows||'<p>Aucune publication pour l’instant.</p>')+'</div><button class="r" data-a="x">Retour</button>','crm');m.onclick=function(e){if(e.target.closest('[data-a]'))m.remove()}}
function build(){
 if(document.getElementById('acr'))return;var ap=document.getElementById('app');if(!ap)return;
 var s=document.createElement('section');s.className='bd';s.id='acr';
 s.innerHTML='<h2>Creator</h2><div class="ph"><div class="sc"><header class="hx"><div class="row hd4"><button class="crt" data-cswitch aria-label="Changer de page"><span class="crw">Creator</span>'+ic.chv+'</button><div class="fl"></div><button class="ib" data-cplus aria-label="Publier">'+ic.plus+'</button><button class="ib" data-cmenu aria-label="Menu">'+ic.menu+'</button></div></header><div id="crbody"></div></div></div>';
 ap.appendChild(s);render();
}
function render(){
 var b=document.getElementById('crbody');if(!b)return;var t=stats(),n=nm();
 b.innerHTML='<div class="crp"><div class="crav">'+esc(n.charAt(0).toUpperCase())+'</div><h1>'+esc(n)+'</h1><small>Page Creator</small></div><div class="crst"><div><b>'+fm(t.f)+'</b><span>Abonnés</span></div><div><b>'+fm(t.it)+'</b><span>Interactions</span></div><div><b>'+t.p+'</b><span>Publications</span></div></div>'+walletHTML()+'<div style="padding:12px 14px 0"><button class="crpick" data-cana>Analyser mes interactions</button></div>'+(st.posts.length?'<div class="crgr">'+st.posts.map(p=>{var c=pit(p.id);return'<i style="background-image:url('+p.img+')"><em>'+c+(c>1?' interactions':' interaction')+(p.m?' · €':'')+'</em></i>'}).join('')+'</div>':'<div class="cre">Aucune publication pour l’instant.<br>Touche + pour publier : ta photo arrive directement dans le fil principal.</div>');
}
function ov(h,c,host){var p=document.querySelector((host||'#acr')+' .ph');var o=document.createElement('div');o.className=c;o.innerHTML=h;p.appendChild(o);return o}
function publish(files,cap,mo,thumb){
 var tx=document.getElementById('ptx'),pf=document.getElementById('pfile'),pb=document.getElementById('ppub');if(!tx||!pf||!pb)return;
 var dt=new DataTransfer();files.forEach(f=>dt.items.add(f));pf.files=dt.files;pf.dispatchEvent(new Event('change',{bubbles:true}));
 var n=0,iv=setInterval(()=>{
  if(document.querySelectorAll('#pth .th').length<files.length&&++n<60)return;clearInterval(iv);
  tx.value=cap;tx.dispatchEvent(new Event('input',{bubbles:true}));
  var id='cr'+Date.now(),orig=window.UJADDPOST;
  window.UJADDPOST=function(t,el){if(el&&el.dataset){el.dataset.crid=id;io&&io.observe(el)}return orig&&orig.apply(this,arguments)};
  pb.click();window.UJADDPOST=orig;
  st.posts.unshift({id:id,img:thumb,m:mo,c:cap,t:Date.now()});setTimeout(()=>{go('acr');render()},60);
 },100);
}
function sheet(){
 var files=[],mo=true;var o=ov('<div class="crsh"><h2>Publier en Creator</h2><input type="file" accept="image/*" multiple hidden><button class="crpick">Choisir des photos</button><div class="crth"></div><textarea placeholder="Écris une légende…" maxlength="300"></textarea><div class="crtg"><span>Contenu monétisé</span><button aria-pressed="true" aria-label="Contenu monétisé"></button></div><small style="color:var(--mu)">Ta publication apparaît dans le fil principal de l’appli.</small><button class="crgo" disabled>Publier</button></div>','cro');
 var f=o.querySelector('input'),th=o.querySelector('.crth'),g2=o.querySelector('.crgo'),tg=o.querySelector('.crtg button'),urls=[];
 o.querySelector('.crpick').onclick=()=>f.click();
 f.onchange=()=>{Array.prototype.forEach.call(f.files,x=>{files.push(x);urls.push(URL.createObjectURL(x))});th.innerHTML=urls.map(u=>'<i style="background-image:url('+u+')"></i>').join('');g2.disabled=!files.length};
 tg.onclick=()=>{mo=!mo;tg.setAttribute('aria-pressed',mo)};
 g2.onclick=()=>{publish(files.slice(0,20),o.querySelector('textarea').value,mo,urls[0]);o.remove()};
 o.onclick=e=>{if(e.target===o)o.remove()};
}
function bRow(i,on){var b=BADGES[i],c=b[0],s=step(),ok=unl(c),h,top=-1;BADGES.forEach((x,j)=>{if(unl(x[0]))top=j});
 if(ok){if(c=='EC')h='Vérifié';else if(act(c))h='Actif · '+left(c)+' j';else h=(top==i&&on)?'<button class="crbuy" data-buy="'+c+'">Renouveler · '+fm2(b[3])+'</button>':'Débloqué'}
 else if(s&&s.c==c){if(s.k=='verify')h=on?'<button class="crbuy" data-verify>Vérifier mon profil</button>':'À faire';else if(s.k=='buy')h=on?'<button class="crbuy" data-buy="'+c+'">Obtenir · '+fm2(b[3])+'</button>':fm2(b[3]);else h='Dans '+s.d+' j'}
 else h='Verrouillé';
 return'<p class="'+(ok?'ok':'')+'">'+(ok?'●':'○')+' Niveau '+(i+1)+' · '+b[1]+(b[4]?' ('+b[4]+' j)':'')+'<span>'+h+'</span></p>'}
var CR_HIDE=true;
function condHTML(on){var t=stats();if(CR_HIDE)return'<div class="ru crcd"><b>Les 4 badges, un par un</b>'+BADGES.map((b,i)=>bRow(i,on)).join('')+'</div>';return'<div class="ru crcd"><b>Étape 1 · Les 4 badges, un par un</b>'+BADGES.map((b,i)=>bRow(i,on)).join('')+'<b>Étape 2 · Audience et activité</b>'+RULES.map(r=>{var ok=r[1](t);return'<p class="'+(ok?'ok':'')+'">'+(ok?'●':'○')+' '+r[0]+'<span>'+r[2](t)+'</span></p>'}).join('')+'<b>Étape 3 · Vérifications du compte</b>'+VER.map(v=>vRow(v,on)).join('')+'</div>'}
function vRow(v,on){var ok=v[2](K),gt=!ok&&(v[0]=='id'||v[0]=='age'||v[0]=='ph')&&!unl('EP'),b=on&&!ok&&!gt&&v[4]&&!(v[0]=='id'&&K.id=='pending');return'<p class="'+(ok?'ok':'')+'">'+(ok?'●':'○')+' '+v[1]+'<span>'+(b?'<button class="crbuy" data-v="'+v[0]+'">'+v[4]+'</button>':(gt?'Dès le niveau 4':v[3](K)))+'</span></p>'}
function fm2(n){return String(n).replace(/\B(?=(\d{3})+$)/g,' ')+' F'}
var BADGE_PAY={create:function(o){var A=window.UJ_PAY;return A&&A.create?A.create(o):Promise.reject(new Error('indisponible'))}};
var curCond=null;
function buy(code){
 var b=BADGES.filter(x=>x[0]==code)[0],op='Orange Money';
 var o=ov('<div class="crsh"><h2>Badge '+b[1]+'</h2><small style="color:var(--mu)">'+b[4]+' jours · sans renouvellement automatique</small>'+(window.UJOPB||'<div class="crop"><button aria-pressed="true">Orange Money</button><button aria-pressed="false">Wave</button></div>')+'<input class="crph" type="tel" inputmode="numeric" maxlength="10" placeholder="Numéro Mobile Money (10 chiffres)"><button class="crgo" disabled>Payer '+fm2(b[3])+'</button></div>','cro','#a4');
 var ph=o.querySelector('input'),go2=o.querySelector('.crgo'),ops=o.querySelectorAll('.crop button');
 ops.forEach(x=>x.onclick=()=>{ops.forEach(y=>y.setAttribute('aria-pressed',y===x));op=x.textContent});
 ph.oninput=()=>{ph.value=ph.value.replace(/\D/g,'');go2.disabled=ph.value.length!=10};
 go2.onclick=()=>{go2.disabled=true;go2.textContent='Paiement en cours…';BADGE_PAY.create({badge:code,amount:b[3],operator:op,phone:ph.value,days:b[4]}).then(r=>{if(r&&r.status=='paid'){B[code]=Date.now()+b[4]*DAY;saveB();o.remove();if(curCond){curCond.remove();conditions()}}else{go2.disabled=false;go2.textContent='Réessayer'}}).catch(()=>{go2.disabled=false;go2.textContent='Réessayer'})};
 o.onclick=e=>{if(e.target===o)o.remove()};
}
function switcher(){
 var host=document.getElementById('acr').classList.contains('on')?'#acr':'#a4',cr=host=='#acr';
 var o=ov('<div class="crsh"><h2>Changer de page</h2><button class="crsw" data-to="a4"><span class="av2">'+ic.usr+'</span><span>Profil étudiant<small>Ton profil et ton fil</small></span>'+(cr?'':'<span class="ck">'+ic.ck+'</span>')+'</button><button class="crsw" data-to="acr"><span class="av2 c">'+esc(nm().charAt(0).toUpperCase())+'</span><span>Page Creator<small>Publie et suis tes vues</small></span>'+(cr?'<span class="ck">'+ic.ck+'</span>':'')+'</button></div>','cro',host);
 o.onclick=e=>{var b=e.target.closest('[data-to]');if(b){var to=b.dataset.to;o.remove();var mm=document.getElementById('mymenu');if(mm)mm.hidden=true;build();render();go(to)}else if(e.target===o)o.remove()};
}
function menu(){
 var m=ov('<h2>Menu Creator</h2><button class="r" data-a="close">Mon profil Creator</button><button class="r" data-a="sw">Changer de page</button><button class="r" data-a="rules">Conditions de monétisation</button><button class="r" data-a="ana">Analyse des interactions</button><button class="r" data-a="off">Quitter le mode Creator</button><button class="r" data-a="x">Fermer</button>','crm');
 m.onclick=e=>{var a=e.target.closest('[data-a]');if(!a)return;a=a.dataset.a;
  if(a=='rules'){m.innerHTML='<h2>Conditions de monétisation</h2>'+condHTML(false)+'<button class="r" data-a="x">Retour</button>';return}
  m.remove();if(a=='ana')analysis();if(a=='sw')switcher();if(a=='off'){setOn(false);go('a4')}};
}
function conditions(){
 var ok=allOk();var o=curCond=ov('<div class="crsh"><h2>'+(CR_HIDE?'Mes badges':'Débloquer le profil Creator')+'</h2><small style="color:var(--mu)">'+(CR_HIDE?'Les badges se débloquent un par un, après la durée du badge précédent.':'Les badges se débloquent un par un, après la durée du badge précédent. Ensuite : audience et activité. La pièce d’identité et le téléphone se vérifient au dernier niveau.')+'</small>'+condHTML(true)+(CR_HIDE?'':'<button class="crgo" data-act'+(ok?'':' disabled')+'>Activer le profil Creator</button>')+'</div>','cro','#a4');
 o.onclick=e=>{if(e.target===o){o.remove();return}
  var bu=e.target.closest('[data-buy]');if(bu){buy(bu.dataset.buy);return}
  var vb=e.target.closest('[data-v]');if(vb){verifSheet(vb.dataset.v);return}
  if(e.target.closest('[data-verify]')){verifSheet('id');return}
  if(e.target.closest('[data-act]')){setOn(true);o.remove();refreshEntry()}};
}
function verifSheet(k){
 var T={id:'Vérifier une pièce',ph:'Vérifier mon numéro',mm:'Lier un compte Mobile Money',orig:'Charte des photos originales'}[k];
 var body={id:'<small style="color:var(--mu)">Choisis le type de pièce, puis envoie une photo lisible. Elle sert uniquement à la vérification.</small><div class="crop"><button aria-pressed="true">Passeport</button><button aria-pressed="false">CMU</button><button aria-pressed="false">Pièce d’identité</button></div><input type="file" accept="image/*" hidden><button class="crpick">Prendre ou choisir une photo</button>',ph:'<input class="crph" type="tel" inputmode="numeric" maxlength="10" placeholder="Numéro (10 chiffres)"><input class="crph" type="tel" inputmode="numeric" maxlength="6" placeholder="Code reçu par SMS (6 chiffres)" hidden>',mm:'<div class="crop"><button aria-pressed="true">Orange Money</button><button aria-pressed="false">Wave</button></div><input class="crph" type="tel" inputmode="numeric" maxlength="10" placeholder="Numéro Mobile Money (10 chiffres)">',orig:'<small style="color:var(--mu)">Je m’engage à ne publier que des photos prises par moi ou dont je détiens les droits.</small>'}[k];
 var lab={id:'Envoyer pour vérification',ph:'Envoyer le code',mm:'Lier ce compte',orig:'J’accepte'}[k];
 var o=ov('<div class="crsh"><h2>'+T+'</h2>'+body+'<button class="crgo"'+(k=='orig'?'':' disabled')+'>'+lab+'</button></div>','cro','#a4');
 var g=o.querySelector('.crgo'),ins=o.querySelectorAll('input.crph'),ch=o.querySelectorAll('.crop button'),sel=0,file=o.querySelector('input[type=file]'),stage=0,types=['Passeport','CMU','Pièce d’identité'],ops=['Orange Money','Wave'];
 function chk(){if(k=='ph')g.disabled=stage?ins[1].value.length!=6:ins[0].value.length!=10;if(k=='mm')g.disabled=ins[0].value.length!=10}
 ch.forEach((x,i)=>x.onclick=()=>{ch.forEach(y=>y.setAttribute('aria-pressed',y===x));sel=i});
 if(file){var pk=o.querySelector('.crpick');pk.onclick=()=>file.click();file.onchange=()=>{g.disabled=!file.files.length;pk.textContent=file.files.length?'Photo choisie ✓':'Prendre ou choisir une photo'}}
 ins.forEach(i=>i.oninput=()=>{i.value=i.value.replace(/\D/g,'');chk()});
 g.onclick=()=>{
  if(k=='ph'){var VF=window.UJ_VERIFY;if(!VF){g.textContent='Service SMS indisponible';return}g.disabled=true;if(!stage){VF.sendCode(ins[0].value).then(function(){stage=1;ins[1].hidden=false;g.textContent='Valider le code'}).catch(function(){g.textContent='Réessayer';g.disabled=false});return}VF.check(ins[0].value,ins[1].value).then(function(ok){if(ok){K.ph=1;saveK();o.remove();if(curCond){curCond.remove();conditions()}}else{g.textContent='Code incorrect';g.disabled=false}}).catch(function(){g.textContent='Réessayer';g.disabled=false});return}
  if(k=='id'){K.id='pending';K.idt=types[sel]}
  if(k=='mm')K.mm=ops[sel]+' ···'+ins[0].value.slice(-2);
  if(k=='orig')K.orig=1;
  saveK();o.remove();if(curCond){curCond.remove();conditions()}};
 o.onclick=e=>{if(e.target===o)o.remove()};
}
function entry(){
 var h=document.getElementById('mmhome');if(!h||h.querySelector('.crent'))return false;
 var t=stats(),n=prog(),d=document.createElement('div');d.className='crent';
 d.innerHTML=st.on?'<b>Profil Creator</b><span>Ta page Creator est active. Passe de page en page quand tu veux.</span><button data-center>Ouvrir ma page Creator</button><button class="crs2" data-cswitch>Changer de page</button>':'<b>Profil Creator</b><span>Se débloque avec la monétisation ('+n+'/'+(BADGES.length+RULES.length+VER.length)+' conditions remplies).</span><button data-ccond>Voir les conditions</button>';
 var top=h.querySelector('.mmtop');top?top.after(d):h.prepend(d);return true;
}
function refreshEntry(){var h=document.getElementById('mmhome'),e=h&&h.querySelector('.crent');if(e)e.remove();entry()}
/* Espace Creator retiré : plus de page Creator, de carte « Profil Creator » dans le menu ni de bascule de page.
   Le moteur de retrait (UJCREATOR.withdraw / held) reste en place pour la Page pro. */
try{localStorage.removeItem('uj_creator')}catch(e){}

})();

}catch(e){console.error("[ujlog] crjs",e)}
/* ==== page des 30 jours (score, trophées, soutien) ==== */
try{
window.UJOPB='<div class="crop" style="flex-wrap:wrap"><button aria-pressed="true" style="min-width:46%;display:flex;align-items:center;justify-content:center;gap:8px">Orange Money</button><button aria-pressed="false" style="min-width:46%;display:flex;align-items:center;justify-content:center;gap:8px">Wave</button><button aria-pressed="false" style="min-width:46%;display:flex;align-items:center;justify-content:center;gap:8px"><img src="data:image/png;base64,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" alt="" width="24" height="24" style="border-radius:6px">MTN Money</button><button aria-pressed="false" style="min-width:46%;display:flex;align-items:center;justify-content:center;gap:8px"><img src="data:image/png;base64,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" alt="" width="24" height="24" style="border-radius:6px">Moov Money</button></div>';
(function(){
const LS=localStorage,g=(k,d)=>{try{const v=JSON.parse(LS.getItem(k));return v==null?d:v}catch(e){return d}},sv=(k,v)=>{try{LS.setItem(k,JSON.stringify(v))}catch(e){}},DAY=864e5,WA='2250506172317';
let since=g('uj_since',0);if(!since){since=Date.now();sv('uj_since',since)}
let A=g('uj_act',{pts:0});const PT={l:1,c:3,r:3,fv:1,s:5,p:10,pg:2};
function add(t){A[t]=(A[t]||0)+1;A.pts=(A.pts||0)+(PT[t]||0);sv('uj_act',A)}
window.UJACT={add:add,get:()=>A};
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
acct=()=>g('ujlog_acct',{}),nm=()=>((acct().pre||'')+' '+(acct().nom||'')).trim()||'un étudiant',
verified=()=>{try{if(window.UJCREATOR&&UJCREATOR.info().b>0)return true}catch(e){}return !!acct().ver},
CT=()=>{let st={f:0,p:0};try{st=UJCREATOR.stats()}catch(e){}return[['Abonnés',st.f||0],['Publications',Math.max(A.p||0,st.p||0)],['Republications',A.r||0],['J’aime',A.l||0],['Favoris',A.fv||0],['Commentaires',A.c||0],['Stories',A.s||0],['Pages suivies',A.pg||0]]},
model=p=>p>=10000?4:p>=5000?3:p>=2000?2:p>=500?1:0;
const css=document.createElement('style');css.id='uj30-css';css.textContent=`#uj30{position:fixed;inset:0;z-index:2147483000;overflow:hidden;background:radial-gradient(120% 90% at 50% 0%,#5FB89B 0%,#12877A 45%,#0C5F58 100%);color:#4A4036;font-family:'Trebuchet MS',system-ui,sans-serif}
#uj30 .p{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:calc(24px + env(safe-area-inset-top,0px)) 22px calc(24px + env(safe-area-inset-bottom,0px));transform:translateX(100%);transition:transform .45s cubic-bezier(.2,.8,.2,1);overflow:auto}
#uj30 .p.in{transform:none}#uj30 .p.out{transform:translateX(-100%)}
#uj30 .cd{width:100%;max-width:420px;background:#F8EBD5;border-radius:28px;padding:26px 22px;text-align:center;box-shadow:0 8px 0 #D9C5A2;display:grid;gap:14px}
#uj30 h2{margin:0;font:800 23px/1.2 'Trebuchet MS',system-ui;color:#4A4036}#uj30 p{margin:0;font-size:16px;line-height:1.45;font-weight:700}
#uj30 .bt{width:100%;max-width:420px;height:54px;border:0;border-radius:16px;background:#333;color:#fff;font:800 18px 'Trebuchet MS',system-ui;box-shadow:0 5px 0 #151515;cursor:pointer}
#uj30 .bt.w{background:#fff;color:#E8A700;box-shadow:0 5px 0 #CFE3EA}#uj30 .bt:disabled{opacity:.5}
#uj30 .lk{background:none;border:0;color:#fff;font:800 15px 'Trebuchet MS',system-ui;text-decoration:underline;cursor:pointer}
#uj30 .big{font:800 64px/1 'Trebuchet MS',system-ui;color:#0C5F58}#uj30 small{font-size:13px;opacity:.8;font-weight:700}
#uj30 .gr{display:grid;grid-template-columns:1fr 1fr;gap:8px}#uj30 .gr div{background:#fff8;border-radius:14px;padding:10px 6px}#uj30 .gr b{display:block;font:800 22px 'Trebuchet MS',system-ui}#uj30 .gr .ok b{color:#0C8A5F}
#uj30 .x{position:absolute;top:calc(14px + env(safe-area-inset-top,0px));left:14px;width:40px;height:40px;border-radius:50%;border:0;background:#fff3;color:#fff;font-size:20px;cursor:pointer;z-index:3}
#uj30 .crsh{background:transparent;padding:0;max-height:none;overflow:visible}#uj30 .crph{width:100%;height:50px;border-radius:14px;border:2px solid #D9C5A2;background:#fff;color:#4A4036;font:inherit;padding:0 14px}
#uj30 .crop button{background:#fff;color:#4A4036}#uj30 .crop button[aria-pressed=true]{background:#12877A;color:#fff}#uj30 .pe{color:#B42318;font-size:14px}
.ujtr{display:grid;gap:10px}.ujtr .it{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--ln,#E0E6F2);border-radius:18px;padding:10px 14px}.ujtr .it b{display:block}.ujtr .it small{color:var(--mu,#5A6580)}.ujtr button.it{width:100%;text-align:left;font:inherit;color:inherit}`;
document.head.appendChild(css);
let ov=null,step=0,ctx={};
function page(h,bind){const old=ov.querySelector('.p.in'),p=document.createElement('div');p.className='p';p.innerHTML=h;ov.appendChild(p);if(bind)bind(p);requestAnimationFrame(()=>requestAnimationFrame(()=>{p.classList.add('in');if(old){old.classList.remove('in');old.classList.add('out');setTimeout(()=>old.remove(),500)}}))}
const btn=(t,id,c)=>`<button class="bt ${c||''}" id="${id}">${t}</button>`,go=(p,id,f)=>{const b=p.querySelector('#'+id);if(b)b.onclick=f};
const S1=()=>page(`<div class="cd"><h2>Merci d’avoir rejoint la communauté My UJLoG</h2><p>Ça fait 30 jours que tu fais vivre l’application, du déploiement jusqu’aux innovations qui continuent. Merci d’avoir contribué à son amélioration.</p></div>${btn('Continuer','n')}`,p=>go(p,'n',S2));
const S2=()=>{const pts=A.pts||0,msg=TIERS.find(t=>pts>=t[0])[1];page(`<div class="cd"><small>Ton score d’utilisation</small><div class="big" id="sc">0</div><h2>${msg}</h2><small>Chaque j’aime, commentaire, republication, favori, story et publication te rapporte des points, en arrière-plan.</small></div>${btn('Continuer','n')}`,p=>{go(p,'n',S3);const e=p.querySelector('#sc');let t0=null;const f=ts=>{t0=t0||ts;const k=Math.min(1,(ts-t0)/1200);e.textContent=fm(Math.round(pts*(1-Math.pow(1-k,3))));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)})};
const S3=()=>{const c=CT(),n=c.filter(x=>x[1]>=10).length,need=Math.ceil(c.length*.8);ctx.ok=n>=need;page(`<div class="cd"><h2>Ton activité en chiffres</h2><div class="gr">${c.map(x=>`<div class="${x[1]>=10?'ok':''}"><b>${fm(x[1])}${x[1]>=10?' ✓':''}</b><small>${x[0]}</small></div>`).join('')}</div><small>${n} compteur${n>1?'s':''} sur ${c.length} dépasse${n>1?'nt':''} 10. Il en faut ${need} pour décrocher un trophée.</small></div>${btn('Continuer','n')}`,p=>go(p,'n',S4))};
const S4=()=>{sv('uj_30_done',1);const m=model(A.pts||0),q=ctx.ok;if(q){const L=g('uj_trophies',[]);L.unshift({m:m,t:Date.now(),p:A.pts||0});sv('uj_trophies',L.slice(0,20));renderBlock()}
page(q?`<div class="cd">${cup(TR[m][1])}<small>Nouveau trophée</small><h2>Trophée ${TR[m][0]}</h2><p>Il est rangé dans « Mes trophées », dans Mon espace.</p></div>${btn('Continuer','n')}`:`<div class="cd"><h2>Pas encore de trophée</h2><p>Continue d’aimer, commenter, republier et publier : il te faut au moins 10 dans la plupart des compteurs. Ton score est conservé.</p></div>${btn('Continuer','n')}`,p=>go(p,'n',S5))};
const wa=()=>'https://wa.me/'+WA+'?text='+encodeURIComponent('Bonjour l’équipe My UJLoG, c’est une belle initiative de mettre en place cette application pour faciliter le quotidien des étudiants. Je souhaite apporter mon soutien à l’évolution de l’application en contribuant avec 500 FCFA. — '+nm());
const S5=()=>page(`<div class="cd"><h2>Merci pour votre engagement</h2><p>Vous faites partie de la communauté My UJLoG depuis le ${dt(since)}.</p><p>Vous pouvez soutenir votre appli du moment avec 500 FCFA. En créditant ce montant, vous soutenez directement My UJLoG et contribuez à son évolution.</p></div>${btn('Soutenir avec 500 FCFA','n')}<a class="lk" href="${wa()}" target="_blank" rel="noopener">Contacter l’équipe My UJLoG sur WhatsApp</a><button class="lk" id="l">Plus tard</button>`,p=>{go(p,'n',S6);go(p,'l',close)});
const S6=()=>{let op='Orange Money';const ob=window.UJOPB||'';page(`<div class="cd"><h2>Soutenir My UJLoG</h2><div class="crsh"><div style="display:grid;gap:12px">${ob}<input class="crph" id="ph" type="tel" inputmode="numeric" maxlength="10" placeholder="Numéro Mobile Money (10 chiffres)"><p class="pe" id="er" role="alert"></p></div></div></div>${btn('Payer 500 F','n')}<button class="lk" id="l">Retour</button>`,p=>{const b=p.querySelector('#n'),ph=p.querySelector('#ph'),er=p.querySelector('#er'),ops=p.querySelectorAll('.crop button');b.disabled=true;
ops.forEach(x=>x.onclick=()=>{ops.forEach(y=>y.setAttribute('aria-pressed',y===x));op=x.textContent});ph.oninput=()=>{ph.value=ph.value.replace(/\D/g,'');b.disabled=ph.value.length!=10};go(p,'l',S5);
b.onclick=()=>{const P=window.UJ_PAY;er.textContent='';if(!(P&&P.create)){er.textContent='Paiement indisponible : service non configuré.';return}b.disabled=true;b.textContent='Paiement en cours…';
P.create({badge:'SOUTIEN',amount:500,operator:op,phone:ph.value,days:0}).then(r=>{if(r&&r.status=='paid'){sv('uj_support',{t:Date.now(),a:500});sv('uj_monlog',1);renderBlock();S7()}else throw 0}).catch(()=>{b.disabled=false;b.textContent='Réessayer';er.textContent='Paiement non abouti. Réessaie.'})}})};
const S7=()=>page(`<div class="cd"><h2>Bienvenue, ${esc(acct().pre||'')} !</h2><p>Merci pour votre contribution à l’évolution de My UJLoG. Nous espérons que l’application facilite votre quotidien et vous donne un avantage grâce à ses nombreuses fonctionnalités.</p><p>Et ce n’est pas tout : vous débloquez maintenant les MONLoG.</p></div>${btn('Découvrir les MONLoG','n')}`,p=>go(p,'n',close));
function open(from){if(ov)return;ov=document.createElement('div');ov.id='uj30';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.innerHTML='<button class="x" aria-label="Fermer">✕</button>';document.body.appendChild(ov);ov.querySelector('.x').onclick=close;ctx={};(from==5?S5:S1)()}
function close(){if(ov){ov.remove();ov=null}}
window.UJ30={open:()=>open(),support:()=>open(5)};
function renderBlock(){document.querySelectorAll('#ujtrb').forEach(x=>x.remove());const lb=[...document.querySelectorAll('.mx-lb')].find(x=>/Mes espaces/.test(x.textContent));if(!lb)return;const L=g('uj_trophies',[]),sup=g('uj_support',0);
lb.insertAdjacentHTML('beforebegin',`<div id="ujtrb"><div class="mx-lb"><h3>Trophées et récompenses</h3></div><div class="ujtr">${L.length?L.map(x=>`<div class="it">${cup(TR[x.m][1]).replace(/width="96" height="96"/,'width="40" height="40"')}<span><b>Trophée ${TR[x.m][0]}</b><small>${dt(x.t)} · ${fm(x.p)} points</small></span></div>`).join(''):'<div class="it"><span><b>Aucun trophée pour l’instant</b><small>Le premier arrive après 30 jours d’utilisation.</small></span></div>'}${sup?`<div class="it"><span><b>Soutien à My UJLoG</b><small>Merci ! MONLoG débloqués le ${dt(sup.t)}</small></span></div>`:(g('uj_30_done',0)?'<button class="it" id="ujsup"><span><b>Soutenir My UJLoG · 500 FCFA</b><small>Contribue à l’évolution de l’application</small></span></button>':'')}</div></div>`);const s=document.getElementById('ujsup');if(s)s.onclick=()=>UJ30.support()}
let raf=0;new MutationObserver(()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;if(!document.getElementById('ujtrb')&&document.querySelector('.mx-lb'))renderBlock()})}).observe(document.documentElement,{childList:true,subtree:true});
function check(){if(!ov&&verified()&&!g('uj_30_done',0)&&Date.now()-since>=30*DAY)open()}
setTimeout(check,4000);setInterval(check,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)check()});
})();

}catch(e){console.error('[ujlog] uj30',e)}
