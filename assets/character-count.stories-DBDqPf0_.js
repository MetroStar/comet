import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-BkSI5mbc.js";import"./banner-CTZ2PdPw.js";import"./button-CsYmh0vm.js";import"./button-group-BPJ6fggK.js";import"./checkbox-DhCPixBd.js";import"./combo-box-BXgqhUEs.js";import"./date-picker-C9E8UeDk.js";import"./error-messages-_lA7co94.js";import"./index-CI7UOko6.js";import"./form-group-CCYs-ltk.js";import"./helper-text-BRA2CuHl.js";import"./icon-GNqBduXf.js";import"./label-0qqEdO1f.js";import"./modal-dzF0TLRm.js";import"./process-list-Dq101AFb.js";import"./radio-button-Do9Rh2zd.js";import"./range-slider-B5r5rPxC.js";import"./search-DhE-ggo7.js";import"./select-1e1qJ9Ro.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-W4oZm-Rd.js";import"./step-indicator-DSv3EHu1.js";import"./summary-box-BS8sVZlh.js";import"./tag-Cq7MI9LS.js";import{T as p}from"./text-area-DviweLtB.js";import"./time-picker-SOqVqpwV.js";import"./tooltip-CWN-T5j-.js";import"./index-ByTD_-5Y.js";import"./iframe-CCHYt90f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7-mVSiM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DNXJughs.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
