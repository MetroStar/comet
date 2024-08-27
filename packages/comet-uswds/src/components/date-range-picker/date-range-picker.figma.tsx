import DatePicker from '../date-picker';
import { DateRangePickerContainer } from './date-range-picker';
import figma from '@figma/code-connect';

figma.connect(
  DateRangePickerContainer,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=262-6620',
  {
    props: {},
    example: () => {
      return (
        <DateRangePickerContainer id="date-picker">
          <DatePicker id="date-start" name="date-start" label="Start date" />
          <DatePicker id="date-end" name="date-end" label="End date" />
        </DateRangePickerContainer>
      );
    },
  },
);
