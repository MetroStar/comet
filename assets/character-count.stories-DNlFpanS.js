import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-COi9ma6z.js";import"./banner-BY97cSax.js";import"./button-CqrPBp8K.js";import"./button-group-CdGkF7WG.js";import"./checkbox-3ChjEf2R.js";import"./combo-box-B6O4vxiK.js";import"./date-picker-Dd9Iw-ol.js";import"./error-messages-_lA7co94.js";import"./index-CE4Qbm93.js";import"./form-group-C2lFXs7K.js";import"./helper-text-BRA2CuHl.js";import"./icon-Eg7KUmam.js";import"./label-0qqEdO1f.js";import"./modal-ByL-yNd7.js";import"./process-list-oXo-lIyy.js";import"./radio-button-C6MUYnX_.js";import"./range-slider-BRFEcZKS.js";import"./search-B58zHbmN.js";import"./select-DOSbCKLB.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BuAtgi14.js";import"./step-indicator-D8MXlKv6.js";import"./summary-box-BxR4roeg.js";import"./tag-CWw6NOTz.js";import{T as p}from"./text-area-d4GYi33a.js";import"./time-picker-CU9bog2Y.js";import"./tooltip-ugUe3fuh.js";import"./index-Cd-en3Xw.js";import"./iframe-BiUBZBi9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-L6niw3Vl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Br38tAj3.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
