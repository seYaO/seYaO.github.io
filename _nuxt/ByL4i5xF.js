import V from"./D1FraUsh.js";import{al as R,am as f,f as H,g as K,h as j,k as i,A as k,aQ as X,E as Y,an as Z,ao as c,o as y,c as I,a as _,m as x,r as b,n as g,b as $,l as O,aS as ee}from"./Bip6n_ii.js";import{u as ae}from"./CVhY5MaE.js";import{u as le}from"./Bp-ihnPi.js";import{i as ne}from"./CURKfPiP.js";import{_ as ie}from"./DlAUqK2U.js";import"./DTeZF_gm.js";import"./qsMMcMsd.js";const o=R(f.ui.strategy,f.ui.input,ne),te=H({components:{UIcon:V},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>o.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...f.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:p}){const{ui:a,attrs:C}=K("input",j(e,"ui"),o,j(e,"class")),{size:B,rounded:m}=le({ui:a,props:e}),{emitFormBlur:r,emitFormInput:A,size:M,color:u,inputId:w,name:F}=ae(e,o),t=i(()=>B.value||M.value),d=k(X({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),S=k(null),q=()=>{var l;e.autofocus&&((l=S.value)==null||l.focus())},z=l=>{d.value.trim&&(l=l.trim()),(d.value.number||e.type==="number")&&(l=ee(l)),n("update:modelValue",l),A()},G=l=>{d.value.lazy||z(l.target.value)},T=l=>{const s=l.target.value;n("change",s),d.value.lazy&&z(s),d.value.trim&&(l.target.value=s.trim())},W=l=>{r(),n("blur",l)};Y(()=>{setTimeout(()=>{q()},e.autofocusDelay)});const U=i(()=>{var s,h;const l=((h=(s=a.value.color)==null?void 0:s[u.value])==null?void 0:h[e.variant])||a.value.variant[e.variant];return Z(c(a.value.base,a.value.form,m.value,a.value.placeholder,e.type==="file"&&[a.value.file.base,a.value.file.padding[t.value]],a.value.size[t.value],e.padded?a.value.padding[t.value]:"p-0",l==null?void 0:l.replaceAll("{color}",u.value),(v.value||p.leading)&&a.value.leading.padding[t.value],(N.value||p.trailing)&&a.value.trailing.padding[t.value]),e.inputClass)}),v=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),N=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),D=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),E=i(()=>e.loading&&!v.value?e.loadingIcon:e.trailingIcon||e.icon),L=i(()=>c(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[t.value])),J=i(()=>c(a.value.icon.base,u.value&&f.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[t.value],e.loading&&a.value.icon.loading)),P=i(()=>c(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[t.value])),Q=i(()=>c(a.value.icon.base,u.value&&f.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[t.value],e.loading&&!v.value&&a.value.icon.loading));return{ui:a,attrs:C,name:F,inputId:w,input:S,isLeading:v,isTrailing:N,inputClass:U,leadingIconName:D,leadingIconClass:J,leadingWrapperIconClass:L,trailingIconName:E,trailingIconClass:Q,trailingWrapperIconClass:P,onInput:G,onChange:T,onBlur:W}}}),oe=["id","name","value","type","required","placeholder","disabled"];function ue(e,n,p,a,C,B){const m=V;return y(),I("div",{class:g(e.ui.wrapper)},[_("input",x({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:n[1]||(n[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:n[2]||(n[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,oe),b(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),I("span",{key:0,class:g(e.leadingWrapperIconClass)},[b(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[$(m,{name:e.leadingIconName,class:g(e.leadingIconClass)},null,8,["name","class"])])],2)):O("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),I("span",{key:1,class:g(e.trailingWrapperIconClass)},[b(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[$(m,{name:e.trailingIconName,class:g(e.trailingIconClass)},null,8,["name","class"])])],2)):O("",!0)],2)}const pe=ie(te,[["render",ue]]);export{pe as default};
