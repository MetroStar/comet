import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-PiQKqWot.js";import"./banner-BIUhIOGt.js";import"./button-4POMs2EY.js";import"./button-group-CL3mf8vR.js";import"./checkbox-B5Gt84Lz.js";import"./combo-box-Bct81XLK.js";import"./date-picker-DS9Gxvt9.js";import"./error-messages-pdO9TZPZ.js";import"./index-b9o7Vjy2.js";import"./form-group-D1BkIUNZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-DEIpQ_jd.js";import"./label-0qqEdO1f.js";import"./modal-DZZ04_D2.js";import"./process-list-DJo8omkl.js";import"./radio-button-8NO9pNju.js";import"./range-slider-0gKY5Srp.js";import"./search-FlA3WQtB.js";import"./select-3USV_5y9.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-D7BEF8Gj.js";import"./step-indicator-CeIMTuFn.js";import"./summary-box-CbWSBrtA.js";import"./tag-Cfs8zox1.js";import{T as x}from"./text-area-CJSx7yip.js";import"./time-picker-DI32aVe8.js";import"./tooltip-Fgr-n6X3.js";import"./index-BAkss3hx.js";import"./iframe-YKUTTlTG.js";import"./index-Do0kNAB-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CSFFTE0I.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'character-count-1'
  },
  render: (args: CharacterCountProps) => <Form id="form-1">
      <CharacterCountContainer id={args.id}>
        <TextInput id="with-hint-input" className="usa-character-count__field" maxLength={25} name="with-hint-input" label="Text input" helperText="This is an input with a character counter." />
        <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
      </CharacterCountContainer>
    </Form>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'character-count-2'
  },
  render: (args: CharacterCountProps) => <Form id="form-2">
      <CharacterCountContainer id={args.id}>
        <TextArea id="with-hint-textarea" maxLength={50} rows={5} className="usa-character-count__field" label="Textarea" helperText="This is a textarea with a character counter." />
        <CharacterCount id="with-hint-textarea-info">
          You can enter up to 50 characters
        </CharacterCount>
      </CharacterCountContainer>
    </Form>
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ar=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,ar as __namedExportsOrder,tr as default};
