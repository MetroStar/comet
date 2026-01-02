import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BMOYpecL.js";import"./banner-D6zqm2EW.js";import"./button-nrtU24eK.js";import"./button-group-ADlqfgna.js";import"./checkbox-BiXkhPCx.js";import"./combo-box-CMQMmbfR.js";import"./date-picker-CgPaXT8a.js";import"./error-messages-DQwxQ3pR.js";import"./index-Ct-EIvox.js";import"./form-group-uDJS1lnL.js";import"./helper-text-C5i0f8Ge.js";import"./icon-F_cyGZg9.js";import"./label-Z58zP1tT.js";import"./modal-PoZR4k57.js";import"./process-list-BQJfcRpT.js";import"./radio-button-C1_K-gHx.js";import"./range-slider-1ZyOyWp9.js";import"./search-Szn_9PFD.js";import"./select-BJFWI1Li.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BpclcXMk.js";import"./step-indicator-BpRbZmmq.js";import"./summary-box-DXWDLu-K.js";import"./tag-DTac5_8O.js";import{T as p}from"./text-area-BL3P-fru.js";import"./time-picker-DhIe9BAg.js";import"./tooltip-Dygdw5v4.js";import"./index-VxPTfNJY.js";import"./iframe-BIOm41XL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl6pxTQJ.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BdscNTfy.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
