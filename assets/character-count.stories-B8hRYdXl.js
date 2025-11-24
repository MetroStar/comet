import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BdW5CQyz.js";import"./banner-C6irt5yh.js";import"./button-Cq7i4H52.js";import"./button-group-B1vas01y.js";import"./checkbox-D-uCv-kq.js";import"./combo-box-BAn8IQj_.js";import"./date-picker-Cpa9mYFW.js";import"./error-messages-DQwxQ3pR.js";import"./index-BcrKG5Hi.js";import"./form-group-CEqucKs6.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CDSXv68S.js";import"./label-Z58zP1tT.js";import"./modal-CiD3J_dY.js";import"./process-list-DsKEl7ZV.js";import"./radio-button-1b9u9ASV.js";import"./range-slider-1QPLkZfK.js";import"./search-Jk9E_xgr.js";import"./select-CfVwR03_.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-kEI83GIN.js";import"./step-indicator-CECnrlTP.js";import"./summary-box-BTyAB9YR.js";import"./tag-DxN_SjvT.js";import{T as p}from"./text-area-DEutEBFv.js";import"./time-picker-VV5_xO_L.js";import"./tooltip-CynE1fwd.js";import"./index-DDfvyXav.js";import"./iframe-Cdpn9PYs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-De4lQ0Y0.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BRZPKXJE.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
