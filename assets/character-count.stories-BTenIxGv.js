import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-CX_3fU8G.js";import"./banner-BX1AEE79.js";import"./button-BRZIQbIO.js";import"./button-group-DhizJLA4.js";import"./checkbox-DIx_kXh1.js";import"./combo-box-DC_XAVf9.js";import"./date-picker-BgdkMevD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BEJPuihF.js";import"./form-group-1FQ6ZL-b.js";import"./helper-text-C5i0f8Ge.js";import"./icon-IlFqEd48.js";import"./label-Z58zP1tT.js";import"./modal-aFbxMgIk.js";import"./process-list-CQ1coxJ7.js";import"./radio-button-GUxkA6VJ.js";import"./range-slider-BXYo9qBg.js";import"./search-BDj3JnRH.js";import"./select-B3omePZx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B_dSrAsx.js";import"./step-indicator-BD3Ashid.js";import"./summary-box-Dcai1aDP.js";import"./tag-CAOLYjFJ.js";import{T as p}from"./text-area-jjmMtOfo.js";import"./time-picker-BooG6I3G.js";import"./tooltip-DqvkubAg.js";import"./index-Dt1OuEIl.js";import"./iframe-DrYRFDkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BktZxXXP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DJeDAx_i.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
