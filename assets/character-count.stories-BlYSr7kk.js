import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-DRxn63zm.js";import"./banner-Bnov42sP.js";import"./button-B01WG78W.js";import"./button-group-B0VNZ7Kk.js";import"./checkbox-1gRFiwoj.js";import"./combo-box-Ome0bXkk.js";import"./date-picker-C-nJthU5.js";import"./error-messages-pdO9TZPZ.js";import"./index-C47c4gZi.js";import"./form-group-SapkwOh7.js";import"./helper-text-BRA2CuHl.js";import"./icon-BMqwZoq1.js";import"./label-0qqEdO1f.js";import"./modal-B8fKVaUm.js";import"./process-list-BYeeENcZ.js";import"./radio-button-Ce8j0-sQ.js";import"./range-slider-mv0vohDp.js";import"./search-fZqQ8d8m.js";import"./select-DzKTuOAL.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CauIfpW6.js";import"./step-indicator-CHqa5mhF.js";import"./summary-box-CeavNL2b.js";import"./tag-CtaVZdOp.js";import{T as x}from"./text-area-KGydQoKk.js";import"./time-picker-BKsNE-Eo.js";import"./tooltip-Cix9W9yK.js";import"./index-CHO8AZYk.js";import"./iframe-ItqDXnoe.js";import"./index-Dpnjqa6C.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BOy_U2gq.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
