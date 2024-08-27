import { ProcessList } from './process-list';
import figma from '@figma/code-connect';

figma.connect(
  ProcessList,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=423-2344',
  {
    props: {
      steps: figma.enum('type', {
        default: [
          {
            children: (
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
                pharetra gravida, orci magna rhoncus neque.
              </p>
            ),
            heading: 'Start a process',
          },
          {
            children: (
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
                pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
                Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.
                Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus
                pharetra posuere sapien.
              </p>
            ),
            heading: 'Proceed to the second step',
          },
          {
            children: (
              <p>
                Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.
                Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus
                pharetra posuere sapien.
              </p>
            ),
            heading: 'Complete the step-by-step process',
          },
        ],
        'no text and custom sizing': [
          {
            heading: 'Start a process',
            children: null,
            headingElementName: 'h3',
          },
          {
            heading: 'Proceed to the second step',
            children: null,
            headingElementName: 'h3',
          },
          {
            heading: 'Complete the step-by-step process',
            children: null,
            headingElementName: 'h3',
          },
        ],
      }),
    },
    example: ({ steps }) => <ProcessList id="process-list" steps={steps} />,
  },
);
