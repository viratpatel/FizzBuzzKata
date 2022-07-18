const { fizzBuzz, identifyNumber } = require('./utils');

test('Should print 3 as Fizz', () => {
  const text = identifyNumber(3);
  expect(text).toBe('Fizz');
});

test('Should print 4 as 4', () => {
  const text = identifyNumber(4);
  expect(text).toEqual('Fizz');
});

test('Should print 5 as Buzz', () => {
  const text = identifyNumber(5);
  expect(text).toBe('Buzz');
});

