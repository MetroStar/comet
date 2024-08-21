import { Banner } from './banner';
import figma from '@figma/code-connect';

figma.connect(
  Banner,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=25-4219',
  {
    props: {},
    example: () => <Banner id="banner-1" type="gov" />,
  },
);
