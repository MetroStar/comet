import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-CfPzz4nf.js";import"./banner-BH6B8BCY.js";import"./button-CLevJzxR.js";import"./button-group-D3Ocr3Rb.js";import"./checkbox-Cc0V9sR6.js";import"./combo-box-TU4qt16Y.js";import"./date-picker-DSHGeHYl.js";import"./error-messages-DQwxQ3pR.js";import"./index-BsEblj0h.js";import"./form-group-BzmrJy3n.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D2Nqola7.js";import"./label-Z58zP1tT.js";import"./modal-DfDUd-Mt.js";import"./process-list-UharPk4r.js";import"./radio-button-D4Pk_Rgl.js";import"./range-slider-sQ5Tj5dy.js";import"./search-CFh4K7A8.js";import"./select-Kk8L1GnB.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D0bVirTZ.js";import"./step-indicator-z7wQapN2.js";import"./summary-box-BkJ1H1hK.js";import"./tag-ZOpGD9hG.js";import{T as p}from"./text-area-ynEclwl4.js";import"./time-picker-Bb-pazU6.js";import"./tooltip-Cg_p7vCm.js";import"./index-BdG5vuSr.js";import"./iframe-D2HmkBK5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dyunygu1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CucFHm0F.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
