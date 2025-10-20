import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CMDmZj7c.js";import"./banner-BAz2G--5.js";import"./button-B9OaNNhT.js";import"./button-group-DlaVFbxh.js";import"./checkbox-C28N4a1k.js";import"./combo-box-BvakVT0f.js";import"./date-picker-UsI544BE.js";import"./error-messages-_lA7co94.js";import"./index-Bkp4uBDp.js";import"./form-group-Bpk2fpaH.js";import"./helper-text-BRA2CuHl.js";import"./icon-cxkbKgKE.js";import"./label-0qqEdO1f.js";import"./modal-BQkULiVL.js";import"./process-list-Bss4hcvS.js";import"./radio-button-CEz13IeH.js";import"./range-slider-BpGVvSsE.js";import"./search-Cin5Af7e.js";import"./select-BlI-nL0Q.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-LVKe454Y.js";import"./step-indicator-C4JBCoYw.js";import"./summary-box-DnFH13SG.js";import"./tag-CneVrYpY.js";import{T as p}from"./text-area-D_fB21ck.js";import"./time-picker-CSKB0_Nb.js";import"./tooltip-Y544ZiXZ.js";import"./index-o8AzxdkW.js";import"./iframe-CeHEORJQ.js";import"./index-Da7q7RYZ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-4Bao6GuI.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
