import{a as X}from"./c-R7ID4HSZ.js";import{a as K,b as Q,d as Y,e as J}from"./c-XWVBNCZ3.js";import{a as O,b as R,c as V,d as W,f as D,g as G,h as F,i as _}from"./c-QYC55I6Q.js";import"./c-W34FKQTP.js";import{c as j,d as f,e as N,i as H,l as M}from"./c-H26J2IE3.js";import"./c-PSLELW2N.js";import{c as T}from"./c-ZHULBLW6.js";import"./c-ER3QAR2D.js";import{a as x,b as A,c as v,d as g,e as q,f as z,g as d,i as p,j as S,k,l as C,m as P,n as L,q as m,s as E,t as I,v as l,w as b}from"./c-YBRFINJL.js";import"./c-427Z5ASM.js";var Z={off:["\u26AA","Mode local"],guest:["\u26AA","Non connect\xE9"],syncing:["\u{1F504}","Synchronisation\u2026"],synced:["\u2705","Synchronis\xE9"],offline:["\u{1F4F4}","Hors ligne : les changements partiront au retour du r\xE9seau"],error:["\u26A0\uFE0F","Probl\xE8me de synchronisation"]},$=(t,n,s)=>`<div class="seg wide" role="group">${n.map(([o,c,i])=>`<button type="button" data-${t}="${o}" class="${String(o)===String(s)?"on":""}">${c}${i?`<small>${i}</small>`:""}</button>`).join("")}</div>`,h=()=>l("R\xE9glage enregistr\xE9 \u2713","ok");function ce(t){let n=d.profile;t.innerHTML=`
  <header class="page-head"><p class="eyebrow">R\xE9glages</p><h1>\u2699\uFE0F R\xE9glages</h1>
    <p class="muted">Chaque modification est enregistr\xE9e imm\xE9diatement.</p></header>
  <div class="settings-grid">
    <div class="settings-col">
      <section class="card set-card" id="set-compte"><h2 class="h3">\u{1F464} Compte</h2><div data-zone="account"></div></section>

      <section class="card set-card"><h2 class="h3">\u{1F30D} Langue apprise</h2>
        <div class="lang-pick">${Object.values(A).map(e=>`<button type="button" class="lang-chip ${e.code===v?"on":""}" data-lang="${e.code}">
          <span class="flag">${x(e.code)}</span>${e.label}</button>`).join("")}</div>
        <p class="small muted">Chaque langue garde sa propre progression ; votre profil est commun.</p>
      </section>

      <section class="card set-card"><h2 class="h3">\u{1F317} Apparence</h2>
        <div class="theme-pick">${[["auto","Automatique","t-auto"],["light","Clair","t-light"],["dark","Sombre","t-dark"]].map(([e,a,r])=>`<button type="button" class="theme-opt ${K()===e?"on":""}" data-theme-opt="${e}"><i class="${r}"></i>${a}</button>`).join("")}</div>
        <p class="small muted">\xAB Automatique \xBB suit le r\xE9glage clair / sombre de votre t\xE9l\xE9phone ou ordinateur.</p>
        <label class="switch"><input type="checkbox" data-lang-theme ${Y()?"checked":""}><span></span> \u{1F3A8} Th\xE8me de la langue (vert\u2011blanc\u2011rouge pour l'italien, rouge et or pour le mandarin)</label>
        <p class="small muted">D\xE9sactiv\xE9 par d\xE9faut : l'application garde l'apparence classique, identique pour les deux langues. Activez\u2011le pour changer d'univers avec la langue.</p>
      </section>

      <section class="card set-card"><h2 class="h3">\u{1F3AF} Objectif quotidien</h2>
        ${$("goal",X.map(([e,a])=>[e,a,`${e} XP/jour`]),n.dailyGoal)}
      </section>

      <section class="card set-card"><h2 class="h3">\u{1F50A} Son et prononciation</h2>
        <label class="switch"><input type="checkbox" data-tts ${d.settings.tts?"checked":""}><span></span> ${g.tts}</label>
        <p class="set-label">Vitesse de la voix</p>
        ${$("voice",E,d.settings.voiceSpeed||1)}
        <p class="small muted">Touchez une vitesse pour l'\xE9couter. Le bouton \u{1F422} \xE0 c\xF4t\xE9 de chaque \u{1F50A} lit encore plus lentement.</p>
        <label class="switch"><input type="checkbox" data-sfx ${d.settings.sfx!==!1?"checked":""}><span></span> \u{1F3B5} Effets sonores (bonne r\xE9ponse, erreur, victoire)</label>
        <label class="switch"><input type="checkbox" data-haptics ${d.settings.haptics!==!1?"checked":""}><span></span> \u{1F4F3} Vibrations (Android)</label>
      </section>

      ${v==="zh"?`<section class="card set-card"><h2 class="h3">\u{1F004} Pinyin dans les quiz</h2>
        ${$("pyq",T,d.settings.pinyinQuiz||"auto")}
        <p class="small muted">Le pinyin s'affiche au-dessus des caract\xE8res dans les le\xE7ons et les quiz. Par d\xE9faut : HSK 1 et HSK 2.</p>
      </section>`:""}
    </div>

    <div class="settings-col">
      <section class="card set-card"><h2 class="h3">\u{1F4F2} Application et notifications</h2><div data-zone="app"><p class="small muted">\u2026</p></div></section>

      <section class="card set-card"><h2 class="h3">\u{1F4BE} Sauvegarde</h2>
        <p class="small muted">${C()?"Votre progression est enregistr\xE9e automatiquement dans ce navigateur"+(f().user?" et en ligne.":"."):"\u26A0\uFE0F Le stockage local est indisponible ici : la progression sera perdue en fermant la page. Exportez-la pour la conserver."}
          Vous pouvez aussi en garder une copie ou la transf\xE9rer \xE0 la main.</p>
        <div class="btn-row">
          <button class="btn ghost small" data-export>\u{1F4CB} Copier ma sauvegarde</button>
          <label class="btn ghost small file-btn">\u{1F4C2} Importer un fichier<input type="file" accept=".json,application/json" hidden></label>
        </div>
        <details class="paste"><summary>Coller une sauvegarde</summary>
          <textarea rows="4" placeholder='{"version":1, \u2026}'></textarea>
          <button class="btn ghost small" data-import-text>Importer le texte</button></details>
      </section>

      <section class="card set-card danger-zone"><h2 class="h3">\u26A0\uFE0F Zone sensible</h2>
        <p class="small muted">Efface la progression en ${m(g.label.toLowerCase())} : le\xE7ons, carnet et cahier d'erreurs.</p>
        <button class="btn danger small" data-reset>R\xE9initialiser ma progression</button>
      </section>

      <section class="card set-card"><h2 class="h3">\u2139\uFE0F \xC0 propos</h2>
        <p class="small muted">Impara \xB7 italien &amp; mandarin. Code source : <a href="sources-impara.zip">sources-impara.zip</a>.</p>
      </section>
    </div>
  </div>`;let s=e=>t.querySelector(e);B(t),y(t);let o=N(()=>B(t)),c=O(()=>y(t));t._cleanup=()=>{o(),c()};let i=(e,a)=>t.querySelectorAll(`[data-${e}]`).forEach(r=>r.onclick=()=>{t.querySelectorAll(`[data-${e}]`).forEach(w=>w.classList.toggle("on",w===r)),a(r.dataset[e]),h()});t.querySelectorAll("[data-theme-opt]").forEach(e=>e.onclick=()=>{t.querySelectorAll("[data-theme-opt]").forEach(a=>a.classList.toggle("on",a===e)),Q(e.dataset.themeOpt),h()}),i("goal",e=>p(a=>{a.profile={...a.profile,dailyGoal:+e}})),i("voice",e=>{p(a=>{a.settings.voiceSpeed=+e}),I(g.hello,{force:!0})}),i("pyq",e=>p(a=>{a.settings.pinyinQuiz=e})),s("[data-lang-theme]").onchange=e=>{J(e.target.checked),h()},s("[data-sfx]").onchange=e=>{p(a=>{a.settings.sfx=e.target.checked}),e.target.checked&&P("good"),h()},s("[data-haptics]").onchange=e=>{p(a=>{a.settings.haptics=e.target.checked}),e.target.checked&&L(40),h()},s("[data-tts]").onchange=e=>{p(a=>{a.settings.tts=e.target.checked}),h()},t.querySelectorAll("[data-lang]").forEach(e=>e.onclick=()=>{e.dataset.lang!==v&&q(e.dataset.lang)}),s("[data-export]").onclick=async()=>{try{await navigator.clipboard.writeText(k()),l("Sauvegarde copi\xE9e dans le presse-papiers \u2713","ok")}catch{b({title:"Votre sauvegarde",body:`<p class="small muted">Copiez ce texte manuellement :</p><textarea class="export-box" rows="8" readonly>${m(k())}</textarea>`}),setTimeout(()=>document.querySelector(".export-box")?.select(),50)}};let u=e=>{try{let a=JSON.parse(e);if(!a||typeof a!="object"||!("lessons"in a))throw new Error;S(a),l("Sauvegarde import\xE9e \u2713","ok"),location.hash="tableau"}catch{l("Fichier de sauvegarde invalide","error")}};s("input[type=file]").onchange=e=>{let a=e.target.files[0];if(!a)return;let r=new FileReader;r.onload=()=>u(r.result),r.readAsText(a)},s("[data-import-text]").onclick=()=>u(s(".paste textarea").value),s("[data-reset]").onclick=async()=>{await b({title:"Tout r\xE9initialiser ?",body:`<p>Votre progression en ${m(g.label.toLowerCase())}, votre carnet et votre cahier d'erreurs seront effac\xE9s. Cette action est irr\xE9versible.</p>`,actions:[{label:"Annuler",value:"no",kind:"ghost"},{label:"Oui, tout effacer",value:"yes",kind:"danger"}]})==="yes"&&(S(z()),location.hash="parcours",window.dispatchEvent(new HashChangeEvent("hashchange")))}}function B(t){let n=t.querySelector('[data-zone="account"]');if(!n)return;let s=d.profile,o=f(),c=`<div class="acc-row"><span class="acc-avatar">${m(s.avatar)}</span>
      <div><b>${m(s.pseudo)}</b><p class="muted small">${o.user?m(o.user.email):"Pas de compte en ligne"}</p></div>
      <a class="btn ghost small acc-edit" href="#profil">Modifier</a></div>`;if(!j()){n.innerHTML=c+'<p class="small muted">Mode local : la progression reste dans ce navigateur.</p>';return}if(!o.user){n.innerHTML=c+`<p class="small muted">Cr\xE9ez un compte gratuit pour retrouver votre progression sur tous vos appareils et ajouter des amis.</p>
      <a class="btn primary" href="#compte">\u2601\uFE0F Se connecter / cr\xE9er un compte</a>`;return}let[i,u]=Z[o.status]||Z.synced;n.innerHTML=c+`
    <div class="sync-box sync-${o.status}"><span class="sync-icon">${i}</span>
      <div><b>${u}</b><p class="small muted">${o.lastSync?`Derni\xE8re synchronisation : ${new Date(o.lastSync).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`:""}${o.message?` \xB7 ${m(o.message)}`:""}</p></div></div>
    <div class="btn-row">
      <button class="btn ghost small" data-sync>\u{1F504} Synchroniser</button>
      <a class="btn ghost small" href="#amis">\u{1F465} Mes amis</a>
      <button class="btn ghost small danger-txt" data-logout>Se d\xE9connecter</button>
    </div>`,n.querySelector("[data-sync]").onclick=async()=>{await M();let e=f().status==="synced";l(e?"Synchronis\xE9 \u2713":f().message,e?"ok":"warn")},n.querySelector("[data-logout]").onclick=async()=>{await b({title:"Se d\xE9connecter ?",body:"<p>Votre progression est sauvegard\xE9e en ligne. Elle sera retir\xE9e de cet appareil et vous la retrouverez en vous reconnectant.</p>",actions:[{label:"Annuler",value:"no"},{label:"Se d\xE9connecter",value:"yes",kind:"danger"}]})==="yes"&&(await H(),l("D\xE9connect\xE9","ok"),location.hash="parcours",window.dispatchEvent(new HashChangeEvent("hashchange")))}}async function y(t){let n=t.querySelector('[data-zone="app"]');if(!n)return;let s;R()?s=`<p class="small hint-ok">\u2713 Vous utilisez l'application install\xE9e.</p>`:W()?s=`<p class="small muted">Ajoutez Impara \xE0 votre \xE9cran d'accueil : plein \xE9cran, acc\xE8s direct, et les le\xE7ons marchent m\xEAme sans r\xE9seau.</p>
      <button class="btn primary small" data-install>\u{1F4F2} Installer l'application</button>`:V()?s=`<p class="small muted">Sur iPhone : ouvrez ce site dans <b>Safari</b>, touchez <b>Partager</b> puis <b>\xAB Sur l'\xE9cran d'accueil \xBB</b>.</p>`:s=`<p class="small muted">Pour installer l'application : menu du navigateur (\u22EE) \u2192 <b>\xAB Installer l'application \xBB</b> ou <b>\xAB Ajouter \xE0 l'\xE9cran d'accueil \xBB</b>.</p>`;let o=await G(),c={unsupported:'<p class="small muted">\u{1F515} Les notifications ne sont pas disponibles sur ce navigateur.</p>',"needs-install":`<p class="small muted">\u{1F514} Sur iPhone, installez d'abord l'application, puis activez les notifications depuis l'application.</p>`,"needs-login":'<p class="small muted">\u{1F514} Connectez-vous pour \xEAtre pr\xE9venu quand un ami vous \xE9crit ou vous d\xE9fie.</p>',denied:'<p class="small muted">\u{1F515} Notifications bloqu\xE9es : autorisez-les dans les r\xE9glages du navigateur pour ce site.</p>',on:`<p class="small hint-ok">\u{1F514} Notifications activ\xE9es sur cet appareil.</p>
      <label class="switch"><input type="checkbox" data-remind ${d.settings.streakReminder!==!1?"checked":""}><span></span> \u{1F525} Rappel de s\xE9rie \xE0 20 h si je n'ai rien fait de la journ\xE9e</label>
      <button class="btn ghost small" data-push-off>D\xE9sactiver</button>`,off:`<p class="small muted">\u{1F514} Soyez pr\xE9venu quand un ami vous \xE9crit, vous ajoute ou vous lance un d\xE9fi, m\xEAme site ferm\xE9.</p>
      <button class="btn primary small" data-push-on>\u{1F514} Activer les notifications</button>`}[o];n.innerHTML=s+`<div class="push-zone">${c}</div>`,n.querySelector("[data-install]")?.addEventListener("click",async()=>{await D()&&l("Application install\xE9e \u2713","ok")}),n.querySelector("[data-push-on]")?.addEventListener("click",async i=>{i.target.disabled=!0,i.target.textContent="Activation\u2026";try{await F(),l("Notifications activ\xE9es \u{1F514}","ok")}catch(u){l(u.message,"warn")}y(t)}),n.querySelector("[data-remind]")?.addEventListener("change",i=>{p(u=>{u.settings.streakReminder=i.target.checked}),h()}),n.querySelector("[data-push-off]")?.addEventListener("click",async()=>{await _(),l("Notifications d\xE9sactiv\xE9es"),y(t)})}export{ce as renderReglages};
