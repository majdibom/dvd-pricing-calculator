const { calculateTotalPrice } = require('../src/calculator');

describe('DVD Pricing Calculator', () => {
  test.each([
    ['Back to the Future 1\nBack to the Future 2\nBack to the Future 3', 36],
    ['Back to the Future 1\nBack to the Future 3', 27],
    ['Back to the Future 1\nForward to the Past full stack et front 3', 35],
    [
      'Back to the Future 1\nBack to the Future 2\nBack to the Future 3\nBack to the Future 2',
      48,
    ],
    [
      'Back to the Future 1\nBack to the Future 2\nBack to the Future 3\nLa chèvre',
      56,
    ],
    ['Back to the Future 1\nBack to the Future 1\nBack to the Future 1', 45], // No discount, same movie
    ['Back to the Future 1\nLa chèvre', 35], // One BTTF movie, one non-BTTF movie
  ])('calculates the total price for a basket: %s', (basket, expectedPrice) => {
    expect(calculateTotalPrice(basket)).toBe(expectedPrice);
  });
});
