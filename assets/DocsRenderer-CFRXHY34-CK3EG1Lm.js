const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-EeWIkZEf.js","./index-mfbfsM12.js","./_commonjsHelpers-BosuxZz1.js"])))=>i.map(i=>d[i]);
import{_ as l}from"./iframe-BrfZimUd.js";import{r as s,R as n}from"./index-mfbfsM12.js";import{ai as p,aj as h,ak as E,al as d}from"./index-BSDQoZrq.js";import{c as R}from"./client-CybzrYx5.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jsx-runtime-Bxcv0yjW.js";import"./index-BMk6Tmu2.js";import"./index-D-8MO0q_.js";import"./pickBy-LpgX82Vb.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";var i=new Map;function v(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await g(t,r);if(v()){o.render(e);return}let{promise:a,resolve:m}=Promise.withResolvers();return o.render(s.createElement(f,{callback:m},e)),a},_=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},g=async(e,t)=>{let r=i.get(e);return r||(r=R(e,t),i.set(e,r)),r},x={code:p,a:h,...E},y=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},L=class{constructor(){this.render=async(e,t,r)=>{let o={...x,...t==null?void 0:t.components},a=d;return new Promise((m,c)=>{l(async()=>{const{MDXProvider:u}=await import("./index-EeWIkZEf.js");return{MDXProvider:u}},__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:u})=>w(n.createElement(y,{showException:c,key:Math.random()},n.createElement(u,{components:o},n.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{_(e)}}};export{L as DocsRenderer,x as defaultComponents};