import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-Bar13plf.js";import"./banner-DbFUAhNG.js";import"./button-ffGbt_Ww.js";import"./button-group-BaU0kfnO.js";import"./checkbox-BZKoH8WH.js";import"./combo-box-DN8WGebT.js";import"./date-picker-UahoSx6W.js";import"./error-messages-DQwxQ3pR.js";import"./index-CcVn3sHa.js";import"./form-group-CS7jclOy.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CSGERsm9.js";import"./label-Z58zP1tT.js";import"./modal-B6MEUZgO.js";import"./process-list-C1-6C-U2.js";import"./radio-button-D0M8jQtJ.js";import"./range-slider-CzZDIB_7.js";import"./search-BYXCCPZR.js";import"./select-DhAAD6zD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CjKb598A.js";import"./step-indicator-BLj_ZoPZ.js";import"./summary-box-CKMaVeZ4.js";import"./tag-BOa7e9QQ.js";import{T as p}from"./text-area-Bl1HSWIL.js";import"./time-picker-BROe3EpJ.js";import"./tooltip-ZrQjdNc3.js";import"./index-CiqF2SW8.js";import"./iframe-CBeyx4WF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uAYjUUGB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-aiAaYu5C.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
