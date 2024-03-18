import{j as a}from"./jsx-runtime-CKrituN3.js";import{F as r}from"./file-input-NAvcq5gn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./select-or-matches-Bu-g4rUn.js";import"./config-BXli1stc.js";import"./sanitizer-BtXph-xc.js";const h={title:"USWDS/Forms/File Input",component:r,argTypes:{id:{required:!0},name:{required:!0},multiple:{type:"boolean"}}},u=e=>a.jsxs("div",{className:"usa-form-group",children:[a.jsx("label",{className:"usa-label",htmlFor:e.id,children:"Input accepts a single file"}),a.jsx(r,{id:e.id,name:e.name})]}),s=u.bind({});s.args={id:"file-input-1",name:"file-input-1",multiple:!1};const d=e=>a.jsxs("div",{className:"usa-form-group",children:[a.jsx("label",{className:"usa-label",htmlFor:e.id,children:"Input accepts a multiple files"}),a.jsx(r,{id:e.id,name:e.name,multiple:!0})]}),l=d.bind({});l.args={id:"file-input-2",name:"file-input-2",multiple:!0};var i,t,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(args: FileInputProps) => <div className="usa-form-group">
    <label className="usa-label" htmlFor={args.id}>
      Input accepts a single file
    </label>
    <FileInput id={args.id} name={args.name} />
  </div>`,...(m=(t=s.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var n,p,o;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`(args: FileInputProps) => <div className="usa-form-group">
    <label className="usa-label" htmlFor={args.id}>
      Input accepts a multiple files
    </label>
    <FileInput id={args.id} name={args.name} multiple />
  </div>`,...(o=(p=l.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const j=["Standard","Multiple"];export{l as Multiple,s as Standard,j as __namedExportsOrder,h as default};
