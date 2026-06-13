const cacheName =
"coffeeverse-v1";

const assets = [

"/",
"/index.html",
"/css/style.css",
"/css/animations.css",
"/js/app.js",
"/js/theme.js",
"/js/counter.js",
"/js/recommender.js"

];

self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(cacheName)
.then(cache=>{

return cache.addAll(assets);

})

);

});

self.addEventListener(
"fetch",
event=>{

event.respondWith(

caches.match(event.request)
.then(response=>{

return response ||
fetch(event.request);

})

);

});
