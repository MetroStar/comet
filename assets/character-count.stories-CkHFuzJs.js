import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-DIHhYBqi.js";import"./banner-BYkWT2yo.js";import"./button-BM9ySSKU.js";import"./button-group-DU9juRoB.js";import"./checkbox-dNYLELqw.js";import"./combo-box-CHVKASnX.js";import"./date-picker-uce4V5Q-.js";import"./error-messages-_lA7co94.js";import"./index-0g5umDOB.js";import"./form-group-4Q-7eSNv.js";import"./helper-text-BRA2CuHl.js";import"./icon-CtIVt_oZ.js";import"./label-0qqEdO1f.js";import"./modal-DrcG8wOg.js";import"./process-list-EXQTzVQ3.js";import"./radio-button-BVtP_EQo.js";import"./range-slider-CTiTwWqV.js";import"./search-BwhliTvO.js";import"./select-DYcwYXed.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-WbV2iWNK.js";import"./step-indicator-D5cV-W6H.js";import"./summary-box-Bg6bY0XI.js";import"./tag-BPJ1eWEF.js";import{T as p}from"./text-area-Dy8zqNTA.js";import"./time-picker-DKBMRE3N.js";import"./tooltip-R4OwE2Lf.js";import"./index-Bd3YalL3.js";import"./iframe-BXvGn3Ww.js";import"./index-hWEVF2Mq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DPJweXc7.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
