import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-D6PxWkEz.js";import"./banner-5PnvCMeN.js";import"./button-C6DDMlzm.js";import"./button-group-D2NUrE1E.js";import"./checkbox-97CiXItc.js";import"./combo-box-CqKpeFyZ.js";import"./date-picker-9XfVeNZj.js";import"./error-messages-_lA7co94.js";import"./index-Dc5iOzpo.js";import"./form-group-C37VFKvz.js";import"./helper-text-BRA2CuHl.js";import"./icon-ldTZd2PJ.js";import"./label-0qqEdO1f.js";import"./modal-CLRIHiE2.js";import"./process-list-Dv3imPAG.js";import"./radio-button-CQt1YoIZ.js";import"./range-slider-CnELvyde.js";import"./search-CYLnDm6f.js";import"./select-g8Uw7pfh.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CBI-9iTh.js";import"./step-indicator-C3Nqgbfm.js";import"./summary-box-D4YHkNEC.js";import"./tag-DrpHvKAI.js";import{T as p}from"./text-area-ANeT3eEi.js";import"./time-picker-BphduNSw.js";import"./tooltip-DwNK3jut.js";import"./index-DUKoxV3s.js";import"./iframe-D7rw0kbP.js";import"./index-C9q_5GSN.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-SMKFmbVV.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const V=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,V as __namedExportsOrder,Q as default};
