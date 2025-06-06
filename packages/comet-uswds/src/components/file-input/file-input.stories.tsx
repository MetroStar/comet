import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react-vite';
import { FileInput, FileInputProps } from './file-input';
import { useFileInput } from '../../hooks';
import Button from '../button';

const meta: Meta<typeof FileInput> = {
  title: 'USWDS/Forms/File Input',
  component: FileInput,
  argTypes: {
    id: { required: true },
    name: { required: true },
    multiple: { type: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

export const Standard = {
  args: {
    id: 'file-input-1',
    name: 'file-input-1',
    multiple: false,
    required: false,
    label: 'Select a file',
    helperText: 'Input accepts a single file',
    disabled: false,
  },
  render: (args: FileInputProps) => <FileInput {...args} />,
};

export const Multiple = {
  args: {
    id: 'file-input-2',
    name: 'file-input-2',
    multiple: true,
    required: false,
    label: 'Select files',
    helperText: 'Input accepts multiple files',
    disabled: false,
  },
  render: (args: FileInputProps) => <FileInput {...args} />,
};

export const CustomClear = {
  args: {
    id: 'file-input-1',
    name: 'file-input-1',
    multiple: false,
    required: false,
    label: 'Select a file',
    helperText: 'Input accepts a single file',
    disabled: false,
  },
  render: (args: FileInputProps) => {
    const { clear } = useFileInput();
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
      // eslint-disable-next-line no-console
      console.log(file);
    }, [file]);

    return (
      <>
        <div className="padding-bottom-1">
          <FileInput
            onChange={(event) => {
              const target = event.target as HTMLInputElement;
              const files = target?.files;
              if (files) {
                setFile(files[0]);
              }
            }}
            {...args}
          />
        </div>
        <div>
          <Button
            id="clear-btn"
            onClick={() => {
              clear(args.id);
              setFile(null);
            }}
          >
            Clear
          </Button>
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};
