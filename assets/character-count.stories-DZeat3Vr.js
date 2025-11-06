import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-CvmPfSUC.js";import"./banner-BwEE1fCf.js";import"./button-DnGnzYJl.js";import"./button-group-LTdk4OWd.js";import"./checkbox-e4Y_ckhj.js";import"./combo-box-BaXlIVuK.js";import"./date-picker-DJdBt-9d.js";import"./error-messages-_lA7co94.js";import"./index-BVo_kvWB.js";import"./form-group-8jYj3Y7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-BnuOR3E6.js";import"./label-0qqEdO1f.js";import"./modal-CyphDcoJ.js";import"./process-list-DC0p2f6t.js";import"./radio-button-RU0tDYN1.js";import"./range-slider-CsBLh5Zx.js";import"./search-Di5fDXID.js";import"./select-D7Qnylr_.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CY56Emxt.js";import"./step-indicator-22trubn0.js";import"./summary-box-CVwyDQy5.js";import"./tag-BET6tKi0.js";import{T as p}from"./text-area-DmXx35cn.js";import"./time-picker-CBInagW_.js";import"./tooltip-C_Y0L0LB.js";import"./index-K_UqQySj.js";import"./iframe-BWSz9So8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_fBeR743.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BQL2wJBc.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const X=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,X as __namedExportsOrder,V as default};
