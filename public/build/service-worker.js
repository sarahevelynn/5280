"use strict";var precacheConfig=[["/index.html","713e126e209ecdaacd4540ecedfa0912"],["/static/css/main.4705da3b.css","581fde51217499c9a4562c0302bd4452"],["/static/js/main.cdaaf09c.js","babfb840375557d0347106d7dce569aa"],["/static/media/BillTrack50Logo.9e1218c8.png","9e1218c8ac6bdd2b14d6cafeca7dc509"],["/static/media/DINAlternateBold.a52d72c3.otf","a52d72c38f5e2f9b4498103567fd7300"],["/static/media/DINAlternateRegular.30ccfb72.otf","30ccfb72498209debe74c42b39616b32"],["/static/media/DPTLogo.3725c770.png","3725c770fd596cb29c5a6e4ebe1226e6"],["/static/media/Den1mc.5ebf488a.png","5ebf488a167ef11d66c120def791647e"],["/static/media/GoldCalLogo.21afe4e0.png","21afe4e0cd5649b6cb39bb5f6182252c"],["/static/media/MHWLogo.fad75f6b.png","fad75f6b3c246c1595247cb83187c541"],["/static/media/agribotix.a8ca4be2.png","a8ca4be226f50fa86d6a58056a0243e9"],["/static/media/bt50.390c4348.png","390c4348d2ba43538691f7a111af985f"],["/static/media/cam.637a8e49.png","637a8e498651adb47c381fbd2987deb5"],["/static/media/cliexa.c585f41c.png","c585f41c1b9daaa9db106058c5e862d6"],["/static/media/denverD.8fb2cbf8.jpg","8fb2cbf8994b7fbb1aa73b9076f99363"],["/static/media/email.b30252e8.png","b30252e8096f2e2f49d2078973cbe07b"],["/static/media/facebook.732522cd.png","732522cd5fbb1bf1c03e16158ad01fc2"],["/static/media/intelivideo.5c52204c.png","5c52204c37e0b43d559ff2884987ef15"],["/static/media/internConnectLogo.3ddd2e61.png","3ddd2e613d7ff9dd0fef3e272469b7c5"],["/static/media/jenna.a05b5db9.png","a05b5db9e87d4295928c6cb57bd4014f"],["/static/media/linkedIn.061d9132.png","061d913256af58125ee86b02a56af0b2"],["/static/media/lizzie.5b4b07ce.png","5b4b07ceae5ac776fd4298a7782d10d8"],["/static/media/lizzie.5bae3765.png","5bae37653f0c31c65854590634355702"],["/static/media/logo.1e0c9bac.png","1e0c9bac5f2207aa57ee3db526126404"],["/static/media/mhws.e7d01171.png","e7d01171136e8bbc5917d725e07fc4e2"],["/static/media/michael.22f6dd7a.png","22f6dd7aa2524ab6becacefcb13beda8"],["/static/media/osa.62e23bf9.png","62e23bf907beb167e7e0bdb0af0cf387"],["/static/media/osa.b083e00c.png","b083e00ce46941284e4cc1c1d010419e"],["/static/media/paws.8adf655e.png","8adf655ee7ed9b6fccd3b488c25eb6d2"],["/static/media/pledge1CO.95f9e1cb.png","95f9e1cb8cb7b58fb31346327bc4248b"],["/static/media/projectXITE.7aa245ce.png","7aa245ce256ba6071440708047cd114d"],["/static/media/sarahEvelynn.2bdff340.png","2bdff3406fd530e6ce90d045dea1f581"],["/static/media/sarahEvelynn.e0bd562f.png","e0bd562f3980fdef449ad2a34d86b17d"],["/static/media/socialCloudLogo.4a2d102d.png","4a2d102d487bd96674fbc1e870f96342"],["/static/media/tracktivismLogo.1c225991.png","1c225991ff911e6b7e8bdaf04e620506"],["/static/media/twitter.62a0fa68.png","62a0fa68e9e27a3019faf393290bb6b7"],["/static/media/uasCo.01c3766c.png","01c3766c102d62e201578f946b497609"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});