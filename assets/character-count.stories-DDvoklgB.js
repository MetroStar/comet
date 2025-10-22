import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-EDJB2sTo.js";import"./banner-BOpU37qp.js";import"./button-DBKb0ewM.js";import"./button-group-Bh92E-bS.js";import"./checkbox-Dw6UHJ51.js";import"./combo-box-CSSj876a.js";import"./date-picker-CrF8QLeb.js";import"./error-messages-_lA7co94.js";import"./index-Dz3KGBJ1.js";import"./form-group-D61Ut1VC.js";import"./helper-text-BRA2CuHl.js";import"./icon-C2GMX_Yd.js";import"./label-0qqEdO1f.js";import"./modal-SzqUbwHE.js";import"./process-list-DWkHGGyu.js";import"./radio-button-CJrfb0RL.js";import"./range-slider-Dclr-Ayn.js";import"./search-D8XGy_cg.js";import"./select-Dp05dyOy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DrY8ZEeD.js";import"./step-indicator-QljTgDVY.js";import"./summary-box-ubPFwvIt.js";import"./tag-CTmDgqa8.js";import{T as p}from"./text-area-BF6Qq-LB.js";import"./time-picker-D2RHFb7y.js";import"./tooltip-CkbpW6i9.js";import"./index-CR8NEJay.js";import"./iframe-vQD5sTXz.js";import"./index-fgMZaG23.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CWfwrV3c.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
