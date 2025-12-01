import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-Hzj3yCl4.js";import"./banner-BM68dEEY.js";import"./button-CAdIHhr5.js";import"./button-group-B9dZJN23.js";import"./checkbox-CyHFcZFX.js";import"./combo-box-CtcodrSH.js";import"./date-picker-D-9P-Y26.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVEhI-RK.js";import"./form-group-xZ43lr12.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIOfJG2o.js";import"./label-Z58zP1tT.js";import"./modal-DmgRvfLd.js";import"./process-list-B5mxUUsY.js";import"./radio-button-BjMGGsE7.js";import"./range-slider-DC0X_owM.js";import"./search-BGfPHDPn.js";import"./select-DkyaY8B2.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DVYJRvZP.js";import"./step-indicator-DBhmaTHM.js";import"./summary-box-Bfah1ntm.js";import"./tag-BfPPkP3z.js";import{T as p}from"./text-area-DGQ6Eimz.js";import"./time-picker-DDH8YCye.js";import"./tooltip-BgKzB3lI.js";import"./index-B1cA9pBl.js";import"./iframe-y5ok3I9y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhulT-dX.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DMAFzJVB.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
