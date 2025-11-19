import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-Bse5DExo.js";import"./banner-BwO0HiA4.js";import"./button-DiHoCjUb.js";import"./button-group-CsEIu6gv.js";import"./checkbox-DC3XQgFH.js";import"./combo-box-CrVnplkd.js";import"./date-picker-ao6BA4Jq.js";import"./error-messages-DQwxQ3pR.js";import"./index-BfIDrPCA.js";import"./form-group-BYOZKLJh.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DPOheGDS.js";import"./label-Z58zP1tT.js";import"./modal-D-P-giTm.js";import"./process-list-BYk2qEP5.js";import"./radio-button-D6dovua3.js";import"./range-slider-BM6BzcML.js";import"./search-O5uHTu-n.js";import"./select-BUCNjJ4o.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DZJPNjAO.js";import"./step-indicator-7qKQZOBY.js";import"./summary-box-D5bHgkv8.js";import"./tag-DXQHCdsJ.js";import{T as p}from"./text-area-DqvxoD8F.js";import"./time-picker-DJ8eVvNZ.js";import"./tooltip-CkP7cUnO.js";import"./index-C0ruH5vH.js";import"./iframe-Cu46YZU-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt3gd5Dn.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dj0TSj9e.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
