module.exports = {
    "globDirectory": "dist/vej-pwa-spike/",
    "globPatterns": [
        "index.html",
        "*.js",
        "*.css",    
        "img/**/*.png"
    ],
    "dontCacheBustUrlsMatching": new RegExp('.+\.[a-f0-9]{20}\..+'),
    "maximumFileSizeToCacheInBytes": 5000000,
    "swSrc": "src/sw/service-worker.js",
    "swDest": "dist/vej-pwa-spike/service-worker.js"
  };