import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r,a as i}from"./process-list-Bes59W1_.js";import"./iframe-Bj_WYFuV.js";import"./index-zqKFCB0Q.js";const h={title:"USWDS/Process List",component:r,argTypes:{id:{required:!0}}},p=[{heading:"Start a process",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})},{heading:"Start a process",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})},{heading:"Proceed to the second step",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien."})},{heading:"Complete the step-by-step process",children:e.jsx("p",{children:"Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien."})}],t={args:{id:"process-list-1",steps:p},render:s=>e.jsx(r,{...s})},o={args:{id:"process-list-1b",steps:p,currentStep:2},render:s=>e.jsx(r,{...s})},d=p.map(s=>({heading:s.heading,children:null})),a={args:{id:"process-list-2",steps:d},render:s=>e.jsx(r,{...s})},n={args:{id:"process-list-3"},render:s=>e.jsxs(r,{...s,children:[e.jsx(i,{heading:"Step 1",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."}),e.jsx(i,{heading:"Step 2",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."}),e.jsx(i,{heading:"Step 3",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})]})},c={args:{id:"process-list-4"},render:s=>e.jsxs(r,{...s,children:[e.jsx(i,{heading:"Step 1",headingElementName:"h5",headingClassName:"font-sans-lg margin-top-1 text-light",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."}),e.jsx(i,{heading:"Step 2",headingElementName:"h5",headingClassName:"font-sans-lg margin-top-1 text-light",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'process-list-1',
    steps
  },
  render: (args: ProcessListProps) => <ProcessList {...args} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'process-list-1b',
    steps,
    currentStep: 2
  },
  render: (args: ProcessListProps) => <ProcessList {...args} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'process-list-2',
    steps: noContentSteps
  },
  render: (args: ProcessListProps) => <ProcessList {...args} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'process-list-3'
  },
  render: (args: ProcessListProps) => <ProcessList {...args}>
      <ProcessListStep heading="Step 1">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </ProcessListStep>
      <ProcessListStep heading="Step 2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </ProcessListStep>
      <ProcessListStep heading="Step 3">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </ProcessListStep>
    </ProcessList>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'process-list-4'
  },
  render: (args: ProcessListProps) => <ProcessList {...args}>
      <ProcessListStep heading="Step 1" headingElementName="h5" headingClassName="font-sans-lg margin-top-1 text-light">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </ProcessListStep>
      <ProcessListStep heading="Step 2" headingElementName="h5" headingClassName="font-sans-lg margin-top-1 text-light">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </ProcessListStep>
    </ProcessList>
}`,...c.parameters?.docs?.source}}};const S=["Default","CurrentStep","NoStepContent","WithChildren","CustomSizing"];export{o as CurrentStep,c as CustomSizing,t as Default,a as NoStepContent,n as WithChildren,S as __namedExportsOrder,h as default};
