function y(){}const G=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t()}function Z(){return Object.create(null)}function $(t){t.forEach(et)}function N(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Ft(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function gt(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t){let e;return J(t,n=>e=n)(),e}function It(t,e,n){t.$$.on_destroy.push(J(e,n))}function Wt(t,e,n,i){if(t){const s=nt(t,e,n,i);return t[0](s)}}function nt(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,l){if(s){const r=nt(e,n,i,l);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ut(t){return t==null?"":t}function Vt(t,e,n){return t.set(n),e}function Xt(t){return t&&N(t.destroy)?t.destroy:y}const it=typeof window<"u";let K=it?()=>window.performance.now():()=>Date.now(),Q=it?t=>requestAnimationFrame(t):y;const E=new Set;function rt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&Q(rt)}function U(t){let e;return E.size===0&&Q(rt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let F=!1;function bt(){F=!0}function $t(){F=!1}function xt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:xt(1,s,a=>e[n[a]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[c],_)}}function wt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=ot("style");return Et(st(t),e),e.sheet}function Et(t,e){return wt(t.head||t,e),e.sheet}function At(t,e){if(F){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){F&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function te(){return V(" ")}function ee(){return V("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ut(t,i,e[i])}function re(t,e){for(const n in e)ut(t,n,e[n])}function St(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){Ct(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function at(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function se(t,e,n){return at(t,e,n,ot)}function ce(t,e,n){return at(t,e,n,Nt)}function jt(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function oe(t){return jt(t," ")}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ae(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function fe(t,e=document.body){return Array.from(e.querySelectorAll(t))}const T=new Map;let L=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:kt(e),rules:{}};return T.set(t,n),n}function R(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=c){const b=e+(n-e)*l(p);u+=p*100+`%{${r(b,1-b)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${qt(_)}_${o}`,a=st(t),{stylesheet:d,rules:h}=T.get(a)||Dt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${s}ms 1 both`,L+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||Mt())}function Mt(){Q(()=>{L||(T.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ct(e)}),T.clear())})}let D;function q(t){D=t}function S(){if(!D)throw new Error("Function called outside component initialization");return D}function _e(t){S().$$.on_mount.push(t)}function de(t){S().$$.after_update.push(t)}function he(t){S().$$.on_destroy.push(t)}function me(){const t=S();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ft(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function pe(t,e){return S().$$.context.set(t,e),e}function ye(t){return S().$$.context.get(t)}function ge(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const j=[],tt=[],P=[],I=[],_t=Promise.resolve();let W=!1;function dt(){W||(W=!0,_t.then(ht))}function be(){return dt(),_t}function A(t){P.push(t)}function $e(t){I.push(t)}const H=new Set;let O=0;function ht(){const t=D;do{for(;O<j.length;){const e=j[O];O++,q(e),Ot(e.$$)}for(q(null),j.length=0,O=0;tt.length;)tt.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];H.has(n)||(H.add(n),n())}P.length=0}while(j.length);for(;I.length;)I.pop()();W=!1,H.clear(),q(t)}function Ot(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let C;function X(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function w(t,e,n){t.dispatchEvent(ft(`${e?"intro":"outro"}${n}`))}const z=new Set;let g;function xe(){g={r:0,c:[],p:g}}function ve(){g.r||$(g.c),g=g.p}function Pt(t,e){t&&t.i&&(z.delete(t),t.i(e))}function we(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),g.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Y={duration:0};function ke(t,e,n){let i=e(t,n),s=!1,l,r,o=0;function c(){l&&B(t,l)}function u(){const{delay:f=0,duration:a=300,easing:d=G,tick:h=y,css:m}=i||Y;m&&(l=R(t,0,1,a,f,d,m,o++)),h(0,1);const p=K()+f,b=p+a;r&&r.abort(),s=!0,A(()=>w(t,!0,"start")),r=U(x=>{if(s){if(x>=b)return h(1,0),w(t,!0,"end"),c(),s=!1;if(x>=p){const v=d((x-p)/a);h(v,1-v)}}return s})}let _=!1;return{start(){_||(_=!0,B(t),N(i)?(i=i(),X().then(u)):u())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function Ee(t,e,n){let i=e(t,n),s=!0,l;const r=g;r.r+=1;function o(){const{delay:c=0,duration:u=300,easing:_=G,tick:f=y,css:a}=i||Y;a&&(l=R(t,1,0,u,c,_,a));const d=K()+c,h=d+u;A(()=>w(t,!1,"start")),U(m=>{if(s){if(m>=h)return f(0,1),w(t,!1,"end"),--r.r||$(r.c),!1;if(m>=d){const p=_((m-d)/u);f(1-p,p)}}return s})}return N(i)?X().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),s&&(l&&B(t,l),s=!1)}}}function Ae(t,e,n,i){let s=e(t,n),l=i?0:1,r=null,o=null,c=null;function u(){c&&B(t,c)}function _(a,d){const h=a.b-l;return d*=Math.abs(h),{a:l,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:m=G,tick:p=y,css:b}=s||Y,x={start:K()+d,b:a};a||(x.group=g,g.r+=1),r||o?o=x:(b&&(u(),c=R(t,l,a,h,d,m,b)),a&&p(0,1),r=_(x,h),A(()=>w(t,a,"start")),U(v=>{if(o&&v>o.start&&(r=_(o,h),o=null,w(t,r.b,"start"),b&&(u(),c=R(t,l,r.b,r.duration,0,m,s.css))),r){if(v>=r.end)p(l=r.b,1-l),w(t,r.b,"end"),o||(r.b?u():--r.group.r||$(r.group.c)),r=null;else if(v>=r.start){const mt=v-r.start;l=r.a+r.d*m(mt/r.duration),p(l,1-l)}}return!!(r||o)}))}return{run(a){N(s)?X().then(()=>{s=s(),f(a)}):f(a)},end(){u(),r=o=null}}}function Ne(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Se(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ce(t){t&&t.c()}function je(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||A(()=>{const c=l.map(et).filter(N);r?r.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(A)}function Tt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(j.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,i,s,l,r,o=[-1]){const c=D;q(t);const u=t.$$={fragment:null,ctx:null,props:l,update:y,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Lt(t,f)),a}):[],u.update(),_=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){bt();const f=St(e.target);u.fragment&&u.fragment.l(f),f.forEach(ct)}else u.fragment&&u.fragment.c();e.intro&&Pt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),$t(),ht()}q(c)}class De{$destroy(){Tt(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const k=[];function Rt(t,e){return{subscribe:Bt(t,e).subscribe}}function Bt(t,e=y){let n;const i=new Set;function s(o){if(yt(t,o)&&(t=o,n)){const c=!k.length;for(const u of i)u[1](),k.push(u,t);if(c){for(let u=0;u<k.length;u+=2)k[u][0](k[u+1]);k.length=0}}}function l(o){s(o(t))}function r(o,c=y){const u=[o,c];return i.add(u),i.size===1&&(n=e(s)||y),o(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:s,update:l,subscribe:r}}function Me(t,e,n){const i=!Array.isArray(t),s=i?[t]:t,l=e.length<2;return Rt(n,r=>{let o=!1;const c=[];let u=0,_=y;const f=()=>{if(u)return;_();const d=e(i?c[0]:c,r);l?r(d):_=N(d)?d:y},a=s.map((d,h)=>J(d,m=>{c[h]=m,u&=~(1<<h),o&&f()},()=>{u|=1<<h}));return o=!0,f(),function(){$(a),_()}})}export{me as $,Bt as A,ae as B,y as C,Wt as D,ne as E,N as F,Jt as G,Kt as H,Gt as I,It as J,At as K,A as L,ke as M,Ee as N,Zt as O,Ut as P,fe as Q,G as R,De as S,he as T,pt as U,Qt as V,ie as W,Ne as X,Nt as Y,ce as Z,re as _,te as a,Ft as a0,Me as a1,Ht as a2,pe as a3,ye as a4,Xt as a5,$ as a6,Vt as a7,tt as a8,Rt as a9,Se as aa,$e as ab,ge as ac,S as ad,K as ae,U as af,J as ag,Ae as ah,Yt as b,oe as c,ve as d,ee as e,Pt as f,xe as g,ct as h,qe as i,de as j,ot as k,se as l,St as m,ut as n,_e as o,le as p,V as q,jt as r,yt as s,we as t,ue as u,Ce as v,je as w,zt as x,Tt as y,be as z};
