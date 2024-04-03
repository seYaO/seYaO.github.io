import{_ as H,g as w,M as U,a4 as O,E as z,b2 as K,au as L,o as s,c as o,L as a,t,x as p,a as m,F as A,v as q,n as y,w as S,J as v,K as M,aA as N,d as j,b4 as E}from"./COlRCW2A.js";import{_ as B}from"./Dpkao4ev.js";import{a as T}from"./CorODBxM.js";import"./D9hYbSLi.js";import"./DCqQynDr.js";const V=w({components:{HComboboxOption:T,UIcon:U,UAvatar:B,UKbd:O},props:{group:{type:Object,required:!0},query:{type:String,default:""},groupAttribute:{type:String,required:!0},commandAttribute:{type:String,required:!0},selectedIcon:{type:String,required:!0},ui:{type:Object,required:!0}},setup(e){const $=z(()=>{const i=e.group[e.groupAttribute];return typeof i=="function"?i(e.query):i});function C(i,{indices:I,value:g}){if(i===g)return"";let u="",d=0;I.forEach(l=>{const r=l[1]+1,k=r-l[0]>=e.query.length;u+=[g.substring(d,l[0]),k&&"<mark>",g.substring(l[0],r),k&&"</mark>"].filter(Boolean).join(""),d=r}),u+=g.substring(d);const h=u.indexOf("<mark>");return h>60&&(u=`...${u.substring(h-60)}`),u}return K(()=>E("$xnpcKX55nb")),{label:$,highlight:C}}}),F=["aria-label"],P=["innerHTML"];function D(e,$,C,i,I,g){const u=U,d=B,h=O,l=L("HComboboxOption");return s(),o("div",{class:a(e.ui.group.wrapper)},[e.label?(s(),o("h2",{key:0,class:a(e.ui.group.label)},t(e.label),3)):p("",!0),m("div",{class:a(e.ui.group.container),"aria-label":e.group[e.groupAttribute]},[(s(!0),o(A,null,q(e.group.commands,(r,k)=>(s(),y(l,{key:`${e.group.key}-${k}`,value:r,disabled:r.disabled,as:"template"},{default:S(({active:n,selected:c})=>[m("div",{class:a([e.ui.group.command.base,n?e.ui.group.command.active:e.ui.group.command.inactive,r.disabled?"cursor-not-allowed":"cursor-pointer"])},[m("div",{class:a(e.ui.group.command.container)},[v(e.$slots,`${e.group.key}-icon`,{group:e.group,command:r,active:n,selected:c},()=>[r.icon?(s(),y(u,{key:0,name:r.icon,class:a([e.ui.group.command.icon.base,n?e.ui.group.command.icon.active:e.ui.group.command.icon.inactive,r.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):r.avatar?(s(),y(d,M({key:1},{size:e.ui.group.command.avatar.size,...r.avatar},{class:e.ui.group.command.avatar.base,"aria-hidden":"true"}),null,16,["class"])):r.chip?(s(),o("span",{key:2,class:a(e.ui.group.command.chip.base),style:N({background:`#${r.chip}`})},null,6)):p("",!0)]),m("div",{class:a([e.ui.group.command.label,r.disabled&&e.ui.group.command.disabled])},[v(e.$slots,`${e.group.key}-command`,{group:e.group,command:r,active:n,selected:c},()=>{var b,f;return[r.prefix?(s(),o("span",{key:0,class:a(["flex-shrink-0",r.prefixClass||e.ui.group.command.prefix])},t(r.prefix),3)):p("",!0),m("span",{class:a(["truncate",{"flex-none":r.suffix||((b=r.matches)==null?void 0:b.length)}])},t(r[e.commandAttribute]),3),(f=r.matches)!=null&&f.length?(s(),o("span",{key:1,class:a(["truncate",r.suffixClass||e.ui.group.command.suffix]),innerHTML:e.highlight(r[e.commandAttribute],r.matches[0])},null,10,P)):r.suffix?(s(),o("span",{key:2,class:a(["truncate",r.suffixClass||e.ui.group.command.suffix])},t(r.suffix),3)):p("",!0)]})],2)],2),c?(s(),y(u,{key:0,name:e.selectedIcon,class:a(e.ui.group.command.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])):n&&(e.group.active||e.$slots[`${e.group.key}-active`])?v(e.$slots,`${e.group.key}-active`,{key:1,group:e.group,command:r,active:n,selected:c},()=>[e.group.active?(s(),o("span",{key:0,class:a(e.ui.group.active)},t(e.group.active),3)):p("",!0)]):v(e.$slots,`${e.group.key}-inactive`,{key:2,group:e.group,command:r,active:n,selected:c},()=>{var b;return[(b=r.shortcuts)!=null&&b.length?(s(),o("span",{key:0,class:a(e.ui.group.command.shortcuts)},[(s(!0),o(A,null,q(r.shortcuts,f=>(s(),y(h,{key:f},{default:S(()=>[j(t(f),1)]),_:2},1024))),128))],2)):!r.disabled&&e.group.inactive?(s(),o("span",{key:1,class:a(e.ui.group.inactive)},t(e.group.inactive),3)):p("",!0)]})],2)]),_:2},1032,["value","disabled"]))),128))],10,F)],2)}const W=H(V,[["render",D]]);export{W as default};
