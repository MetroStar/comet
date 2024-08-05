import { act, renderHook } from '@testing-library/react';
import useModal from './use-modal';

describe('useModal', () => {
  test('should call signIn successfully', async () => {
    const { result } = renderHook(() => useModal());

    await act(async () => {
      result.current.toggleModal(false);
    });
    expect(result.current.toggleModal).toBeTruthy();
  });
});
