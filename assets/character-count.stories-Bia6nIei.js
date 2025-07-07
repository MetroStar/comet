import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-Hs4VCtc9.js";import"./banner-nM2nGO0J.js";import"./button-C-o4OEAH.js";import"./button-group-CTngshXJ.js";import"./checkbox-BViJbhRi.js";import"./combo-box-CuwRJQAf.js";import"./date-picker-D6J3TZ8g.js";import"./error-messages-pdO9TZPZ.js";import"./index-DU_4dbC6.js";import"./form-group-Bdsh5mGJ.js";import"./helper-text-BRA2CuHl.js";import"./icon-CW17oGSm.js";import"./label-0qqEdO1f.js";import"./modal-7rUH1YJR.js";import"./process-list-CY8fUDPl.js";import"./radio-button-BXVR-eS5.js";import"./range-slider-BWitLn27.js";import"./search-CLsFZHno.js";import"./select-ChyTk__I.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CPChkUBO.js";import"./step-indicator-Djr7F7jZ.js";import"./summary-box-Dmvss6bn.js";import"./tag-CoHDO4Xv.js";import{T as x}from"./text-area-TjsQH2pL.js";import"./time-picker-Dv1ePHYY.js";import"./tooltip-Dr1Y0apo.js";import"./index-BuhywQhW.js";import"./iframe-D9Bj4LF8.js";import"./index-Y4NXysNt.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DcNgODFG.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
