import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-hzsZ3yNS.js";import"./banner-DkIwXkOU.js";import"./button-Dk8wHbcB.js";import"./button-group-BTjygAXg.js";import"./checkbox-NisSa0r1.js";import"./combo-box-CFVhT9gX.js";import"./date-picker-CmknYkJM.js";import"./error-messages-DQwxQ3pR.js";import"./index-9j484q7r.js";import"./form-group-_DXArboa.js";import"./helper-text-C5i0f8Ge.js";import"./icon-5iiv7Ua4.js";import"./label-Z58zP1tT.js";import"./modal-m0qzC8Um.js";import"./process-list-DN565JV4.js";import"./radio-button-Dw7Gb0xo.js";import"./range-slider-DwIDWau-.js";import"./search-CJEmPhN0.js";import"./select-DBGTIg3Z.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CocnM4md.js";import"./step-indicator-_QX7SUDc.js";import"./summary-box-gIEos8kd.js";import"./tag-B-gIfjeS.js";import{T as p}from"./text-area-CXDLVR1_.js";import"./time-picker-B1YLTgxm.js";import"./tooltip-_J1saDjG.js";import"./index-D55o9aet.js";import"./iframe-nl7dBz9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-j-nxxJDD.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B3nRdOI3.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
