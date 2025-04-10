// src/date-display.ts
export function displayCurrentDate(elementId: string): void {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = `Today's date is: ${dateString}`;
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  }