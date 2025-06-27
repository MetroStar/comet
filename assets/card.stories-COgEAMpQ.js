import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as o,d,e as s,f as m,g as j}from"./table-qipDyWWW.js";import"./banner-Dbu76H_h.js";import{B as c}from"./button-BMfJYqv5.js";import"./button-group-C2oE1fke.js";import"./checkbox-DV3FgYFD.js";import"./combo-box-DDkfMCEb.js";import"./date-picker-0NFNJK6U.js";import"./error-messages-pdO9TZPZ.js";import"./index-Uy9L_0xv.js";import"./form-group-B_64fuat.js";import"./helper-text-BRA2CuHl.js";import"./icon-BVVlaEti.js";import"./label-0qqEdO1f.js";import"./modal-CR3V5z44.js";import"./process-list-DIpvwoK3.js";import"./radio-button-C1yJv6Ul.js";import"./range-slider-DBEKSDkg.js";import"./search-V-FTtime.js";import"./select-B0FkRYsk.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-B2zEUvDJ.js";import"./step-indicator-CDE04cMN.js";import"./summary-box-BQOeikKb.js";import"./tag-Di9uSiTh.js";import"./text-area-qn4mo8GQ.js";import"./time-picker-C5iYe6-E.js";import"./tooltip-DkS2g9OU.js";import"./index-BLKK0fUp.js";import"./iframe-DLFxhOfQ.js";import"./index-DbdQ-_yw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DnM5t5zf.js";import"./active-element-BuxAly_Z.js";const da={title:"USWDS/Card",component:o,argTypes:{id:{required:!0},layout:{control:{type:"select",options:["default","flag"]}}}},t={args:{id:"card-1",layout:"default",className:"maxw-mobile-lg"},render:r=>a.jsxs(o,{...r,children:[a.jsx(d,{children:"Card"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},e={args:{id:"card-standard-media",layout:"default",className:"maxw-mobile"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})},i={args:{id:"card-flag-media",layout:"flag",mediaRight:!1,className:"maxw-tablet"},render:r=>a.jsxs(o,{...r,children:[a.jsx(j,{children:a.jsx("img",{src:"https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",alt:"a placeholder image"})}),a.jsx(d,{children:"Card with Media"}),a.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae."}),a.jsx(m,{children:a.jsx(c,{id:"card-button",children:"Button"})})]})};var u,l,n;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
