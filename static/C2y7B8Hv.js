import{d as F,_,b as A,e as H,c as l,aN as K,aO as L,t as p,ac as i,ag as I,ah as g}from"./D-PSXSB2.js";import{m as Q}from"./DOl6dAT8.js";const T={wrapper:"flex flex-col gap-2 w-full",base:"flex flex-row flex-nowrap flex-shrink overflow-hidden",background:"bg-gray-200 dark:bg-gray-700",transition:"transition-all",rounded:"rounded-full",shadow:"",list:"list-disc list-inside",orientation:{"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}},default:{size:"md",icon:"i-heroicons-minus-20-solid"}},x=I(g.ui.strategy,g.ui.meter,Q),B=I(g.ui.strategy,g.ui.meterGroup,T),Y=F({components:{UIcon:_},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>x.default.size,validator(t){return Object.keys(x.meter.bar.size).includes(t)}},indicator:{type:Boolean,default:!1},icon:{type:String,default:()=>B.default.icon},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t,{slots:v}){const{ui:n,attrs:P}=A("meterGroup",H(t,"ui"),B),{ui:o}=A("meter",void 0,x);if(!v.default)throw new Error("Meter Group has no Meter children.");const U=l(()=>t.min>t.max?t.max:t.min),E=l(()=>t.max<t.min?t.min:t.max),f=l(()=>K(v)),w=l(()=>n.value.orientation[n.value.rounded]);function J(r,a,e){if(a==e)return r<a?0:100;a>e&&(e=[a,a=e][0]);const u=(r-a)/(e-a)*100;return Math.max(0,Math.min(100,u))}const z=l(()=>f.value.map(r=>r.props.label)),h=l(()=>f.value.map(r=>J(r.props.value,t.min,t.max))),b=l(()=>Math.max(0,Math.max(h.value.reduce((r,a)=>r+a,0)))),m=l(()=>f.value.map((r,a)=>{var d,s,c,y,C,M,$,G,N,j,k,O,S;const e={};e.style={width:`${h.value[a]}%`},e.size=t.size,e.min=U.value,e.max=E.value,e.ui=((d=r.props)==null?void 0:d.ui)||{},e.ui.wrapper=((c=(s=r.props)==null?void 0:s.ui)==null?void 0:c.wrapper)||"",e.ui.wrapper+=[(C=(y=r.props)==null?void 0:y.ui)==null?void 0:C.wrapper,n.value.background,n.value.transition].filter(Boolean).join(" "),e.ui.meter=(($=(M=r.props)==null?void 0:M.ui)==null?void 0:$.meter)||{},e.ui.meter.background=`bg-${r.props.color}-500 dark:bg-${r.props.color}-400`,e.ui.meter.rounded="rounded-none",e.ui.meter.bar=((j=(N=(G=r.props)==null?void 0:G.ui)==null?void 0:N.meter)==null?void 0:j.bar)||{},a===0&&(e.ui.meter.rounded=`${w.value.left} rounded-e-none`),a===f.value.length-1&&(e.ui.meter.rounded=`${w.value.right} rounded-s-none`),z.value[a]=r.props.label;const u=L(r,e);return(k=u.children)==null||delete k.label,(O=u.props)==null||delete O.indicator,(S=u.props)==null||delete S.label,u})),R=l(()=>p(n.value.base,n.value.background,n.value.rounded,n.value.shadow,o.value.meter.size[t.size])),V=l(()=>p(o.value.indicator.container)),q=l(()=>p(o.value.indicator.text,o.value.indicator.size[t.size])),D=l(()=>{const r=[void 0,i("div",{class:R.value},m.value),void 0];return t.indicator?r[0]=i("div",{class:V.value},[i("div",{class:q.value,style:{width:`${b.value}%`}},Math.round(b.value)+"%")]):v.indicator&&(r[0]=v.indicator({percent:b.value})),r[2]=i("ol",{class:n.value.list},z.value.map((a,e)=>{var d;const u=l(()=>{var s,c;return p(o.value.label.base,o.value.label.text,o.value.color[(s=m.value[e])==null?void 0:s.props.color]??o.value.label.color.replaceAll("{color}",((c=m.value[e])==null?void 0:c.props.color)??o.value.default.color),o.value.label.size[t.size])});return i("li",{class:u.value},[i(_,{name:((d=m.value[e])==null?void 0:d.props.icon)??t.icon}),`${a} (${Math.round(h.value[e])}%)`])})),r});return()=>i("div",{class:n.value.wrapper,...P.value},D.value)}});export{Y as default};
