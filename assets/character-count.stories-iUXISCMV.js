import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-EA1y5ut-.js";import"./banner-CAGrKBsD.js";import"./button-DSB6x01T.js";import"./button-group-DoUEIhI2.js";import"./checkbox-D92JDoOs.js";import"./combo-box-kv4Zj3ip.js";import"./date-picker-DeOeusIq.js";import"./error-messages-_lA7co94.js";import"./index--PxvN4ag.js";import"./form-group-CNy8DDjE.js";import"./helper-text-BRA2CuHl.js";import"./icon-CoTVHJHi.js";import"./label-0qqEdO1f.js";import"./modal-BKK3aVOm.js";import"./process-list-B2W3GOc_.js";import"./radio-button-CRka0rgF.js";import"./range-slider-DEZb4C9L.js";import"./search-BMOfAqqA.js";import"./select-D3GcbaQv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEaHIX6K.js";import"./step-indicator-KzAYTCs1.js";import"./summary-box-sEgleKYK.js";import"./tag-BRlHQhP2.js";import{T as p}from"./text-area-Dq7PS0lJ.js";import"./time-picker-qN-3jLPm.js";import"./tooltip-C6MBNeTd.js";import"./index-BrLkV3m_.js";import"./iframe-C46Q6aS9.js";import"./index-CqwsvFH3.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BlqFUN-c.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
