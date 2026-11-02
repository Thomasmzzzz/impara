import{c as s}from"./c-N347SEYN.js";var a={it:{name:"Volpina",kind:"fox"},zh:{name:"Bao",kind:"panda"}},u=()=>(a[s]||a.it).name;function o(l,r,e=60,c=15){let t=60-c,i=60+c;if(l==="happy"||l==="cheer")return`<g class="m-eyes" fill="none" stroke="${r}" stroke-width="4" stroke-linecap="round">
      <path d="M${t-6},${e+2} Q${t},${e-6} ${t+6},${e+2}"/><path d="M${i-6},${e+2} Q${i},${e-6} ${i+6},${e+2}"/></g>`;if(l==="sad")return`<g class="m-eyes"><ellipse cx="${t}" cy="${e+2}" rx="5" ry="5.5" fill="${r}"/><ellipse cx="${i}" cy="${e+2}" rx="5" ry="5.5" fill="${r}"/>
      <path d="M${t-8},${e-5} L${t+5},${e-10}" stroke="${r}" stroke-width="3" stroke-linecap="round"/><path d="M${i+8},${e-5} L${i-5},${e-10}" stroke="${r}" stroke-width="3" stroke-linecap="round"/>
      <path d="M${i+3},${e+8} q3,6 0,9 q-3,-3 0,-9z" fill="#7cc4f2"/></g>`;let f=l==="think"?-3:0;return`<g class="m-eyes"><ellipse cx="${t}" cy="${e}" rx="5.5" ry="6.5" fill="${r}"/><ellipse cx="${i}" cy="${e}" rx="5.5" ry="6.5" fill="${r}"/>
    <circle cx="${t+1.8}" cy="${e-2.5+f}" r="2" fill="#fff"/><circle cx="${i+1.8}" cy="${e-2.5+f}" r="2" fill="#fff"/></g>`}function $(l,r,e=82){return l==="sad"?`<path d="M52,${e+4} Q60,${e-3} 68,${e+4}" fill="none" stroke="${r}" stroke-width="3" stroke-linecap="round"/>`:l==="think"?`<ellipse cx="62" cy="${e+1}" rx="3.5" ry="3" fill="${r}"/>`:l==="happy"||l==="cheer"?`<path d="M50,${e-1} Q60,${e+13} 70,${e-1} Z" fill="${r}"/><path d="M55,${e+5} Q60,${e+10} 65,${e+5} Z" fill="#ff7b8a"/>`:`<path d="M53,${e} Q60,${e+6} 67,${e}" fill="none" stroke="${r}" stroke-width="3" stroke-linecap="round"/>`}var p=(l,r)=>r==="cheer"?`<g class="m-paws"><ellipse cx="18" cy="70" rx="9" ry="12" fill="${l}" transform="rotate(-25 18 70)"/><ellipse cx="102" cy="70" rx="9" ry="12" fill="${l}" transform="rotate(25 102 70)"/>
     <text x="8" y="26" font-size="14">\u2728</text><text x="98" y="22" font-size="12">\u2728</text></g>`:"";function x(l){let r="#2b1d14";return`
  ${p("#f08a2c",l)}
  <g class="m-head">
    <path d="M22,48 L30,10 L52,34 Z" fill="#f08a2c"/><path d="M29,38 L33,19 L45,33 Z" fill="#3a2418"/>
    <path d="M98,48 L90,10 L68,34 Z" fill="#f08a2c"/><path d="M91,38 L87,19 L75,33 Z" fill="#3a2418"/>
    <ellipse cx="60" cy="66" rx="42" ry="38" fill="#f5913a"/>
    <path d="M18,66 Q34,104 60,104 Q86,104 102,66 Q86,76 72,72 Q60,86 48,72 Q34,76 18,66 Z" fill="#fff6ec"/>
    <ellipse cx="34" cy="80" rx="7" ry="4.5" fill="#ffb3a7" opacity=".7"/><ellipse cx="86" cy="80" rx="7" ry="4.5" fill="#ffb3a7" opacity=".7"/>
    ${o(l,r)}
    <ellipse cx="60" cy="74" rx="6" ry="4.5" fill="${r}"/>
    ${$(l,r,84)}
  </g>`}function h(l){let r="#1f2328";return`
  ${p("#2a2e33",l)}
  <g class="m-head">
    <circle cx="28" cy="30" r="15" fill="#2a2e33"/><circle cx="92" cy="30" r="15" fill="#2a2e33"/>
    <circle cx="28" cy="30" r="7" fill="#4a4f56"/><circle cx="92" cy="30" r="7" fill="#4a4f56"/>
    <ellipse cx="60" cy="64" rx="44" ry="40" fill="#ffffff" stroke="#e3e6ea" stroke-width="2"/>
    <ellipse cx="43" cy="61" rx="12" ry="15" fill="#2a2e33" transform="rotate(25 43 61)"/>
    <ellipse cx="77" cy="61" rx="12" ry="15" fill="#2a2e33" transform="rotate(-25 77 61)"/>
    ${o(l,"#ffffff",60,16).replace(/fill="#fff"/g,`fill="${r}"`)}
    <ellipse cx="38" cy="82" rx="7" ry="4.5" fill="#ffb3c2" opacity=".75"/><ellipse cx="82" cy="82" rx="7" ry="4.5" fill="#ffb3c2" opacity=".75"/>
    <ellipse cx="60" cy="76" rx="6" ry="4.5" fill="${r}"/>
    ${$(l,r,86)}
    <path d="M52,16 q8,-10 16,0" fill="none" stroke="#3aa35c" stroke-width="3" stroke-linecap="round"/><ellipse cx="66" cy="12" rx="6" ry="3" fill="#3aa35c" transform="rotate(-20 66 12)"/>
  </g>`}function y(l="idle",{size:r=96,cls:e="",lang:c=s}={}){let t=(a[c]||a.it).kind;return`<svg class="mascot m-${l} ${e}" width="${r}" height="${r}" viewBox="0 0 120 120" role="img" aria-label="${(a[c]||a.it).name}">${t==="panda"?h(l):x(l)}</svg>`}var n={welcome:{it:["Ciao ! On continue ?","Pronto ? Andiamo !","Un petit pas chaque jour \u{1F1EE}\u{1F1F9}"],zh:["\u4F60\u597D\uFF01On continue ?","\u52A0\u6CB9 ji\u0101y\xF3u ! Allez !","Un caract\xE8re apr\xE8s l'autre \u{1F43C}"]},good:{it:["Bravissimo !","Perfetto !","Ottimo !"],zh:["\u592A\u68D2\u4E86 ! Super !","\u5BF9\u4E86 ! C'est \xE7a !","\u5F88\u597D !"]},bad:{it:["Pas grave, on r\xE9essaie !","Coraggio !","\xC7a viendra \u{1F4AA}"],zh:["\u6CA1\u5173\u7CFB ! Pas grave !","\u52A0\u6CB9 ! Courage !","\xC7a viendra \u{1F4AA}"]},win:{it:["Che bravo ! Je suis fi\xE8re de toi !","Le\xE7on dans la poche !","Fantastico !"],zh:["\u592A\u597D\u4E86 ! Je suis fier de toi !","Le\xE7on r\xE9ussie !","\u5389\u5BB3 l\xEChai ! Impressionnant !"]},fail:{it:["Presque ! On la refait ensemble ?","Relis la le\xE7on, tu vas y arriver !"],zh:["\u5DEE\u4E00\u70B9 ! Presque !","On r\xE9vise et on recommence !"]},streak:{it:["Ta s\xE9rie br\xFBle \u{1F525}","Ne la laisse pas s'\xE9teindre !"],zh:["Ta s\xE9rie br\xFBle \u{1F525}","Reviens demain, je t'attends !"]}},g=l=>{let r=n[l]?.[s]||n[l]?.it||[""];return r[Math.floor(Math.random()*r.length)]};export{u as a,y as b,g as c};
