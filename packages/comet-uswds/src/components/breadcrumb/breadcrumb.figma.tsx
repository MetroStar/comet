import { Breadcrumb, BreadcrumbItem } from './breadcrumb';
import figma from '@figma/code-connect';

figma.connect(
  Breadcrumb,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=27-5572',
  {
    props: {},
    example: () => (
      <Breadcrumb
        action={() => {
          // Do something
        }}
        current="Page"
        id="breadcrumb"
      >
        <BreadcrumbItem name="Link" path="/link-1" />
        <BreadcrumbItem name="Link" path="/link-2" />
        <BreadcrumbItem name="Page" path="/link-3" />
      </Breadcrumb>
    ),
  },
);
