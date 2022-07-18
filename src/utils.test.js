const { fizzBuzz, identifyNumber } = require('./utils');

test('Should print 3 as Fizz', () => {
  const text = identifyNumber(3);
  expect(text).toBe('Fizz');
});

test('Should print 4 as 4', () => {
  const text = identifyNumber(4);
  expect(text).toEqual(4);
});

test('Should print 5 as Buzz', () => {
  const text = identifyNumber(5);
  expect(text).toBe('Buzz');
});

test('Should print 15 as FizzBuzz', () => {
  const text = identifyNumber(15);
  expect(text).toBe('FizzBuzz');
});

test("Should print [3,4,5] as ['Fizz, 4, Buzz']", () => {
  const values = fizzBuzz([3,4,5]);
  console.log(values);
  expect(values).toEqual(['Fizz', 4, 'Buzz']);
});

test("Should print [13,15,18] as ['13, FizzBuzz, Fizz']", () => {
  const values = fizzBuzz([13,15,18]);
  console.log(values);
  expect(values).toEqual([13, 'FizzBuzz', 'Fizz']);
});
