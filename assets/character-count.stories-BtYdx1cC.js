import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-Cq069oLF.js";import"./banner-DMVz3e1o.js";import"./button-nB4XvN_t.js";import"./button-group-amVFX9Mw.js";import"./checkbox-BMD3BsjL.js";import"./combo-box-D-sS-4M1.js";import"./date-picker-BUAVuSMI.js";import"./error-messages-_lA7co94.js";import"./index-BOCy3pWu.js";import"./form-group-BDbcoRKO.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bualwomm.js";import"./label-0qqEdO1f.js";import"./modal-C3INcVR_.js";import"./process-list-DTHC9t3-.js";import"./radio-button-Bf8IedV0.js";import"./range-slider-k8KNCxBU.js";import"./search-DufGuPvN.js";import"./select-B3bCYLzV.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-D7ynWOIW.js";import"./step-indicator-CncyS3oC.js";import"./summary-box-BeKVa36t.js";import"./tag-UEZmNv5X.js";import{T as p}from"./text-area-B42-Clzm.js";import"./time-picker-BlirOEuF.js";import"./tooltip-47OA24e-.js";import"./index-CPNdnnmO.js";import"./iframe-C7-W_WM8.js";import"./index-BcIHhRzX.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-rh0G5RG1.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
