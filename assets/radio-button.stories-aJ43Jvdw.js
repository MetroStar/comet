import{j as r}from"./jsx-runtime-Bxcv0yjW.js";import{R as i}from"./radio-button-D86oCjwD.js";import"./index-mfbfsM12.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const x={title:"USWDS/Forms/Radio Button",component:i,argTypes:{id:{required:!0},name:{required:!0},isTile:{type:"boolean"}}},d="lorem-radio-button",b=["Lorem","Ipsum","Dolor","Sit"],T=e=>r.jsx(r.Fragment,{children:b.map((s,t)=>r.jsx(i,{id:`radio-button${t}`,name:d,label:s,value:s.toLowerCase(),checked:t===0,isTile:e.isTile},t))}),a=T.bind({});a.args={id:"radio-button-1",name:"radio-button-1",isTile:!1};const g=e=>r.jsx(i,{id:d,name:d,label:e.label,value:e.value,checked:e.checked,defaultChecked:e.defaultChecked,isTile:e.isTile}),o=g.bind({});o.args={id:"radio-button-1",name:"radio-button-1",label:"Lorem",value:"lorem",isTile:!1,defaultChecked:!0};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"(args: RadioButtonProps) => <>\n    {loremWords.map((word, wordIndex) => <RadioButton id={`radio-button${wordIndex}`} name={radioButtonName} label={word} value={word.toLowerCase()} checked={wordIndex === 0} key={wordIndex} isTile={args.isTile} />)}\n  </>",...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var u,c,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"(args: RadioButtonProps) => <RadioButton id={radioButtonName} name={radioButtonName} label={args.label} value={args.value} checked={args.checked} defaultChecked={args.defaultChecked} isTile={args.isTile} />",...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const R=["Standard","Single"];export{o as Single,a as Standard,R as __namedExportsOrder,x as default};
