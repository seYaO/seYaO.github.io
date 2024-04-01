import N from"./D1FraUsh.js";import R from"./Dqzd2sjA.js";import{u as Z}from"./BsZkHhIN.js";import{f as w,A as g,aH as M,k as y,E as V,T as F,aq as G,aI as J,al as _,am as B,g as W,h as L,J as X,aJ as Y,a5 as k,o as C,c as A,F as x,B as ee,n as S,x as te,w as b,b as D,aK as K,r as T,ah as oe,ai as ne,aL as se,m as ae,H as le,a as re,d as ie,t as ue,I as ce}from"./Bip6n_ii.js";import{I as z,u as U,o as h,A as H,N as j,a as I,l as pe}from"./BsAO_e0H.js";import{s as de}from"./Eq3VfNrF.js";import{t as fe,i as O,l as me}from"./DWSfY2_p.js";import{b as ve}from"./blSOxsGD.js";import"./CURKfPiP.js";import{_ as ge}from"./DlAUqK2U.js";import"./DTeZF_gm.js";import"./qsMMcMsd.js";import"./OresTSK2.js";import"./DpU2NzaJ.js";import"./DvDH6DOc.js";import"./aPxrJPp6.js";import"./Bp-ihnPi.js";const he={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}};var ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ye||{});let q=Symbol("DisclosureContext");function $(e){let c=J(q,null);if(c===null){let d=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,$),d}return c}let Q=Symbol("DisclosurePanelContext");function be(){return J(Q,null)}let De=w({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:c,attrs:d}){let r=g(e.defaultOpen?0:1),o=g(null),p=g(null),l={buttonId:g(`headlessui-disclosure-button-${z()}`),panelId:g(`headlessui-disclosure-panel-${z()}`),disclosureState:r,panel:o,button:p,toggleDisclosure(){r.value=U(r.value,{0:1,1:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(a){l.closeDisclosure();let u=a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?h(a):h(l.button):h(l.button);u==null||u.focus()}};return M(q,l),fe(y(()=>U(r.value,{0:O.Open,1:O.Closed}))),()=>{let{defaultOpen:a,...u}=e,f={open:r.value===0,close:l.close};return H({theirProps:u,ourProps:{},slot:f,slots:c,attrs:d,name:"Disclosure"})}}}),Ie=w({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:c,slots:d,expose:r}){let o=$("DisclosureButton"),p=be(),l=y(()=>p===null?!1:p.value===o.panelId.value);V(()=>{l.value||e.id!==null&&(o.buttonId.value=e.id)}),F(()=>{l.value||(o.buttonId.value=null)});let a=g(null);r({el:a,$el:a}),l.value||G(()=>{o.button.value=a.value});let u=de(y(()=>({as:e.as,type:c.type})),a);function f(){var t;e.disabled||(l.value?(o.toggleDisclosure(),(t=h(o.button))==null||t.focus()):o.toggleDisclosure())}function v(t){var n;if(!e.disabled)if(l.value)switch(t.key){case I.Space:case I.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure(),(n=h(o.button))==null||n.focus();break}else switch(t.key){case I.Space:case I.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure();break}}function i(t){switch(t.key){case I.Space:t.preventDefault();break}}return()=>{var t;let n={open:o.disclosureState.value===0},{id:s,...m}=e,E=l.value?{ref:a,type:u.value,onClick:f,onKeydown:v}:{id:(t=o.buttonId.value)!=null?t:s,ref:a,type:u.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||h(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:f,onKeydown:v,onKeyup:i};return H({ourProps:E,theirProps:m,slot:n,attrs:c,slots:d,name:"DisclosureButton"})}}}),Se=w({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:c,slots:d,expose:r}){let o=$("DisclosurePanel");V(()=>{e.id!==null&&(o.panelId.value=e.id)}),F(()=>{o.panelId.value=null}),r({el:o.panel,$el:o.panel}),M(Q,o.panelId);let p=me(),l=y(()=>p!==null?(p.value&O.Open)===O.Open:o.disclosureState.value===0);return()=>{var a;let u={open:o.disclosureState.value===0,close:o.close},{id:f,...v}=e,i={id:(a=o.panelId.value)!=null?a:f,ref:o.panel};return H({ourProps:i,theirProps:v,slot:u,attrs:c,slots:d,features:j.RenderStrategy|j.Static,visible:l.value,name:"DisclosurePanel"})}}});const P=_(B.ui.strategy,B.ui.accordion,he),Be=_(B.ui.strategy,B.ui.button,ve),Oe=w({components:{HDisclosure:De,HDisclosureButton:Ie,HDisclosurePanel:Se,UIcon:N,UButton:R},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>P.default.openIcon},closeIcon:{type:String,default:()=>P.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open"],setup(e,{emit:c}){const{ui:d,attrs:r}=W("accordion",L(e,"ui"),P,L(e,"class")),o=y(()=>Be),p=g([]),l=y(()=>p.value.map(({open:t})=>t));X(l,(t,n)=>{for(const s in t){const m=n[s],E=t[s];!m&&E&&c("open",s)}},{immediate:!0});function a(t,n){!e.items[t].closeOthers&&e.multiple||p.value.forEach(s=>{s.open&&s.close(n.target)})}function u(t,n){const s=t;s.style.height="0",s.offsetHeight,s.style.height=s.scrollHeight+"px",s.addEventListener("transitionend",n,{once:!0})}function f(t){const n=t;n.style.height=n.scrollHeight+"px",n.offsetHeight}function v(t){const n=t;n.style.height="auto"}function i(t,n){const s=t;s.style.height="0",s.addEventListener("transitionend",n,{once:!0})}return pe(()=>Z("$SZ7s8siktv")),{ui:d,uiButton:o,attrs:r,buttonRefs:p,closeOthers:a,omit:Y,onEnter:u,onBeforeLeave:f,onAfterEnter:v,onLeave:i}}});function we(e,c,d,r,o,p){const l=N,a=R,u=k("HDisclosureButton"),f=k("HDisclosurePanel"),v=k("HDisclosure");return C(),A("div",{class:S(e.ui.wrapper)},[(C(!0),A(x,null,ee(e.items,(i,t)=>(C(),te(v,{key:t,as:"div",class:S(e.ui.container),"default-open":e.defaultOpen||i.defaultOpen},{default:b(({open:n,close:s})=>[D(u,{ref_for:!0,ref:()=>e.buttonRefs[t]={open:n,close:s},as:"template",disabled:i.disabled,onClick:m=>e.closeOthers(t,m),onKeydown:[K(m=>e.closeOthers(t,m),["enter"]),K(m=>e.closeOthers(t,m),["space"])]},{default:b(()=>[T(e.$slots,"default",{item:i,index:t,open:n,close:s},()=>[D(a,oe(ne({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(i,["slot","disabled","content","defaultOpen"])})),{trailing:b(()=>[D(l,{name:n&&e.closeIcon?e.closeIcon:e.openIcon,class:S([n&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[i.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),D(se,ae(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:b(()=>[le(re("div",null,[D(f,{class:S([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:b(()=>[T(e.$slots,i.slot||"item",{item:i,index:t,open:n,close:s},()=>[ie(ue(i.content),1)])]),_:2},1032,["class"])],512),[[ce,n]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const Fe=ge(Oe,[["render",we]]);export{Fe as default};
