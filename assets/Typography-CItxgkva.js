import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-VaI0_08p.js";import{M as i,T as m}from"./blocks-BiIC-TrZ.js";import"./iframe-DAElSkcd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoDV8LIe.js";const e={type:{primary:"'Source Sans Pro','Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif"},weight:{light:"300",normal:"400",bold:"700"},size:{"3xs":12,"2xs":14,xs:16,sm:17,md:18,lg:24,xl:32,"2xl":40,"3xl":56}},l="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function n(r){const s={h1:"h1",p:"p",strong:"strong",...o(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Style Guide/Typography"}),`
`,`
`,`
`,t.jsx(s.h1,{id:"typography",children:"Typography"}),`
`,t.jsxs(s.p,{children:[t.jsx(s.strong,{children:"Font:"})," Source Sans Pro"]}),`
`,t.jsxs(s.p,{children:[t.jsx(s.strong,{children:"Weights:"})," 300(light), 400(normal), 700(bold)"]}),`
`,t.jsx(m,{fontSizes:[Number(e.size["3xs"]),Number(e.size["2xs"]),Number(e.size.xs),Number(e.size.sm),Number(e.size.md),Number(e.size.lg),Number(e.size.xl),Number(e.size["2xl"]),Number(e.size["3xl"])],fontWeight:e.weight.normal,sampleText:l,fontFamily:e.type.primary})]})}function g(r={}){const{wrapper:s}={...o(),...r.components};return s?t.jsx(s,{...r,children:t.jsx(n,{...r})}):n(r)}export{l as SampleText,g as default,e as typography};
