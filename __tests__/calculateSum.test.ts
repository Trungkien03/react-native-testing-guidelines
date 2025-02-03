import {calculateSum} from '../src/utils/calculateSum';

describe('Test CalculateSum', () => {
  test('adds two numbers correctly', () => {
    expect(calculateSum(2, 3)).toBe(5);
  });
});
