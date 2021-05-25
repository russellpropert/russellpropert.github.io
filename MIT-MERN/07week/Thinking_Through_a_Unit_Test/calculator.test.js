const calculator = require('./calculator.js');
const number1 = 6;
const number2 = 2;

describe('calculator', () => {
  it('should add two numbers', () => {
    const operator = '+';
    expect(calculator(number1, operator, number2)).toBe(8);
  });

  it('should subtract a number from another', () => {
    const operator = '-';
    expect(calculator(number1, operator, number2)).toBe(4);
  });
  
  it('should multiply two numbers', () => {
    const operator = '*';
    expect(calculator(number1, operator, number2)).toBe(12);
  });

  it('should divide one number by another', () => {
    const operator = '/';
    expect(calculator(number1, operator, number2)).toBe(3);
  });
});