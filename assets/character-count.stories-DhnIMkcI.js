import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table--dTJ_LlN.js";import"./banner-DdeTFA5m.js";import"./button-DZcatjI3.js";import"./button-group-CIDeXJwb.js";import"./checkbox-CPEjjsvs.js";import"./combo-box-CuLm5IF7.js";import"./date-picker-due9hnL1.js";import"./error-messages-DQwxQ3pR.js";import"./index-0pD0Rfof.js";import"./form-group-B_GsfbZZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cwt70qU2.js";import"./label-Z58zP1tT.js";import"./modal-CR2VGK_Z.js";import"./process-list-Hq8KfT0t.js";import"./radio-button-QrmP5zSj.js";import"./range-slider-B7ThKR_I.js";import"./search-iaPpQ-jF.js";import"./select-DouUKTqO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BFT9GY45.js";import"./step-indicator-IM_qMCyO.js";import"./summary-box-DfJ7OwM5.js";import"./tag-BpxbKPsG.js";import{T as p}from"./text-area-Dh5yMKcm.js";import"./time-picker-B_vT5Vzq.js";import"./tooltip-yNuiRydh.js";import"./index-BWc2KjT0.js";import"./iframe-DLzeRc9X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNkV8ViH.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CvKfrh-m.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
