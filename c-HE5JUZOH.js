import{c as E}from"./c-3RRE5L7W.js";import{e as x,h as H,w,x as z,y as L,z as M}from"./c-WJ46EBJP.js";import{c,g as y,i as S,q as a,t as P,x as C,y as T}from"./c-N7WZHT4Z.js";var R={it:()=>import("./c-J2R7TUHB.js"),zh:()=>import("./c-7JGJKJGR.js")},j={[c]:(await(R[c]||R.it)()).default};var h=()=>j[c]||[],v=r=>M(r.after),A=["#3b82c4","#c2410c","#7c3aed","#0f766e","#be185d"],Z=()=>({total:h().length,open:h().filter(v).length,done:h().filter(r=>y.stories?.[r.id]?.done).length});function ee(r){return r.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">Lire et \xE9couter</p><h1>\u{1F4D6} Histoires</h1>
    <p class="muted">De courts dialogues avec les mots de vos le\xE7ons. Touchez une phrase pour voir sa traduction.</p></header>
  <div class="story-list">
    ${h().map(o=>{let t=v(o),m=y.stories?.[o.id],g=x(o.after);return`<a class="story-item ${t?"":"locked"}" ${t?`href="#histoire-${o.id}"`:'aria-disabled="true"'}>
        <span class="story-emoji">${t?o.emoji:"\u{1F512}"}</span>
        <span class="story-txt"><b class="${c==="zh"?"zh":""}">${a(o.title)} <em class="story-lvl">${a(H(o.level||"A1"))}</em></b>
          ${o.titlePy?`<small class="py">${a(o.titlePy)}</small>`:""}
          <small>${t?a(o.intro):`Se d\xE9bloque apr\xE8s la le\xE7on \xAB ${a(g?.title||o.after)} \xBB`}</small></span>
        ${m?.done?`<span class="story-done" title="Termin\xE9e">${m.best}/${m.total} \u2713${w(`story:${o.id}`)?`<small>XP dans ${z(w(`story:${o.id}`))}</small>`:""}</span>`:""}
      </a>`}).join("")}
  </div>`,!0}function te(r,o){let t=h().find(e=>e.id===o);if(!t||!v(t))return!1;let m=c==="zh"&&E(t.level||"A1"),g=[...new Set(t.lines.map(e=>e.who).filter(Boolean))],O=e=>A[g.indexOf(e)%A.length],f=t.lines.filter(e=>e.q).length,$=0,b=0,k=!1;document.body.classList.add("focus-mode"),r.innerHTML=`
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
  </section>`;let q=r.querySelector(".story-lines"),d=r.querySelector("[data-next]"),I=r.querySelector(".story-bar"),Q=()=>{document.body.classList.remove("focus-mode"),location.hash="histoires"};r.querySelector("[data-quit]").onclick=Q;function D(e){let s=`<p class="sl-t ${c==="zh"?"zh":""}">${a(e.t)}</p>
      ${e.py?`<p class="sl-py ${m?"":"hidden"}">${a(e.py)}</p>`:""}
      <p class="sl-fr hidden">${a(e.fr)}</p>`;return e.who?`<div class="sl talk" tabindex="0" style="--who:${O(e.who)}">
      <span class="sl-who">${a(e.who)}</span>
      <div class="sl-bubble">${s}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`:`<div class="sl narr" tabindex="0">${s}<button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`}function X(e){let p=document.createElement("div");p.innerHTML=D(e);let s=p.firstElementChild;q.appendChild(s),s.querySelector("[data-say]").onclick=i=>{i.stopPropagation(),P(e.t,{force:!0})},s.onclick=()=>{s.querySelector(".sl-fr").classList.toggle("hidden"),s.querySelector(".sl-py")?.classList.remove("hidden")},P(e.t,{force:!0}),s.scrollIntoView({behavior:"smooth",block:"end"})}function B(e){k=!0,d.disabled=!0,d.textContent="Choisissez une r\xE9ponse";let p=e.options.map((i,l)=>l).sort(()=>Math.random()-.5),s=document.createElement("div");s.className="sl-q card",s.innerHTML=`<p class="eyebrow">Question</p><p class="sl-qt">${a(e.q)}</p>
      <div class="options">${p.map(i=>`<button class="option" data-i="${i}"><span>${a(e.options[i])}</span></button>`).join("")}</div>`,q.appendChild(s),s.scrollIntoView({behavior:"smooth",block:"end"}),s.querySelectorAll("[data-i]").forEach(i=>i.onclick=()=>{let l=+i.dataset.i,u=l===e.answer;u&&b++,s.querySelectorAll("[data-i]").forEach(n=>{n.disabled=!0,+n.dataset.i===e.answer?n.classList.add("correct"):n===i&&n.classList.add("wrong")}),s.insertAdjacentHTML("beforeend",`<p class="sl-res ${u?"ok":"ko"}">${u?"\u2713 Bonne r\xE9ponse !":"\u2717 Pas tout \xE0 fait."}</p>`),k=!1,d.disabled=!1,d.textContent="Continuer",d.focus()})}function N(){let e=y.stories?.[t.id],p=!e?.done,s=L({label:`Histoire \xB7 ${t.title}`,score:b,total:f,xpPer:10,key:`story:${t.id}`}),i=0;p&&(i=20,L({label:"",score:1,total:0,xpPer:i})),S(n=>{n.stories={...n.stories||{},[t.id]:{done:!0,best:Math.max(e?.best||0,b),total:f,date:Date.now()}}}),document.body.classList.remove("focus-mode");let l=f?Math.round(b/f*100):100,u=h().find(n=>v(n)&&!y.stories?.[n.id]?.done);r.innerHTML=`
    <section class="results ${l>=60?"ok":"ko"}">
      ${T(l,150,12)}
      <h1>${l===100?"Tout compris ! \u{1F389}":l>=60?"Histoire termin\xE9e !":"Histoire termin\xE9e"}</h1>
      <p class="lead">${b} / ${f} questions de compr\xE9hension</p>
      <div class="result-chips">${s.capped&&!i?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${s.xpGained+i} XP</span>`}${i?'<span class="chip">\u{1F4D6} Nouvelle histoire lue</span>':""}</div>
      <div class="result-actions">
        ${u?`<a class="btn primary big" href="#histoire-${u.id}">Histoire suivante \u2192</a>`:'<a class="btn primary big" href="#histoires">Toutes les histoires</a>'}
        <a class="btn ghost" href="#histoire-${t.id}" data-reload>Relire</a>
      </div>
    </section>`,l===100&&C()}return d.onclick=()=>{if(k)return;if($>=t.lines.length)return N();let e=t.lines[$++];I.style.width=`${Math.round($/t.lines.length*100)}%`,e.q?B(e):(X(e),d.textContent=$>=t.lines.length?"Terminer":"Continuer")},!0}export{j as a,Z as b,ee as c,te as d};
