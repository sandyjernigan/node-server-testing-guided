const calculator = require ('./cal.js');

// test runner => the library that runs the tests
// assertion library => the library that handles the tests cases (the details)

// skip test by putting an x first
xit('runs the tests', () => {
  // assertions
   expect(true).toBe(true);
});

describe('the cal', () => {
  describe('the add method', () => {
    it('should add two numbers', () => {
      const { add } = calculator;

      expect(add(2,2)).toBe(4);
      expect(add(2,1)).toBe(3);
      expect(add(-2,4)).toBe(2);
    });

    it('should return 0 on no arguments', () => {
      const { add } = calculator;
      
      expect(add()).toBe(0);
    });
  })
})