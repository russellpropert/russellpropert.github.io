const { TestWatcher } = require('@jest/core');
const hello = require('./hello');
describe('My hello', () => {
  test('works', () => {
    expect(hello.hello()).toEqual('Hello World');
  });
});