import { act, renderHook } from '@testing-library/react';
import useHeader from './use-header';

describe('useModal', () => {
  test('should call header on successfully', async () => {
    const { result } = renderHook(() => useHeader());

    await act(async () => {
      const body = document.createElement('body');
      result.current.on(body);
    });
    expect(result.current.on).toBeTruthy();
  });

  test('should call header off successfully', async () => {
    const { result } = renderHook(() => useHeader());

    await act(async () => {
      const body = document.createElement('body');
      result.current.off(body);
    });
    expect(result.current.off).toBeTruthy();
  });
});
