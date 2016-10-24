describe('FizzBuzz', function() {
  var FIzzBuzz;
  describe('Knows when a number is', function() {
    it('divisible by 3', function() {
      FizzBuzz = new FizzBuzz();
      expect(isDivisibleByThree(3)).toBe(true);      
    });
  });
});
