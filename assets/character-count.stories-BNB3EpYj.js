import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-MPKe8Ila.js";import"./banner-DPBvQbSo.js";import"./button-Bf0VrC9L.js";import"./button-group-SzaEBtpA.js";import"./checkbox-_Wt8UjXW.js";import"./combo-box-B4psjhG_.js";import"./date-picker-DU9UqJRM.js";import"./error-messages-pdO9TZPZ.js";import"./index-rGsKvddx.js";import"./form-group-00NMt7vW.js";import"./helper-text-BRA2CuHl.js";import"./icon-D_ZN9vDs.js";import"./label-0qqEdO1f.js";import"./modal-BNbINjhK.js";import"./process-list-Cll0kTKP.js";import"./radio-button-CSPa9WI2.js";import"./range-slider-D_pBXwXC.js";import"./search-Bhw3b0NB.js";import"./select-BacdfqYt.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DSxMQNmj.js";import"./step-indicator-1zoU-WBF.js";import"./summary-box-CTYMzxjT.js";import"./tag-C9cxY06M.js";import{T as x}from"./text-area-hSK-s690.js";import"./time-picker-X_lbIc1r.js";import"./tooltip-DPiLySq6.js";import"./index-Bo3ISOMl.js";import"./iframe-BlSZsq3b.js";import"./index--9xU-wIR.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bfh4D05J.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'character-count-1'
  },
  render: (args: CharacterCountProps) => <Form id="form-1">
      <CharacterCountContainer id={args.id}>
        <TextInput id="with-hint-input" className="usa-character-count__field" maxLength={25} name="with-hint-input" label="Text input" helperText="This is an input with a character counter." />
        <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
      </CharacterCountContainer>
    </Form>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ar=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,ar as __namedExportsOrder,tr as default};
