import { render } from '@testing-library/react';
import Tag from './tag';

describe('Tag', () => {
  const defaultId = 'tag1';
  const loremText = 'Lorem Ipsum';

  test('should render a default tag successfully', () => {
    const { baseElement } = render(<Tag id={defaultId}>{loremText}</Tag>);
    expect(baseElement).toBeTruthy();
    const tag = baseElement.querySelector(`#${defaultId}`);
    expect(tag).not.toBeNull();
    expect(tag?.textContent).toEqual(loremText);
    expect(tag).toHaveProperty('id', defaultId);
    expect(tag?.classList).toContain('usa-tag');
  });

  test('should render a big tag successfully', () => {
    const { baseElement } = render(
      <Tag id={defaultId} size="Big">
        {loremText}
      </Tag>,
    );
    expect(baseElement).toBeTruthy();
    const tag = baseElement.querySelector(`#${defaultId}`);
    expect(tag).not.toBeNull();
    expect(tag?.textContent).toEqual(loremText);
    expect(tag).toHaveProperty('id', defaultId);
    expect(tag?.classList).toContain('usa-tag');
    expect(tag?.classList).toContain('usa-tag--big');
  });

  test('should render a tag with ligth background and indigo text color successfully', () => {
    const { baseElement } = render(
      <Tag id={defaultId} className="bg-base-darkest text-gold">
        {loremText}
      </Tag>,
    );
    expect(baseElement).toBeTruthy();
    const tag = baseElement.querySelector(`#${defaultId}`);
    expect(tag?.classList).toContain('usa-tag');
    expect(tag?.classList).toContain('text-gold');
    expect(tag?.classList).toContain('bg-base-darkest');
  });
});
