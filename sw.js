/* =====================================================================
   sw.js — Service worker : application installable, hors ligne, notifications
   - La page est servie « réseau d'abord » : chaque mise à jour du site
     arrive au prochain lancement ; sans réseau, la dernière version
     enregistrée s'ouvre quand même.
   - Polices, tracés des caractères et bibliothèques externes sont gardés
     en cache après leur premier chargement.
   - Les échanges avec le serveur de comptes (Supabase) ne sont jamais
     mis en cache.
   ===================================================================== */
const VERSION = "impara-v2";
const CORE = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./favicon.png"];
const RUNTIME = "impara-runtime-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== VERSION && k !== RUNTIME).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

const CACHEABLE_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com", "cdn.jsdelivr.net"];

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname.endsWith("supabase.co")) return;              // toujours en direct

  // Page : réseau d'abord, copie de secours hors ligne
  if (req.mode === "navigate" || (url.origin === location.origin && url.pathname.endsWith("/index.html"))) {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res.ok) (await caches.open(VERSION)).put("./index.html", res.clone());
        return res;
      } catch {
        return (await caches.match("./index.html")) || (await caches.match("./")) || Response.error();
      }
    })());
    return;
  }

  // Ressources externes (polices, tracés, bibliothèques) : cache puis mise à jour en arrière-plan
  if (CACHEABLE_HOSTS.includes(url.hostname)) {
    e.respondWith((async () => {
      const cache = await caches.open(RUNTIME);
      const hit = await cache.match(req);
      const net = fetch(req).then((res) => { if (res.ok || res.type === "opaque") cache.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    })());
    return;
  }

  // Morceaux de l'application (app-XXXX.js, c-XXXX.js) : leur nom change à chaque
  // version, on peut donc les garder en cache sans risque (disponibles hors ligne)
  if (url.origin === location.origin && /\/(app|c)-[A-Z0-9]+\.js$/.test(url.pathname)) {
    e.respondWith((async () => {
      const cache = await caches.open(RUNTIME);
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone());
      return res;
    })());
    return;
  }

  // Fichiers du site (icônes, manifeste…) : cache d'abord
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
  }
});

/* --------------------------- Notifications --------------------------- */
self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Impara", {
    body: d.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: d.tag,
    renotify: !!d.tag,
    data: { url: d.url || "./" },
  }));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const target = new URL(e.notification.data?.url || "./", self.registration.scope).href;
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const w of wins) {
      if (w.url.startsWith(self.registration.scope)) { await w.focus(); return w.navigate(target).catch(() => {}); }
    }
    return self.clients.openWindow(target);
  })());
});
