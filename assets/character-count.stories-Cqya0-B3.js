import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-DLVQfNEK.js";import"./banner-DyQAgApN.js";import"./button-BXqyO3L3.js";import"./button-group-ksHkBbPj.js";import"./checkbox-CG93fIg_.js";import"./combo-box-Dw716zwh.js";import"./date-picker-Cbrlz2N3.js";import"./error-messages-DQwxQ3pR.js";import"./index-cm5JWLhR.js";import"./form-group-wymoTdrb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CHlGeBd8.js";import"./label-Z58zP1tT.js";import"./modal-nbn3cjTG.js";import"./process-list-DDsIXP2y.js";import"./radio-button-D3C-_jtH.js";import"./range-slider-CX1O6KiW.js";import"./search-0vzl5eJD.js";import"./select-DwK2wipF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CkTX5cWS.js";import"./step-indicator-PHVEZmUf.js";import"./summary-box-rpKWzcmi.js";import"./tag-BaXE9Fwc.js";import{T as p}from"./text-area-CPIHjsdo.js";import"./time-picker-BjWpsv0Q.js";import"./tooltip-Ck9scKOs.js";import"./index-CeC9og-I.js";import"./iframe-u1rK465H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RV7t3OPq.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CiZW3QX2.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
