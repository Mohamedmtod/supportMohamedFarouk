'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8108a368ebe940545ed1dd35c97a98b3",
".git/config": "95c02a90073cd03feb034c447a6d26c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d65d87f61482c9fdd39403a20663b206",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "792366fa84f06d47f69ca62e22115645",
".git/logs/refs/heads/main": "771bf6d8becc8e55d8421c423cf63bab",
".git/logs/refs/remotes/origin/main": "195d0a611291c1f9790a79137db35d32",
".git/objects/18/d73a660a05dcb534ae59f1d06b13fb112f801e": "64eae20d1faa023c7ffdec303ffdda40",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/eb65c69b4de3fc9f47393475fa98788dd8e695": "da44c98ed1a250ba4fdbeb3f6b8b31f5",
".git/objects/20/c77835f2840bdf234662f29a92d6ef256946bf": "51301fb57a8d414466954367e5c6ca9c",
".git/objects/21/75ba4569dfc0a535382324caa03fbd791ecb68": "8b3423d87c85accb8cf6263a61911cc5",
".git/objects/22/211fd080b7cc068a8cdb0151100e1e2853e2eb": "f6d7c0d69dd3809ecae6e75bd4a8130c",
".git/objects/22/eb8f4d674258d348f915cbea8c3b875ad6e05e": "704b84c510d60fb8a91fc2ae8882951e",
".git/objects/30/1a9671f2352c9aaec595feecb91389f1e088e3": "8025a3d8403f68eb530f2787491ae818",
".git/objects/30/7be26efe9f6679bad1a17fd5598635d9177ca4": "0b552b3c365bc77ec760dbe1b369c154",
".git/objects/37/eac7a6942f724d5449f7dff6fafe565c4cc0a1": "76aa979058818e135ac291f77fe1fe73",
".git/objects/39/329a246b7fc7af8a0e8156620a36aef87ba8a0": "06eb34ce412ab531e469f2899d081fc3",
".git/objects/3a/4e7d05f1a6a897c99d65f84696e777e87dc203": "bf3c8de613bf2ae3f42b8cf1c285999b",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/44/edf979812aac51404c319c87242dab3ee93474": "6faf9fd97ba866ffea0005f9d66b3844",
".git/objects/45/8d300ea0967dcb5bcc662bcf3f624a5720c246": "53092bba2e1d78ece9d787804d6aa741",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/ab7240056e2fde8b013be417b303422f79d6b6": "2f65552a28aaf402b15a2a456c4de76a",
".git/objects/52/fe31f44a8b181785a45b19f3b854c433539e23": "30be32529e1b2e3e6e810d54e80f278b",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5f/fa52cd5f95574d3ee98e95238a16e740de6f58": "bce87884034fb4e55843beb0d6b26275",
".git/objects/65/8115099af83a2f84e9b33560f39baec7c0aaad": "cbb8b046440bd8128fad5c00d6f4bb75",
".git/objects/66/12373dd22fd8e3a26601c151e6f72ef45870fa": "74e63a9b5b8b6d9c22141be6033d7e5e",
".git/objects/6b/8ba971ebc4911a2c3862baf4533fa63a5ac446": "ddb62388703a24e3ad05b445e15ca68b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/10d9cdc616d3da5ad9f97f6c866823358371fa": "9c62ca175b15bd161a63fb973122ae32",
".git/objects/88/3079eb88d0df309b388c7b2487dfe2d3cc5ac5": "1ce5b98b70cec497c037ade8df75582b",
".git/objects/8c/4ceafcf20310cec5864da517a05f0a35a49ce8": "85587fa40ee7604d8b754e77eed3e556",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/96/d158c6ed5756cbcff40f1520701c488fef6009": "51be2e5f0e6dde3b40e0a5061fdb98bf",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a5/b5eed993a247cc6d3a3ab8bf7c055c47d42b1d": "83704b6e7a9798ee9e3f9331e7c938de",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/4cb0b2a0b21005250955f85befbf4d1add38f5": "e119e0fb18394e0739acade966bcbf3e",
".git/objects/c5/3bcb6ee1b2bb49192d4f775707e102eacb43b0": "bc54e1748ad840701c8471e693af8b14",
".git/objects/c7/f631ad98008fb6dc0fb35ff6e37237ab44e41e": "d3a41ea96b0540132c2811cea2db019d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a9374159bfc968f77d5ba8a9367ed620a4411c": "e8ad178e571da39514c69b0990fdf06b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/de4a39b6a2e53ff755f72829e081c70c211741": "a3bce1e2b927cd944f2677d8330f17f4",
".git/objects/e2/3ee2fbd2737e98e526c427750dc79b043049bf": "9f1d123daa878261a38b82442e41b01a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/9d93ee6baa88f79e6b31448c872b0c9046d319": "ff9986d7e2fe40d8ff31e4ae1d2b130b",
".git/objects/f1/868a65f1d4428d8a02b9f5697d808cc1072fb6": "a70764ad240e0cf01463445a592ab896",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "becd578aa071c03af2b074da66649589",
".git/refs/remotes/origin/main": "becd578aa071c03af2b074da66649589",
"assets/AssetManifest.bin": "d2ba6f6a0f4f47d3a36cc490bb8a2c91",
"assets/AssetManifest.bin.json": "e021be491a0826d7e2f6496a8e81e49e",
"assets/AssetManifest.json": "1f9cee2aebb3f3ab9af43e0d5eafe4c1",
"assets/assets/farouq.jpg": "e7e7dbe7ef7e6b8aefdc353b4a9c0df3",
"assets/assets/icon.png": "86fee99dec85984508f62ecb99257b91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "f9be67388ee0372801e4163f160c75f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "3875c47e1c1a5b1a5c94a94f432d904b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "49e1c122c2c6427e9a64d31a58bf2eb4",
"icons/Icon-192.png": "1971f868ceccd45c82b8196aabe58ffb",
"icons/Icon-512.png": "f10a94594ea038654c874d83756c4bf5",
"icons/Icon-maskable-192.png": "1971f868ceccd45c82b8196aabe58ffb",
"icons/Icon-maskable-512.png": "f10a94594ea038654c874d83756c4bf5",
"index.html": "7505fe3092d5a479bfd88b0f4b16617c",
"/": "7505fe3092d5a479bfd88b0f4b16617c",
"main.dart.js": "e32967faabfd1c05cf987591670db192",
"manifest.json": "1f4aefba9caad6efdc90b7f22a817948",
"version.json": "8c406fd528734e61aac18653eef6763b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
