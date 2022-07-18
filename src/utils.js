const fizzBuzz = (numbers) => {
  let results = [];
  numbers.forEach((number) => {
    results = [...results, identifyNumber(number)];
  });
  return results;
};

const identifyNumber = (number) => {
  if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
};

exports.fizzBuzz = fizzBuzz;
exports.identifyNumber = identifyNumber;
