/* global test, expect */

test('toBe', () => {
  // similar to ===
  expect(1 + 1).toBe(2);
  expect(true).toBe(true);
  expect({}).not.toBe({});
});

test('toEqual', () => {
  const subject = { name: 'Obi-Wan Kenobi' };
  const actual = {
    name: 'Obi-Wan Kenobi'
  };
  expect(subject).toEqual(actual);

  const listOfApprentice = [
    { name: 'Anakin Skywalker' },
    { name: 'Count Dooku' },
    { name: 'Luke Skywalker' }
  ];
  const listActual = [
    { name: 'Anakin Skywalker' },
    { name: 'Count Dooku' },
    { name: 'Luke Skywalker' }
  ];
  expect(listOfApprentice).toEqual(listActual);
});

test('toMatchObject', () => {
  const subject = { name: 'Obi-Wan Kenobi' };
  const actual = {
    name: 'Obi-Wan Kenobi'
  };
  expect(subject).toMatchObject(actual);

  const listOfApprentice = [
    { name: 'Anakin Skywalker' },
    { name: 'Count Dooku' },
    { name: 'Luke Skywalker' }
  ];
  const listActual = [
    { name: 'Anakin Skywalker' },
    { name: 'Count Dooku' },
    { name: 'Luke Skywalker' }
  ];
  expect(listOfApprentice).toMatchObject(listActual);
});
