import{j as t}from"./jsx-runtime-Bxcv0yjW.js";import{r as M}from"./index-mfbfsM12.js";import{M as d,m as c}from"./modal-QhEAscNO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./select-or-matches-Bu-g4rUn.js";import"./config-BXli1stc.js";import"./index-D6IA0wpC.js";import"./active-element-CTMAq7ve.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bl6ORisp.js";const T={title:"USWDS/Modal",component:d,argTypes:{size:{control:"select"}},parameters:{docs:{source:{type:"code"}}}},i="Are you sure you want to continue?",r="You have unsaved changes that will be lost.",k=o=>{const l=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),u=()=>{console.log("Continue clicked...")};return M.useEffect(()=>{const e=document.querySelector("#continueBtn");e&&(e.onclick=u)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${o.id}`,className:"usa-button","aria-controls":o.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:o.id,size:o.size,heading:o.heading,footer:l,children:o.children})]})},a=k.bind({});a.args={id:"modal-1",size:"small",children:r,heading:i};const n=k.bind({});n.args={id:"modal-2",size:"large",children:r,heading:i};const C=o=>{const l=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn",children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),u=()=>{console.log("Continue clicked..."),c.toggleModal.call(c,!1)};return M.useEffect(()=>{const e=document.querySelector("#continueBtn");e&&(e.onclick=u)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${o.id}`,className:"usa-button","aria-controls":o.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:o.id,size:o.size,heading:o.heading,footer:l,children:o.children})]})},s=C.bind({});s.args={id:"modal-3",size:"small",children:r,heading:i};var m,b,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,y,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const q=["Standard","LargeModal","CustomClose"];export{s as CustomClose,n as LargeModal,a as Standard,q as __namedExportsOrder,T as default};
