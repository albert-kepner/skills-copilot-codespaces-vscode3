// Import the function to be tested
const isRelativelyPrime = require('./skills');

// Test cases
test('Test case 1: Numbers are relatively prime', () => {
  expect(isRelativelyPrime(5, 7)).toBe(true);
});

test('Test case 2: Numbers are not relatively prime', () => {
  expect(isRelativelyPrime(12, 18)).toBe(false);
});

test('Test case 3: One of the numbers is 1', () => {
  expect(isRelativelyPrime(1, 10)).toBe(true);
});

test('Test case 4: Both numbers are 1', () => {
  expect(isRelativelyPrime(1, 1)).toBe(true);
});