import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-Blb5rANT.js";import"./banner-BmlVZfk-.js";import"./button-BlUJB2sM.js";import"./button-group-BHc2I0ck.js";import"./checkbox-BQcjfNYw.js";import"./combo-box-gL_IiNty.js";import"./date-picker-BwTl6U0J.js";import"./error-messages-pdO9TZPZ.js";import"./index-D74N8FgS.js";import"./form-group-CD5U6nVC.js";import"./helper-text-BRA2CuHl.js";import"./icon-DOsYgSUJ.js";import"./label-0qqEdO1f.js";import"./modal-BRGNl0UW.js";import"./process-list-DGj5Msej.js";import"./radio-button-BrM805MA.js";import"./range-slider-DQzdPj_1.js";import"./search-C2kLE4Gz.js";import"./select-R1OqwzSb.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiAvvMNa.js";import"./step-indicator-BXmtocNy.js";import"./summary-box--HKkVsMN.js";import"./tag-NNoaLxc4.js";import{T as x}from"./text-area-BOazg4ul.js";import"./time-picker-TSzaulpH.js";import"./tooltip-CtABBABA.js";import"./index-C_wObpry.js";import"./iframe-BFMRay5H.js";import"./index-DDDrMwO6.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bm14qNHe.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
