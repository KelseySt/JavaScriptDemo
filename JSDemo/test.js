// JavaScript Demo, please pay close attention to syntax

// In JS you can assign variables functions, and write the function right there:
const timesTwo = function(num) {
    return num * 2;
}

console.log(timesTwo(8)); // 16

// Now we can condense that syntax using arrow functions
const timesThree = (x) => {return x * 3}
console.log(timesThree(3)); // 9

// And even further
const timesFour = x => x * 4;
console.log(timesFour(3)); // 12

// Can also do no arguments
const out = () => 42;
console.log(out());

// To test this file, make sure to have node.js downloaded and run 'node test' 
// in your terminal, and to open a terminal in VS on windows hit 'CTRL+~'

// Next to cover: map(), filter(), forEach()
// map()
const arr = [1, 2, 3, 4, 5]

const square = (x) => x*x;
console.log(arr.map(square)); // [ 1, 4, 9, 16, 25 ]


// Functions can also be directly written into map like here:
console.log(arr.map(x => x * x)); // [ 1, 4, 9, 16, 25 ]

// Notice if we print arr, it hasn't been affected
console.log(arr); // [1, 2, 3, 4, 5]

// filter()
console.log("Filtered arr >= 3:");
console.log(arr.filter((x) => x >= 3));





// Functions are called "methods" when they are a property of an object:
let dog = {
    name: "Daisy",
    age: 14,
    fetch() {
        console.log("Ball thrown");
    }
}
dog.fetch(); // Ball thrown

// Arrays:
// Arrays can be dynamically added to and deleted from in JS. Ex:
let iceCream = ['Vanilla', 'Chocolate', 'Coffee']; // Coffee is my fav
iceCream.push('Mint Chocolate');

const lastFlavor = iceCream.pop();
console.log("Last Flavor: " + lastFlavor);

// This also works, called destructuring in JS
let [flavorOne, flavorTwo] = iceCream;
console.log(flavorOne + " " + flavorTwo); // Vanilla Chocolate



// More to know: 
// JavaScript is single threaded, so if a process takes a long time, it is best to have it run asynchronously
// so the user experience isn't interrupted
// JavaScript Promises are arynchronous operations that produce a resolve or reject state, ex:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (x >= 1) {
            resolve('Hello, x is greater than 1!')
        }
        reject("Error, x is less than 1!")
    }, 1000)
})
