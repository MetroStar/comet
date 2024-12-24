import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toast, { ToastProps } from './toast';
import Button from '../../../../comet-uswds/src/components/button/button';

const meta: Meta<typeof Toast> = {
  title: 'Extras/Toast',
  component: Toast,
  argTypes: {
    id: { control: 'text' },
    message: { control: 'text' },
    duration: { control: 'number' },
    type: { control: 'select', required: true },
    onClose: { action: 'close' },
    allowClose: { control: 'boolean' },
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Toast> = (args: ToastProps) => {
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = () => {
    const newToast = {
      key: args.id,
      id: `toast-${args.type}`,
      message: `${!args.message ? 'Default toast notification for ' + args.type : args.message}`,
      type: `${args.type}`,
      duration: `${!args.duration ? 3000 : args.duration}`,
      allowClose: args.allowClose,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button id="toast-button" onClick={() => addToast()}>
        Send Toast
      </Button>

      <div>
        {toasts.map((toast) => (
          <Toast
            key={toast['id']}
            id={toast['id']}
            message={toast['message']}
            type={toast['type']}
            duration={toast['duration']}
            allowClose={toast['allowClose']}
          />
        ))}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'toast-info',
  message: 'This is a toast notification',
  type: 'info',
  duration: 3000,
  allowClose: true,
};
