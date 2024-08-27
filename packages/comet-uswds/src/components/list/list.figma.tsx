import { List } from './list';
import figma from '@figma/code-connect';

figma.connect(
  List,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=11-1776',
  {
    props: {
      type: figma.enum('Variant', {
        Unordered: 'unordered',
        Ordered: 'ordered',
      }),
      variant: figma.enum('Variant', {
        Unstyled: 'unstyled',
      }),
    },
    example: ({ type, variant }) => (
      <List
        id="list-1"
        type={type}
        variant={variant}
        items={[
          {
            id: 'item-1',
            value: 'Item 1',
          },
          {
            id: 'item-2',
            value: 'Item 2',
          },
          {
            id: 'item-3',
            value: 'Item 3',
          },
        ]}
      />
    ),
  },
);
