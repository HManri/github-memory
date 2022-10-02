import { renderHook, act } from '@testing-library/react';
import { useTimer } from '../useTimer';

describe('useTimer hook', () => {
  test('should run correctly', async () => {
    const { result } = renderHook(() => useTimer(2));
    const [timer, startTimer, stopTimer] = result.current;

    expect(timer).toBe(2);

    await act(async () => {
      startTimer();
    });

    await act(() => new Promise((r) => setTimeout(r, 1000)));
    await act(() => new Promise((r) => setTimeout(r, 1000)));

    const [newTimer] = result.current;
    expect(newTimer).toBe(0);
  });
});
