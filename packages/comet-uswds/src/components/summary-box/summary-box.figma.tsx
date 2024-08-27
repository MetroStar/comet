import { SummaryBox } from './summary-box';
import figma from '@figma/code-connect';

figma.connect(
  SummaryBox,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=532-8772',
  {
    props: {},
    example: () => (
      <SummaryBox
        id="summary-box"
        heading="Key Information"
        items={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ]}
      />
    ),
  },
);
