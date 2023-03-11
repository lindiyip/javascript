// a 'const' us short for "constant"
// a const variable is basically a variable once asisgned a value
// cannot be REASSIGNED to 
const pi = 3.14;
// pi - 3.1417; // error! Cannot reassign to const

let x = 6;
x =7; // okay, because the variable is created using "let"

// we don't have any intent of ressignin a value to 'ageOfAlice'
// so use const
const ageOfAlice = 18;
//ageOfAlice = 27; // illegal, because all girls are always 18???

// Don't describe const as a "variable that cannot be changed"
// it's misleading -- it's better to say "const cannot be reassigned to"
const fruits = ["apples", "bananas", "oranges"];
// fruits = ["1","2","3"] <-- const only prevents reassignment to the variable
fruits[1] = "durians"; // <-- const does not prevent any other kind of manipulation
console.log("fruits = ", fruits);

fruits.push("mangosteen"); // equal to appending to a list in python
console.log("fruits=", fruits);

// Auto-convert to number
let test1 = prompt("number: ")
answer = test1 * 2
console.log(answer)

// Rounding to decimal place
let rounding1 = 3.1417;
rounding1 = rounding1.toFixed(2);
console.log(rounding1); // toFixed() will return a string reprsentation of the number. 


