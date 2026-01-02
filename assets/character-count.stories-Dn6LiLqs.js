import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-_ySZ1kIM.js";import"./banner-DDXVgGyN.js";import"./button-BTS2x0Pt.js";import"./button-group-_vnsl2F_.js";import"./checkbox-DJRaGhmt.js";import"./combo-box-70sdfL1_.js";import"./date-picker-eKStoA0t.js";import"./error-messages-DQwxQ3pR.js";import"./index-80aeHvEm.js";import"./form-group-CWgS9-1Q.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BFPF_o-y.js";import"./label-Z58zP1tT.js";import"./modal-BNXAw0Vh.js";import"./process-list-BbE7PYOl.js";import"./radio-button-DTxW2Np9.js";import"./range-slider-CtaOGn7K.js";import"./search-J78xjvHz.js";import"./select-C7SsP2-G.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-s9UKtouU.js";import"./step-indicator-DdT1SOvY.js";import"./summary-box-D49JJTOM.js";import"./tag-BwLKNIcJ.js";import{T as p}from"./text-area-BH5aI-nX.js";import"./time-picker-BV7NhZs-.js";import"./tooltip-Dw1tkfBR.js";import"./index-DfNGQrnd.js";import"./iframe-Dos1JflN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JGxDgrpx.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BqRRjYiV.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
