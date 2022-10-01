import { useEffect, useState, useCallback, useRef } from 'react';

const STATUS = {
  RUNNING: 'RUNNING',
  STOPPED: 'STOPPED',
};

export function useTimer(seconds) {
  const [timer, setTimer] = useState(seconds);
  const [status, setStatus] = useState(STATUS.STOPPED);
  const timeoutRef = useRef();

  const startTimer = useCallback(() => {
    setStatus(STATUS.RUNNING);
  }, []);

  const stopTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      setStatus(STATUS.STOPPED);
    }
  }, []);

  useEffect(() => {
    if (status === STATUS.RUNNING && timer > 0) {
      timeoutRef.current = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer, status]);

  return [timer, startTimer, stopTimer];
}
