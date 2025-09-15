import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CJqRdRnA.js";import"./banner-CDze5A-o.js";import"./button-Cfsih1JM.js";import"./button-group-C7oR13Zx.js";import"./checkbox-DdvE8Qv0.js";import"./combo-box-MLHL-BJJ.js";import"./date-picker-CzeDYvZ6.js";import"./error-messages-_lA7co94.js";import"./index-Cd6JFthD.js";import"./form-group-B0crHuAm.js";import"./helper-text-BRA2CuHl.js";import"./icon-_aWJ0mlv.js";import"./label-0qqEdO1f.js";import"./modal-0FNrf6C-.js";import"./process-list-BXqeNRaz.js";import"./radio-button-Nt_CKpgW.js";import"./range-slider-C7Ny-QWb.js";import"./search-KLEJmmQN.js";import"./select-CAlDhwkC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-C3x03OFs.js";import"./step-indicator-CDd_u7Xd.js";import"./summary-box-Bu6NGAGG.js";import"./tag-LtQ0fvOs.js";import{T as p}from"./text-area-DnBgkfMa.js";import"./time-picker-ByDgOAtB.js";import"./tooltip-CA57b6l2.js";import"./index-Sl1xyaxe.js";import"./iframe-B7oP2X8t.js";import"./index-BmmP-Ded.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EhFKVBHe.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
