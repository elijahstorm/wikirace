import{a3 as y}from"./singletons-01d2ecbe.js";function S(t){const o=t-1;return o*o*o+1}function d(t,{delay:o=0,duration:a=400,easing:e=y}={}){const c=+getComputedStyle(t).opacity;return{delay:o,duration:a,easing:e,css:r=>`opacity: ${r*c}`}}function $(t,{delay:o=0,duration:a=400,easing:e=S,x:c=0,y:r=0,opacity:g=0}={}){const s=getComputedStyle(t),i=+s.opacity,f=s.transform==="none"?"":s.transform,m=i*(1-g);return{delay:o,duration:a,easing:e,css:(l,p)=>`
			transform: ${f} translate(${(1-l)*c}px, ${(1-l)*r}px);
			opacity: ${i-m*p}`}}const n="wikiRaceMe",x=()=>{var t;return JSON.parse((t=localStorage.getItem(n))!=null?t:"{}")},I=()=>localStorage.removeItem(n),L=t=>localStorage.setItem(n,JSON.stringify(t));export{d as a,L as b,S as c,$ as f,x as g,I as r};
