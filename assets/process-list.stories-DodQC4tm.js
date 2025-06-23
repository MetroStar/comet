import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r,a as i}from"./process-list-g8Hqj4X6.js";import"./iframe-BwwnJ4bQ.js";import"./index-CvXiQi1r.js";const W={title:"USWDS/Process List",component:r,argTypes:{id:{required:!0}}},p=[{heading:"Start a process",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})},{heading:"Start a process",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})},{heading:"Proceed to the second step",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien."})},{heading:"Complete the step-by-step process",children:e.jsx("p",{children:"Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien."})}],t={args:{id:"process-list-1",steps:p},render:s=>e.jsx(r,{...s})},o={args:{id:"process-list-1b",steps:p,currentStep:2},render:s=>e.jsx(r,{...s})},C=p.map(s=>({heading:s.heading,children:null})),a={args:{id:"process-list-2",steps:C},render:s=>e.jsx(r,{...s})},n={args:{id:"process-list-3"},render:s=>e.jsxs(r,{...s,children:[e.jsx(i,{heading:"Step 1",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."}),e.jsx(i,{heading:"Step 2",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."}),e.jsx(i,{heading:"Step 3",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})]})},c={args:{id:"process-list-4"},render:s=>e.jsxs(r,{...s,children:[e.jsx(i,{heading:"Step 1",headingElementName:"h5",headingClassName:"font-sans-lg margin-top-1 text-light",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."}),e.jsx(i,{heading:"Step 2",headingElementName:"h5",headingClassName:"font-sans-lg margin-top-1 text-light",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque."})]})};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'process-list-1',
    steps
  },
  render: (args: ProcessListProps) => <ProcessList {...args} />
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,g,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'process-list-1b',
    steps,
    currentStep: 2
  },
  render: (args: ProcessListProps) => <ProcessList {...args} />
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,L,P;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'process-list-2',
    steps: noContentSteps
  },
  render: (args: ProcessListProps) => <ProcessList {...args} />
}`,...(P=(L=a.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var v,x,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var q,j,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const y=["Default","CurrentStep","NoStepContent","WithChildren","CustomSizing"];export{o as CurrentStep,c as CustomSizing,t as Default,a as NoStepContent,n as WithChildren,y as __namedExportsOrder,W as default};
