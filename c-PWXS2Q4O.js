import{g as Z}from"./c-WZ3QTWF2.js";import{b as K}from"./c-5GUQ4PP5.js";import"./c-OYTNVDAH.js";import{a as z}from"./c-JOM4KZE3.js";import{b as G,c as J}from"./c-HGWN5Q2D.js";import"./c-TOLAVVGQ.js";import"./c-54XCJSN7.js";import"./c-SXWKU6A4.js";import{B as U,D as F,E as W,F as _,G as E,H as R,L as I,O as X,P as B,a as m,d as L,e as j,f as C,h as d,k as Q,l as M,m as A,n as V,y as H,z as N}from"./c-NJ7WR4MG.js";import{d as k,g as x,i as T,m as D,q as p,r as $,x as q,y as O}from"./c-N347SEYN.js";import"./c-427Z5ASM.js";function he(n,s){let e=j(s);return!e||!E(e)?!1:(w(n,{kind:"lesson",id:s,label:e.title,title:`Quiz \xB7 ${e.title}`,questions:Y(e),back:`#lecon-${s}`}),!0)}function Y(n){let s=Q,e=$(n.quiz.map((a,o)=>({ref:`${n.id}:${o}`,q:a}))),i=Math.min(e.length,x.lessons[n.id]?.attempts?Math.round(s*.6):s),r=e.slice(0,i),c=Z(n,s-r.length),t=e.slice(i,i+Math.max(0,s-r.length-c.length));return $([...r,...c,...t])}function $e(n,s){let e=L(s),i=m.indexOf(e);if(!e||!F(i))return!1;let r=e.lessons.slice(0,U(e)),c=$(r).map(a=>$(a.quiz.map((o,g)=>({ref:`${a.id}:${g}`,q:o})))),t=[];for(let a=0;t.length<A&&c.some(o=>o.length);a++){let o=c[a%c.length];o.length&&t.push(o.pop())}return w(n,{kind:"checkpoint",id:s,label:`Mi-palier ${d(e)}`,title:`Test de mi-palier ${d(e)}`,questions:$(t),back:"#parcours"}),!0}function be(n,s){let e=L(s),i=m.indexOf(e);return!e||!R(i)?!1:(w(n,{kind:"exam",id:s,label:`Examen ${d(s)}`,title:`Examen de fin de palier ${d(s)}`,questions:e.exam.map((r,c)=>({ref:`exam-${s}:${c}`,q:r})),back:"#parcours"}),!0)}function fe(n,s){let e=L(s),i=m.indexOf(e);if(!e||!_(i))return!1;let r=e.exam.length,c=e.lessons.filter(a=>N(a.id)).length,t=x.blanc?.[s];return n.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Entra\xEEnement \xE0 l'examen</p>
    <h1>\u{1F4DD} Examen blanc ${p(d(e))}</h1>
    <p class="lead">${r} questions tir\xE9es de <b>toutes les le\xE7ons</b> du palier, comme le jour de l'examen.</p>
    <ul class="defi-rules">
      <li>\u{1F3AF} Il faut <b>${Math.round(M*100)} %</b> pour r\xE9ussir le vrai examen</li>
      <li>\u{1F4DA} Vous avez termin\xE9 <b>${c}/${e.lessons.length}</b> le\xE7ons : les autres appara\xEEtront aussi</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs : c'est un essai</li>
      <li>\u{1F4CB} \xC0 la fin : les le\xE7ons \xE0 revoir en priorit\xE9</li>
    </ul>
    ${t?`<p class="muted small">Meilleur examen blanc : <b>${t.best}/${t.total}</b> \xB7 dernier : ${t.last}/${t.total}</p>`:""}
    <button class="btn primary big" data-go>Commencer l'examen blanc</button>
  </section>`,n.querySelector("[data-go]").onclick=()=>ee(n,e),!0}function ee(n,s){let e=s.exam.length,i=$(s.lessons).map(t=>$(t.quiz.map((a,o)=>({ref:`${t.id}:${o}`,q:a,lesson:t})))),r=[];for(let t=0;r.length<e&&i.some(a=>a.length);t++){let a=i[t%i.length];a.length&&r.push(a.pop())}let c=$(r);document.body.classList.add("focus-mode"),z(n,{title:`Examen blanc ${d(s)}`,questions:c.map(({ref:t,q:a})=>({ref:t,q:a})),onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:t=>{document.body.classList.remove("focus-mode");let a=t.filter(l=>l.correct).length,o=t.length,g=H({label:`Examen blanc ${d(s)}`,score:a,total:o,xpPer:2,key:`blanc:${s.id}`});T(l=>{let h=l.blanc?.[s.id];l.blanc={...l.blanc||{},[s.id]:{best:Math.max(h?.best||0,a),last:a,total:o,date:Date.now()}}});let b={};t.forEach((l,h)=>{if(!l.correct){let S=c[h].lesson;b[S.id]=(b[S.id]||0)+1}});let P=s.lessons.filter(l=>b[l.id]).sort((l,h)=>b[h.id]-b[l.id]),u=Math.round(a/o*100),f=Math.ceil(M*o),v=a>=f,y=R(m.indexOf(s));n.innerHTML=`
      <section class="results ${v?"ok":"ko"}">
        ${O(u,150,12)}
        <h1>${v?"Vous auriez r\xE9ussi l'examen ! \u{1F393}":"Pas encore tout \xE0 fait"}</h1>
        <p class="lead">${a} / ${o} bonnes r\xE9ponses \xB7 ${f} n\xE9cessaires</p>
        <p class="muted">${v?y?"Vous \xEAtes pr\xEAt\xB7e : lancez-vous pour de vrai !":"Terminez les le\xE7ons du palier pour d\xE9bloquer le vrai examen.":`Il vous manque ${f-a} bonne${f-a>1?"s":""} r\xE9ponse${f-a>1?"s":""}. Voici quoi revoir en priorit\xE9.`}</p>
        <div class="result-chips">${g.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${g.xpGained} XP</span>`}</div>
        ${P.length?`<div class="card blanc-review"><h2 class="h3">\u{1F4CB} \xC0 revoir</h2><ul>${P.map(l=>{let h=E(l);return`<li><span>${l.emoji} ${p(l.title)}</span><small>${b[l.id]} erreur${b[l.id]>1?"s":""}</small>
            ${h?`<a class="btn ghost small" href="#lecon-${l.id}">Revoir</a>`:'<span class="muted small">\u{1F512} pas encore faite</span>'}</li>`}).join("")}</ul></div>`:""}
        <div class="result-actions">
          ${v&&y?`<a class="btn primary big" href="#examen-${s.id}">Passer le vrai examen \u2192</a>`:`<a class="btn primary big" href="#blanc-${s.id}" data-reload>Refaire un examen blanc</a>`}
          <a class="btn ghost" href="#parcours">Retour au parcours</a>
        </div>
      </section>`,v&&q()}})}function ve(n){let s=Object.values(x.errors).sort((e,i)=>i.count-e.count||e.lastWrong-i.lastWrong).slice(0,10).map(e=>({ref:e.ref,q:C(e.ref)})).filter(e=>e.q);return s.length?(w(n,{kind:"review",id:"review",label:"R\xE9vision des erreurs",title:"R\xE9vision de vos erreurs",questions:$(s),back:"#erreurs"}),!0):(location.hash="erreurs",!0)}function w(n,s){document.body.classList.add("focus-mode"),s.t0=Date.now(),z(n,{title:s.title,questions:s.questions,xpPerAnswer:V,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=s.back.slice(1)},onFinish:e=>{document.body.classList.remove("focus-mode");let i=B({kind:s.kind,id:s.id,label:s.label,results:e});i.ms=Date.now()-s.t0,se(n,s,i)}})}function se(n,s,e){let i=Math.round(e.ratio*100),r=I(),c,t,a;if(s.kind==="review")c=i===100?"Sans faute ! \u{1F4AA}":"R\xE9vision termin\xE9e",t=e.mastered?`${e.mastered} notion(s) ma\xEEtris\xE9e(s) et retir\xE9e(s) du cahier d'erreurs.`:"Une erreur dispara\xEEt du cahier apr\xE8s 2 bonnes r\xE9ponses d'affil\xE9e.",a=Object.keys(x.errors).length?'<a class="btn primary big" href="#revision" data-reload>Nouvelle r\xE9vision</a>':'<a class="btn primary big" href="#parcours">Retour au parcours</a>';else if(e.passed)c=s.kind==="exam"?`Palier ${d(s.id)} valid\xE9 ! \u{1F393}`:s.kind==="checkpoint"?"Mi-palier franchi ! \u{1F6E1}\uFE0F":k.resultHeads[e.stars-1]||k.resultHeads[0],t=s.kind==="checkpoint"?"La deuxi\xE8me moiti\xE9 du palier est d\xE9bloqu\xE9e.":s.kind==="exam"?m[m.findIndex(u=>u.id===s.id)+1]?`Le palier ${d(m[m.findIndex(u=>u.id===s.id)+1])} est maintenant d\xE9bloqu\xE9.`:k.finished:e.newWords?`${e.newWords} nouveaux mots ajout\xE9s \xE0 votre carnet.`:"Le\xE7on valid\xE9e.",a=r?`<a class="btn primary big" href="#${W(r)}">${r.kind==="lesson"?"Le\xE7on suivante":r.kind==="checkpoint"?`Test de mi-palier ${d(r.level)}`:`Examen ${d(r.level)}`} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon tableau de bord</a>';else{c=k.almost;let u=Math.ceil(e.passMark*e.total);t=s.kind==="exam"?`L'examen se valide sans aucune faute (${e.total}/${e.total}). Il vous en manquait ${e.total-e.score}. Vos erreurs sont dans le cahier : r\xE9visez-les, puis r\xE9essayez.`:s.kind==="checkpoint"?`Il faut ${u}/${e.total} pour franchir le mi-palier. R\xE9visez les le\xE7ons concern\xE9es (vos erreurs sont dans le cahier), puis r\xE9essayez : les questions changent.`:`Il faut ${Math.round(e.passMark*100)} % pour valider. Relisez la le\xE7on, vos erreurs sont dans le cahier.`,a=`<a class="btn primary big" href="#${s.kind==="exam"?"examen-"+s.id:s.kind==="checkpoint"?"mipalier-"+s.id:"quiz-"+s.id}" data-reload>R\xE9essayer</a>`}s.kind!=="review"&&K(s.kind,s.id)&&(a='<a class="btn primary big" href="#seance">Continuer la s\xE9ance du jour \u2192</a>'+(e.passed?"":a.replace("btn primary big","btn ghost")));let o=Math.round((e.ms||0)/1e3),g=o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")}`:`${o} s`,b=X(),P=(u,f,v,y,l=null)=>`<div class="rt ${y}"><small>${f}</small><b ${l!=null?`data-count="${l}"`:""}>${l!=null?0:v}</b><span>${u}</span></div>`;n.innerHTML=`
  <section class="results ${e.passed?"ok":"ko"} rich">
    <div class="res-hero ${e.passed?"happy":"sad"}">
      <span class="res-mascot">${G(e.passed?"cheer":"sad",{size:132})}</span>
      <span class="res-me">${p(x.profile?.avatar||"\u{1F642}")}</span>
      <span class="m-bubble res-bubble">${p(J(e.passed?"win":"fail"))}</span>
    </div>
    ${s.kind!=="review"?`<div class="stars" aria-label="${e.stars} \xE9toiles sur 3">${[1,2,3].map(u=>`<span class="${u<=e.stars?"on":""}" style="--d:${u*160}ms">\u2605</span>`).join("")}</div>`:""}
    <h1>${c}</h1>
    <p class="muted">${p(t)}</p>
    <div class="res-tiles">
      ${P("\u26A1","XP gagn\xE9s",e.xpGained,"t-xp",e.xpGained)}
      ${P("\u{1F3AF}","Pr\xE9cision",`${i} %`,i>=80?"t-acc":"t-acc low",null)}
      ${P("\u23F1\uFE0F","Temps",g,"t-time")}
      ${P("\u{1F525}","S\xE9rie",`${b} j`,"t-streak")}
    </div>
    <div class="result-chips">
      <span class="chip">\u2705 ${e.score} / ${e.total}</span>
      ${e.newWords?`<span class="chip">\u{1F4D2} +${e.newWords} mots</span>`:""}
      ${e.total-e.score?`<span class="chip warn">\u{1F501} ${e.total-e.score} \xE0 revoir</span>`:""}
    </div>
    <div class="result-actions">
      ${a}
      <a class="btn ghost" href="${s.back}">${s.kind==="lesson"?"Relire la le\xE7on":"Retour"}</a>
    </div>
  </section>`,n.querySelectorAll("[data-count]").forEach(u=>{let f=+u.dataset.count,v=performance.now(),y=l=>{let h=Math.min(1,(l-v)/900);u.textContent=Math.round(f*(1-Math.pow(1-h,3))),h<1&&requestAnimationFrame(y)};requestAnimationFrame(y)}),s.kind==="exam"&&e.passed&&e.firstPass?(q({sound:"fanfare"}),setTimeout(()=>ae(s.id,e),900)):e.passed&&(e.firstPass||e.ratio===1)?q():e.passed&&D("win")}function ae(n,s){let e=L(n),i=m.indexOf(e),r=m[i+1],c=x.profile?.pseudo||"",t=new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),a=document.createElement("div");a.className="diploma-screen",a.innerHTML=`
    <div class="dip-card" role="dialog" aria-label="Dipl\xF4me ${p(d(e))}">
      <div class="dip-ribbon">\u{1F393}</div>
      <p class="dip-kicker">Dipl\xF4me</p>
      <h2>Palier ${p(d(e))}</h2>
      <p class="dip-level">${p(e.name)} \xB7 ${p(e.title)}</p>
      <p class="dip-to">d\xE9cern\xE9 \xE0</p>
      <p class="dip-name">${p(c)} ${p(x.profile?.avatar||"")}</p>
      <p class="dip-meta">${p(k.label)} \xB7 ${s.score}/${s.total} \xB7 ${t}</p>
      <div class="dip-seal">${p(k.brand)}</div>
      <div class="dip-actions">
        ${r?`<a class="btn primary big" href="#parcours" data-next="${r.id}">D\xE9couvrir le palier ${p(d(r))} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon parcours</a>'}
        ${navigator.share?'<button class="btn ghost" data-share>Partager</button>':""}
        <button class="btn ghost" data-close>Fermer</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("in"));let o=()=>{a.classList.remove("in"),setTimeout(()=>a.remove(),250)};a.querySelector("[data-close]").onclick=o,a.querySelector("[data-next]")?.addEventListener("click",()=>{o(),setTimeout(()=>document.getElementById(`palier-${r.id}`)?.scrollIntoView({behavior:"smooth"}),400)}),a.querySelector("[data-share]")?.addEventListener("click",()=>navigator.share({title:`Dipl\xF4me ${d(e)}`,text:`\u{1F393} J'ai valid\xE9 le palier ${d(e)} en ${k.label.toLowerCase()} sur ${k.brand} !`,url:location.origin+location.pathname}).catch(()=>{}))}export{fe as renderBlanc,be as renderExamen,$e as renderMiPalier,he as renderQuiz,ve as renderRevision};
