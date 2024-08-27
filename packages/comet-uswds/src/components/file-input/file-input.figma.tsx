import { FileInput } from './file-input';
import figma from '@figma/code-connect';

figma.connect(
  FileInput,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=325-1575',
  {
    props: {
      label: figma.enum('Type', {
        standard: 'Input accepts a single file',
        multiple: 'Input accepts multiple files',
      }),
      multiple: figma.enum('Type', {
        standard: false,
        multiple: true,
      }),
    },
    example: ({ label, multiple }) => {
      return <FileInput id="file-input" label={label} multiple={multiple} />;
    },
  },
);
