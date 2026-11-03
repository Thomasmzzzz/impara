import{a as oe}from"./c-FSSO7Z6S.js";import{a as ee,b as ae,d as te,e as se}from"./c-XWVBNCZ3.js";import{a as K,b as Q,c as Y,d as Z,f as J,g as U,h as X,i as B}from"./c-5SZGJMIQ.js";import"./c-V6434XPK.js";import{c as G,d as y,e as W,i as _,l as F}from"./c-3KOBPBCX.js";import"./c-QRQMI74J.js";import{c as D}from"./c-LH2EX5YE.js";import"./c-665AATCN.js";import{C as d,D as $,a as q,b as C,c as u,d as h,e as P,f as L,g as p,i as g,j as k,k as x,l as E,m as V,n as I,o as T,p as M,s as r,u as j,v as N,w as R,x as H,y as O,z as b}from"./c-JEHZV3F6.js";import"./c-427Z5ASM.js";var ne={off:["\u26AA","Mode local"],guest:["\u26AA","Non connect\xE9"],syncing:["\u{1F504}","Synchronisation\u2026"],synced:["\u2705","Synchronis\xE9"],offline:["\u{1F4F4}","Hors ligne : les changements partiront au retour du r\xE9seau"],error:["\u26A0\uFE0F","Probl\xE8me de synchronisation"]},z=(a,o,t)=>`<div class="seg wide" role="group">${o.map(([n,c,l])=>`<button type="button" data-${a}="${n}" class="${String(n)===String(t)?"on":""}">${c}${l?`<small>${l}</small>`:""}</button>`).join("")}</div>`,v=()=>d("R\xE9glage enregistr\xE9 \u2713","ok");function $e(a){let o=p.profile;a.innerHTML=`
  <header class="page-head"><p class="eyebrow">R\xE9glages</p><h1>\u2699\uFE0F R\xE9glages</h1>
    <p class="muted">Chaque modification est enregistr\xE9e imm\xE9diatement.</p></header>
  <div class="settings-grid">
    <div class="settings-col">
      <section class="card set-card" id="set-compte"><h2 class="h3">\u{1F464} Compte</h2><div data-zone="account"></div></section>

      <section class="card set-card"><h2 class="h3">\u{1F30D} Langue apprise</h2>
        <div class="lang-pick">${Object.values(C).map(e=>`<button type="button" class="lang-chip ${e.code===u?"on":""}" data-lang="${e.code}">
          <span class="flag">${q(e.code)}</span>${e.label}</button>`).join("")}</div>
        <p class="small muted">Chaque langue garde sa propre progression ; votre profil est commun.</p>
      </section>

      <section class="card set-card"><h2 class="h3">\u{1F317} Apparence</h2>
        <div class="theme-pick">${[["auto","Automatique","t-auto"],["light","Clair","t-light"],["dark","Sombre","t-dark"]].map(([e,s,m])=>`<button type="button" class="theme-opt ${ee()===e?"on":""}" data-theme-opt="${e}"><i class="${m}"></i>${s}</button>`).join("")}</div>
        <p class="small muted">\xAB Automatique \xBB suit le r\xE9glage clair / sombre de votre t\xE9l\xE9phone ou ordinateur.</p>
        <label class="switch"><input type="checkbox" data-lang-theme ${te()?"checked":""}><span></span> \u{1F3A8} Th\xE8me de la langue (vert\u2011blanc\u2011rouge pour l'italien, rouge et or pour le mandarin)</label>
        <p class="small muted">D\xE9sactiv\xE9 par d\xE9faut : l'application garde l'apparence classique, identique pour les deux langues. Activez\u2011le pour changer d'univers avec la langue.</p>
      </section>

      <section class="card set-card"><h2 class="h3">\u{1F3AF} Objectif quotidien</h2>
        ${z("goal",oe.map(([e,s])=>[e,s,`${e} XP/jour`]),o.dailyGoal)}
      </section>

      <section class="card set-card"><h2 class="h3">\u{1F50A} Son et prononciation</h2>
        <label class="switch"><input type="checkbox" data-tts ${p.settings.tts?"checked":""}><span></span> ${h.tts}</label>
        <p class="set-label">Vitesse de la voix</p>
        ${z("voice",O,p.settings.voiceSpeed||1)}
        <p class="small muted">Touchez une vitesse pour l'\xE9couter. Le bouton \u{1F422} \xE0 c\xF4t\xE9 de chaque \u{1F50A} lit encore plus lentement.</p>
        <div data-zone="recorded"></div>
        <p class="set-label">Voix de l'appareil</p>
        <div data-zone="voices"></div>
        <label class="switch"><input type="checkbox" data-sfx ${p.settings.sfx!==!1?"checked":""}><span></span> \u{1F3B5} Effets sonores (bonne r\xE9ponse, erreur, victoire)</label>
        <label class="switch"><input type="checkbox" data-haptics ${p.settings.haptics!==!1?"checked":""}><span></span> \u{1F4F3} Vibrations (Android)</label>
      </section>

      ${u==="zh"?`<section class="card set-card"><h2 class="h3">\u{1F004} Pinyin dans les quiz</h2>
        ${z("pyq",D,p.settings.pinyinQuiz||"auto")}
        <p class="small muted">Le pinyin s'affiche au-dessus des caract\xE8res dans les le\xE7ons et les quiz. Par d\xE9faut : HSK 1 et HSK 2.</p>
      </section>`:""}
    </div>

    <div class="settings-col">
      <section class="card set-card"><h2 class="h3">\u{1F4F2} Application et notifications</h2><div data-zone="app"><p class="small muted">\u2026</p></div></section>

      <section class="card set-card"><h2 class="h3">\u{1F4BE} Sauvegarde</h2>
        <p class="small muted">${E()?"Votre progression est enregistr\xE9e automatiquement dans ce navigateur"+(y().user?" et en ligne.":"."):"\u26A0\uFE0F Le stockage local est indisponible ici : la progression sera perdue en fermant la page. Exportez-la pour la conserver."}
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
        <p class="small muted">Efface la progression en ${r(h.label.toLowerCase())} : le\xE7ons, carnet et cahier d'erreurs.</p>
        <button class="btn danger small" data-reset>R\xE9initialiser ma progression</button>
      </section>

      <section class="card set-card"><h2 class="h3">\u2139\uFE0F \xC0 propos</h2>
        <p class="small muted">Impara \xB7 italien &amp; mandarin. Code source : <a href="sources-impara.zip">sources-impara.zip</a>.</p>
      </section>
    </div>
  </div>`;let t=e=>a.querySelector(e);ie(a),S(a),re(a),T().then(()=>ce(a));let n=N(()=>re(a)),c=W(()=>ie(a)),l=K(()=>S(a));a._cleanup=()=>{c(),l(),n()};let i=(e,s)=>a.querySelectorAll(`[data-${e}]`).forEach(m=>m.onclick=()=>{a.querySelectorAll(`[data-${e}]`).forEach(A=>A.classList.toggle("on",A===m)),s(m.dataset[e]),v()});a.querySelectorAll("[data-theme-opt]").forEach(e=>e.onclick=()=>{a.querySelectorAll("[data-theme-opt]").forEach(s=>s.classList.toggle("on",s===e)),ae(e.dataset.themeOpt),v()}),i("goal",e=>g(s=>{s.profile={...s.profile,dailyGoal:+e}})),i("voice",e=>{g(s=>{s.settings.voiceSpeed=+e}),b(h.hello,{force:!0})}),i("pyq",e=>g(s=>{s.settings.pinyinQuiz=e})),t("[data-lang-theme]").onchange=e=>{se(e.target.checked),v()},t("[data-sfx]").onchange=e=>{g(s=>{s.settings.sfx=e.target.checked}),e.target.checked&&V("good"),v()},t("[data-haptics]").onchange=e=>{g(s=>{s.settings.haptics=e.target.checked}),e.target.checked&&I(40),v()},t("[data-tts]").onchange=e=>{g(s=>{s.settings.tts=e.target.checked}),v()},a.querySelectorAll("[data-lang]").forEach(e=>e.onclick=()=>{e.dataset.lang!==u&&P(e.dataset.lang)}),t("[data-export]").onclick=async()=>{try{await navigator.clipboard.writeText(x()),d("Sauvegarde copi\xE9e dans le presse-papiers \u2713","ok")}catch{$({title:"Votre sauvegarde",body:`<p class="small muted">Copiez ce texte manuellement :</p><textarea class="export-box" rows="8" readonly>${r(x())}</textarea>`}),setTimeout(()=>document.querySelector(".export-box")?.select(),50)}};let f=e=>{try{let s=JSON.parse(e);if(!s||typeof s!="object"||!("lessons"in s))throw new Error;k(s),d("Sauvegarde import\xE9e \u2713","ok"),location.hash="tableau"}catch{d("Fichier de sauvegarde invalide","error")}};t("input[type=file]").onchange=e=>{let s=e.target.files[0];if(!s)return;let m=new FileReader;m.onload=()=>f(m.result),m.readAsText(s)},t("[data-import-text]").onclick=()=>f(t(".paste textarea").value),t("[data-reset]").onclick=async()=>{await $({title:"Tout r\xE9initialiser ?",body:`<p>Votre progression en ${r(h.label.toLowerCase())}, votre carnet et votre cahier d'erreurs seront effac\xE9s. Cette action est irr\xE9versible.</p>`,actions:[{label:"Annuler",value:"no",kind:"ghost"},{label:"Oui, tout effacer",value:"yes",kind:"danger"}]})==="yes"&&(k(L()),location.hash="parcours",window.dispatchEvent(new HashChangeEvent("hashchange")))}}function ie(a){let o=a.querySelector('[data-zone="account"]');if(!o)return;let t=p.profile,n=y(),c=`<div class="acc-row"><span class="acc-avatar">${r(t.avatar)}</span>
      <div><b>${r(t.pseudo)}</b><p class="muted small">${n.user?r(n.user.email):"Pas de compte en ligne"}</p></div>
      <a class="btn ghost small acc-edit" href="#profil">Modifier</a></div>`;if(!G()){o.innerHTML=c+'<p class="small muted">Mode local : la progression reste dans ce navigateur.</p>';return}if(!n.user){o.innerHTML=c+`<p class="small muted">Cr\xE9ez un compte gratuit pour retrouver votre progression sur tous vos appareils et ajouter des amis.</p>
      <a class="btn primary" href="#compte">\u2601\uFE0F Se connecter / cr\xE9er un compte</a>`;return}let[l,i]=ne[n.status]||ne.synced;o.innerHTML=c+`
    <div class="sync-box sync-${n.status}"><span class="sync-icon">${l}</span>
      <div><b>${i}</b><p class="small muted">${n.lastSync?`Derni\xE8re synchronisation : ${new Date(n.lastSync).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`:""}${n.message?` \xB7 ${r(n.message)}`:""}</p></div></div>
    <div class="btn-row">
      <button class="btn ghost small" data-sync>\u{1F504} Synchroniser</button>
      <a class="btn ghost small" href="#amis">\u{1F465} Mes amis</a>
      <button class="btn ghost small danger-txt" data-logout>Se d\xE9connecter</button>
    </div>`,o.querySelector("[data-sync]").onclick=async()=>{await F();let f=y().status==="synced";d(f?"Synchronis\xE9 \u2713":y().message,f?"ok":"warn")},o.querySelector("[data-logout]").onclick=async()=>{await $({title:"Se d\xE9connecter ?",body:"<p>Votre progression est sauvegard\xE9e en ligne. Elle sera retir\xE9e de cet appareil et vous la retrouverez en vous reconnectant.</p>",actions:[{label:"Annuler",value:"no"},{label:"Se d\xE9connecter",value:"yes",kind:"danger"}]})==="yes"&&(await _(),d("D\xE9connect\xE9","ok"),location.hash="parcours",window.dispatchEvent(new HashChangeEvent("hashchange")))}}function ce(a){let o=a.querySelector('[data-zone="recorded"]'),t=M();if(!o||!t)return;let n=(t.voice.match(/-([A-Z][a-z]+)Neural$/)||t.voice.match(/_([a-z]+)$/)||[])[1],c=n?n[0].toUpperCase()+n.slice(1):"naturelle";o.innerHTML=`<label class="switch"><input type="checkbox" data-recorded ${p.settings.recordedVoice!==!1?"checked":""}><span></span> \u{1F399}\uFE0F Voix naturelle enregistr\xE9e (${r(c)})</label>
    <p class="small muted">${t.count.toLocaleString("fr-FR")} phrases du cours enregistr\xE9es avec une voix neuronale, identique sur tous les appareils. Ce qui n'est pas enregistr\xE9 (mots partag\xE9s par un ami\u2026) utilise la voix de l'appareil ci\u2011dessous.</p>`,o.querySelector("[data-recorded]").onchange=l=>{g(i=>{i.settings.recordedVoice=l.target.checked}),b(w[u]||h.hello,{force:!0}),v()}}var w={it:"Ciao! Come stai? Oggi impariamo l'italiano insieme.",zh:"\u4F60\u597D\uFF01\u6211\u4EEC\u4ECA\u5929\u4E00\u8D77\u5B66\u4E60\u4E2D\u6587\u3002"};function le(){let a=navigator.userAgent||"",o=u==="zh"?"Chinois (Chine continentale)":"Italien";return/iPhone|iPad|iPod/.test(a)||/Macintosh/.test(a)&&navigator.maxTouchPoints>1?"Sur iPhone, Apple ne donne pas acc\xE8s aux sites web (ni aux applis install\xE9es depuis Safari) aux voix \xAB am\xE9lior\xE9es \xBB ou \xAB Premium \xBB t\xE9l\xE9charg\xE9es dans les R\xE9glages : seules les voix de base apparaissent ici. Pour une voix vraiment naturelle sur iPhone, il faudrait des enregistrements audio int\xE9gr\xE9s \xE0 l'appli.":/Macintosh/.test(a)?`Sur Mac : <b>R\xE9glages Syst\xE8me \u203A Accessibilit\xE9 \u203A Contenu \xE9nonc\xE9 \u203A Voix du syst\xE8me \u203A G\xE9rer les voix</b>, puis t\xE9l\xE9chargez une voix ${o.toLowerCase()} \xAB Premium \xBB ou \xAB am\xE9lior\xE9e \xBB. Dans Chrome, les voix \xAB Google \xBB sont aussi correctes.`:/Android/.test(a)?`Sur Android : dans les param\xE8tres, cherchez <b>\xAB Synth\xE8se vocale \xBB</b>, choisissez le moteur <b>Google</b> et installez les donn\xE9es vocales ${u==="zh"?"chinoises":"italiennes"} (voix de haute qualit\xE9).`:/Edg\//.test(a)?"Dans Edge, les voix marqu\xE9es \xAB Natural \xBB / \xAB Online \xBB sont les plus r\xE9alistes : choisissez\u2011en une ci\u2011dessus.":"Les voix les plus naturelles sont dans <b>Microsoft Edge</b> (voix \xAB Natural \xBB) et <b>Safari</b> sur iPhone ou Mac (voix \xAB Premium \xBB). Dans Chrome, pr\xE9f\xE9rez les voix \xAB Google \xBB."}function re(a){let o=a.querySelector('[data-zone="voices"]');if(!o)return;let t=j(),n=p.settings.voiceName?.[u]||"",c=R(),l=t[0];o.innerHTML=t.length?`
    <div class="voice-row">
      <select data-voice-pick aria-label="Voix">
        <option value="" ${n?"":"selected"}>Automatique${l?` \u2014 ${r(l.name)}`:""}</option>
        ${t.map(i=>`<option value="${r(i.name)}" ${n===i.name?"selected":""}>${r(i.name)} \xB7 ${r(i.tag)}${i.lang&&i.lang.toLowerCase().replace("_","-")!==h.speech.toLowerCase()?` (${r(i.lang)})`:""}</option>`).join("")}
      </select>
      <button class="btn ghost small" data-voice-test>\u25B6\uFE0F \xC9couter</button>
    </div>
    <p class="small muted">${t.length} voix ${u==="zh"?"mandarin":"italienne"}${t.length>1?"s":""} sur cet appareil${c?` \xB7 utilis\xE9e : <b>${r(c.name)}</b>`:""}. Les voix \xAB Naturelle \xBB, \xAB Premium \xBB ou \xAB Am\xE9lior\xE9e \xBB sonnent beaucoup plus humain.</p>
    <details class="voice-help"><summary>La voix sonne robotique ?</summary><p class="small">${le()}</p></details>`:`<p class="small muted">Aucune voix ${u==="zh"?"mandarin":"italienne"} trouv\xE9e pour l'instant sur cet appareil.</p><p class="small">${le()}</p>`,o.querySelector("[data-voice-pick]")?.addEventListener("change",i=>{H(i.target.value),b(w[u]||h.hello,{force:!0,device:!0}),d("Voix enregistr\xE9e \u2713","ok")}),o.querySelector("[data-voice-test]")?.addEventListener("click",()=>b(w[u]||h.hello,{force:!0,device:!0}))}async function S(a){let o=a.querySelector('[data-zone="app"]');if(!o)return;let t;Q()?t=`<p class="small hint-ok">\u2713 Vous utilisez l'application install\xE9e.</p>`:Z()?t=`<p class="small muted">Ajoutez Impara \xE0 votre \xE9cran d'accueil : plein \xE9cran, acc\xE8s direct, et les le\xE7ons marchent m\xEAme sans r\xE9seau.</p>
      <button class="btn primary small" data-install>\u{1F4F2} Installer l'application</button>`:Y()?t=`<p class="small muted">Sur iPhone : ouvrez ce site dans <b>Safari</b>, touchez <b>Partager</b> puis <b>\xAB Sur l'\xE9cran d'accueil \xBB</b>.</p>`:t=`<p class="small muted">Pour installer l'application : menu du navigateur (\u22EE) \u2192 <b>\xAB Installer l'application \xBB</b> ou <b>\xAB Ajouter \xE0 l'\xE9cran d'accueil \xBB</b>.</p>`;let n=await U(),c={unsupported:'<p class="small muted">\u{1F515} Les notifications ne sont pas disponibles sur ce navigateur.</p>',"needs-install":`<p class="small muted">\u{1F514} Sur iPhone, installez d'abord l'application, puis activez les notifications depuis l'application.</p>`,"needs-login":'<p class="small muted">\u{1F514} Connectez-vous pour \xEAtre pr\xE9venu quand un ami vous \xE9crit ou vous d\xE9fie.</p>',denied:'<p class="small muted">\u{1F515} Notifications bloqu\xE9es : autorisez-les dans les r\xE9glages du navigateur pour ce site.</p>',on:`<p class="small hint-ok">\u{1F514} Notifications activ\xE9es sur cet appareil.</p>
      <label class="switch"><input type="checkbox" data-remind ${p.settings.streakReminder!==!1?"checked":""}><span></span> \u{1F525} Rappel de s\xE9rie \xE0 20 h si je n'ai rien fait de la journ\xE9e</label>
      <button class="btn ghost small" data-push-off>D\xE9sactiver</button>`,off:`<p class="small muted">\u{1F514} Soyez pr\xE9venu quand un ami vous \xE9crit, vous ajoute ou vous lance un d\xE9fi, m\xEAme site ferm\xE9.</p>
      <button class="btn primary small" data-push-on>\u{1F514} Activer les notifications</button>`}[n];o.innerHTML=t+`<div class="push-zone">${c}</div>`,o.querySelector("[data-install]")?.addEventListener("click",async()=>{await J()&&d("Application install\xE9e \u2713","ok")}),o.querySelector("[data-push-on]")?.addEventListener("click",async l=>{l.target.disabled=!0,l.target.textContent="Activation\u2026";try{await X(),d("Notifications activ\xE9es \u{1F514}","ok")}catch(i){d(i.message,"warn")}S(a)}),o.querySelector("[data-remind]")?.addEventListener("change",l=>{g(i=>{i.settings.streakReminder=l.target.checked}),v()}),o.querySelector("[data-push-off]")?.addEventListener("click",async()=>{await B(),d("Notifications d\xE9sactiv\xE9es"),S(a)})}export{$e as renderReglages};
