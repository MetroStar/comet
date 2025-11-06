import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CCNOA2Tt.js";import"./banner-TnjcYjBW.js";import"./button-DwHw6MmX.js";import"./button-group-BsGuBAvu.js";import"./checkbox-D1-xw26W.js";import"./combo-box-BW_ELrKu.js";import"./date-picker-u_PmbiS3.js";import"./error-messages-_lA7co94.js";import"./index-CK6kpZ6D.js";import"./form-group-2abxc0CZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-CA8rOCQY.js";import"./label-0qqEdO1f.js";import"./modal-COg9AbFD.js";import"./process-list-Bf0Q9txv.js";import"./radio-button-C1_K-Rqt.js";import"./range-slider-DZSXjHWc.js";import"./search-DFQDI6Z7.js";import"./select-DRe3cYfn.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B6vEvGsX.js";import"./step-indicator-hmRZqG9G.js";import"./summary-box-BdfEVXxD.js";import"./tag-6m6BCwW9.js";import{T as p}from"./text-area-vDjx9bIg.js";import"./time-picker-BK8RVqUd.js";import"./tooltip-CCefTJZZ.js";import"./index-BnOVKaQE.js";import"./iframe-06KVgpNd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BuGsqDMl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-McuMDvj6.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const X=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,X as __namedExportsOrder,V as default};
