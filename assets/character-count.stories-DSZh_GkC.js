import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-2NAaAm4f.js";import"./banner-DmWNFVX0.js";import"./button-DMGkmuRe.js";import"./button-group-BpVsvt9f.js";import"./checkbox-QXWsWq5b.js";import"./combo-box-D7opi152.js";import"./date-picker-osE87iLd.js";import"./error-messages-_lA7co94.js";import"./index-CuYmxFJ7.js";import"./form-group-DW4A1vPS.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bne4nQ7L.js";import"./label-0qqEdO1f.js";import"./modal-v_LYecBD.js";import"./process-list-DPSQSkDw.js";import"./radio-button-hq8NkZqJ.js";import"./range-slider-C33b7wPA.js";import"./search-CC-BpXF1.js";import"./select-XWhpf6Eu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ArWdNQH1.js";import"./step-indicator-BvTe9s74.js";import"./summary-box-D0YY31pd.js";import"./tag-CkMOhSU3.js";import{T as p}from"./text-area-C1M1QosD.js";import"./time-picker-DufTLboP.js";import"./tooltip-Cm8FGCCc.js";import"./index-D_G_8yR1.js";import"./iframe-feKrdQjw.js";import"./index-Bq7ANQAG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BSKCmYzr.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
