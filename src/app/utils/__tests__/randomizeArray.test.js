import '@testing-library/jest-dom/extend-expect';

import { randomizeArray } from 'utils/randomizeArray';

describe('utils/randomizeArray', () => {
  test('should return a new array, without modifying original one', () => {
    const originalArray = [1, 2, 3];
    const randomzedArray = randomizeArray(originalArray);

    expect(randomzedArray).toIncludeAllMembers(originalArray);
    expect(originalArray[0]).toBe(1);
    expect(originalArray[1]).toBe(2);
    expect(originalArray[2]).toBe(3);

    expect(randomizeArray()).toBe(null);
    expect(randomizeArray(1)).toBe(null);
  });
});
