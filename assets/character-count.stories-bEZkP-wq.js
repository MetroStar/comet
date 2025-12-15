import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DcU0b4S9.js";import"./banner-Zhn659kb.js";import"./button-B_-ONNZl.js";import"./button-group-BKOewsSA.js";import"./checkbox-C3tZzpbU.js";import"./combo-box-Q1ShTlun.js";import"./date-picker-Wpd8_OKF.js";import"./error-messages-DQwxQ3pR.js";import"./index-B7AoSx0a.js";import"./form-group-CMLBbM3T.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DCURlvdx.js";import"./label-Z58zP1tT.js";import"./modal-BV7fkCww.js";import"./process-list-gyaY5MhK.js";import"./radio-button-idXHHZgI.js";import"./range-slider-DSlEtBnj.js";import"./search-DPGJ6RwK.js";import"./select-DccGlsGn.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BeC0GHZw.js";import"./step-indicator-CEe8z7Jq.js";import"./summary-box-Bw0p2-tj.js";import"./tag-BClIq1Bj.js";import{T as p}from"./text-area-B6LM3Fp9.js";import"./time-picker-BqOXWfTb.js";import"./tooltip-DrkxkMMW.js";import"./index-2ou9KEVW.js";import"./iframe-B742Kdb9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_5Z-PB-3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bu9PEM7P.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
