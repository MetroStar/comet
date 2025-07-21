import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as o,d,e as s,f as m,g as j}from"./table-CNabwFd0.js";import"./banner-CEBngVBm.js";import{B as c}from"./button-BwDKLya9.js";import"./button-group-BejYm1FH.js";import"./checkbox-CQDMIMXT.js";import"./combo-box-C55i6zvi.js";import"./date-picker-CCa4mAhu.js";import"./error-messages-pdO9TZPZ.js";import"./index-ClE7f3XS.js";import"./form-group-BfLWRLjx.js";import"./helper-text-BRA2CuHl.js";import"./icon-tSldNKzR.js";import"./label-0qqEdO1f.js";import"./modal-shQVnoNU.js";import"./process-list-B6SN6S6H.js";import"./radio-button-sUS7D1P8.js";import"./range-slider-BF8zD3pc.js";import"./search-bRN4-ja6.js";import"./select-BWdstRoK.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CKar7Nja.js";import"./step-indicator-BF0nJBUs.js";import"./summary-box-jrcClhIx.js";import"./tag-1P0fxoyb.js";import"./text-area-gQuZ9eqj.js";import"./time-picker-Wna0e8Fn.js";import"./tooltip-C2T8JWOX.js";import"./index-D8FXGwiB.js";import"./iframe-DIbYc2YD.js";import"./index-BGU-z_Jn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BK1LKP5m.js";import"./active-element-BuxAly_Z.js";const da={title:"USWDS/Card",component:o,argTypes:{id:{required:!0},layout:{control:{type:"select",options:["default","flag"]}}}},t={args:{id:"card-1",layout:"default",className:"maxw-mobile-lg"},render:r=>a.jsxs(o,{...r,children:[a.jsx(d,{children:"Card"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},e={args:{id:"card-standard-media",layout:"default",className:"maxw-mobile"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},i={args:{id:"card-flag-media",layout:"flag",mediaRight:!1,className:"maxw-tablet"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})};var u,l,n;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
