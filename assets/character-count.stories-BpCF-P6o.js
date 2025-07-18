import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-DmnWc49K.js";import"./banner-BP3RSBZP.js";import"./button-DsiOr2cT.js";import"./button-group-DlwPHipu.js";import"./checkbox-CZe1xIAL.js";import"./combo-box-Cll_0ZQK.js";import"./date-picker-wskArRME.js";import"./error-messages-pdO9TZPZ.js";import"./index-D28TiiAF.js";import"./form-group-D7kfFAyU.js";import"./helper-text-BRA2CuHl.js";import"./icon-BRc0tjCA.js";import"./label-0qqEdO1f.js";import"./modal-MJ6CK7kF.js";import"./process-list-HxcLYqgQ.js";import"./radio-button-BE5o4tlm.js";import"./range-slider-Rbh1Ljww.js";import"./search-R6PZy4kO.js";import"./select-DZ1JcbOA.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CU9wbwsH.js";import"./step-indicator-DibkEOlM.js";import"./summary-box-BO38J_sj.js";import"./tag-OaQnEd8D.js";import{T as x}from"./text-area-DpJAHCY1.js";import"./time-picker-DxtrzA9L.js";import"./tooltip-D-S07_Hb.js";import"./index-7mWhv16U.js";import"./iframe-BgIKpn1G.js";import"./index-wzabiPIr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cf0-XlqG.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
