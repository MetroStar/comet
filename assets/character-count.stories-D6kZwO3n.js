import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-BWWVeaG9.js";import"./banner-BoULXacJ.js";import"./button-CQKw_ArU.js";import"./button-group-ewBVF2L4.js";import"./checkbox-BjvifG72.js";import"./combo-box-aN6JnhWz.js";import"./date-picker-C67rITtz.js";import"./error-messages-_lA7co94.js";import"./index-C2_xkeJc.js";import"./form-group-BkBVLNH5.js";import"./helper-text-BRA2CuHl.js";import"./icon-R8YJ2BOW.js";import"./label-0qqEdO1f.js";import"./modal-Bv-vzx9w.js";import"./process-list-BcXx8fgu.js";import"./radio-button-CTioDZzo.js";import"./range-slider-6N7k_X-x.js";import"./search-NPEc2I-5.js";import"./select-BXK56c5V.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DLvb7ydC.js";import"./step-indicator-BJVp4xKi.js";import"./summary-box-hknuY5Lx.js";import"./tag-D_domJr-.js";import{T as p}from"./text-area-BLWxRhg4.js";import"./time-picker-CBvJt52P.js";import"./tooltip-BhXbaBUJ.js";import"./index-Bqv6EQsX.js";import"./iframe-BgblZ3Ci.js";import"./index-BJS_Wybf.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-zF2YK1WT.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
