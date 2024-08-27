import { MemorableDate } from './memorable-date';
import figma from '@figma/code-connect';

figma.connect(
  MemorableDate,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=354-1731',
  {
    props: {
      defaultDayValue: figma.enum('state', {
        standard: undefined,
        'default value': 19,
      }),
      defaultMonthValue: figma.enum('state', {
        standard: undefined,
        'default value': 1,
      }),
      defaultYearValue: figma.enum('state', {
        standard: undefined,
        'default value': 2000,
      }),
    },
    example: ({ defaultDayValue, defaultMonthValue, defaultYearValue }) => {
      return (
        <MemorableDate
          id="memorable-date"
          label="Date of birth"
          helperText="For example: January 19 2000"
          defaultDayValue={defaultDayValue}
          defaultMonthValue={defaultMonthValue}
          defaultYearValue={defaultYearValue}
        />
      );
    },
  },
);
