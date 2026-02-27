import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-JRy8o7uW.js";import"./banner-CQ3xCBuG.js";import"./button-Ba7xgwez.js";import"./button-group-B3gTHZWA.js";import"./checkbox-CLvsLWaM.js";import"./combo-box-Co7v8Gdu.js";import"./date-picker-mWD4hatY.js";import"./error-messages-DQwxQ3pR.js";import"./index-Ba-_iRH5.js";import"./form-group-DaNJz7RT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZ8toPDV.js";import"./label-Z58zP1tT.js";import"./modal-u2tm0lfe.js";import"./process-list-nskObF0o.js";import"./radio-button-BqGmz9gl.js";import"./range-slider-zqNchBAK.js";import"./search-DMPs4SjR.js";import"./select-Cd16SEf0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B22i4OXT.js";import"./step-indicator-DQdWZbZs.js";import"./summary-box-BQaBbU0N.js";import"./tag-CRQC5syz.js";import{T as p}from"./text-area-jBrudwtx.js";import"./time-picker-Bt-xFGpB.js";import"./tooltip-CJQbMQMO.js";import"./index-BNIzpdMi.js";import"./iframe-BTdRfY9k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGx-jJq7.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cz8WPAN8.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
