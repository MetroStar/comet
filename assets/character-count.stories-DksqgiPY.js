import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-CZhgR457.js";import"./banner-DIEW8n6B.js";import"./button-DGvenM4j.js";import"./button-group-BV1Ytlrk.js";import"./checkbox-DzLYMhp5.js";import"./combo-box-kKNgi2y1.js";import"./date-picker-BI-4-5Ws.js";import"./error-messages-DQwxQ3pR.js";import"./index-B2SZ3QXI.js";import"./form-group-CdcOJC88.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CsGs4XnL.js";import"./label-Z58zP1tT.js";import"./modal-BZVpKvbi.js";import"./process-list-Bs__pWGn.js";import"./radio-button-B2-5RiLD.js";import"./range-slider-B_aFnZC_.js";import"./search-CMPDoc5B.js";import"./select-CT7NorQw.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BNiS1_pH.js";import"./step-indicator-DQxEqhPc.js";import"./summary-box-B-Tr6alV.js";import"./tag-BkiTKNVF.js";import{T as p}from"./text-area-Bo3yVAyW.js";import"./time-picker-B0q7-5Ml.js";import"./tooltip-DtEVUKwV.js";import"./index-CE8u-YIp.js";import"./iframe-C-4Tka3L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClkTyj86.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-COT3FEAd.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-1'
  },
  render: (args: CharacterCountProps) => <Form id="form-1">
      <CharacterCountContainer id={args.id}>
        <TextInput id="with-hint-input" className="usa-character-count__field" maxLength={25} name="with-hint-input" label="Text input" helperText="This is an input with a character counter." />
        <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
      </CharacterCountContainer>
    </Form>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const X=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,X as __namedExportsOrder,V as default};
