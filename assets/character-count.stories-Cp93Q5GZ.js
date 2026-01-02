import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-walHDM1X.js";import"./banner-D6OWsJH6.js";import"./button-B7htGxce.js";import"./button-group-DPRKc4CK.js";import"./checkbox-gJbOdNV_.js";import"./combo-box-qTwjyg9R.js";import"./date-picker-DEqYSMys.js";import"./error-messages-DQwxQ3pR.js";import"./index-IzqfyfZA.js";import"./form-group-DaebfseS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CYZuVbXq.js";import"./label-Z58zP1tT.js";import"./modal-UTT_pOU9.js";import"./process-list-FACfqpED.js";import"./radio-button-8Hppabgw.js";import"./range-slider-cvo6pp4o.js";import"./search-JwXuI3O4.js";import"./select-BLtfPvgx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BJY1MeDm.js";import"./step-indicator-B38Y5p7y.js";import"./summary-box-KQva4Gki.js";import"./tag-C2j4csul.js";import{T as p}from"./text-area-C9cwn9DQ.js";import"./time-picker-DQ38ClCl.js";import"./tooltip-C7QNwUXe.js";import"./index-BVzeUMco.js";import"./iframe-Co_ow-pI.js";import"./preload-helper-PPVm8Dsz.js";import"./index--DG9ymCz.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-5cdN7wMr.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
