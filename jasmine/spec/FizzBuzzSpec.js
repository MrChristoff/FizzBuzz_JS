describe('FizzBuzz', function() {
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });
  describe('Knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe('Knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
  describe('Knows when a number is', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
  });
  describe('Knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });
  describe('Knows when a number is', function() {
    it('divisible by both 3 and 5', function() {
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });
  });
  describe('Knows when a number is NOT', function() {
    it('divisible by either 3 or 5', function() {
      expect(fizzbuzz.isDivisibleByThreeAndFive(7)).toBe(false);
    });
  });
  describe('Returns Fizz, BuZZ, or FizzBuzz', function() {
    it('Fizz', function() {
      expect(fizzbuzz.fizzOrBuzz(3)).toBe("Fizz");
    });
    it('Buzz', function() {
      expect(fizzbuzz.fizzOrBuzz(5)).toBe("Buzz");
    });
    it('FizzBuzz', function() {
      expect(fizzbuzz.fizzOrBuzz(15)).toBe("FizzBuzz");
    });
  });
});
