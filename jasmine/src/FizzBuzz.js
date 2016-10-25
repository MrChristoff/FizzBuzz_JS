var FizzBuzz = function(){};
FizzBuzz.prototype.isDivisibleByThree = function (number) {
  return (number % 3 === 0);
};
FizzBuzz.prototype.isDivisibleByFive = function (number) {
  return (number % 5 === 0);
};
FizzBuzz.prototype.isDivisibleByThreeAndFive = function (number) {
  // return (number % 3 === 0 && number % 5 === 0);
  return (number % 15 === 0);
};

FizzBuzz.prototype.fizzOrBuzz = function (number) {
  if (this.isDivisibleByThreeAndFive(number)) {
    return "FizzBuzz"
} else if (this.isDivisibleByThree(number)) {
    return "Fizz"
} else if (this.isDivisibleByFive(number)) {
    return "Buzz"
} else {
    return number
}
};
