import{S as L,i as F,s as U,a8 as qe,aa as Je,v as S,w as E,x as A,ab as Qe,f as b,t as _,y as k,D as ht,G as dt,H as mt,I as bt,ac as Re,A as Ae,a as R,c as C,b as P,C as G,h as T,E as ae,a6 as gt,J as I,o as xe,a1 as vt,g as le,d as ue,a7 as fe,e as Ce,O as Be,k as N,q as ke,l as X,m as Z,r as Oe,n as q,K as W,u as _t,L as et,M as yt,ah as je}from"../../../chunks/index-e3a647de.js";import{aj as $t,ak as wt,ab as ie,ae as tt,af as Te,a9 as ee,a7 as H,a4 as St,c as rt,a6 as he,al as Et,am as x,P as At,D as kt,G as Ot,ac as Tt,O as Dt,ag as Pt,ah as It}from"../../../chunks/index-6b10de05.js";import{e as zt,b as Rt,q as me,s as ve}from"../../../chunks/index-320460e1.js";function Ct(n){let e;const r=n[16].default,t=ht(r,n,n[20],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,o){t&&t.m(i,o),e=!0},p(i,o){t&&t.p&&(!e||o&1048576)&&dt(t,r,i,i[20],e?bt(r,i[20],o,null):mt(i[20]),null)},i(i){e||(b(t,i),e=!0)},o(i){_(t,i),e=!1},d(i){t&&t.d(i)}}}function Bt(n){let e,r,t;function i(s){n[17](s)}let o={light:n[15],lookAt:n[4],position:n[1],scale:n[2],rotation:n[3],castShadow:n[5],receiveShadow:n[6],frustumCulled:n[7],renderOrder:n[8],visible:n[9],userData:n[10],dispose:n[11],viewportAware:n[12],color:n[13],intensity:n[14],$$slots:{default:[Ct]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.inViewport=n[0]),e=new $t({props:o}),qe.push(()=>Je(e,"inViewport",i)),e.$on("viewportenter",n[18]),e.$on("viewportleave",n[19]),{c(){S(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,a){A(e,s,a),t=!0},p(s,[a]){const l={};a&16&&(l.lookAt=s[4]),a&2&&(l.position=s[1]),a&4&&(l.scale=s[2]),a&8&&(l.rotation=s[3]),a&32&&(l.castShadow=s[5]),a&64&&(l.receiveShadow=s[6]),a&128&&(l.frustumCulled=s[7]),a&256&&(l.renderOrder=s[8]),a&512&&(l.visible=s[9]),a&1024&&(l.userData=s[10]),a&2048&&(l.dispose=s[11]),a&4096&&(l.viewportAware=s[12]),a&8192&&(l.color=s[13]),a&16384&&(l.intensity=s[14]),a&1048576&&(l.$$scope={dirty:a,ctx:s}),!r&&a&1&&(r=!0,l.inViewport=s[0],Qe(()=>r=!1)),e.$set(l)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function jt(n,e,r){let{$$slots:t={},$$scope:i}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{castShadow:f=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:g=void 0}=e,{visible:O=void 0}=e,{userData:w=void 0}=e,{dispose:c=void 0}=e,{viewportAware:D=!1}=e,{inViewport:y=!1}=e,{color:m=void 0}=e,{intensity:M=void 0}=e;const u=new wt(m,M);function p($){y=$,r(0,y)}function v($){Re.call(this,n,$)}function Y($){Re.call(this,n,$)}return n.$$set=$=>{"position"in $&&r(1,o=$.position),"scale"in $&&r(2,s=$.scale),"rotation"in $&&r(3,a=$.rotation),"lookAt"in $&&r(4,l=$.lookAt),"castShadow"in $&&r(5,f=$.castShadow),"receiveShadow"in $&&r(6,h=$.receiveShadow),"frustumCulled"in $&&r(7,d=$.frustumCulled),"renderOrder"in $&&r(8,g=$.renderOrder),"visible"in $&&r(9,O=$.visible),"userData"in $&&r(10,w=$.userData),"dispose"in $&&r(11,c=$.dispose),"viewportAware"in $&&r(12,D=$.viewportAware),"inViewport"in $&&r(0,y=$.inViewport),"color"in $&&r(13,m=$.color),"intensity"in $&&r(14,M=$.intensity),"$$scope"in $&&r(20,i=$.$$scope)},[y,o,s,a,l,f,h,d,g,O,w,c,D,m,M,u,t,p,v,Y,i]}class Lt extends L{constructor(e){super(),F(this,e,jt,Bt,U,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,viewportAware:12,inViewport:0,color:13,intensity:14,light:15})}get light(){return this.$$.ctx[15]}}var _e=function(n,e){return _e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])},_e(n,e)};function J(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");_e(n,e);function r(){this.constructor=n}n.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}function ye(n){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&n[e],t=0;if(r)return r.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ce(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=t.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(r=t.return)&&r.call(t)}finally{if(s)throw s.error}}return o}function pe(n,e,r){if(r||arguments.length===2)for(var t=0,i=e.length,o;t<i;t++)(o||!(t in e))&&(o||(o=Array.prototype.slice.call(e,0,t)),o[t]=e[t]);return n.concat(o||Array.prototype.slice.call(e))}function V(n){return typeof n=="function"}function nt(n){var e=function(t){Error.call(t),t.stack=new Error().stack},r=n(e);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var be=nt(function(n){return function(r){n(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(t,i){return i+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function $e(n,e){if(n){var r=n.indexOf(e);0<=r&&n.splice(r,1)}}var de=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,r,t,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=ye(s),l=a.next();!l.done;l=a.next()){var f=l.value;f.remove(this)}}catch(c){e={error:c}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(e)throw e.error}}else s.remove(this);var h=this.initialTeardown;if(V(h))try{h()}catch(c){o=c instanceof be?c.errors:[c]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var g=ye(d),O=g.next();!O.done;O=g.next()){var w=O.value;try{Le(w)}catch(c){o=o!=null?o:[],c instanceof be?o=pe(pe([],ce(o)),ce(c.errors)):o.push(c)}}}catch(c){t={error:c}}finally{try{O&&!O.done&&(i=g.return)&&i.call(g)}finally{if(t)throw t.error}}}if(o)throw new be(o)}},n.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)Le(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(e)}},n.prototype._hasParent=function(e){var r=this._parentage;return r===e||Array.isArray(r)&&r.includes(e)},n.prototype._addParent=function(e){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(e),r):r?[r,e]:e},n.prototype._removeParent=function(e){var r=this._parentage;r===e?this._parentage=null:Array.isArray(r)&&$e(r,e)},n.prototype.remove=function(e){var r=this._finalizers;r&&$e(r,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),it=de.EMPTY;function ot(n){return n instanceof de||n&&"closed"in n&&V(n.remove)&&V(n.add)&&V(n.unsubscribe)}function Le(n){V(n)?n():n.unsubscribe()}var De={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},we={setTimeout:function(n,e){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var i=we.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,pe([n,e],ce(r))):setTimeout.apply(void 0,pe([n,e],ce(r)))},clearTimeout:function(n){var e=we.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function Ft(n){we.setTimeout(function(){throw n})}function Fe(){}var te=null;function oe(n){if(De.useDeprecatedSynchronousErrorHandling){var e=!te;if(e&&(te={errorThrown:!1,error:null}),n(),e){var r=te,t=r.errorThrown,i=r.error;if(te=null,t)throw i}}else n()}var Pe=function(n){J(e,n);function e(r){var t=n.call(this)||this;return t.isStopped=!1,r?(t.destination=r,ot(r)&&r.add(t)):t.destination=Gt,t}return e.create=function(r,t,i){return new Se(r,t,i)},e.prototype.next=function(r){this.isStopped||this._next(r)},e.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(r){this.destination.next(r)},e.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(de),Ut=Function.prototype.bind;function ge(n,e){return Ut.call(n,e)}var Mt=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var r=this.partialObserver;if(r.next)try{r.next(e)}catch(t){re(t)}},n.prototype.error=function(e){var r=this.partialObserver;if(r.error)try{r.error(e)}catch(t){re(t)}else re(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(r){re(r)}},n}(),Se=function(n){J(e,n);function e(r,t,i){var o=n.call(this)||this,s;if(V(r)||!r)s={next:r!=null?r:void 0,error:t!=null?t:void 0,complete:i!=null?i:void 0};else{var a;o&&De.useDeprecatedNextContext?(a=Object.create(r),a.unsubscribe=function(){return o.unsubscribe()},s={next:r.next&&ge(r.next,a),error:r.error&&ge(r.error,a),complete:r.complete&&ge(r.complete,a)}):s=r}return o.destination=new Mt(s),o}return e}(Pe);function re(n){Ft(n)}function Vt(n){throw n}var Gt={closed:!0,next:Fe,error:Vt,complete:Fe},Wt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function st(n){return n}function Yt(n){return n.length===0?st:n.length===1?n[0]:function(r){return n.reduce(function(t,i){return i(t)},r)}}var Ue=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var r=new n;return r.source=this,r.operator=e,r},n.prototype.subscribe=function(e,r,t){var i=this,o=Kt(e)?e:new Se(e,r,t);return oe(function(){var s=i,a=s.operator,l=s.source;o.add(a?a.call(o,l):l?i._subscribe(o):i._trySubscribe(o))}),o},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(r){e.error(r)}},n.prototype.forEach=function(e,r){var t=this;return r=Me(r),new r(function(i,o){var s=new Se({next:function(a){try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});t.subscribe(s)})},n.prototype._subscribe=function(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)},n.prototype[Wt]=function(){return this},n.prototype.pipe=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return Yt(e)(this)},n.prototype.toPromise=function(e){var r=this;return e=Me(e),new e(function(t,i){var o;r.subscribe(function(s){return o=s},function(s){return i(s)},function(){return t(o)})})},n.create=function(e){return new n(e)},n}();function Me(n){var e;return(e=n!=null?n:De.Promise)!==null&&e!==void 0?e:Promise}function Ht(n){return n&&V(n.next)&&V(n.error)&&V(n.complete)}function Kt(n){return n&&n instanceof Pe||Ht(n)&&ot(n)}function Nt(n){return V(n==null?void 0:n.lift)}function Ie(n){return function(e){if(Nt(e))return e.lift(function(r){try{return n(r,this)}catch(t){this.error(t)}});throw new TypeError("Unable to lift unknown Observable type")}}function ze(n,e,r,t,i){return new Xt(n,e,r,t,i)}var Xt=function(n){J(e,n);function e(r,t,i,o,s,a){var l=n.call(this,r)||this;return l.onFinalize=s,l.shouldUnsubscribe=a,l._next=t?function(f){try{t(f)}catch(h){r.error(h)}}:n.prototype._next,l._error=o?function(f){try{o(f)}catch(h){r.error(h)}finally{this.unsubscribe()}}:n.prototype._error,l._complete=i?function(){try{i()}catch(f){r.error(f)}finally{this.unsubscribe()}}:n.prototype._complete,l}return e.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var t=this.closed;n.prototype.unsubscribe.call(this),!t&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},e}(Pe),Zt=nt(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),at=function(n){J(e,n);function e(){var r=n.call(this)||this;return r.closed=!1,r.currentObservers=null,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return e.prototype.lift=function(r){var t=new Ve(this,this);return t.operator=r,t},e.prototype._throwIfClosed=function(){if(this.closed)throw new Zt},e.prototype.next=function(r){var t=this;oe(function(){var i,o;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var s=ye(t.currentObservers),a=s.next();!a.done;a=s.next()){var l=a.value;l.next(r)}}catch(f){i={error:f}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},e.prototype.error=function(r){var t=this;oe(function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=r;for(var i=t.observers;i.length;)i.shift().error(r)}})},e.prototype.complete=function(){var r=this;oe(function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var t=r.observers;t.length;)t.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(r){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,r)},e.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},e.prototype._innerSubscribe=function(r){var t=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?it:(this.currentObservers=null,a.push(r),new de(function(){t.currentObservers=null,$e(a,r)}))},e.prototype._checkFinalizedStatuses=function(r){var t=this,i=t.hasError,o=t.thrownError,s=t.isStopped;i?r.error(o):s&&r.complete()},e.prototype.asObservable=function(){var r=new Ue;return r.source=this,r},e.create=function(r,t){return new Ve(r,t)},e}(Ue),Ve=function(n){J(e,n);function e(r,t){var i=n.call(this)||this;return i.destination=r,i.source=t,i}return e.prototype.next=function(r){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,r)},e.prototype.error=function(r){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,r)},e.prototype.complete=function(){var r,t;(t=(r=this.destination)===null||r===void 0?void 0:r.complete)===null||t===void 0||t.call(r)},e.prototype._subscribe=function(r){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(r))!==null&&i!==void 0?i:it},e}(at),qt=function(n){J(e,n);function e(r){var t=n.call(this)||this;return t._value=r,t}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(r){var t=n.prototype._subscribe.call(this,r);return!t.closed&&r.next(this._value),t},e.prototype.getValue=function(){var r=this,t=r.hasError,i=r.thrownError,o=r._value;if(t)throw i;return this._throwIfClosed(),o},e.prototype.next=function(r){n.prototype.next.call(this,this._value=r)},e}(at);function Jt(n,e){return Ie(function(r,t){var i=0;r.subscribe(ze(t,function(o){t.next(n.call(e,o,i++))}))})}function Qt(n,e){return Ie(function(r,t){var i=0;r.subscribe(ze(t,function(o){return n.call(e,o,i++)&&t.next(o)}))})}function xt(n,e){return e===void 0&&(e=st),n=n!=null?n:er,Ie(function(r,t){var i,o=!0;r.subscribe(ze(t,function(s){var a=e(s);(o||!n(i,a))&&(o=!1,i=a,t.next(s))}))})}function er(n,e){return n===e}function tr(n,e){return xt(function(r,t){return e?e(r[n],t[n]):r[n]===t[n]})}const j=26,B=10,z=400,rr=new ie(0,5,-5),Ge=Array(Math.floor(z/100)).fill("x").map((n,e)=>({position:{x:e%2?-(j/2-4):j/2-4,y:(B-2)/2,z:z/(z/100+1)*(e+1)*-1}})),We=Array(Math.floor(z/100)).fill("x").map((n,e)=>{const r=e%2?"VERT":"SPIN";return{type:r,position:{x:0,y:r==="VERT"?B-2:2,z:z/(z/100+1)*(e+1)*-1+40}}}),K=Ae("IDLE"),Ee=Ae("0.00"),lt=Ae({FORWARD:!1,RIGHT:!1,BACKWARD:!1,LEFT:!1,JUMP:!1}),ut=new qt(rr),se=n=>ut.asObservable().pipe(Qt(e=>!!e),tr(n),Jt(e=>e[n]));function Q(n,e){lt.update(r=>(r[n]=e,r))}function Ye(n,e){switch(n.code){case"Space":Q("JUMP",e);break;case"ArrowRight":case"d":Q("RIGHT",e);break;case"ArrowLeft":case"a":Q("LEFT",e);break;case"ArrowUp":case"w":Q("FORWARD",e);break;case"ArrowDown":case"s":Q("BACKWARD",e);break}}function nr(n){let e,r,t,i,o,s,a,l;return e=new H({props:{geometry:n[0],material:n[1],receiveShadow:!0,castShadow:!0,scale:{x:1,y:B,z},position:{x:-j/2,y:B/2,z:-z/2}}}),t=new H({props:{geometry:n[0],material:n[1],receiveShadow:!0,castShadow:!0,scale:{x:1,y:B,z},position:{x:j/2,y:B/2,z:-z/2}}}),o=new H({props:{geometry:n[0],material:n[1],receiveShadow:!0,castShadow:!0,scale:{x:j,y:B,z:1},position:{x:0,y:B/2,z:-z}}}),a=new H({props:{geometry:n[0],material:new ee({color:"#03ff00"}),receiveShadow:!0,scale:{x:j+1,y:1,z:z+.1},position:{x:0,y:0,z:-z/2}}}),{c(){S(e.$$.fragment),r=R(),S(t.$$.fragment),i=R(),S(o.$$.fragment),s=R(),S(a.$$.fragment)},l(f){E(e.$$.fragment,f),r=C(f),E(t.$$.fragment,f),i=C(f),E(o.$$.fragment,f),s=C(f),E(a.$$.fragment,f)},m(f,h){A(e,f,h),P(f,r,h),A(t,f,h),P(f,i,h),A(o,f,h),P(f,s,h),A(a,f,h),l=!0},p:G,i(f){l||(b(e.$$.fragment,f),b(t.$$.fragment,f),b(o.$$.fragment,f),b(a.$$.fragment,f),l=!0)},o(f){_(e.$$.fragment,f),_(t.$$.fragment,f),_(o.$$.fragment,f),_(a.$$.fragment,f),l=!1},d(f){k(e,f),f&&T(r),k(t,f),f&&T(i),k(o,f),f&&T(s),k(a,f)}}}function ir(n){let e,r;return e=new tt({props:{shape:"cuboid",friction:0,$$slots:{default:[nr]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,[i]){const o={};i&4&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function or(n){const e=new Te,r=new ee({color:"#495A6B"});return[e,r]}class sr extends L{constructor(e){super(),F(this,e,or,ir,U,{})}}function ar(n){let e,r,t,i;return e=new he({props:{shape:"ball",args:[1.5],mass:1.5,restitution:1}}),t=new H({props:{geometry:new Et(1.5,1),material:new ee({color:"#612899",flatShading:!0}),castShadow:!0}}),{c(){S(e.$$.fragment),r=R(),S(t.$$.fragment)},l(o){E(e.$$.fragment,o),r=C(o),E(t.$$.fragment,o)},m(o,s){A(e,o,s),P(o,r,s),A(t,o,s),i=!0},p:G,i(o){i||(b(e.$$.fragment,o),b(t.$$.fragment,o),i=!0)},o(o){_(e.$$.fragment,o),_(t.$$.fragment,o),i=!1},d(o){k(e,o),o&&T(r),k(t,o)}}}function lr(n){let e,r,t,i,o;function s(l){n[5](l)}let a={position:n[1],gravityScale:5,$$slots:{default:[ar]},$$scope:{ctx:n}};return n[0]!==void 0&&(a.rigidBody=n[0]),e=new St({props:a}),qe.push(()=>Je(e,"rigidBody",s)),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,f){A(e,l,f),t=!0,i||(o=[ae(window,"keydown",n[2]),ae(window,"keyup",n[3])],i=!0)},p(l,[f]){const h={};f&2048&&(h.$$scope={dirty:f,ctx:l}),!r&&f&1&&(r=!0,h.rigidBody=l[0],Qe(()=>r=!1)),e.$set(h)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){_(e.$$.fragment,l),t=!1},d(l){k(e,l),i=!1,gt(o)}}}const ne=1,ur=3;function fr(n,e,r){let t,i;I(n,K,w=>r(4,t=w)),I(n,lt,w=>r(6,i=w));let o,s=new ie(0,5,-5);function a(w){const c=new ie(0,0,0);switch(w){case"RIGHT":c.setX(ne);break;case"LEFT":c.setX(-ne);break;case"FORWARD":c.setZ(-ne);break;case"BACKWARD":c.setZ(ne);break;default:console.log("Unrecognized direction:",w)}o.applyImpulse(c,!0)}function l(){var c;if(((c=o==null?void 0:o.translation())==null?void 0:c.y)>B+1)return;const w=new ie(0,0,0);w.setY(ur),o.applyImpulse(w,!0)}function f(){o&&o.setTranslation(s)}function h(){i.JUMP&&l(),i.RIGHT&&a("RIGHT"),i.LEFT&&a("LEFT"),i.FORWARD&&a("FORWARD"),i.BACKWARD&&a("BACKWARD")}rt(()=>{o&&(ut.next(o.translation()),h())});const d=w=>Ye(w,!0),g=w=>Ye(w,!1);function O(w){o=w,r(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&o&&(o.setLinearDamping(.5),o.setAngularDamping(.5)),n.$$.dirty&16&&t==="IDLE"&&f()},[o,s,d,g,t,O]}class cr extends L{constructor(e){super(),F(this,e,fr,lr,U,{})}}function pr(n){let e,r;return e=new H({props:{geometry:n[3],material:n[4],castShadow:!0,receiveShadow:!0,scale:{x:n[5],y:n[6],z:ft}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:G,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function hr(n){let e,r;return e=new he({props:{shape:"cuboid",args:[n[5]/2,n[6]/2,ft/2],position:{x:n[1],y:n[0].y,z:n[0].z},$$slots:{default:[pr]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,[i]){const o={};i&3&&(o.position={x:t[1],y:t[0].y,z:t[0].z}),i&256&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}const ft=1;function dr(n,e,r){let t,{position:i}=e;const o=x(i.x,{duration:4e3,easing:zt});I(n,o,d=>r(1,t=d));const s=new Te,a=new ee({color:"#ff0000",toneMapped:!1}),l=j/2-2,f=B-2;function h(){o.set(t>0?-(l-2):l-2).then(()=>h())}return xe(()=>{h()}),n.$$set=d=>{"position"in d&&r(0,i=d.position)},[i,t,o,s,a,l,f]}class mr extends L{constructor(e){super(),F(this,e,dr,hr,U,{position:0})}}function br(n){let e,r;return e=new H({props:{geometry:n[4],material:n[5],castShadow:!0,receiveShadow:!0,scale:{x:n[6],y:ct,z:pt}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:G,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function gr(n){let e,r;return e=new he({props:{shape:"cuboid",args:[n[6]/2,ct/2,pt/2],position:{x:n[0].x,y:n[2],z:n[0].z},rotation:{y:n[1]},friction:0,$$slots:{default:[br]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,[i]){const o={};i&5&&(o.position={x:t[0].x,y:t[2],z:t[0].z}),i&2&&(o.rotation={y:t[1]}),i&512&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}const ct=3,pt=1;function vr(n,e,r){let t,{position:i}=e,{type:o}=e;const s=x(i.y,{duration:2e3,easing:Rt});I(n,s,g=>r(2,t=g));let a=0;const l=new Te,f=new ee({color:"#ff0000",toneMapped:!1}),h=j*.75;function d(){s.set(t>(B-3)/2?2:B-2).then(()=>d())}return o==="VERT"&&xe(()=>{d()}),o==="SPIN"&&rt(()=>{r(1,a+=.08)}),n.$$set=g=>{"position"in g&&r(0,i=g.position),"type"in g&&r(7,o=g.type)},[i,a,t,s,l,f,h,o]}class _r extends L{constructor(e){super(),F(this,e,vr,gr,U,{position:0,type:7})}}function yr(n){let e,r;return e=new At({props:{position:{x:n[0],y:n[1],z:n[2]},lookAt:{x:n[0],y:n[1]-5,z:n[2]-20},fov:55}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,[i]){const o={};i&7&&(o.position={x:t[0],y:t[1],z:t[2]}),i&7&&(o.lookAt={x:t[0],y:t[1]-5,z:t[2]-20}),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function $r(n,e,r){let t,i,o,s,a,l;const f={x:0,y:10,z:15},h=se("x");I(n,h,D=>r(11,o=D));const d=se("y");I(n,d,D=>r(10,i=D));const g=se("z");I(n,g,D=>r(9,t=D));const O=x(o,{duration:2e3,easing:me});I(n,O,D=>r(0,s=D));const w=x(i,{duration:2e3,easing:me});I(n,w,D=>r(1,a=D));const c=x(t,{duration:1e3,easing:me});return I(n,c,D=>r(2,l=D)),n.$$.update=()=>{n.$$.dirty&2048&&(isNaN(o)?O.set(f.x,{duration:4e3}):O.set(o)),n.$$.dirty&1024&&(isNaN(i)?w.set(f.y,{duration:4e3}):w.set(i+5)),n.$$.dirty&512&&(isNaN(t)?c.set(f.z,{duration:4e3}):c.set(t+20))},[s,a,l,h,d,g,O,w,c,t,i,o]}class wr extends L{constructor(e){super(),F(this,e,$r,yr,U,{})}}function Sr(n){let e,r,t,i;return e=new Lt({props:{intensity:.5}}),t=new kt({props:{intensity:2,position:{x:j,y:B*2,z:n[0]+15},target:{x:0,y:0,z:n[0]},shadow:{camera:{left:-15,right:z/3,top:j*2,bottom:j*-2,near:.5,far:z}}}}),{c(){S(e.$$.fragment),r=R(),S(t.$$.fragment)},l(o){E(e.$$.fragment,o),r=C(o),E(t.$$.fragment,o)},m(o,s){A(e,o,s),P(o,r,s),A(t,o,s),i=!0},p(o,[s]){const a={};s&1&&(a.position={x:j,y:B*2,z:o[0]+15}),s&1&&(a.target={x:0,y:0,z:o[0]}),t.$set(a)},i(o){i||(b(e.$$.fragment,o),b(t.$$.fragment,o),i=!0)},o(o){_(e.$$.fragment,o),_(t.$$.fragment,o),i=!1},d(o){k(e,o),o&&T(r),k(t,o)}}}function Er(n,e,r){let t;const i=se("z");return I(n,i,o=>r(0,t=o)),[t,i]}class Ar extends L{constructor(e){super(),F(this,e,Er,Sr,U,{})}}function He(n){let e,r;return e=new tt({props:{shape:"trimesh",scale:3,rotation:{y:-Math.PI/2},$$slots:{default:[kr]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,i){const o={};i&33&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function kr(n){let e,r;return e=new Dt({props:{object:n[0]}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,i){const o={};i&1&&(o.object=t[0]),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Or(n){let e,r,t,i=n[0]&&He(n);return r=new he({props:{shape:"cuboid",sensor:!0,args:[1,1,1],position:{x:0,y:13,z:1}}}),r.$on("sensorenter",n[3]),{c(){i&&i.c(),e=R(),S(r.$$.fragment)},l(o){i&&i.l(o),e=C(o),E(r.$$.fragment,o)},m(o,s){i&&i.m(o,s),P(o,e,s),A(r,o,s),t=!0},p(o,s){o[0]?i?(i.p(o,s),s&1&&b(i,1)):(i=He(o),i.c(),b(i,1),i.m(e.parentNode,e)):i&&(le(),_(i,1,1,()=>{i=null}),ue())},i(o){t||(b(i),b(r.$$.fragment,o),t=!0)},o(o){_(i),_(r.$$.fragment,o),t=!1},d(o){i&&i.d(o),o&&T(e),k(r,o)}}}function Tr(n){let e,r;return e=new Ot({props:{position:{y:2,z:-z+20},$$slots:{default:[Or]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,[i]){const o={};i&35&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}const Dr="https://alexwarnes.github.io/assets/models/basketball_hoop/scene.gltf";function Pr(n,e,r){let t,i;I(n,K,l=>r(1,i=l));const{gltf:o}=Tt(Dr),s=vt(o,l=>{if(!(!l||!l.nodes.Sketchfab_model))return l.nodes.Sketchfab_model});return I(n,s,l=>r(0,t=l)),[t,i,s,()=>fe(K,i="DONE",i)]}class Ir extends L{constructor(e){super(),F(this,e,Pr,Tr,U,{})}}function Ke(n,e,r){const t=n.slice();return t[0]=e[r],t}function Ne(n,e,r){const t=n.slice();return t[3]=e[r],t}function Xe(n){let e,r;return e=new mr({props:{position:n[3].position}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:G,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Ze(n){let e,r;return e=new _r({props:{type:n[0].type,position:n[0].position}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:G,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function zr(n){let e,r,t,i,o,s,a,l,f,h,d,g,O;e=new Ar({}),t=new wr({}),o=new sr({}),a=new cr({}),f=new Ir({});let w=Ge,c=[];for(let u=0;u<w.length;u+=1)c[u]=Xe(Ne(n,w,u));const D=u=>_(c[u],1,1,()=>{c[u]=null});let y=We,m=[];for(let u=0;u<y.length;u+=1)m[u]=Ze(Ke(n,y,u));const M=u=>_(m[u],1,1,()=>{m[u]=null});return{c(){S(e.$$.fragment),r=R(),S(t.$$.fragment),i=R(),S(o.$$.fragment),s=R(),S(a.$$.fragment),l=R(),S(f.$$.fragment),h=R();for(let u=0;u<c.length;u+=1)c[u].c();d=R();for(let u=0;u<m.length;u+=1)m[u].c();g=Ce()},l(u){E(e.$$.fragment,u),r=C(u),E(t.$$.fragment,u),i=C(u),E(o.$$.fragment,u),s=C(u),E(a.$$.fragment,u),l=C(u),E(f.$$.fragment,u),h=C(u);for(let p=0;p<c.length;p+=1)c[p].l(u);d=C(u);for(let p=0;p<m.length;p+=1)m[p].l(u);g=Ce()},m(u,p){A(e,u,p),P(u,r,p),A(t,u,p),P(u,i,p),A(o,u,p),P(u,s,p),A(a,u,p),P(u,l,p),A(f,u,p),P(u,h,p);for(let v=0;v<c.length;v+=1)c[v].m(u,p);P(u,d,p);for(let v=0;v<m.length;v+=1)m[v].m(u,p);P(u,g,p),O=!0},p(u,[p]){if(p&0){w=Ge;let v;for(v=0;v<w.length;v+=1){const Y=Ne(u,w,v);c[v]?(c[v].p(Y,p),b(c[v],1)):(c[v]=Xe(Y),c[v].c(),b(c[v],1),c[v].m(d.parentNode,d))}for(le(),v=w.length;v<c.length;v+=1)D(v);ue()}if(p&0){y=We;let v;for(v=0;v<y.length;v+=1){const Y=Ke(u,y,v);m[v]?(m[v].p(Y,p),b(m[v],1)):(m[v]=Ze(Y),m[v].c(),b(m[v],1),m[v].m(g.parentNode,g))}for(le(),v=y.length;v<m.length;v+=1)M(v);ue()}},i(u){if(!O){b(e.$$.fragment,u),b(t.$$.fragment,u),b(o.$$.fragment,u),b(a.$$.fragment,u),b(f.$$.fragment,u);for(let p=0;p<w.length;p+=1)b(c[p]);for(let p=0;p<y.length;p+=1)b(m[p]);O=!0}},o(u){_(e.$$.fragment,u),_(t.$$.fragment,u),_(o.$$.fragment,u),_(a.$$.fragment,u),_(f.$$.fragment,u),c=c.filter(Boolean);for(let p=0;p<c.length;p+=1)_(c[p]);m=m.filter(Boolean);for(let p=0;p<m.length;p+=1)_(m[p]);O=!1},d(u){k(e,u),u&&T(r),k(t,u),u&&T(i),k(o,u),u&&T(s),k(a,u),u&&T(l),k(f,u),u&&T(h),Be(c,u),u&&T(d),Be(m,u),u&&T(g)}}}class Rr extends L{constructor(e){super(),F(this,e,null,zr,U,{})}}function Cr(n,e,r){let t,i;I(n,Ee,d=>r(4,t=d)),I(n,K,d=>r(1,i=d));let o,s=0,a;function l(){o&&(clearInterval(o),r(0,s=0))}function f(){o&&clearInterval(o)}function h(){a=Date.now(),o=setInterval(()=>{r(0,s=(Date.now()-a)/1e3)},50)}return n.$$.update=()=>{n.$$.dirty&2&&(i==="IDLE"?l():i==="PLAYING"?h():i==="DONE"&&f()),n.$$.dirty&1&&fe(Ee,t=s.toFixed(2),t)},[s,i]}class Br extends L{constructor(e){super(),F(this,e,Cr,null,U,{})}}function jr(n){let e,r;return e=new Rr({}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Lr(n){let e,r;return e=new It({props:{$$slots:{default:[jr]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p(t,i){const o={};i&16&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Fr(n){let e,r,t,i,o;return{c(){e=N("button"),r=ke("RESET"),this.h()},l(s){e=X(s,"BUTTON",{class:!0});var a=Z(e);r=Oe(a,"RESET"),a.forEach(T),this.h()},h(){q(e,"class","svelte-8b1o8v")},m(s,a){P(s,e,a),W(e,r),i||(o=ae(e,"click",n[3]),i=!0)},p:G,i(s){t||et(()=>{t=yt(e,ve,{}),t.start()})},o:G,d(s){s&&T(e),i=!1,o()}}}function Ur(n){let e,r,t,i,o,s;return{c(){e=N("button"),r=ke("PLAY"),this.h()},l(a){e=X(a,"BUTTON",{class:!0});var l=Z(e);r=Oe(l,"PLAY"),l.forEach(T),this.h()},h(){q(e,"class","svelte-8b1o8v")},m(a,l){P(a,e,l),W(e,r),i=!0,o||(s=ae(e,"click",n[2]),o=!0)},p:G,i(a){i||(et(()=>{t||(t=je(e,ve,{},!0)),t.run(1)}),i=!0)},o(a){t||(t=je(e,ve,{},!1)),t.run(0),i=!1},d(a){a&&T(e),a&&t&&t.end(),o=!1,s()}}}function Mr(n){let e,r,t,i,o,s,a,l,f,h,d,g,O;e=new Br({}),i=new Pt({props:{$$slots:{default:[Lr]},$$scope:{ctx:n}}});const w=[Ur,Fr],c=[];function D(y,m){return y[1]==="IDLE"?0:y[1]==="DONE"?1:-1}return~(d=D(n))&&(g=c[d]=w[d](n)),{c(){S(e.$$.fragment),r=R(),t=N("div"),S(i.$$.fragment),o=R(),s=N("div"),a=N("span"),l=ke(n[0]),f=R(),h=N("div"),g&&g.c(),this.h()},l(y){E(e.$$.fragment,y),r=C(y),t=X(y,"DIV",{class:!0});var m=Z(t);E(i.$$.fragment,m),o=C(m),s=X(m,"DIV",{class:!0});var M=Z(s);a=X(M,"SPAN",{class:!0});var u=Z(a);l=Oe(u,n[0]),u.forEach(T),M.forEach(T),f=C(m),h=X(m,"DIV",{class:!0});var p=Z(h);g&&g.l(p),p.forEach(T),m.forEach(T),this.h()},h(){q(a,"class","svelte-8b1o8v"),q(s,"class","timer row svelte-8b1o8v"),q(h,"class","action row svelte-8b1o8v"),q(t,"class","wrapper svelte-8b1o8v")},m(y,m){A(e,y,m),P(y,r,m),P(y,t,m),A(i,t,null),W(t,o),W(t,s),W(s,a),W(a,l),W(t,f),W(t,h),~d&&c[d].m(h,null),O=!0},p(y,[m]){const M={};m&16&&(M.$$scope={dirty:m,ctx:y}),i.$set(M),(!O||m&1)&&_t(l,y[0]);let u=d;d=D(y),d===u?~d&&c[d].p(y,m):(g&&(le(),_(c[u],1,1,()=>{c[u]=null}),ue()),~d?(g=c[d],g?g.p(y,m):(g=c[d]=w[d](y),g.c()),b(g,1),g.m(h,null)):g=null)},i(y){O||(b(e.$$.fragment,y),b(i.$$.fragment,y),b(g),O=!0)},o(y){_(e.$$.fragment,y),_(i.$$.fragment,y),_(g),O=!1},d(y){k(e,y),y&&T(r),y&&T(t),k(i),~d&&c[d].d()}}}function Vr(n,e,r){let t,i;return I(n,Ee,a=>r(0,t=a)),I(n,K,a=>r(1,i=a)),[t,i,()=>fe(K,i="PLAYING",i),()=>fe(K,i="IDLE",i)]}class Gr extends L{constructor(e){super(),F(this,e,Vr,Mr,U,{})}}function Wr(n){let e,r;return e=new Gr({}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:G,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}class Nr extends L{constructor(e){super(),F(this,e,null,Wr,U,{})}}export{Nr as default};
