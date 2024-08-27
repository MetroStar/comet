import { Search } from './search';
import figma from '@figma/code-connect';

figma.connect(
  Search,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=425-2429',
  {
    props: {
      type: figma.enum('size', {
        default: 'default',
        big: 'big',
        small: 'small',
      }),
    },
    example: ({ type }) => <Search id="search" type={type} />,
  },
);
