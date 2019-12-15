// //Create an Array

// var fruits = ['Apple', 'Banana'];

// console.log(fruits.length);
// // 2


//Access (index into) an Array item


// var cars = ['Camaro SS', 'Challenger RT', 'Challenger SRT'];

// //Access the first item
// var firstCar  = cars[0]; //Camaro SS

// //Access the last item
// var lastCar = cars[cars.length - 1]; //Dodge Challenger SRT

// //Access with dot notation 
// var secondCar = cars.0;   // a syntax error

// var cars = ['Camaro SS','Dodge Challenger RT','Dodge Challenger SRT Demon'];
// // the property name is not valid
// //var let firstCar = cars.0; // a syntax error

// var cars = ['Camaro SS','Dodge Challenger RT','Dodge Challenger SRT Demon'];
// var firstCar = cars.0;   // a syntax error
// var firstCar = cars[0]; // works properly
// var 3rdCar = cars


// //Loop over an Array

var cars = ['Camaro SS', 'Challenger RT', 'Challenger SRT'];
cars.forEach(function(item, index, array) {
    console.log('Item Value : ', item, 'and Its index :', index);
});
// Item Value :  Camaro SS and Its index : 0
// Item Value :  Challenger RT and Its index : 1
// Item Value :  Challenger SRT and Its index : 2


// // Add to the end of an Array

// var newLength = fruits.push('Orange');
// // ["Apple", "Banana", "Orange"]


// // Remove from the end of an Array

// var last = fruits.pop(); // remove Orange (from the end)
// // ["Apple", "Banana"];
// Remove from the front of an Array

// var first = fruits.shift(); // remove Apple from the front
// // ["Banana"];
// Add to the front of an Array

// var newLength = fruits.unshift('Strawberry') // add to the front
// // ["Strawberry", "Banana"];
// Find the index of an item in the Array

// fruits.push('Mango');
// // ["Strawberry", "Banana", "Mango"]

// var pos = fruits.indexOf('Banana');
// // 1
// Remove an item by index position

// var removedItem = fruits.splice(pos, 1); // this is how to remove an item

// // ["Strawberry", "Mango"]
// Remove items from an index position

// var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
// console.log(vegetables); 
// // ["Cabbage", "Turnip", "Radish", "Carrot"]

// var pos = 1, n = 2;

// var removedItems = vegetables.splice(pos, n); 
// // this is how to remove items, n defines the number of items to be removed,
// // from that position(pos) onward to the end of array.

// console.log(vegetables); 
// // ["Cabbage", "Carrot"] (the original array is changed)

// console.log(removedItems); 
// // ["Turnip", "Radish"]
// Copy an Array

// var shallowCopy = fruits.slice(); // this is how to make a copy
// // ["Strawberry", "Mango"]


console.log(sports);
var sports = ['soccer', 'baseball'];
console.log(sports);
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4

var arrayOfString = Array.of('Hello World');
console.log(arrayOfString);

console.log(cars['1'] != cars['01']);