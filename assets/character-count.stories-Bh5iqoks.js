import{i as e}from"./preload-helper-xPQekRTU.js";import{R as t}from"./iframe-BIDTTI5V.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{C as r,S as i,m as a,t as o,v as s,w as c}from"./src-BBppIzF4.js";import{t as l}from"./text-area-Dl40QjHC.js";var u,d,f,p,m;e((()=>{t(),o(),c(),u=n(),d={title:`USWDS/Forms/Character Count`,component:i,argTypes:{id:{required:!0}}},f={args:{id:`character-count-1`},render:e=>(0,u.jsx)(s,{id:`form-1`,children:(0,u.jsxs)(r,{id:e.id,children:[(0,u.jsx)(a,{id:`with-hint-input`,className:`usa-character-count__field`,maxLength:25,name:`with-hint-input`,label:`Text input`,helperText:`This is an input with a character counter.`}),(0,u.jsx)(i,{id:`with-hint-input-info`,children:`You can enter up to 25 characters`})]})})},p={args:{id:`character-count-2`},render:e=>(0,u.jsx)(s,{id:`form-2`,children:(0,u.jsxs)(r,{id:e.id,children:[(0,u.jsx)(l,{id:`with-hint-textarea`,maxLength:50,rows:5,className:`usa-character-count__field`,label:`Textarea`,helperText:`This is a textarea with a character counter.`}),(0,u.jsx)(i,{id:`with-hint-textarea-info`,children:`You can enter up to 50 characters`})]})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-1'
  },
  render: (args: CharacterCountProps) => <Form id="form-1">
      <CharacterCountContainer id={args.id}>
        <TextInput id="with-hint-input" className="usa-character-count__field" maxLength={25} name="with-hint-input" label="Text input" helperText="This is an input with a character counter." />
        <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
      </CharacterCountContainer>
    </Form>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`InputExample`,`TextAreaExample`]}))();export{f as InputExample,p as TextAreaExample,m as __namedExportsOrder,d as default};