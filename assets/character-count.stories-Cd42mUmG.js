import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DBM-rGfp.js";import"./banner-DIDB5AZZ.js";import"./button-CuJ08vmO.js";import"./button-group-D-MjqxLe.js";import"./checkbox-BxmFBsme.js";import"./combo-box-DUHBtXaj.js";import"./date-picker-BCezd6Bu.js";import"./error-messages-DQwxQ3pR.js";import"./index-aT39rhBA.js";import"./form-group-CvVwrbvR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CB1t2izj.js";import"./label-Z58zP1tT.js";import"./modal-D_ak00hh.js";import"./process-list-CjLrlXdK.js";import"./radio-button-Dk1l3M4e.js";import"./range-slider-ud6TP_Wq.js";import"./search-Bo9VOzvv.js";import"./select-YaEncsiE.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-C1_MfARb.js";import"./step-indicator-BLKVxSQA.js";import"./summary-box-fglBdzAE.js";import"./tag-B1iarCZg.js";import{T as p}from"./text-area-SV8dYrCz.js";import"./time-picker-D6V8Wd0x.js";import"./tooltip-d8p4Ljze.js";import"./index-DO_WIL-g.js";import"./iframe-Bwmg5-4I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsph7FLZ.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-XxeCWWQm.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
