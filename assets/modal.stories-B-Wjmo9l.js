import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-DIbYc2YD.js";import{M as d}from"./modal-shQVnoNU.js";import{m as b}from"./index-D8FXGwiB.js";import"./sprite-Cw9lcZJJ.js";import"./index-BGU-z_Jn.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./active-element-BuxAly_Z.js";const B=()=>({toggleModal:o=>{b.toggleModal.call(b,o)}}),q={title:"USWDS/Modal",component:d,argTypes:{size:{control:"select"}},parameters:{docs:{source:{type:"code"}}}},r="Are you sure you want to continue?",c="You have unsaved changes that will be lost.",s={args:{id:"modal-1",size:"small",children:c,heading:r},render:e=>{const o=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),a=()=>{console.log("Continue clicked...")};return i.useEffect(()=>{const n=document.querySelector("#continueBtn");n&&(n.onclick=a)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${e.id}`,className:"usa-button","aria-controls":e.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:e.id,size:e.size,heading:e.heading,footer:o,children:e.children})]})}},l={args:{id:"modal-2",size:"large",children:c,heading:r},render:e=>{const o=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),a=()=>{console.log("Continue clicked...")};return i.useEffect(()=>{const n=document.querySelector("#continueBtn");n&&(n.onclick=a)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${e.id}`,className:"usa-button","aria-controls":e.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:e.id,size:e.size,heading:e.heading,footer:o,children:e.children})]})}},u={args:{id:"modal-3",size:"small",children:c,heading:r},render:e=>{const{toggleModal:o}=B(),a=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn",children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),n=()=>{console.log("Continue clicked..."),o(!1)};return i.useEffect(()=>{const m=document.querySelector("#continueBtn");m&&(m.onclick=n)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${e.id}`,className:"usa-button","aria-controls":e.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:e.id,size:e.size,heading:e.heading,footer:a,children:e.children})]})}};var g,p,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'modal-1',
    size: 'small',
    children: body,
    heading
  },
  render: (args: ModalProps) => {
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
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,x,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'modal-2',
    size: 'large',
    children: body,
    heading
  },
  render: (args: ModalProps) => {
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
  }
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var y,M,k;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'modal-3',
    size: 'small',
    children: body,
    heading
  },
  render: (args: ModalProps) => {
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
  }
}`,...(k=(M=u.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const G=["Standard","LargeModal","CustomClose"];export{u as CustomClose,l as LargeModal,s as Standard,G as __namedExportsOrder,q as default};
