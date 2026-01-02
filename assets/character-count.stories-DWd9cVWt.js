import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-8pzfOB_A.js";import"./banner-807EuhAw.js";import"./button-BDmVrewr.js";import"./button-group-BpG60Bcj.js";import"./checkbox-CRo-bLYB.js";import"./combo-box-xOSHeDpi.js";import"./date-picker-iGTXRuob.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bo9BpfTX.js";import"./form-group--j3vJMLd.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CwZlaL-J.js";import"./label-Z58zP1tT.js";import"./modal-BYOriTvt.js";import"./process-list-Czejjo2U.js";import"./radio-button-DS7TYGvv.js";import"./range-slider-DftJyvpa.js";import"./search-BJc94_-5.js";import"./select-CopyUol0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-I6f_MaFE.js";import"./step-indicator-DWHprvTt.js";import"./summary-box-BchfMT9C.js";import"./tag-zxYU5urs.js";import{T as p}from"./text-area-Cfzus3my.js";import"./time-picker-zTLx_dm2.js";import"./tooltip-DfU1Hy0M.js";import"./index-BtRDYpIf.js";import"./iframe-Sgzi56p1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-NOZ5o7zP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DS-Y6bb9.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
