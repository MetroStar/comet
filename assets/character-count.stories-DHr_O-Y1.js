import{j as t}from"./jsx-runtime-CKrituN3.js";import{g as e,F as m,h as u,i as d,T as l}from"./time-picker-B76jHTzM.js";import"./banner-7Wj-gJLG.js";import"./button-E2TKOJbH.js";import"./button-group-VkP6zz2y.js";import"./checkbox-KVimTpWW.js";import"./combo-box-DCYzuZXY.js";import"./date-picker-QYnd2bpS.js";import"./error-messages-BrtMeIwP.js";import"./file-input-NAvcq5gn.js";import"./icon-DcCEevzk.js";import{L as x}from"./label-Bjk3bcp6.js";import"./modal-BKO0oM1U.js";import"./process-list-CGuhQ8XH.js";import"./radio-button-ZZ-jVurh.js";import"./range-slider-CJ0nKtzW.js";import"./search-M3ysxVw_.js";import"./select-DO6-i82j.js";import"./side-navigation-CGob9ClI.js";import"./site-alert-CjMze_sn.js";import"./step-indicator-CdsWj0bR.js";import"./summary-box-Dj7u3ryv.js";import"./tag-DHgF_dP3.js";import{T as w}from"./text-area-BezCP1p8.js";import"./tooltip-Ddoe247D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./config-BXli1stc.js";import"./select-or-matches-Bu-g4rUn.js";import"./sprite-Cw9lcZJJ.js";import"./events-C6LRLXdn.js";import"./sanitizer-BtXph-xc.js";import"./is-in-viewport-B5ZZJcwh.js";import"./index-D6IA0wpC.js";import"./active-element-CTMAq7ve.js";const rt={title:"USWDS/Forms/Character Count",component:e,argTypes:{id:{requred:!0}}},C=a=>t.jsx(m,{id:"form-1",children:t.jsxs(u,{id:a.id,children:[t.jsxs(d,{children:[t.jsx(x,{htmlFor:"with-hint-input",children:"Text input"}),t.jsx("span",{id:"with-hint-input-hint",className:"usa-hint",children:"This is an input with a character counter."}),t.jsx(l,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input","aria-describedby":"with-hint-input-info with-hint-input-hint"})]}),t.jsx(e,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})}),r=C.bind({});r.args={id:"character-count-1"};const f=a=>t.jsx(m,{id:"form-2",children:t.jsxs(u,{id:a.id,children:[t.jsxs(d,{children:[t.jsx(x,{htmlFor:"with-hint-textarea",children:"Textarea"}),t.jsx("span",{id:"with-hint-textarea-hint",className:"usa-hint",children:"This is a textarea with a character counter."}),t.jsx(w,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",name:"with-hint-textarea","aria-describedby":"with-hint-textarea-info with-hint-textarea-hint"})]}),t.jsx(e,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})}),i=f.bind({});i.args={id:"character-count-2"};var n,o,h;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`(args: CharacterCountProps) => <Form id="form-1">
    <CharacterCountContainer id={args.id}>
      <FormGroup>
        <Label htmlFor="with-hint-input">Text input</Label>
        <span id="with-hint-input-hint" className="usa-hint">
          This is an input with a character counter.
        </span>
        <TextInput id="with-hint-input" className="usa-character-count__field" maxLength={25} name="with-hint-input" aria-describedby="with-hint-input-info with-hint-input-hint" />
      </FormGroup>
      <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
    </CharacterCountContainer>
  </Form>`,...(h=(o=r.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};var s,c,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`(args: CharacterCountProps) => <Form id="form-2">
    <CharacterCountContainer id={args.id}>
      <FormGroup>
        <Label htmlFor="with-hint-textarea">Textarea</Label>
        <span id="with-hint-textarea-hint" className="usa-hint">
          This is a textarea with a character counter.
        </span>
        <TextArea id="with-hint-textarea" maxLength={50} rows={5} className="usa-character-count__field" name="with-hint-textarea" aria-describedby="with-hint-textarea-info with-hint-textarea-hint" />
      </FormGroup>
      <CharacterCount id="with-hint-textarea-info">
        You can enter up to 50 characters
      </CharacterCount>
    </CharacterCountContainer>
  </Form>`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const it=["InputExample","TextAreaExample"];export{r as InputExample,i as TextAreaExample,it as __namedExportsOrder,rt as default};
