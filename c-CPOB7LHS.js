import{b as j,c as $,d as K,e as D,f as b}from"./c-43DIWKMS.js";import{p as M}from"./c-3C7RAWMW.js";import{a as g,e as P,h as S}from"./c-IWSO52KR.js";import{d as o,g as F,q as s,r as m,t as R,u as I}from"./c-N7WZHT4Z.js";import"./c-427Z5ASM.js";var e={query:"",level:"all",mode:"list",deck:[],pos:0,flipped:!1,cardType:k("cardType","hanzi"),study:k("study","srs"),dir:k("cardDir","target"),deckKey:null,done:0},J=[["hanzi","\u6C49\u5B57 \u2192 pinyin + sens"],["pinyin","Pinyin \u2192 sens"]];function k(n,d){try{return localStorage.getItem("impara."+n)||d}catch{return d}}function H(n,d){try{localStorage.setItem("impara.cardType",n),localStorage.setItem("impara.study",d)}catch{}}function ee(){e.mode="cards",e.study="srs",e.deckKey=null}function ae(n){let d=Object.values(F.vocab).sort((a,l)=>l.added-a.added);if(n.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head">
    <p class="eyebrow">Carnet de vocabulaire</p>
    <h1>\u{1F4D2} ${d.length} mot${d.length>1?"s":""} et expressions</h1>
    <p class="muted">Chaque le\xE7on r\xE9ussie enrichit automatiquement votre carnet.</p>
    <div class="btn-row head-actions">
      ${d.length?`<button class="btn primary small" data-go-srs>\u{1F4C5} R\xE9viser${b(d).todo?` (${b(d).todo})`:""}</button>`:""}
    </div>
  </header>
  ${d.length?`
  <div class="toolbar">
    <input type="search" class="search" placeholder="${s(o.search)}" value="${s(e.query)}" aria-label="Rechercher">
    <div class="chips" role="group" aria-label="Filtrer par palier">
      ${["all",...g.map(a=>a.id)].map(a=>`<button class="chip-btn ${e.level===a?"on":""}" data-level="${a}">${a==="all"?"Tous":S(a)}</button>`).join("")}
    </div>
    <div class="seg" role="group" aria-label="Mode d'affichage">
      <button class="${e.mode==="list"?"on":""}" data-mode="list">Liste</button>
      <button class="${e.mode==="cards"?"on":""}" data-mode="cards">Flashcards</button>
    </div>
  </div>
  <div class="carnet-body"></div>`:`<div class="empty-state"><span>\u{1F4ED}</span><p>Votre carnet est vide pour l'instant.</p><a class="btn primary" href="#parcours">Commencer une le\xE7on</a></div>`}`,!d.length)return;let c=n.querySelector(".carnet-body"),N=()=>d.filter(a=>(e.level==="all"||a.levelId===e.level)&&(!e.query||(a.zh+" "+(a.py||"")+" "+(a.py||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"")+" "+a.fr).toLowerCase().includes(e.query.toLowerCase())));function i(){let a=N();e.mode==="list"?c.innerHTML=a.length?`<ul class="word-list">${a.map(l=>`
        <li>${I(l.zh)}
          <span class="it"><span class="${o.wordClass}">${s(l.zh)}</span>${l.py?` <span class="py">${s(l.py)}</span>`:""}</span>
          <span class="fr">${s(l.fr)}</span>
          <span class="tag" style="--lvl:${g.find(h=>h.id===l.levelId)?.color}" title="${s(P(l.lessonId)?.title||"")}">${S(l.levelId)}</span>
        </li>`).join("")}</ul>`:'<p class="empty">Aucun r\xE9sultat.</p>':x(a)}function x(a){let l=a.some(r=>r.py),h=l&&e.cardType==="pinyin",u=h?a.filter(r=>r.py):a,p=e.study==="srs",f=b(u),L=p?j(u):u,w=`${e.study}|${e.cardType}|${e.level}|${e.query}`;(e.deckKey!==w||!p&&e.deck.some(r=>!u.includes(r)))&&(e.deckKey=w,e.deck=p?[...m(L.filter(r=>!$(r))),...m(L.filter($)).slice(0,20)]:m(u),e.pos=0,e.flipped=!1,e.done=0);let t=e.deck[e.pos],C=`<div class="seg" role="group" aria-label="Mode de r\xE9vision">
        <button class="${p?"on":""}" data-study="srs">\u{1F4C5} R\xE9vision du jour${f.todo?` <span class="count-pill">${f.todo}</span>`:""}</button>
        <button class="${p?"":"on"}" data-study="free">\u{1F500} Libre</button></div>`,T=o.label,E=`<div class="seg card-dir" role="group" aria-label="Sens des cartes">
        <button class="${e.dir!=="fr"?"on":""}" data-dir="target">${s(T)} \u2192 Fran\xE7ais</button>
        <button class="${e.dir==="fr"?"on":""}" data-dir="fr">Fran\xE7ais \u2192 ${s(T)}</button></div>`+(l&&e.dir!=="fr"?`<div class="seg card-type" role="group" aria-label="Type de flashcard">
        ${J.map(([r,y])=>`<button class="${e.cardType===r?"on":""}" data-type="${r}">${y}</button>`).join("")}</div>`:""),z=`<p class="srs-stats small muted">\u{1F195} ${f.fresh} nouveau${f.fresh>1?"x":""} \xB7 \u{1F501} ${f.due} \xE0 revoir \xB7 \u2705 ${f.known} bien connu${f.known>1?"s":""}</p>`;if(!t){c.innerHTML=`<div class="flash-wrap">${C}${E}
        <div class="card srs-done"><span class="big-emoji">\u{1F389}</span>
          <h2>${p?"R\xE9vision du jour termin\xE9e !":"Aucun mot pour ce filtre."}</h2>
          ${p?`<p class="muted">${e.done?`${e.done} carte${e.done>1?"s":""} r\xE9vis\xE9e${e.done>1?"s":""}. `:""}Revenez demain : les mots reviendront au bon moment.</p>
          <button class="btn ghost" data-study="free">\u{1F500} Continuer en mode libre</button>`:""}
        </div>${z}</div>`,q(u);return}let B=e.dir!=="fr"?h?`<span class="face front"><small>Pinyin</small><b class="big-py">${s(t.py)}</b><em>Touchez pour voir la traduction</em></span>
         <span class="face back"><small>${s(t.py)}</small><b>${s(t.fr)}</b><em class="${o.wordClass}">${s(t.zh)}</em></span>`:`<span class="face front"><small>${s(o.cardFront)}</small><b class="${o.wordClass?o.wordClass+" big-zh":""}">${s(t.zh)}</b><em>${s(o.cardHint)}</em></span>
         <span class="face back"><small>${s(t.py||"Fran\xE7ais")}</small><b>${s(t.fr)}</b><em class="${o.wordClass}">${s(t.zh)}</em></span>`:`<span class="face front"><small>Fran\xE7ais</small><b>${s(String(t.fr).split(" \u2014 ")[0])}</b><em>Comment dit-on en ${s(o.label.toLowerCase())} ?</em></span>
         <span class="face back"><small>${s(o.cardFront)}</small><b class="${o.wordClass?o.wordClass+" big-zh":""}">${s(t.zh)}</b>${t.py?`<em class="big-py small-py">${s(t.py)}</em>`:`<em>${s(t.fr)}</em>`}</span>`,v=D(t),V=p?e.flipped?`<div class="grade-row">
            <button class="btn grade again" data-grade="again">\u{1F615} \xC0 revoir<small>${v.again}</small></button>
            <button class="btn grade hard" data-grade="hard">\u{1F914} Difficile<small>${v.hard}</small></button>
            <button class="btn grade good" data-grade="good">\u{1F604} Je savais<small>${v.good}</small></button></div>`:`<div class="flash-nav"><button class="btn primary" data-flip>Retourner la carte</button><span>${e.pos+1} / ${e.deck.length}</span></div>`:`<div class="flash-nav">
          <button class="btn ghost" data-nav="-1">\u2190 Pr\xE9c\xE9dent</button>
          <span>${e.pos+1} / ${e.deck.length}</span>
          <button class="btn ghost" data-nav="1">Suivant \u2192</button></div>
        <button class="btn ghost small" data-shuffle>\u{1F500} M\xE9langer</button>`;c.innerHTML=`
      <div class="flash-wrap">
        ${C}${E}
        ${p&&$(t)?'<span class="chip new-chip">\u{1F195} Nouveau mot</span>':""}
        <button class="flashcard ${e.flipped?"flipped":""}" aria-label="Retourner la carte">${B}</button>
        ${V}
        ${p?z:""}
      </div>`;let A=()=>{e.flipped=!e.flipped,p?i():c.querySelector(".flashcard").classList.toggle("flipped"),e.flipped&&R(t.zh)};c.querySelector(".flashcard").addEventListener("click",A),c.querySelector("[data-flip]")?.addEventListener("click",A),c.querySelectorAll("[data-nav]").forEach(r=>r.onclick=()=>{e.pos=(e.pos+ +r.dataset.nav+e.deck.length)%e.deck.length,e.flipped=!1,i()}),c.querySelector("[data-shuffle]")?.addEventListener("click",()=>{e.deck=m(u),e.pos=0,e.flipped=!1,i()}),c.querySelectorAll("[data-grade]").forEach(r=>r.onclick=()=>{let y=r.dataset.grade;K(t,y),y==="good"&&M({label:"Flashcards",score:1,total:0,xpPer:2,key:`flash:${t.zh}`}),e.done++,e.deck.splice(e.pos,1),y==="again"&&e.deck.push(t),e.pos>=e.deck.length&&(e.pos=0),e.flipped=!1,i()}),q(u)}function q(){c.querySelectorAll("[data-study]").forEach(a=>a.onclick=()=>{e.study!==a.dataset.study&&(e.study=a.dataset.study,H(e.cardType,e.study),e.deckKey=null,i())}),c.querySelectorAll("[data-dir]").forEach(a=>a.onclick=()=>{if(e.dir!==a.dataset.dir){e.dir=a.dataset.dir;try{localStorage.setItem("impara.cardDir",e.dir)}catch{}e.flipped=!1,i()}}),c.querySelectorAll("[data-type]").forEach(a=>a.onclick=()=>{e.cardType!==a.dataset.type&&(e.cardType=a.dataset.type,H(e.cardType,e.study),e.deckKey=null,i())})}n.querySelector("[data-go-srs]")?.addEventListener("click",()=>{e.mode="cards",e.study="srs",e.deckKey=null,n.querySelectorAll("[data-mode]").forEach(a=>a.classList.toggle("on",a.dataset.mode==="cards")),i()}),n.querySelector(".search").oninput=a=>{e.query=a.target.value,i()},n.querySelectorAll("[data-level]").forEach(a=>a.onclick=()=>{e.level=a.dataset.level,n.querySelectorAll("[data-level]").forEach(l=>l.classList.toggle("on",l===a)),i()}),n.querySelectorAll("[data-mode]").forEach(a=>a.onclick=()=>{e.mode=a.dataset.mode,e.flipped=!1,n.querySelectorAll("[data-mode]").forEach(l=>l.classList.toggle("on",l===a)),i()}),i()}export{ee as openReview,ae as renderCarnet};
