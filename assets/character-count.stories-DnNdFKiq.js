import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-Cof7Ljxw.js";import"./banner-DZ0ebqlp.js";import"./button-mFolkgwz.js";import"./button-group-CsdMoKMD.js";import"./checkbox-BQ-bjBr7.js";import"./combo-box-QWTBgS1h.js";import"./date-picker-CEhy0WXY.js";import"./error-messages-DQwxQ3pR.js";import"./index-C5OTqaeq.js";import"./form-group-ioiVrL2h.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DN8sM9dv.js";import"./label-Z58zP1tT.js";import"./modal-eBwykmDT.js";import"./process-list-Dusstfuy.js";import"./radio-button-CAASPgna.js";import"./range-slider-CL6e4st8.js";import"./search-CK-e7ALh.js";import"./select-hgIVHsJi.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B4EcsSpo.js";import"./step-indicator-BeUZnxYe.js";import"./summary-box-DvvAlmYA.js";import"./tag-BHLVfqLG.js";import{T as p}from"./text-area-oJoyGoaw.js";import"./time-picker-t8bSILu6.js";import"./tooltip-CCcZSQT3.js";import"./index-CcYm8E6G.js";import"./iframe-Qm5GmbtS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF68Yrx3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-c7glwd7z.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
