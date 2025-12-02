import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BVE92j7Y.js";import"./banner-DzZkBSl7.js";import"./button-CE7abiYA.js";import"./button-group-BrbB8tWM.js";import"./checkbox-BO3qrbWe.js";import"./combo-box-DSpel1I0.js";import"./date-picker-DnfiAagl.js";import"./error-messages-DQwxQ3pR.js";import"./index-DFLXBMl_.js";import"./form-group-BG3QBWOY.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BNRbLw1d.js";import"./label-Z58zP1tT.js";import"./modal-CTkWVRbb.js";import"./process-list-nPCUeE35.js";import"./radio-button-CfNv50JC.js";import"./range-slider-Dv7KAwgE.js";import"./search-BxPVF8-1.js";import"./select-ClGZrASO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DSCRVd9o.js";import"./step-indicator-OiSvWuYN.js";import"./summary-box-DfkEA6A5.js";import"./tag-gzpwfcFc.js";import{T as p}from"./text-area-GvWAvMOP.js";import"./time-picker-CNu7S1ey.js";import"./tooltip-wvfn-vUQ.js";import"./index-Ce1QA_hM.js";import"./iframe-B0hIjtUu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiDsKGxm.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAMhbk1n.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
