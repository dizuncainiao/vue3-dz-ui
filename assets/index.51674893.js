import{c,a as i,b as _,w as v,F as p,d as f,r as C,o as d,e as R,f as T,N as w,g as A,t as I,h,i as k,j as y,n as D,k as m,l as z,p as N,m as q,q as O,s as $,u as F,T as M,v as U,x as K}from"./vendor.7b25b2a1.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}};j();var g=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const W={},x={id:"nav"},G=f("\u6309\u94AE\u7EC4\u4EF6"),J=f(" | "),Q=f("\u590D\u9009\u6846\u7EC4\u4EF6"),X=f(" | "),Y=f("\u5217\u8868\u7EC4\u4EF6"),Z=f(" | "),ee=f("\u8F93\u5165\u6846\u7EC4\u4EF6");function te(e,t){const s=C("router-link"),n=C("router-view");return d(),c(p,null,[i("nav",x,[_(s,{to:"/buttonDemo"},{default:v(()=>[G]),_:1}),J,_(s,{to:"/checkboxDemo"},{default:v(()=>[Q]),_:1}),X,_(s,{to:"/listDemo"},{default:v(()=>[Y]),_:1}),Z,_(s,{to:"/inputDemo"},{default:v(()=>[ee]),_:1})]),_(n)],64)}var oe=g(W,[["render",te]]);const se="modulepreload",P={},ne="/vue3-dz-ui/",b=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${ne}${n}`,n in P)return;P[n]=!0;const o=n.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":se,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((r,u)=>{a.addEventListener("load",r),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};const le=[{path:"/",redirect:"/listDemo"},{path:"/buttonDemo",name:"ButtonDemo",component:()=>b(()=>import("./ButtonDemo.f9278e9c.js"),["assets/ButtonDemo.f9278e9c.js","assets/ButtonDemo.e6a42648.css","assets/vendor.7b25b2a1.js"])},{path:"/checkboxDemo",name:"CheckboxDemo",component:()=>b(()=>import("./CheckboxDemo.d588e95d.js"),["assets/CheckboxDemo.d588e95d.js","assets/vendor.7b25b2a1.js"])},{path:"/listDemo",name:"ListDemo",component:()=>b(()=>import("./ListDemo.35549341.js"),["assets/ListDemo.35549341.js","assets/ListDemo.bdbb968b.css","assets/vendor.7b25b2a1.js"])},{path:"/inputDemo",name:"InputDemo",component:()=>b(()=>import("./InputDemo.c667524e.js"),["assets/InputDemo.c667524e.js","assets/InputDemo.426afc29.css","assets/vendor.7b25b2a1.js"])}],L=R({history:T(),routes:le});L.beforeEach(()=>{w.start()});L.afterEach(()=>{w.done()});const ae=A({name:"DzButton",props:{type:{type:String,default:"default",required:!0},disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1},icon:{type:String},size:{type:String,default:"default"}},setup(e,{slots:t}){const{icon:s}=I(e),n=h(()=>["dz-button",`dz-button-${e.type}`,e.disabled&&"dz-button-disabled",e.round&&"dz-button-round",e.size&&`dz-button-size-${e.size}`]),o=k(e.disabled),l=h(()=>!t.icon&&e.icon);return{iconClass:h(()=>["iconfont",l.value&&s.value]),showPropIcon:l,buttonClass:n,isDisabled:o}}}),re=["disabled"];function de(e,t,s,n,o,l){return d(),c("button",{class:D(e.buttonClass),disabled:e.isDisabled},[y(e.$slots,"default",{},void 0,!0),y(e.$slots,"icon",{},void 0,!0),e.showPropIcon?(d(),c("i",{key:0,class:D(e.iconClass)},null,2)):m("",!0)],10,re)}var ce=g(ae,[["render",de],["__scopeId","data-v-080f9b0d"]]);const ue=A({name:"DzCheckbox",props:{label:{type:String},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{modelValue:s,disabled:n}=I(e),o=h(()=>[s.value&&"is-checked",n.value&&"is-disabled"]);function l(a){t("update:modelValue",a.target.checked),t("change",a.target.checked)}return{changeHandler:l,checkboxClass:o}}}),ie=e=>(N("data-v-243ef51e"),e=e(),q(),e),_e={class:"dz-checkbox__input"},fe=ie(()=>i("span",{class:"dz-checkbox__inner iconfont icon-duihao"},null,-1)),pe=["checked","disabled"],he={key:0,class:"dz-checkbox__label"};function me(e,t,s,n,o,l){return d(),c("label",{class:D(["dz-checkbox",e.checkboxClass])},[i("span",_e,[fe,i("input",{checked:e.modelValue,disabled:e.disabled,class:"dz-checkbox__original",type:"checkbox",onChange:t[0]||(t[0]=(...a)=>e.changeHandler&&e.changeHandler(...a))},null,40,pe)]),e.$slots.default||e.label?(d(),c("span",he,[y(e.$slots,"default",{},void 0,!0),e.$slots.default?m("",!0):(d(),c(p,{key:0},[f(z(e.label),1)],64))])):m("",!0)],2)}var B=g(ue,[["render",me],["__scopeId","data-v-243ef51e"]]);function ve(e,t){O(()=>{e.forEach(s=>s.selected=t.includes(s.key))})}function be(e,t,s){const n=k(!1),o=h(()=>e.filter(r=>r.selected)),l=h(()=>o.value.map(r=>r.key));t&&ve(e,t.selectedRowKeys),O(()=>{n.value=e.filter(r=>!r.selected).length===0});function a(r){r?e.forEach(u=>u.selected=!0):e.forEach(u=>u.selected=!1),t==null||t.onChange(l.value,o.value),s("selectAllChange",r)}return{selectedAll:n,selectAllChange:a}}const S=k(!1),E=k(0),ye=2;let V=null;function ke(e){V=window.setInterval(()=>{E.value++,E.value===ye&&(clearInterval(V),e.target.classList.add("focused"),S.value=!0)},1e3)}function ge(e){clearInterval(V),e.target.classList.remove("focused"),S.value=!1,E.value=0}const $e=A({name:"DzList",components:{DzCheckbox:B},props:{data:{type:Array,required:!0},columns:{type:Array,required:!0},rowSelection:{type:Object,default:()=>({})}},emits:["selectAllChange"],setup(e,{emit:t}){const{data:s,rowSelection:n}=I(e),{selectedAll:o,selectAllChange:l}=be(s.value,n.value,t);return{selectedAll:o,selectAllChange:l,showFocusMask:S,enterHandler:ke,leaveHandler:ge}}}),Ce={class:"dz-list"},De={key:0},ze={key:0},Ee={class:"list-footer"},Ve={key:0,class:"tr-focus-mask"};function Ae(e,t,s,n,o,l){const a=C("dz-checkbox");return d(),c(p,null,[i("div",Ce,[i("table",null,[i("thead",null,[i("tr",null,[e.rowSelection?(d(),c("th",De,[_(a,{modelValue:e.selectedAll,"onUpdate:modelValue":t[0]||(t[0]=r=>e.selectedAll=r),onChange:e.selectAllChange},null,8,["modelValue","onChange"])])):m("",!0),(d(!0),c(p,null,$(e.columns,(r,u)=>(d(),c("th",{key:u},z(r.title),1))),128))])]),i("tbody",null,[(d(!0),c(p,null,$(e.data,r=>(d(),c("tr",{key:r.key,onMouseenter:t[1]||(t[1]=(...u)=>e.enterHandler&&e.enterHandler(...u)),onMouseleave:t[2]||(t[2]=(...u)=>e.leaveHandler&&e.leaveHandler(...u))},[e.rowSelection?(d(),c("td",ze,[_(a,{modelValue:r.selected,"onUpdate:modelValue":u=>r.selected=u},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),(d(!0),c(p,null,$(e.columns,(u,H)=>(d(),c("td",{key:H},z(r[u.dataIndex]),1))),128))],32))),128))])]),i("div",Ee,[y(e.$slots,"footer",{},void 0,!0)])]),(d(),F(U,{to:"body"},[_(M,{name:"slide-fade"},{default:v(()=>[e.showFocusMask?(d(),c("div",Ve)):m("",!0)]),_:1})]))],64)}var Ie=g($e,[["render",Ae],["__scopeId","data-v-5fd3f25c"]]);const Le=[ce,B,Ie],Se=e=>{Le.forEach(t=>e.component(t.name,t))};K(oe).use(L).use(Se).mount("#app");export{ce as D,g as _,B as a,Ie as b};
