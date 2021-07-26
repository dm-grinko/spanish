const { add } = require('../../dist');

describe('add function', () => {
  test('1 + 2 == 3', () => {
    expect(add(1, 2)).toEqual(3);
  });
});

