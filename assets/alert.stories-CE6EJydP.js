import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BQL0JfDZ.js";import"./banner-BOhAuR3U.js";import"./button-0lmkM3fD.js";import"./button-group-CZhUERTb.js";import"./checkbox-fT2FCOvu.js";import"./combo-box-CLCaBMvM.js";import"./date-picker-BL4r-SdH.js";import"./error-messages-pdO9TZPZ.js";import"./index-CwwaLKAA.js";import"./form-group-CL2GuKdf.js";import"./helper-text-BRA2CuHl.js";import"./icon-jurcj1Nf.js";import"./label-0qqEdO1f.js";import"./modal-CFm0QTZ1.js";import"./process-list-AE9dDrc7.js";import"./radio-button-DuKZRfEc.js";import"./range-slider-BJh14v4A.js";import"./search-DGzVu3E9.js";import"./select-C6KxA7eF.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-cjdRzAPZ.js";import"./step-indicator-C7ZPDABy.js";import"./summary-box-D0zDo-mv.js";import"./tag-CWTFBZDR.js";import"./text-area-C_SND7HQ.js";import"./time-picker-OgCg1Xfc.js";import"./tooltip-BxjZneBO.js";import"./index-BoQPokf7.js";import"./iframe-C2QaQG_Z.js";import"./index-bqbLV7rw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CVA6Rm36.js";import"./active-element-BuxAly_Z.js";const re={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};var i,n,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'alert-1',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: ''
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'alert-close',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: true,
    heading: 'Alert with close button',
    onClose: () => {
      // eslint-disable-next-line no-console
      console.log('Alert closed');
    }
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,h,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'alert-2',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: '',
    body: <span>This is the alert body as a prop</span>
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const oe=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,oe as __namedExportsOrder,re as default};
