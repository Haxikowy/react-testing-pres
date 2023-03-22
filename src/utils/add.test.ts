import { add } from './add';

describe('add', () => {
  it('a = 1, b = 2 outputs 3', () => {
    // ARRANGE
    const a = 1;
    const b = 2;

    // ACT
    const result = add(a, b);

    // ASSERT
    expect(result).toEqual(3);
  });
});
