import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-Sd8cxFUx.js";import"./banner-upozFeST.js";import"./button-DeQuXKOz.js";import"./button-group-n1LE8F7m.js";import"./checkbox-DAwvlk7m.js";import"./combo-box-DTj_V3yZ.js";import"./date-picker-m9zUkIvb.js";import"./error-messages-_lA7co94.js";import"./index-Bm7npR7P.js";import"./form-group-ODM8qnlA.js";import"./helper-text-BRA2CuHl.js";import"./icon-C4QULdnD.js";import"./label-0qqEdO1f.js";import"./modal-CVqJuv9Y.js";import"./process-list-CYa6MbFC.js";import"./radio-button-DreS4VKm.js";import"./range-slider-BWH65D0M.js";import"./search-MvPWk77I.js";import"./select-BUVP5uNL.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Bo3xCnGW.js";import"./step-indicator-DzN4kYk1.js";import"./summary-box-DYGCR5mO.js";import"./tag-Ce7eHv1o.js";import{T as p}from"./text-area-BjhcLw6Y.js";import"./time-picker-DG6m1DpN.js";import"./tooltip-DHiDK0fF.js";import"./index-BNTQFOaE.js";import"./iframe-9tQC-4Xm.js";import"./index-CasUqPWH.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAbhvx1n.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
