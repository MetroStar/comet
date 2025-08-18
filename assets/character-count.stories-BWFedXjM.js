import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CX0XI8OP.js";import"./banner-DEXFXyXy.js";import"./button-DsOsdPlp.js";import"./button-group-BUxuG7xu.js";import"./checkbox-YRmx3rM5.js";import"./combo-box-CYgYLg0C.js";import"./date-picker-Cp0WWYQM.js";import"./error-messages-_lA7co94.js";import"./index-DL-q9Ufj.js";import"./form-group-BHvzNZeJ.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8k-UgI4.js";import"./label-0qqEdO1f.js";import"./modal-6QWAZApx.js";import"./process-list--7pp4Vnj.js";import"./radio-button-DJCCmwa0.js";import"./range-slider-CH4q_Tvm.js";import"./search-C3wHYxvz.js";import"./select-Cn70ITUD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BmH2JWD9.js";import"./step-indicator-BLP1zC9c.js";import"./summary-box-CMVNsm3a.js";import"./tag-DwdL9XNw.js";import{T as p}from"./text-area-8qpd2dPf.js";import"./time-picker-aLWkqh-Q.js";import"./tooltip-CMK8D5V9.js";import"./index-CkzdCw0y.js";import"./iframe-CdEyIkyY.js";import"./index-DnqtVlz1.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dy2RdQ8t.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
