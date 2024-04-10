import W from"./ByGvoVOY.js";import{d as U,u as q,c as C,t as P,a as I,b as L,e as h,o as d,f as v,g as G,r as j,w as y,h as b,n as f,i as e,j as k,k as w,l as S,m as A,_ as D,p as F,q as x,F as B,s as H,v as N,x as J,y as K,z as M,A as Q,B as X,C as Y,D as Z,E as ee,G as te}from"./D-PSXSB2.js";import ne from"./DJ3HzWIc.js";import ae from"./ClP1XOMI.js";import{m as oe}from"./DbvWRElB.js";import"./l7XQXwAd.js";const re=U({inheritAttrs:!1,__name:"NavigationAccordion",props:{level:{type:Number,default:0},links:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},defaultOpen:{type:[Boolean,Number],default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const l=q(),o=C(()=>{const c=P("space-y-3",t.level>0&&"border-l border-gray-200 dark:border-gray-800 -ml-px hover:border-gray-300 dark:hover:border-gray-700"),s=P("border-l border-gray-200 dark:border-gray-800",t.level>0?"ml-6":"ml-2.5");return{wrapper:c,container:"space-y-3",item:{padding:"",color:"text-inherit dark:text-inherit"},button:{base:"flex items-center gap-1.5 group w-full focus-visible:outline-primary",active:"text-primary border-current",inactive:"border-transparent",level:"border-l -ml-px pl-3.5",icon:{base:"w-5 h-5 flex-shrink-0"},trailingIcon:{name:l.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"},label:"text-sm/6 font-semibold truncate"},tree:s}}),t=n,p=I(),{ui:a,attrs:m}=L("navigation.accordion",h(t,"ui"),o,h(t,"class"),!0),r=C(()=>{var c;return(c=t.links)==null?void 0:c.map(s=>{const u=!t.defaultOpen||typeof t.defaultOpen=="number"&&t.level<t.defaultOpen||s.to&&p.path.startsWith(s.to.toString());return{label:s.label,icon:s.icon,slot:s.label.toLowerCase(),disabled:s.disabled,defaultOpen:u,children:s.children}})});return(c,s)=>{const u=D,i=F,_=z,$=ne;return d(),v($,A({key:e(p).path,items:e(r),multiple:n.multiple,ui:e(a)},e(m)),G({default:y(({item:g,open:O})=>[b(i,{class:f([e(a).button.base,n.level>0&&e(a).button.level]),"active-class":e(a).button.active,"inactive-class":e(a).button.inactive},{default:y(()=>[g.icon?(d(),v(u,{key:0,name:g.icon,class:f(e(a).button.icon.base)},null,8,["name","class"])):k("",!0),w("span",{class:f(e(a).button.label)},S(g.label),3),g.disabled?k("",!0):(d(),v(u,{key:1,name:e(a).button.trailingIcon.name,class:f([e(a).button.trailingIcon.base,O?e(a).button.trailingIcon.active:e(a).button.trailingIcon.inactive])},null,8,["name","class"]))]),_:2},1032,["class","active-class","inactive-class"])]),_:2},[j(n.links,({label:g},O)=>({name:g.toLowerCase(),fn:y(({item:R})=>[b(_,{links:R.children,level:n.level+1,"default-open":n.defaultOpen,multiple:n.multiple,class:f(e(a).tree)},null,8,["links","level","default-open","multiple","class"])])}))]),1040,["items","multiple","ui"])}}}),se=U({inheritAttrs:!1,__name:"NavigationLinks",props:{level:{type:Number,default:0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const l={wrapper:"space-y-3",wrapperLevel:"space-y-1.5",base:"flex items-center gap-1.5 group",active:"text-primary font-medium border-current",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400",level:"border-l -ml-px pl-4",icon:{base:"w-5 h-5 flex-shrink-0"},badge:{base:"rounded-full"},label:"text-sm/6 truncate"},o=n,{ui:t,attrs:p}=L("navigation.links",h(o,"ui"),l,h(o,"class"),!0);return(a,m)=>{var u;const r=D,c=ae,s=F;return(u=n.links)!=null&&u.length?(d(),x("div",A({key:0,class:n.level>0?e(t).wrapperLevel:e(t).wrapper},e(p)),[(d(!0),x(B,null,j(n.links,(i,_)=>(d(),v(s,A({key:_},e(J)(i),{class:[e(t).base,n.level>0&&e(t).level],"active-class":e(t).active,"inactive-class":e(t).inactive,onClick:i.click}),{default:y(()=>[i.icon?(d(),v(r,{key:0,name:i.icon,class:f(e(H)(e(t).icon.base,i.iconClass))},null,8,["name","class"])):k("",!0),w("span",{class:f(e(t).label)},S(i.label),3),N(a.$slots,"badge",{link:i},()=>[i.badge?(d(),v(c,A({key:0},typeof i.badge=="string"?{size:"xs",variant:"subtle",label:i.badge}:{size:"xs",variant:"subtle",...i.badge},{class:e(t).badge.base}),null,16,["class"])):k("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],16)):k("",!0)}}}),z=U({inheritAttrs:!1,__name:"NavigationTree",props:{level:{type:Number,default:0},links:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},defaultOpen:{type:[Boolean,Number],default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const l={wrapper:"space-y-3"},o=n,{ui:t,attrs:p}=L("navigation.tree",h(o,"ui"),l,h(o,"class"),!0),a=C(()=>{var c;const m=[];let r={type:void 0,children:[]};for(const s of o.links){const u=(c=s.children)!=null&&c.length?"accordion":"link";r.type||(r.type=u),r.type===u?r.children.push(s):(m.push(r),r={type:u,children:[s]})}return r.children.length&&m.push(r),m});return(m,r)=>{var u;const c=re,s=se;return(u=e(a))!=null&&u.length?(d(),x("nav",A({key:0,class:e(t).wrapper},e(p)),[(d(!0),x(B,null,j(e(a),(i,_)=>(d(),x(B,{key:_},[i.type==="accordion"?(d(),v(c,{key:0,links:i.children,level:n.level,multiple:n.multiple,"default-open":n.defaultOpen},null,8,["links","level","multiple","default-open"])):(d(),v(s,{key:1,links:i.children,level:n.level},null,8,["links","level"]))],64))),128))],16)):k("",!0)}}}),le={class:"relative"},ie=U({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const l={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},o=n,{ui:t,attrs:p}=L("aside",h(o,"ui"),l,h(o,"class"),!0);return(a,m)=>{const r=K;return d(),x("aside",A({class:e(t).wrapper},e(p)),[w("div",le,[a.$slots.top?(d(),x("div",{key:0,class:f(e(t).top.wrapper)},[w("div",{class:f(e(t).top.header)},null,2),w("div",{class:f(e(t).top.body)},[N(a.$slots,"top")],2),w("div",{class:f(e(t).top.footer)},null,2)],2)):k("",!0),N(a.$slots,"links",{},()=>[b(r,{links:n.links},null,8,["links"])]),N(a.$slots,"default"),N(a.$slots,"bottom")])],16)}}}),T=n=>{if(!n.children)return n._path;for(const l of(n==null?void 0:n.children)||[]){const o=T(l);if(o)return o}},V=(n,l)=>{for(const o of l){if(o._path===n&&!o._id)return o.children;if(o.children){const t=V(n,o.children);if(t)return t}}},E=(n,l)=>{for(const o of l){if(o._path===n)return o;if(o.children){const t=E(n,o.children);if(t)return t}}},ce=(n,l,o)=>{let t;const p=(a,m)=>{for(const r of m)if(!(a!=="/"&&r._path==="/")){if(a!=null&&a.startsWith(r._path)&&r[l]&&(t=r[l]),r._path===a)return;r.children&&p(a,r.children)}};return p(n,o),t},ue=()=>({navBottomLink:T,navDirFromPath:V,navPageFromPath:E,navKeyFromPath:ce}),be=U({__name:"blogs",async setup(n){let l,o;I();const{headerLinks:t}=M(),{navPageFromPath:p}=ue(),{data:a}=([l,o]=Q(()=>X("navigation",()=>Z())),l=await l,o(),l),m=C(()=>{var c;return((c=t.value.find(s=>s.to==="/blogs"))==null?void 0:c.children)??[]}),r=C(()=>{var s;const c=["/blogs"].filter(Boolean).join("/");return oe(((s=p(c,a.value))==null?void 0:s.children)||[])});return(c,s)=>{const u=W,i=z,_=ie,$=ee,g=te,O=Y;return d(),v(O,null,{default:y(()=>[b(g,null,{left:y(()=>[b(_,{links:e(m)},{default:y(()=>[b(u,{type:"dashed",class:"mb-6"}),b(i,{links:e(r),"default-open":"",multiple:!1},null,8,["links"])]),_:1},8,["links"])]),default:y(()=>[b($)]),_:1})]),_:1})}}});export{be as default};
