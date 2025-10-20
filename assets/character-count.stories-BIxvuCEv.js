import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-BnXqzq9O.js";import"./banner-CIm70-HC.js";import"./button-Bgbky9UI.js";import"./button-group-CnvT5Qfh.js";import"./checkbox-173Vdv0m.js";import"./combo-box-BdYMw-6J.js";import"./date-picker-BQBfZpRp.js";import"./error-messages-_lA7co94.js";import"./index-jJyYyykc.js";import"./form-group-ChVWy-76.js";import"./helper-text-BRA2CuHl.js";import"./icon-CnfzXKqa.js";import"./label-0qqEdO1f.js";import"./modal-0_0oVfxj.js";import"./process-list-ooW3J2zX.js";import"./radio-button-BsKcdTWI.js";import"./range-slider-BWXXwryW.js";import"./search-MSiSwyBF.js";import"./select-H1kjN1Jj.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-gQCW04zT.js";import"./step-indicator-Ihi_S23D.js";import"./summary-box-kvJhmgjB.js";import"./tag-CWv2uEhb.js";import{T as p}from"./text-area-DGTyj5BG.js";import"./time-picker-BdiIZ-Qd.js";import"./tooltip-BKo9Xnb2.js";import"./index-CXGoz_dM.js";import"./iframe-BRh0L7-v.js";import"./index-BgSr64T9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BNnnE5vI.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
