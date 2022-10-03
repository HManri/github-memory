import { renderHook, act } from '@testing-library/react';
import { useGetImages } from 'hooks/useGetImages';
import * as randomizeUtils from 'utils/randomizeArray';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: '1', avatar_url: 'frodo', login: 'lfrodo' },
        { id: '2', avatar_url: 'sam', login: 'lsam' },
        { id: '3', avatar_url: 'merry', login: 'lmerry' },
      ]),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('useGetImages hook', () => {
  test('should run correctly', async () => {
    randomizeUtils.randomizeArray = jest.fn((arr) => arr);

    const expectedResult = [
      { id: '1', imageSrc: 'frodo', imageAlt: 'lfrodo' },
      { id: '2', imageSrc: 'sam', imageAlt: 'lsam' },
      { id: '3', imageSrc: 'merry', imageAlt: 'lmerry' },
    ];

    const { result } = renderHook(() => useGetImages());
    const [getImages, isLoading] = result.current;

    const spyGetImages = jest.fn(getImages);

    expect(isLoading).toBeFalsy();

    await act(async () => {
      const result = await spyGetImages();
      expect(result).toEqual(expectedResult);
    });

    expect(isLoading).toBeFalsy();
    expect(spyGetImages).toHaveBeenCalledTimes(1);
  });
});
