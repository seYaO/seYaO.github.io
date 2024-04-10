import{$ as O,ag as P,ah as f,d as I,b as V,e as h,c as t,t as s,o,q as u,v as z,n as g,aP as R,k as C,l as v,j as m,aB as A,m as b,F as q,r as D,Q as E,aC as J}from"./D-PSXSB2.js";const L={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},i=P(f.ui.strategy,f.ui.progress,L),Q=I({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>i.default.animation,validator(e){return Object.keys(i.animation).includes(e)}},size:{type:String,default:()=>i.default.size,validator(e){return Object.keys(i.progress.size).includes(e)}},color:{type:String,default:()=>i.default.color,validator(e){return f.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:y}=V("progress",h(e,"ui"),i,h(e,"class")),x=t(()=>s(r.value.indicator.container.base,r.value.indicator.container.width,r.value.indicator.container.transition)),w=t(()=>s(r.value.indicator.align,r.value.indicator.width,r.value.indicator.color,r.value.indicator.size[e.size])),k=t(()=>{var n;const a=[r.value.progress.base,r.value.progress.width,r.value.progress.size[e.size],r.value.progress.rounded,r.value.progress.track,r.value.progress.bar,(n=r.value.progress.color)==null?void 0:n.replaceAll("{color}",e.color),r.value.progress.background,r.value.progress.indeterminate.base,r.value.progress.indeterminate.rounded];return c.value&&a.push(r.value.animation[e.animation]),s(...a)}),d=t(()=>{var a;return s(r.value.steps.base,(a=r.value.steps.color)==null?void 0:a.replaceAll("{color}",e.color),r.value.steps.size[e.size])}),l=t(()=>s(r.value.step.base,r.value.step.align)),$=t(()=>s(r.value.step.active)),S=t(()=>s(r.value.step.first));function N(a){return a===Number(e.value)}function j(a){return a===0}function B(a){a=Number(a);const n=[l.value];return j(a)&&n.push(S.value),N(a)&&n.push($.value),n.join(" ")}const c=t(()=>e.value===void 0||e.value===null),F=t(()=>Array.isArray(e.max)),p=t(()=>c.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),M=t(()=>{if(!c.value)switch(!0){case e.value<0:return 0;case e.value>p.value:return 100;default:return e.value/p.value*100}});return{ui:r,attrs:y,indicatorContainerClass:x,indicatorClass:w,progressClass:k,stepsClass:d,stepClasses:B,isIndeterminate:c,isSteps:F,realMax:p,percent:M}}});function T(e,r,y,x,w,k){return o(),u("div",b({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?z(e.$slots,"indicator",A(b({key:0},{percent:e.percent})),()=>[e.isSteps?m("",!0):(o(),u("div",{key:0,class:g(e.indicatorContainerClass),style:R({width:`${e.percent}%`})},[C("div",{class:g(e.indicatorClass)},v(Math.round(e.percent))+"% ",3)],6))],!0):m("",!0),C("progress",b({class:e.progressClass},{value:e.value,max:e.realMax}),v(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17),e.isSteps?(o(),u("div",{key:1,class:g(e.stepsClass)},[(o(!0),u(q,null,D(e.max,(d,l)=>(o(),u("div",{key:l,class:g(e.stepClasses(l))},[z(e.$slots,`step-${l}`,A(J({step:d})),()=>[E(v(d),1)],!0)],2))),128))],2)):m("",!0)],16)}const G=O(Q,[["render",T],["__scopeId","data-v-1a810bd0"]]);export{G as default};