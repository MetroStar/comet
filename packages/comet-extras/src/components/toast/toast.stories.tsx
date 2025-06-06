import React, { useState } from 'react';
import { Meta } from '@storybook/react-vite';
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
    placement: { control: 'select', required: true },
    onClose: { action: 'close' },
    allowClose: { control: 'boolean' },
    className: { control: false },
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};
export default meta;

export const Default = {
  args: {
    id: 'toast-info',
    message: 'This is a toast notification',
    type: 'info',
    placement: 'topRight',
    duration: 3000,
    allowClose: true,
  },
  render: (args: ToastProps) => {
    const [toasts, setToasts] = useState<any[]>([]);

    const addToast = () => {
      const newToast = {
        key: args.id,
        id: `toast-${args.type}`,
        message: !args.message ? 'Default toast notification for ' + args.type : args.message,
        type: args.type,
        placement: args.placement,
        duration: !args.duration ? 3000 : args.duration,
        allowClose: args.allowClose,
      };
      setToasts((prev) => [...prev, newToast]);
    };

    return (
      <div style={{ padding: '16px' }}>
        <Button id="toast-button" onClick={() => addToast()}>
          Send Toast
        </Button>

        {toasts.map((toast) => (
          <Toast
            key={toast.key}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            placement={toast.placement}
            duration={toast.duration}
            allowClose={toast.allowClose}
          />
        ))}
      </div>
    );
  },
};
