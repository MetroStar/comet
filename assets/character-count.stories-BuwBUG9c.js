import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DJk-XhMn.js";import"./banner-753k4wS4.js";import"./button-Zp2H4Y6h.js";import"./button-group-C2O7PpJm.js";import"./checkbox-BgWuR-IY.js";import"./combo-box-CihLQ5-J.js";import"./date-picker-tZBs_O5G.js";import"./error-messages-DQwxQ3pR.js";import"./index-CUBRylId.js";import"./form-group-BhQwpRkB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7X0n4qy.js";import"./label-Z58zP1tT.js";import"./modal-BJk45PfD.js";import"./process-list-DZl8MoFR.js";import"./radio-button-CbVGWSxw.js";import"./range-slider-CuyjuimZ.js";import"./search-CxOU0G1I.js";import"./select-dXE1vA8A.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CgJkBig9.js";import"./step-indicator-CMG5DhXp.js";import"./summary-box-BIDD5Ly5.js";import"./tag-DG7R--Z-.js";import{T as p}from"./text-area-DopYU4uh.js";import"./time-picker-C_yvhzgf.js";import"./tooltip-DCRG7Dm3.js";import"./index-Cthlo8g0.js";import"./iframe-CBTPnINx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmdtenRm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BTJpA1Cv.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
