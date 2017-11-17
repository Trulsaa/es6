const people = new Set();
people.add('Wes');
people.add('Snickers');
people.add('Kait');

for (const person of people) {
  console.log(person);
}

const students = new Set(['Wes', 'Kara', 'Tony']);

const dogs = ['Snickers', 'Sunny'];
const dogSet = new Set(dogs);
