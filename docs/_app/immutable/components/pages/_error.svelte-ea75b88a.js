import{S as A,i as B,s as D,v as L,w as Q,x as R,f as T,t as j,y as z,Q as G,k as H,q as $,a as J,l as K,m as M,r as u,h as p,c as O,b as S,L as _,u as I}from"../../chunks/singletons-e95a346c.js";import{p as P}from"../../chunks/stores-7f6bd896.js";import{C as U,F as V}from"../../chunks/FallbackImage-35999f5a.js";function W(o){var g,d,v,b,h,N;let e,s=o[0].status+"",a,n,l=((v=(d=(g=o[0])==null?void 0:g.error)==null?void 0:d.message)!=null?v:"No error message")+"",i,f,m,c;return m=new V({props:{alt:`${o[0].status}, ${(N=(h=(b=o[0])==null?void 0:b.error)==null?void 0:h.message)!=null?N:"No error message"}`}}),{c(){e=H("center"),a=$(s),n=$(": "),i=$(l),f=J(),L(m.$$.fragment)},l(t){e=K(t,"CENTER",{});var r=M(e);a=u(r,s),n=u(r,": "),i=u(r,l),r.forEach(p),f=O(t),Q(m.$$.fragment,t)},m(t,r){S(t,e,r),_(e,a),_(e,n),_(e,i),S(t,f,r),R(m,t,r),c=!0},p(t,r){var C,E,w,y,q,F;(!c||r&1)&&s!==(s=t[0].status+"")&&I(a,s),(!c||r&1)&&l!==(l=((w=(E=(C=t[0])==null?void 0:C.error)==null?void 0:E.message)!=null?w:"No error message")+"")&&I(i,l);const k={};r&1&&(k.alt=`${t[0].status}, ${(F=(q=(y=t[0])==null?void 0:y.error)==null?void 0:q.message)!=null?F:"No error message"}`),m.$set(k)},i(t){c||(T(m.$$.fragment,t),c=!0)},o(t){j(m.$$.fragment,t),c=!1},d(t){t&&p(e),t&&p(f),z(m,t)}}}function X(o){let e,s;return e=new U({props:{$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},l(a){Q(e.$$.fragment,a)},m(a,n){R(e,a,n),s=!0},p(a,[n]){const l={};n&3&&(l.$$scope={dirty:n,ctx:a}),e.$set(l)},i(a){s||(T(e.$$.fragment,a),s=!0)},o(a){j(e.$$.fragment,a),s=!1},d(a){z(e,a)}}}function Y(o,e,s){let a;return G(o,P,n=>s(0,a=n)),[a]}class te extends A{constructor(e){super(),B(this,e,Y,X,D,{})}}export{te as default};
