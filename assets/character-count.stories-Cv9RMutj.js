import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-CXEDt_IX.js";import"./banner-DD5k-zia.js";import"./button-iFbrQHz5.js";import"./button-group-DmlLR6Ch.js";import"./checkbox-D5awqogb.js";import"./combo-box-faxTxgNA.js";import"./date-picker-e0prf2AC.js";import"./error-messages-DQwxQ3pR.js";import"./index-BFbCUD2X.js";import"./form-group-WXs29FIM.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BHDT1NP-.js";import"./label-Z58zP1tT.js";import"./modal-D14ptv-N.js";import"./process-list-2VbCpAnh.js";import"./radio-button-Dk8Mk2UZ.js";import"./range-slider-cFlpjLRU.js";import"./search-CP0HC-Ul.js";import"./select-CMdnoFND.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BARPFDdc.js";import"./step-indicator-3EBTDo0B.js";import"./summary-box-DAOtTa8X.js";import"./tag-C8SuK6DB.js";import{T as p}from"./text-area-CTybm8Is.js";import"./time-picker-CcsjNbhV.js";import"./tooltip-bk-dUcpD.js";import"./index-BMYzY_Pu.js";import"./iframe-BZXS5M1A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWwuGuar.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxdN8t19.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
