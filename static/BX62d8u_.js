import{_ as B}from"./BnbnxZ1m.js";import{f as P,o as d,x as u,w as f,r as c,ah as v,ai as p,m as t,C as S,a as L,aj as q}from"./Bcj0Wqpc.js";import{i as w}from"./DvDH6DOc.js";import{_ as H}from"./DlAUqK2U.js";import{n as N}from"./aPxrJPp6.js";const Q=P({inheritAttrs:!1,props:{...N,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(a,s,{isActive:n,isExactActive:l}){return e.exactQuery&&!w(a.query,s.query)||e.exactHash&&a.hash!==s.hash?e.inactiveClass:e.exact&&l||!e.exact&&n?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),R=["href","aria-disabled","role","rel","target","onClick"];function j(e,i,a,s,n,l){const m=B;return e.to?(d(),u(m,t({key:1},e.$props,{custom:""}),{default:f(({route:y,href:C,target:b,rel:h,navigate:k,isActive:o,isExactActive:r,isExternal:$})=>[L("a",t(e.$attrs,{href:e.disabled?void 0:C,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:h,target:b,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(y,e._.provides[q]||e.$route,{isActive:o,isExactActive:r}),onClick:g=>!$&&!e.disabled&&k(g)}),[c(e.$slots,"default",v(p({isActive:e.active!==void 0?e.active:e.exact?r:o})))],16,R)]),_:3},16)):(d(),u(S(e.as),t({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:f(()=>[c(e.$slots,"default",v(p({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const F=H(Q,[["render",j]]);export{F as default};