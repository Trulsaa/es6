// Select all the list items on the page and convert to array
const listItems = [...document.querySelectorAll('[data-time]')];
// Filter for only the elements that contain the word 'flexbox'
const sum = listItems
  .filter((listItem) => listItem.textContent.includes('Flexbox'))
  // map down to a list of time strings
  .map(flexbox => flexbox.dataset.time)
  // map to an array of seconds
  .map(timeString =>
    Number(timeString.split(':')[0]) * 60 + Number(timeString.split(':')[1]) )
  // reduce to get total
  .reduce((sum, value) => sum + value);

console.log(sum);
// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!

// 1. Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

const greaterThanSeventy = numbers.filter(number => number > 70);
console.log(greaterThanSeventy);
