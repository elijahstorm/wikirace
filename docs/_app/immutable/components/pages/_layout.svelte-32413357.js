import{S as K,i as B,s as H,k as b,l as k,m as L,h as p,n as d,G as P,b as C,H as z,I as tt,J as U,K as Z,L as I,a as j,v as M,c as q,w as R,x as N,M as et,g as V,t as w,y as T,d as O,f as v,N as st,O as lt,P as nt,e as J,Q as D,R as at,T as it,U as ot,V as rt,W as ft,X as ct,Y as ut,Z as ht,_ as mt,o as _t,$ as dt,a0 as G,a1 as x}from"../../chunks/singletons-01d2ecbe.js";import{c as gt,f as pt,a as vt,g as yt,b as bt}from"../../chunks/storage-bdebfa2a.js";import{r as kt,t as wt}from"../../chunks/Toasts.svelte_svelte_type_style_lang-d0460072.js";import{n as It}from"../../chunks/stores-64afc9b9.js";import{m as A,g as F,l as Q}from"../../chunks/stores-988ac8b7.js";import{s as Lt}from"../../chunks/firestore-ca500ac4.js";import{g as Ct}from"../../chunks/navigation-d93feb42.js";function Et(f){let t,e;return{c(){t=b("div"),this.h()},l(s){t=k(s,"DIV",{class:!0,style:!0}),L(t).forEach(p),this.h()},h(){d(t,"class",e=P(f[0])+" svelte-1qtja1k"),d(t,"style",f[1])},m(s,l){C(s,t,l)},p(s,[l]){l&1&&e!==(e=P(s[0])+" svelte-1qtja1k")&&d(t,"class",e)},i:z,o:z,d(s){s&&p(t)}}}function St(f,t,e){let{loadingStyle:s="circle"}=t,{size:l=3}=t,{left:i=0}=t,{top:n=0}=t,{right:o=0}=t,{bototm:r=0}=t,u=s=="dots"?"10px":`${l-.9}rem`;const h=`
		width: ${u};
		height: ${u};
		left: ${i}rem;
		top: ${n}rem;
		right: ${o}rem;
		bototm: ${r}rem;
	`;return f.$$set=c=>{"loadingStyle"in c&&e(0,s=c.loadingStyle),"size"in c&&e(2,l=c.size),"left"in c&&e(3,i=c.left),"top"in c&&e(4,n=c.top),"right"in c&&e(5,o=c.right),"bototm"in c&&e(6,r=c.bototm)},[s,h,l,i,n,o,r]}class Mt extends K{constructor(t){super(),B(this,t,St,Et,H,{loadingStyle:0,size:2,left:3,top:4,right:5,bototm:6})}}function Nt(f,{from:t,to:e},s={}){const l=getComputedStyle(f),i=l.transform==="none"?"":l.transform,[n,o]=l.transformOrigin.split(" ").map(parseFloat),r=t.left+t.width*n/e.width-(e.left+n),u=t.top+t.height*o/e.height-(e.top+o),{delay:h=0,duration:c=a=>Math.sqrt(a)*120,easing:m=gt}=s;return{delay:h,duration:tt(c)?c(Math.sqrt(r*r+u*u)):c,easing:m,css:(a,_)=>{const g=_*r,y=_*u,S=a+_*t.width/e.width,E=a+_*t.height/e.height;return`transform: ${i} translate(${g}px, ${y}px) scale(${S}, ${E});`}}}function Tt(f){let t,e,s,l,i;return{c(){t=U("svg"),e=U("path"),l=U("path"),this.h()},l(n){t=Z(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var o=L(t);e=Z(o,"path",{d:!0,fill:!0}),L(e).forEach(p),l=Z(o,"path",{d:!0,fill:!0}),L(l).forEach(p),o.forEach(p),this.h()},h(){d(e,"d","M0.571429 0.571436C0.255838 0.887027 0.255838 1.3987 0.571429 1.71429L6.28571 7.42858C6.6013 7.74417 7.11298 7.74417 7.42857 7.42858C7.74416 7.11299 7.74416 6.60131 7.42857 6.28572L1.71429 0.571437C1.3987 0.255845 0.887021 0.255845 0.571429 0.571436Z"),d(e,"fill",s=`var(${f[0]}, var(--as-toast-color, black))`),d(l,"d","M7.42857 0.57141C7.11298 0.255819 6.60131 0.255819 6.28571 0.57141L0.571431 6.28569C0.25584 6.60128 0.255839 7.11296 0.57143 7.42855C0.887021 7.74414 1.3987 7.74414 1.71429 7.42855L7.42857 1.71427C7.74416 1.39868 7.74416 0.887002 7.42857 0.57141Z"),d(l,"fill",i=`var(${f[0]}, var(--as-toast-color, black))`),d(t,"width","8"),d(t,"height","8"),d(t,"viewBox","0 0 8 8"),d(t,"fill","none"),d(t,"xmlns","http://www.w3.org/2000/svg")},m(n,o){C(n,t,o),I(t,e),I(t,l)},p(n,[o]){o&1&&s!==(s=`var(${n[0]}, var(--as-toast-color, black))`)&&d(e,"fill",s),o&1&&i!==(i=`var(${n[0]}, var(--as-toast-color, black))`)&&d(l,"fill",i)},i:z,o:z,d(n){n&&p(t)}}}function Dt(f,t,e){let s,{type:l="info"}=t;return f.$$set=i=>{"type"in i&&e(1,l=i.type)},f.$$.update=()=>{f.$$.dirty&2&&e(0,s=`--as-toast-${l}-color`)},[s,l]}class jt extends K{constructor(t){super(),B(this,t,Dt,Tt,H,{type:1})}}function qt(f){let t,e,s=f[0].msg+"",l,i,n,o,r,u,h,c,m;var a=f[1];function _(g){return{props:{type:g[0].type}}}return a&&(n=new a(_(f))),{c(){t=b("div"),e=b("span"),l=j(),i=b("button"),n&&M(n.$$.fragment),this.h()},l(g){t=k(g,"DIV",{class:!0});var y=L(t);e=k(y,"SPAN",{role:!0});var S=L(e);S.forEach(p),l=q(y),i=k(y,"BUTTON",{"aria-label":!0,class:!0});var E=L(i);n&&R(n.$$.fragment,E),E.forEach(p),y.forEach(p),this.h()},h(){d(e,"role","status"),d(i,"aria-label","Cancel Button"),d(i,"class","svelte-1ft637d"),d(t,"class",o=P(f[0].type)+" svelte-1ft637d")},m(g,y){C(g,t,y),I(t,e),e.innerHTML=s,I(t,l),I(t,i),n&&N(n,i,null),h=!0,c||(m=et(i,"click",f[2]),c=!0)},p(g,[y]){(!h||y&1)&&s!==(s=g[0].msg+"")&&(e.innerHTML=s);const S={};if(y&1&&(S.type=g[0].type),a!==(a=g[1])){if(n){V();const E=n;w(E.$$.fragment,1,0,()=>{T(E,1)}),O()}a?(n=new a(_(g)),M(n.$$.fragment),v(n.$$.fragment,1),N(n,i,null)):n=null}else a&&n.$set(S);(!h||y&1&&o!==(o=P(g[0].type)+" svelte-1ft637d"))&&d(t,"class",o)},i(g){h||(n&&v(n.$$.fragment,g),st(()=>{u&&u.end(1),r=lt(t,pt,{y:-600,duration:400}),r.start()}),h=!0)},o(g){n&&w(n.$$.fragment,g),r&&r.invalidate(),u=nt(t,vt,{}),h=!1},d(g){g&&p(t),n&&T(n),g&&u&&u.end(),c=!1,m()}}}function zt(f,t,e){let{toast:s}=t,{cancelIcon:l}=t;function i(){kt(s.id)}return f.$$set=n=>{"toast"in n&&e(0,s=n.toast),"cancelIcon"in n&&e(1,l=n.cancelIcon)},[s,l,i]}class Kt extends K{constructor(t){super(),B(this,t,zt,qt,H,{toast:0,cancelIcon:1})}}function W(f,t,e){const s=f.slice();return s[3]=t[e],s}function X(f){let t,e=[],s=new Map,l,i=f[2];const n=o=>o[3].id;for(let o=0;o<i.length;o+=1){let r=W(f,i,o),u=n(r);s.set(u,e[o]=Y(u,r))}return{c(){t=b("ul");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=k(o,"UL",{class:!0});var r=L(t);for(let u=0;u<e.length;u+=1)e[u].l(r);r.forEach(p),this.h()},h(){d(t,"class","svelte-19uzrsi")},m(o,r){C(o,t,r);for(let u=0;u<e.length;u+=1)e[u].m(t,null);l=!0},p(o,r){if(r&7){i=o[2],V();for(let u=0;u<e.length;u+=1)e[u].r();e=at(e,r,n,1,o,i,s,t,it,Y,null,W);for(let u=0;u<e.length;u+=1)e[u].a();O()}},i(o){if(!l){for(let r=0;r<i.length;r+=1)v(e[r]);l=!0}},o(o){for(let r=0;r<e.length;r+=1)w(e[r]);l=!1},d(o){o&&p(t);for(let r=0;r<e.length;r+=1)e[r].d()}}}function Y(f,t){let e,s,l,i,n=z,o;var r=t[0];function u(h){return{props:{toast:h[3],cancelIcon:h[1]}}}return r&&(s=new r(u(t))),{key:f,first:null,c(){e=b("li"),s&&M(s.$$.fragment),l=j(),this.h()},l(h){e=k(h,"LI",{});var c=L(e);s&&R(s.$$.fragment,c),l=q(c),c.forEach(p),this.h()},h(){this.first=e},m(h,c){C(h,e,c),s&&N(s,e,null),I(e,l),o=!0},p(h,c){t=h;const m={};if(c&4&&(m.toast=t[3]),c&2&&(m.cancelIcon=t[1]),r!==(r=t[0])){if(s){V();const a=s;w(a.$$.fragment,1,0,()=>{T(a,1)}),O()}r?(s=new r(u(t)),M(s.$$.fragment),v(s.$$.fragment,1),N(s,e,l)):s=null}else r&&s.$set(m)},r(){i=e.getBoundingClientRect()},f(){ot(e),n()},a(){n(),n=rt(e,i,Nt,{})},i(h){o||(s&&v(s.$$.fragment,h),o=!0)},o(h){s&&w(s.$$.fragment,h),o=!1},d(h){h&&p(e),s&&T(s)}}}function Bt(f){let t,e,s=f[2].length&&X(f);return{c(){s&&s.c(),t=J()},l(l){s&&s.l(l),t=J()},m(l,i){s&&s.m(l,i),C(l,t,i),e=!0},p(l,[i]){l[2].length?s?(s.p(l,i),i&4&&v(s,1)):(s=X(l),s.c(),v(s,1),s.m(t.parentNode,t)):s&&(V(),w(s,1,1,()=>{s=null}),O())},i(l){e||(v(s),e=!0)},o(l){w(s),e=!1},d(l){s&&s.d(l),l&&p(t)}}}function Ht(f,t,e){let s;D(f,wt,n=>e(2,s=n));let{toastComponent:l=Kt}=t,{cancelIcon:i=jt}=t;return f.$$set=n=>{"toastComponent"in n&&e(0,l=n.toastComponent),"cancelIcon"in n&&e(1,i=n.cancelIcon)},[l,i,s]}class Vt extends K{constructor(t){super(),B(this,t,Ht,Bt,H,{toastComponent:0,cancelIcon:1})}}function $(f){let t,e,s,l;return s=new Mt({}),{c(){t=b("div"),e=b("div"),M(s.$$.fragment),this.h()},l(i){t=k(i,"DIV",{class:!0});var n=L(t);e=k(n,"DIV",{class:!0});var o=L(e);R(s.$$.fragment,o),o.forEach(p),n.forEach(p),this.h()},h(){d(e,"class","loading-box svelte-o0n2j9"),d(t,"class","svelte-o0n2j9")},m(i,n){C(i,t,n),I(t,e),N(s,e,null),l=!0},i(i){l||(v(s.$$.fragment,i),l=!0)},o(i){w(s.$$.fragment,i),l=!1},d(i){i&&p(t),T(s)}}}function Ot(f){let t,e,s,l,i,n,o,r,u;const h=f[8].default,c=ft(h,f,f[7],null);let m=f[0]&&$();return r=new Vt({}),{c(){t=b("link"),e=b("link"),s=b("link"),l=b("link"),i=j(),c&&c.c(),n=j(),m&&m.c(),o=j(),M(r.$$.fragment),this.h()},l(a){const _=ct('[data-svelte="svelte-1jb9iai"]',document.head);t=k(_,"LINK",{rel:!0,href:!0}),e=k(_,"LINK",{rel:!0,href:!0}),s=k(_,"LINK",{rel:!0,href:!0,crossorigin:!0}),l=k(_,"LINK",{href:!0,rel:!0}),_.forEach(p),i=q(a),c&&c.l(a),n=q(a),m&&m.l(a),o=q(a),R(r.$$.fragment,a),this.h()},h(){d(t,"rel","stylesheet"),d(t,"href",x+"/app.css"),d(e,"rel","preconnect"),d(e,"href","https://fonts.googleapis.com"),d(s,"rel","preconnect"),d(s,"href","https://fonts.gstatic.com"),d(s,"crossorigin",""),d(l,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,500&display=swap"),d(l,"rel","stylesheet")},m(a,_){I(document.head,t),I(document.head,e),I(document.head,s),I(document.head,l),C(a,i,_),c&&c.m(a,_),C(a,n,_),m&&m.m(a,_),C(a,o,_),N(r,a,_),u=!0},p(a,[_]){c&&c.p&&(!u||_&128)&&ut(c,h,a,a[7],u?mt(h,a[7],_,null):ht(a[7]),null),a[0]?m?_&1&&v(m,1):(m=$(),m.c(),v(m,1),m.m(o.parentNode,o)):m&&(V(),w(m,1,1,()=>{m=null}),O())},i(a){u||(v(c,a),v(m),v(r.$$.fragment,a),u=!0)},o(a){w(c,a),w(m),w(r.$$.fragment,a),u=!1},d(a){p(t),p(e),p(s),p(l),a&&p(i),c&&c.d(a),a&&p(n),m&&m.d(a),a&&p(o),T(r,a)}}}function Pt(f,t,e){let s,l,i,n;D(f,Q,a=>e(9,s=a)),D(f,A,a=>e(5,l=a)),D(f,F,a=>e(6,i=a)),D(f,It,a=>e(0,n=a));let{$$slots:o={},$$scope:r}=t,u,h=!1,c,m;return _t(()=>{e(2,h=!0)}),dt(()=>{u&&u()}),A.subscribe(a=>e(3,c=a)),F.subscribe(a=>e(4,m=a)),f.$$set=a=>{"$$scope"in a&&e(7,r=a.$$scope)},f.$$.update=()=>{var a;if(f.$$.dirty&126&&h&&((!c.uid||c.uid==="")&&e(3,c=yt()),c.uid&&c.uid!==""&&(G(A,l=c,l),bt(l)),!u&&l.gameId&&l.gameId!==""&&e(1,u=Lt({type:"game",id:l.gameId},_=>{const g=_.data();!_.data()||G(F,i={...i,id:l.gameId,route:g.route,state:g.state,players:g.players},i)})),m.state==="started")){const _=(a=m.players.find(g=>l.uid===g.uid))==null?void 0:a.progress.linkHistory;_&&_.length!==0&&(G(Q,s=_[_.length-1].url,s),Ct(`${x}/play`))}},[n,u,h,c,m,l,i,r,o]}class Qt extends K{constructor(t){super(),B(this,t,Pt,Ot,H,{})}}export{Qt as default};