if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-619ac47b.js",revision:null},{url:"assets/index-ef76851d.css",revision:null},{url:"index.html",revision:"48b49213378a828cc8584ffdf85174fc"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"logoEspinaNegra.png",revision:"fc8cd8740743c200ce2844266f105e6a"},{url:"maskable_512.png",revision:"1441265144663062ae78bcc812599057"},{url:"manifest.webmanifest",revision:"b276560deba13590a93c6ca55d925e74"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
