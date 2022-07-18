const fizzBuzz = (numbers) => {
  let results = [];
  numbers.forEach((number) => {
    results = [...results, identifyNumber(number)];
  });
  return results;
};

const identifyNumber = (number) => {
  if (isDivisibleByFive(number) && isDivisibleByThree(number)) return "FizzBuzz";
  if (isDivisibleByThree(number)) return "Fizz";
  if (isDivisibleByFive(number)) return "Buzz";
  return number;
};

const isDivisibleByFive = (number) => {
  return number % 5 == 0;
}

const isDivisibleByThree = (number) => {
  return number % 3 == 0;
}

exports.fizzBuzz = fizzBuzz;
exports.identifyNumber = identifyNumber;
