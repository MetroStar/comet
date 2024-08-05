import{j as t}from"./jsx-runtime-Bxcv0yjW.js";import{r as C}from"./index-mfbfsM12.js";import{m,M as d}from"./modal-OPWcKFuw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./select-or-matches-Bu-g4rUn.js";import"./config-BXli1stc.js";import"./index-D6IA0wpC.js";import"./active-element-CTMAq7ve.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bl6ORisp.js";const B=()=>({toggleModal:e=>{m.toggleModal.call(m,e)}}),G={title:"USWDS/Modal",component:d,argTypes:{size:{control:"select"}},parameters:{docs:{source:{type:"code"}}}},r="Are you sure you want to continue?",i="You have unsaved changes that will be lost.",k=o=>{const e=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),l=()=>{console.log("Continue clicked...")};return C.useEffect(()=>{const u=document.querySelector("#continueBtn");u&&(u.onclick=l)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${o.id}`,className:"usa-button","aria-controls":o.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:o.id,size:o.size,heading:o.heading,footer:e,children:o.children})]})},a=k.bind({});a.args={id:"modal-1",size:"small",children:i,heading:r};const n=k.bind({});n.args={id:"modal-2",size:"large",children:i,heading:r};const _=o=>{const{toggleModal:e}=B(),l=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn",children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),u=()=>{console.log("Continue clicked..."),e(!1)};return C.useEffect(()=>{const c=document.querySelector("#continueBtn");c&&(c.onclick=u)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${o.id}`,className:"usa-button","aria-controls":o.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:o.id,size:o.size,heading:o.heading,footer:l,children:o.children})]})},s=_.bind({});s.args={id:"modal-3",size:"small",children:i,heading:r};var b,g,p;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,f,M;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var N,y,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ModalProps) => {
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
    console.log('Continue clicked...');
    // Do something

    toggleModal(false);
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const L=["Standard","LargeModal","CustomClose"];export{s as CustomClose,n as LargeModal,a as Standard,L as __namedExportsOrder,G as default};
