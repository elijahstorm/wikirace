import{w as l}from"./singletons-f2d03700.js";const o=l([]);function r(t,s="info",e=5e3){const a=new Date().valueOf()+t;return o.update(n=>[{id:a,msg:t,type:s,removeAfter:e},...n]),setTimeout(()=>{_(a)},e),a}function _(t){o.update(s=>s.filter(e=>e.id!==t))}export{r as a,_ as r,o as t};
