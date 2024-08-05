import{j as n}from"./jsx-runtime-Bxcv0yjW.js";import{c as p}from"./index-Bl6ORisp.js";const a=({defaultOption:e={value:"",label:"- Select -"},options:t,onChange:i,className:s,children:l,...c})=>!l&&!t?n.jsx(n.Fragment,{}):n.jsxs("select",{className:p("usa-select",s),onChange:i,...c,children:[o(e,-1),l??(t==null?void 0:t.map(o))]}),r=({value:e,label:t})=>n.jsx("option",{value:e,children:t}),o=(e,t)=>e&&n.jsx("option",{value:e.value,children:e.label},t);try{a.displayName="Select",a.__docgenInfo={description:"A select component allows users to choose one option from a temporary modal menu.",displayName:"Select",props:{id:{defaultValue:null,description:"The unique identifier for the select",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the select",name:"name",required:!1,type:{name:"string"}},defaultOption:{defaultValue:{value:"{ value: '', label: '- Select -' }"},description:"The default option of the select",name:"defaultOption",required:!1,type:{name:"SelectOptionProps"}},options:{defaultValue:null,description:"The options of the select",name:"options",required:!1,type:{name:"SelectOptionProps[]"}},children:{defaultValue:null,description:"SelectOption components to display as children",name:"children",required:!1,type:{name:"(ReactElement<SelectOptionProps, string | JSXElementConstructor<any>> | ReactElement<SelectOptionProps, string | JSXElementConstructor<...>>[]) & ReactNode"}},onChange:{defaultValue:null,description:"Event handler for when value of the select is changed",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement>"}}}}}catch{}try{r.displayName="SelectOption",r.__docgenInfo={description:"",displayName:"SelectOption",props:{value:{defaultValue:null,description:"The value for the option",name:"value",required:!0,type:{name:"string | number | readonly string[]"}},label:{defaultValue:null,description:"The label for the option",name:"label",required:!0,type:{name:"string"}}}}}catch{}try{select.displayName="select",select.__docgenInfo={description:"A select component allows users to choose one option from a temporary modal menu.",displayName:"select",props:{id:{defaultValue:null,description:"The unique identifier for the select",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the select",name:"name",required:!1,type:{name:"string"}},defaultOption:{defaultValue:{value:"{ value: '', label: '- Select -' }"},description:"The default option of the select",name:"defaultOption",required:!1,type:{name:"SelectOptionProps"}},options:{defaultValue:null,description:"The options of the select",name:"options",required:!1,type:{name:"SelectOptionProps[]"}},children:{defaultValue:null,description:"SelectOption components to display as children",name:"children",required:!1,type:{name:"(ReactElement<SelectOptionProps, string | JSXElementConstructor<any>> | ReactElement<SelectOptionProps, string | JSXElementConstructor<...>>[]) & ReactNode"}},onChange:{defaultValue:null,description:"Event handler for when value of the select is changed",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement>"}}}}}catch{}export{a as S,r as a};