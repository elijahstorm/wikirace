import{S as We,i as Ye,s as Xe,a as Ze,e as T,c as Qe,b as F,g as Y,t as D,d as X,f as V,h as B,j as xe,o as ve,k as et,l as tt,m as nt,n as ye,p as M,q as rt,r as at,u as ot,v as J,w as re,x as G,y as K,z as qe,A as Be,B as W,C as ke,D as Fe,E as st,F as it}from"./chunks/singletons-01d2ecbe.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const n=new URL(r);for(const o of ft){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(o,a,l)=>l(r,a),pt(n),n}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ue=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;fe.delete(o)}return ue(r,e)};const fe=new Map;function ht(r,e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(a+=`[data-hash="${dt(n.body)}"]`);const l=document.querySelector(a);if(l!=null&&l.textContent){const{body:t,...i}=JSON.parse(l.textContent),f=l.getAttribute("data-ttl");return f&&fe.set(e,{body:t,init:i,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,i))}return ue(r,n)}function mt(r,e){const n=fe.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);fe.delete(r)}return ue(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],n=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((l,t,i)=>{const f=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(d)return e.push(d[1]),n.push(d[2]),"(?:/(.*))?";const g=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((y,U)=>{if(U%2){const k=_t.exec(y);if(!k)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,q,z,C]=k;return e.push(z),n.push(C),q?"(.*?)":"([^/]+?)"}return g&&y.includes(".")&&(o=!1),y.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:n}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r,e,n,o){const a={};for(let l=0;l<e.length;l+=1){const t=e[l],i=n[l],f=r[l+1]||"";if(i){const d=o[i];if(!d)throw new Error(`Missing "${i}" param matcher`);if(!d(f))return}a[t]=f}return a}function bt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([i,[f,d,g]])=>{const{pattern:y,names:U,types:k}=gt(i),q={id:i,exec:z=>{const C=y.exec(z);if(C)return yt(C,U,k,o)},errors:[1,...g||[]].map(z=>r[z]),layouts:[0,...d||[]].map(t),leaf:l(f)};return q.errors.length=q.layouts.length=Math.max(q.errors.length,q.layouts.length),q});function l(i){const f=i<0;return f&&(i=~i),[f,r[i]]}function t(i){return i===void 0?i:[a.has(i),r[i]]}}function vt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&J(e.$$.fragment),n=T()},l(t){e&&re(e.$$.fragment,t),n=T()},m(t,i){e&&G(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&2&&(f.form=t[1]),a!==(a=t[0][0])){if(e){Y();const d=e;D(d.$$.fragment,1,0,()=>{K(d,1)}),X()}a?(e=new a(l(t)),J(e.$$.fragment),V(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&K(e,t)}}}function kt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[St]},$$scope:{ctx:t}}}}return a&&(e=new a(l(r))),{c(){e&&J(e.$$.fragment),n=T()},l(t){e&&re(e.$$.fragment,t),n=T()},m(t,i){e&&G(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&1051&&(f.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){Y();const d=e;D(d.$$.fragment,1,0,()=>{K(d,1)}),X()}a?(e=new a(l(t)),J(e.$$.fragment),V(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&K(e,t)}}}function Et(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&J(e.$$.fragment),n=T()},l(t){e&&re(e.$$.fragment,t),n=T()},m(t,i){e&&G(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&2&&(f.form=t[1]),a!==(a=t[0][1])){if(e){Y();const d=e;D(d.$$.fragment,1,0,()=>{K(d,1)}),X()}a?(e=new a(l(t)),J(e.$$.fragment),V(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&K(e,t)}}}function $t(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Rt]},$$scope:{ctx:t}}}}return a&&(e=new a(l(r))),{c(){e&&J(e.$$.fragment),n=T()},l(t){e&&re(e.$$.fragment,t),n=T()},m(t,i){e&&G(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&1043&&(f.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){Y();const d=e;D(d.$$.fragment,1,0,()=>{K(d,1)}),X()}a?(e=new a(l(t)),J(e.$$.fragment),V(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&K(e,t)}}}function Rt(r){let e,n,o;var a=r[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&J(e.$$.fragment),n=T()},l(t){e&&re(e.$$.fragment,t),n=T()},m(t,i){e&&G(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&16&&(f.data=t[4]),i&2&&(f.form=t[1]),a!==(a=t[0][2])){if(e){Y();const d=e;D(d.$$.fragment,1,0,()=>{K(d,1)}),X()}a?(e=new a(l(t)),J(e.$$.fragment),V(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&K(e,t)}}}function St(r){let e,n,o,a;const l=[$t,Et],t=[];function i(f,d){return f[0][2]?0:1}return e=i(r),n=t[e]=l[e](r),{c(){n.c(),o=T()},l(f){n.l(f),o=T()},m(f,d){t[e].m(f,d),F(f,o,d),a=!0},p(f,d){let g=e;e=i(f),e===g?t[e].p(f,d):(Y(),D(t[g],1,1,()=>{t[g]=null}),X(),n=t[e],n?n.p(f,d):(n=t[e]=l[e](f),n.c()),V(n,1),n.m(o.parentNode,o))},i(f){a||(V(n),a=!0)},o(f){D(n),a=!1},d(f){t[e].d(f),f&&B(o)}}}function Je(r){let e,n=r[6]&&Ge(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=nt(e);n&&n.l(a),a.forEach(B),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),M(e,"position","absolute"),M(e,"left","0"),M(e,"top","0"),M(e,"clip","rect(0 0 0 0)"),M(e,"clip-path","inset(50%)"),M(e,"overflow","hidden"),M(e,"white-space","nowrap"),M(e,"width","1px"),M(e,"height","1px")},m(o,a){F(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Ge(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&B(e),n&&n.d()}}}function Ge(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ot(e,n[7])},d(n){n&&B(e)}}}function Ot(r){let e,n,o,a,l;const t=[kt,vt],i=[];function f(g,y){return g[0][1]?0:1}e=f(r),n=i[e]=t[e](r);let d=r[5]&&Je(r);return{c(){n.c(),o=Ze(),d&&d.c(),a=T()},l(g){n.l(g),o=Qe(g),d&&d.l(g),a=T()},m(g,y){i[e].m(g,y),F(g,o,y),d&&d.m(g,y),F(g,a,y),l=!0},p(g,[y]){let U=e;e=f(g),e===U?i[e].p(g,y):(Y(),D(i[U],1,1,()=>{i[U]=null}),X(),n=i[e],n?n.p(g,y):(n=i[e]=t[e](g),n.c()),V(n,1),n.m(o.parentNode,o)),g[5]?d?d.p(g,y):(d=Je(g),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(g){l||(V(n),l=!0)},o(g){D(n),l=!1},d(g){i[e].d(g),g&&B(o),d&&d.d(g),g&&B(a)}}}function Lt(r,e,n){let{stores:o}=e,{page:a}=e,{components:l}=e,{form:t}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(o.page.notify);let g=!1,y=!1,U=null;return ve(()=>{const k=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,U=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,o=k.stores),"page"in k&&n(9,a=k.page),"components"in k&&n(0,l=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,i=k.data_0),"data_1"in k&&n(3,f=k.data_1),"data_2"in k&&n(4,d=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[l,t,i,f,d,g,y,U,o,a]}class It extends We{constructor(e){super(),Ye(this,e,Lt,Ot,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const At=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Nt=function(r,e){return new URL(r,e).href},Ke={},Q=function(e,n,o){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=Nt(a,o),a in Ke)return;Ke[a]=!0;const l=a.endsWith(".css"),t=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":At,l||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),l)return new Promise((f,d)=>{i.addEventListener("load",f),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},jt={},pe=[()=>Q(()=>import("./chunks/0-ed97b284.js"),["chunks/0-ed97b284.js","chunks/_layout-26cd314b.js","components/pages/_layout.svelte-32413357.js","assets/_layout-600a77ce.css","chunks/singletons-01d2ecbe.js","chunks/storage-bdebfa2a.js","chunks/Toasts.svelte_svelte_type_style_lang-d0460072.js","assets/Toasts-908a86e5.css","chunks/stores-64afc9b9.js","chunks/stores-988ac8b7.js","chunks/firestore-ca500ac4.js","chunks/navigation-d93feb42.js"],import.meta.url),()=>Q(()=>import("./chunks/1-ffdb74d1.js"),["chunks/1-ffdb74d1.js","components/pages/_error.svelte-08eb98cc.js","assets/_error-7f4f51b3.css","chunks/singletons-01d2ecbe.js","chunks/stores-64afc9b9.js","chunks/FallbackImage-9f82e13c.js","assets/FallbackImage-da6787e4.css"],import.meta.url),()=>Q(()=>import("./chunks/2-5fe71956.js"),["chunks/2-5fe71956.js","components/pages/play/_layout.svelte-a81bd279.js","assets/_layout-abf5e6bf.css","chunks/singletons-01d2ecbe.js","chunks/storage-bdebfa2a.js","chunks/stores-988ac8b7.js","chunks/RouteViewer-8fd9ba8d.js","assets/RouteViewer-141c26df.css","chunks/navigation-d93feb42.js"],import.meta.url),()=>Q(()=>import("./chunks/3-f6882823.js"),["chunks/3-f6882823.js","components/pages/_page.svelte-d1f839de.js","chunks/singletons-01d2ecbe.js","chunks/OnboardingFlow-9d9df2d5.js","assets/OnboardingFlow-241d7e4a.css","chunks/firestore-ca500ac4.js","chunks/stores-988ac8b7.js","chunks/FallbackImage-9f82e13c.js","assets/FallbackImage-da6787e4.css","chunks/defaults-a8fffd7c.js","chunks/storage-bdebfa2a.js","chunks/stores-64afc9b9.js","chunks/RouteViewer-8fd9ba8d.js","assets/RouteViewer-141c26df.css","chunks/Toasts.svelte_svelte_type_style_lang-d0460072.js","assets/Toasts-908a86e5.css"],import.meta.url),()=>Q(()=>import("./chunks/4-ce6fb75f.js"),["chunks/4-ce6fb75f.js","components/pages/game/_id_/_page.svelte-d25ec50c.js","chunks/singletons-01d2ecbe.js","chunks/OnboardingFlow-9d9df2d5.js","assets/OnboardingFlow-241d7e4a.css","chunks/firestore-ca500ac4.js","chunks/stores-988ac8b7.js","chunks/FallbackImage-9f82e13c.js","assets/FallbackImage-da6787e4.css","chunks/defaults-a8fffd7c.js","chunks/storage-bdebfa2a.js","chunks/stores-64afc9b9.js","chunks/RouteViewer-8fd9ba8d.js","assets/RouteViewer-141c26df.css","chunks/Toasts.svelte_svelte_type_style_lang-d0460072.js","assets/Toasts-908a86e5.css"],import.meta.url),()=>Q(()=>import("./chunks/5-22637769.js"),["chunks/5-22637769.js","components/pages/play/_page.svelte-1f4e8f94.js","assets/_page-b3cdff61.css","chunks/singletons-01d2ecbe.js","chunks/stores-988ac8b7.js","chunks/firestore-ca500ac4.js","chunks/defaults-a8fffd7c.js","chunks/navigation-d93feb42.js"],import.meta.url)],Pt=[],Ut={"":[3],play:[-6,[2]],"game/[id]":[-5]},Tt={handleError:({error:r})=>{console.error(r)}};class Ee{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,n){this.status=e,this.location=n}}const Dt="/__data.json";async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ct=-1,qt=-2,Bt=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){const e=JSON.parse(r);if(typeof e=="number")return a(e);const n=e,o=Array(n.length);function a(l){if(l===Ct)return;if(l===Bt)return NaN;if(l===Ft)return 1/0;if(l===Jt)return-1/0;if(l===Gt)return-0;if(l in o)return o[l];const t=n[l];if(!t||typeof t!="object")o[l]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[l]=new Date(t[1]);break;case"Set":const f=new Set;o[l]=f;for(let y=1;y<t.length;y+=1)f.add(a(t[y]));break;case"Map":const d=new Map;o[l]=d;for(let y=1;y<t.length;y+=2)d.set(a(t[y]),a(t[y+1]));break;case"RegExp":o[l]=new RegExp(t[1],t[2]);break;case"Object":o[l]=Object(t[1]);break;case"BigInt":o[l]=BigInt(t[1]);break;case"null":const g=Object.create(null);o[l]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=a(t[y+1]);break}else{const i=new Array(t.length);o[l]=i;for(let f=0;f<t.length;f+=1){const d=t[f];d!==qt&&(i[f]=a(d))}}else{const i={};o[l]=i;for(const f in t){const d=t[f];i[f]=a(d)}}return o[l]}return a(0)}const He="sveltekit:scroll",H="sveltekit:index",ie=bt(pe,Pt,Ut,jt),$e=pe[0],Re=pe[1];$e();Re();let ne={};try{ne=JSON.parse(sessionStorage[He])}catch{}function be(r){ne[r]=ke()}function zt({target:r,base:e,trailing_slash:n}){var De;const o=[];let a=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},i=!1,f=!1,d=!0,g=!1,y=!1,U,k=(De=history.state)==null?void 0:De[H];k||(k=Date.now(),history.replaceState({...history.state,[H]:k},"",location.href));const q=ne[k];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let z=!1,C,Se,ae;async function Oe(){ae=ae||Promise.resolve(),await ae,ae=null;const s=new URL(location.href),p=_e(s,!0);a=null,await Ie(p,s,[])}async function de(s,{noscroll:p=!1,replaceState:h=!1,keepfocus:c=!1,state:u={}},m,_){return typeof s=="string"&&(s=new URL(s,qe(document))),ge({url:s,scroll:p?ke():null,keepfocus:c,redirect_chain:m,details:{state:u,replaceState:h},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(s){const p=_e(s,!1);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a={id:p.id,promise:je(p)},a.promise}async function Ie(s,p,h,c,u={},m){var $,E;Se=u;let _=s&&await je(s);if(_||(_=await Te(p,null,te(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(s==null?void 0:s.url)||p,Se!==u)return!1;if(_.type==="redirect")if(h.length>10||h.includes(p.pathname))_=await oe({status:500,error:te(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return de(new URL(_.location,p).href,{},[...h,p.pathname],u),!1;else((E=($=_.props)==null?void 0:$.page)==null?void 0:E.status)>=400&&await W.updated.check()&&await se(p);if(o.length=0,y=!1,g=!0,c&&c.details){const{details:b}=c,v=b.replaceState?0:1;b.state[H]=k+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",p)}if(a=null,f){t=_.state,_.props.page&&(_.props.page.url=p);const b=ce();U.$set(_.props),b()}else Ae(_);if(c){const{scroll:b,keepfocus:v}=c;if(!v){const S=document.body,L=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),L!==null?S.setAttribute("tabindex",L):S.removeAttribute("tabindex")}if(await Fe(),d){const S=p.hash&&document.getElementById(p.hash.slice(1));b?scrollTo(b.x,b.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Fe();d=!0,_.props.page&&(C=_.props.page),m&&m(),g=!1}function Ae(s){var u,m;t=s.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),C=s.props.page;const h=ce();U=new It({target:r,props:{...s.props,stores:W},hydrate:!0}),h();const c={from:null,to:le("to",{params:t.params,routeId:(m=(u=t.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(_=>_(c)),f=!0}async function x({url:s,params:p,branch:h,status:c,error:u,route:m,form:_}){var L;const $=h.filter(Boolean),E={type:"loaded",state:{url:s,params:p,branch:h,error:u,route:m},props:{components:$.map(I=>I.node.component)}};_!==void 0&&(E.props.form=_);let b={},v=!C;for(let I=0;I<$.length;I+=1){const j=$[I];b={...b,...j.data},(v||!t.branch.some(P=>P===j))&&(E.props[`data_${I}`]=b,v=v||Object.keys((L=j.data)!=null?L:{}).length>0)}if(v||(v=Object.keys(C.data).length!==Object.keys(b).length),!t.url||s.href!==t.url.href||t.error!==u||_!==void 0||v){E.props.page={error:u,params:p,routeId:m&&m.id,status:c,url:s,form:_,data:v?b:C.data};const I=(j,P)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${P}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return E}async function he({loader:s,parent:p,url:h,params:c,routeId:u,server_data_node:m}){var b,v,S,L,I;let _=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await s();if((b=E.shared)!=null&&b.load){let j=function(...O){for(const w of O){const{href:R}=new URL(w,h);$.dependencies.add(R)}};const P={routeId:u,params:new Proxy(c,{get:(O,w)=>($.params.add(w),O[w])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:ut(h,()=>{$.url=!0}),async fetch(O,w){let R;O instanceof Request?(R=O.url,w={body:O.method==="GET"||O.method==="HEAD"?void 0:await O.blob(),cache:O.cache,credentials:O.credentials,headers:O.headers,integrity:O.integrity,keepalive:O.keepalive,method:O.method,mode:O.mode,redirect:O.redirect,referrer:O.referrer,referrerPolicy:O.referrerPolicy,signal:O.signal,...w}):R=O;const N=new URL(R,h).href;return j(N),f?mt(N,w):ht(R,N,w)},setHeaders:()=>{},depends:j,parent(){return $.parent=!0,p()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(S=await E.shared.load.call(null,P))!=null?S:null,_=_?await Vt(_):null}return{node:E,loader:s,server:m,shared:(L=E.shared)!=null&&L.load?{type:"data",data:_,uses:$}:null,data:(I=_!=null?_:m==null?void 0:m.data)!=null?I:null}}function Ne(s,p,h,c){if(y)return!0;if(!h)return!1;if(h.parent&&p||h.url&&s)return!0;for(const u of h.params)if(c[u]!==t.params[u])return!0;for(const u of h.dependencies)if(o.some(m=>m(new URL(u))))return!0;return!1}function me(s,p){var h,c;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((h=s.uses.dependencies)!=null?h:[]),params:new Set((c=s.uses.params)!=null?c:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&p!=null?p:null}async function je({id:s,invalidating:p,url:h,params:c,route:u}){var O;if((a==null?void 0:a.id)===s)return a.promise;const{errors:m,layouts:_,leaf:$}=u,E=[..._,$];m.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=t.url?s!==t.url.pathname+t.url.search:!1,S=E.reduce((w,R,N)=>{var ee;const A=t.branch[N],Z=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Ne(v,w.some(Boolean),(ee=A.server)==null?void 0:ee.uses,c));return w.push(Z),w},[]);if(S.some(Boolean)){try{b=await Me(h,S)}catch(w){return oe({status:500,error:te(w,{url:h,params:c,routeId:u.id}),url:h,routeId:u.id})}if(b.type==="redirect")return b}const L=b==null?void 0:b.nodes;let I=!1;const j=E.map(async(w,R)=>{var ee;if(!w)return;const N=t.branch[R],A=L==null?void 0:L[R];if((!A||A.type==="skip")&&w[1]===(N==null?void 0:N.loader)&&!Ne(v,I,(ee=N.shared)==null?void 0:ee.uses,c))return N;if(I=!0,(A==null?void 0:A.type)==="error")throw A;return he({loader:w[1],url:h,params:c,routeId:u.id,parent:async()=>{var Ce;const Ve={};for(let we=0;we<R;we+=1)Object.assign(Ve,(Ce=await j[we])==null?void 0:Ce.data);return Ve},server_data_node:me(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const w of j)w.catch(()=>{});const P=[];for(let w=0;w<E.length;w+=1)if(E[w])try{P.push(await j[w])}catch(R){if(R instanceof ze)return{type:"redirect",location:R.location};let N=500,A;L!=null&&L.includes(R)?(N=(O=R.status)!=null?O:N,A=R.error):R instanceof Ee?(N=R.status,A=R.body):A=te(R,{params:c,url:h,routeId:u.id});const Z=await Pe(w,P,m);return Z?await x({url:h,params:c,branch:P.slice(0,Z.idx).concat(Z.node),status:N,error:A,route:u}):await Te(h,u.id,A,N)}else P.push(void 0);return await x({url:h,params:c,branch:P,status:200,error:null,route:u,form:p?void 0:null})}async function Pe(s,p,h){for(;s--;)if(h[s]){let c=s;for(;!p[c];)c-=1;try{return{idx:c+1,node:{node:await h[s](),loader:h[s],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:s,error:p,url:h,routeId:c}){var b;const u={},m=await $e();let _=null;if(m.server)try{const v=await Me(h,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(b=v.nodes[0])!=null?b:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||i)&&await se(h)}const $=await he({loader:$e,url:h,params:u,routeId:c,parent:()=>Promise.resolve({}),server_data_node:me(_)}),E={node:await Re(),loader:Re,shared:null,server:null,data:null};return await x({url:h,params:u,branch:[$,E],status:s,error:p,route:null})}function _e(s,p){if(Ue(s))return;const h=decodeURI(s.pathname.slice(e.length)||"/");for(const c of ie){const u=c.exec(h);if(u){const m=new URL(s.origin+lt(s.pathname,n)+s.search+s.hash);return{id:m.pathname+m.search,invalidating:p,route:c,params:ct(u),url:m}}}}function Ue(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}async function ge({url:s,scroll:p,keepfocus:h,redirect_chain:c,details:u,type:m,delta:_,nav_token:$,accepted:E,blocked:b}){var j,P,O,w;let v=!1;const S=_e(s,!1),L={from:le("from",{params:t.params,routeId:(P=(j=t.route)==null?void 0:j.id)!=null?P:null,url:t.url}),to:le("to",{params:(O=S==null?void 0:S.params)!=null?O:null,routeId:(w=S==null?void 0:S.route.id)!=null?w:null,url:s}),type:m};_!==void 0&&(L.delta=_);const I={...L,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R(I)),v){b();return}be(k),E(),f&&W.navigating.set(L),await Ie(S,s,c,{scroll:p,keepfocus:h,details:u},$,()=>{l.after_navigate.forEach(R=>R(L)),W.navigating.set(null)})}async function Te(s,p,h,c){return s.origin===location.origin&&s.pathname===location.pathname&&!i?await oe({status:c,error:h,url:s,routeId:p}):await se(s)}function se(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{ve(()=>(l.after_navigate.push(s),()=>{const p=l.after_navigate.indexOf(s);l.after_navigate.splice(p,1)}))},before_navigate:s=>{ve(()=>(l.before_navigate.push(s),()=>{const p=l.before_navigate.indexOf(s);l.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(s,p={})=>de(s,p,[]),invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:p}=new URL(s,location.href);o.push(h=>h.href===p)}return Oe()},invalidateAll:()=>(y=!0,Oe()),prefetch:async s=>{const p=new URL(s,qe(document));await Le(p)},prefetch_routes:async s=>{const h=(s?ie.filter(c=>s.some(u=>c.exec(u))):ie).map(c=>Promise.all([...c.layouts,c.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async s=>{if(s.type==="error"){const p=new URL(location.href),{branch:h,route:c}=t;if(!c)return;const u=await Pe(t.branch.length,h,c.errors);if(u){const m=await x({url:p,params:t.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:s.error,route:c});t=m.state;const _=ce();U.$set(m.props),_()}}else if(s.type==="redirect")de(s.location,{},[]);else{const p={form:s.data,page:{...C,form:s.data,status:s.status}},h=ce();U.$set(p),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{var _,$;let u=!1;const m={from:le("from",{params:t.params,routeId:($=(_=t.route)==null?void 0:_.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};l.before_navigate.forEach(E=>E(m)),u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(k);try{sessionStorage[He]=JSON.stringify(ne)}catch{}}});const s=c=>{const{url:u,options:m}=Be(c);if(u&&m.prefetch){if(Ue(u))return;Le(u)}};let p;const h=c=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=c.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",c=>{if(c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const{a:u,url:m,options:_}=Be(c);if(!u||!m)return;const $=u instanceof SVGAElement;if(!$&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||E.includes("external")||_.reload||($?u.target.baseVal:u.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){z=!0,be(k),t.url=m,W.page.set({...C,url:m}),W.page.notify();return}ge({url:m,scroll:_.noscroll?ke():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault(),type:"link"})}),addEventListener("popstate",c=>{if(c.state){if(c.state[H]===k)return;const u=c.state[H]-k;ge({url:new URL(location.href),scroll:ne[c.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{k=c.state[H]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[H]:++k},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&W.navigating.set(null)})},_hydrate:async({status:s,error:p,node_ids:h,params:c,routeId:u,data:m,form:_})=>{var b;i=!0;const $=new URL(location.href);let E;try{const v=h.map(async(S,L)=>{const I=m[L];return he({loader:pe[S],url:$,params:c,routeId:u,parent:async()=>{const j={};for(let P=0;P<L;P+=1)Object.assign(j,(await v[P]).data);return j},server_data_node:me(I)})});E=await x({url:$,params:c,branch:await Promise.all(v),status:s,error:p,form:_,route:(b=ie.find(S=>S.id===u))!=null?b:null})}catch(v){if(v instanceof ze){await se(new URL(v.location,location.href));return}E=await oe({status:v instanceof Ee?v.status:500,error:te(v,{url:$,params:c,routeId:u}),url:$,routeId:u})}Ae(E)}}}async function Me(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Dt;const o=await ue(n.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),a=await o.text();if(!o.ok)throw new Error(JSON.parse(a));return Kt(a)}function te(r,e){var n;return r instanceof Ee?r.body:(n=Tt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Mt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(r,e){for(const n of Mt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function ce(){return()=>{}}async function Wt({env:r,hydrate:e,paths:n,target:o,trailing_slash:a}){st(n);const l=zt({target:o,base:n.base,trailing_slash:a});it({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Wt as start};
