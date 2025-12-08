import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DSl4auMC.js";import"./banner-CEZKUkbF.js";import"./button-B7gNPYIL.js";import"./button-group-Brorikwu.js";import"./checkbox-eWG9SJdV.js";import"./combo-box-BsFocY2f.js";import"./date-picker-DZDMadHV.js";import"./error-messages-DQwxQ3pR.js";import"./index-CYtU26vE.js";import"./form-group-DXXdEMrs.js";import"./helper-text-C5i0f8Ge.js";import"./icon-uymm9zyE.js";import"./label-Z58zP1tT.js";import"./modal-D8oOiZoK.js";import"./process-list-CUm5Q4da.js";import"./radio-button-ClH9r-YV.js";import"./range-slider-DXbD-WkO.js";import"./search-CVMveQck.js";import"./select-Dm9gk4f-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DNWbVdiF.js";import"./step-indicator-BVn4ZNzg.js";import"./summary-box-D7Fun5SH.js";import"./tag-BNT1hXJ0.js";import{T as p}from"./text-area-DLgrCPMA.js";import"./time-picker-BBv860sW.js";import"./tooltip-Bg5a6Fm-.js";import"./index-cRcqcJEf.js";import"./iframe-CUCs5BC9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLD1Bu8G.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C2r2cwpe.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
