import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-CNQjDBiW.js";import{M as d}from"./modal-GIvoxKCk.js";import{m}from"./index-Onnr2wha.js";import"./sprite-Cw9lcZJJ.js";import"./index-BRohADMv.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./active-element-BuxAly_Z.js";const B=()=>({toggleModal:e=>{m.toggleModal.call(m,e)}}),q={title:"USWDS/Modal",component:d,argTypes:{size:{control:"select"}},parameters:{docs:{source:{type:"code"}}}},i="Are you sure you want to continue?",c="You have unsaved changes that will be lost.",k=o=>{const e=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),u=()=>{console.log("Continue clicked...")};return C.useEffect(()=>{const l=document.querySelector("#continueBtn");l&&(l.onclick=u)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${o.id}`,className:"usa-button","aria-controls":o.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:o.id,size:o.size,heading:o.heading,footer:e,children:o.children})]})},n=k.bind({});n.args={id:"modal-1",size:"small",children:c,heading:i};const a=k.bind({});a.args={id:"modal-2",size:"large",children:c,heading:i};const _=o=>{const{toggleModal:e}=B(),u=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn",children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),l=()=>{console.log("Continue clicked..."),e(!1)};return C.useEffect(()=>{const r=document.querySelector("#continueBtn");r&&(r.onclick=l)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${o.id}`,className:"usa-button","aria-controls":o.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:o.id,size:o.size,heading:o.heading,footer:u,children:o.children})]})},s=_.bind({});s.args={id:"modal-3",size:"small",children:c,heading:i};var b,g,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`(args: ModalProps) => {
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
    // eslint-disable-next-line no-console
    console.log('Continue clicked...');
    // Do something
  };

  // Have to add event listeners after components load due to the way the modal works
  useEffect(() => {
    const button = document.querySelector('#continueBtn') as HTMLButtonElement;
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
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,f,M;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ModalProps) => {
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
    // eslint-disable-next-line no-console
    console.log('Continue clicked...');
    // Do something
  };

  // Have to add event listeners after components load due to the way the modal works
  useEffect(() => {
    const button = document.querySelector('#continueBtn') as HTMLButtonElement;
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
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var N,x,y;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ModalProps) => {
  const {
    toggleModal
  } = useModal();
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
    // eslint-disable-next-line no-console
    console.log('Continue clicked...');
    // Do something

    toggleModal(false);
  };

  // Have to add event listeners after components load due to the way the modal works
  useEffect(() => {
    const button = document.querySelector('#continueBtn') as HTMLButtonElement;
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
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const G=["Standard","LargeModal","CustomClose"];export{s as CustomClose,a as LargeModal,n as Standard,G as __namedExportsOrder,q as default};
