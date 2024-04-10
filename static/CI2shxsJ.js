import{d as g,ad as C,c as S,aa as b,I as _,B as k,R as m,af as A,U as N,ac as O}from"./D-PSXSB2.js";const Q=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:o,where:u,sort:d,limit:l,skip:f,locale:s,find:h}=C(i),p=S(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),y=!b().public.content.experimental.advanceQuery;_(()=>i,()=>n(),{deep:!0});const a=e=>y?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:c,refresh:n}=await k(`content-query-${A(i)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),u.value&&(e=e.where(u.value)),d.value&&(e=e.sort(d.value)),l.value&&(e=e.limit(l.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),h.value==="one"?e.findOne().then(a):h.value==="surround"?t.value?y?e.findSurround(t.value):e.withSurround(t.value).findOne().then(a):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(a)):e.find().then(a)});return{isPartial:p,data:c,refresh:n}},render(i){var v;const t=N(),{data:r,refresh:o,isPartial:u,path:d,only:l,without:f,where:s,sort:h,limit:p,skip:y,locale:a,find:c}=i,n={path:d,only:l,without:f,where:s,sort:h,limit:p,skip:y,locale:a,find:c};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((v=r==null?void 0:r.body)!=null&&v.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:u,props:n,...this.$attrs}):((w,q)=>O("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:u})}}),R=Q;export{R as default};
