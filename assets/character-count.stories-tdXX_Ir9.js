import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-lkz4hOMD.js";import"./banner-Ig5f_ff_.js";import"./button-ByaPeP45.js";import"./button-group-BYLDb9dK.js";import"./checkbox-Bx0i06cV.js";import"./combo-box-CYlMeI46.js";import"./date-picker-Bfyv2fVt.js";import"./error-messages-_lA7co94.js";import"./index-Bj3PxKMc.js";import"./form-group-CZMC42k8.js";import"./helper-text-BRA2CuHl.js";import"./icon-qxS9RIgY.js";import"./label-0qqEdO1f.js";import"./modal-DHbPHUzb.js";import"./process-list-CdCHmAIf.js";import"./radio-button-BCFO0GZX.js";import"./range-slider-CLdCU-10.js";import"./search-DxDEgAvO.js";import"./select-BgcnNTUP.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-6hTBLbFk.js";import"./step-indicator-DVqdwgVq.js";import"./summary-box-C1sGnI8z.js";import"./tag-BtjAR3XH.js";import{T as p}from"./text-area-CY6IMMmT.js";import"./time-picker-CDjYCY_5.js";import"./tooltip-BpJC97gU.js";import"./index-BgC3XmV1.js";import"./iframe-BDLZuKeY.js";import"./index-BC9Je7_j.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BY9Gf3eC.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
