import{j as t}from"./jsx-runtime-Bxcv0yjW.js";import{r as x}from"./index-mfbfsM12.js";import{S as d}from"./step-indicator-DL-d1Rw4.js";import{B as p}from"./button-B9iYWbwu.js";import{B}from"./button-group-Jm6xw3dW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const w={title:"USWDS/Step Indicator",component:d,argTypes:{id:{required:!0},steps:{requried:!0},currentStep:{required:!0}}},S=["Lorem","Ipsum","Dolor","Sit","Amet"],b=n=>{const[s,m]=x.useState(n.currentStep),l=([r,u])=>t.jsxs(B,{children:[t.jsx(p,{id:"previous-button",disabled:r<=0,onClick:()=>u(r-1),children:"Previous"}),t.jsx(p,{id:"next-button",disabled:r>=S.length-1,onClick:()=>u(r+1),children:"Next"})]}),o={...n};return o.currentStep=s,t.jsxs(t.Fragment,{children:[t.jsx(d,{...o}),l([s,m])]})},e=b.bind({});e.args={id:"step-indicator-1",steps:S,currentStep:0,hideLabels:!1,showCounters:!1,showSmallCounters:!1,centerCounters:!1,headingLevel:"h1"};var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: StepIndicatorProps) => {
  const [currentStep, setCurrentStep] = useState(args.currentStep);
  const prevNextButtons = ([currentStep, setCurrentStep]: [number, Dispatch<SetStateAction<number>>]) => {
    return <ButtonGroup>
        <Button id="previous-button" disabled={currentStep <= 0} onClick={() => setCurrentStep(currentStep - 1)}>
          Previous
        </Button>
        <Button id="next-button" disabled={currentStep >= steps.length - 1} onClick={() => setCurrentStep(currentStep + 1)}>
          Next
        </Button>
      </ButtonGroup>;
  };
  const newProps = {
    ...args
  };
  newProps.currentStep = currentStep;
  return <>
      <StepIndicator {...newProps} />
      {prevNextButtons([currentStep, setCurrentStep])}
    </>;
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const I=["Standard"];export{e as Standard,I as __namedExportsOrder,w as default};
