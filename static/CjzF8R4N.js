import{bL as P,V,E as C,_ as I,am as L,an as M,g as J,M as j,z as D,C as R,D as q,S,ao as B,aE as K,aV as G,ar as H,o as a,n as v,w as Q,a as $,K as y,L as l,x as u,c as m,J as T,d as U,t as z,F,v as N,$ as A,aA as W,b3 as X}from"./COlRCW2A.js";import{_ as E}from"./Dpkao4ev.js";const Y={wrapper:"w-full pointer-events-auto",container:"relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium text-gray-900 dark:text-white",description:"mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",actions:"flex items-center gap-2 mt-3 flex-shrink-0",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",ring:"ring-1 ring-gray-200 dark:ring-gray-800",icon:{base:"flex-shrink-0 w-5 h-5",color:"text-{color}-500 dark:text-{color}-400"},avatar:{base:"flex-shrink-0 self-center",size:"md"},progress:{base:"absolute bottom-0 end-0 start-0 h-1",background:"bg-{color}-500 dark:bg-{color}-400"},transition:{enterActiveClass:"transform ease-out duration-300 transition",enterFromClass:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterToClass:"translate-y-0 opacity-100 sm:translate-x-0",leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},default:{color:"primary",icon:null,timeout:5e3,closeButton:{icon:"i-heroicons-x-mark-20-solid",color:"gray",variant:"link",padded:!1},actionButton:{size:"xs",color:"white"}}};function Z(e,r,s){let c=null;const{pause:t,resume:k,timestamp:f}=P({...s||{},controls:!0}),i=V(null),d=C(()=>i.value?r-(f.value-i.value):0);function o(...O){c=setTimeout(()=>{c=null,i.value=null,e(...O)},d.value)}function p(){c&&(clearTimeout(c),c=null)}function g(){i.value=Date.now(),o()}function w(){p(),t()}function h(){p(),t()}function n(){o(),k(),i.value=(i.value||0)+(Date.now()-f.value)}return g(),{start:g,stop:w,pause:h,resume:n,remaining:d}}const b=L(M.ui.strategy,M.ui.notification,Y),_=J({components:{UIcon:j,UAvatar:E,UButton:D},inheritAttrs:!1,props:{id:{type:[String,Number],required:!0},title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>b.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>b.default.closeButton},timeout:{type:Number,default:()=>b.default.timeout},actions:{type:Array,default:()=>[]},callback:{type:Function,default:null},color:{type:String,default:()=>b.default.color,validator(e){return["gray",...M.ui.colors].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e,{emit:r}){const{ui:s,attrs:c}=R("notification",q(e,"ui"),b);let t=null;const k=V(e.timeout),f=C(()=>{var n;return S(B(s.value.wrapper,(n=s.value.background)==null?void 0:n.replaceAll("{color}",e.color),s.value.rounded,s.value.shadow),e.class)}),i=C(()=>{var n;return B(s.value.progress.base,(n=s.value.progress.background)==null?void 0:n.replaceAll("{color}",e.color))}),d=C(()=>({width:`${k.value/e.timeout*100||0}%`})),o=C(()=>{var n;return B(s.value.icon.base,(n=s.value.icon.color)==null?void 0:n.replaceAll("{color}",e.color))});function p(){t&&t.pause()}function g(){t&&t.resume()}function w(){t&&t.stop(),e.callback&&e.callback(),r("close")}function h(n){t&&t.stop(),n.click&&n.click(),r("close")}return K(()=>{e.timeout&&(t=Z(()=>{w()},e.timeout),G(()=>{k.value=t.remaining.value}))}),H(()=>{t&&t.stop()}),{ui:s,attrs:c,wrapperClass:f,progressClass:i,progressStyle:d,iconClass:o,onMouseover:p,onMouseleave:g,onClose:w,onAction:h,twMerge:S}}});function x(e,r,s,c,t,k){const f=j,i=E,d=D;return a(),v(X,y({appear:""},e.ui.transition),{default:Q(()=>[$("div",y({class:e.wrapperClass,role:"status"},e.attrs,{onMouseover:r[0]||(r[0]=(...o)=>e.onMouseover&&e.onMouseover(...o)),onMouseleave:r[1]||(r[1]=(...o)=>e.onMouseleave&&e.onMouseleave(...o))}),[$("div",{class:l([e.ui.container,e.ui.rounded,e.ui.ring])},[$("div",{class:l(["flex",[e.ui.padding,e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[e.icon?(a(),v(f,{key:0,name:e.icon,class:l(e.iconClass)},null,8,["name","class"])):u("",!0),e.avatar?(a(),v(i,y({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):u("",!0),$("div",{class:l(e.ui.inner)},[e.title||e.$slots.title?(a(),m("p",{key:0,class:l(e.ui.title)},[T(e.$slots,"title",{title:e.title},()=>[U(z(e.title),1)])],2)):u("",!0),e.description||e.$slots.description?(a(),m("p",{key:1,class:l(e.twMerge(e.ui.description,!(e.title&&e.$slots.title)&&"mt-0 leading-5"))},[T(e.$slots,"description",{description:e.description},()=>[U(z(e.description),1)])],2)):u("",!0),(e.description||e.$slots.description)&&e.actions.length?(a(),m("div",{key:2,class:l(e.ui.actions)},[(a(!0),m(F,null,N(e.actions,(o,p)=>(a(),v(d,y({key:p},{...e.ui.default.actionButton||{},...o},{onClick:A(g=>e.onAction(o),["stop"])}),null,16,["onClick"]))),128))],2)):u("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(a(),m("div",{key:2,class:l(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(a(!0),m(F,{key:0},N(e.actions,(o,p)=>(a(),v(d,y({key:p},{...e.ui.default.actionButton||{},...o},{onClick:A(g=>e.onAction(o),["stop"])}),null,16,["onClick"]))),128)):u("",!0),e.closeButton?(a(),v(d,y({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:A(e.onClose,["stop"])}),null,16,["onClick"])):u("",!0)],2)):u("",!0)],2),e.timeout?(a(),m("div",{key:0,class:l(e.progressClass),style:W(e.progressStyle)},null,6)):u("",!0)],2)],16)]),_:3},16)}const oe=I(_,[["render",x]]);export{oe as default};