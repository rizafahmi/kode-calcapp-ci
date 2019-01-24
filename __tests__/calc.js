/* global test, expect */

// Lesson 4.3
const calc = require('../calc.js');

test('the sum of 1 and 3 is 4', () => {
  const actual = calc.add(1, 3);
  const expected = 4;
  expect(actual).toBe(expected);
});

// Lesson 4.4
test('the sum of 3 and "3" is 6', () => {
  const actual = calc.add(3, '3');
  const expected = 6;
  expect(actual).toBe(expected);
});

test('the sum of 3 and "name" is false', () => {
  const actual = calc.add(3, 'name');
  const expected = false;
  expect(actual).toBe(expected);
});

test('the sum of 3.14 and 5 is 8.14', () => {
  const actual = calc.add(3.14, 5);
  const expected = 8.14;
  expect(actual).toBe(expected);
});

test('the sum of -3 and 1 is -2', () => {
  const actual = calc.add(-3, 1);
  const expected = -2;
  expect(actual).toBe(expected);
});

test('calculates the difference of 35 and 3 is 32', () => {
  const actual = calc.sub(35, 3);
  const expected = 32;
  expect(actual).toBe(expected);
});

test('calculates the product of 12 and 12 is 144', () => {
  const actual = calc.mul(12, 12);
  const expected = 144;
  expect(actual).toBe(expected);
});

test('calculates the quotient of 10 and 2 is 5', () => {
  const actual = calc.div(10, 2);
  const expected = 5;
  expect(actual).toBe(expected);
});

test('calculates the quotient of 13 and 2 is 6.5', () => {
  const actual = calc.div(13, 2);
  const expected = 6.5;
  expect(actual).toBe(expected);
});
