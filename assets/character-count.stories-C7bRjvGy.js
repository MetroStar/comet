import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-do3Wtiuz.js";import"./banner-C69xj6up.js";import"./button-BjwnDlUa.js";import"./button-group-DaZ29ND5.js";import"./checkbox-OyR24-QB.js";import"./combo-box-D4Ec50_t.js";import"./date-picker-C24u14Kt.js";import"./error-messages-_lA7co94.js";import"./index-DB5TIisB.js";import"./form-group-CWTBhvs3.js";import"./helper-text-BRA2CuHl.js";import"./icon-Ds9U5QK2.js";import"./label-0qqEdO1f.js";import"./modal-BdgCaLBt.js";import"./process-list-C_Gbba5Q.js";import"./radio-button-BNUbyZkN.js";import"./range-slider-dvvIi5fH.js";import"./search-Ca-ELIx0.js";import"./select-nGKBp-EG.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BWuugDej.js";import"./step-indicator-ClF7nu7D.js";import"./summary-box-CQ7ma9q9.js";import"./tag-C7eGu5si.js";import{T as p}from"./text-area-DldIq14N.js";import"./time-picker-BTP0M3i1.js";import"./tooltip-0tlrOCcc.js";import"./index-CsUVYJI9.js";import"./iframe-jnbR5XB0.js";import"./index-yAIAkIfa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-KEPVNFbW.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
