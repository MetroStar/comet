import { RangeSlider } from './range-slider';
import figma from '@figma/code-connect';

figma.connect(
  RangeSlider,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=361-4282',
  {
    props: {},
    example: () => {
      return <RangeSlider id="range" name="range" label="Slider" />;
    },
  },
);
