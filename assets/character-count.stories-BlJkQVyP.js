import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as h,i as u,T as d}from"./table-CNabwFd0.js";import"./banner-CEBngVBm.js";import"./button-BwDKLya9.js";import"./button-group-BejYm1FH.js";import"./checkbox-CQDMIMXT.js";import"./combo-box-C55i6zvi.js";import"./date-picker-CCa4mAhu.js";import"./error-messages-pdO9TZPZ.js";import"./index-ClE7f3XS.js";import"./form-group-BfLWRLjx.js";import"./helper-text-BRA2CuHl.js";import"./icon-tSldNKzR.js";import"./label-0qqEdO1f.js";import"./modal-shQVnoNU.js";import"./process-list-B6SN6S6H.js";import"./radio-button-sUS7D1P8.js";import"./range-slider-BF8zD3pc.js";import"./search-bRN4-ja6.js";import"./select-BWdstRoK.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CKar7Nja.js";import"./step-indicator-BF0nJBUs.js";import"./summary-box-jrcClhIx.js";import"./tag-1P0fxoyb.js";import{T as x}from"./text-area-gQuZ9eqj.js";import"./time-picker-Wna0e8Fn.js";import"./tooltip-C2T8JWOX.js";import"./index-D8FXGwiB.js";import"./iframe-DIbYc2YD.js";import"./index-BGU-z_Jn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BK1LKP5m.js";import"./active-element-BuxAly_Z.js";const tr={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(h,{id:"form-1",children:r.jsxs(u,{id:e.id,children:[r.jsx(d,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(h,{id:"form-2",children:r.jsxs(u,{id:e.id,children:[r.jsx(x,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
