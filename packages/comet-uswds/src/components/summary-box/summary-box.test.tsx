import { render } from '@testing-library/react';
import SummaryBox from './summary-box';

describe('SummaryBox', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<SummaryBox id="summary1" heading="heading" items={[]} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render a summary box with items successfully', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const { baseElement } = render(<SummaryBox id="summary1" heading="heading" items={items} />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-summary-box')).toBeTruthy();
    expect(baseElement.querySelector('ul')).toBeTruthy();
    expect(baseElement.querySelectorAll('li').length).toBe(3);
  });
});
