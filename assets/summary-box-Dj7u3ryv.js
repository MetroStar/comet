import{j as s}from"./jsx-runtime-CKrituN3.js";import{c as o}from"./index-Bl6ORisp.js";const l=({id:e,heading:r,className:a,items:i})=>{const t=o("usa-summary-box",a);return s.jsx("div",{className:t,role:"region","aria-labelledby":e,children:s.jsxs("div",{className:"usa-summary-box__body",children:[s.jsx("h3",{className:"usa-summary-box__heading",id:e,children:r}),s.jsx("div",{className:"usa-summary-box__text",children:s.jsx("ul",{className:"usa-list",children:i.map((m,n)=>s.jsx("li",{children:m},n))})})]})})};l.__docgenInfo={description:"A summary box highlights key information from a longer page or displays next steps.",methods:[],displayName:"SummaryBox",props:{id:{required:!0,tsType:{name:"string"},description:"The unique identifier for this component"},heading:{required:!0,tsType:{name:"string"},description:"The heading for the summary box"},className:{required:!1,tsType:{name:"string"},description:"A custom class to apply to the component"},items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"An array of string messages to display in the summary box"}}};export{l as S};