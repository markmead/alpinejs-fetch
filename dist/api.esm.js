var f=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var x=(r,t)=>{for(var e in t)f(r,e,{get:t[e],enumerable:!0})},D=(r,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of R(t))!E.call(r,n)&&n!==e&&f(r,n,{get:()=>t[n],enumerable:!(o=y(t,n))||o.enumerable});return r};var U=r=>D(f({},"__esModule",{value:!0}),r);var w={};x(w,{default:()=>P});module.exports=U(w);function p(r){let t=r.replace(/\[(.*?)\]/g,""),e=r.match(/\[(.*?)\]/g)?.[0]?.replace(/[\[\]']+/g,"");return{endpointUrl:t,endpointData:e}}function s(r,t){let e={};return t.split(",").map(n=>n.trim()).forEach(n=>{let[i,...a]=n.split(".")||[];if(!a.length){e[i]=r[i];return}let c=r[i];a.forEach(u=>{e[u]=c[u],c=c[u]})}),e}var l=(r="",t={})=>{async function e(){try{let{endpointUrl:o,endpointData:n}=p(r),i=await fetch(o,t);return n?s(i,n):i}catch(o){return o}}return e()},m=(r="",t={},e={})=>{async function o(){try{let{endpointUrl:n,endpointData:i}=p(r),a=await fetch(n,{method:"POST",body:JSON.stringify(t),...e});return i?s(a,i):a}catch(n){return n}}return o()},d=(r="",t={},e={})=>{async function o(){try{let{endpointUrl:n,endpointData:i}=p(r),a=await fetch(n,{method:"PUT",body:JSON.stringify(t),...e});return i?s(a,i):a}catch(n){return n}}return o()},g=(r="",t={})=>{async function e(){try{let{endpointUrl:o,endpointData:n}=p(r),i=await fetch(o,{method:"DELETE",...t});return n?s(i,n):i}catch(o){return o}}return e()};function h(r){r.magic("get",()=>(t="",e={})=>l(t,e)),r.magic("post",()=>(t="",e={},o={})=>m(t,e,o)),r.magic("put",()=>(t="",e={},o={})=>d(t,e,o)),r.magic("patch",()=>(t="",e={},o={})=>d(t,e,o)),r.magic("delete",()=>(t="",e={})=>g(t,e))}var P=h;
