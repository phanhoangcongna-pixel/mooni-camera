const CACHE='mooni-v18';
const ASSETS=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('mooni-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 if(event.request.mode==='navigate'||event.request.destination==='document'){
  event.respondWith(fetch(event.request).then(response=>{
   const copy=response.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));return response;
  }).catch(()=>caches.match('./index.html')));
  return;
 }
 event.respondWith(caches.open(CACHE).then(async cache=>{
  const cached=await cache.match(event.request);
  if(cached)return cached;
  const response=await fetch(event.request);
  if(response.ok)cache.put(event.request,response.clone());
  return response;
 }));
});