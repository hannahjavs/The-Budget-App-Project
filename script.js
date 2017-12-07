// console.log('hello world');

///////////////////////////////////////////////////////////////////
// LECTURE: VARIABLES
/*
const name = 'John';
console.log(name);

const lastName = 'Smith';
console.log(lastName);

const age = 26;
console.log(age);

const fullAge = true;
console.log(fullAge);
*/

///////////////////////////////////////////////////////////////////
// LECTURE: VARIABLES 2
/*
const name = 'Hannah';
let age = 27;
// console.log(name + age); // console => Hannah27
// console.log(age + age); // console => 27 + 27

let job, isMarried;

// console.log(job);

job = 'Developer';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');

// Changing the values - the code is read from top to bottom.
// It is a sequence of instructions from line to line
// The changes are only reflected after the first log.
age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');

// Prompt will create pop up box!
// const lastName = prompt('What is the last name?');
// console.log(lastName); // This prints what is written in the pop up prompt box and prints in the console

// This will prit the lastName to its own pop up window
alert(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');
*/





///////////////////////////////////////////////////////////////////
// LECTURE: OPERATORS
/*
const now = 2017;
let birthYear = now - 27;

birthYear = now - 27 * 2; // mutating the value => 1963

console.log('Hannah was born in ' + birthYear);

let ageJack = 30;
let ageHannah = 30;

ageJack = ageHannah = ( 3 + 5 ) * 4 - 6;
//ageJack = ageHannah = 26;
//ageJack = 26;

// THESE ARE OPERATORS: *= AND ++
// INCREMENTING two to Jack's age
ageJack++; // this is the same as writing ageJack = age + 1;
ageHannah *= 2; // same as ageHannah = ageHannah * 2;

console.log(ageJack);
console.log(ageHannah);
*/


///////////////////////////////////////////////////////////////////
// LECTURE: IF/ELSE STATEMENTS
/*
const name = 'Hannah';
// const age = 26;
let isMarried = 'no';

// The Condition:
// returns a BOOLEAN
if (isMarried === 'yes') {
  //if(false then else will be executed)
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon ...NOT');
}

// BOOLEAN
isMarried = true;

if(isMarried) {
  console.log('YES!');
} else {
  console.log('NO!');
}

if(isMarried) {
  console.log('YES!');
}

// DONT USUALLY USED DOUBLE EQUALS - CREATES BUGS
// The DOUBLE EWQUALS means the number is equal to the string
// Theyre the same thing - TYPE COERCION
if(23 == "23") {
console.log('Something to print...');
}

// nothing will print here because of TRIPLE EQUALS
// it see the numer as a number and the string as a string
if(23 === "23") {
  console.log('Something to print...');
}
*/


///////////////////////////////////////////////////////////////////
// LECTURE: BOOLEAN LOGIC AND SWITCH

// AND(&&) => true if ALL are true
// OR(||) => true if ONE is true
// NOT(!) => inverts true/false value
/*
const age = 28; // => 'Jack is a little boy.'
// const age = 28; // => 'Jack is a man'
// const age = 30; // => Jack is a young man'
if(age <= 28) {
  console.log('Jack is a little boy.');
}  else if(age >= 28 && age < 30) {
  console.log('Jack is a young man');
} else {
  console.log('Jack is a man.');
}


// SWITCH STATEMENT
// Is a more elegant way of writing code

let job = 'developer';

job = prompt('What does Jack do?');

switch(job) {
  case 'developer':
    console.log('Jack develops code');
    break;
  case 'driver':
    console.log('Jack drives in London');
    break;
  case 'cop':
    console.log('Jack helps fight crime');
    break;
  default:
    console.log('Jack does something else');
}
*/


///////////////////////////////////////////////////////////////////
// CODING CHALLENGE 1

// Jack and a friend invented a simple game where the player with the highest value of his height (In cm) plus five times his age wins.

// 1. Create variables for the heights and ages of two friends and assign them some values

const heightJack = 125;
const ageJack = 28;

const heightHannah = 125;
const ageHannah = 28;

const heightMike = 125;
const ageMike = 37;

// 2. Calculate their scores
const scoreJack = heightJack + (ageJack + 5);
const scoreHannah = heightHannah + (ageHannah + 5);
const scoreMike = heightMike + (ageMike + 5);

console.log(scoreJack);
console.log(scoreHannah);
console.log(scoreMike);

// 3. Decide who wins and print the winner to the console. Include the score in the string that you output to the consolde. Don't forget that there can be a draw (both players with the same score).


if(scoreJack > scoreHannah) {
  console.log('Jack wins with a score ' + scoreJack );
}  else if(scoreJack < scoreHannah ) {
  console.log('Hannah wins with a score ' + scoreHannah);
} else if (scoreJack === scoreHannah && scoreJack === scoreMike) {
  console.log('its a draw');
} else {
  console.log('Mike wins with a score of ' + scoreMike);
}

// 4. EXTRA: Add a third player and now decide who wins. HINT: you will need the && operator to take the decision.
