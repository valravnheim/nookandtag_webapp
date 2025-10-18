'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bb6b970f52d3b991b01a87cb01c63195",
"assets/AssetManifest.bin.json": "a2b2905bb717d5e57386cbb25df1db2a",
"assets/AssetManifest.json": "e57f7532d7866c55cabd382168adb330",
"assets/assets/data/artists.json": "0c7d5704407a34072f1bead498b38c2d",
"assets/assets/data/artist_tags.json": "467b6f894a3baacf3708b99d50ed0759",
"assets/assets/data/tags.json": "03b6566b3e97b26cc03f3be0244abacf",
"assets/assets/fonts/text-font.ttf": "0ba8e76c2aa7e82ec3a1a9996086fec0",
"assets/assets/fonts/title-font.ttf": "a5c77dca0bba1293ef0ff6154925a6ca",
"assets/assets/icons/artisttransp.png": "9494c277bad8b2f1798301ac9b8597ec",
"assets/assets/icons/artistwhite.png": "390a6ebb2d07bfd9bf8cced0e9f07be9",
"assets/assets/icons/iconlaunch.png": "3945f63d672824c013afdf4dd6cbab24",
"assets/assets/icons/infotransp.png": "28da27dc77cd165a39286971df4e013b",
"assets/assets/icons/infowhite.png": "cf76443389e6ac2ed05b55d7633473a2",
"assets/assets/icons/map.png": "b1182f2c54e07e066566c8f17413d092",
"assets/assets/icons/maptransp.png": "7c021e776f5e2b52a2b019c04c9b0c79",
"assets/assets/icons/tagtransp.png": "e0bd7637780db84112052eff502e585d",
"assets/assets/icons/tagwhite.png": "01746281b40ddda9f9b7fc46f6733a83",
"assets/assets/icons/test.png": "c9234d9cb74aadef9b225f0c4aa1589d",
"assets/assets/images/9ryuq_logo.jpg": "8e475b31f92ca8f011f5bc95dc680d2a",
"assets/assets/images/ailicchi_logo.png": "35cf870f372c8d55dd8ce70048e22ee3",
"assets/assets/images/ammybunny_logo.png": "da1ae3c32ad7d4d663a8d983be8719f4",
"assets/assets/images/artiche_dolls_logo.png": "8d90e6410e22ac24090e6e007dd686e3",
"assets/assets/images/artistic_alchemy_logo.png": "e2b59c9346cbce744ec3d8187c7ada87",
"assets/assets/images/assemble_rats_logo.png": "77d421edbd0d307b75d92b197095fd8d",
"assets/assets/images/atarial_logo.png": "55755006a3376f7c7012f9a446238b4b",
"assets/assets/images/awksbush_logo.png": "46c48c3e9de9a9ae7de02de1f42b1995",
"assets/assets/images/axolshop_logo.png": "e3fb8975671faf2f5ee08d9eafe6babc",
"assets/assets/images/bean_sprout_logo.png": "7cb859d925595fd02dab883abc412741",
"assets/assets/images/beebsbubs_logosm.png": "c78fd26d59912e0c3dd11db8357fb32c",
"assets/assets/images/billies_room_logo.jpeg": "b8e5804c6ad7782496b36bdf9ce592d8",
"assets/assets/images/biqqin_logo.jpeg": "993588dfa3bb970ef42085c06dc5d270",
"assets/assets/images/buttercatrho_logo.png": "5f057a79f708e7063638fee4497e8336",
"assets/assets/images/candi_logo.jpeg": "0b5f691343a1f180b9ea97340de8443c",
"assets/assets/images/charfish_logo.png": "3f6b4844a94dfff6d0bc63f87cf312ea",
"assets/assets/images/chorvaqueen_logo.jpg": "2e56495772799c1f709a4de7ce61df8f",
"assets/assets/images/crochetcreationsbylu_logo.png": "d083fb4dc305c17228f89a68f1a609aa",
"assets/assets/images/cynically_logo.webp": "12486523ac4aea134879892e3a0d3f45",
"assets/assets/images/darklings_ceramics_logo.jpg": "e40575af9accf06ee2e19cc3330f4d0f",
"assets/assets/images/ecupcake_logo.png": "f896df8e49b23f59bc1dd7a6a6dd8bf9",
"assets/assets/images/entnoot_logo.jpg": "8a89d4b9ecdb42534fc25eb260c40652",
"assets/assets/images/eun_logo.png": "384073c66cc5f32bce269003b6ee2812",
"assets/assets/images/ghoste_logo.jpg": "7d21867f96f841d39c9a3e763b480063",
"assets/assets/images/glaciars_logo.png": "c8e0bd19a19526da5631d4c5d7c9f96d",
"assets/assets/images/gravedigger_logo.jpg": "96f5ac53e379063dbafe2c8f6ad3b71e",
"assets/assets/images/gutter_goblin_logo.jpg": "0f6ab8717523ea357f227d79b281d4ad",
"assets/assets/images/hilltop_logo.jpeg": "15b12d834e99a81f1d464a7bd1a8fca2",
"assets/assets/images/icedjuiceboxes_logo.jpg": "d25ea769d14c0ce3569173e4c6acf1cf",
"assets/assets/images/ihaveastitch_logo.png": "6a18760434bcf97aac642d7161cb6fc4",
"assets/assets/images/insta_logo.png": "26d9974a1feec9905a4e0d5e5ddf8db6",
"assets/assets/images/iribbon_logo.jpg": "7001fc665ce9d35bb0bc30e86ba4a7b4",
"assets/assets/images/janna_ruth_logo.png": "8e0bdeccf831abb6a18f73b12d77b3a8",
"assets/assets/images/jiroillust_logo.jpg": "05b1d174067a1005ce8a3a80e17edf55",
"assets/assets/images/kerrysrosecastle_logo.png": "e598d8e08aeaf760158a794cbb01f78b",
"assets/assets/images/kodoyon_logo.png": "02a85a1313dd49a2ad7a80c4d22965c0",
"assets/assets/images/lachyloolaa_logo.jfif": "a60ca0d74feb41c286c78dd58d21a1f1",
"assets/assets/images/lainchoco_logo.png": "da66f647a1d9a7d451695db171b96acf",
"assets/assets/images/laya_rose_logo.jpg": "bf939785a3adcb01994612bf9665dff5",
"assets/assets/images/lime_of_doom_logo.webp": "dac54135afb65c04b1c8e42bf3e5079d",
"assets/assets/images/lycanwolfie_logo.png": "0073055d81569477ab88ecaa176a7aa8",
"assets/assets/images/maple_logo.png": "df169acd79fae2b9e3506a5fc0ad7ce9",
"assets/assets/images/meadowclarks_logo.jpeg": "5522b37fa90e2090b48a97f0b885f8ee",
"assets/assets/images/mechanicalpen_logo.png": "ade1187adc45436ea0e0b27854d6abb6",
"assets/assets/images/midnightstitches_logo.jpg": "04c33c2a9bffbe3005b74bd6d64aadf7",
"assets/assets/images/midnight_run_logo.jpg": "68182170672e5faef664e5201c718a9d",
"assets/assets/images/miranditto_logo.png": "0ec88fbfcaf9646d25224f7ea269249f",
"assets/assets/images/mochiiknight_logo.png": "0df4a976d2740231778b929fdf58a986",
"assets/assets/images/mousse_mouse_logo.png": "ad9a11ff684f4e326c5e2baae00ee912",
"assets/assets/images/nemo_logo.png": "bc1620077b7703f83b2c92aaddb67575",
"assets/assets/images/newtz_logo.png": "8917d7f4a5493d44ecf81780fcc4b6f5",
"assets/assets/images/nori_teahouse_logo.png": "61ba452492f2ae3266058faf4126b8c8",
"assets/assets/images/nymeris_logo.png": "0d7a4fc565fa2a65a4c41a642b05dd13",
"assets/assets/images/ouroridae_logo.png": "695f9869e818daabd08acd823d3baa49",
"assets/assets/images/partspanda_logo.jpeg": "647c89d9a78005de4e26e164d4c1ad00",
"assets/assets/images/pawa_haven_logo.png": "66a018c5fd76cbe03e3c0371157afe8f",
"assets/assets/images/primal_arc_logo.png": "2cc01c685163e948601b3a8b5bdac00e",
"assets/assets/images/quietsov_logo.png": "62f7e470e7fc13bcbb6a6d6afdc049af",
"assets/assets/images/quill_cafe_logo.png": "b6ab9290e965b38a21d2b57cd1c729c1",
"assets/assets/images/rogue_creations_logo.png": "616b42b1825ab98ef17f356c389e972a",
"assets/assets/images/saintevie_logo.jpeg": "ee08890a2732eef924661c02c82ebcdd",
"assets/assets/images/sannas_atelier_logo.png": "3d040dbcc35683a665e3cc17144f8901",
"assets/assets/images/serapheir_logo.png": "f77723ecf7c88bd7f26dde449f396c27",
"assets/assets/images/shay_likes_orange_logo.png": "7e3e535ace7b3e434afb03e293b5604e",
"assets/assets/images/shit_imma_artist_logo.jpg": "d455eec8d69ee116e76571e8eaa1275a",
"assets/assets/images/snowsprite_logo.png": "38a5aa4d07fd566240ff8f583399c7ee",
"assets/assets/images/solastic_logo.jpg": "efa9165224d311dc8eb7ccdba2dc6d2b",
"assets/assets/images/sushi_cat_logo.png": "b4c84e1b225dd360fdb0b4531b73b9d5",
"assets/assets/images/systemofaclown_logo.png": "bc548dfd0bf495e5d7b37d9b43ad7cc7",
"assets/assets/images/tempestcorner_logo.png": "0719a825c425256ace67ee84ae6fe923",
"assets/assets/images/thistle_thorn_logo.png": "25e8616e52b5a1926c7512af97fcdd2c",
"assets/assets/images/thlurp_logo.png": "b33fdd9194af76ca8e5739b78b600a73",
"assets/assets/images/tinytales_logo.png": "b8a6afdeea6b9dcf1464a29dcca2b8a2",
"assets/assets/images/twisted_treasure_logo.png": "a7a1544273e742f389af53cbc20c686a",
"assets/assets/images/uncon_void_axo_logo.jpg": "46ec0a375d705d064df8e2b84727cf90",
"assets/assets/images/willow_wisp_logo.png": "379e5db7befd03c143bb6bbe09ab7fd1",
"assets/assets/images/xiaokain_logo.jpg": "fc4716ef0a4ac1f566acdc1214b2bb9a",
"assets/assets/images/yarnandyeet_logo.webp": "dac9535264e7093c2faab2c1f595191e",
"assets/assets/images/yukei_logo.jpeg": "42de75b6a51596e4c69afa9ab3328d09",
"assets/assets/images/zenzeyi_logo.jpg": "7c300973ea1d08efd404d5e85c8bc822",
"assets/assets/map/mapnormal.png": "d0bd14a2648c34424a898cfa54bd3ae6",
"assets/FontManifest.json": "78f8c8760c3037143d072318be57f91b",
"assets/fonts/MaterialIcons-Regular.otf": "022580e69fdba63c7d97dbca24fd88ef",
"assets/NOTICES": "c27fe0ac473a355dd10b7a3a8d74c85f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "648d72fc348d127cfce9917a2fc9f8c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "146133f0fd5d4d78458da8ff991c8305",
"/": "146133f0fd5d4d78458da8ff991c8305",
"main.dart.js": "1ef7c7a1013c4d6439a103df5a3364fc",
"manifest.json": "6e4d48cd2529e054f6408773d545aa85",
"sqflite_sw.js": "62382c79e4045d9ceea054b963ba1f83",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "eebed4b5283663fd82f69426d835221b"};
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
