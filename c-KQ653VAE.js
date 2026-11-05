import{b as G,c as L,d as z,e as Q,f as U}from"./c-EZB5BZO7.js";import{t as W}from"./c-RKNTNIXS.js";import{a as C,e as B,h as M}from"./c-IX7DAQMG.js";import{D as V,G as _,f as d,i as Y,x as t,y as g}from"./c-ZUK6C2ZE.js";import"./c-427Z5ASM.js";var e={query:"",level:"all",mode:"list",deck:[],pos:0,flipped:!1,cardType:A("cardType","hanzi"),study:A("study","srs"),dir:A("cardDir","target"),deckKey:null,done:0},oe=[["hanzi","\u6C49\u5B57 \u2192 pinyin + sens"],["pinyin","Pinyin \u2192 sens"]];function A(i,c){try{return localStorage.getItem("impara."+i)||c}catch{return c}}function Z(i,c){try{localStorage.setItem("impara.cardType",i),localStorage.setItem("impara.study",c)}catch{}}function ve(){e.mode="cards",e.study="srs",e.deckKey=null}function $e(i){let c=Object.values(Y.vocab).sort((s,l)=>l.added-s.added),w=s=>s==="all"?"Tous les paliers":M(s);if(i.innerHTML=`
  <section class="carnet ${e.mode==="cards"?"cards-mode":""}">
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head">
    <p class="eyebrow">Carnet de vocabulaire</p>
    <h1>\u{1F4D2} ${c.length} mot${c.length>1?"s":""} et expressions</h1>
    <p class="muted carnet-sub">Chaque le\xE7on r\xE9ussie enrichit automatiquement votre carnet.</p>
  </header>
  ${c.length?`
  <div class="toolbar carnet-bar">
    <div class="seg" role="group" aria-label="Mode d'affichage">
      <button class="${e.mode==="list"?"on":""}" data-mode="list">Liste</button>
      <button class="${e.mode==="cards"?"on":""}" data-mode="cards">Flashcards</button>
    </div>
    <div class="lvl-drop">
      <button type="button" class="chip-btn lvl-btn" aria-haspopup="menu" aria-expanded="false">${t(w(e.level))} <span aria-hidden="true">\u25BE</span></button>
      <div class="lvl-menu" role="menu" hidden>
        ${["all",...C.map(s=>s.id)].map(s=>`<button type="button" role="menuitemradio" aria-checked="${e.level===s}" class="${e.level===s?"on":""} ${s!=="all"&&!c.some(l=>l.levelId===s)?"empty":""}" data-level="${s}">${t(w(s))}<span class="n">${s==="all"?c.length:c.filter(l=>l.levelId===s).length}</span></button>`).join("")}
      </div>
    </div>
    <input type="search" class="search" placeholder="${t(d.search)}" value="${t(e.query)}" aria-label="Rechercher">
  </div>
  <div class="carnet-body"></div>`:`<div class="empty-state"><span>\u{1F4ED}</span><p>Votre carnet est vide pour l'instant.</p><a class="btn primary" href="#parcours">Commencer une le\xE7on</a></div>`}
  </section>`,!c.length)return;let u=i.querySelector(".carnet-body"),ee=()=>c.filter(s=>(e.level==="all"||s.levelId===e.level)&&(!e.query||(s.zh+" "+(s.py||"")+" "+(s.py||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"")+" "+s.fr).toLowerCase().includes(e.query.toLowerCase())));function p(){let s=ee();e.mode==="list"?u.innerHTML=s.length?`<ul class="word-list">${s.map(l=>`
        <li>${_(l.zh)}
          <span class="it"><span class="${d.wordClass}">${t(l.zh)}</span>${l.py?` <span class="py">${t(l.py)}</span>`:""}</span>
          <span class="fr">${t(l.fr)}</span>
          <span class="tag" style="--lvl:${C.find(k=>k.id===l.levelId)?.color}" title="${t(B(l.lessonId)?.title||"")}">${M(l.levelId)}</span>
        </li>`).join("")}</ul>`:'<p class="empty">Aucun r\xE9sultat.</p>':se(s)}function se(s){let l=s.some(a=>a.py),k=l&&e.cardType==="pinyin",m=k?s.filter(a=>a.py):s,o=e.study==="srs",y=U(m),F=o?G(m):m,x=`${e.study}|${e.cardType}|${e.level}|${e.query}`;(e.deckKey!==x||!o&&e.deck.some(a=>!m.includes(a)))&&(e.deckKey=x,e.deck=o?[...g(F.filter(a=>!L(a))),...g(F.filter(L)).slice(0,20)]:g(m),e.pos=0,e.flipped=!1,e.done=0,e.known=0,e.missed=0);let n=e.deck[e.pos],R=`<div class="seg flash-study" role="group" aria-label="Mode de r\xE9vision">
        <button class="${o?"on":""}" data-study="srs">\u{1F4C5} R\xE9vision du jour${y.todo?` <span class="count-pill">${y.todo}</span>`:""}</button>
        <button class="${o?"":"on"}" data-study="free">\u{1F500} Libre</button></div>`,j=d.label,ae=`<div class="seg card-dir" role="group" aria-label="Sens des cartes">
        <button class="${e.dir!=="fr"?"on":""}" data-dir="target">${t(j)} \u2192 Fran\xE7ais</button>
        <button class="${e.dir==="fr"?"on":""}" data-dir="fr">Fran\xE7ais \u2192 ${t(j)}</button></div>`+(l&&e.dir!=="fr"?`<div class="seg card-type" role="group" aria-label="Type de flashcard">
        ${oe.map(([a,S])=>`<button class="${e.cardType===a?"on":""}" data-type="${a}">${S}</button>`).join("")}</div>`:""),K=`<details class="flash-opts"${e.optsOpen?" open":""}><summary>\u2699\uFE0F Sens des cartes</summary><div class="flash-opts-in">${ae}</div></details>`,D=`<p class="srs-stats small muted">\u{1F195} ${y.fresh} nouveau${y.fresh>1?"x":""} \xB7 \u{1F501} ${y.due} \xE0 revoir \xB7 \u2705 ${y.known} bien connu${y.known>1?"s":""}</p>`;if(!n){let a=!o&&m.length;u.innerHTML=`<div class="flash-wrap">${R}
        <div class="card srs-done"><span class="big-emoji">\u{1F389}</span>
          <h2>${o?"R\xE9vision du jour termin\xE9e !":a?"Paquet termin\xE9 !":"Aucun mot pour ce filtre."}</h2>
          ${o?`<p class="muted">${e.done?`${e.done} carte${e.done>1?"s":""} r\xE9vis\xE9e${e.done>1?"s":""}. `:""}Revenez demain : les mots reviendront au bon moment.</p>
          <button class="btn ghost" data-study="free">\u{1F500} Continuer en mode libre</button>`:""}
          ${a?`<p class="muted">\u2705 ${e.known||0} su${(e.known||0)>1?"s":""} du premier coup \xB7 \u{1F501} ${e.missed||0} revu${(e.missed||0)>1?"s":""}</p>
          <button class="btn primary" data-restart>\u{1F500} Recommencer</button>`:""}
        </div>${K}${o?D:""}</div>`,u.querySelector("[data-restart]")?.addEventListener("click",()=>{e.deckKey=null,p()}),P(m);return}let te=e.dir!=="fr"?k?`<span class="face front"><small>Pinyin</small><b class="big-py">${t(n.py)}</b><em>Touchez pour voir la traduction</em></span>
         <span class="face back"><small>${t(n.py)}</small><b>${t(n.fr)}</b><em class="${d.wordClass}">${t(n.zh)}</em></span>`:`<span class="face front"><small>${t(d.cardFront)}</small><b class="${d.wordClass?d.wordClass+" big-zh":""}">${t(n.zh)}</b><em>${t(d.cardHint)}</em></span>
         <span class="face back"><small>${t(n.py||"Fran\xE7ais")}</small><b>${t(n.fr)}</b><em class="${d.wordClass}">${t(n.zh)}</em></span>`:`<span class="face front"><small>Fran\xE7ais</small><b>${t(String(n.fr).split(" \u2014 ")[0])}</b><em>Comment dit-on en ${t(d.label.toLowerCase())} ?</em></span>
         <span class="face back"><small>${t(d.cardFront)}</small><b class="${d.wordClass?d.wordClass+" big-zh":""}">${t(n.zh)}</b>${n.py?`<em class="big-py small-py">${t(n.py)}</em>`:`<em>${t(n.fr)}</em>`}</span>`,T=Q(n),le=o&&e.flipped?`<div class="grade-row">
          <button class="btn grade again" data-grade="again">\u{1F615} \xC0 revoir<small>${T.again}</small></button>
          <button class="btn grade hard" data-grade="hard">\u{1F914} Difficile<small>${T.hard}</small></button>
          <button class="btn grade good" data-grade="good">\u{1F604} Je savais<small>${T.good}</small></button></div>`:`<div class="swipe-row">
          <button class="btn swipe-btn no" data-grade="again" aria-label="Je ne savais pas">\u2715</button>
          <span class="swipe-hint">\u2190 Je ne sais pas \xB7 Je sais \u2192</span>
          <button class="btn swipe-btn yes" data-grade="good" aria-label="Je savais">\u2713</button></div>`;u.innerHTML=`
      <div class="flash-wrap">
        ${R}
        <p class="flash-count">${o&&L(n)?'<span class="chip new-chip">\u{1F195} Nouveau mot</span>':""}<span>${e.pos+1} / ${e.deck.length}</span></p>
        <div class="flash-stage">
          <button class="flashcard ${e.flipped?"flipped":""}" aria-label="Retourner la carte">${te}
            <span class="swipe-tag yes" aria-hidden="true">Je sais \u2713</span><span class="swipe-tag no" aria-hidden="true">\u2715 \xC0 revoir</span></button>
        </div>
        ${le}
        ${K}
        ${o?D:'<button class="btn ghost small" data-shuffle>\u{1F500} M\xE9langer</button>'}
      </div>`;let r=u.querySelector(".flashcard"),ne=()=>{e.flipped=!e.flipped,r.classList.toggle("flipped",e.flipped),e.flipped&&V(n.zh),o&&setTimeout(p,420)},H=!1,re=a=>{H||(H=!0,o?(z(n,a),a==="good"&&W({label:"Flashcards",score:1,total:0,xpPer:2,key:`flash:${n.zh}`}),e.done++):a==="good"?e.known=(e.known||0)+1:e.missed=(e.missed||0)+1,e.deck.splice(e.pos,1),a==="again"&&e.deck.push(n),e.pos>=e.deck.length&&(e.pos=0),e.flipped=!1,p())},J=a=>{r.classList.add("fly",a==="good"?"fly-r":"fly-l"),setTimeout(()=>re(a),230)},b=null,N=0,f=0,h=!1,E=null,O=()=>{let a=Math.max(-1,Math.min(1,f/110));r.style.setProperty("--yes",Math.max(0,a)),r.style.setProperty("--no",Math.max(0,-a))};r.addEventListener("pointerdown",a=>{b=a.clientX,N=a.clientY,f=0,h=!1,E=a.pointerId}),r.addEventListener("pointermove",a=>{b==null||a.pointerId!==E||(f=a.clientX-b,!h&&Math.abs(f)>8&&Math.abs(f)>Math.abs(a.clientY-N)&&(h=!0,r.setPointerCapture?.(E),r.classList.add("dragging")),h&&(r.style.transform=`translateX(${f}px) rotate(${f/18}deg)`,O()))});let X=()=>{if(b!=null){if(b=null,r.classList.remove("dragging"),h&&Math.abs(f)>90){r.style.transform="",J(f>0?"good":"again");return}r.style.transform="",f=0,O()}};r.addEventListener("pointerup",X),r.addEventListener("pointercancel",X),r.addEventListener("click",a=>{if(h){a.preventDefault(),h=!1;return}ne()}),u.querySelectorAll("[data-grade]").forEach(a=>a.onclick=()=>{let S=a.dataset.grade;if(S==="hard"){z(n,"hard"),e.done++,e.deck.splice(e.pos,1),e.pos>=e.deck.length&&(e.pos=0),e.flipped=!1,p();return}J(S)}),u.querySelector("[data-shuffle]")?.addEventListener("click",()=>{e.deck=g(m),e.pos=0,e.flipped=!1,e.known=e.missed=0,p()}),u.querySelector(".flash-opts")?.addEventListener("toggle",a=>{e.optsOpen=a.target.open}),P(m)}function P(){u.querySelectorAll("[data-study]").forEach(s=>s.onclick=()=>{e.study!==s.dataset.study&&(e.study=s.dataset.study,Z(e.cardType,e.study),e.deckKey=null,p())}),u.querySelectorAll("[data-dir]").forEach(s=>s.onclick=()=>{if(e.dir!==s.dataset.dir){e.dir=s.dataset.dir;try{localStorage.setItem("impara.cardDir",e.dir)}catch{}e.flipped=!1,p()}}),u.querySelectorAll("[data-type]").forEach(s=>s.onclick=()=>{e.cardType!==s.dataset.type&&(e.cardType=s.dataset.type,Z(e.cardType,e.study),e.deckKey=null,p())})}i.querySelector(".search").oninput=s=>{e.query=s.target.value,p()};let v=i.querySelector(".lvl-btn"),$=i.querySelector(".lvl-menu"),q=s=>{$.hidden=!s,v.setAttribute("aria-expanded",String(s))};v.onclick=s=>{s.stopPropagation(),q($.hidden)};let I=s=>{!$.hidden&&!s.target.closest(".lvl-drop")&&q(!1)};document.addEventListener("click",I),i._cleanup=()=>document.removeEventListener("click",I),$.querySelectorAll("[data-level]").forEach(s=>s.onclick=()=>{e.level=s.dataset.level,$.querySelectorAll("[data-level]").forEach(l=>{l.classList.toggle("on",l===s),l.setAttribute("aria-checked",l===s)}),v.innerHTML=`${t(w(e.level))} <span aria-hidden="true">\u25BE</span>`,v.classList.toggle("on",e.level!=="all"),q(!1),p()}),v.classList.toggle("on",e.level!=="all"),i.querySelectorAll("[data-mode]").forEach(s=>s.onclick=()=>{e.mode=s.dataset.mode,e.flipped=!1,i.querySelector(".carnet").classList.toggle("cards-mode",e.mode==="cards"),i.querySelectorAll("[data-mode]").forEach(l=>l.classList.toggle("on",l===s)),p()}),p()}export{ve as openReview,$e as renderCarnet};
