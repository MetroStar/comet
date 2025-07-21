import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as o,d,e as s,f as m,g as j}from"./table-MPKe8Ila.js";import"./banner-DPBvQbSo.js";import{B as c}from"./button-Bf0VrC9L.js";import"./button-group-SzaEBtpA.js";import"./checkbox-_Wt8UjXW.js";import"./combo-box-B4psjhG_.js";import"./date-picker-DU9UqJRM.js";import"./error-messages-pdO9TZPZ.js";import"./index-rGsKvddx.js";import"./form-group-00NMt7vW.js";import"./helper-text-BRA2CuHl.js";import"./icon-D_ZN9vDs.js";import"./label-0qqEdO1f.js";import"./modal-BNbINjhK.js";import"./process-list-Cll0kTKP.js";import"./radio-button-CSPa9WI2.js";import"./range-slider-D_pBXwXC.js";import"./search-Bhw3b0NB.js";import"./select-BacdfqYt.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DSxMQNmj.js";import"./step-indicator-1zoU-WBF.js";import"./summary-box-CTYMzxjT.js";import"./tag-C9cxY06M.js";import"./text-area-hSK-s690.js";import"./time-picker-X_lbIc1r.js";import"./tooltip-DPiLySq6.js";import"./index-Bo3ISOMl.js";import"./iframe-BlSZsq3b.js";import"./index--9xU-wIR.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bfh4D05J.js";import"./active-element-BuxAly_Z.js";const da={title:"USWDS/Card",component:o,argTypes:{id:{required:!0},layout:{control:{type:"select",options:["default","flag"]}}}},t={args:{id:"card-1",layout:"default",className:"maxw-mobile-lg"},render:r=>a.jsxs(o,{...r,children:[a.jsx(d,{children:"Card"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},e={args:{id:"card-standard-media",layout:"default",className:"maxw-mobile"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},i={args:{id:"card-flag-media",layout:"flag",mediaRight:!1,className:"maxw-tablet"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})};var u,l,n;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'card-1',
    layout: 'default',
    className: 'maxw-mobile-lg'
  },
  render: (args: CardProps) => <Card {...args}>
      <CardHeader>Card</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
        cupiditate, eaque qui officia recusandae.
      </CardBody>
      <CardFooter>
        <Button id="card-button">Button</Button>
      </CardFooter>
    </Card>
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var p,g,C;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'card-standard-media',
    layout: 'default',
    className: 'maxw-mobile'
  },
  render: (args: CardProps) => <Card {...args}>
      <CardMedia>
        <img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="a placeholder image" />
      </CardMedia>
      <CardHeader>Card with Media</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
        cupiditate, eaque qui officia recusandae.
      </CardBody>
      <CardFooter>
        <Button id="card-button">Button</Button>
      </CardFooter>
    </Card>
}`,...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,f,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'card-flag-media',
    layout: 'flag',
    mediaRight: false,
    className: 'maxw-tablet'
  },
  render: (args: CardProps) => <Card {...args}>
      <CardMedia>
        <img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="a placeholder image" />
      </CardMedia>
      <CardHeader>Card with Media</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
        cupiditate, eaque qui officia recusandae.
      </CardBody>
      <CardFooter>
        <Button id="card-button">Button</Button>
      </CardFooter>
    </Card>
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const sa=["Default","WithMedia","FlagLayout"];export{t as Default,i as FlagLayout,e as WithMedia,sa as __namedExportsOrder,da as default};
