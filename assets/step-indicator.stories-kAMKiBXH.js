import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-BhXn9yy1.js";import{S as i}from"./step-indicator-DJJpD3pM.js";import{B as a}from"./button-BuClEYRA.js";import{B as S}from"./button-group-3NzQO1eL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt53Fj7x.js";const b={title:"USWDS/Step Indicator",component:i,argTypes:{id:{required:!0},steps:{requried:!0},currentStep:{required:!0}}},p=["Lorem","Ipsum","Dolor","Sit","Amet"],r={args:{id:"step-indicator-1",steps:p,currentStep:0,hideLabels:!1,hideCounterHeading:!1,showCounters:!1,showSmallCounters:!1,centerCounters:!1,headingLevel:"h1"},render:s=>{const[n,c]=l.useState(s.currentStep),d=([t,u])=>e.jsxs(S,{children:[e.jsx(a,{id:"previous-button",disabled:t<=0,onClick:()=>u(t-1),children:"Previous"}),e.jsx(a,{id:"next-button",disabled:t>=p.length-1,onClick:()=>u(t+1),children:"Next"})]}),o={...s};return o.currentStep=n,e.jsxs(e.Fragment,{children:[e.jsx(i,{...o}),d([n,c])]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'step-indicator-1',
    steps,
    currentStep: 0,
    hideLabels: false,
    hideCounterHeading: false,
    showCounters: false,
    showSmallCounters: false,
    centerCounters: false,
    headingLevel: 'h1'
  },
  render: (args: StepIndicatorProps) => {
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
  }
}`,...r.parameters?.docs?.source}}};const v=["Standard"];export{r as Standard,v as __namedExportsOrder,b as default};
