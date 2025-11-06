import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-BWv9IJKq.js";import"./banner-DsPBt72z.js";import"./button-lJR5aED-.js";import"./button-group-Bxj5iVgy.js";import"./checkbox-In1TWY_E.js";import"./combo-box-DAWbcX4M.js";import"./date-picker-BkdMrxwm.js";import"./error-messages-_lA7co94.js";import"./index-Br_kK07F.js";import"./form-group-B9NArTvQ.js";import"./helper-text-BRA2CuHl.js";import"./icon-C9u35B_b.js";import"./label-0qqEdO1f.js";import"./modal-Cd9YNYuZ.js";import"./process-list-CD-g_9tc.js";import"./radio-button-DZ8kb-LA.js";import"./range-slider--TFS-Shg.js";import"./search-Cl8_qv-_.js";import"./select-BfCAPZTm.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DkgoCb6C.js";import"./step-indicator-RQudhJU8.js";import"./summary-box-CiJRHcX-.js";import"./tag-DWDu_7xe.js";import{T as p}from"./text-area-DsNcsWGK.js";import"./time-picker-BQQSmGq0.js";import"./tooltip-CpcUUJ4i.js";import"./index-CdLIUrq1.js";import"./iframe-DaQn1dS-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUGDvriB.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-86W0yJob.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
