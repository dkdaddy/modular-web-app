// src/__tests__/greeting.test.ts
import { greet } from '../greeting';

describe('greet', () => {
  it('should return a greeting with the provided name', () => {
    const name = 'Alice';
    const expectedGreeting = 'Hello, Alice!';
    expect(greet(name)).toBe(expectedGreeting);
  });

  it('should handle an empty name', () => {
    const name = '';
    const expectedGreeting = 'Hello, !';
    expect(greet(name)).toBe(expectedGreeting);
  });

  it('should handle names with special characters', () => {
    const name = 'Bob!';
    const expectedGreeting = 'Hello, Bob!!';
    expect(greet(name)).toBe(expectedGreeting);
  });
});