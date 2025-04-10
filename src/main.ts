// src/main.ts
import { greet } from './greeting.js';
import { displayCurrentDate } from './date-display.js';

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