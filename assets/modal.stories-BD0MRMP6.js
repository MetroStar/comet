import{j as n}from"./jsx-runtime-CKrituN3.js";import{r as M}from"./index-CBqU2yxZ.js";import{M as d,m as c}from"./modal-BKO0oM1U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./select-or-matches-Bu-g4rUn.js";import"./config-BXli1stc.js";import"./index-D6IA0wpC.js";import"./active-element-CTMAq7ve.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bl6ORisp.js";const T={title:"USWDS/Modal",component:d,argTypes:{size:{control:"select"}},parameters:{docs:{source:{type:"code"}}}},i="Are you sure you want to continue?",r="You have unsaved changes that will be lost.",k=t=>{const l=n.jsxs("ul",{className:"usa-button-group",children:[n.jsx("li",{className:"usa-button-group__item",children:n.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),n.jsx("li",{className:"usa-button-group__item",children:n.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),u=()=>{console.log("Continue clicked...")};return M.useEffect(()=>{const o=document.querySelector("#continueBtn");o&&(o.onclick=u)},[]),n.jsxs(n.Fragment,{children:[n.jsx("a",{href:`#${t.id}`,className:"usa-button","aria-controls":t.id,"data-open-modal":!0,children:"Open Modal"}),n.jsx(d,{id:t.id,size:t.size,heading:t.heading,footer:l,children:t.children})]})},e=k.bind({});e.args={id:"modal-1",size:"small",children:r,heading:i};const a=k.bind({});a.args={id:"modal-2",size:"large",children:r,heading:i};const C=t=>{const l=n.jsxs("ul",{className:"usa-button-group",children:[n.jsx("li",{className:"usa-button-group__item",children:n.jsx("button",{type:"button",className:"usa-button",id:"continueBtn",children:"Continue"})}),n.jsx("li",{className:"usa-button-group__item",children:n.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),u=()=>{console.log("Continue clicked..."),c.toggleModal.call(c,!1)};return M.useEffect(()=>{const o=document.querySelector("#continueBtn");o&&(o.onclick=u)},[]),n.jsxs(n.Fragment,{children:[n.jsx("a",{href:`#${t.id}`,className:"usa-button","aria-controls":t.id,"data-open-modal":!0,children:"Open Modal"}),n.jsx(d,{id:t.id,size:t.size,heading:t.heading,footer:l,children:t.children})]})},s=C.bind({});s.args={id:"modal-3",size:"small",children:r,heading:i};var m,b,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(args: ModalProps) => {
  const footer = <ul className="usa-button-group">
      <li className="usa-button-group__item">
        <button type="button" className="usa-button" id="continueBtn" data-close-modal>
          Continue
        </button>
      </li>
      <li className="usa-button-group__item">
        <button type="button" className="usa-button usa-button--unstyled padding-105 text-center" id="goBackBtn" data-close-modal>
          Go back
        </button>
      </li>
    </ul>;
  const handleContinue = (): void => {
    console.log('Continue clicked...');
    // Do something
  };

  // Have to add event listeners after components load due to the way the modal works
  useEffect(() => {
    const button = (document.querySelector('#continueBtn') as HTMLButtonElement);
    if (button) {
      button.onclick = handleContinue;
    }
  }, []);
  return <>
      <a href={\`#\${args.id}\`} className="usa-button" aria-controls={args.id} data-open-modal>
        Open Modal
      </a>
      <Modal id={args.id} size={args.size} heading={args.heading} footer={footer}>
        {args.children}
      </Modal>
    </>;
}`,...(p=(b=e.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ModalProps) => {
  const footer = <ul className="usa-button-group">
      <li className="usa-button-group__item">
        <button type="button" className="usa-button" id="continueBtn" data-close-modal>
          Continue
        </button>
      </li>
      <li className="usa-button-group__item">
        <button type="button" className="usa-button usa-button--unstyled padding-105 text-center" id="goBackBtn" data-close-modal>
          Go back
        </button>
      </li>
    </ul>;
  const handleContinue = (): void => {
    console.log('Continue clicked...');
    // Do something
  };

  // Have to add event listeners after components load due to the way the modal works
  useEffect(() => {
    const button = (document.querySelector('#continueBtn') as HTMLButtonElement);
    if (button) {
      button.onclick = handleContinue;
    }
  }, []);
  return <>
      <a href={\`#\${args.id}\`} className="usa-button" aria-controls={args.id} data-open-modal>
        Open Modal
      </a>
      <Modal id={args.id} size={args.size} heading={args.heading} footer={footer}>
        {args.children}
      </Modal>
    </>;
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,y,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ModalProps) => {
  const footer = <ul className="usa-button-group">
      <li className="usa-button-group__item">
        <button type="button" className="usa-button" id="continueBtn">
          Continue
        </button>
      </li>
      <li className="usa-button-group__item">
        <button type="button" className="usa-button usa-button--unstyled padding-105 text-center" id="goBackBtn" data-close-modal>
          Go back
        </button>
      </li>
    </ul>;
  const handleContinue = (): void => {
    console.log('Continue clicked...');
    // Do something

    /* eslint-disable-next-line */
    modal.toggleModal.call(modal, false); // Manually toggle modal after work complete
  };

  // Have to add event listeners after components load due to the way the modal works
  useEffect(() => {
    const button = (document.querySelector('#continueBtn') as HTMLButtonElement);
    if (button) {
      button.onclick = handleContinue;
    }
  }, []);
  return <>
      <a href={\`#\${args.id}\`} className="usa-button" aria-controls={args.id} data-open-modal>
        Open Modal
      </a>
      <Modal id={args.id} size={args.size} heading={args.heading} footer={footer}>
        {args.children}
      </Modal>
    </>;
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const q=["Standard","LargeModal","CustomClose"];export{s as CustomClose,a as LargeModal,e as Standard,q as __namedExportsOrder,T as default};
