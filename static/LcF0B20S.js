import{_ as C}from"./DlDejXWT.js";import{g as B,B as S,C as w,D,V as I,E as f,o as l,c as p,a as y,F as V,v as $,L as m,r as a,b as A,t as E,n as F,a2 as G,K as L}from"./COlRCW2A.js";const N=["onClick"],K=B({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(v,{expose:g}){const _={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}},body:"relative [&>pre]:!rounded-t-none [&>pre]:!my-0 my-5"},h=v,d=S(),{ui:t,attrs:k}=w("content.codeGroup",void 0,_,D(h,"class"),!0),s=I(0);g({selectedIndex:s});function u(e,r){var i,c,o,n;return typeof e.type=="symbol"?(i=e.children)==null?void 0:i.map(u):{label:((c=e.props)==null?void 0:c.filename)||((o=e.props)==null?void 0:o.label)||`${r}`,icon:(n=e.props)==null?void 0:n.icon,component:e}}const b=f(()=>{var e,r;return((r=(e=d.default)==null?void 0:e.call(d))==null?void 0:r.flatMap(u).filter(Boolean))||[]}),x=f(()=>b.value.find((e,r)=>r===s.value));return(e,r)=>{var c;const i=C;return l(),p("div",L({class:a(t).wrapper},a(k)),[y("div",{class:m(a(t).header)},[(l(!0),p(V,null,$(a(b),(o,n)=>(l(),p("button",{key:n,tabindex:"-1",class:m([a(t).tab.base,a(s)===n?a(t).tab.active:a(t).tab.inactive]),onClick:P=>s.value=n},[A(i,{icon:o.icon,filename:o.label,class:m(a(t).tab.icon.base)},null,8,["icon","filename","class"]),y("span",null,E(o.label),1)],10,N))),128))],2),(l(),F(G((c=a(x))==null?void 0:c.component),{key:a(s),"hide-header":""}))],16)}}});export{K as default};
