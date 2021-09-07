// LECTURE: Values and Variables

let country = 'Brazil';
const continent = 'South America';
let population = 211;

// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: Data Types

const isIsland = false;
let language;
console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland
);

// LECTURE: let, const and var
language = 'Portuguese';
console.log(language);

// LECTURE: Basic Operators
const halfPopulation = population / 2;
const populationIncrease = population + 1;
const isPopulationBiggerThanFinland = population > 6;
const morePopulationThanAverage = population > 33;
let description = `${country} is in ${continent}, and it's ${population} millions population speaks ${language}`;
console.log(
  halfPopulation,
  populationIncrease,
  isPopulationBiggerThanFinland,
  morePopulationThanAverage
);
console.log(description);

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and it's ${population} millions population speaks ${language}`;

// LECTURE: Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  const belowAverage = 33 - population;
  console.log(
    `${country}'s population is ${belowAverage} millions below average`
  );
}

// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(
//   prompt('How many neighbour countries does your country have?')
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// LECTURE: Logical Operators

if (population < 50 && language === 'English' && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement

switch (language) {
  case 'Chinese':
    console.log('MOST number of native speakers');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// LECTURE: The Conditional (Ternary) Operator

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
