import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-BQeTkK1M.js";import"./banner-BZszu9Hy.js";import"./button-C1_RgaQE.js";import"./button-group-B14JmUJ1.js";import"./checkbox-D3z24Vel.js";import"./combo-box-DbeRSt4E.js";import"./date-picker-CnIzSQKS.js";import"./error-messages-_lA7co94.js";import"./index-BKjg4RhJ.js";import"./form-group-8TLLYdhI.js";import"./helper-text-BRA2CuHl.js";import"./icon-BJTLgqOL.js";import"./label-0qqEdO1f.js";import"./modal-9N1QXayz.js";import"./process-list-DJRNsDCz.js";import"./radio-button-D9V3ZUqb.js";import"./range-slider-BNntapAU.js";import"./search-i8PX9Grh.js";import"./select-Dk-O5ttt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B1Xc6g-U.js";import"./step-indicator-DUKM1WXK.js";import"./summary-box-B7jql9xw.js";import"./tag-DW9bMkE3.js";import{T as p}from"./text-area-MPsxISJ-.js";import"./time-picker-DAIr41Lx.js";import"./tooltip-DdBtyx6p.js";import"./index-DU2c9KRp.js";import"./iframe-ChG3UuR9.js";import"./index-BlziFMf9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7_Jpop9.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
