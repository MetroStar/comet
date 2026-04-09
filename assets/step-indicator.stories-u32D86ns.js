import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CsouTy85.js";import{t as r}from"./jsx-runtime-MmJhrRyC.js";import{n as i,t as a}from"./button-zm3BnggY.js";import{t as o}from"./button-group-DXRrBXQS.js";import{n as s,r as c,t as l}from"./step-indicator-j1WszcAk.js";var u,d,f,p,m,h;t((()=>{u=e(n()),s(),i(),c(),d=r(),f={title:`USWDS/Step Indicator`,component:l,argTypes:{id:{required:!0},steps:{requried:!0},currentStep:{required:!0}}},p=[`Lorem`,`Ipsum`,`Dolor`,`Sit`,`Amet`],m={args:{id:`step-indicator-1`,steps:p,currentStep:0,hideLabels:!1,hideCounterHeading:!1,showCounters:!1,showSmallCounters:!1,centerCounters:!1,headingLevel:`h1`},render:e=>{let[t,n]=(0,u.useState)(e.currentStep),r=([e,t])=>(0,d.jsxs)(o,{children:[(0,d.jsx)(a,{id:`previous-button`,disabled:e<=0,onClick:()=>t(e-1),children:`Previous`}),(0,d.jsx)(a,{id:`next-button`,disabled:e>=p.length-1,onClick:()=>t(e+1),children:`Next`})]}),i={...e};return i.currentStep=t,(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{...i}),r([t,n])]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Standard`]}))();export{m as Standard,h as __namedExportsOrder,f as default};