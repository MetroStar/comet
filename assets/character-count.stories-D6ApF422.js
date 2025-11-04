import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-By7JvPdL.js";import"./banner-CrFijEhj.js";import"./button-EuharW3P.js";import"./button-group-Bghajen5.js";import"./checkbox-DD_ifgi5.js";import"./combo-box-BqqLAMBj.js";import"./date-picker-X2Em5qj8.js";import"./error-messages-_lA7co94.js";import"./index-DksUg_Pu.js";import"./form-group-7iDqG7wI.js";import"./helper-text-BRA2CuHl.js";import"./icon-CzosSpGO.js";import"./label-0qqEdO1f.js";import"./modal-CxKo2Lel.js";import"./process-list-CK3CD4P9.js";import"./radio-button-BuriEYG-.js";import"./range-slider-DtOWQc-J.js";import"./search-DGAjiiYe.js";import"./select-6Fbn24rS.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-uJ66I4dg.js";import"./step-indicator-CeJIv4ob.js";import"./summary-box-DN7XFtmt.js";import"./tag-BRPKOBzf.js";import{T as p}from"./text-area-ChEJ_jFf.js";import"./time-picker-H4II5i2g.js";import"./tooltip-jTh08c-G.js";import"./index-KAwCHCmc.js";import"./iframe-Df-qv7MF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzHzm4Sz.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJq8K2Sb.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
