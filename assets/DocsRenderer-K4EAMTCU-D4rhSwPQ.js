function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-DSz_1G2r.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-SwPvoiT0.js";import{R as e,r as c}from"./index-CBqU2yxZ.js";import{r as l,u}from"./react-18-D8cruF67.js";import{e as h,A as E,H as d,D as x}from"./index-0Ps_hYzp.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./pickBy-CrIjVsaj.js";import"./_baseAssignValue-BpjoOScu.js";import"./index-DqDLnInC.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},S=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,i)=>{a(()=>import("./index-DSz_1G2r.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:p})=>l(e.createElement(D,{showException:i,key:Math.random()},e.createElement(p,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{S as DocsRenderer,_ as defaultComponents};