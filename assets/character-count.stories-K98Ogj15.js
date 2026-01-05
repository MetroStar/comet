import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-CSaK-x_V.js";import"./banner-BxYGXyna.js";import"./button-GJ2BfbS-.js";import"./button-group-LFVyA_Fj.js";import"./checkbox-CdQ19bvs.js";import"./combo-box-CR-5V3Ia.js";import"./date-picker-DkK0_rB_.js";import"./error-messages-DQwxQ3pR.js";import"./index-oYevnVru.js";import"./form-group-ij1d4Lar.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DgbwmsD7.js";import"./label-Z58zP1tT.js";import"./modal-CgDi7N4S.js";import"./process-list-CodrIgEm.js";import"./radio-button-CX8ESqGR.js";import"./range-slider-fSM1VMq-.js";import"./search-Cojt-1JY.js";import"./select-B2E_eMP0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D6b4wbVc.js";import"./step-indicator-BF9Xj5dC.js";import"./summary-box-DopPB8AA.js";import"./tag-CaZv0Xjc.js";import{T as p}from"./text-area-BDP9Xbyw.js";import"./time-picker-Qm8rb22s.js";import"./tooltip-Zvlq8EIV.js";import"./index-q8yHh5aR.js";import"./iframe-BWsQfN69.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfnSD9B1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-o16bkFsK.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
