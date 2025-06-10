import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as o,d,e as s,f as m,g as j}from"./table-DRxn63zm.js";import"./banner-Bnov42sP.js";import{B as c}from"./button-B01WG78W.js";import"./button-group-B0VNZ7Kk.js";import"./checkbox-1gRFiwoj.js";import"./combo-box-Ome0bXkk.js";import"./date-picker-C-nJthU5.js";import"./error-messages-pdO9TZPZ.js";import"./index-C47c4gZi.js";import"./form-group-SapkwOh7.js";import"./helper-text-BRA2CuHl.js";import"./icon-BMqwZoq1.js";import"./label-0qqEdO1f.js";import"./modal-B8fKVaUm.js";import"./process-list-BYeeENcZ.js";import"./radio-button-Ce8j0-sQ.js";import"./range-slider-mv0vohDp.js";import"./search-fZqQ8d8m.js";import"./select-DzKTuOAL.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CauIfpW6.js";import"./step-indicator-CHqa5mhF.js";import"./summary-box-CeavNL2b.js";import"./tag-CtaVZdOp.js";import"./text-area-KGydQoKk.js";import"./time-picker-BKsNE-Eo.js";import"./tooltip-Cix9W9yK.js";import"./index-CHO8AZYk.js";import"./iframe-ItqDXnoe.js";import"./index-Dpnjqa6C.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BOy_U2gq.js";import"./active-element-BuxAly_Z.js";const da={title:"USWDS/Card",component:o,argTypes:{id:{required:!0},layout:{control:{type:"select",options:["default","flag"]}}}},t={args:{id:"card-1",layout:"default",className:"maxw-mobile-lg"},render:r=>a.jsxs(o,{...r,children:[a.jsx(d,{children:"Card"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},e={args:{id:"card-standard-media",layout:"default",className:"maxw-mobile"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},i={args:{id:"card-flag-media",layout:"flag",mediaRight:!1,className:"maxw-tablet"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})};var u,l,n;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
