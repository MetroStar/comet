import{j as a}from"./jsx-runtime--26OcTxz.js";import{c as m}from"./index-Bl6ORisp.js";import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({id:e,type:t="large",loadingText:r="Loading...",className:p,...d})=>{const c=m({"spinner-container-large":t==="large"},{"spinner-container-small":t==="small"},p);return a.jsxs("div",{id:e,className:c,...d,children:[a.jsx("div",{className:t==="large"?"spinner-large":"spinner-small",children:a.jsx("div",{className:t==="large"?"dot-spinner-large":"dot-spinner-small"})}),r&&a.jsx("div",{className:"loading-text",children:r})]})};try{s.displayName="Spinner",s.__docgenInfo={description:"Used to provide the loading state of some action.",displayName:"Spinner",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:{value:"large"},description:"The size of the spinner to display",name:"type",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},loadingText:{defaultValue:{value:"Loading..."},description:"An optional text value to display with the indicator",name:"loadingText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"A custom class to apply to the component",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{spinner.displayName="spinner",spinner.__docgenInfo={description:"Used to provide the loading state of some action.",displayName:"spinner",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:{value:"large"},description:"The size of the spinner to display",name:"type",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},loadingText:{defaultValue:{value:"Loading..."},description:"An optional text value to display with the indicator",name:"loadingText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"A custom class to apply to the component",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Extras/Spinner",component:s,argTypes:{id:{required:!0},type:{control:"select"}}},u=e=>a.jsx(s,{...e}),n=u.bind({});n.args={id:"spinner",type:"large",loadingText:"Loading...",className:""};var i,l,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"(args: SpinnerProps) => <Spinner {...args} />",...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,v as default};
