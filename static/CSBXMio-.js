import{u as w}from"./CfksH-PV.js";import{al as V,am as c,f as q,g as B,h as b,aI as $,k as y,an as j,ao as I,o as s,c as n,a as d,H as N,aV as O,m as A,n as l,r as R,d as M,t as v,l as f}from"./Bcj0Wqpc.js";import{u as P}from"./DsMgGksF.js";import"./CURKfPiP.js";import{_ as z}from"./DlAUqK2U.js";const D={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-radio",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},p=V(c.ui.strategy,c.ui.radio,D),F=q({inheritAttrs:!1,props:{id:{type:String,default:null},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>p.default.color,validator(e){return c.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:a,attrs:g}=B("radio",b(e,"ui"),p,b(e,"class")),m=e.id??w("$9ml2Pv5YlC"),i=$("radio-group",null),{emitFormChange:t,color:o,name:k}=i??P(e,p),h=y({get(){return e.modelValue},set(u){r("update:modelValue",u),i||t()}});function C(u){r("change",u.target.value)}const S=y(()=>j(I(a.value.base,a.value.form,a.value.background,a.value.border,o.value&&a.value.ring.replaceAll("{color}",o.value),o.value&&a.value.color.replaceAll("{color}",o.value)),e.inputClass));return{inputId:m,ui:a,attrs:g,pick:h,name:k,inputClass:S,onChange:C}}}),G=["data-n-ids"],T=["id","name","required","value","disabled"],U=["for"];function E(e,r,a,g,m,i){return s(),n("div",{class:l(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[d("div",{class:l(e.ui.container)},[N(d("input",A({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=t=>e.pick=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:e.inputClass},e.attrs,{onChange:r[1]||(r[1]=(...t)=>e.onChange&&e.onChange(...t))}),null,16,T),[[O,e.pick]])],2),e.label||e.$slots.label?(s(),n("div",{key:0,class:l(e.ui.inner)},[d("label",{for:e.inputId,class:l(e.ui.label)},[R(e.$slots,"label",{},()=>[M(v(e.label),1)]),e.required?(s(),n("span",{key:0,class:l(e.ui.required)},"*",2)):f("",!0)],10,U),e.help?(s(),n("p",{key:0,class:l(e.ui.help)},v(e.help),3)):f("",!0)],2)):f("",!0)],10,G)}const H=z(F,[["render",E]]),W=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{W as R,H as _,D as r};