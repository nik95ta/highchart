import generateNumbers from './generateNumbers';

describe('generateNumbers', () => {
  test('returns an array of the specified size', () => {
    const arraySize = 10;
    const numbers = generateNumbers(arraySize);
    expect(numbers).toHaveLength(arraySize);
  });

  test('contains numbers within the specified range', () => {
    const arraySize = 5;
    const maxValue = 50;
    const numbers = generateNumbers(arraySize, maxValue);
    numbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(maxValue);
    });
  });

  test('uses default parameters when none are provided', () => {
    const numbers = generateNumbers();
    expect(numbers).toHaveLength(12);
    numbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(20);
    });
  });
});
