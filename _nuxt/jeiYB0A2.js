import{_ as y}from"./CuhHKCO0.js";import k from"./D1FraUsh.js";import h from"./8J66id8_.js";import w from"./OresTSK2.js";import{al as _,am as p,f as A,g as B,h as d,k as L,an as j,ao as K,o as t,c as o,F as b,B as v,m as n,n as l,b as M,w as P,r as u,x as c,l as s,d as S,t as V,aK as F}from"./Bip6n_ii.js";import"./CURKfPiP.js";import{_ as I}from"./DlAUqK2U.js";import{a as J}from"./aPxrJPp6.js";import"./DTeZF_gm.js";import"./qsMMcMsd.js";import"./Bp-ihnPi.js";import"./DpU2NzaJ.js";import"./DvDH6DOc.js";const O={wrapper:"relative w-full flex items-center justify-between",container:"flex items-center min-w-0",inner:"min-w-0",base:"group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",before:"before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",after:"after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",active:"text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"}},D=_(p.ui.strategy,p.ui.horizontalNavigation,O),E=A({components:{UIcon:k,UAvatar:y,UBadge:h,ULink:w},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:f}=B("horizontalNavigation",d(e,"ui"),D,d(e,"class")),m=L(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:i,attrs:f,sections:m,getULinkProps:J,twMerge:j,twJoin:K}}}),H={key:0,class:"sr-only"};function R(e,i,f,m,T,q){const z=y,C=k,U=h,$=w;return t(),o("nav",n({class:e.ui.wrapper},e.attrs),[(t(!0),o(b,null,v(e.sections,(x,g)=>(t(),o("ul",{key:`section${g}`,class:l(e.ui.container)},[(t(!0),o(b,null,v(x,(a,N)=>(t(),o("li",{key:`section${g}-${N}`,class:l(e.ui.inner)},[M($,n(e.getULinkProps(a),{class:[e.ui.base,e.ui.before,e.ui.after],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:i[0]||(i[0]=F(r=>r.target.blur(),["enter"]))}),{default:P(({isActive:r})=>[u(e.$slots,"avatar",{link:a,isActive:r},()=>[a.avatar?(t(),c(z,n({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):s("",!0)]),u(e.$slots,"icon",{link:a,isActive:r},()=>[a.icon?(t(),c(C,{key:0,name:a.icon,class:l(e.twMerge(e.twJoin(e.ui.icon.base,r?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):s("",!0)]),u(e.$slots,"default",{link:a,isActive:r},()=>[a.label?(t(),o("span",{key:0,class:l(e.twMerge(e.ui.label,a.labelClass))},[r?(t(),o("span",H," Current page: ")):s("",!0),S(" "+V(a.label),1)],2)):s("",!0)]),u(e.$slots,"badge",{link:a,isActive:r},()=>[a.badge?(t(),c(U,n({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):s("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])],2))),128))],2))),128))],16)}const ne=I(E,[["render",R]]);export{ne as default};