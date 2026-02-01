import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-B2o3L5ZV.js";import"./banner-T9UCSkUS.js";import"./button-CGO10ZW3.js";import"./button-group-CLEDvRIf.js";import"./checkbox-DjsJa_hv.js";import"./combo-box-BafjISi3.js";import"./date-picker-CBzsr4eS.js";import"./error-messages-DQwxQ3pR.js";import"./index-D15vhobV.js";import"./form-group-BobNIxMO.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BhI-VD6M.js";import"./label-Z58zP1tT.js";import"./modal-Nt6vEbzp.js";import"./process-list-D4WiINi_.js";import"./radio-button-CaaqLWeq.js";import"./range-slider-Biv5tL1q.js";import"./search-i0MjTWlB.js";import"./select-DqWfVKLa.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-RxrWG83b.js";import"./step-indicator-B5xlPv5_.js";import"./summary-box-D6p7Ly2b.js";import"./tag-D_TXvely.js";import{T as p}from"./text-area-sCCd6OhD.js";import"./time-picker-NspqPdtx.js";import"./tooltip-DZqvoc_b.js";import"./index-CfGYGdnL.js";import"./iframe-D6g7oyBT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSW12edA.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CygnMxBv.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
