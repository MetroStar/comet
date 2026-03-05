import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BkcizWb6.js";import"./banner-DweQbrQc.js";import"./button-XBMUcWoC.js";import"./button-group-BrIUjRCR.js";import"./checkbox-BvZeZHtM.js";import"./combo-box-Bj433j_h.js";import"./date-picker-z6Q7eOM2.js";import"./error-messages-DQwxQ3pR.js";import"./index-Cnn-YZcV.js";import"./form-group-CG_NYfoS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cc1dzDtb.js";import"./label-Z58zP1tT.js";import"./modal-Cpe_cfLH.js";import"./process-list-CvTJfKYq.js";import"./radio-button-DUmMrbPy.js";import"./range-slider-gxORhVag.js";import"./search-NuBoJI84.js";import"./select-Bzt55IHF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CxJW4m1g.js";import"./step-indicator-BDNx4Eop.js";import"./summary-box-CpxqpbYb.js";import"./tag-CbEMar7b.js";import{T as p}from"./text-area-blUsZJJZ.js";import"./time-picker-CtBf-17B.js";import"./tooltip-BwdNh6of.js";import"./index-oP94_y1q.js";import"./iframe-DZGaHezm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oFd3Ri_j.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dv1nB6qQ.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
