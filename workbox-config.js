module.exports = {
    "globDirectory": "dist/",
    "globPatterns": [
        "index.html",
        "*.js",
        "*.css",    
        "img/**/*.png"
    ],
    "dontCacheBustUrlsMatching": new RegExp('.+\.[a-f0-9]{20}\..+'),
    "maximumFileSizeToCacheInBytes": 5000000,
    "swSrc": "src/sw/service-worker.js",
    "swDest": "dist/service-worker.js"
  };