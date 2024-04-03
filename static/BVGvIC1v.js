import{g as $,V as y,ab as j,bm as ue,bk as te,E as h,a_ as C,aM as K,aE as B,W as le,aV as ie,aL as g,aQ as E,bn as oe,F as M,aR as ne,ar as se,i as U,aS as de,aU as Q,aO as V,aW as k,bz as D,bA as ve,b5 as ce,bB as A,aY as P,_ as pe,am as be,an as J,C as fe,D as X,aH as me,b2 as ge,au as F,o as R,n as W,w as z,b as Y,L as H,aA as he,a as N,c as Z,v as _,J as ee,t as ae,d as ye,K as Ie,b4 as Te}from"./COlRCW2A.js";let we=$({props:{onFocus:{type:Function,required:!0}},setup(e){let o=y(!0);return()=>o.value?j(te,{as:"button",type:"button",features:ue.Focusable,onFocus(p){p.preventDefault();let d,b=50;function r(){var a;if(b--<=0){d&&cancelAnimationFrame(d);return}if((a=e.onFocus)!=null&&a.call(e)){o.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(r)}d=requestAnimationFrame(r)}}):null}});var xe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(xe||{}),ke=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ke||{});let re=Symbol("TabsContext");function L(e){let o=U(re,null);if(o===null){let p=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,L),p}return o}let q=Symbol("TabsSSRContext"),Pe=$({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:p,emit:d}){var b;let r=y((b=e.selectedIndex)!=null?b:e.defaultIndex),a=y([]),n=y([]),f=h(()=>e.selectedIndex!==null),w=h(()=>f.value?e.selectedIndex:r.value);function v(s){var u;let c=C(t.tabs.value,g),l=C(t.panels.value,g),m=c.filter(I=>{var T;return!((T=g(I))!=null&&T.hasAttribute("disabled"))});if(s<0||s>c.length-1){let I=V(r.value===null?0:Math.sign(s-r.value),{[-1]:()=>1,0:()=>V(Math.sign(s),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),T=V(I,{0:()=>c.indexOf(m[0]),1:()=>c.indexOf(m[m.length-1])});T!==-1&&(r.value=T),t.tabs.value=c,t.panels.value=l}else{let I=c.slice(0,s),T=[...c.slice(s),...I].find(G=>m.includes(G));if(!T)return;let O=(u=c.indexOf(T))!=null?u:t.selectedIndex.value;O===-1&&(O=t.selectedIndex.value),r.value=O,t.tabs.value=c,t.panels.value=l}}let t={selectedIndex:h(()=>{var s,u;return(u=(s=r.value)!=null?s:e.defaultIndex)!=null?u:null}),orientation:h(()=>e.vertical?"vertical":"horizontal"),activation:h(()=>e.manual?"manual":"auto"),tabs:a,panels:n,setSelectedIndex(s){w.value!==s&&d("change",s),f.value||v(s)},registerTab(s){var u;if(a.value.includes(s))return;let c=a.value[r.value];a.value.push(s),a.value=C(a.value,g);let l=(u=a.value.indexOf(c))!=null?u:r.value;l!==-1&&(r.value=l)},unregisterTab(s){let u=a.value.indexOf(s);u!==-1&&a.value.splice(u,1)},registerPanel(s){n.value.includes(s)||(n.value.push(s),n.value=C(n.value,g))},unregisterPanel(s){let u=n.value.indexOf(s);u!==-1&&n.value.splice(u,1)}};K(re,t);let i=y({tabs:[],panels:[]}),x=y(!1);B(()=>{x.value=!0}),K(q,h(()=>x.value?null:i.value));let S=h(()=>e.selectedIndex);return B(()=>{le([S],()=>{var s;return v((s=e.selectedIndex)!=null?s:e.defaultIndex)},{immediate:!0})}),ie(()=>{if(!f.value||w.value==null||t.tabs.value.length<=0)return;let s=C(t.tabs.value,g);s.some((u,c)=>g(t.tabs.value[c])!==g(u))&&t.setSelectedIndex(s.findIndex(u=>g(u)===g(t.tabs.value[w.value])))}),()=>{let s={selectedIndex:r.value};return j(M,[a.value.length<=0&&j(we,{onFocus:()=>{for(let u of a.value){let c=g(u);if((c==null?void 0:c.tabIndex)===0)return c.focus(),!0}return!1}}),E({theirProps:{...p,...oe(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:s,slots:o,attrs:p,name:"TabGroup"})])}}}),Se=$({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:o,slots:p}){let d=L("TabList");return()=>{let b={selectedIndex:d.selectedIndex.value},r={role:"tablist","aria-orientation":d.orientation.value};return E({ourProps:r,theirProps:e,slot:b,attrs:o,slots:p,name:"TabList"})}}}),$e=$({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:o,slots:p,expose:d}){var b;let r=(b=e.id)!=null?b:`headlessui-tabs-tab-${ne()}`,a=L("Tab"),n=y(null);d({el:n,$el:n}),B(()=>a.registerTab(n)),se(()=>a.unregisterTab(n));let f=U(q),w=h(()=>{if(f.value){let l=f.value.tabs.indexOf(r);return l===-1?f.value.tabs.push(r)-1:l}return-1}),v=h(()=>{let l=a.tabs.value.indexOf(n);return l===-1?w.value:l}),t=h(()=>v.value===a.selectedIndex.value);function i(l){var m;let I=l();if(I===D.Success&&a.activation.value==="auto"){let T=(m=ce(n))==null?void 0:m.activeElement,O=a.tabs.value.findIndex(G=>g(G)===T);O!==-1&&a.setSelectedIndex(O)}return I}function x(l){let m=a.tabs.value.map(I=>g(I)).filter(Boolean);if(l.key===k.Space||l.key===k.Enter){l.preventDefault(),l.stopPropagation(),a.setSelectedIndex(v.value);return}switch(l.key){case k.Home:case k.PageUp:return l.preventDefault(),l.stopPropagation(),i(()=>A(m,P.First));case k.End:case k.PageDown:return l.preventDefault(),l.stopPropagation(),i(()=>A(m,P.Last))}if(i(()=>V(a.orientation.value,{vertical(){return l.key===k.ArrowUp?A(m,P.Previous|P.WrapAround):l.key===k.ArrowDown?A(m,P.Next|P.WrapAround):D.Error},horizontal(){return l.key===k.ArrowLeft?A(m,P.Previous|P.WrapAround):l.key===k.ArrowRight?A(m,P.Next|P.WrapAround):D.Error}}))===D.Success)return l.preventDefault()}let S=y(!1);function s(){var l;S.value||(S.value=!0,!e.disabled&&((l=g(n))==null||l.focus({preventScroll:!0}),a.setSelectedIndex(v.value),ve(()=>{S.value=!1})))}function u(l){l.preventDefault()}let c=de(h(()=>({as:e.as,type:o.type})),n);return()=>{var l;let m={selected:t.value},{...I}=e,T={ref:n,onKeydown:x,onMousedown:u,onClick:s,id:r,role:"tab",type:c.value,"aria-controls":(l=g(a.panels.value[v.value]))==null?void 0:l.id,"aria-selected":t.value,tabIndex:t.value?0:-1,disabled:e.disabled?!0:void 0};return E({ourProps:T,theirProps:I,slot:m,attrs:o,slots:p,name:"Tab"})}}}),Oe=$({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:o,attrs:p}){let d=L("TabPanels");return()=>{let b={selectedIndex:d.selectedIndex.value};return E({theirProps:e,ourProps:{},slot:b,attrs:p,slots:o,name:"TabPanels"})}}}),Ae=$({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:o,slots:p,expose:d}){var b;let r=(b=e.id)!=null?b:`headlessui-tabs-panel-${ne()}`,a=L("TabPanel"),n=y(null);d({el:n,$el:n}),B(()=>a.registerPanel(n)),se(()=>a.unregisterPanel(n));let f=U(q),w=h(()=>{if(f.value){let i=f.value.panels.indexOf(r);return i===-1?f.value.panels.push(r)-1:i}return-1}),v=h(()=>{let i=a.panels.value.indexOf(n);return i===-1?w.value:i}),t=h(()=>v.value===a.selectedIndex.value);return()=>{var i;let x={selected:t.value},{tabIndex:S,...s}=e,u={ref:n,id:r,role:"tabpanel","aria-labelledby":(i=g(a.tabs.value[v.value]))==null?void 0:i.id,tabIndex:t.value?S:-1};return!t.value&&e.unmount&&!e.static?j(te,{as:"span","aria-hidden":!0,...u}):E({ourProps:u,theirProps:s,slot:x,attrs:o,slots:p,features:Q.Static|Q.RenderStrategy,visible:t.value,name:"TabPanel"})}}});const He={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}},Ce=be(J.ui.strategy,J.ui.tabs,He),Fe=$({components:{HTabGroup:Pe,HTabList:Se,HTab:$e,HTabPanels:Oe,HTabPanel:Ae},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},unmount:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:p,attrs:d}=fe("tabs",X(e,"ui"),Ce,X(e,"class")),b=y(),r=y([]),a=y(),n=y(e.modelValue||e.defaultIndex);function f(v){var i;const t=(i=r.value[v])==null?void 0:i.$el;t&&a.value&&(a.value.style.top=`${t.offsetTop}px`,a.value.style.left=`${t.offsetLeft}px`,a.value.style.width=`${t.offsetWidth}px`,a.value.style.height=`${t.offsetHeight}px`)}function w(v){n.value=v,o("change",v),e.modelValue!==void 0&&o("update:modelValue",n.value),f(n.value)}return me(b,()=>{f(n.value)}),le(()=>e.modelValue,v=>{n.value=v,f(n.value)}),B(()=>f(n.value)),ge(()=>Te("$39Q85lIXra")),{ui:p,attrs:d,listRef:b,itemRefs:r,markerRef:a,selectedIndex:n,onChange:w}}}),Re={class:"truncate"};function ze(e,o,p,d,b,r){const a=F("HTab"),n=F("HTabList"),f=F("HTabPanel"),w=F("HTabPanels"),v=F("HTabGroup");return R(),W(v,Ie({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:z(()=>[Y(n,{ref:"listRef",class:H([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:he([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:z(()=>[N("div",{ref:"markerRef",class:H(e.ui.list.marker.wrapper)},[N("div",{class:H([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(R(!0),Z(M,null,_(e.items,(t,i)=>(R(),W(a,{key:i,ref_for:!0,ref:"itemRefs",disabled:t.disabled,as:"template"},{default:z(({selected:x,disabled:S})=>[N("button",{class:H([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,x?e.ui.list.tab.active:e.ui.list.tab.inactive])},[ee(e.$slots,"default",{item:t,index:i,selected:x,disabled:S},()=>[N("span",Re,ae(t.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),Y(w,{class:H(e.ui.container)},{default:z(()=>[(R(!0),Z(M,null,_(e.items,(t,i)=>(R(),W(f,{key:i,class:H(e.ui.base),unmount:e.unmount},{default:z(({selected:x})=>[ee(e.$slots,t.slot||"item",{item:t,index:i,selected:x},()=>[ye(ae(t.content),1)])]),_:2},1032,["class","unmount"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const Ee=pe(Fe,[["render",ze]]);export{Ee as default};
