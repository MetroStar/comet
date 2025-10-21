import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CKPPHEB2.js";import"./banner-_ZbGEhIg.js";import"./button-wiBUw2ln.js";import"./button-group-DejK9lhd.js";import"./checkbox-_aoh7e0v.js";import"./combo-box-DYIP3xuD.js";import"./date-picker-B3ZMxbLu.js";import"./error-messages-_lA7co94.js";import"./index-BOGvIYqa.js";import"./form-group-BMhe2Iop.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8n28FoH.js";import"./label-0qqEdO1f.js";import"./modal-CvmAaDMV.js";import"./process-list-y5z1Z_ew.js";import"./radio-button-vMb-nHfq.js";import"./range-slider-H8-mu3pO.js";import"./search-CZaE40pE.js";import"./select-BmIio9K1.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DyJn8dTy.js";import"./step-indicator-LRxRKaHE.js";import"./summary-box-CpUaTIGj.js";import"./tag-BAxMA63-.js";import{T as p}from"./text-area-CCqQJwr3.js";import"./time-picker-Dl6GpAlx.js";import"./tooltip-fJCS9TPh.js";import"./index-BSbYLGkZ.js";import"./iframe-gQpfMxwu.js";import"./index-Dl7XZhpl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C-jQrruZ.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
