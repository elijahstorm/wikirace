import{u as t,l as n}from"./firestore-90890b0b.js";const y={linkHistory:[],linksProgressed:0,backNavs:0,isCriticallyClose:!1,timesCriticallyClose:0},u=(e,o,i)=>{const r=e.players.find(l=>o.uid===l.uid);if(!r)return;t({type:"game",id:e.id},"players",r,!0);const s=r.progress??y,a=s.linkHistory.findIndex(l=>l.url===i)===-1?"url":"back";s.linksProgressed++,s.linkHistory.push({url:i,type:a,index:s.linkHistory.length}),t({type:"game",id:e.id},"players",{...r,progress:s}),n.set(i)};export{y as d,u as n};
