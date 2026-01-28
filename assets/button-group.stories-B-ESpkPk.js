import{j as t}from"./jsx-runtime-u17CrQMm.js";import{B as o}from"./button-D8zIbCge.js";import{B as s}from"./button-group-CuPgHglY.js";import"./index-C_I8d7DW.js";import"./iframe-Cn7wZz7_.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"USWDS/Button Group",component:s,argTypes:{type:{control:"select"}}},n=()=>{},e={args:{id:"button-group-1",type:"default",className:""},render:a=>t.jsxs(s,{...a,children:[t.jsx(o,{id:"cancel",variant:"secondary",onClick:n,children:"Cancel"}),t.jsx(o,{id:"save",onClick:n,children:"Save"})]})},r={args:{id:"button-group-2",type:"segmented",className:""},render:a=>t.jsxs(s,{...a,children:[t.jsx(o,{id:"button-1",variant:"outline",onClick:n,children:"Button 1"}),t.jsx(o,{id:"button-2",variant:"outline",onClick:n,children:"Button 2"}),t.jsx(o,{id:"button-3",variant:"outline",onClick:n,children:"Button 3"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const B=["Default","Segmented"];export{e as Default,r as Segmented,B as __namedExportsOrder,m as default};
