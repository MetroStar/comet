import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{L as n}from"./iframe-pVO7hzh_.js";import{t as r}from"./jsx-runtime-BpX3lQ6F.js";import{n as i,t as a}from"./use-modal-tKxB4zox.js";import{n as o,t as s}from"./modal-Da6GMjP3.js";var c,l,u,d,f,p,m,h,g;t((()=>{c=e(n()),o(),a(),l=r(),u={title:`USWDS/Modal`,component:s,argTypes:{size:{control:`select`}},parameters:{docs:{source:{type:`code`}}}},d=`Are you sure you want to continue?`,f=`You have unsaved changes that will be lost.`,p={args:{id:`modal-1`,size:`small`,children:f,heading:d},render:e=>{let t=(0,l.jsxs)(`ul`,{className:`usa-button-group`,children:[(0,l.jsx)(`li`,{className:`usa-button-group__item`,children:(0,l.jsx)(`button`,{type:`button`,className:`usa-button`,id:`continueBtn`,"data-close-modal":!0,children:`Continue`})}),(0,l.jsx)(`li`,{className:`usa-button-group__item`,children:(0,l.jsx)(`button`,{type:`button`,className:`usa-button usa-button--unstyled padding-105 text-center`,id:`goBackBtn`,"data-close-modal":!0,children:`Go back`})})]}),n=()=>{console.log(`Continue clicked...`)};return(0,c.useEffect)(()=>{let e=document.querySelector(`#continueBtn`);e&&(e.onclick=n)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`a`,{href:`#${e.id}`,className:`usa-button`,"aria-controls":e.id,"data-open-modal":!0,children:`Open Modal`}),(0,l.jsx)(s,{id:e.id,size:e.size,heading:e.heading,footer:t,children:e.children})]})}},m={args:{id:`modal-2`,size:`large`,children:f,heading:d},render:e=>{let t=(0,l.jsxs)(`ul`,{className:`usa-button-group`,children:[(0,l.jsx)(`li`,{className:`usa-button-group__item`,children:(0,l.jsx)(`button`,{type:`button`,className:`usa-button`,id:`continueBtn`,"data-close-modal":!0,children:`Continue`})}),(0,l.jsx)(`li`,{className:`usa-button-group__item`,children:(0,l.jsx)(`button`,{type:`button`,className:`usa-button usa-button--unstyled padding-105 text-center`,id:`goBackBtn`,"data-close-modal":!0,children:`Go back`})})]}),n=()=>{console.log(`Continue clicked...`)};return(0,c.useEffect)(()=>{let e=document.querySelector(`#continueBtn`);e&&(e.onclick=n)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`a`,{href:`#${e.id}`,className:`usa-button`,"aria-controls":e.id,"data-open-modal":!0,children:`Open Modal`}),(0,l.jsx)(s,{id:e.id,size:e.size,heading:e.heading,footer:t,children:e.children})]})}},h={args:{id:`modal-3`,size:`small`,children:f,heading:d},render:e=>{let{toggleModal:t}=i(),n=(0,l.jsxs)(`ul`,{className:`usa-button-group`,children:[(0,l.jsx)(`li`,{className:`usa-button-group__item`,children:(0,l.jsx)(`button`,{type:`button`,className:`usa-button`,id:`continueBtn`,children:`Continue`})}),(0,l.jsx)(`li`,{className:`usa-button-group__item`,children:(0,l.jsx)(`button`,{type:`button`,className:`usa-button usa-button--unstyled padding-105 text-center`,id:`goBackBtn`,"data-close-modal":!0,children:`Go back`})})]}),r=()=>{console.log(`Continue clicked...`),t(!1)};return(0,c.useEffect)(()=>{let e=document.querySelector(`#continueBtn`);e&&(e.onclick=r)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`a`,{href:`#${e.id}`,className:`usa-button`,"aria-controls":e.id,"data-open-modal":!0,children:`Open Modal`}),(0,l.jsx)(s,{id:e.id,size:e.size,heading:e.heading,footer:n,children:e.children})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Standard`,`LargeModal`,`CustomClose`]}))();export{h as CustomClose,m as LargeModal,p as Standard,g as __namedExportsOrder,u as default};