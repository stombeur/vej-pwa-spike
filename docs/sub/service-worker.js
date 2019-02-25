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
    "revision": "5bbc31aa9d2ed3069abe237b14849f54"
  },
  {
    "url": "main.12c717f36624523c8a1b.js"
  },
  {
    "url": "polyfills.cab406b926958ce65dcb.js"
  },
  {
    "url": "pwacompat.js",
    "revision": "2adf01730efeeda2eab9306787c993b7"
  },
  {
    "url": "runtime.a5dd35324ddfd942bef1.js"
  },
  {
    "url": "styles.3ff695c00d717f2d2a11.css"
  },
  {
    "url": "img/logo-small.png",
    "revision": "e86462de73827b52ed50f3864046e0d3"
  },
  {
    "url": "img/logo.png",
    "revision": "0d283b420fa4c9d94191f63324914b40"
  }
]);
