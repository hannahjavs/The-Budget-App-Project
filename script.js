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

/*
///////////////////////////////////////////////////////////////////
// CODING CHALLENGE 1

// Jack and a friend invented a simple game where the player with the highest value of his height (In cm) plus five times his age wins.

// 1. Create variables for the heights and ages of two friends and assign them some values
const heightJack = 125;
const heightHannah = 125;
const ageJack = 28;
const ageHannah = 28;
const heightMike = 125;
const ageMike = 37;

// const people = [{
//   name: 'Hannah',
//   age: 26,
//   'height': 125
// },{
//   name: 'Jack',
//   age: 28,
//   'height': 130
// }, {
//   name: 'Beans',
//   age: 7,
//   'height': 14
// }
// ];
//
// people.forEach(person => {
//   let score = 0;
//   let name = null;
//   if((person.age + person.height) > score) {
//     score = person.age + person.height;
//     name = person.name;
//   }
// });

// 2. Calculate their scores
const scoreJack = heightJack + 5 + ageJack;
const scoreHannah = heightHannah + 5 + ageHannah;
const scoreMike = heightMike + 5 + ageMike;

console.log(scoreJack);
console.log(scoreHannah);
console.log(scoreMike);

// 3. Decide who wins and print the winner to the console. Include the score in the string that you output to the consolde. Don't forget that there can be a draw (both players with the same score).

if(scoreJack > scoreHannah) {
  console.log('Jack wins with a score ' + scoreJack + ' points!');
}  else if(scoreJack < scoreHannah ) {
  console.log('Hannah wins with a score ' + scoreHannah);
} else if (scoreJack === scoreHannah && scoreJack === scoreMike) {
  console.log('its a draw');
} else {
  console.log('Mike wins with a score of ' + scoreMike);
}

// 4. EXTRA: Add a third player and now decide who wins. HINT: you will need the && operator to take the decision.

*/

/*
///////////////////////////////////////////////////////////////////
// Lecture: Functions

// calculateAge is the name of the Functions
// The argument of the function is the 'yearOfBirth'
function calculateAge(yearOfBirth) {
  // define a variable
  var age = 2016 - yearOfBirth;
  return age;
}

// to call the function we need to write it out and pass in the informationt hat we want to pass.
// need to create a variable for it to be stored - in this case it will be ageJohn:
var ageJohn = calculateAge(1991); // so this will be 2016 - 1990 and then it will give you the age of ageJohn
var ageMike = calculateAge(1969);
var ageJack = calculateAge(1989);
var ageHannah = calculateAge(1990);
console.log('John is ' + ageJohn + ' years old ');
console.log('Mike is ' + ageMike + ' years old ');
console.log('Jack is ' + ageJack + ' years old ');
console.log('Hannah is ' + ageHannah + ' years old ');


// Calculate how many years someone has left until retirement:
function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  // console.log(age);
  var retirement = 65 - age;

  if(retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years ');
  } else {
    console.log(name + ' is already retired!');
  }
}
// here we have two parameters passed into the argument:
yearsUntilRetirement('John', 1950);
yearsUntilRetirement('Hannah', 1990);
yearsUntilRetirement('Jack', 1989);
yearsUntilRetirement('Mike', 1969);
*/

/*
///////////////////////////////////////////////////////////////////
// Lecture: Statements and Expressions

// Functions
function someFun(par) {
  //code
}

var someFun = function(par){
  //code
}

//Expressions - Produce an outcome for the variable
3 + 4;
var x = 3;

// Statements = Performs an action but does not give an immediate value/variable that will be stored
if (x === 5) {
  //do something
}
*/

/*
///////////////////////////////////////////////////////////////////
// Lecture: Arrays

// Bundling all variables into one single variables
const names = ['John', 'Jane', 'Mark'];

const years = new Array(1990, 1960, 1948);

console.log(names[0]); // this will give us John in the console
console.log(names[1]); // this will give us Jane in the console
console.log(names[2]); // this will give us Mark in the console

// this will mutate the element 1 in the array to Beans
// it will overwrite.
names[1] = 'Ben';
console.log(names);
*/

/*
// Below the object has properties which are strings, a number and a boolean
var john = ['John', 'Smith', 1990, 'designer', false];

// Add an element to the end of the array John's favourite colour:
john.push('blue');
console.log(john);

// Add an element at the beginning of the array:
john.unshift('Mr. ') ;

// This will remove the last element from the array - in this case it is blue:
john.pop();

// This will remoe the first element in the array:
john.shift();

console.log(john);

// Return the position of the element in the array that you pass in:
// we have to store it in a variable to display it or do an ALERT:
// alert(john.indexOf('Smith'));

// Find out if John is a teacher (so teacher is in the array),
// It will display that he is not because it says he is a 'designer' in the array.
if (john.indexOf('teacher') === -1) {
  console.log('John is NOT a teacher.');
}
*/

/*
///////////////////////////////////////////////////////////////////
// Lecture: Objects

// Object literal - we have the KEY and then the VALUE:
var hannah = {
  name: 'Hannah',
  lastName: 'Jadavji',
  yearOfBirth: 1990,
  job: 'Developer',
  isMarried: false
};
console.log(hannah); // Displays the whole object

// Retrieve an element from this object:
// get the last name:
console.log(hannah.lastName); // => Jadavji

var xyz = 'job';
console.log(hannah[xyz]); // => Developer

// This will now overwrite the object above:
hannah.lastName = 'Dewson';
hannah['job'] = 'Actor';
console.log(hannah);


// Different way of creating an object:
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1960;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
*/
