import{n as e}from"./chunk-DnJy8xQt.js";import{L as t}from"./iframe-pVO7hzh_.js";import{t as n}from"./jsx-runtime-BpX3lQ6F.js";import{c as r,g as i,h as a,m as o,t as s,u as c}from"./src-BgwO9hwX.js";import{t as l}from"./text-area-J-S4CZ8A.js";var u,d,f,p,m;e((()=>{t(),s(),i(),u=n(),d={title:`USWDS/Forms/Character Count`,component:o,argTypes:{id:{required:!0}}},f={args:{id:`character-count-1`},render:e=>(0,u.jsx)(c,{id:`form-1`,children:(0,u.jsxs)(a,{id:e.id,children:[(0,u.jsx)(r,{id:`with-hint-input`,className:`usa-character-count__field`,maxLength:25,name:`with-hint-input`,label:`Text input`,helperText:`This is an input with a character counter.`}),(0,u.jsx)(o,{id:`with-hint-input-info`,children:`You can enter up to 25 characters`})]})})},p={args:{id:`character-count-2`},render:e=>(0,u.jsx)(c,{id:`form-2`,children:(0,u.jsxs)(a,{id:e.id,children:[(0,u.jsx)(l,{id:`with-hint-textarea`,maxLength:50,rows:5,className:`usa-character-count__field`,label:`Textarea`,helperText:`This is a textarea with a character counter.`}),(0,u.jsx)(o,{id:`with-hint-textarea-info`,children:`You can enter up to 50 characters`})]})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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