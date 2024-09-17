import { act, renderHook } from '@testing-library/react';
import useFileInput from './use-file-input';

describe('useFileInput', () => {
  test('should call clear successfully', async () => {
    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('file-input');
    });
    expect(result.current.clear).toBeTruthy();
  });
});
