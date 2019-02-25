importScripts('sub/workbox-3.6.3/workbox-sw.js');

workbox.setConfig({
  debug: false,
  modulePathPrefix: 'sub/workbox-3.6.3/'
});

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "65cf881f695b0361fe912d899b9be89d"
  },
  {
    "url": "main.e85d06a8fb1329e89026.js"
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
    "url": "img/android/android-launchericon-144-144.png",
    "revision": "bd9ef4cb8ae58b915544d7ffba906730"
  },
  {
    "url": "img/android/android-launchericon-192-192.png",
    "revision": "e0a5505acc61b9fb6e4b925beb6c0330"
  },
  {
    "url": "img/android/android-launchericon-48-48.png",
    "revision": "d294e86827f63ee9e58fec099cf265b6"
  },
  {
    "url": "img/android/android-launchericon-512-512.png",
    "revision": "6ec874295acf07dc551359791a49d656"
  },
  {
    "url": "img/android/android-launchericon-72-72.png",
    "revision": "fa177359e8fad1b7d605d0c6651384a0"
  },
  {
    "url": "img/android/android-launchericon-96-96.png",
    "revision": "6966598995fc92a872ad1b509329b350"
  },
  {
    "url": "img/ios/ios-appicon-1024-1024.png",
    "revision": "7a49462c5aa6044d5fd2da602c8a886b"
  },
  {
    "url": "img/ios/ios-appicon-120-120.png",
    "revision": "a02cf4f3747d68cc3d8e5ed51974be2b"
  },
  {
    "url": "img/ios/ios-appicon-152-152.png",
    "revision": "d6498b16417693644590f934ecd5d499"
  },
  {
    "url": "img/ios/ios-appicon-180-180.png",
    "revision": "be138e38046ac8210015e7c6a95a417b"
  },
  {
    "url": "img/ios/ios-appicon-76-76.png",
    "revision": "1065d6c4cb8ed66bb0c54b21733d5d6f"
  },
  {
    "url": "img/ios/ios-launchimage-1024-768.png",
    "revision": "0a904fa559e08ddfb7f10ad6a1bce10e"
  },
  {
    "url": "img/ios/ios-launchimage-1242-2208.png",
    "revision": "0d2ce83a8dfcb7ca6b4f16a333334cc9"
  },
  {
    "url": "img/ios/ios-launchimage-1334-750.png",
    "revision": "f8e72a5171462cf82b3d3be84e07bda7"
  },
  {
    "url": "img/ios/ios-launchimage-1536-2048.png",
    "revision": "03cfc101213ad742f877e361a36fdc87"
  },
  {
    "url": "img/ios/ios-launchimage-2048-1536.png",
    "revision": "ef735f9ed2b3ffb375d6adffd014128b"
  },
  {
    "url": "img/ios/ios-launchimage-2208-1242.png",
    "revision": "83a1ad46caa5f3181103a7c8e5cde0a9"
  },
  {
    "url": "img/ios/ios-launchimage-640-1136.png",
    "revision": "5139bed03850b8831de743304f5b4d39"
  },
  {
    "url": "img/ios/ios-launchimage-640-960.png",
    "revision": "8ed867ad64dfe4fd1fc1f616de3bca3e"
  },
  {
    "url": "img/ios/ios-launchimage-750-1334.png",
    "revision": "517d747fadc9d321a489ce12f0682957"
  },
  {
    "url": "img/ios/ios-launchimage-768-1024.png",
    "revision": "0c8b5c68e8ff08e493f7cf987a39f571"
  },
  {
    "url": "img/logo-small.png",
    "revision": "e86462de73827b52ed50f3864046e0d3"
  },
  {
    "url": "img/logo.png",
    "revision": "0d283b420fa4c9d94191f63324914b40"
  },
  {
    "url": "img/vej.png",
    "revision": "94b8900810fff0793424b8495f14fd9f"
  }
]);
