import{f as y,g as x,h as o,k as i,aP as z,an as h,ao as v,aN as w,N as c,al as f,am as s}from"./Bcj0Wqpc.js";import{_ as C,a as G}from"./Xnpy0Hmm.js";import"./CURKfPiP.js";import"./BRa_IBfZ.js";import"./DTdjP5w5.js";import"./qsMMcMsd.js";import"./DlAUqK2U.js";const _={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},m=f(s.ui.strategy,s.ui.avatar,G),b=f(s.ui.strategy,s.ui.avatarGroup,_),P=y({inheritAttrs:!1,props:{size:{type:String,default:null,validator(a){return Object.keys(m.size).includes(a)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a,{slots:g}){const{ui:t,attrs:p}=x("avatarGroup",o(a,"ui"),b,o(a,"class")),n=i(()=>z(g)),r=i(()=>typeof a.max=="string"?parseInt(a.max,10):a.max),d=i(()=>n.value.map((l,u)=>{const e={};return!a.max||r.value&&u<r.value?(a.size&&(e.size=a.size),e.class=l.props.class||"",e.class=h(v(e.class,t.value.ring,t.value.margin),e.class),w(l,e)):r.value!==void 0&&u===r.value?c(C,{size:a.size||m.default.size,text:`+${n.value.length-r.value}`,class:v(t.value.ring,t.value.margin)}):null}).filter(Boolean).reverse());return()=>c("div",{class:t.value.wrapper,...p.value},d.value)}});export{P as default};