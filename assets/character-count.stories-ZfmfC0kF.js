import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-C5ecXiWl.js";import"./banner-CpscEPZS.js";import"./button-CCplqAD4.js";import"./button-group-CBD_PpwK.js";import"./checkbox-DgCQLK4R.js";import"./combo-box-xLPTFQHE.js";import"./date-picker-CVz009oa.js";import"./error-messages-DQwxQ3pR.js";import"./index-BLpbz4XI.js";import"./form-group-DXfMq-IB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DR4j0tBc.js";import"./label-Z58zP1tT.js";import"./modal-DOzHsvEh.js";import"./process-list-CLXtVEns.js";import"./radio-button-DDYqB7cN.js";import"./range-slider-CqZElCAA.js";import"./search-BCF1VKn-.js";import"./select-CEldNHvj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B33QLFtI.js";import"./step-indicator-D6s8wIN1.js";import"./summary-box-DdTvFNeq.js";import"./tag-CawMR5EG.js";import{T as p}from"./text-area-Ccz3oOr5.js";import"./time-picker-BmAckJCq.js";import"./tooltip-CbRrGeME.js";import"./index-D1vcuhlz.js";import"./iframe-CWd_O5TO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BragvABs.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BjWNQafm.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
