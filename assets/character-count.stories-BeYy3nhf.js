import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-DEpAyD-X.js";import"./banner-CIEAiagf.js";import"./button-CkmPZfQ7.js";import"./button-group-BLfN6Qzi.js";import"./checkbox-CiZ0LQAf.js";import"./combo-box-CPoxHoLO.js";import"./date-picker-1x-RJkWC.js";import"./error-messages-_lA7co94.js";import"./index-DV0osu16.js";import"./form-group-CLG5AUFS.js";import"./helper-text-BRA2CuHl.js";import"./icon-BaCh6IKn.js";import"./label-0qqEdO1f.js";import"./modal-CS74MdwY.js";import"./process-list-EgDY_ZW-.js";import"./radio-button-BojC1or9.js";import"./range-slider-Crd-k5Lz.js";import"./search-BosVVfA0.js";import"./select-BK3H334u.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DqRkn5Co.js";import"./step-indicator-v3Vvymes.js";import"./summary-box-B2UM3Fmg.js";import"./tag-D2rL-ia4.js";import{T as p}from"./text-area-BkFw3Hdn.js";import"./time-picker-Btaj1Wdb.js";import"./tooltip-BnWcB7Kc.js";import"./index-BV__WvX7.js";import"./iframe-U5vUr3EP.js";import"./index-Bp6jiaQq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7-aAo-x.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
