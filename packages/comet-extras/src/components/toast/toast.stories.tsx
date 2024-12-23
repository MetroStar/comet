import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toast, { ToastProps } from './toast';
import Button from '../../../../comet-uswds/src/components/button/button';
import ButtonGroup from '../../../../comet-uswds/src/components/button-group/button-group';

const meta: Meta<typeof Toast> = {
  title: 'Extras/Toast',
  component: Toast,
  argTypes: {
    id: { control: false },
    message: { control: 'text' },
    duration: { control: 'number' },
    type: { control: false },
    onClose: { action: 'close' },
    allowClose: { control: 'boolean' },
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Toast> = (args: ToastProps) => {
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = (type: string) => {
    const newToast = {
      key: args.id,
      id: `toast-${type}`,
      message: `${!args.message ? 'Default toast notification for ' + type : args.message}`,
      type: `${type}`,
      duration: `${!args.duration ? 3000 : args.duration}`,
      allowClose: args.allowClose,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  return (
    <div style={{ padding: '16px' }}>
      <ButtonGroup>
        <Button id="toast-info-button" onClick={() => addToast('info')}>
          Info Toast
        </Button>
        <Button id="toast-warning-button" onClick={() => addToast('warning')}>
          Warning Toast
        </Button>
        <Button id="toast-success-button" onClick={() => addToast('success')}>
          Success Toast
        </Button>
        <Button id="toast-error-button" onClick={() => addToast('error')}>
          Error Toast
        </Button>
        <Button id="toast-emergency-button" onClick={() => addToast('emergency')}>
          Emergency Toast
        </Button>
      </ButtonGroup>

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

export const Standard = Template.bind({});
