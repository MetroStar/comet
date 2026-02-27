import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DoPD4hfz.js";import"./banner-CO-rJZEh.js";import"./button-s3f33iqR.js";import"./button-group-yvOjzuR7.js";import"./checkbox-CtRvH166.js";import"./combo-box-BjQtQyeK.js";import"./date-picker-BXS9EJIo.js";import"./error-messages-DQwxQ3pR.js";import"./index-Y6j-vL1X.js";import"./form-group-C2eezSoD.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BvEpj7o9.js";import"./label-Z58zP1tT.js";import"./modal-C3ovDbUu.js";import"./process-list-CtF8XHOe.js";import"./radio-button-5J3HPOi8.js";import"./range-slider-BmvWjfhG.js";import"./search-DXUrmg5z.js";import"./select-BFVUdGDr.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DrN3KhjE.js";import"./step-indicator-Dmo_bZM0.js";import"./summary-box-2eCbppDZ.js";import"./tag-C3E-r3xI.js";import{T as p}from"./text-area-BRG0rnJp.js";import"./time-picker-eDTugkBF.js";import"./tooltip-CyHsxTd4.js";import"./index-CajJ0eJG.js";import"./iframe-DI97NYzA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXqkfQZm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN4bhDLR.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
