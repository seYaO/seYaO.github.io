import{f as F,g as _,h as H,k as a,aP as K,aN as L,ao as p,N as i,al as B,am as g}from"./Bcj0Wqpc.js";import A from"./BRa_IBfZ.js";import"./CURKfPiP.js";import{m as Q}from"./DOl6dAT8.js";import"./DTdjP5w5.js";import"./qsMMcMsd.js";import"./DlAUqK2U.js";const T={wrapper:"flex flex-col gap-2 w-full",base:"flex flex-row flex-nowrap flex-shrink overflow-hidden",background:"bg-gray-200 dark:bg-gray-700",transition:"transition-all",rounded:"rounded-full",shadow:"",list:"list-disc list-inside",orientation:{"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}},default:{size:"md",icon:"i-heroicons-minus-20-solid"}},x=B(g.ui.strategy,g.ui.meter,Q),P=B(g.ui.strategy,g.ui.meterGroup,T),le=F({components:{UIcon:A},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>x.default.size,validator(t){return Object.keys(x.meter.bar.size).includes(t)}},indicator:{type:Boolean,default:!1},icon:{type:String,default:()=>P.default.icon},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t,{slots:m}){const{ui:o,attrs:I}=_("meterGroup",H(t,"ui"),P),{ui:n}=_("meter",void 0,x);if(!m.default)throw new Error("Meter Group has no Meter children.");const U=a(()=>t.min>t.max?t.max:t.min),E=a(()=>t.max<t.min?t.min:t.max),v=a(()=>K(m)),w=a(()=>o.value.orientation[o.value.rounded]);function J(r,l,e){if(l==e)return r<l?0:100;l>e&&(e=[l,l=e][0]);const u=(r-l)/(e-l)*100;return Math.max(0,Math.min(100,u))}const z=a(()=>v.value.map(r=>r.props.label)),h=a(()=>v.value.map(r=>J(r.props.value,t.min,t.max))),b=a(()=>Math.max(0,Math.max(h.value.reduce((r,l)=>r+l,0)))),f=a(()=>v.value.map((r,l)=>{var d,s,c,y,C,M,$,N,k,G,j,S,O;const e={};e.style={width:`${h.value[l]}%`},e.size=t.size,e.min=U.value,e.max=E.value,e.ui=((d=r.props)==null?void 0:d.ui)||{},e.ui.wrapper=((c=(s=r.props)==null?void 0:s.ui)==null?void 0:c.wrapper)||"",e.ui.wrapper+=[(C=(y=r.props)==null?void 0:y.ui)==null?void 0:C.wrapper,o.value.background,o.value.transition].filter(Boolean).join(" "),e.ui.meter=(($=(M=r.props)==null?void 0:M.ui)==null?void 0:$.meter)||{},e.ui.meter.background=`bg-${r.props.color}-500 dark:bg-${r.props.color}-400`,e.ui.meter.rounded="rounded-none",e.ui.meter.bar=((G=(k=(N=r.props)==null?void 0:N.ui)==null?void 0:k.meter)==null?void 0:G.bar)||{},l===0&&(e.ui.meter.rounded=`${w.value.left} rounded-e-none`),l===v.value.length-1&&(e.ui.meter.rounded=`${w.value.right} rounded-s-none`),z.value[l]=r.props.label;const u=L(r,e);return(j=u.children)==null||delete j.label,(S=u.props)==null||delete S.indicator,(O=u.props)==null||delete O.label,u})),R=a(()=>p(o.value.base,o.value.background,o.value.rounded,o.value.shadow,n.value.meter.size[t.size])),V=a(()=>p(n.value.indicator.container)),q=a(()=>p(n.value.indicator.text,n.value.indicator.size[t.size])),D=a(()=>{const r=[void 0,i("div",{class:R.value},f.value),void 0];return t.indicator?r[0]=i("div",{class:V.value},[i("div",{class:q.value,style:{width:`${b.value}%`}},Math.round(b.value)+"%")]):m.indicator&&(r[0]=m.indicator({percent:b.value})),r[2]=i("ol",{class:o.value.list},z.value.map((l,e)=>{var d;const u=a(()=>{var s,c;return p(n.value.label.base,n.value.label.text,n.value.color[(s=f.value[e])==null?void 0:s.props.color]??n.value.label.color.replaceAll("{color}",((c=f.value[e])==null?void 0:c.props.color)??n.value.default.color),n.value.label.size[t.size])});return i("li",{class:u.value},[i(A,{name:((d=f.value[e])==null?void 0:d.props.icon)??t.icon}),`${l} (${Math.round(h.value[e])}%)`])})),r});return()=>i("div",{class:o.value.wrapper,...I.value},D.value)}});export{le as default};