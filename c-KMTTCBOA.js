import{b as se}from"./c-U7DRWV6W.js";import{a as Y,b as ee}from"./c-3UAAMZLR.js";import"./c-LU4AALRX.js";import{a as z}from"./c-57GZGDMQ.js";import"./c-4AXZCYLR.js";import"./c-LNTV4JSU.js";import"./c-SXRKIO5L.js";import{b as K,c as Z}from"./c-HRGXUMN6.js";import"./c-NW2KDJHQ.js";import{i as S}from"./c-MT4VHGBZ.js";import"./c-X4U7ZPBE.js";import{A as R,E as B,H as G,I as J,b as O,c as w,d as _,e as L,g as X,r as V,s as H,u as I,w as U,x as F,y as W,z as E}from"./c-DRMEDINK.js";import"./c-JEU2M36O.js";import{a as h,d as y,e as j,f as N,h as c}from"./c-ZGLP6JIW.js";import{I as M,J as D,f as b,i as v,k as T,o as C,x as u,y as f}from"./c-3A27ZPTS.js";import"./c-427Z5ASM.js";function ke(a,s){let e=j(s);return!e||!E(e)?!1:(q(a,{kind:"lesson",id:s,label:e.title,title:`Quiz \xB7 ${e.title}`,questions:ae(e),back:`#lecon-${s}`}),!0)}function ae(a){let s=O,e=f(a.quiz.map((p,k)=>({ref:`${a.id}:${k}`,q:p}))),r=Math.min(e.length,v.lessons[a.id]?.attempts?Math.round(s*.6):s),t=ee(Y(a),1,`${a.id}:ord`,a.levelId),i=e.slice(0,Math.min(r,s-t.length)),o=S(a,s-i.length-t.length),n=e.slice(i.length,i.length+Math.max(0,s-i.length-o.length-t.length));return f([...i,...o,...t,...n])}function A(a,s,e=[]){let r=[...e],t=f(a).map(i=>f(i.quiz.map((o,n)=>({ref:`${i.id}:${n}`,q:o,lesson:i}))));for(let i=0;r.length<s&&t.some(o=>o.length);i++){let o=t[i%t.length];o.length&&r.push(o.pop())}for(let i=0,o=0;r.length<s&&o<a.length*3;i++,o++){let n=a[i%a.length];S(n,Math.min(3,s-r.length)).forEach(k=>r.push({...k,lesson:n}))}return f(r.slice(0,s))}var te=a=>A(a.lessons,L,f(a.exam.map((s,e)=>({ref:`exam-${a.id}:${e}`,q:s}))).slice(0,L));function xe(a,s){let e=y(s),r=h.indexOf(e);if(!e||!U(r))return!1;let t=e.lessons.slice(0,I(e)),i=A(t,_).map(({ref:o,q:n})=>({ref:o,q:n}));return q(a,{kind:"checkpoint",id:s,label:`Mi-palier ${c(e)}`,title:`Test de mi-palier ${c(e)}`,questions:f(i),back:"#parcours"}),!0}function Pe(a,s){let e=y(s),r=h.indexOf(e);return!e||!R(r)?!1:(q(a,{kind:"exam",id:s,label:`Examen ${c(s)}`,title:`Examen de fin de palier ${c(s)}`,questions:te(e).map(({ref:t,q:i})=>({ref:t,q:i})),back:"#parcours"}),!0)}function ge(a,s){let e=y(s),r=h.indexOf(e);if(!e||!W(r))return!1;let t=L,i=e.lessons.filter(n=>H(n.id)).length,o=v.blanc?.[s];return a.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Entra\xEEnement \xE0 l'examen</p>
    <h1>\u{1F4DD} Examen blanc ${u(c(e))}</h1>
    <p class="lead">${t} questions tir\xE9es de <b>toutes les le\xE7ons</b> du palier, comme le jour de l'examen.</p>
    <ul class="defi-rules">
      <li>\u{1F3AF} Il faut <b>${Math.round(w*100)} %</b> pour r\xE9ussir le vrai examen</li>
      <li>\u{1F4DA} Vous avez termin\xE9 <b>${i}/${e.lessons.length}</b> le\xE7ons : les autres appara\xEEtront aussi</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs : c'est un essai</li>
      <li>\u{1F4CB} \xC0 la fin : les le\xE7ons \xE0 revoir en priorit\xE9</li>
    </ul>
    ${o?`<p class="muted small">Meilleur examen blanc : <b>${o.best}/${o.total}</b> \xB7 dernier : ${o.last}/${o.total}</p>`:""}
    <button class="btn primary big" data-go>Commencer l'examen blanc</button>
  </section>`,a.querySelector("[data-go]").onclick=()=>ne(a,e),!0}function ne(a,s){let e=A(s.lessons,L);document.body.classList.add("focus-mode"),z(a,{title:`Examen blanc ${c(s)}`,questions:e.map(({ref:r,q:t})=>({ref:r,q:t})),onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:r=>{document.body.classList.remove("focus-mode");let t=r.filter(l=>l.correct).length,i=r.length,o=V({label:`Examen blanc ${c(s)}`,score:t,total:i,xpPer:2,key:`blanc:${s.id}`});T(l=>{let m=l.blanc?.[s.id];l.blanc={...l.blanc||{},[s.id]:{best:Math.max(m?.best||0,t),last:t,total:i,date:Date.now()}}});let n={};r.forEach((l,m)=>{if(!l.correct){let P=e[m].lesson;n[P.id]=(n[P.id]||0)+1}});let p=s.lessons.filter(l=>n[l.id]).sort((l,m)=>n[m.id]-n[l.id]),k=Math.round(t/i*100),x=Math.ceil(w*i),$=t>=x,d=R(h.indexOf(s));a.innerHTML=`
      <section class="results ${$?"ok":"ko"}">
        ${D(k,150,12)}
        <h1>${$?"Vous auriez r\xE9ussi l'examen ! \u{1F393}":"Pas encore tout \xE0 fait"}</h1>
        <p class="lead">${t} / ${i} bonnes r\xE9ponses \xB7 ${x} n\xE9cessaires</p>
        <p class="muted">${$?d?"Vous \xEAtes pr\xEAt\xB7e : lancez-vous pour de vrai !":"Terminez les le\xE7ons du palier pour d\xE9bloquer le vrai examen.":`Il vous manque ${x-t} bonne${x-t>1?"s":""} r\xE9ponse${x-t>1?"s":""}. Voici quoi revoir en priorit\xE9.`}</p>
        <div class="result-chips">${o.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${o.xpGained} XP</span>`}</div>
        ${p.length?`<div class="card blanc-review"><h2 class="h3">\u{1F4CB} \xC0 revoir</h2><ul>${p.map(l=>{let m=E(l);return`<li><span>${l.emoji} ${u(l.title)}</span><small>${n[l.id]} erreur${n[l.id]>1?"s":""}</small>
            ${m?`<a class="btn ghost small" href="#lecon-${l.id}">Revoir</a>`:'<span class="muted small">\u{1F512} pas encore faite</span>'}</li>`}).join("")}</ul></div>`:""}
        <div class="result-actions">
          ${$&&d?`<a class="btn primary big" href="#examen-${s.id}">Passer le vrai examen \u2192</a>`:`<a class="btn primary big" href="#blanc-${s.id}" data-reload>Refaire un examen blanc</a>`}
          <a class="btn ghost" href="#parcours">Retour au parcours</a>
        </div>
      </section>`,$&&M()}})}function ye(a){let s=Object.values(v.errors).sort((e,r)=>r.count-e.count||e.lastWrong-r.lastWrong).slice(0,10).map(e=>({ref:e.ref,q:N(e.ref)})).filter(e=>e.q);return s.length?(q(a,{kind:"review",id:"review",label:"R\xE9vision des erreurs",title:"R\xE9vision de vos erreurs",questions:f(s),back:"#erreurs"}),!0):(location.hash="erreurs",!0)}function q(a,s){document.body.classList.add("focus-mode"),s.t0=Date.now(),z(a,{title:s.title,questions:s.questions,xpPerAnswer:X,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=s.back.slice(1)},onFinish:e=>{document.body.classList.remove("focus-mode");let r=J({kind:s.kind,id:s.id,label:s.label,results:e});r.ms=Date.now()-s.t0,ie(a,s,r)}})}function ie(a,s,e){let r=Math.round(e.ratio*100),t=B(),i,o,n;if(s.kind==="review")i=r===100?"Sans faute ! \u{1F4AA}":"R\xE9vision termin\xE9e",o=e.mastered?`${e.mastered} notion(s) ma\xEEtris\xE9e(s) et retir\xE9e(s) du cahier d'erreurs.`:"Une erreur dispara\xEEt du cahier apr\xE8s 2 bonnes r\xE9ponses d'affil\xE9e.",n=Object.keys(v.errors).length?'<a class="btn primary big" href="#revision" data-reload>Nouvelle r\xE9vision</a>':'<a class="btn primary big" href="#parcours">Retour au parcours</a>';else if(e.passed)i=s.kind==="exam"?`Palier ${c(s.id)} valid\xE9 ! \u{1F393}`:s.kind==="checkpoint"?"Mi-palier franchi ! \u{1F6E1}\uFE0F":b.resultHeads[e.stars-1]||b.resultHeads[0],o=s.kind==="checkpoint"?"La deuxi\xE8me moiti\xE9 du palier est d\xE9bloqu\xE9e.":s.kind==="exam"?h[h.findIndex(d=>d.id===s.id)+1]?`Le palier ${c(h[h.findIndex(d=>d.id===s.id)+1])} est maintenant d\xE9bloqu\xE9.`:b.finished:e.newWords?`${e.newWords} nouveaux mots ajout\xE9s \xE0 votre carnet.`:"Le\xE7on valid\xE9e.",n=t?`<a class="btn primary big" href="#${F(t)}">${t.kind==="lesson"?"Le\xE7on suivante":t.kind==="checkpoint"?`Test de mi-palier ${c(t.level)}`:`Examen ${c(t.level)}`} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon tableau de bord</a>';else{i=b.almost;let d=Math.ceil(e.passMark*e.total);o=s.kind==="exam"?`L'examen se valide sans aucune faute (${e.total}/${e.total}). Il vous en manquait ${e.total-e.score}. Vos erreurs sont dans le cahier : r\xE9visez-les, puis r\xE9essayez.`:s.kind==="checkpoint"?`Il faut ${d}/${e.total} pour franchir le mi-palier. R\xE9visez les le\xE7ons concern\xE9es (vos erreurs sont dans le cahier), puis r\xE9essayez : les questions changent.`:`Il faut ${Math.round(e.passMark*100)} % pour valider. Relisez la le\xE7on, vos erreurs sont dans le cahier.`,n=`<a class="btn primary big" href="#${s.kind==="exam"?"examen-"+s.id:s.kind==="checkpoint"?"mipalier-"+s.id:"quiz-"+s.id}" data-reload>R\xE9essayer</a>`}s.kind!=="review"&&se(s.kind,s.id)&&(n='<a class="btn primary big" href="#seance">Continuer la s\xE9ance du jour \u2192</a>'+(e.passed?"":n.replace("btn primary big","btn ghost")));let p=Math.round((e.ms||0)/1e3),k=p>=60?`${Math.floor(p/60)}:${String(p%60).padStart(2,"0")}`:`${p} s`,x=G(),$=(d,l,m,P,g=null)=>`<div class="rt ${P}"><small>${l}</small><b ${g!=null?`data-count="${g}"`:""}>${g!=null?0:m}</b><span>${d}</span></div>`;a.innerHTML=`
  <section class="results ${e.passed?"ok":"ko"} rich">
    <div class="res-hero ${e.passed?"happy":"sad"}">
      <span class="res-mascot">${K(e.passed?"cheer":"sad",{size:132})}</span>
      <span class="res-me">${u(v.profile?.avatar||"\u{1F642}")}</span>
      <span class="m-bubble res-bubble">${u(Z(e.passed?"win":"fail"))}</span>
    </div>
    ${s.kind!=="review"?`<div class="stars" aria-label="${e.stars} \xE9toiles sur 3">${[1,2,3].map(d=>`<span class="${d<=e.stars?"on":""}" style="--d:${d*160}ms">\u2605</span>`).join("")}</div>`:""}
    <h1>${i}</h1>
    <p class="muted">${u(o)}</p>
    <div class="res-tiles">
      ${$("\u26A1","XP gagn\xE9s",e.xpGained,"t-xp",e.xpGained)}
      ${$("\u{1F3AF}","Pr\xE9cision",`${r} %`,r>=80?"t-acc":"t-acc low",null)}
      ${$("\u23F1\uFE0F","Temps",k,"t-time")}
      ${$("\u{1F525}","S\xE9rie",`${x} j`,"t-streak")}
    </div>
    <div class="result-chips">
      <span class="chip">\u2705 ${e.score} / ${e.total}</span>
      ${e.newWords?`<span class="chip">\u{1F4D2} +${e.newWords} mots</span>`:""}
      ${e.total-e.score?`<span class="chip warn">\u{1F501} ${e.total-e.score} \xE0 revoir</span>`:""}
    </div>
    <div class="result-actions">
      ${n}
      <a class="btn ghost" href="${s.back}">${s.kind==="lesson"?"Relire la le\xE7on":"Retour"}</a>
    </div>
  </section>`,a.querySelectorAll("[data-count]").forEach(d=>{let l=+d.dataset.count,m=performance.now(),P=g=>{let Q=Math.min(1,(g-m)/900);d.textContent=Math.round(l*(1-Math.pow(1-Q,3))),Q<1&&requestAnimationFrame(P)};requestAnimationFrame(P)}),s.kind==="exam"&&e.passed&&e.firstPass?(M({sound:"fanfare"}),setTimeout(()=>re(s.id,e),900)):e.passed&&(e.firstPass||e.ratio===1)?M():e.passed&&C("win")}function re(a,s){let e=y(a),r=h.indexOf(e),t=h[r+1],i=v.profile?.pseudo||"",o=new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),n=document.createElement("div");n.className="diploma-screen",n.innerHTML=`
    <div class="dip-card" role="dialog" aria-label="Dipl\xF4me ${u(c(e))}">
      <div class="dip-ribbon">\u{1F393}</div>
      <p class="dip-kicker">Dipl\xF4me</p>
      <h2>Palier ${u(c(e))}</h2>
      <p class="dip-level">${u(e.name)} \xB7 ${u(e.title)}</p>
      <p class="dip-to">d\xE9cern\xE9 \xE0</p>
      <p class="dip-name">${u(i)} ${u(v.profile?.avatar||"")}</p>
      <p class="dip-meta">${u(b.label)} \xB7 ${s.score}/${s.total} \xB7 ${o}</p>
      <div class="dip-seal">${u(b.brand)}</div>
      <div class="dip-actions">
        ${t?`<a class="btn primary big" href="#parcours" data-next="${t.id}">D\xE9couvrir le palier ${u(c(t))} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon parcours</a>'}
        ${navigator.share?'<button class="btn ghost" data-share>Partager</button>':""}
        <button class="btn ghost" data-close>Fermer</button>
      </div>
    </div>`,document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("in"));let p=()=>{n.classList.remove("in"),setTimeout(()=>n.remove(),250)};n.querySelector("[data-close]").onclick=p,n.querySelector("[data-next]")?.addEventListener("click",()=>{p(),setTimeout(()=>document.getElementById(`palier-${t.id}`)?.scrollIntoView({behavior:"smooth"}),400)}),n.querySelector("[data-share]")?.addEventListener("click",()=>navigator.share({title:`Dipl\xF4me ${c(e)}`,text:`\u{1F393} J'ai valid\xE9 le palier ${c(e)} en ${b.label.toLowerCase()} sur ${b.brand} !`,url:location.origin+location.pathname}).catch(()=>{}))}export{ge as renderBlanc,Pe as renderExamen,xe as renderMiPalier,ke as renderQuiz,ye as renderRevision};
