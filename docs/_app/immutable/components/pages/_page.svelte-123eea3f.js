import{S as J,i as Y,s as K,k as T,l as I,m as C,h as m,n as $,b as E,a5 as ce,G as q,A as H,o as De,a6 as te,q as R,a as N,r as A,c as P,a2 as j,F as D,u as se,a7 as $e,v as z,w as L,p as de,x as G,g as X,L as Se,a8 as Ve,d as Q,a9 as Ee,f as S,t as V,y as U,aa as le,K as M,a4 as x,C as ie,a3 as Te,H as ne,I as re,J as oe}from"../../chunks/index-c207a329.js";import{p as ee,g as W,P as Be}from"../../chunks/PlayerScoreViewer-7cfe258a.js";import{I as Ie,C as Ne,F as Pe}from"../../chunks/FallbackImage-d4cd5368.js";import{a as qe}from"../../chunks/Toasts.svelte_svelte_type_style_lang-0c1ad3d4.js";import{f as O}from"../../chunks/index-9070b985.js";import{c as _e}from"../../chunks/singletons-f2d03700.js";import{p as Re}from"../../chunks/stores-c8e8a667.js";function Ae(r){let e,t,l;return{c(){e=T("textarea"),this.h()},l(n){e=I(n,"TEXTAREA",{class:!0}),C(e).forEach(m),this.h()},h(){$(e,"class","svelte-zw49ni")},m(n,s){E(n,e,s),ce(e,r[0]),r[3](e),t||(l=q(e,"input",r[2]),t=!0)},p(n,[s]){s&1&&ce(e,n[0])},i:H,o:H,d(n){n&&m(e),r[3](null),t=!1,l()}}}function ze(r,e,t){let{value:l}=e,n;De(()=>{n.select(),n.setSelectionRange(0,99999),navigator.clipboard.writeText(n.value)});function s(){l=this.value,t(0,l)}function a(i){te[i?"unshift":"push"](()=>{n=i,t(1,n)})}return r.$$set=i=>{"value"in i&&t(0,l=i.value)},[l,n,s,a]}class Le extends J{constructor(e){super(),Y(this,e,ze,Ae,K,{value:0})}}function pe(r){let e;return{c(){e=T("div"),this.h()},l(t){e=I(t,"DIV",{class:!0,style:!0}),C(e).forEach(m),this.h()},h(){$(e,"class","input-icon icon-username svelte-pz0rkl"),$(e,"style",r[7])},m(t,l){E(t,e,l)},p(t,l){l&128&&$(e,"style",t[7])},d(t){t&&m(e)}}}function Ge(r){let e,t,l,n,s,a,i,f,p=r[4]!=""&&pe(r);return{c(){e=T("div"),t=T("label"),l=R(r[0]),n=N(),p&&p.c(),s=N(),a=T("input"),this.h()},l(o){e=I(o,"DIV",{class:!0});var _=C(e);t=I(_,"LABEL",{for:!0,class:!0});var v=C(t);l=A(v,r[0]),v.forEach(m),n=P(_),p&&p.l(_),s=P(_),a=I(_,"INPUT",{id:!0,name:!0,placeholder:!0,type:!0,class:!0}),_.forEach(m),this.h()},h(){$(t,"for",r[1]),$(t,"class","svelte-pz0rkl"),$(a,"id",r[2]),$(a,"name",r[1]),$(a,"placeholder",r[0]),$(a,"type",r[3]),a.required=r[5],$(a,"class","svelte-pz0rkl"),j(a,"push",r[4]!=""),j(a,"attempted",r[6]),$(e,"class","input-container svelte-pz0rkl")},m(o,_){E(o,e,_),D(e,t),D(t,l),D(e,n),p&&p.m(e,null),D(e,s),D(e,a),i||(f=q(a,"input",r[8]),i=!0)},p(o,[_]){_&1&&se(l,o[0]),_&2&&$(t,"for",o[1]),o[4]!=""?p?p.p(o,_):(p=pe(o),p.c(),p.m(e,s)):p&&(p.d(1),p=null),_&4&&$(a,"id",o[2]),_&2&&$(a,"name",o[1]),_&1&&$(a,"placeholder",o[0]),_&8&&$(a,"type",o[3]),_&32&&(a.required=o[5]),_&16&&j(a,"push",o[4]!=""),_&64&&j(a,"attempted",o[6])},i:H,o:H,d(o){o&&m(e),p&&p.d(),i=!1,f()}}}function Ue(r,e,t){let l,{text:n}=e,{name:s}=e,{id:a}=e,{type:i}=e,{icon:f=""}=e,{required:p=!1}=e,{attempted:o=!1}=e,{value:_=""}=e;const v=u=>{var h,g;t(9,_=(g=(h=u.target)==null?void 0:h.value)!=null?g:"")};return r.$$set=u=>{"text"in u&&t(0,n=u.text),"name"in u&&t(1,s=u.name),"id"in u&&t(2,a=u.id),"type"in u&&t(3,i=u.type),"icon"in u&&t(4,f=u.icon),"required"in u&&t(5,p=u.required),"attempted"in u&&t(6,o=u.attempted),"value"in u&&t(9,_=u.value)},r.$$.update=()=>{r.$$.dirty&16&&t(7,l=`background: url(${f}); background-size: 1.5rem auto; background-repeat: repeat;`)},[n,s,a,i,f,p,o,l,v,_]}class Ce extends J{constructor(e){super(),Y(this,e,Ue,Ge,K,{text:0,name:1,id:2,type:3,icon:4,required:5,attempted:6,value:9})}}function me(r,e,t){const l=r.slice();return l[11]=e[t],l}function he(r){let e,t;return e=new Ie({props:{icon:"akar-icons:check",color:"var(--bg)"}}),{c(){z(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function ve(r,e){let t,l,n,s,a,i=e[11]===e[0]&&he();function f(){return e[6](e[11])}function p(){return e[7](e[11])}return{key:r,first:null,c(){t=T("div"),i&&i.c(),l=N(),this.h()},l(o){t=I(o,"DIV",{class:!0,style:!0});var _=C(t);i&&i.l(_),l=P(_),_.forEach(m),this.h()},h(){$(t,"class","color svelte-wrl5lk"),$(t,"style",`background: ${e[11]};`),this.first=t},m(o,_){E(o,t,_),i&&i.m(t,null),D(t,l),n=!0,s||(a=[q(t,"click",f),q(t,"keydown",p)],s=!0)},p(o,_){e=o,e[11]===e[0]?i?_&1&&S(i,1):(i=he(),i.c(),S(i,1),i.m(t,l)):i&&(X(),V(i,1,1,()=>{i=null}),Q())},i(o){n||(S(i),n=!0)},o(o){V(i),n=!1},d(o){o&&m(t),i&&i.d(),s=!1,le(a)}}}function je(r){let e,t,l,n,s,a,i=[],f=new Map,p,o,_,v,u,h,g,c,k,w=r[2];const F=d=>d[11];for(let d=0;d<w.length;d+=1){let b=me(r,w,d),B=F(b);f.set(B,i[d]=ve(B,b))}function Z(d){r[8](d)}let y={text:"Or choose a name",name:"name",id:"name",type:"name"};return r[1]!==void 0&&(y.value=r[1]),o=new Ce({props:y}),te.push(()=>$e(o,"value",Z)),{c(){e=T("p"),t=R(`Your name is:
	`),l=T("span"),n=R(r[3]),s=N(),a=T("div");for(let d=0;d<i.length;d+=1)i[d].c();p=N(),z(o.$$.fragment),v=N(),u=T("button"),h=R("Save name"),this.h()},l(d){e=I(d,"P",{});var b=C(e);t=A(b,`Your name is:
	`),l=I(b,"SPAN",{style:!0});var B=C(l);n=A(B,r[3]),B.forEach(m),b.forEach(m),s=P(d),a=I(d,"DIV",{class:!0});var ue=C(a);for(let ae=0;ae<i.length;ae+=1)i[ae].l(ue);ue.forEach(m),p=P(d),L(o.$$.fragment,d),v=P(d),u=I(d,"BUTTON",{class:!0});var fe=C(u);h=A(fe,"Save name"),fe.forEach(m),this.h()},h(){de(l,"color",r[0]),$(a,"class","flex svelte-wrl5lk"),$(u,"class","button svelte-wrl5lk"),j(u,"disabled",!r[3]||r[3]==="")},m(d,b){E(d,e,b),D(e,t),D(e,l),D(l,n),E(d,s,b),E(d,a,b);for(let B=0;B<i.length;B+=1)i[B].m(a,null);E(d,p,b),G(o,d,b),E(d,v,b),E(d,u,b),D(u,h),g=!0,c||(k=[q(u,"click",r[5]),q(u,"keydown",r[5])],c=!0)},p(d,[b]){(!g||b&1)&&de(l,"color",d[0]),b&21&&(w=d[2],X(),i=Se(i,b,F,1,d,w,f,a,Ve,ve,null,me),Q());const B={};!_&&b&2&&(_=!0,B.value=d[1],Ee(()=>_=!1)),o.$set(B)},i(d){if(!g){for(let b=0;b<w.length;b+=1)S(i[b]);S(o.$$.fragment,d),g=!0}},o(d){for(let b=0;b<i.length;b+=1)V(i[b]);V(o.$$.fragment,d),g=!1},d(d){d&&m(e),d&&m(s),d&&m(a);for(let b=0;b<i.length;b+=1)i[b].d();d&&m(p),U(o,d),d&&m(v),d&&m(u),c=!1,le(k)}}}function Fe(r,e,t){let l;M(r,ee,h=>t(9,l=h));const n=["party_animal","happy_go_lucky","fun_loving","carefree","lighthearted","whimsical","playful","mischievous","impish","jolly","Goofy","Dopey","Grumpy","Bashful","Sleepy","Happy","Sneezy","Doc","Snow White","Cinderella","Sleeping Beauty","Little Red Riding Hood","The Three Little Pigs","The Big Bad Wolf","Goldilocks","The Three Bears","Rapunzel","Hansel and Gretel","Rumpelstiltskin","Jack and the Beanstalk","cutiepie","sugar","cupcake","cutesy","darling","precious","lovebug","sweetie","sugarplum","angel"],s=["#ffda1e","#f2a005","#f24503","#fe9ad2","#9d9bfe","#1f99fd","#7ac6ff","#60dfcd","#62ca9c"];let a=n[Math.floor(Math.random()*n.length)],i=s[Math.floor(Math.random()*s.length)],f;const p=h=>{t(0,i=h)},o=()=>{!a||a===""||x(ee,l=[...l,{name:a,uid:"",color:"#fbb",score:0,progress:{linkHistory:[],linksProgressed:0,backNavs:0,isCriticallyClose:!1,timesCriticallyClose:0}}],l)},_=h=>p(h),v=h=>p(h);function u(h){f=h,t(1,f)}return[i,f,s,a,p,o,_,v,u]}class He extends J{constructor(e){super(),Y(this,e,Fe,je,K,{})}}function ge(r,e,t){const l=r.slice();return l[11]=e[t],l[13]=t,l}function Me(r){let e,t,l=r[2].route,n=[];for(let a=0;a<l.length;a+=1)n[a]=ke(ge(r,l,a));const s=a=>V(n[a],1,1,()=>{n[a]=null});return{c(){e=T("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=I(a,"DIV",{class:!0});var i=C(e);for(let f=0;f<n.length;f+=1)n[f].l(i);i.forEach(m),this.h()},h(){$(e,"class","numbered-list svelte-fbjar")},m(a,i){E(a,e,i);for(let f=0;f<n.length;f+=1)n[f].m(e,null);t=!0},p(a,i){if(i&20){l=a[2].route;let f;for(f=0;f<l.length;f+=1){const p=ge(a,l,f);n[f]?(n[f].p(p,i),S(n[f],1)):(n[f]=ke(p),n[f].c(),S(n[f],1),n[f].m(e,null))}for(X(),f=l.length;f<n.length;f+=1)s(f);Q()}},i(a){if(!t){for(let i=0;i<l.length;i+=1)S(n[i]);t=!0}},o(a){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)V(n[i]);t=!1},d(a){a&&m(e),Te(n,a)}}}function Oe(r){let e,t;return{c(){e=T("p"),t=R("There are no routes so far.")},l(l){e=I(l,"P",{});var n=C(e);t=A(n,"There are no routes so far."),n.forEach(m)},m(l,n){E(l,e,n),D(e,t)},p:H,i:H,o:H,d(l){l&&m(e)}}}function ke(r){let e,t,l,n,s=r[11]+"",a,i,f,p,o,_,v,u,h;return p=new Ie({props:{color:"red",icon:"akar-icons:cross"}}),{c(){e=T("div"),t=T("span"),l=R(r[13]),n=R(". "),a=R(s),i=N(),f=T("div"),z(p.$$.fragment),o=N(),this.h()},l(g){e=I(g,"DIV",{class:!0});var c=C(e);t=I(c,"SPAN",{});var k=C(t);l=A(k,r[13]),n=A(k,". "),a=A(k,s),k.forEach(m),i=P(c),f=I(c,"DIV",{});var w=C(f);L(p.$$.fragment,w),w.forEach(m),o=P(c),c.forEach(m),this.h()},h(){$(e,"class","svelte-fbjar")},m(g,c){E(g,e,c),D(e,t),D(t,l),D(t,n),D(t,a),D(e,i),D(e,f),G(p,f,null),D(e,o),v=!0,u||(h=q(f,"click",function(){ie(r[4](r[11]))&&r[4](r[11]).apply(this,arguments)}),u=!0)},p(g,c){r=g,(!v||c&4)&&s!==(s=r[11]+"")&&se(a,s)},i(g){v||(S(p.$$.fragment,g),_||ne(()=>{_=re(e,O,{}),_.start()}),v=!0)},o(g){V(p.$$.fragment,g),v=!1},d(g){g&&m(e),U(p),u=!1,h()}}}function We(r){let e,t,l,n,s,a,i,f,p,o,_,v,u,h,g;const c=[Oe,Me],k=[];function w(y,d){return y[2].route.length===0?0:1}e=w(r),t=k[e]=c[e](r);function F(y){r[7](y)}let Z={text:"Choose a next route",name:"route",id:"route",type:"route",required:!0,attempted:!0};return r[0]!==void 0&&(Z.value=r[0]),s=new Ce({props:Z}),te.push(()=>$e(s,"value",F)),{c(){t.c(),l=N(),n=T("div"),z(s.$$.fragment),i=N(),f=T("button"),p=R("+ Add Route"),o=N(),_=T("button"),v=R("Finish and start game"),this.h()},l(y){t.l(y),l=P(y),n=I(y,"DIV",{class:!0});var d=C(n);L(s.$$.fragment,d),d.forEach(m),i=P(y),f=I(y,"BUTTON",{class:!0});var b=C(f);p=A(b,"+ Add Route"),b.forEach(m),o=P(y),_=I(y,"BUTTON",{class:!0});var B=C(_);v=A(B,"Finish and start game"),B.forEach(m),this.h()},h(){$(n,"class","svelte-fbjar"),j(n,"shake",r[1]),$(f,"class","button"),$(_,"class","button svelte-fbjar"),j(_,"disabled",r[2].route.length<2)},m(y,d){k[e].m(y,d),E(y,l,d),E(y,n,d),G(s,n,null),E(y,i,d),E(y,f,d),D(f,p),E(y,o,d),E(y,_,d),D(_,v),u=!0,h||(g=[q(f,"click",function(){ie(r[3](r[0]))&&r[3](r[0]).apply(this,arguments)}),q(f,"keydown",function(){ie(r[3](r[0]))&&r[3](r[0]).apply(this,arguments)}),q(_,"click",r[5]),q(_,"keydown",r[5])],h=!0)},p(y,[d]){r=y;let b=e;e=w(r),e===b?k[e].p(r,d):(X(),V(k[b],1,1,()=>{k[b]=null}),Q(),t=k[e],t?t.p(r,d):(t=k[e]=c[e](r),t.c()),S(t,1),t.m(l.parentNode,l));const B={};!a&&d&1&&(a=!0,B.value=r[0],Ee(()=>a=!1)),s.$set(B),(!u||d&2)&&j(n,"shake",r[1]),(!u||d&4)&&j(_,"disabled",r[2].route.length<2)},i(y){u||(S(t),S(s.$$.fragment,y),u=!0)},o(y){V(t),V(s.$$.fragment,y),u=!1},d(y){k[e].d(y),y&&m(l),y&&m(n),U(s),y&&m(i),y&&m(f),y&&m(o),y&&m(_),h=!1,le(g)}}}function Je(r,e,t){let l;M(r,W,h=>t(2,l=h));let n,s=!1,a={},i;const f=(h,g)=>{clearTimeout(i),i=setTimeout(()=>{h()},g)},p=async()=>{t(1,s=!0),await new Promise(h=>setTimeout(h,820)),t(1,s=!1)},o=h=>()=>{if(!h||h===""){p();return}if(l.route.includes(h)){p();return}x(W,l={...l,route:[...l.route,h]},l)},_=h=>()=>{const g=l.route.indexOf(h);g!==-1&&(l.route.splice(g,1),x(W,l={...l,route:[...l.route]},l))},v=()=>{x(W,l={...l,id:"test",ready:!0},l)};function u(h){n=h,t(0,n)}return r.$$.update=()=>{r.$$.dirty&1&&f(()=>fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${n}`).then(h=>h.json()).then(h=>t(6,a=h)),500),r.$$.dirty&64&&console.log({searchList:a})},[n,s,l,o,_,v,a,u]}class Ye extends J{constructor(e){super(),Y(this,e,Je,We,K,{})}}function be(r,e,t){const l=r.slice();return l[7]=e[t],l}function ye(r){let e,t;return e=new Be({props:{player:r[7]}}),{c(){z(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,n){const s={};n&4&&(s.player=l[7]),e.$set(s)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function we(r){let e,t;return{c(){e=T("p"),t=R("Cannot start game with only one player :)")},l(l){e=I(l,"P",{});var n=C(e);t=A(n,"Cannot start game with only one player :)"),n.forEach(m)},m(l,n){E(l,e,n),D(e,t)},d(l){l&&m(e)}}}function Ke(r){let e,t,l,n,s,a,i,f,p,o,_,v=r[2],u=[];for(let c=0;c<v.length;c+=1)u[c]=ye(be(r,v,c));const h=c=>V(u[c],1,1,()=>{u[c]=null});let g=r[2].length===1&&we();return{c(){for(let c=0;c<u.length;c+=1)u[c].c();e=N(),t=T("button"),l=R("Click here to copy link"),n=N(),s=R(r[1]),a=N(),g&&g.c(),i=N(),f=T("div"),this.h()},l(c){for(let w=0;w<u.length;w+=1)u[w].l(c);e=P(c),t=I(c,"BUTTON",{class:!0});var k=C(t);l=A(k,"Click here to copy link"),k.forEach(m),n=P(c),s=A(c,r[1]),a=P(c),g&&g.l(c),i=P(c),f=I(c,"DIV",{}),C(f).forEach(m),this.h()},h(){$(t,"class","button")},m(c,k){for(let w=0;w<u.length;w+=1)u[w].m(c,k);E(c,e,k),E(c,t,k),D(t,l),E(c,n,k),E(c,s,k),E(c,a,k),g&&g.m(c,k),E(c,i,k),E(c,f,k),r[6](f),p=!0,o||(_=[q(t,"click",r[3]),q(t,"keydown",r[3])],o=!0)},p(c,[k]){if(k&4){v=c[2];let w;for(w=0;w<v.length;w+=1){const F=be(c,v,w);u[w]?(u[w].p(F,k),S(u[w],1)):(u[w]=ye(F),u[w].c(),S(u[w],1),u[w].m(e.parentNode,e))}for(X(),w=v.length;w<u.length;w+=1)h(w);Q()}(!p||k&2)&&se(s,c[1]),c[2].length===1?g||(g=we(),g.c(),g.m(i.parentNode,i)):g&&(g.d(1),g=null)},i(c){if(!p){for(let k=0;k<v.length;k+=1)S(u[k]);p=!0}},o(c){u=u.filter(Boolean);for(let k=0;k<u.length;k+=1)V(u[k]);p=!1},d(c){Te(u,c),c&&m(e),c&&m(t),c&&m(n),c&&m(s),c&&m(a),g&&g.d(c),c&&m(i),c&&m(f),r[6](null),o=!1,le(_)}}}function Xe(r,e,t){let l,n,s;M(r,W,o=>t(4,l=o)),M(r,Re,o=>t(5,n=o)),M(r,ee,o=>t(2,s=o));let a,i;const f=()=>{const o=i;new Le({target:a,props:{value:o}}).$destroy(),qe("Link copied!")};function p(o){te[o?"unshift":"push"](()=>{a=o,t(0,a)})}return r.$$.update=()=>{r.$$.dirty&48&&t(1,i=`${n.url.toString().split(_e)[0]}${_e}/game/${l.id}`)},[a,i,s,f,l,n,p]}class Qe extends J{constructor(e){super(),Y(this,e,Xe,Ke,K,{})}}function Ze(r){let e,t,l,n,s;return t=new Qe({}),{c(){e=T("div"),z(t.$$.fragment),this.h()},l(a){e=I(a,"DIV",{class:!0});var i=C(e);L(t.$$.fragment,i),i.forEach(m),this.h()},h(){$(e,"class","maintain-position svelte-14u4mi6")},m(a,i){E(a,e,i),G(t,e,null),s=!0},i(a){s||(S(t.$$.fragment,a),ne(()=>{n&&n.end(1),l=re(e,O,{x:500}),l.start()}),s=!0)},o(a){V(t.$$.fragment,a),l&&l.invalidate(),n=oe(e,O,{x:-500}),s=!1},d(a){a&&m(e),U(t),a&&n&&n.end()}}}function xe(r){let e,t,l,n,s;return t=new Ye({}),{c(){e=T("div"),z(t.$$.fragment),this.h()},l(a){e=I(a,"DIV",{class:!0});var i=C(e);L(t.$$.fragment,i),i.forEach(m),this.h()},h(){$(e,"class","maintain-position svelte-14u4mi6")},m(a,i){E(a,e,i),G(t,e,null),s=!0},i(a){s||(S(t.$$.fragment,a),ne(()=>{n&&n.end(1),l=re(e,O,{x:500}),l.start()}),s=!0)},o(a){V(t.$$.fragment,a),l&&l.invalidate(),n=oe(e,O,{x:-500}),s=!1},d(a){a&&m(e),U(t),a&&n&&n.end()}}}function et(r){let e,t,l,n,s;return t=new He({}),{c(){e=T("div"),z(t.$$.fragment),this.h()},l(a){e=I(a,"DIV",{class:!0});var i=C(e);L(t.$$.fragment,i),i.forEach(m),this.h()},h(){$(e,"class","maintain-position svelte-14u4mi6")},m(a,i){E(a,e,i),G(t,e,null),s=!0},i(a){s||(S(t.$$.fragment,a),ne(()=>{n&&n.end(1),l=re(e,O,{x:500}),l.start()}),s=!0)},o(a){V(t.$$.fragment,a),l&&l.invalidate(),n=oe(e,O,{x:-500}),s=!1},d(a){a&&m(e),U(t),a&&n&&n.end()}}}function tt(r){let e,t,l,n,s,a,i,f;const p=[et,xe,Ze],o=[];function _(v,u){return v[0].length===0?0:v[1].ready?2:1}return n=_(r),s=o[n]=p[n](r),i=new Pe({props:{src:"https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/2560px-Wikipedia-logo-v2.svg.png",alt:"wikipedia logo"}}),{c(){e=T("div"),t=T("div"),l=T("div"),s.c(),a=N(),z(i.$$.fragment),this.h()},l(v){e=I(v,"DIV",{class:!0});var u=C(e);t=I(u,"DIV",{class:!0});var h=C(t);l=I(h,"DIV",{class:!0});var g=C(l);s.l(g),g.forEach(m),h.forEach(m),a=P(u),L(i.$$.fragment,u),u.forEach(m),this.h()},h(){$(l,"class","carousel svelte-14u4mi6"),$(t,"class","login svelte-14u4mi6"),$(e,"class","homepage svelte-14u4mi6")},m(v,u){E(v,e,u),D(e,t),D(t,l),o[n].m(l,null),D(e,a),G(i,e,null),f=!0},p(v,u){let h=n;n=_(v),n!==h&&(X(),V(o[h],1,1,()=>{o[h]=null}),Q(),s=o[n],s||(s=o[n]=p[n](v),s.c()),S(s,1),s.m(l,null))},i(v){f||(S(s),S(i.$$.fragment,v),f=!0)},o(v){V(s),V(i.$$.fragment,v),f=!1},d(v){v&&m(e),o[n].d(),U(i)}}}function lt(r){let e,t;return e=new Ne({props:{backBtn:!1,$$slots:{default:[tt]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,[n]){const s={};n&7&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function nt(r,e,t){let l,n;return M(r,ee,s=>t(0,l=s)),M(r,W,s=>t(1,n=s)),[l,n]}class ct extends J{constructor(e){super(),Y(this,e,nt,lt,K,{})}}export{ct as default};
