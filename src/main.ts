// src/main.ts
import { greet } from './greeting';
import { displayCurrentDate } from './date-display';

export function hello() { console.log('hello'); return 'hello'}

function q() {
  console.log(greet('me'))
}
document.addEventListener('DOMContentLoaded', () => {
  const greetingElement = document.getElementById('greeting');
  const dateElement = document.getElementById('date-display');
  const userName = 'London';

  if (greetingElement) {
    greetingElement.textContent = greet(userName);
  } else {
    console.error("Element with ID 'greeting' not found.");
  }

  if (dateElement) {
    displayCurrentDate(dateElement.id);
  }
});