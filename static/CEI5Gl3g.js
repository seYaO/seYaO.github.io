import F from"./DsEcDLEy.js";import{f as I,_ as M,a as O}from"./Bja5M3Vq.js";import R from"./ClP1XOMI.js";import{d as S,T as q,U as E,b as G,e as L,c as _,V as H,W as Q,o as s,f as x,w as r,q as p,n as u,i as e,v as b,Q as w,l as k,j as m,m as P,k as C,h as d,X as W,_ as X,a as Y,z as J,P as K,A as Z,C as ee,r as te,F as U,G as ae}from"./D-PSXSB2.js";import oe from"./CxdFDl8P.js";import{u as se}from"./f9YT-iJ2.js";import"./DbvWRElB.js";const ne=C("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),re=S({inheritAttrs:!1,__name:"PageProse",props:{...q,title:{type:String,default:void 0},description:{type:String,default:void 0},date:{type:String,default:void 0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const f={wrapper:"relative flex items-center justify-between mb-5 u-page-prose",to:"hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50",body:{base:"",background:"",padding:"px-4 py-5 sm:p-4"},footer:{base:"border-0",background:"",padding:"px-4 py-4 sm:px-4 "},title:{wrapper:"flex",icon:"w-10 h-10 flex-shrink-0 text-primary mr-2",base:"text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5"},description:"text-[15px] text-gray-500 dark:text-gray-400 mt-6",date:"text-gray-500 dark:text-gray-400"},i=a,g=E(),{ui:o,attrs:h}=G("page.card",L(i,"ui"),f,L(i,"class"),!0),v=_(()=>H(i)),$=_(()=>(i.title||g.title&&Q(g.title())||"Card link").trim());return(t,c)=>{const B=W,l=X,y=oe;return s(),x(y,P({class:[e(o).wrapper,t.to&&e(o).to]},e(h),{ui:e(o)}),{footer:r(()=>[a.date||t.$slots.date?(s(),p("p",{key:0,class:u(e(o).date)},[b(t.$slots,"date",{},()=>[w(k(("formatDateByLocale"in t?t.formatDateByLocale:e(I))("zh-CN",a.date)),1)])],2)):m("",!0)]),default:r(()=>[t.to?(s(),x(B,P({key:0,"aria-label":e($)},e(v),{class:"focus:outline-none",tabindex:"-1"}),{default:r(()=>[ne]),_:1},16,["aria-label"])):m("",!0),C("div",{class:u(e(o).title.wrapper)},[a.icon||t.$slots.icon?b(t.$slots,"icon",{key:0},()=>[d(l,{name:a.icon,class:u(e(o).title.icon)},null,8,["name","class"])]):m("",!0),a.title||t.$slots.title?(s(),p("div",{key:1,class:u(e(o).title.base)},[b(t.$slots,"title",{},()=>[w(k(a.title),1)])],2)):m("",!0)],2),a.description||t.$slots.description?(s(),p("p",{key:1,class:u(e(o).description)},[b(t.$slots,"description",{},()=>[w(k(a.description),1)])],2)):m("",!0)]),_:3},16,["class","ui"])}}}),ie={key:0,class:"relative pointer-events-none select-none h-20","slide-enter":""},le={class:"text-7xl font-bold font-mono opacity-15 absolute text-transparent text-stroke-2 text-stroke-hex-aaa"},ye=S({__name:"category-[group]",async setup(a){let f,i;const g=Y(),{headerLinks:o}=J(),{fetchList:h,articles:v,total:$}=se(),t=_(()=>{var l;return((l=o.value.find(y=>y.to==="/blogs"))==null?void 0:l.children)??[]}),c=_(()=>t.value.filter(l=>l.to===g.path)[0]??{}),B=_(()=>`${c.value.label} （共${$.value}篇文章）`);return K({titleTemplate:"%s · seYa Blog",title:c.value.label,ogTitle:c.value.label}),[f,i]=Z(()=>h(c.value.label)),await f,i(),(l,y)=>{const N=F,T=M,V=R,j=re,A=O,D=ae,z=ee;return s(),x(z,null,{default:r(()=>[d(T,{title:"",description:e(B),ui:{headline:"flex flex-col gap-y-8 items-start"}},{headline:r(()=>[d(N,{links:[{label:"博客",icon:"i-ph-newspaper-duotone",to:"/blogs"},{label:e(c).label}]},null,8,["links"])]),_:1},8,["description"]),d(D,null,{default:r(()=>[d(A,null,{default:r(()=>[(s(!0),p(U,null,te(e(v),(n,ce)=>(s(),p(U,{key:n._path},[n.isMarked?(s(),p("div",ie,[C("span",le,k(n.year),1)])):(s(),x(j,{key:1,to:n._path,title:n.title,description:n.description,date:n.date},{icon:r(()=>[d(V,{label:n.category,variant:"subtle",class:"mr-2"},null,8,["label"])]),_:2},1032,["to","title","description","date"]))],64))),128))]),_:1})]),_:1})]),_:1})}}});export{ye as default};
