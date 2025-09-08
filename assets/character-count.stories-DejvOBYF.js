import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-etSpiK93.js";import"./banner-CWfSVMcQ.js";import"./button-B7pFt37z.js";import"./button-group-BRc77wHK.js";import"./checkbox-CUU9R15H.js";import"./combo-box-BPfnr8Rw.js";import"./date-picker-BMJNX18e.js";import"./error-messages-_lA7co94.js";import"./index-DSCzkK-X.js";import"./form-group-DkPWxlhw.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTBvyvH7.js";import"./label-0qqEdO1f.js";import"./modal-CKRHOoEv.js";import"./process-list-BZIxW3s3.js";import"./radio-button-Buv9cRjs.js";import"./range-slider-CxFZvE3_.js";import"./search-cT6P9tE4.js";import"./select-BNqncbBi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ovEs71ou.js";import"./step-indicator-CW9DACn5.js";import"./summary-box-DHtf9G_9.js";import"./tag-d3bWREuo.js";import{T as p}from"./text-area-CYy6almf.js";import"./time-picker-CEE4fWkk.js";import"./tooltip-DzncSK4y.js";import"./index-BAh54tqx.js";import"./iframe-3nCC7gWt.js";import"./index-C-EJdkFK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-l_I2nizS.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
