import{al as n,am as o,f as r,g as u,h as l,k as c,an as i,ao as d,o as p,c as f,m as g}from"./Bcj0Wqpc.js";import"./CURKfPiP.js";import{_ as m}from"./DlAUqK2U.js";const k={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},b=n(o.ui.strategy,o.ui.skeleton,k),_=r({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:t}=u("skeleton",l(e,"ui"),b),a=c(()=>i(d(s.value.base,s.value.background,s.value.rounded),e.class));return{ui:s,attrs:t,skeletonClass:a}}});function y(e,s,t,a,C,v){return p(),f("div",g({class:e.skeletonClass},e.attrs),null,16)}const w=m(_,[["render",y]]);export{w as default};