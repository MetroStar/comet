import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-CNQjDBiW.js";import{S as d}from"./step-indicator-CU6AwB80.js";import{B as p}from"./button-DDDiAE0o.js";import{B}from"./button-group-Bx_yExq0.js";import"./index-BRohADMv.js";const P={title:"USWDS/Step Indicator",component:d,argTypes:{id:{required:!0},steps:{requried:!0},currentStep:{required:!0}}},S=["Lorem","Ipsum","Dolor","Sit","Amet"],b=n=>{const[s,l]=x.useState(n.currentStep),m=([r,u])=>t.jsxs(B,{children:[t.jsx(p,{id:"previous-button",disabled:r<=0,onClick:()=>u(r-1),children:"Previous"}),t.jsx(p,{id:"next-button",disabled:r>=S.length-1,onClick:()=>u(r+1),children:"Next"})]}),o={...n};return o.currentStep=s,t.jsxs(t.Fragment,{children:[t.jsx(d,{...o}),m([s,l])]})},e=b.bind({});e.args={id:"step-indicator-1",steps:S,currentStep:0,hideLabels:!1,showCounters:!1,showSmallCounters:!1,centerCounters:!1,headingLevel:"h1"};var a,c,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: StepIndicatorProps) => {
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
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const w=["Standard"];export{e as Standard,w as __namedExportsOrder,P as default};
