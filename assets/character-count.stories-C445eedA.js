import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-BtFq5zL4.js";import"./banner-uV95zGFs.js";import"./button-DfKPFT4w.js";import"./button-group-B8qwif5I.js";import"./checkbox-CdDK2Ail.js";import"./combo-box-Ct--mWcL.js";import"./date-picker-rlS4rEJ_.js";import"./error-messages-pdO9TZPZ.js";import"./index-D0vkdLY0.js";import"./form-group-BNvSNT6e.js";import"./helper-text-BRA2CuHl.js";import"./icon-DZs_2Psf.js";import"./label-0qqEdO1f.js";import"./modal-CuUbPca1.js";import"./process-list-g8Hqj4X6.js";import"./radio-button-MwQ8sEZH.js";import"./range-slider-DAYuTYd2.js";import"./search-CAVmMV5z.js";import"./select-D-tMA2XJ.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DEEFijFP.js";import"./step-indicator-DQV4Yclx.js";import"./summary-box-WhOrEbhX.js";import"./tag-49nF4kNV.js";import{T as x}from"./text-area-BuVE8XGA.js";import"./time-picker-CvQcDVRT.js";import"./tooltip-ByMU_4Qo.js";import"./index-H7MKBO52.js";import"./iframe-BwwnJ4bQ.js";import"./index-CvXiQi1r.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN-9Y53f.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
