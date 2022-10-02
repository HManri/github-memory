import { renderHook, act } from '@testing-library/react';
import { useTimer } from 'hooks/useTimer';

describe('useTimer hook', () => {
  test('should run correctly', async () => {
    const { result } = renderHook(() => useTimer(2));
    const [timer, startTimer, stopTimer] = result.current;

    expect(timer).toBe(2);

    act(() => {
      startTimer();
    });

    await act(() => new Promise((r) => setTimeout(r, 1000)));
    act(() => {
      stopTimer();
    });
    const [partialTimer] = result.current;
    expect(partialTimer).toBe(1);

    act(() => {
      startTimer();
    });
    await act(() => new Promise((r) => setTimeout(r, 1000)));

    const [finalTimer] = result.current;

    expect(finalTimer).toBe(0);
  });
});
