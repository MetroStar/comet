import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CwM-e1Ld.js";import"./banner-CghSNQac.js";import"./button-DmQlEe5k.js";import"./button-group-CzHupFz8.js";import"./checkbox-B4ogPmPY.js";import"./combo-box-DTr5hLrb.js";import"./date-picker-BAjdwWxm.js";import"./error-messages-pdO9TZPZ.js";import"./index-B9xeDuGV.js";import"./form-group-Dpd_9Ciz.js";import"./helper-text-BRA2CuHl.js";import"./icon-HidOGawT.js";import"./label-0qqEdO1f.js";import"./modal-BjsfUY3z.js";import"./process-list-CCzppcJI.js";import"./radio-button-B0rdgAKy.js";import"./range-slider-DebgFVuZ.js";import"./search-DBBsVxls.js";import"./select-4SSRmt_-.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BABO9nkk.js";import"./step-indicator-D6Dm9Ncv.js";import"./summary-box-C4ax1MQo.js";import"./tag-B0oWdQ5d.js";import"./text-area-BhfI6C58.js";import"./time-picker-Brz1130R.js";import"./tooltip-mjUvhVd0.js";import"./index-DEcbbbY2.js";import"./iframe-BTDZFy0C.js";import"./index-BejGjDqK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C4w5M_iJ.js";import"./active-element-BuxAly_Z.js";const re={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};var i,n,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
