import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { ReactNode } from 'react';
import FileInput from './file-input';
const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Wrapper, ...options });
const Wrapper = ({ children }: { children?: ReactNode }): JSX.Element => <div>{children}</div>;

describe('FileInput', () => {
  const defaultId = 'file-input1';
  const fileInputName = 'file-input-name';

  test('should render with no accessibility violations', async () => {
    const { container } = render(<FileInput id={defaultId} name={fileInputName} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a standard file input successfully', () => {
    const { baseElement } = customRender(<FileInput id={defaultId} name={fileInputName} />);
    expect(baseElement).toBeTruthy();
    const input = baseElement.querySelector('input') as HTMLInputElement;
    input.classList.contains('usa-file-input__input');
    input.parentElement?.classList.contains('usa-file-input__target');
    input.parentElement?.parentElement?.classList.contains('usa-file-input');
  });

  test('should render a disabled file input successfully', () => {
    const { baseElement } = customRender(
      <FileInput id={defaultId} name={fileInputName} disabled />,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a disabled file input successfully', async () => {
    const onChange = vi.fn();
    const { baseElement } = customRender(
      <FileInput id={defaultId} name={fileInputName} onChange={onChange} />,
    );

    const input = baseElement.querySelector(`#${defaultId}`) as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    await userEvent.upload(input, file);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(expect.any(Object));
    expect(input.files).toHaveLength(1);
    expect((input.files as FileList)[0]?.name).toEqual('hello.png');
  });
});
