import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CEC6VR9e.js";import"./banner-BkIJS_6z.js";import"./button-Cz7RgtoX.js";import"./button-group-Bv-TDQ2J.js";import"./checkbox-Bb6cbyCa.js";import"./combo-box-QTBgiBcd.js";import"./date-picker-k5bZck_k.js";import"./error-messages-_lA7co94.js";import"./index-DHOAzmtN.js";import"./form-group-BWHxpag0.js";import"./helper-text-BRA2CuHl.js";import"./icon-CltekIt2.js";import"./label-0qqEdO1f.js";import"./modal-CDqm1nCU.js";import"./process-list-DEBo6nte.js";import"./radio-button-CKLsf2Y8.js";import"./range-slider-BVh0FSE4.js";import"./search-SVFGc8u5.js";import"./select-VUMvBmOF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BFo_LLtW.js";import"./step-indicator-DhkvXvbl.js";import"./summary-box-BDJ68lGd.js";import"./tag-BwQanvXK.js";import{T as p}from"./text-area-Ce8nxo5M.js";import"./time-picker-C8zu-Q1o.js";import"./tooltip-DeexD_cA.js";import"./index-D82vRiCQ.js";import"./iframe-B2NCm2Rb.js";import"./index-C-iG_L9p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Mg8z5oX4.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
