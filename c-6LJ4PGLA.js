import{b as ee}from"./c-TXU5XHNZ.js";import{a as Z,b as Y}from"./c-FIM6UW62.js";import{a as S}from"./c-V4AHPDZI.js";import"./c-4LJZ2PIR.js";import{b as G,c as J}from"./c-YWYV7KXW.js";import"./c-SXRKIO5L.js";import"./c-D2M7FSEB.js";import{i as K}from"./c-UNDNLHWL.js";import"./c-GLRWZ2S7.js";import{C as _,F as X,G as B,b as Q,c as M,d as A,e as V,p as H,q as N,s as U,u as F,v as I,w as W,x as E,y as R}from"./c-RYJG7R7B.js";import"./c-AKWP2WZX.js";import{a as m,d as L,e as j,f as C,h as d}from"./c-6WFQWVVY.js";import{G as q,H as O,d as k,g,i as T,m as D,v as p,w as $}from"./c-TOAGLOJB.js";import"./c-427Z5ASM.js";function fe(n,s){let e=j(s);return!e||!E(e)?!1:(w(n,{kind:"lesson",id:s,label:e.title,title:`Quiz \xB7 ${e.title}`,questions:se(e),back:`#lecon-${s}`}),!0)}function se(n){let s=Q,e=$(n.quiz.map((r,x)=>({ref:`${n.id}:${x}`,q:r}))),l=Math.min(e.length,g.lessons[n.id]?.attempts?Math.round(s*.6):s),i=Y(Z(n),1,`${n.id}:ord`,n.levelId),c=e.slice(0,Math.min(l,s-i.length)),t=K(n,s-c.length-i.length),a=e.slice(c.length,c.length+Math.max(0,s-c.length-t.length-i.length));return $([...c,...t,...i,...a])}function ve(n,s){let e=L(s),l=m.indexOf(e);if(!e||!F(l))return!1;let i=e.lessons.slice(0,U(e)),c=$(i).map(a=>$(a.quiz.map((r,x)=>({ref:`${a.id}:${x}`,q:r})))),t=[];for(let a=0;t.length<A&&c.some(r=>r.length);a++){let r=c[a%c.length];r.length&&t.push(r.pop())}return w(n,{kind:"checkpoint",id:s,label:`Mi-palier ${d(e)}`,title:`Test de mi-palier ${d(e)}`,questions:$(t),back:"#parcours"}),!0}function ke(n,s){let e=L(s),l=m.indexOf(e);return!e||!R(l)?!1:(w(n,{kind:"exam",id:s,label:`Examen ${d(s)}`,title:`Examen de fin de palier ${d(s)}`,questions:e.exam.map((i,c)=>({ref:`exam-${s}:${c}`,q:i})),back:"#parcours"}),!0)}function xe(n,s){let e=L(s),l=m.indexOf(e);if(!e||!W(l))return!1;let i=e.exam.length,c=e.lessons.filter(a=>N(a.id)).length,t=g.blanc?.[s];return n.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Entra\xEEnement \xE0 l'examen</p>
    <h1>\u{1F4DD} Examen blanc ${p(d(e))}</h1>
    <p class="lead">${i} questions tir\xE9es de <b>toutes les le\xE7ons</b> du palier, comme le jour de l'examen.</p>
    <ul class="defi-rules">
      <li>\u{1F3AF} Il faut <b>${Math.round(M*100)} %</b> pour r\xE9ussir le vrai examen</li>
      <li>\u{1F4DA} Vous avez termin\xE9 <b>${c}/${e.lessons.length}</b> le\xE7ons : les autres appara\xEEtront aussi</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs : c'est un essai</li>
      <li>\u{1F4CB} \xC0 la fin : les le\xE7ons \xE0 revoir en priorit\xE9</li>
    </ul>
    ${t?`<p class="muted small">Meilleur examen blanc : <b>${t.best}/${t.total}</b> \xB7 dernier : ${t.last}/${t.total}</p>`:""}
    <button class="btn primary big" data-go>Commencer l'examen blanc</button>
  </section>`,n.querySelector("[data-go]").onclick=()=>ae(n,e),!0}function ae(n,s){let e=s.exam.length,l=$(s.lessons).map(t=>$(t.quiz.map((a,r)=>({ref:`${t.id}:${r}`,q:a,lesson:t})))),i=[];for(let t=0;i.length<e&&l.some(a=>a.length);t++){let a=l[t%l.length];a.length&&i.push(a.pop())}let c=$(i);document.body.classList.add("focus-mode"),S(n,{title:`Examen blanc ${d(s)}`,questions:c.map(({ref:t,q:a})=>({ref:t,q:a})),onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:t=>{document.body.classList.remove("focus-mode");let a=t.filter(o=>o.correct).length,r=t.length,x=H({label:`Examen blanc ${d(s)}`,score:a,total:r,xpPer:2,key:`blanc:${s.id}`});T(o=>{let h=o.blanc?.[s.id];o.blanc={...o.blanc||{},[s.id]:{best:Math.max(h?.best||0,a),last:a,total:r,date:Date.now()}}});let b={};t.forEach((o,h)=>{if(!o.correct){let z=c[h].lesson;b[z.id]=(b[z.id]||0)+1}});let P=s.lessons.filter(o=>b[o.id]).sort((o,h)=>b[h.id]-b[o.id]),u=Math.round(a/r*100),f=Math.ceil(M*r),v=a>=f,y=R(m.indexOf(s));n.innerHTML=`
      <section class="results ${v?"ok":"ko"}">
        ${O(u,150,12)}
        <h1>${v?"Vous auriez r\xE9ussi l'examen ! \u{1F393}":"Pas encore tout \xE0 fait"}</h1>
        <p class="lead">${a} / ${r} bonnes r\xE9ponses \xB7 ${f} n\xE9cessaires</p>
        <p class="muted">${v?y?"Vous \xEAtes pr\xEAt\xB7e : lancez-vous pour de vrai !":"Terminez les le\xE7ons du palier pour d\xE9bloquer le vrai examen.":`Il vous manque ${f-a} bonne${f-a>1?"s":""} r\xE9ponse${f-a>1?"s":""}. Voici quoi revoir en priorit\xE9.`}</p>
        <div class="result-chips">${x.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${x.xpGained} XP</span>`}</div>
        ${P.length?`<div class="card blanc-review"><h2 class="h3">\u{1F4CB} \xC0 revoir</h2><ul>${P.map(o=>{let h=E(o);return`<li><span>${o.emoji} ${p(o.title)}</span><small>${b[o.id]} erreur${b[o.id]>1?"s":""}</small>
            ${h?`<a class="btn ghost small" href="#lecon-${o.id}">Revoir</a>`:'<span class="muted small">\u{1F512} pas encore faite</span>'}</li>`}).join("")}</ul></div>`:""}
        <div class="result-actions">
          ${v&&y?`<a class="btn primary big" href="#examen-${s.id}">Passer le vrai examen \u2192</a>`:`<a class="btn primary big" href="#blanc-${s.id}" data-reload>Refaire un examen blanc</a>`}
          <a class="btn ghost" href="#parcours">Retour au parcours</a>
        </div>
      </section>`,v&&q()}})}function ge(n){let s=Object.values(g.errors).sort((e,l)=>l.count-e.count||e.lastWrong-l.lastWrong).slice(0,10).map(e=>({ref:e.ref,q:C(e.ref)})).filter(e=>e.q);return s.length?(w(n,{kind:"review",id:"review",label:"R\xE9vision des erreurs",title:"R\xE9vision de vos erreurs",questions:$(s),back:"#erreurs"}),!0):(location.hash="erreurs",!0)}function w(n,s){document.body.classList.add("focus-mode"),s.t0=Date.now(),S(n,{title:s.title,questions:s.questions,xpPerAnswer:V,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=s.back.slice(1)},onFinish:e=>{document.body.classList.remove("focus-mode");let l=B({kind:s.kind,id:s.id,label:s.label,results:e});l.ms=Date.now()-s.t0,te(n,s,l)}})}function te(n,s,e){let l=Math.round(e.ratio*100),i=_(),c,t,a;if(s.kind==="review")c=l===100?"Sans faute ! \u{1F4AA}":"R\xE9vision termin\xE9e",t=e.mastered?`${e.mastered} notion(s) ma\xEEtris\xE9e(s) et retir\xE9e(s) du cahier d'erreurs.`:"Une erreur dispara\xEEt du cahier apr\xE8s 2 bonnes r\xE9ponses d'affil\xE9e.",a=Object.keys(g.errors).length?'<a class="btn primary big" href="#revision" data-reload>Nouvelle r\xE9vision</a>':'<a class="btn primary big" href="#parcours">Retour au parcours</a>';else if(e.passed)c=s.kind==="exam"?`Palier ${d(s.id)} valid\xE9 ! \u{1F393}`:s.kind==="checkpoint"?"Mi-palier franchi ! \u{1F6E1}\uFE0F":k.resultHeads[e.stars-1]||k.resultHeads[0],t=s.kind==="checkpoint"?"La deuxi\xE8me moiti\xE9 du palier est d\xE9bloqu\xE9e.":s.kind==="exam"?m[m.findIndex(u=>u.id===s.id)+1]?`Le palier ${d(m[m.findIndex(u=>u.id===s.id)+1])} est maintenant d\xE9bloqu\xE9.`:k.finished:e.newWords?`${e.newWords} nouveaux mots ajout\xE9s \xE0 votre carnet.`:"Le\xE7on valid\xE9e.",a=i?`<a class="btn primary big" href="#${I(i)}">${i.kind==="lesson"?"Le\xE7on suivante":i.kind==="checkpoint"?`Test de mi-palier ${d(i.level)}`:`Examen ${d(i.level)}`} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon tableau de bord</a>';else{c=k.almost;let u=Math.ceil(e.passMark*e.total);t=s.kind==="exam"?`L'examen se valide sans aucune faute (${e.total}/${e.total}). Il vous en manquait ${e.total-e.score}. Vos erreurs sont dans le cahier : r\xE9visez-les, puis r\xE9essayez.`:s.kind==="checkpoint"?`Il faut ${u}/${e.total} pour franchir le mi-palier. R\xE9visez les le\xE7ons concern\xE9es (vos erreurs sont dans le cahier), puis r\xE9essayez : les questions changent.`:`Il faut ${Math.round(e.passMark*100)} % pour valider. Relisez la le\xE7on, vos erreurs sont dans le cahier.`,a=`<a class="btn primary big" href="#${s.kind==="exam"?"examen-"+s.id:s.kind==="checkpoint"?"mipalier-"+s.id:"quiz-"+s.id}" data-reload>R\xE9essayer</a>`}s.kind!=="review"&&ee(s.kind,s.id)&&(a='<a class="btn primary big" href="#seance">Continuer la s\xE9ance du jour \u2192</a>'+(e.passed?"":a.replace("btn primary big","btn ghost")));let r=Math.round((e.ms||0)/1e3),x=r>=60?`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`:`${r} s`,b=X(),P=(u,f,v,y,o=null)=>`<div class="rt ${y}"><small>${f}</small><b ${o!=null?`data-count="${o}"`:""}>${o!=null?0:v}</b><span>${u}</span></div>`;n.innerHTML=`
  <section class="results ${e.passed?"ok":"ko"} rich">
    <div class="res-hero ${e.passed?"happy":"sad"}">
      <span class="res-mascot">${G(e.passed?"cheer":"sad",{size:132})}</span>
      <span class="res-me">${p(g.profile?.avatar||"\u{1F642}")}</span>
      <span class="m-bubble res-bubble">${p(J(e.passed?"win":"fail"))}</span>
    </div>
    ${s.kind!=="review"?`<div class="stars" aria-label="${e.stars} \xE9toiles sur 3">${[1,2,3].map(u=>`<span class="${u<=e.stars?"on":""}" style="--d:${u*160}ms">\u2605</span>`).join("")}</div>`:""}
    <h1>${c}</h1>
    <p class="muted">${p(t)}</p>
    <div class="res-tiles">
      ${P("\u26A1","XP gagn\xE9s",e.xpGained,"t-xp",e.xpGained)}
      ${P("\u{1F3AF}","Pr\xE9cision",`${l} %`,l>=80?"t-acc":"t-acc low",null)}
      ${P("\u23F1\uFE0F","Temps",x,"t-time")}
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
  </section>`,n.querySelectorAll("[data-count]").forEach(u=>{let f=+u.dataset.count,v=performance.now(),y=o=>{let h=Math.min(1,(o-v)/900);u.textContent=Math.round(f*(1-Math.pow(1-h,3))),h<1&&requestAnimationFrame(y)};requestAnimationFrame(y)}),s.kind==="exam"&&e.passed&&e.firstPass?(q({sound:"fanfare"}),setTimeout(()=>ne(s.id,e),900)):e.passed&&(e.firstPass||e.ratio===1)?q():e.passed&&D("win")}function ne(n,s){let e=L(n),l=m.indexOf(e),i=m[l+1],c=g.profile?.pseudo||"",t=new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),a=document.createElement("div");a.className="diploma-screen",a.innerHTML=`
    <div class="dip-card" role="dialog" aria-label="Dipl\xF4me ${p(d(e))}">
      <div class="dip-ribbon">\u{1F393}</div>
      <p class="dip-kicker">Dipl\xF4me</p>
      <h2>Palier ${p(d(e))}</h2>
      <p class="dip-level">${p(e.name)} \xB7 ${p(e.title)}</p>
      <p class="dip-to">d\xE9cern\xE9 \xE0</p>
      <p class="dip-name">${p(c)} ${p(g.profile?.avatar||"")}</p>
      <p class="dip-meta">${p(k.label)} \xB7 ${s.score}/${s.total} \xB7 ${t}</p>
      <div class="dip-seal">${p(k.brand)}</div>
      <div class="dip-actions">
        ${i?`<a class="btn primary big" href="#parcours" data-next="${i.id}">D\xE9couvrir le palier ${p(d(i))} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon parcours</a>'}
        ${navigator.share?'<button class="btn ghost" data-share>Partager</button>':""}
        <button class="btn ghost" data-close>Fermer</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("in"));let r=()=>{a.classList.remove("in"),setTimeout(()=>a.remove(),250)};a.querySelector("[data-close]").onclick=r,a.querySelector("[data-next]")?.addEventListener("click",()=>{r(),setTimeout(()=>document.getElementById(`palier-${i.id}`)?.scrollIntoView({behavior:"smooth"}),400)}),a.querySelector("[data-share]")?.addEventListener("click",()=>navigator.share({title:`Dipl\xF4me ${d(e)}`,text:`\u{1F393} J'ai valid\xE9 le palier ${d(e)} en ${k.label.toLowerCase()} sur ${k.brand} !`,url:location.origin+location.pathname}).catch(()=>{}))}export{xe as renderBlanc,ke as renderExamen,ve as renderMiPalier,fe as renderQuiz,ge as renderRevision};
