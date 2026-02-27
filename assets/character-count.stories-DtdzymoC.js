import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BDQM1Mh-.js";import"./banner-LSfpRy_K.js";import"./button-DJ5nAEG1.js";import"./button-group-Dcen566A.js";import"./checkbox-D0U7RwWN.js";import"./combo-box-BfgX98SM.js";import"./date-picker-Du1p9VUj.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW9Wuonm.js";import"./form-group-HfvnDvlG.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZo7BvZV.js";import"./label-Z58zP1tT.js";import"./modal-DYIQgugP.js";import"./process-list-ga9XxOBq.js";import"./radio-button-BGGtbapx.js";import"./range-slider-BFrngnN-.js";import"./search-on2kCCM2.js";import"./select-hFENQz29.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-H-QvbnQk.js";import"./step-indicator-HXg70ZdV.js";import"./summary-box-Dg97T2F4.js";import"./tag-z2XKQvMC.js";import{T as p}from"./text-area-Bmocz1Tg.js";import"./time-picker-jKhXTcgJ.js";import"./tooltip-BvAtgz7H.js";import"./index-BwwyfavA.js";import"./iframe-BHrdwcbC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DW3xBdI_.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BBlPgDhR.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
