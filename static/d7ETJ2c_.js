import{d as C,U as w,b as B,e as I,H as y,c as S,a5 as U,o as s,q as n,k as d,n as l,i as e,F as f,r as g,f as _,j as D,l as N,a6 as j,a7 as z,a0 as A,m as F,_ as V}from"./D-PSXSB2.js";const $=["onClick"],H=C({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(h){const k={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},m=h,i=w(),{ui:r,attrs:x}=B("content.tabs",void 0,k,I(m,"class"),!0),p=y(m.selectedIndex||0),b=y(1),v=S(()=>{var u;return b.value,((u=i.default)==null?void 0:u.call(i).map((o,c)=>{var t,a;return{index:c,label:((t=o.props)==null?void 0:t.label)||`${c}`,icon:(a=o.props)==null?void 0:a.icon,component:o}}))||[]});return U(()=>{b.value+=1}),(u,o)=>{const c=V;return s(),n("div",F({class:e(r).wrapper},e(x)),[d("div",{class:l(e(r).header)},[d("div",{class:l(e(r).border)},null,2),(s(!0),n(f,null,g(e(v),(t,a)=>(s(),n("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:q=>p.value=a},[t.icon?(s(),_(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):D("",!0),d("span",null,N(t.label),1)],10,$))),128))],2),(s(!0),n(f,null,g(e(v),(t,a)=>j((s(),n("div",{key:a},[(s(),_(A(t.component)))])),[[z,e(p)===a]])),128))],16)}}});export{H as default};
