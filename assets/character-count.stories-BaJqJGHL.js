import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BPs16-FG.js";import"./banner-LwyMWt_f.js";import"./button-DzOuhbyX.js";import"./button-group-DYkrmCJV.js";import"./checkbox-DXuqZY3J.js";import"./combo-box-C7iC2mHN.js";import"./date-picker-DVrnKbmB.js";import"./error-messages-DQwxQ3pR.js";import"./index-BqWP0DP-.js";import"./form-group-CqavwUjT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZJuTWWU.js";import"./label-Z58zP1tT.js";import"./modal-Be2O8iTh.js";import"./process-list-COVkMve9.js";import"./radio-button-CTxx2WwS.js";import"./range-slider-D1_yv7oc.js";import"./search-DypyX-qM.js";import"./select-Cp8HWSd0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CmhnIneU.js";import"./step-indicator-BqqEEUy_.js";import"./summary-box-vGIC5NTA.js";import"./tag-CB3TBIup.js";import{T as p}from"./text-area--8jwfK7F.js";import"./time-picker-BxfpYFKH.js";import"./tooltip-DcEE479F.js";import"./index-ByS0UJ_H.js";import"./iframe-Bvnd1wKQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tyhn6axX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DBgtOXSw.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
