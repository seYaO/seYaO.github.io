import O from"./D1FraUsh.js";import{_ as j}from"./CuhHKCO0.js";import P from"./Dqzd2sjA.js";import{A as D,k as b,al as I,am as M,f as V,g as q,h as L,an as S,ao as B,E as R,aq as J,T as G,o as a,x as v,w as H,a as h,m as y,n as l,l as u,c as m,r as T,d as U,t as z,F,B as N,aO as A,ak as K,aL as Q}from"./Bip6n_ii.js";import{i as W}from"./DdkLuU30.js";import"./CURKfPiP.js";import{_ as X}from"./DlAUqK2U.js";import"./DTeZF_gm.js";import"./qsMMcMsd.js";import"./OresTSK2.js";import"./DpU2NzaJ.js";import"./DvDH6DOc.js";import"./aPxrJPp6.js";import"./Bp-ihnPi.js";import"./blSOxsGD.js";const Y={wrapper:"w-full pointer-events-auto",container:"relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium text-gray-900 dark:text-white",description:"mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",actions:"flex items-center gap-2 mt-3 flex-shrink-0",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",ring:"ring-1 ring-gray-200 dark:ring-gray-800",icon:{base:"flex-shrink-0 w-5 h-5",color:"text-{color}-500 dark:text-{color}-400"},avatar:{base:"flex-shrink-0 self-center",size:"md"},progress:{base:"absolute bottom-0 end-0 start-0 h-1",background:"bg-{color}-500 dark:bg-{color}-400"},transition:{enterActiveClass:"transform ease-out duration-300 transition",enterFromClass:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterToClass:"translate-y-0 opacity-100 sm:translate-x-0",leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},default:{color:"primary",icon:null,timeout:5e3,closeButton:{icon:"i-heroicons-x-mark-20-solid",color:"gray",variant:"link",padded:!1},actionButton:{size:"xs",color:"white"}}};function Z(e,r,s){let c=null;const{pause:t,resume:k,timestamp:f}=W({...s||{},controls:!0}),i=D(null),d=b(()=>i.value?r-(f.value-i.value):0);function o(...E){c=setTimeout(()=>{c=null,i.value=null,e(...E)},d.value)}function p(){c&&(clearTimeout(c),c=null)}function g(){i.value=Date.now(),o()}function w(){p(),t()}function $(){p(),t()}function n(){o(),k(),i.value=(i.value||0)+(Date.now()-f.value)}return g(),{start:g,stop:w,pause:$,resume:n,remaining:d}}const C=I(M.ui.strategy,M.ui.notification,Y),_=V({components:{UIcon:O,UAvatar:j,UButton:P},inheritAttrs:!1,props:{id:{type:[String,Number],required:!0},title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>C.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>C.default.closeButton},timeout:{type:Number,default:()=>C.default.timeout},actions:{type:Array,default:()=>[]},callback:{type:Function,default:null},color:{type:String,default:()=>C.default.color,validator(e){return["gray",...M.ui.colors].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e,{emit:r}){const{ui:s,attrs:c}=q("notification",L(e,"ui"),C);let t=null;const k=D(e.timeout),f=b(()=>{var n;return S(B(s.value.wrapper,(n=s.value.background)==null?void 0:n.replaceAll("{color}",e.color),s.value.rounded,s.value.shadow),e.class)}),i=b(()=>{var n;return B(s.value.progress.base,(n=s.value.progress.background)==null?void 0:n.replaceAll("{color}",e.color))}),d=b(()=>({width:`${k.value/e.timeout*100||0}%`})),o=b(()=>{var n;return B(s.value.icon.base,(n=s.value.icon.color)==null?void 0:n.replaceAll("{color}",e.color))});function p(){t&&t.pause()}function g(){t&&t.resume()}function w(){t&&t.stop(),e.callback&&e.callback(),r("close")}function $(n){t&&t.stop(),n.click&&n.click(),r("close")}return R(()=>{e.timeout&&(t=Z(()=>{w()},e.timeout),J(()=>{k.value=t.remaining.value}))}),G(()=>{t&&t.stop()}),{ui:s,attrs:c,wrapperClass:f,progressClass:i,progressStyle:d,iconClass:o,onMouseover:p,onMouseleave:g,onClose:w,onAction:$,twMerge:S}}});function x(e,r,s,c,t,k){const f=O,i=j,d=P;return a(),v(Q,y({appear:""},e.ui.transition),{default:H(()=>[h("div",y({class:e.wrapperClass,role:"status"},e.attrs,{onMouseover:r[0]||(r[0]=(...o)=>e.onMouseover&&e.onMouseover(...o)),onMouseleave:r[1]||(r[1]=(...o)=>e.onMouseleave&&e.onMouseleave(...o))}),[h("div",{class:l([e.ui.container,e.ui.rounded,e.ui.ring])},[h("div",{class:l(["flex",[e.ui.padding,e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[e.icon?(a(),v(f,{key:0,name:e.icon,class:l(e.iconClass)},null,8,["name","class"])):u("",!0),e.avatar?(a(),v(i,y({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):u("",!0),h("div",{class:l(e.ui.inner)},[e.title||e.$slots.title?(a(),m("p",{key:0,class:l(e.ui.title)},[T(e.$slots,"title",{title:e.title},()=>[U(z(e.title),1)])],2)):u("",!0),e.description||e.$slots.description?(a(),m("p",{key:1,class:l(e.twMerge(e.ui.description,!(e.title&&e.$slots.title)&&"mt-0 leading-5"))},[T(e.$slots,"description",{description:e.description},()=>[U(z(e.description),1)])],2)):u("",!0),(e.description||e.$slots.description)&&e.actions.length?(a(),m("div",{key:2,class:l(e.ui.actions)},[(a(!0),m(F,null,N(e.actions,(o,p)=>(a(),v(d,y({key:p},{...e.ui.default.actionButton||{},...o},{onClick:A(g=>e.onAction(o),["stop"])}),null,16,["onClick"]))),128))],2)):u("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(a(),m("div",{key:2,class:l(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(a(!0),m(F,{key:0},N(e.actions,(o,p)=>(a(),v(d,y({key:p},{...e.ui.default.actionButton||{},...o},{onClick:A(g=>e.onAction(o),["stop"])}),null,16,["onClick"]))),128)):u("",!0),e.closeButton?(a(),v(d,y({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:A(e.onClose,["stop"])}),null,16,["onClick"])):u("",!0)],2)):u("",!0)],2),e.timeout?(a(),m("div",{key:0,class:l(e.progressClass),style:K(e.progressStyle)},null,6)):u("",!0)],2)],16)]),_:3},16)}const ge=X(_,[["render",x]]);export{ge as default};
