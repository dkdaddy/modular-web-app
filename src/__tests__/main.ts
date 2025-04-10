import { hello } from '../main';

describe('main', () => {
  it('say hello', () => {
    expect(hello()).toBe('hello');
  });

});