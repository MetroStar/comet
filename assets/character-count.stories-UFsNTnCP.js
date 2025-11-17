import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BR6WrhPV.js";import"./banner-CoXnAOGv.js";import"./button-Ba5SFYSH.js";import"./button-group-DrJ3dmmp.js";import"./checkbox-DRvVfAOf.js";import"./combo-box-JZtkTgBa.js";import"./date-picker-Dy-u9WJo.js";import"./error-messages-DQwxQ3pR.js";import"./index-_5yDmTtM.js";import"./form-group-DrxAuQof.js";import"./helper-text-C5i0f8Ge.js";import"./icon-R3TMqi9y.js";import"./label-Z58zP1tT.js";import"./modal-Db2SLur8.js";import"./process-list-9EdF__SY.js";import"./radio-button-B6VJ3ZlF.js";import"./range-slider-By0228wn.js";import"./search-DS8MfivK.js";import"./select-nQ058r9b.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Camo7QDz.js";import"./step-indicator-YT2NG5oe.js";import"./summary-box-DmkJ-lJj.js";import"./tag-2Y2MkQKt.js";import{T as p}from"./text-area-abDgHBzS.js";import"./time-picker-B5HPf1ng.js";import"./tooltip-DzHss-R_.js";import"./index-C60PpZKO.js";import"./iframe-CWUXl1bG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-9RNkUL.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EOzoFPlY.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
