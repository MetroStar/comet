import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-BQL0JfDZ.js";import"./banner-BOhAuR3U.js";import"./button-0lmkM3fD.js";import"./button-group-CZhUERTb.js";import"./checkbox-fT2FCOvu.js";import"./combo-box-CLCaBMvM.js";import"./date-picker-BL4r-SdH.js";import"./error-messages-pdO9TZPZ.js";import"./index-CwwaLKAA.js";import"./form-group-CL2GuKdf.js";import"./helper-text-BRA2CuHl.js";import"./icon-jurcj1Nf.js";import"./label-0qqEdO1f.js";import"./modal-CFm0QTZ1.js";import"./process-list-AE9dDrc7.js";import"./radio-button-DuKZRfEc.js";import"./range-slider-BJh14v4A.js";import"./search-DGzVu3E9.js";import"./select-C6KxA7eF.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-cjdRzAPZ.js";import"./step-indicator-C7ZPDABy.js";import"./summary-box-D0zDo-mv.js";import"./tag-CWTFBZDR.js";import{T as x}from"./text-area-C_SND7HQ.js";import"./time-picker-OgCg1Xfc.js";import"./tooltip-BxjZneBO.js";import"./index-BoQPokf7.js";import"./iframe-C2QaQG_Z.js";import"./index-bqbLV7rw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CVA6Rm36.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
