import{$ as E,d as g,aE as p,a3 as S,ap as $,H as b,al as h,o as O,q as _,v as j,M as A,b7 as J}from"./D-PSXSB2.js";class m extends Error{constructor(s){super(s),this.message=s,Object.setPrototypeOf(this,m.prototype)}}const F=g({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:s,emit:r}){const n=p("$Z55GngiEgp"),u=J(`form-${n}`);S(()=>{u.on(async t=>{var i;t.type!=="submit"&&((i=e.validateOn)!=null&&i.includes(t.type))&&await d(t.path,{silent:!0})})}),$(()=>{u.reset()});const a=b([]);h("form-errors",a),h("form-events",u);const f=b({});h("form-inputs",f);async function y(){let t=await e.validate(e.state);if(e.schema)if(M(e.schema))t=t.concat(await Z(e.state,e.schema));else if(Y(e.schema))t=t.concat(await B(e.state,e.schema));else if(q(e.schema))t=t.concat(await P(e.state,e.schema));else if(U(e.schema))t=t.concat(await V(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function d(t,i={silent:!1}){let o=t;if(t&&!Array.isArray(t)&&(o=[t]),o){const c=a.value.filter(l=>!o.includes(l.path)),v=(await y()).filter(l=>o.includes(l.path));a.value=c.concat(v)}else a.value=await y();if(a.value.length>0){if(i.silent)return!1;throw new m(`Form validation failed: ${JSON.stringify(a.value,null,2)}`)}return e.state}async function w(t){var o;const i=t;try{(o=e.validateOn)!=null&&o.includes("submit")&&await d();const c={...i,data:e.state};r("submit",c)}catch(c){if(!(c instanceof m))throw c;const v={...i,errors:a.value.map(l=>({...l,id:f.value[l.path]}))};r("error",v)}}return s({validate:d,errors:a,setErrors(t,i){a.value=t,i?a.value=a.value.filter(o=>o.path!==i).concat(t):a.value=t},async submit(){await w(new Event("submit"))},getErrors(t){return t?a.value.filter(i=>i.path===t):a.value},clear(t){t?a.value=a.value.filter(i=>i.path!==t):a.value=[]}}),{onSubmit:w}}});function Y(e){return e.validate&&e.__isYupSchema__}function k(e){return e.inner!==void 0}async function B(e,s){try{return await s.validate(e,{abortEarly:!1}),[]}catch(r){if(k(r))return r.inner.map(n=>({path:n.path??"",message:n.message}));throw r}}function M(e){return e.parse!==void 0}async function Z(e,s){const r=await s.safeParseAsync(e);return r.success===!1?r.error.issues.map(n=>({path:n.path.join("."),message:n.message})):[]}function q(e){return e.validateAsync!==void 0&&e.id!==void 0}function I(e){return e.isJoi===!0}async function P(e,s){try{return await s.validateAsync(e,{abortEarly:!1}),[]}catch(r){if(I(r))return r.details.map(n=>({path:n.path.join("."),message:n.message}));throw r}}function U(e){return e._parse!==void 0}async function V(e,s){const r=await s._parse(e);return r.issues?r.issues.map(n=>{var u;return{path:((u=n.path)==null?void 0:u.map(a=>a.key).join("."))||"",message:n.message}}):[]}function x(e,s,r,n,u,a){return O(),_("form",{onSubmit:s[0]||(s[0]=A((...f)=>e.onSubmit&&e.onSubmit(...f),["prevent"]))},[j(e.$slots,"default")],32)}const G=E(F,[["render",x]]);export{G as default};
