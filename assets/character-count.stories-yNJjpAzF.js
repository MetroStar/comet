import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DoweFw58.js";import"./banner-DCAwis5j.js";import"./button-7RovM-Qw.js";import"./button-group-kghJkCVA.js";import"./checkbox-CFTS5l4Y.js";import"./combo-box-CE7KR71Q.js";import"./date-picker-CcHVpChK.js";import"./error-messages-DQwxQ3pR.js";import"./index-C9NoWFmt.js";import"./form-group-Dbsx7Gzo.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cygb0suf.js";import"./label-Z58zP1tT.js";import"./modal-BLZk1Mde.js";import"./process-list-Bo_blzCt.js";import"./radio-button-BxTZPhjK.js";import"./range-slider-8FINxcyX.js";import"./search-BKhtnkhS.js";import"./select-BZa46iHj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-fOh-sxzm.js";import"./step-indicator-DhVcUGb2.js";import"./summary-box-Jxgcj2fM.js";import"./tag-BiIxnUsz.js";import{T as p}from"./text-area-B1NVmLHg.js";import"./time-picker-j2c1grgt.js";import"./tooltip-BBY_kcQ_.js";import"./index-BUrzLQmc.js";import"./iframe-BUmp4v9P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj6Y9BYB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYQJJsbO.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
