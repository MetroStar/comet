import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-BYtm8aWr.js";import"./banner-BOsb6-5M.js";import"./button-kvp-3bRO.js";import"./button-group-Bz8x7RTE.js";import"./checkbox-U1-aMXP1.js";import"./combo-box-C41SXqKd.js";import"./date-picker-CZxAjDjb.js";import"./error-messages-_lA7co94.js";import"./index-B-rCaw0b.js";import"./form-group-C7WDyZYd.js";import"./helper-text-BRA2CuHl.js";import"./icon-CepZwO60.js";import"./label-0qqEdO1f.js";import"./modal-AEuqzuY7.js";import"./process-list-SwSDrK6Y.js";import"./radio-button-BTfMv-fS.js";import"./range-slider-CP1tnxY0.js";import"./search-7C4hTjQi.js";import"./select-DwRGmsQU.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BIGnOVGL.js";import"./step-indicator-C7aYC1tN.js";import"./summary-box-CO5CN3ne.js";import"./tag-CjzNHQU6.js";import{T as p}from"./text-area-nycWrcG_.js";import"./time-picker-BXCuHpEP.js";import"./tooltip-2q8JeVRJ.js";import"./index-CKsPUyOS.js";import"./iframe-Bh4Kgv9z.js";import"./index-Bj0UJ-Ok.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-GgdPq9z-.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const V=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,V as __namedExportsOrder,Q as default};
