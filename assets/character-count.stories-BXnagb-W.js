import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-zTEB5Tk3.js";import"./banner-Ctu5Bn2a.js";import"./button-BbKCSq4F.js";import"./button-group-BqKMWMdE.js";import"./checkbox-DawAI24O.js";import"./combo-box-vu3uRnQB.js";import"./date-picker-CkW0AH-a.js";import"./error-messages-pdO9TZPZ.js";import"./index-BH2c9k8-.js";import"./form-group-CX-gEq_d.js";import"./helper-text-BRA2CuHl.js";import"./icon-BgNjQrB-.js";import"./label-0qqEdO1f.js";import"./modal-teqI2epy.js";import"./process-list-BLBcSx5I.js";import"./radio-button-vC6aP1To.js";import"./range-slider-Dg7Gc1px.js";import"./search-CSPK-G6V.js";import"./select-DMC-g43g.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CdVuIs4j.js";import"./step-indicator-CLNnw9VM.js";import"./summary-box-D_VnDwC5.js";import"./tag-DF5T__FD.js";import{T as x}from"./text-area-B3WR3qCO.js";import"./time-picker-8fFiPqiV.js";import"./tooltip-3hrG5ysG.js";import"./index-CbVBbDn6.js";import"./iframe-BUjXoUEM.js";import"./index-pcMLbDjW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BPObrEFB.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
