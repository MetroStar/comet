import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-BFMRay5H.js";import{S}from"./step-indicator-BXmtocNy.js";import{B as p}from"./button-BlUJB2sM.js";import{B as x}from"./button-group-BHc2I0ck.js";import"./index-DDDrMwO6.js";const w={title:"USWDS/Step Indicator",component:S,argTypes:{id:{required:!0},steps:{requried:!0},currentStep:{required:!0}}},a=["Lorem","Ipsum","Dolor","Sit","Amet"],r={args:{id:"step-indicator-1",steps:a,currentStep:0,hideLabels:!1,showCounters:!1,showSmallCounters:!1,centerCounters:!1,headingLevel:"h1"},render:s=>{const[n,l]=h.useState(s.currentStep),m=([t,u])=>e.jsxs(x,{children:[e.jsx(p,{id:"previous-button",disabled:t<=0,onClick:()=>u(t-1),children:"Previous"}),e.jsx(p,{id:"next-button",disabled:t>=a.length-1,onClick:()=>u(t+1),children:"Next"})]}),o={...s};return o.currentStep=n,e.jsxs(e.Fragment,{children:[e.jsx(S,{...o}),m([n,l])]})}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'step-indicator-1',
    steps,
    currentStep: 0,
    hideLabels: false,
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["Standard"];export{r as Standard,j as __namedExportsOrder,w as default};
