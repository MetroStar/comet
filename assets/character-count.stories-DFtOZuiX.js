import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CCYgxckp.js";import"./banner-pKjHS12l.js";import"./button-B47c1YYu.js";import"./button-group-CYPZmXKt.js";import"./checkbox-CzUrMOvt.js";import"./combo-box-BOHJSksH.js";import"./date-picker-CBSj8zvm.js";import"./error-messages-_lA7co94.js";import"./index-BMwdlhat.js";import"./form-group-CJ3mn56K.js";import"./helper-text-BRA2CuHl.js";import"./icon-NAorSJnD.js";import"./label-0qqEdO1f.js";import"./modal-DL0P4ibX.js";import"./process-list-EZ68CPKv.js";import"./radio-button-1kiY3UA7.js";import"./range-slider-Cm5ueJhP.js";import"./search-tjUloL2j.js";import"./select-UJptg5wt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-oHPgUl6e.js";import"./step-indicator-NhVbAgWk.js";import"./summary-box-NLL7Ni77.js";import"./tag-Ct2h3KgO.js";import{T as p}from"./text-area-D-UqW_wP.js";import"./time-picker-rVrnL5sX.js";import"./tooltip-20H6euzk.js";import"./index-CaF2RGos.js";import"./iframe-Bwz6XU0D.js";import"./index-EONbNr6g.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DJDqlcXL.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const V=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,V as __namedExportsOrder,Q as default};
