import { StepIndicator } from './step-indicator';
import figma from '@figma/code-connect';

figma.connect(
  StepIndicator,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=532-7542',
  {
    props: {
      hideLabels: figma.enum('Type', {
        'No labels': true,
      }),
      showCounters: figma.enum('Type', {
        Counters: true,
      }),
      centerCounters: figma.enum('Type', {
        Centered: true,
      }),
      showSmallCounters: figma.enum('Type', {
        'Small counters': true,
      }),
    },
    example: ({ hideLabels, showCounters, centerCounters, showSmallCounters }) => (
      <StepIndicator
        id="step-indicator"
        hideLabels={hideLabels}
        showCounters={showCounters}
        centerCounters={centerCounters}
        showSmallCounters={showSmallCounters}
        steps={['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet']}
        currentStep={3}
      />
    ),
  },
);
