import{_ as w,am as T,an as m,g as k,bE as B,bF as D,bG as H,bH as V,C as $,D as y,E as g,b2 as F,au as n,o as v,n as h,w as s,b as u,K as d,a as p,L as l,x as O,J as P,b4 as R}from"./COlRCW2A.js";const j={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},A=T(m.ui.strategy,m.ui.modal,j),N=k({components:{HDialog:B,HDialogPanel:D,TransitionRoot:H,TransitionChild:V},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:o}){const{ui:r,attrs:c}=$("modal",y(e,"ui"),A,y(e,"class")),i=g({get(){return e.modelValue},set(a){o("update:modelValue",a)}}),f=g(()=>e.transition?{...r.value.transition}:{});function t(a){if(e.preventClose){o("close-prevented");return}i.value=a,o("close")}return F(()=>R("$HAJMhYDoe7")),{ui:r,attrs:c,isOpen:i,transitionClass:f,close:t}}});function S(e,o,r,c,i,f){const t=n("TransitionChild"),a=n("HDialogPanel"),b=n("HDialog"),C=n("TransitionRoot");return v(),h(C,{appear:e.appear,show:e.isOpen,as:"template"},{default:s(()=>[u(b,d({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:s(()=>[e.overlay?(v(),h(t,d({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:s(()=>[p("div",{class:l([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):O("",!0),p("div",{class:l(e.ui.inner)},[p("div",{class:l([e.ui.container,!e.fullscreen&&e.ui.padding])},[u(t,d({as:"template",appear:e.appear},e.transitionClass),{default:s(()=>[u(a,{class:l([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:s(()=>[P(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const E=w(N,[["render",S]]);export{E as default};
