import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-C8360qz1.js";import"./banner-0cQ1VwYA.js";import"./button-BKWxX-Da.js";import"./button-group-0Qrdnekb.js";import"./checkbox-V_TbU8x_.js";import"./combo-box-CWkgIpCj.js";import"./date-picker-OWJbCQWY.js";import"./error-messages-_lA7co94.js";import"./index-BJ28ckkj.js";import"./form-group-ccVGZY8n.js";import"./helper-text-BRA2CuHl.js";import"./icon-BvgBwPFf.js";import"./label-0qqEdO1f.js";import"./modal-Cy6gDfT6.js";import"./process-list-D0b4fxYS.js";import"./radio-button-Debg-0BK.js";import"./range-slider-fW4YPf0L.js";import"./search-DcpVRyol.js";import"./select-BVMgADpF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOYv-Ov_.js";import"./step-indicator-DjwAnxsg.js";import"./summary-box-BPTqOlAt.js";import"./tag-BPwouCyO.js";import{T as p}from"./text-area-mLO4G3tx.js";import"./time-picker-BVLec-T2.js";import"./tooltip-BGDht52a.js";import"./index-DwWsIt9I.js";import"./iframe-DuCqQX56.js";import"./index-CyGskYRl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DuoJpcJJ.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
