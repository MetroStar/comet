import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-9tQC-4Xm.js";const t=({id:a,name:d,checked:r=!1,label:s,ariaLabel:c,onChange:u})=>{const[l,g]=i.useState(!1),m=p=>{g(!l),u?.(p)};return i.useEffect(()=>{g(r)},[r]),e.jsx("div",{className:"toggle",children:e.jsxs("label",{htmlFor:a,className:"toggle-label",tabIndex:0,"aria-label":c,children:[e.jsxs("div",{className:"pos-rel",children:[e.jsx("input",{type:"checkbox",id:a,name:d,className:"toggle-sr-only",checked:l,onChange:m,tabIndex:-1}),e.jsx("div",{className:`toggle-body ${l?"toggle-body-on":""}`}),e.jsx("div",{className:`toggle-dot ${l?"ml-6":"ml-0"}`})]}),s&&e.jsx("span",{className:"toggle-label ml-3",children:s})]})})};try{t.displayName="Toggle",t.__docgenInfo={description:"Used to toggle the state of a single setting on or off.",displayName:"Toggle",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The name of the text input",name:"name",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Whether the toggle is checked or not",name:"checked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"A label to display with the toggle",name:"label",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"An accessible label for the toggle",name:"ariaLabel",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Custom callback for when input is changed",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}try{toggle.displayName="toggle",toggle.__docgenInfo={description:"Used to toggle the state of a single setting on or off.",displayName:"toggle",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The name of the text input",name:"name",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Whether the toggle is checked or not",name:"checked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"A label to display with the toggle",name:"label",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"An accessible label for the toggle",name:"ariaLabel",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Custom callback for when input is changed",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const b={title:"Extras/Toggle",component:t,argTypes:{id:{control:"text"},name:{control:"text"},checked:{control:"boolean"},label:{control:"text"},ariaLabel:{control:"text"},onChange:{action:"changed"}}},n={args:{id:"toggle",name:"toggle",checked:!1,label:"Toggle",ariaLabel:"Toggle button"},render:a=>e.jsx(t,{...a})},o={args:{id:"toggle",name:"toggle",checked:!0,label:"Checked Toggle",ariaLabel:"Checked toggle button"},render:a=>e.jsx(t,{...a})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle',
    name: 'toggle',
    checked: false,
    label: 'Toggle',
    ariaLabel: 'Toggle button'
  },
  render: (args: ToggleProps) => <Toggle {...args} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle',
    name: 'toggle',
    checked: true,
    label: 'Checked Toggle',
    ariaLabel: 'Checked toggle button'
  },
  render: (args: ToggleProps) => <Toggle {...args} />
}`,...o.parameters?.docs?.source}}};const y=["Default","Checked"];export{o as Checked,n as Default,y as __namedExportsOrder,b as default};
