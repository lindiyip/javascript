// array are reference values
let fruits = ['apples', 'bananas', 'cherries'];
let f2 = fruits;
fruits.push("durians") // variable.push("new-variable") is the append function in JS
console.log('fruits:', fruits)
console.log("f2:", f2);


// primitive values;
let x = 3
let y = x
x = x + 5
console.log(y)