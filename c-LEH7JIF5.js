import{a as A,b as O}from"./c-TJPRG35R.js";import{b as j}from"./c-TH5PVZ4B.js";import{n as w,o as T,p as P,q as E}from"./c-AV733DHL.js";import{d as R}from"./c-ATLTSJ2U.js";import{e as C,h as H}from"./c-MIDVS6EG.js";import{D as q,I as z,J as M,e as d,i as $,k as x,x as a}from"./c-ZYDQFTBY.js";var B={it:()=>import("./c-63WSWNZF.js"),zh:()=>import("./c-HW3VVQCS.js")},D={[d]:(await(B[d]||B.it)()).default};var _=new Set(["\u738B\u660E","\u5F20\u4F1F","\u8001\u677F","\u7238\u7238","\u54E5\u54E5","\u5F1F\u5F1F","\u7237\u7237","Marco","Luca","Paolo","Giorgio","Signor Rossi","Cameriere","Barista","Impiegato","Selezionatore"]),J=new Set(["L\xE9a","\u5F20\u4F1F\u7684\u5988\u5988","\u5C0F\u7F8E","\u59D0\u59D0","\u59B9\u59B9","\u5988\u5988","\u5976\u5976","\u670D\u52A1\u5458","Giulia","Sofia","Anna","Dottoressa","Commessa","Signora","Direttrice"]),h=()=>D[d]||[],S=n=>E(n.after),I=["#3b82c4","#c2410c","#7c3aed","#0f766e","#be185d"],le=()=>({total:h().length,open:h().filter(S).length,done:h().filter(n=>$.stories?.[n.id]?.done).length});function ce(n){return n.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">Lire et \xE9couter</p><h1>\u{1F4D6} Histoires</h1>
    <p class="muted">De courts dialogues avec les mots de vos le\xE7ons. Touchez une phrase pour voir sa traduction.</p></header>
  <div class="story-list">
    ${h().map(i=>{let t=S(i),f=$.stories?.[i.id],v=C(i.after);return`<a class="story-item ${t?"":"locked"}" ${t?`href="#histoire-${i.id}"`:'aria-disabled="true"'}>
        <span class="story-emoji">${t?i.emoji:"\u{1F512}"}</span>
        <span class="story-txt"><b class="${d==="zh"?"zh":""}">${a(i.title)} <em class="story-lvl">${a(H(i.level||"A1"))}</em></b>
          ${i.titlePy?`<small class="py">${a(i.titlePy)}</small>`:""}
          <small>${t?a(i.intro):`Se d\xE9bloque apr\xE8s la le\xE7on \xAB ${a(v?.title||i.after)} \xBB`}</small></span>
        ${f?.done?`<span class="story-done" title="Termin\xE9e">${f.best}/${f.total} \u2713${w(`story:${i.id}`)?`<small>XP dans ${T(w(`story:${i.id}`))}</small>`:""}</span>`:""}
      </a>`}).join("")}
  </div>`,!0}function de(n,i){let t=h().find(e=>e.id===i);if(!t||!S(t))return!1;let f=d==="zh"&&R(t.level||"A1"),v=[...new Set(t.lines.map(e=>e.who).filter(Boolean))],Q=e=>I[v.indexOf(e)%I.length],G=e=>e?_.has(e)?"m":J.has(e)?"f":v.indexOf(e)%2?"alt":null:null,y=t.lines.filter(e=>e.q).length,g=0,b=0,L=!1;document.body.classList.add("focus-mode"),n.innerHTML=`
  <section class="story">
    <div class="story-top">
      <button class="btn ghost small" data-quit aria-label="Quitter">\u2715</button>
      <div class="progress"><span class="story-bar"></span></div>
      ${A()}
    </div>
    <header class="story-head"><span class="story-big">${t.emoji}</span>
      <h1 class="${d==="zh"?"zh":""}">${a(t.title)}</h1>${t.titlePy?`<p class="py">${a(t.titlePy)}</p>`:""}
      <p class="muted small">${a(t.intro)}</p></header>
    <div class="story-lines" aria-live="polite"></div>
    <div class="story-foot"><button class="btn primary big" data-next>Commencer</button></div>
  </section>`;let k=n.querySelector(".story-lines"),p=n.querySelector("[data-next]"),X=n.querySelector(".story-bar"),N=()=>{document.body.classList.remove("focus-mode"),location.hash="histoires"};n.querySelector("[data-quit]").onclick=N;function V(e){let s=`<p class="sl-t ${d==="zh"?"zh":""}">${j(e.t)}</p>
      ${e.py?`<p class="sl-py ${f?"":"hidden"}">${a(e.py)}</p>`:""}
      <p class="sl-fr hidden">${a(e.fr)}</p>`;return e.who?`<div class="sl talk" tabindex="0" style="--who:${Q(e.who)}">
      <span class="sl-who">${a(e.who)}</span>
      <div class="sl-bubble">${s}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`:`<div class="sl narr" tabindex="0"><div class="sl-body">${s}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`}let r=null;O(()=>({place:`Histoire \xB7 ${t.title}`,audio:r?.t||"",question:r?.q?`${r.q} \u2014 ${(r.options||[]).join(" / ")}`:r?.fr||"",expected:r?.q?r.options?.[r.answer]:[r?.t,r?.py].filter(Boolean).join(" \xB7 ")}));function F(e){r=e;let u=document.createElement("div");u.innerHTML=V(e);let s=u.firstElementChild;k.appendChild(s);let o=G(e.who);s.querySelector("[data-say]").onclick=l=>{l.stopPropagation(),q(e.t,{force:!0,voice:o})},s.onclick=()=>{s.querySelector(".sl-fr").classList.toggle("hidden"),s.querySelector(".sl-py")?.classList.remove("hidden")},q(e.t,{force:!0,voice:o}),s.scrollIntoView({behavior:"smooth",block:"end"})}function U(e){r=e,L=!0,p.disabled=!0,p.textContent="Choisissez une r\xE9ponse";let u=e.options.map((o,l)=>l).sort(()=>Math.random()-.5),s=document.createElement("div");s.className="sl-q card",s.innerHTML=`<p class="eyebrow">Question</p><p class="sl-qt">${a(e.q)}</p>
      <div class="options">${u.map(o=>`<button class="option" data-i="${o}"><span>${a(e.options[o])}</span></button>`).join("")}</div>`,k.appendChild(s),s.scrollIntoView({behavior:"smooth",block:"end"}),s.querySelectorAll("[data-i]").forEach(o=>o.onclick=()=>{let l=+o.dataset.i,m=l===e.answer;m&&b++,s.querySelectorAll("[data-i]").forEach(c=>{c.disabled=!0,+c.dataset.i===e.answer?c.classList.add("correct"):c===o&&c.classList.add("wrong")}),s.insertAdjacentHTML("beforeend",`<p class="sl-res ${m?"ok":"ko"}">${m?"\u2713 Bonne r\xE9ponse !":"\u2717 Pas tout \xE0 fait."}</p>`),L=!1,p.disabled=!1,p.textContent="Continuer",p.focus()})}function W(){let e=$.stories?.[t.id],u=!e?.done,s=P({label:`Histoire \xB7 ${t.title}`,score:b,total:y,xpPer:10,key:`story:${t.id}`}),o=0;u&&(o=20,P({label:"",score:1,total:0,xpPer:o})),x(c=>{c.stories={...c.stories||{},[t.id]:{done:!0,best:Math.max(e?.best||0,b),total:y,date:Date.now()}}}),document.body.classList.remove("focus-mode");let l=y?Math.round(b/y*100):100,m=h().find(c=>S(c)&&!$.stories?.[c.id]?.done);n.innerHTML=`
    <section class="results ${l>=60?"ok":"ko"}">
      ${M(l,150,12)}
      <h1>${l===100?"Tout compris ! \u{1F389}":l>=60?"Histoire termin\xE9e !":"Histoire termin\xE9e"}</h1>
      <p class="lead">${b} / ${y} questions de compr\xE9hension</p>
      <div class="result-chips">${s.capped&&!o?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${s.xpGained+o} XP</span>`}${o?'<span class="chip">\u{1F4D6} Nouvelle histoire lue</span>':""}</div>
      <div class="result-actions">
        ${m?`<a class="btn primary big" href="#histoire-${m.id}">Histoire suivante \u2192</a>`:'<a class="btn primary big" href="#histoires">Toutes les histoires</a>'}
        <a class="btn ghost" href="#histoire-${t.id}" data-reload>Relire</a>
      </div>
    </section>`,l===100&&z()}return p.onclick=()=>{if(L)return;if(g>=t.lines.length)return W();let e=t.lines[g++];X.style.width=`${Math.round(g/t.lines.length*100)}%`,e.q?U(e):(F(e),p.textContent=g>=t.lines.length?"Terminer":"Continuer")},!0}export{D as a,le as b,ce as c,de as d};
