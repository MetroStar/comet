import{g as m}from"./_commonjsHelpers-BosuxZz1.js";import{b as p,s as b,c as A}from"./config-BXli1stc.js";import{i as $}from"./is-in-viewport-B5ZZJcwh.js";import{e as w}from"./events-C6LRLXdn.js";const d="aria-expanded",B="aria-controls",f="hidden";var N=(t,e)=>{let o=e;typeof o!="boolean"&&(o=t.getAttribute(d)==="false"),t.setAttribute(d,o);const s=t.getAttribute(B),r=document.getElementById(s);if(!r)throw new Error(`No toggle target found with id: "${s}"`);return o?r.removeAttribute(f):r.setAttribute(f,""),o};const E=b,I=p,u=N,D=$,{CLICK:x}=w,{prefix:c}=A,a=`.${c}-accordion, .${c}-accordion--bordered`,C=`.${c}-banner__button`,n=`.${c}-accordion__button[aria-controls]:not(${C})`,g="aria-expanded",T="data-allow-multiple",h=t=>E(n,t).filter(o=>o.closest(a)===t),i=(t,e)=>{const o=t.closest(a);let s=e;if(!o)throw new Error(`${n} is missing outer ${a}`);s=u(t,e);const r=o.hasAttribute(T);s&&!r&&h(o).forEach(l=>{l!==t&&u(l,!1)})},v=t=>i(t,!0),O=t=>i(t,!1),L=I({[x]:{[n](){i(this),this.getAttribute(g)==="true"&&(D(this)||this.scrollIntoView())}}},{init(t){E(n,t).forEach(e=>{const o=e.getAttribute(g)==="true";i(e,o)})},ACCORDION:a,BUTTON:n,show:v,hide:O,toggle:i,getButtons:h});var _=L;const X=m(_);export{X as a,_ as s,N as t};
