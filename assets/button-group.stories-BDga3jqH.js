import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./button-BJzkurNR.js";import{B as s}from"./button-group-CPDfjD1b.js";import"./index-C9lBdWCt.js";import"./iframe-Dn1ZsrJK.js";const h={title:"USWDS/Button Group",component:s,argTypes:{type:{control:"select"}}},n=()=>{},e={args:{id:"button-group-1",type:"default",className:""},render:a=>t.jsxs(s,{...a,children:[t.jsx(o,{id:"cancel",variant:"secondary",onClick:n,children:"Cancel"}),t.jsx(o,{id:"save",onClick:n,children:"Save"})]})},r={args:{id:"button-group-2",type:"segmented",className:""},render:a=>t.jsxs(s,{...a,children:[t.jsx(o,{id:"button-1",variant:"outline",onClick:n,children:"Button 1"}),t.jsx(o,{id:"button-2",variant:"outline",onClick:n,children:"Button 2"}),t.jsx(o,{id:"button-3",variant:"outline",onClick:n,children:"Button 3"})]})};var u,i,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'button-group-1',
    type: 'default',
    className: ''
  },
  render: (args: ButtonGroupProps) => <ButtonGroup {...args}>
      <Button id="cancel" variant="secondary" onClick={handleClick}>
        Cancel
      </Button>
      <Button id="save" onClick={handleClick}>
        Save
      </Button>
    </ButtonGroup>
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'button-group-2',
    type: 'segmented',
    className: ''
  },
  render: (args: ButtonGroupProps) => <ButtonGroup {...args}>
      <Button id="button-1" variant="outline" onClick={handleClick}>
        Button 1
      </Button>
      <Button id="button-2" variant="outline" onClick={handleClick}>
        Button 2
      </Button>
      <Button id="button-3" variant="outline" onClick={handleClick}>
        Button 3
      </Button>
    </ButtonGroup>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default","Segmented"];export{e as Default,r as Segmented,v as __namedExportsOrder,h as default};
