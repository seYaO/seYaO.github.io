import F from"./Dqzd2sjA.js";import{A as k,E as A,T as z,al as W,am as L,f as X,g as D,h as M,O as I,k as $,an as T,o as s,c as l,a as S,F as j,B as N,n as c,r as p,x as O,m as b,l as v}from"./Bip6n_ii.js";import{b as V,c as q,d as G}from"./DdkLuU30.js";import"./CURKfPiP.js";import{_ as H}from"./DlAUqK2U.js";import"./D1FraUsh.js";import"./DTeZF_gm.js";import"./qsMMcMsd.js";import"./OresTSK2.js";import"./DpU2NzaJ.js";import"./DvDH6DOc.js";import"./aPxrJPp6.js";import"./Bp-ihnPi.js";import"./blSOxsGD.js";const J={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},K=e=>{const n=k(0);function i(o){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",n.value=o.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",u)}function u(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",u)}function a(o){o.preventDefault();const r=o.pageX-n.value;n.value=o.pageX,e.value.scrollBy(-r,0)}A(()=>{e.value&&e.value.addEventListener("mousedown",i)}),z(()=>{e.value&&e.value.removeEventListener("mousedown",i)})},y=W(L.ui.strategy,L.ui.carousel,J),Q=X({components:{UButton:F},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>y.default.prevButton},nextButton:{type:Object,default:()=>y.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:i,attrs:u}=D("carousel",M(e,"ui"),y,M(e,"class")),a=k(),o=k(0),{x:r,arrivedState:t}=V(a,{behavior:"smooth"}),{width:d}=q(a),{left:R,right:U}=I(t);K(a),G(a,f=>{var P,E;const[m]=f;o.value=((E=(P=m==null?void 0:m.target)==null?void 0:P.firstElementChild)==null?void 0:E.clientWidth)||0});const g=$(()=>Math.round(r.value/o.value)+1),w=$(()=>o.value?e.items.length-Math.round(d.value/o.value)+1:0);function h(){r.value+=o.value}function B(){r.value-=o.value}function C(f){r.value=(f-1)*o.value}return n({pages:w,page:g,prev:B,next:h,select:C}),{ui:i,attrs:u,isFirst:R,isLast:U,carouselRef:a,pages:w,currentPage:g,onClickNext:h,onClickPrev:B,onClick:C,twMerge:T}}}),Y=["role"],Z=["aria-selected","aria-label","onClick"];function x(e,n,i,u,a,o){const r=F;return s(),l("div",b({class:e.ui.wrapper},e.attrs),[S("div",{ref:"carouselRef",class:c([e.ui.container,"no-scrollbar"])},[(s(!0),l(j,null,N(e.items,(t,d)=>(s(),l("div",{key:d,class:c(e.ui.item),role:e.indicators?"tabpanel":null},[p(e.$slots,"default",{item:t,index:d},void 0,!0)],10,Y))),128))],2),e.arrows?(s(),l("div",{key:0,class:c(e.ui.arrows.wrapper)},[p(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(s(),O(r,b({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):v("",!0)]},!0),p(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(s(),O(r,b({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):v("",!0)]},!0)],2)):v("",!0),e.indicators?(s(),l("div",{key:1,role:"tablist",class:c(e.ui.indicators.wrapper)},[(s(!0),l(j,null,N(e.pages,t=>p(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[S("button",{type:"button",role:"tab","aria-selected":t===e.currentPage,class:c([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:d=>e.onClick(t)},null,10,Z)],!0)),128))],2)):v("",!0)],16)}const ve=H(Q,[["render",x],["__scopeId","data-v-67d56354"]]);export{ve as default};
