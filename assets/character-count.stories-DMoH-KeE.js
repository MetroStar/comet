import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-BClhlT0z.js";import"./banner-CzkaGaVP.js";import"./button-DU2pOzuh.js";import"./button-group-CnynISiL.js";import"./checkbox-Cb6FxYwq.js";import"./combo-box-qh64P4iq.js";import"./date-picker-DHhq89_1.js";import"./error-messages-_lA7co94.js";import"./index-BlvOJwI9.js";import"./form-group-B80SdfXj.js";import"./helper-text-BRA2CuHl.js";import"./icon-CF9rid26.js";import"./label-0qqEdO1f.js";import"./modal-BguBK0_s.js";import"./process-list-BuGmR-8F.js";import"./radio-button-ON0RGceu.js";import"./range-slider-BoVWNUy0.js";import"./search-ClnHZvP6.js";import"./select-C4g0Dhmi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEXzN5iU.js";import"./step-indicator-h0VWgyZg.js";import"./summary-box-Hwd2puDo.js";import"./tag-BMw6NXFS.js";import{T as p}from"./text-area-Ltx5Xw97.js";import"./time-picker-4nej8pOD.js";import"./tooltip-B9Y8zZao.js";import"./index-0XD21YYW.js";import"./iframe-Ca0L-wZx.js";import"./index-NMaxshBa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D0mqKmh-.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
