import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-51YYwGLj.js";import"./banner-Bv_kOqML.js";import"./button-DWw3FYRE.js";import"./button-group-MlieLY4u.js";import"./checkbox-GzGDd-Ma.js";import"./combo-box-20deBagx.js";import"./date-picker-CrM8O4Ke.js";import"./error-messages-DQwxQ3pR.js";import"./index-DthDhu_P.js";import"./form-group-DmuX5GHA.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CckomvKd.js";import"./label-Z58zP1tT.js";import"./modal-Z3r9IjSG.js";import"./process-list-C5K8mXPF.js";import"./radio-button-CITFhXUS.js";import"./range-slider-VxwCY7vw.js";import"./search-CnvNPNSV.js";import"./select-BX7BE1Za.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DvKs5coS.js";import"./step-indicator-VTuD0rEC.js";import"./summary-box-qu0Fij9e.js";import"./tag-DcvZtGBJ.js";import{T as p}from"./text-area-Co4QZweV.js";import"./time-picker-DFYXdFz0.js";import"./tooltip-B9DpSj4U.js";import"./index-2qk3iZ2l.js";import"./iframe-OV6txbM2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6gVjvQv.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D_8CrR66.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
