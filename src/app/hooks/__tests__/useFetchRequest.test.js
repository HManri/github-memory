import { renderHook, act } from '@testing-library/react';
import { useFetchRequest } from 'hooks/useFetchRequest';

describe('useFetchRequest hook', () => {
  test('should run correctly', async () => {
    const mockFunction = jest.fn();
    const { result, rerender } = renderHook(() => useFetchRequest(mockFunction, { foo: 'bar' }));
    const [hookFunction, isLoading] = result.current;

    expect(isLoading).toBeFalsy();

    await act(async () => {
      await hookFunction();
    });

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith({ foo: 'bar' });
  });
});
