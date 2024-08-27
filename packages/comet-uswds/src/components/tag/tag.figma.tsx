import { Tag } from './tag';
import figma from '@figma/code-connect';

figma.connect(
  Tag,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=556-24391',
  {
    props: {
      size: figma.enum('Size', {
        Default: 'Default',
        Big: 'Big',
      }),
    },
    example: ({ size }) => (
      <Tag id="tag" size={size}>
        Tag
      </Tag>
    ),
  },
);
