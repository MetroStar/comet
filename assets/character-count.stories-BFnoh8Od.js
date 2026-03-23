import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-Jdby6yUG.js";import"./banner-BWHtyq-w.js";import"./button-3Al1XHOg.js";import"./button-group-9moZSAQG.js";import"./checkbox-CpUjSfgW.js";import"./combo-box-Dl-TrNTV.js";import"./date-picker-DIlX87w0.js";import"./error-messages-DQwxQ3pR.js";import"./index-4FKgb1wG.js";import"./form-group-C4y5ugcY.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DuR14fzr.js";import"./label-Z58zP1tT.js";import"./modal-CMUN3kDG.js";import"./process-list-gG9x1FSY.js";import"./radio-button-DnNdSXMm.js";import"./range-slider-CqSUwkjq.js";import"./search-CN34ZjJJ.js";import"./select-BmtDcZqa.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-6l3hPaFo.js";import"./step-indicator-DfMXXaOj.js";import"./summary-box-Bclcf1zh.js";import"./tag-CehJoHB5.js";import{T as p}from"./text-area-C0-8g27p.js";import"./time-picker-DkLiDCm7.js";import"./tooltip-DdWABcOa.js";import"./index-BaVG5ZPW.js";import"./iframe-Bb0DG7Iv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4l6e6Qu.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJAnig9h.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
