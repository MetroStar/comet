import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DMBuCYe_.js";import"./banner-DFFrh2we.js";import"./button-CebCDk22.js";import"./button-group-CP6QYoDT.js";import"./checkbox-BNnJF55M.js";import"./combo-box-C7-v9zyp.js";import"./date-picker-CAgeyYpd.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVf-osoh.js";import"./form-group-D9z_c3KR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Box8_GlQ.js";import"./label-Z58zP1tT.js";import"./modal-BIpf-zb1.js";import"./process-list-Dy1X11P1.js";import"./radio-button-DYlmKEnZ.js";import"./range-slider-BGMS1c5-.js";import"./search-Bf4lYVbJ.js";import"./select-CtAQSun1.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-qfke9_ky.js";import"./step-indicator-qlAV-NTT.js";import"./summary-box-CWhGKQyS.js";import"./tag-B8oHhohV.js";import{T as p}from"./text-area-DTRoQh8l.js";import"./time-picker-Xaqt13c1.js";import"./tooltip-C2SUIZOU.js";import"./index-CiA_ydS_.js";import"./iframe-Cu6PFQIF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sxjDgNp1.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BgeT6qmK.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
