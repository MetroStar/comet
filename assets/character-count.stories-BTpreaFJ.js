import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BcAjHaPe.js";import"./banner-Bb9tgDMu.js";import"./button-DHPf3ZSy.js";import"./button-group-DXkD3Odw.js";import"./checkbox-CWxi48TQ.js";import"./combo-box-BgWuh_WY.js";import"./date-picker-CY9wn-JD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BeU7Me-t.js";import"./form-group-030VDF0V.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CtOfy-k_.js";import"./label-Z58zP1tT.js";import"./modal-D415_Ju7.js";import"./process-list-B5_A_qL3.js";import"./radio-button-iLLUIu9s.js";import"./range-slider-B-Hf8WYx.js";import"./search-297e9Y7D.js";import"./select-P2zO11OG.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BBLMX3ph.js";import"./step-indicator-VzIYVCPL.js";import"./summary-box-i_aO1v2Q.js";import"./tag-BURryAb1.js";import{T as p}from"./text-area-CrhVCt3o.js";import"./time-picker-CvagkXJf.js";import"./tooltip-BhAJp-EY.js";import"./index-BdXVIPuw.js";import"./iframe-B31pvYvh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCMedrEY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-A9mp8xSv.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
