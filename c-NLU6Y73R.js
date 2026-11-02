import{f as c,g as $}from"./c-SXWKU6A4.js";import{G as x,M as y,b,d as f,e as L,h as S,j,k as p}from"./c-NJ7WR4MG.js";import{A as h,d as m,g as v,q as i,u}from"./c-N347SEYN.js";import"./c-427Z5ASM.js";function w(a,n){let s=L(n);if(!s||!x(s))return!1;let e=f(s.levelId),l=b[s.module],o=v.lessons[n],d=e.lessons;return a.innerHTML=`
  <article class="lesson" style="--lvl:${e.color}">
    <a class="back" href="#parcours">\u2190 Parcours</a>
    <header class="lesson-head">
      <div class="lesson-emoji">${s.emoji}</div>
      <div>
        <p class="eyebrow">${S(e)}${e.hsk&&!e.label?` (${e.hsk})`:""} \xB7 ${l.icon} ${l.label} \xB7 Le\xE7on ${s.index+1}/${d.length}</p>
        <h1>${c(e.id,s.title)}</h1>
        <p class="lead">${$(e.id,s.intro)}</p>
        ${o?`<p class="small muted">Meilleur score : ${o.best}/${o.total} ${"\u2605".repeat(y(o))}</p>`:""}
      </div>
    </header>

    <nav class="lesson-steps" aria-label="Sections">
      ${s.sections.map((r,t)=>`<a href="#s${t}" data-scroll="s${t}">${t+1}. ${c(e.id,r.title)}</a>`).join("")}
    </nav>

    ${s.sections.map((r,t)=>N(r,t,e.id)).join("")}

    <aside class="mnemo">
      <span class="mnemo-icon">\u{1F9E0}</span>
      <div><p class="eyebrow">Astuce mn\xE9motechnique</p><p>${$(e.id,s.mnemo)}</p></div>
    </aside>

    <section class="card">
      <h2 class="h3">\u{1F4D2} Mots de la le\xE7on</h2>
      <p class="small muted">Ils rejoindront votre carnet de vocabulaire d\xE8s que vous r\xE9ussirez le quiz.</p>
      <ul class="vocab-grid">
        ${s.vocab.map(h).map(([r,t,P])=>`<li class="${t?"has-py":""}">${u(r)}<span class="it ${m.wordClass}">${i(r)}</span>${t?`<span class="py">${i(t)}</span>`:""}<span class="fr">${i(P)}</span></li>`).join("")}
      </ul>
    </section>

    <div class="lesson-cta">
      <p>${p} questions \xB7 80 % pour valider (${Math.ceil(j*p)}/${p})</p>
      <a class="btn primary big" href="#quiz-${s.id}">Je suis pr\xEAt\xB7e : quiz \u2192</a>
    </div>
  </article>`,!0}function N(a,n,s){return`
  <section class="card lesson-section" id="s${n}">
    <h2 class="h3"><span class="num">${n+1}</span><span>${c(s,a.title)}</span></h2>
    ${a.text?`<p>${$(s,a.text)}</p>`:""}
    ${a.table?_(a.table,s):""}
    ${a.examples?`<ul class="examples">${a.examples.map(h).map(([e,l,o])=>`<li>${u(e)}<div><span class="it ${m.wordClass}">${i(e)}</span>${l?`<span class="py">${i(l)}</span>`:""}<span class="fr">${i(o)}</span></div></li>`).join("")}</ul>`:""}
  </section>`}function _({cols:a,rows:n},s){let e=a.some(l=>l);return`<div class="table-wrap"><table>
    ${e?`<thead><tr>${a.map(l=>`<th>${c(s,l)}</th>`).join("")}</tr></thead>`:""}
    <tbody>${n.map(l=>`<tr>${l.map((o,d)=>`<td class="${d===0&&e?"first":""}">${c(s,o)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`}export{w as renderLecon};
