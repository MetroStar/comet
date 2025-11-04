import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-sgBBeN_3.js";import"./banner-BlKhwcl-.js";import"./button-s6X5UBaR.js";import"./button-group-B1aWv9gb.js";import"./checkbox-cnQ_-peT.js";import"./combo-box-ByFKHUsq.js";import"./date-picker-CdtWHcRU.js";import"./error-messages-_lA7co94.js";import"./index-CRpSyyh9.js";import"./form-group-B-Pr4jGu.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDcUgKz8.js";import"./label-0qqEdO1f.js";import"./modal-B-Ar_YiJ.js";import"./process-list-B1j8-mm9.js";import"./radio-button-B5LIr0wS.js";import"./range-slider-CCd_gb87.js";import"./search-B2v06REB.js";import"./select-CFmg9oUl.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-T3keRwyR.js";import"./step-indicator-BjOG0FUs.js";import"./summary-box-Dep7O2aS.js";import"./tag-CvARMcmu.js";import{T as p}from"./text-area-ktJJJxPq.js";import"./time-picker-Dpbrbtdg.js";import"./tooltip-Ce_IMZUp.js";import"./index-BrPJmFEP.js";import"./iframe-CUeiGFJS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hkmjj3pC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DUB1n4uP.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
