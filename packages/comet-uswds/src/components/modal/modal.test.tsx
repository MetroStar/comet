import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { JSX, ReactNode } from 'react';
import Modal from './modal';

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Wrapper, ...options });
const Wrapper = ({ children }: { children?: ReactNode }): JSX.Element => <div>{children}</div>;

describe('Modal', () => {
  const footer = (
    <button type="button" className="usa-button" data-close-modal>
      Close
    </button>
  );

  test('should render a default modal with no footer successfully', () => {
    const { baseElement } = customRender(
      <Modal id="modal1" heading="Modal 1">
        Body
      </Modal>,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a small modal successfully', () => {
    const { baseElement } = customRender(
      <Modal id="modal1" size="small" heading="Modal 1" footer={footer}>
        Body
      </Modal>,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a large modal successfully', () => {
    const { baseElement } = customRender(
      <Modal id="modal1" size="large" heading="Modal 1" footer={footer}>
        Body
      </Modal>,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a default modal with no footer successfully', () => {
    const { baseElement } = customRender(
      <Modal id="modal1" heading="Modal 1">
        Body
      </Modal>,
    );
    expect(baseElement).toBeTruthy();
  });
});
