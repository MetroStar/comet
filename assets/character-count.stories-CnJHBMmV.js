import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h as i,F as o,i as n,T as c}from"./table-DqHQ9AC6.js";import"./banner-CKUJPF1-.js";import"./button-ByK7N37x.js";import"./button-group-DisPr8Ll.js";import"./checkbox-ZBX-3sk9.js";import"./combo-box-D1B40_Ed.js";import"./date-picker-Dk0zHLIH.js";import"./error-messages-_lA7co94.js";import"./index-eGJhptUH.js";import"./form-group-DYKjDP8T.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bs7luVDn.js";import"./label-0qqEdO1f.js";import"./modal-C_aHr31j.js";import"./process-list-BrnP9Mlx.js";import"./radio-button-C4ZsFajo.js";import"./range-slider-CRQ9fPP5.js";import"./search-DzgeHfgH.js";import"./select-DJpgwHeu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DBdkujVI.js";import"./step-indicator-Bwjm-2R5.js";import"./summary-box-BaPYr4D4.js";import"./tag-DDOzNfXQ.js";import{T as p}from"./text-area-1YDixWzp.js";import"./time-picker-DgYDaV_B.js";import"./tooltip-BzHK-RTl.js";import"./index-Bk9_ws4F.js";import"./iframe-7518lDOu.js";import"./index-DENiOEZQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dz9jb3-2.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
