import{$ as C,ag as w,ah as f,d as k,bA as T,bB as B,bC as D,bD as V,b as $,e as c,c as g,ax as H,az as l,o as v,f as m,w as o,h as i,m as u,k as S,n as y,j,v as z,aE as F}from"./D-PSXSB2.js";const O={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},P=w(f.ui.strategy,f.ui.slideover,O),R=k({components:{HDialog:T,HDialogPanel:B,TransitionRoot:D,TransitionChild:V},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:s}){const{ui:a,attrs:d}=$("slideover",c(e,"ui"),P,c(e,"class")),r=g({get(){return e.modelValue},set(t){s("update:modelValue",t)}}),p=g(()=>e.transition?{...a.value.transition,enterFrom:e.side==="left"?a.value.translate.left:a.value.translate.right,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:e.side==="left"?a.value.translate.left:a.value.translate.right}:{});function n(t){if(e.preventClose){s("close-prevented");return}r.value=t,s("close")}return H(()=>F("$zSEivjycv8")),{ui:a,attrs:d,isOpen:r,transitionClass:p,close:n}}});function A(e,s,a,d,r,p){const n=l("TransitionChild"),t=l("HDialogPanel"),b=l("HDialog"),h=l("TransitionRoot");return v(),m(h,{as:"template",appear:e.appear,show:e.isOpen},{default:o(()=>[i(b,u({class:[e.ui.wrapper,{"justify-end":e.side==="right"}]},e.attrs,{onClose:e.close}),{default:o(()=>[e.overlay?(v(),m(n,u({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:o(()=>[S("div",{class:y([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):j("",!0),i(n,u({as:"template",appear:e.appear},e.transitionClass),{default:o(()=>[i(t,{class:y([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:o(()=>[z(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const E=C(R,[["render",A]]);export{E as default};