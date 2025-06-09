import { render } from '@testing-library/react';
import List, { ListItem } from './list';

describe('List', () => {
  const items = [
    { id: 'item-1', value: 'Item 1' },
    { id: 'item-2', value: 'Item 2' },
    { id: 'item-3', value: 'Item 3' },
  ] as ListItem[];

  test('should render the default component', () => {
    const { baseElement } = render(<List id="list-1" items={items} />);
    expect(baseElement.querySelector('#list-1')).toBeTruthy();
    expect(baseElement.querySelector('ul')).toBeTruthy();
    expect(baseElement.querySelectorAll('li')).toHaveLength(3);
  });

  test('should render the component as ordered', () => {
    const { baseElement } = render(<List id="list-1" type="ordered" items={items} />);
    expect(baseElement.querySelector('#list-1')).toBeTruthy();
    expect(baseElement.querySelector('ol')).toBeTruthy();
  });

  test('should render the component as unstyled', () => {
    const { baseElement } = render(<List id="list-1" variant="unstyled" items={items} />);
    expect(baseElement.querySelector('#list-1')).toBeTruthy();
    expect(baseElement.querySelector('ul')).toBeTruthy();
    expect(baseElement.querySelector('#list-1')).toHaveClass('usa-list--unstyled');
  });

  test('should render the component with custom class', () => {
    const { baseElement } = render(<List id="list-1" className="some-class" items={items} />);
    expect(baseElement.querySelector('#list-1')).toBeTruthy();
    expect(baseElement.querySelector('ul')).toBeTruthy();
    expect(baseElement.querySelector('#list-1')).toHaveClass('some-class');
  });
});
