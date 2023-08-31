import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import DataTable from './data-table';

describe('DataTable', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<DataTable id="table-1" columns={[]} data={[]}></DataTable>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
