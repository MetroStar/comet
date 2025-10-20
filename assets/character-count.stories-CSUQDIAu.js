import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-DN2zX9w5.js";import"./banner-DmybvjyX.js";import"./button-DaVVrHT6.js";import"./button-group-DL1d-oUd.js";import"./checkbox-B95JovIm.js";import"./combo-box-3yuNCmgT.js";import"./date-picker-MXHZCJx-.js";import"./error-messages-_lA7co94.js";import"./index-BSnHZeMx.js";import"./form-group-DBzbMrNY.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTn1fg3T.js";import"./label-0qqEdO1f.js";import"./modal-C9ErPmL0.js";import"./process-list-CxnI2fTS.js";import"./radio-button-BptSw1UH.js";import"./range-slider-BRs7lDMv.js";import"./search-D7OaEWwM.js";import"./select-DBPXSEr4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BrMEkozl.js";import"./step-indicator-BLqJZzSw.js";import"./summary-box-BITmi2EU.js";import"./tag-BQwTgAeY.js";import{T as p}from"./text-area-aL1qtgvL.js";import"./time-picker-PZ_jVo6d.js";import"./tooltip-DqmHi9L2.js";import"./index-CZnHAbqW.js";import"./iframe-DAkoUa8c.js";import"./index-VfhVxxkQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BmV7Pdh3.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
