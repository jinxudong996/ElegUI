import{d as o,p as l,o as i,c as s,j as u,r as d,n as c}from"./framework.CBURy9wq.js";const f=["disabled","autofocus","type"],b=o({name:"VkButton",inheritAttrs:!1,__name:"Button",props:{type:null,size:null,plain:{type:Boolean},round:{type:Boolean},circle:{type:Boolean},disabled:{type:Boolean},nativeType:{default:"button"},autofocus:{type:Boolean},icon:null,loading:{type:Boolean}},setup(e,{expose:n}){const t=l();return n({ref:t}),(a,r)=>(i(),s("button",{ref_key:"_ref",ref:t,class:c(["vk-button",{[`vk-button--${e.type}`]:e.type,[`vk-button--${e.size}`]:e.size,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle,"is-disabled":e.disabled,"is-loading":e.loading}]),disabled:e.disabled||e.loading,autofocus:e.autofocus,type:e.nativeType},[u("span",null,[d(a.$slots,"default")])],10,f))}});export{b as _};
