import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-B6OBZokY.js";import"./banner-Cp6CDsju.js";import"./button-CvBQ6Viu.js";import"./button-group-DT0MZYrc.js";import"./checkbox-BBNcEMVN.js";import"./combo-box-CPB8WVB1.js";import"./date-picker-CrR9zuUM.js";import"./error-messages-DQwxQ3pR.js";import"./index-S1EC9aY5.js";import"./form-group-C7OpfHVI.js";import"./helper-text-C5i0f8Ge.js";import"./icon-n5MNutTh.js";import"./label-Z58zP1tT.js";import"./modal-qxex8s-5.js";import"./process-list-_br4BDud.js";import"./radio-button-Bl1ELBoa.js";import"./range-slider-VCYG_aBg.js";import"./search-D3zv8uYS.js";import"./select-3ZPcC7oD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-MPwN2Qjg.js";import"./step-indicator-C-aqlDqc.js";import"./summary-box-D-cFSNJC.js";import"./tag-ChjVmO5T.js";import{T as p}from"./text-area-DXK22P_c.js";import"./time-picker-BqCyy_JL.js";import"./tooltip-obxolWCE.js";import"./index-SCBz9OJi.js";import"./iframe-DPE7MYZp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQggcgWB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B0FZfZup.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
