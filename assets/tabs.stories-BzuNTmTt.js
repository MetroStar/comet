import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as h}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const r=({id:t,children:s})=>e.jsx("div",{id:t,children:s}),o=({id:t,defaultTabId:s,children:i,className:T})=>{var p;const[l,m]=h.useState(s),u=i.filter(a=>a.props.id===l),f=a=>{m(a)};return e.jsxs("div",{id:t,className:`tabs ${T}`,children:[e.jsx("ul",{children:i.map(a=>e.jsx("li",{children:e.jsx("button",{onClick:()=>f(a.props.id),className:`text-base-dark ${a.props.id===l?"tabs-active":""}`,children:a.props.label})},`tab-${a.props.id}`))}),e.jsx(r,{...(p=u[0])==null?void 0:p.props})]})};r.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{id:{required:!0,tsType:{name:"string"},description:"The unique identifier for the tab panel"},label:{required:!0,tsType:{name:"string"},description:"The label value for the tab panel"},children:{required:!0,tsType:{name:"ReactNode"},description:"The contents of the button"}}};o.__docgenInfo={description:"Used to organize and allow navigation between groups of content.",methods:[],displayName:"Tabs",props:{id:{required:!0,tsType:{name:"string"},description:"The unique identifier for this component"},defaultTabId:{required:!0,tsType:{name:"string"},description:"The id of a tab panel to show by default"},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TabPanelProps"}],raw:"ReactElement<TabPanelProps>"}],raw:"Array<ReactElement<TabPanelProps>>"},description:"An array of child tab panels"},className:{required:!1,tsType:{name:"string"},description:"A custom class to apply to the component"}}};const y={title:"Extras/Tabs",component:o},P=t=>e.jsxs(o,{...t,children:[e.jsx(r,{id:"tabPanel1",label:"Tab 1",children:e.jsx("p",{children:"Content of Tab 1"})}),e.jsx(r,{id:"tabPanel2",label:"Tab 2",children:e.jsx("p",{children:"Content of Tab 2"})}),e.jsx(r,{id:"tabPanel3",label:"Tab 3",children:e.jsx("p",{children:"Content of Tab 3"})})]}),n=P.bind({});n.args={id:"tab1",defaultTabId:"tabPanel1"};var d,b,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: TabsProps) => <Tabs {...args}>
    <TabPanel id="tabPanel1" label="Tab 1">
      <p>Content of Tab 1</p>
    </TabPanel>
    <TabPanel id="tabPanel2" label="Tab 2">
      <p>Content of Tab 2</p>
    </TabPanel>
    <TabPanel id="tabPanel3" label="Tab 3">
      <p>Content of Tab 3</p>
    </TabPanel>
  </Tabs>`,...(c=(b=n.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,y as default};