const greet = require('./greet.js');

describe('greet', () => {

  test('Returns name in string', () => {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth.');
  });

  test('Handles null value with default value of "there"', () => {
    expect(greet(null)).toBe('Hello, there.');
  });

  test('Converts to uppercase when name is uppercase', () => {
    expect(greet('JOSE')).toBe('HELLO, JOSE!');
  });

  test('Ouputs two names in an array', () => {
    const twoNameArray = ['Jose','Pep'];
    expect(greet(twoNameArray)).toBe('Hello, Jose, Pep.');
  })

  test('Outputs any number of names in an array', () => {
    const fourNameArray = ['Alex','Arsene','Jose','Zidane'];
    expect(greet(fourNameArray)).toBe('Hello, Alex, Arsene, Jose, Zidane.');
  });

});