import{b as A}from"./c-ANXKTFSK.js";import{n as k,o as T,p as S,q as z}from"./c-MOIEJ7ZZ.js";import{d as E}from"./c-S42NHM5H.js";import{e as x,h as H}from"./c-IZTMTY3B.js";import{A as P,F as C,G as M,c,g as y,i as q,u as a}from"./c-OHA5FEEO.js";var R={it:()=>import("./c-UJLMALG6.js"),zh:()=>import("./c-HMGDNIHD.js")},j={[c]:(await(R[c]||R.it)()).default};var F=new Set(["\u738B\u660E","\u5F20\u4F1F","\u8001\u677F","\u7238\u7238","\u54E5\u54E5","\u5F1F\u5F1F","\u7237\u7237","Marco","Luca","Paolo","Giorgio"]),U=new Set(["L\xE9a","\u5C0F\u7F8E","\u59D0\u59D0","\u59B9\u59B9","\u5988\u5988","\u5976\u5976","\u670D\u52A1\u5458","Giulia","Sofia","Anna"]),h=()=>j[c]||[],g=n=>z(n.after),O=["#3b82c4","#c2410c","#7c3aed","#0f766e","#be185d"],ie=()=>({total:h().length,open:h().filter(g).length,done:h().filter(n=>y.stories?.[n.id]?.done).length});function ae(n){return n.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">Lire et \xE9couter</p><h1>\u{1F4D6} Histoires</h1>
    <p class="muted">De courts dialogues avec les mots de vos le\xE7ons. Touchez une phrase pour voir sa traduction.</p></header>
  <div class="story-list">
    ${h().map(i=>{let t=g(i),m=y.stories?.[i.id],$=x(i.after);return`<a class="story-item ${t?"":"locked"}" ${t?`href="#histoire-${i.id}"`:'aria-disabled="true"'}>
        <span class="story-emoji">${t?i.emoji:"\u{1F512}"}</span>
        <span class="story-txt"><b class="${c==="zh"?"zh":""}">${a(i.title)} <em class="story-lvl">${a(H(i.level||"A1"))}</em></b>
          ${i.titlePy?`<small class="py">${a(i.titlePy)}</small>`:""}
          <small>${t?a(i.intro):`Se d\xE9bloque apr\xE8s la le\xE7on \xAB ${a($?.title||i.after)} \xBB`}</small></span>
        ${m?.done?`<span class="story-done" title="Termin\xE9e">${m.best}/${m.total} \u2713${k(`story:${i.id}`)?`<small>XP dans ${T(k(`story:${i.id}`))}</small>`:""}</span>`:""}
      </a>`}).join("")}
  </div>`,!0}function ne(n,i){let t=h().find(e=>e.id===i);if(!t||!g(t))return!1;let m=c==="zh"&&E(t.level||"A1"),$=[...new Set(t.lines.map(e=>e.who).filter(Boolean))],I=e=>O[$.indexOf(e)%O.length],Q=e=>e?F.has(e)?"m":U.has(e)?"f":$.indexOf(e)%2?"alt":null:null,f=t.lines.filter(e=>e.q).length,v=0,b=0,L=!1;document.body.classList.add("focus-mode"),n.innerHTML=`
  <section class="story">
    <div class="story-top">
      <button class="btn ghost small" data-quit aria-label="Quitter">\u2715</button>
      <div class="progress"><span class="story-bar"></span></div>
    </div>
    <header class="story-head"><span class="story-big">${t.emoji}</span>
      <h1 class="${c==="zh"?"zh":""}">${a(t.title)}</h1>${t.titlePy?`<p class="py">${a(t.titlePy)}</p>`:""}
      <p class="muted small">${a(t.intro)}</p></header>
    <div class="story-lines" aria-live="polite"></div>
    <div class="story-foot"><button class="btn primary big" data-next>Commencer</button></div>
  </section>`;let w=n.querySelector(".story-lines"),d=n.querySelector("[data-next]"),D=n.querySelector(".story-bar"),G=()=>{document.body.classList.remove("focus-mode"),location.hash="histoires"};n.querySelector("[data-quit]").onclick=G;function X(e){let s=`<p class="sl-t ${c==="zh"?"zh":""}">${A(e.t)}</p>
      ${e.py?`<p class="sl-py ${m?"":"hidden"}">${a(e.py)}</p>`:""}
      <p class="sl-fr hidden">${a(e.fr)}</p>`;return e.who?`<div class="sl talk" tabindex="0" style="--who:${I(e.who)}">
      <span class="sl-who">${a(e.who)}</span>
      <div class="sl-bubble">${s}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`:`<div class="sl narr" tabindex="0"><div class="sl-body">${s}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`}function B(e){let p=document.createElement("div");p.innerHTML=X(e);let s=p.firstElementChild;w.appendChild(s);let o=Q(e.who);s.querySelector("[data-say]").onclick=r=>{r.stopPropagation(),P(e.t,{force:!0,voice:o})},s.onclick=()=>{s.querySelector(".sl-fr").classList.toggle("hidden"),s.querySelector(".sl-py")?.classList.remove("hidden")},P(e.t,{force:!0,voice:o}),s.scrollIntoView({behavior:"smooth",block:"end"})}function N(e){L=!0,d.disabled=!0,d.textContent="Choisissez une r\xE9ponse";let p=e.options.map((o,r)=>r).sort(()=>Math.random()-.5),s=document.createElement("div");s.className="sl-q card",s.innerHTML=`<p class="eyebrow">Question</p><p class="sl-qt">${a(e.q)}</p>
      <div class="options">${p.map(o=>`<button class="option" data-i="${o}"><span>${a(e.options[o])}</span></button>`).join("")}</div>`,w.appendChild(s),s.scrollIntoView({behavior:"smooth",block:"end"}),s.querySelectorAll("[data-i]").forEach(o=>o.onclick=()=>{let r=+o.dataset.i,u=r===e.answer;u&&b++,s.querySelectorAll("[data-i]").forEach(l=>{l.disabled=!0,+l.dataset.i===e.answer?l.classList.add("correct"):l===o&&l.classList.add("wrong")}),s.insertAdjacentHTML("beforeend",`<p class="sl-res ${u?"ok":"ko"}">${u?"\u2713 Bonne r\xE9ponse !":"\u2717 Pas tout \xE0 fait."}</p>`),L=!1,d.disabled=!1,d.textContent="Continuer",d.focus()})}function V(){let e=y.stories?.[t.id],p=!e?.done,s=S({label:`Histoire \xB7 ${t.title}`,score:b,total:f,xpPer:10,key:`story:${t.id}`}),o=0;p&&(o=20,S({label:"",score:1,total:0,xpPer:o})),q(l=>{l.stories={...l.stories||{},[t.id]:{done:!0,best:Math.max(e?.best||0,b),total:f,date:Date.now()}}}),document.body.classList.remove("focus-mode");let r=f?Math.round(b/f*100):100,u=h().find(l=>g(l)&&!y.stories?.[l.id]?.done);n.innerHTML=`
    <section class="results ${r>=60?"ok":"ko"}">
      ${M(r,150,12)}
      <h1>${r===100?"Tout compris ! \u{1F389}":r>=60?"Histoire termin\xE9e !":"Histoire termin\xE9e"}</h1>
      <p class="lead">${b} / ${f} questions de compr\xE9hension</p>
      <div class="result-chips">${s.capped&&!o?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${s.xpGained+o} XP</span>`}${o?'<span class="chip">\u{1F4D6} Nouvelle histoire lue</span>':""}</div>
      <div class="result-actions">
        ${u?`<a class="btn primary big" href="#histoire-${u.id}">Histoire suivante \u2192</a>`:'<a class="btn primary big" href="#histoires">Toutes les histoires</a>'}
        <a class="btn ghost" href="#histoire-${t.id}" data-reload>Relire</a>
      </div>
    </section>`,r===100&&C()}return d.onclick=()=>{if(L)return;if(v>=t.lines.length)return V();let e=t.lines[v++];D.style.width=`${Math.round(v/t.lines.length*100)}%`,e.q?N(e):(B(e),d.textContent=v>=t.lines.length?"Terminer":"Continuer")},!0}export{j as a,ie as b,ae as c,ne as d};
