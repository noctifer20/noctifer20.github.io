(()=>{"use strict";var e,r,t,o,a,n={},s={};function i(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={id:e,loaded:!1,exports:{}};return n[e](t,t.exports,i),t.loaded=!0,t.exports}i.m=n,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(a,n,s)=>{var i;s&&((i=[]).d=1);var p,c,l,u=new Set,f=a.exports,b=new Promise(((e,r)=>{l=r,c=e}));b[r]=f,b[e]=e=>(i&&e(i),u.forEach(e),b.catch((e=>{}))),a.exports=b,n((a=>{var n;p=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var n=[];n.d=0,a.then((e=>{s[r]=e,o(n)}),(e=>{s[t]=e,o(n)}));var s={};return s[e]=e=>e(n),s}}var i={};return i[e]=e=>{},i[r]=a,i})))(a);var s=()=>p.map((e=>{if(e[t])throw e[t];return e[r]})),c=new Promise((r=>{(n=()=>r(s)).r=0;var t=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(n.r++,e.push(n)));p.map((r=>r[e](t)))}));return n.r?c:s()}),(e=>(e?l(b[t]=e):c(f),o(i)))),i&&(i.d=0)},a=[],i.O=(e,r,t,o)=>{if(!r){var n=1/0;for(l=0;l<a.length;l++){for(var[r,t,o]=a[l],s=!0,p=0;p<r.length;p++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[p])))?r.splice(p--,1):(s=!1,o<n&&(n=o));if(s){a.splice(l--,1);var c=t();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=a.length;l>0&&a[l-1][2]>o;l--)a[l]=a[l-1];a[l]=[r,t,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.v=(e,r,t,o)=>{var a=fetch(i.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(a,o).then((r=>Object.assign(e,r.instance.exports))):a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,o))).then((r=>Object.assign(e,r.instance.exports)))},(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={666:0};i.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[n,s,p]=t,c=0;if(n.some((r=>0!==e[r]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(p)var l=p(i)}for(r&&r(t);c<n.length;c++)a=n[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0})();