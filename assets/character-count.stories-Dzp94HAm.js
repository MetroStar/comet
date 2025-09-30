import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-B8FMHg_J.js";import"./banner-BHD4a-YF.js";import"./button-CZnSuiSG.js";import"./button-group-D_3I6eIv.js";import"./checkbox-BlfnrhUV.js";import"./combo-box-CH8ob2Tb.js";import"./date-picker-BRoY0Im-.js";import"./error-messages-_lA7co94.js";import"./index-CJ4Rmd2u.js";import"./form-group-Db87imG5.js";import"./helper-text-BRA2CuHl.js";import"./icon-CjZN-pZP.js";import"./label-0qqEdO1f.js";import"./modal-nc01-4DT.js";import"./process-list-BShwkqsW.js";import"./radio-button-BZ8kNZ3P.js";import"./range-slider-C0Al_MLK.js";import"./search-BuJgjO8M.js";import"./select-PK_HMEM4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B7eMpm6t.js";import"./step-indicator-BTtpkGV8.js";import"./summary-box-CHjfH4Zj.js";import"./tag-Dr4ongqQ.js";import{T as p}from"./text-area-CoOy6seG.js";import"./time-picker-CxHuHVd3.js";import"./tooltip-DF1b6R82.js";import"./index-QkTpvnaW.js";import"./iframe-Bzkq98Jv.js";import"./index-BJjidRwi.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CevKQl2c.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
