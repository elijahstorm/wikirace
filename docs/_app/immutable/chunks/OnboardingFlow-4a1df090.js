import{S as K,i as Z,s as x,k as D,q as A,a as B,l as T,m as S,r as L,h as m,c as O,n as I,ac as Y,b as E,L as C,M as W,u as ae,H as R,ag as fe,ah as Se,v as M,w as F,p as _e,x as U,g as re,R as de,ae as me,d as ne,ai as Ve,f as P,t as N,y as H,aj as se,Q as z,a0 as Q,ad as Pe,N as te,O as le,ak as pe,o as he,a1 as ue,P as oe}from"./singletons-e95a346c.js";import{u as Ne,a as ce,b as Fe}from"./firestore-75d3ea0e.js";import{m as X,g as j}from"./stores-9156ed11.js";import{I as qe,C as Ue,F as He}from"./FallbackImage-35999f5a.js";import{d as Be}from"./defaults-a8fffd7c.js";import{a as Oe,f as J}from"./index-b3a6f5a4.js";import{p as Ge}from"./stores-7f6bd896.js";import{R as Re,P as Ae}from"./RouteViewer-21516cc2.js";import{a as We}from"./Toasts.svelte_svelte_type_style_lang-bcb21be1.js";function ge(a){let e;return{c(){e=D("div"),this.h()},l(t){e=T(t,"DIV",{class:!0,style:!0}),S(e).forEach(m),this.h()},h(){I(e,"class","input-icon icon-username svelte-1a22rmd"),I(e,"style",a[7])},m(t,l){E(t,e,l)},p(t,l){l&128&&I(e,"style",t[7])},d(t){t&&m(e)}}}function ze(a){let e,t,l,r,s,n,i,u,f=a[4]!=""&&ge(a);return{c(){e=D("div"),t=D("label"),l=A(a[0]),r=B(),f&&f.c(),s=B(),n=D("input"),this.h()},l(c){e=T(c,"DIV",{class:!0});var p=S(e);t=T(p,"LABEL",{for:!0,class:!0});var _=S(t);l=L(_,a[0]),_.forEach(m),r=O(p),f&&f.l(p),s=O(p),n=T(p,"INPUT",{id:!0,name:!0,placeholder:!0,type:!0,class:!0}),p.forEach(m),this.h()},h(){I(t,"for",a[1]),I(t,"class","svelte-1a22rmd"),I(n,"id",a[2]),I(n,"name",a[1]),I(n,"placeholder",a[0]),I(n,"type",a[3]),n.required=a[5],I(n,"class","svelte-1a22rmd"),Y(n,"push",a[4]!=""),Y(n,"attempted",a[6]),I(e,"class","input-container svelte-1a22rmd")},m(c,p){E(c,e,p),C(e,t),C(t,l),C(e,r),f&&f.m(e,null),C(e,s),C(e,n),i||(u=W(n,"input",a[8]),i=!0)},p(c,[p]){p&1&&ae(l,c[0]),p&2&&I(t,"for",c[1]),c[4]!=""?f?f.p(c,p):(f=ge(c),f.c(),f.m(e,s)):f&&(f.d(1),f=null),p&4&&I(n,"id",c[2]),p&2&&I(n,"name",c[1]),p&1&&I(n,"placeholder",c[0]),p&8&&I(n,"type",c[3]),p&32&&(n.required=c[5]),p&16&&Y(n,"push",c[4]!=""),p&64&&Y(n,"attempted",c[6])},i:R,o:R,d(c){c&&m(e),f&&f.d(),i=!1,u()}}}function je(a,e,t){let l,{text:r}=e,{name:s}=e,{id:n}=e,{type:i}=e,{icon:u=""}=e,{required:f=!1}=e,{attempted:c=!1}=e,{value:p=""}=e;const _=h=>{var $,v;t(9,p=(v=($=h.target)==null?void 0:$.value)!=null?v:"")};return a.$$set=h=>{"text"in h&&t(0,r=h.text),"name"in h&&t(1,s=h.name),"id"in h&&t(2,n=h.id),"type"in h&&t(3,i=h.type),"icon"in h&&t(4,u=h.icon),"required"in h&&t(5,f=h.required),"attempted"in h&&t(6,c=h.attempted),"value"in h&&t(9,p=h.value)},a.$$.update=()=>{a.$$.dirty&16&&t(7,l=`background: url(${u}); background-size: 1.5rem auto; background-repeat: repeat;`)},[r,s,n,i,u,f,c,l,_,p]}class Le extends K{constructor(e){super(),Z(this,e,je,ze,x,{text:0,name:1,id:2,type:3,icon:4,required:5,attempted:6,value:9})}}function ve(a,e,t){const l=a.slice();return l[11]=e[t],l}function ke(a){let e,t;return e=new qe({props:{icon:"akar-icons:check",color:"var(--bg)"}}),{c(){M(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){U(e,l,r),t=!0},i(l){t||(P(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){H(e,l)}}}function ye(a,e){let t,l,r,s,n,i=e[11]===e[0]&&ke();function u(){return e[6](e[11])}function f(){return e[7](e[11])}return{key:a,first:null,c(){t=D("div"),i&&i.c(),l=B(),this.h()},l(c){t=T(c,"DIV",{class:!0,style:!0});var p=S(t);i&&i.l(p),l=O(p),p.forEach(m),this.h()},h(){I(t,"class","color svelte-wrl5lk"),I(t,"style",`background: ${e[11]};`),this.first=t},m(c,p){E(c,t,p),i&&i.m(t,null),C(t,l),r=!0,s||(n=[W(t,"click",u),W(t,"keydown",f)],s=!0)},p(c,p){e=c,e[11]===e[0]?i?p&1&&P(i,1):(i=ke(),i.c(),P(i,1),i.m(t,l)):i&&(re(),N(i,1,1,()=>{i=null}),ne())},i(c){r||(P(i),r=!0)},o(c){N(i),r=!1},d(c){c&&m(t),i&&i.d(),s=!1,se(n)}}}function Je(a){let e,t,l,r,s,n,i=[],u=new Map,f,c,p,_,h,$,v,k,d,y=a[2];const b=o=>o[11];for(let o=0;o<y.length;o+=1){let g=ve(a,y,o),q=b(g);u.set(q,i[o]=ye(q,g))}function w(o){a[8](o)}let V={text:"Or choose a name",name:"name",id:"name",type:"name"};return a[1]!==void 0&&(V.value=a[1]),c=new Le({props:V}),fe.push(()=>Se(c,"value",w)),{c(){e=D("p"),t=A(`Your name is:
	`),l=D("span"),r=A(a[3]),s=B(),n=D("div");for(let o=0;o<i.length;o+=1)i[o].c();f=B(),M(c.$$.fragment),_=B(),h=D("button"),$=A("Save name"),this.h()},l(o){e=T(o,"P",{});var g=S(e);t=L(g,`Your name is:
	`),l=T(g,"SPAN",{style:!0});var q=S(l);r=L(q,a[3]),q.forEach(m),g.forEach(m),s=O(o),n=T(o,"DIV",{class:!0});var ee=S(n);for(let ie=0;ie<i.length;ie+=1)i[ie].l(ee);ee.forEach(m),f=O(o),F(c.$$.fragment,o),_=O(o),h=T(o,"BUTTON",{class:!0});var G=S(h);$=L(G,"Save name"),G.forEach(m),this.h()},h(){_e(l,"color",a[0]),I(n,"class","flex svelte-wrl5lk"),I(h,"class","button svelte-wrl5lk"),Y(h,"disabled",!a[3]||a[3]==="")},m(o,g){E(o,e,g),C(e,t),C(e,l),C(l,r),E(o,s,g),E(o,n,g);for(let q=0;q<i.length;q+=1)i[q].m(n,null);E(o,f,g),U(c,o,g),E(o,_,g),E(o,h,g),C(h,$),v=!0,k||(d=[W(h,"click",a[5]),W(h,"keydown",a[5])],k=!0)},p(o,[g]){(!v||g&1)&&_e(l,"color",o[0]),g&21&&(y=o[2],re(),i=de(i,g,b,1,o,y,u,n,me,ye,null,ve),ne());const q={};!p&&g&2&&(p=!0,q.value=o[1],Ve(()=>p=!1)),c.$set(q)},i(o){if(!v){for(let g=0;g<y.length;g+=1)P(i[g]);P(c.$$.fragment,o),v=!0}},o(o){for(let g=0;g<i.length;g+=1)N(i[g]);N(c.$$.fragment,o),v=!1},d(o){o&&m(e),o&&m(s),o&&m(n);for(let g=0;g<i.length;g+=1)i[g].d();o&&m(f),H(c,o),o&&m(_),o&&m(h),k=!1,se(d)}}}function Ye(a,e,t){let l;z(a,X,$=>t(9,l=$));const r=["party_animal","happy_go_lucky","fun_loving","carefree","lighthearted","whimsical","playful","mischievous","impish","jolly","Goofy","Dopey","Grumpy","Bashful","Sleepy","Happy","Sneezy","Doc","Snow White","Cinderella","Sleeping Beauty","Little Red Riding Hood","The Three Little Pigs","The Big Bad Wolf","Goldilocks","The Three Bears","Rapunzel","Hansel and Gretel","Rumpelstiltskin","Jack and the Beanstalk","cutiepie","sugar","cupcake","cutesy","darling","precious","lovebug","sweetie","sugarplum","angel"],s=["#ffda1e","#f2a005","#f24503","#fe9ad2","#9d9bfe","#1f99fd","#7ac6ff","#60dfcd","#62ca9c"];let n=r[Math.floor(Math.random()*r.length)],i=s[Math.floor(Math.random()*s.length)],u;const f=$=>{t(0,i=$)},c=()=>{!n||n===""||(Q(X,l={name:n.trim(),uid:"",gameId:"",color:i,score:0},l),Ne({type:"player",content:l}).then($=>{var v;Q(X,l={...l,uid:(v=$==null?void 0:$.id)!=null?v:""},l),ce({type:"player",id:l.uid,content:l})}))},p=$=>f($),_=$=>f($);function h($){u=$,t(1,u)}return[i,u,s,n,f,c,p,_,h]}class Qe extends K{constructor(e){super(),Z(this,e,Ye,Je,x,{})}}function be(a,e,t){const l=a.slice();return l[12]=e[t],l[14]=t,l}function $e(a,e,t){const l=a.slice();return l[15]=e[t],l[14]=t,l}function Xe(a){let e,t,l=a[3].route,r=[];for(let n=0;n<l.length;n+=1)r[n]=we($e(a,l,n));const s=n=>N(r[n],1,1,()=>{r[n]=null});return{c(){e=D("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=T(n,"DIV",{class:!0});var i=S(e);for(let u=0;u<r.length;u+=1)r[u].l(i);i.forEach(m),this.h()},h(){I(e,"class","numbered-list svelte-1syo86s")},m(n,i){E(n,e,i);for(let u=0;u<r.length;u+=1)r[u].m(e,null);t=!0},p(n,i){if(i&40){l=n[3].route;let u;for(u=0;u<l.length;u+=1){const f=$e(n,l,u);r[u]?(r[u].p(f,i),P(r[u],1)):(r[u]=we(f),r[u].c(),P(r[u],1),r[u].m(e,null))}for(re(),u=l.length;u<r.length;u+=1)s(u);ne()}},i(n){if(!t){for(let i=0;i<l.length;i+=1)P(r[i]);t=!0}},o(n){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)N(r[i]);t=!1},d(n){n&&m(e),Pe(r,n)}}}function Ke(a){let e,t;return{c(){e=D("p"),t=A("There are no routes so far.")},l(l){e=T(l,"P",{});var r=S(e);t=L(r,"There are no routes so far."),r.forEach(m)},m(l,r){E(l,e,r),C(e,t)},p:R,i:R,o:R,d(l){l&&m(e)}}}function we(a){let e,t,l=a[14]+1+"",r,s,n=a[15].replaceAll("_"," ")+"",i,u,f,c,p,_,h,$,v;return c=new qe({props:{color:"red",icon:"akar-icons:cross"}}),{c(){e=D("div"),t=D("span"),r=A(l),s=A(". "),i=A(n),u=B(),f=D("div"),M(c.$$.fragment),p=B(),this.h()},l(k){e=T(k,"DIV",{class:!0});var d=S(e);t=T(d,"SPAN",{});var y=S(t);r=L(y,l),s=L(y,". "),i=L(y,n),y.forEach(m),u=O(d),f=T(d,"DIV",{});var b=S(f);F(c.$$.fragment,b),b.forEach(m),p=O(d),d.forEach(m),this.h()},h(){I(e,"class","svelte-1syo86s")},m(k,d){E(k,e,d),C(e,t),C(t,r),C(t,s),C(t,i),C(e,u),C(e,f),U(c,f,null),C(e,p),h=!0,$||(v=W(f,"click",a[5](a[14])),$=!0)},p(k,d){a=k,(!h||d&8)&&n!==(n=a[15].replaceAll("_"," ")+"")&&ae(i,n)},i(k){h||(P(c.$$.fragment,k),_||te(()=>{_=le(e,Oe,{}),_.start()}),h=!0)},o(k){N(c.$$.fragment,k),h=!1},d(k){k&&m(e),H(c),$=!1,v()}}}function Ie(a){let e,t=a[12].title+"",l,r,s,n,i;return{c(){e=D("div"),l=A(t),r=B(),this.h()},l(u){e=T(u,"DIV",{class:!0});var f=S(e);l=L(f,t),r=O(f),f.forEach(m),this.h()},h(){I(e,"class","svelte-1syo86s")},m(u,f){E(u,e,f),C(e,l),C(e,r),n||(i=[W(e,"click",a[4](a[14])),W(e,"keydown",a[4](a[14]))],n=!0)},p(u,f){a=u,f&4&&t!==(t=a[12].title+"")&&ae(l,t)},i(u){s||te(()=>{s=le(e,Oe,{}),s.start()})},o:R,d(u){u&&m(e),n=!1,se(i)}}}function Ze(a){let e,t,l,r,s,n,i,u,f,c,p,_,h,$;const v=[Ke,Xe],k=[];function d(o,g){return o[3].route.length===0?0:1}e=d(a),t=k[e]=v[e](a);function y(o){a[7](o)}let b={text:"Choose the next route",name:"route",id:"route",type:"route",required:!0,attempted:!0};a[0]!==void 0&&(b.value=a[0]),s=new Le({props:b}),fe.push(()=>Se(s,"value",y));let w=a[2],V=[];for(let o=0;o<w.length;o+=1)V[o]=Ie(be(a,w,o));return{c(){t.c(),l=B(),r=D("div"),M(s.$$.fragment),i=B(),u=D("div");for(let o=0;o<V.length;o+=1)V[o].c();f=B(),c=D("button"),p=A("Finish Selection"),this.h()},l(o){t.l(o),l=O(o),r=T(o,"DIV",{class:!0});var g=S(r);F(s.$$.fragment,g),g.forEach(m),i=O(o),u=T(o,"DIV",{class:!0});var q=S(u);for(let G=0;G<V.length;G+=1)V[G].l(q);q.forEach(m),f=O(o),c=T(o,"BUTTON",{class:!0});var ee=S(c);p=L(ee,"Finish Selection"),ee.forEach(m),this.h()},h(){I(r,"class","svelte-1syo86s"),Y(r,"shake",a[1]),I(u,"class","search-results svelte-1syo86s"),Y(u,"hidden",a[2].length===0),I(c,"class","button svelte-1syo86s"),Y(c,"disabled",a[3].route.length<2)},m(o,g){k[e].m(o,g),E(o,l,g),E(o,r,g),U(s,r,null),E(o,i,g),E(o,u,g);for(let q=0;q<V.length;q+=1)V[q].m(u,null);E(o,f,g),E(o,c,g),C(c,p),_=!0,h||($=[W(c,"click",a[6]),W(c,"keydown",a[6])],h=!0)},p(o,[g]){let q=e;e=d(o),e===q?k[e].p(o,g):(re(),N(k[q],1,1,()=>{k[q]=null}),ne(),t=k[e],t?t.p(o,g):(t=k[e]=v[e](o),t.c()),P(t,1),t.m(l.parentNode,l));const ee={};if(!n&&g&1&&(n=!0,ee.value=o[0],Ve(()=>n=!1)),s.$set(ee),(!_||g&2)&&Y(r,"shake",o[1]),g&20){w=o[2];let G;for(G=0;G<w.length;G+=1){const ie=be(o,w,G);V[G]?(V[G].p(ie,g),P(V[G],1)):(V[G]=Ie(ie),V[G].c(),P(V[G],1),V[G].m(u,null))}for(;G<V.length;G+=1)V[G].d(1);V.length=w.length}(!_||g&4)&&Y(u,"hidden",o[2].length===0),(!_||g&8)&&Y(c,"disabled",o[3].route.length<2)},i(o){if(!_){P(t),P(s.$$.fragment,o);for(let g=0;g<w.length;g+=1)P(V[g]);_=!0}},o(o){N(t),N(s.$$.fragment,o),_=!1},d(o){k[e].d(o),o&&m(l),o&&m(r),H(s),o&&m(i),o&&m(u),Pe(V,o),o&&m(f),o&&m(c),h=!1,se($)}}}function xe(a,e,t){let l,r;z(a,X,v=>t(9,l=v)),z(a,j,v=>t(3,r=v));let s,n=!1,i=[],u;const f=(v,k)=>{clearTimeout(u),u=setTimeout(()=>{v()},k)},c=async()=>{t(1,n=!0),await new Promise(v=>setTimeout(v,820)),t(1,n=!1)},p=v=>()=>{const k=i[v].title;if(!k||k===""){c();return}if(r.route.includes(k)){c();return}Q(j,r={...r,route:[...r.route,k]},r),t(2,i=[])},_=v=>()=>{r.route.splice(v,1),Q(j,r={...r,route:[...r.route]},r)},h=()=>{r.route.length<2||(Q(j,r={...r,route:r.route.map(v=>v.replaceAll(" ","_")),id:"",state:"waiting",players:[{...l,progress:Be}]},r),Ne({type:"game",content:r}).then(v=>{var d;const k=(d=v==null?void 0:v.id)!=null?d:"";Q(j,r={...r,id:k},r),Q(X,l={...l,gameId:k},l),ce({type:"player",id:l.uid,content:l})}))};function $(v){s=v,t(0,s)}return a.$$.update=()=>{a.$$.dirty&1&&(t(2,i=[]),f(()=>!s||s===""?null:fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&format=json&list=search&srsearch=${s.trim()}`).then(v=>v.json()).then(v=>{var k;return t(2,i=(k=v==null?void 0:v.query)==null?void 0:k.search)}),500))},[s,n,i,r,p,_,h,$]}class et extends K{constructor(e){super(),Z(this,e,xe,Ze,x,{})}}function tt(a){let e,t,l;return{c(){e=D("textarea"),this.h()},l(r){e=T(r,"TEXTAREA",{class:!0}),S(e).forEach(m),this.h()},h(){I(e,"class","svelte-zw49ni")},m(r,s){E(r,e,s),pe(e,a[0]),a[3](e),t||(l=W(e,"input",a[2]),t=!0)},p(r,[s]){s&1&&pe(e,r[0])},i:R,o:R,d(r){r&&m(e),a[3](null),t=!1,l()}}}function lt(a,e,t){let{value:l}=e,r;he(()=>{r.select(),r.setSelectionRange(0,99999),navigator.clipboard.writeText(r.value)});function s(){l=this.value,t(0,l)}function n(i){fe[i?"unshift":"push"](()=>{r=i,t(1,r)})}return a.$$set=i=>{"value"in i&&t(0,l=i.value)},[l,r,s,n]}class rt extends K{constructor(e){super(),Z(this,e,lt,tt,x,{value:0})}}function nt(a){let e,t,l,r,s,n;return{c(){e=D("button"),t=A("Click here to copy link"),l=B(),r=D("div"),this.h()},l(i){e=T(i,"BUTTON",{class:!0});var u=S(e);t=L(u,"Click here to copy link"),u.forEach(m),l=O(i),r=T(i,"DIV",{}),S(r).forEach(m),this.h()},h(){I(e,"class","button")},m(i,u){E(i,e,u),C(e,t),E(i,l,u),E(i,r,u),a[4](r),s||(n=[W(e,"click",a[1]),W(e,"keydown",a[1])],s=!0)},p:R,i:R,o:R,d(i){i&&m(e),i&&m(l),i&&m(r),a[4](null),s=!1,se(n)}}}function it(a,e,t){let l,r;z(a,j,f=>t(2,l=f)),z(a,Ge,f=>t(3,r=f));let s,n;const i=()=>{const f=n;new rt({target:s,props:{value:f}}).$destroy(),We("Link copied!")};function u(f){fe[f?"unshift":"push"](()=>{s=f,t(0,s)})}return a.$$.update=()=>{a.$$.dirty&12&&(n=`${r.url.toString().split(ue)[0]}${ue}/game/${l.id}`)},[s,i,l,r,u]}class Me extends K{constructor(e){super(),Z(this,e,it,nt,x,{})}}function Ee(a,e,t){const l=a.slice();return l[4]=e[t],l}function De(a,e){let t,l,r,s,n;return l=new Ae({props:{player:e[4]}}),{key:a,first:null,c(){t=D("div"),M(l.$$.fragment),this.h()},l(i){t=T(i,"DIV",{});var u=S(t);F(l.$$.fragment,u),u.forEach(m),this.h()},h(){this.first=t},m(i,u){E(i,t,u),U(l,t,null),n=!0},p(i,u){e=i;const f={};u&1&&(f.player=e[4]),l.$set(f)},i(i){n||(P(l.$$.fragment,i),te(()=>{s&&s.end(1),r=le(t,J,{y:20}),r.start()}),n=!0)},o(i){N(l.$$.fragment,i),r&&r.invalidate(),s=oe(t,J,{x:100}),n=!1},d(i){i&&m(t),H(l),i&&s&&s.end()}}}function at(a){let e,t,l,r;return{c(){e=D("button"),t=A("Start Game"),this.h()},l(s){e=T(s,"BUTTON",{class:!0});var n=S(e);t=L(n,"Start Game"),n.forEach(m),this.h()},h(){I(e,"class","button")},m(s,n){E(s,e,n),C(e,t),l||(r=[W(e,"click",a[2]),W(e,"keydown",a[2])],l=!0)},p:R,d(s){s&&m(e),l=!1,se(r)}}}function st(a){let e,t;return{c(){e=D("p"),t=A("Cannot start game with only one player :)"),this.h()},l(l){e=T(l,"P",{class:!0});var r=S(e);t=L(r,"Cannot start game with only one player :)"),r.forEach(m),this.h()},h(){I(e,"class","svelte-8tq9kv")},m(l,r){E(l,e,r),C(e,t)},p:R,d(l){l&&m(e)}}}function ot(a){let e,t,l=[],r=new Map,s,n,i,u,f,c,p;e=new Re({props:{route:a[0].route}});let _=a[0].players;const h=d=>d[4].uid;for(let d=0;d<_.length;d+=1){let y=Ee(a,_,d),b=h(y);r.set(b,l[d]=De(b,y))}function $(d,y){return d[0].players.length===1?st:at}let v=$(a),k=v(a);return i=new Me({}),{c(){M(e.$$.fragment),t=B();for(let d=0;d<l.length;d+=1)l[d].c();s=B(),k.c(),n=B(),M(i.$$.fragment),u=B(),f=D("p"),c=A(a[1]),this.h()},l(d){F(e.$$.fragment,d),t=O(d);for(let b=0;b<l.length;b+=1)l[b].l(d);s=O(d),k.l(d),n=O(d),F(i.$$.fragment,d),u=O(d),f=T(d,"P",{class:!0});var y=S(f);c=L(y,a[1]),y.forEach(m),this.h()},h(){I(f,"class","svelte-8tq9kv")},m(d,y){U(e,d,y),E(d,t,y);for(let b=0;b<l.length;b+=1)l[b].m(d,y);E(d,s,y),k.m(d,y),E(d,n,y),U(i,d,y),E(d,u,y),E(d,f,y),C(f,c),p=!0},p(d,[y]){const b={};y&1&&(b.route=d[0].route),e.$set(b),y&1&&(_=d[0].players,re(),l=de(l,y,h,1,d,_,r,s.parentNode,me,De,s,Ee),ne()),v===(v=$(d))&&k?k.p(d,y):(k.d(1),k=v(d),k&&(k.c(),k.m(n.parentNode,n))),(!p||y&2)&&ae(c,d[1])},i(d){if(!p){P(e.$$.fragment,d);for(let y=0;y<_.length;y+=1)P(l[y]);P(i.$$.fragment,d),p=!0}},o(d){N(e.$$.fragment,d);for(let y=0;y<l.length;y+=1)N(l[y]);N(i.$$.fragment,d),p=!1},d(d){H(e,d),d&&m(t);for(let y=0;y<l.length;y+=1)l[y].d(d);d&&m(s),k.d(d),d&&m(n),H(i,d),d&&m(u),d&&m(f)}}}function ut(a,e,t){let l,r;z(a,j,i=>t(0,l=i)),z(a,Ge,i=>t(3,r=i));let s;const n=()=>{Q(j,l={...l,state:"countdown"},l),ce({type:"game",id:l.id,content:l})};return a.$$.update=()=>{a.$$.dirty&9&&t(1,s=`${r.url.toString().split(ue)[0]}${ue}/game/${l.id}`)},[l,s,n,r]}class ft extends K{constructor(e){super(),Z(this,e,ut,ot,x,{})}}function ct(a){let e,t=(a[0]<=0?"GO!":a[0])+"",l;return{c(){e=D("section"),l=A(t),this.h()},l(r){e=T(r,"SECTION",{class:!0});var s=S(e);l=L(s,t),s.forEach(m),this.h()},h(){I(e,"class","svelte-y04exd")},m(r,s){E(r,e,s),C(e,l)},p(r,[s]){s&1&&t!==(t=(r[0]<=0?"GO!":r[0])+"")&&ae(l,t)},i:R,o:R,d(r){r&&m(e)}}}function dt(a,e,t){let l,r;z(a,j,i=>t(1,l=i)),z(a,X,i=>t(2,r=i));let s=5;he(()=>{n()});const n=async()=>{if(s<0){const i=l.players,u=i.findIndex(f=>r.uid===f.uid);if(u===-1){console.error("cannot find your user");return}i[u].progress={linksProgressed:0,backNavs:0,isCriticallyClose:!1,timesCriticallyClose:0,linkHistory:[{type:"url",url:l.route[0],index:0}]},Q(j,l={...l,state:"started",players:i},l),ce({type:"game",id:l.id,content:l});return}await new Promise(i=>setTimeout(i,1e3)),t(0,s--,s),n()};return[s]}class mt extends K{constructor(e){super(),Z(this,e,dt,ct,x,{})}}function Te(a,e,t){const l=a.slice();return l[3]=e[t],l}function Ce(a,e){let t,l,r;return l=new Ae({props:{player:e[3]}}),{key:a,first:null,c(){t=D("div"),M(l.$$.fragment),this.h()},l(s){t=T(s,"DIV",{});var n=S(t);F(l.$$.fragment,n),n.forEach(m),this.h()},h(){this.first=t},m(s,n){E(s,t,n),U(l,t,null),r=!0},p(s,n){e=s;const i={};n&1&&(i.player=e[3]),l.$set(i)},i(s){r||(P(l.$$.fragment,s),r=!0)},o(s){N(l.$$.fragment,s),r=!1},d(s){s&&m(t),H(l)}}}function ht(a){var y;let e,t,l,r=[],s=new Map,n,i,u,f,c,p,_,h=((y=a[0])==null?void 0:y.id)+"",$,v;t=new Re({props:{route:a[0].route}});let k=a[0].players;const d=b=>b[3].uid;for(let b=0;b<k.length;b+=1){let w=Te(a,k,b),V=d(w);s.set(V,r[b]=Ce(V,w))}return i=new Me({}),{c(){e=D("section"),M(t.$$.fragment),l=B();for(let b=0;b<r.length;b+=1)r[b].c();n=B(),M(i.$$.fragment),u=B(),f=D("p"),c=A("Waiting for host to start game"),p=B(),_=D("p"),$=A(h),this.h()},l(b){e=T(b,"SECTION",{class:!0});var w=S(e);F(t.$$.fragment,w),l=O(w);for(let g=0;g<r.length;g+=1)r[g].l(w);n=O(w),F(i.$$.fragment,w),u=O(w),f=T(w,"P",{});var V=S(f);c=L(V,"Waiting for host to start game"),V.forEach(m),p=O(w),_=T(w,"P",{});var o=S(_);$=L(o,h),o.forEach(m),w.forEach(m),this.h()},h(){I(e,"class","svelte-2bcj0m")},m(b,w){E(b,e,w),U(t,e,null),C(e,l);for(let V=0;V<r.length;V+=1)r[V].m(e,null);C(e,n),U(i,e,null),C(e,u),C(e,f),C(f,c),C(e,p),C(e,_),C(_,$),v=!0},p(b,[w]){var o;const V={};w&1&&(V.route=b[0].route),t.$set(V),w&1&&(k=b[0].players,re(),r=de(r,w,d,1,b,k,s,e,me,Ce,n,Te),ne()),(!v||w&1)&&h!==(h=((o=b[0])==null?void 0:o.id)+"")&&ae($,h)},i(b){if(!v){P(t.$$.fragment,b);for(let w=0;w<k.length;w+=1)P(r[w]);P(i.$$.fragment,b),v=!0}},o(b){N(t.$$.fragment,b);for(let w=0;w<r.length;w+=1)N(r[w]);N(i.$$.fragment,b),v=!1},d(b){b&&m(e),H(t);for(let w=0;w<r.length;w+=1)r[w].d();H(i)}}}function _t(a,e,t){let l,r;z(a,X,n=>t(2,l=n)),z(a,j,n=>t(0,r=n));let{gameId:s}=e;return he(()=>{l.gameId!==s&&l.uid&&l.uid!==""&&(Q(X,l={...l,gameId:s},l),Fe({type:"game",id:s},"players",{...l,progress:Be}))}),a.$$set=n=>{"gameId"in n&&t(1,s=n.gameId)},[r,s]}class pt extends K{constructor(e){super(),Z(this,e,_t,ht,x,{gameId:1})}}function gt(a){let e,t,l,r,s;return t=new mt({}),{c(){e=D("div"),M(t.$$.fragment),this.h()},l(n){e=T(n,"DIV",{class:!0});var i=S(e);F(t.$$.fragment,i),i.forEach(m),this.h()},h(){I(e,"class","maintain-position svelte-6vr1m8")},m(n,i){E(n,e,i),U(t,e,null),s=!0},p:R,i(n){s||(P(t.$$.fragment,n),te(()=>{r&&r.end(1),l=le(e,J,{x:500}),l.start()}),s=!0)},o(n){N(t.$$.fragment,n),l&&l.invalidate(),r=oe(e,J,{x:-500}),s=!1},d(n){n&&m(e),H(t),n&&r&&r.end()}}}function vt(a){let e,t,l,r,s;return t=new ft({}),{c(){e=D("div"),M(t.$$.fragment),this.h()},l(n){e=T(n,"DIV",{class:!0});var i=S(e);F(t.$$.fragment,i),i.forEach(m),this.h()},h(){I(e,"class","maintain-position svelte-6vr1m8")},m(n,i){E(n,e,i),U(t,e,null),s=!0},p:R,i(n){s||(P(t.$$.fragment,n),te(()=>{r&&r.end(1),l=le(e,J,{x:500}),l.start()}),s=!0)},o(n){N(t.$$.fragment,n),l&&l.invalidate(),r=oe(e,J,{x:-500}),s=!1},d(n){n&&m(e),H(t),n&&r&&r.end()}}}function kt(a){let e,t,l,r,s;return t=new et({}),{c(){e=D("div"),M(t.$$.fragment),this.h()},l(n){e=T(n,"DIV",{class:!0});var i=S(e);F(t.$$.fragment,i),i.forEach(m),this.h()},h(){I(e,"class","maintain-position svelte-6vr1m8")},m(n,i){E(n,e,i),U(t,e,null),s=!0},p:R,i(n){s||(P(t.$$.fragment,n),te(()=>{r&&r.end(1),l=le(e,J,{x:500}),l.start()}),s=!0)},o(n){N(t.$$.fragment,n),l&&l.invalidate(),r=oe(e,J,{x:-500}),s=!1},d(n){n&&m(e),H(t),n&&r&&r.end()}}}function yt(a){let e,t,l,r,s;return t=new pt({props:{gameId:a[0]}}),{c(){e=D("div"),M(t.$$.fragment),this.h()},l(n){e=T(n,"DIV",{class:!0});var i=S(e);F(t.$$.fragment,i),i.forEach(m),this.h()},h(){I(e,"class","maintain-position svelte-6vr1m8")},m(n,i){E(n,e,i),U(t,e,null),s=!0},p(n,i){const u={};i&1&&(u.gameId=n[0]),t.$set(u)},i(n){s||(P(t.$$.fragment,n),te(()=>{r&&r.end(1),l=le(e,J,{x:500}),l.start()}),s=!0)},o(n){N(t.$$.fragment,n),l&&l.invalidate(),r=oe(e,J,{x:-500}),s=!1},d(n){n&&m(e),H(t),n&&r&&r.end()}}}function bt(a){let e,t,l,r,s;return t=new Qe({}),{c(){e=D("div"),M(t.$$.fragment),this.h()},l(n){e=T(n,"DIV",{class:!0});var i=S(e);F(t.$$.fragment,i),i.forEach(m),this.h()},h(){I(e,"class","maintain-position svelte-6vr1m8")},m(n,i){E(n,e,i),U(t,e,null),s=!0},p:R,i(n){s||(P(t.$$.fragment,n),te(()=>{r&&r.end(1),l=le(e,J,{x:500}),l.start()}),s=!0)},o(n){N(t.$$.fragment,n),l&&l.invalidate(),r=oe(e,J,{x:-500}),s=!1},d(n){n&&m(e),H(t),n&&r&&r.end()}}}function $t(a){let e,t,l,r,s,n,i,u;const f=[bt,yt,kt,vt,gt],c=[];function p(_,h){var $;return!_[1].uid||_[1].uid===""?0:_[0]!=null&&(!_[2]||(($=_[2])==null?void 0:$.state)==="waiting")?1:!_[2].id||_[2].id===""?2:_[2].state==="waiting"?3:4}return r=p(a),s=c[r]=f[r](a),i=new He({props:{src:"https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/2560px-Wikipedia-logo-v2.svg.png",alt:"wikipedia logo"}}),{c(){e=D("div"),t=D("div"),l=D("div"),s.c(),n=B(),M(i.$$.fragment),this.h()},l(_){e=T(_,"DIV",{class:!0});var h=S(e);t=T(h,"DIV",{class:!0});var $=S(t);l=T($,"DIV",{class:!0});var v=S(l);s.l(v),v.forEach(m),$.forEach(m),n=O(h),F(i.$$.fragment,h),h.forEach(m),this.h()},h(){I(l,"class","carousel svelte-6vr1m8"),I(t,"class","login svelte-6vr1m8"),I(e,"class","homepage svelte-6vr1m8")},m(_,h){E(_,e,h),C(e,t),C(t,l),c[r].m(l,null),C(e,n),U(i,e,null),u=!0},p(_,h){let $=r;r=p(_),r===$?c[r].p(_,h):(re(),N(c[$],1,1,()=>{c[$]=null}),ne(),s=c[r],s?s.p(_,h):(s=c[r]=f[r](_),s.c()),P(s,1),s.m(l,null))},i(_){u||(P(s),P(i.$$.fragment,_),u=!0)},o(_){N(s),N(i.$$.fragment,_),u=!1},d(_){_&&m(e),c[r].d(),H(i)}}}function wt(a){let e,t;return e=new Ue({props:{backBtn:!1,$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){U(e,l,r),t=!0},p(l,[r]){const s={};r&15&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){t||(P(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){H(e,l)}}}function It(a,e,t){let l,r;z(a,X,n=>t(1,l=n)),z(a,j,n=>t(2,r=n));let{gameId:s=null}=e;return a.$$set=n=>{"gameId"in n&&t(0,s=n.gameId)},[s,l,r]}class Bt extends K{constructor(e){super(),Z(this,e,It,wt,x,{gameId:0})}}export{Bt as O};