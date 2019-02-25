importScripts('workbox-3.6.3/workbox-sw.js');

workbox.setConfig({
  debug: false,
  modulePathPrefix: 'workbox-3.6.3/'
});

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "7045ac7977d405247f1548fc43e2f99a"
  },
  {
    "url": "main.12c717f36624523c8a1b.js"
  },
  {
    "url": "polyfills.cab406b926958ce65dcb.js"
  },
  {
    "url": "runtime.a5dd35324ddfd942bef1.js"
  },
  {
    "url": "styles.3ff695c00d717f2d2a11.css"
  },
  {
    "url": "img/logo.png",
    "revision": "0d283b420fa4c9d94191f63324914b40"
  }
]);
