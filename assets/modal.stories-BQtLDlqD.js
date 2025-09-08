import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-TQQq_xwn.js";import{M as d}from"./modal-DuZBzutb.js";import{m as b}from"./index-tsUwO6kK.js";import"./sprite-Cw9lcZJJ.js";import"./index-qCMx_cnb.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./active-element-BuxAly_Z.js";const g=()=>({toggleModal:o=>{b.toggleModal.call(b,o)}}),j={title:"USWDS/Modal",component:d,argTypes:{size:{control:"select"}},parameters:{docs:{source:{type:"code"}}}},r="Are you sure you want to continue?",c="You have unsaved changes that will be lost.",s={args:{id:"modal-1",size:"small",children:c,heading:r},render:e=>{const o=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),a=()=>{console.log("Continue clicked...")};return i.useEffect(()=>{const n=document.querySelector("#continueBtn");n&&(n.onclick=a)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${e.id}`,className:"usa-button","aria-controls":e.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:e.id,size:e.size,heading:e.heading,footer:o,children:e.children})]})}},l={args:{id:"modal-2",size:"large",children:c,heading:r},render:e=>{const o=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn","data-close-modal":!0,children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),a=()=>{console.log("Continue clicked...")};return i.useEffect(()=>{const n=document.querySelector("#continueBtn");n&&(n.onclick=a)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${e.id}`,className:"usa-button","aria-controls":e.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:e.id,size:e.size,heading:e.heading,footer:o,children:e.children})]})}},u={args:{id:"modal-3",size:"small",children:c,heading:r},render:e=>{const{toggleModal:o}=g(),a=t.jsxs("ul",{className:"usa-button-group",children:[t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button",id:"continueBtn",children:"Continue"})}),t.jsx("li",{className:"usa-button-group__item",children:t.jsx("button",{type:"button",className:"usa-button usa-button--unstyled padding-105 text-center",id:"goBackBtn","data-close-modal":!0,children:"Go back"})})]}),n=()=>{console.log("Continue clicked..."),o(!1)};return i.useEffect(()=>{const m=document.querySelector("#continueBtn");m&&(m.onclick=n)},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:`#${e.id}`,className:"usa-button","aria-controls":e.id,"data-open-modal":!0,children:"Open Modal"}),t.jsx(d,{id:e.id,size:e.size,heading:e.heading,footer:a,children:e.children})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const _=["Standard","LargeModal","CustomClose"];export{u as CustomClose,l as LargeModal,s as Standard,_ as __namedExportsOrder,j as default};
