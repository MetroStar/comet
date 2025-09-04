import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-4gBBYbnv.js";import"./banner-di6yW5Uz.js";import"./button-DDnj8xdT.js";import"./button-group-DooJ8EU4.js";import"./checkbox-DIKveoyj.js";import"./combo-box-D9fuo9i4.js";import"./date-picker-DHGVSwyc.js";import"./error-messages-_lA7co94.js";import"./index-V3eZre_f.js";import"./form-group-tvOP8ASP.js";import"./helper-text-BRA2CuHl.js";import"./icon-JLyd65NR.js";import"./label-0qqEdO1f.js";import"./modal-BwfPqh08.js";import"./process-list-D_yB08p6.js";import"./radio-button-Prxo-dtn.js";import"./range-slider-QOEJ62F2.js";import"./search-CcFFi-oo.js";import"./select-DR1IqUls.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BRpmzYGQ.js";import"./step-indicator-C-Qfgoa0.js";import"./summary-box-D8962nN0.js";import"./tag-C9O5PIcN.js";import{T as p}from"./text-area-8F6leHVG.js";import"./time-picker-BnnSU-Lp.js";import"./tooltip-C6Xayu_D.js";import"./index-BZNHB8GM.js";import"./iframe-BecLNQGy.js";import"./index-BFAkROmT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-hvX-s2ru.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
