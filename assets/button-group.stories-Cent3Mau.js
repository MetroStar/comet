import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./button-DDDiAE0o.js";import{B as i}from"./button-group-Bx_yExq0.js";import"./index-BRohADMv.js";import"./iframe-CNQjDBiW.js";const x={title:"USWDS/Button Group",component:i,argTypes:{type:{control:"select"}}},r=()=>{},m=a=>t.jsxs(i,{...a,children:[t.jsx(e,{id:"cancel",variant:"secondary",onClick:r,children:"Cancel"}),t.jsx(e,{id:"save",onClick:r,children:"Save"})]}),n=m.bind({});n.args={id:"button-group-1",type:"default",className:""};const B=a=>t.jsxs(i,{...a,children:[t.jsx(e,{id:"button-1",variant:"outline",onClick:r,children:"Button 1"}),t.jsx(e,{id:"button-2",variant:"outline",onClick:r,children:"Button 2"}),t.jsx(e,{id:"button-3",variant:"outline",onClick:r,children:"Button 3"})]}),o=B.bind({});o.args={id:"button-group-2",type:"segmented",className:""};var s,u,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ButtonGroupProps) => <ButtonGroup {...args}>
    <Button id="cancel" variant="secondary" onClick={handleClick}>
      Cancel
    </Button>
    <Button id="save" onClick={handleClick}>
      Save
    </Button>
  </ButtonGroup>`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`(args: ButtonGroupProps) => <ButtonGroup {...args}>
    <Button id="button-1" variant="outline" onClick={handleClick}>
      Button 1
    </Button>
    <Button id="button-2" variant="outline" onClick={handleClick}>
      Button 2
    </Button>
    <Button id="button-3" variant="outline" onClick={handleClick}>
      Button 3
    </Button>
  </ButtonGroup>`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["Default","Segmented"];export{n as Default,o as Segmented,b as __namedExportsOrder,x as default};
