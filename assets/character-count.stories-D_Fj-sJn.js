import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-VoNP95Pm.js";import"./banner-BFmuQa3J.js";import"./button-FnxbOIxl.js";import"./button-group-DxG_vAvL.js";import"./checkbox-CuAyvt5h.js";import"./combo-box-JFA8x0Aa.js";import"./date-picker-C4oDLK0L.js";import"./error-messages-pdO9TZPZ.js";import"./index-CeA95act.js";import"./form-group-Do7MeC9T.js";import"./helper-text-BRA2CuHl.js";import"./icon-jiCUmSt2.js";import"./label-0qqEdO1f.js";import"./modal-L23pjG0L.js";import"./process-list-CPI_j1f2.js";import"./radio-button-BmatpBi8.js";import"./range-slider-TWCCNmlo.js";import"./search-BIBuwPJv.js";import"./select-70hwWT5q.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CP4XAApo.js";import"./step-indicator-DGuG5_ox.js";import"./summary-box-FZot6Pmt.js";import"./tag-DNHETpWl.js";import{T as x}from"./text-area-AOWVCR8A.js";import"./time-picker-D_uQCAwz.js";import"./tooltip-DD5ba1Vg.js";import"./index-3Z-K7Yvk.js";import"./iframe-B7ivaCGP.js";import"./index-B_PTpnfo.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-LKY76-uE.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
