import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DW_bMWHL.js";import"./banner-BuudoFOQ.js";import"./button-B4wDKhOD.js";import"./button-group-DozuKPpf.js";import"./checkbox-ZHZjr4cn.js";import"./combo-box-CsP_B6Zh.js";import"./date-picker-CqC6lTbh.js";import"./error-messages-DQwxQ3pR.js";import"./index-DD-f6anU.js";import"./form-group-ZBJWDz0G.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BH5NOiaC.js";import"./label-Z58zP1tT.js";import"./modal-CLdCh8BH.js";import"./process-list-CZ6SCh55.js";import"./radio-button-8ffYBqhl.js";import"./range-slider-D2vE_SJf.js";import"./search-ojO1ONPP.js";import"./select-_crQ4lid.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Dbb_hWNu.js";import"./step-indicator-DuHvjJSx.js";import"./summary-box-DBxxh4rZ.js";import"./tag-CwSNC5bx.js";import{T as p}from"./text-area-Bop2UMwn.js";import"./time-picker-DYqV8tkF.js";import"./tooltip-Ch_NwA79.js";import"./index-DRC3u4o-.js";import"./iframe-CnqCO9iU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dzl_5l3M.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CT5x6rTX.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
