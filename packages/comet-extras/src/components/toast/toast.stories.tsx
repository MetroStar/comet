import { Meta, StoryFn } from '@storybook/react';
import Toast, { ToastProps } from './toast';

const meta: Meta<typeof Toast> = {
  title: 'Extras/Toast',
  component: Toast,
  argTypes: {
    id: { control: 'text' },
    message: { control: 'text' },
    duration: { control: 'number' },
    type: { control: 'text' },
    onClose: { action: 'close' },
  },
};
export default meta;

const Template: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Info = Template.bind({});
Info.args = {
  id: 'toast-info',
  message: 'Toast info notification bar',
  duration: 3000,
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  id: 'toast-success',
  message: 'Toast success notification bar',
  duration: 3000,
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  id: 'toast-error',
  message: 'Toast error notification bar',
  duration: 3000,
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  id: 'toast-warning',
  message: 'Toast warning notification bar',
  duration: 3000,
  type: 'warning',
};

export const Emergency = Template.bind({});
Emergency.args = {
  id: 'toast-emergency',
  message: 'Toast emergency notification bar',
  duration: 3000,
  type: 'emergency',
};
