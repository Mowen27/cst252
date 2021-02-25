// lab8.js-Anon Functions and Callbacks
// Author: Michael Owen <miowen@csumb.edu>
// Created: 2-22-21
// License: Public Domain
// Source borrowed from Wes Modes <wmodes@ucsc.edu>

var outputEl = document.getElementById("output");

function isEven(x){
   return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 6 even? ", isEven(6));

array = [100, 24, 18, 17, 2345]
console.log("My array", array);
// add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Original array:" + JSON.stringify(array);
outputEl.appendChild(newEl);

var result = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result);
// add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Evenness of array:" + JSON.stringify(result);
outputEl.appendChild(newEl);

var result = array.map(function(x){
   return x ** 0.5;
})
// should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array:", result);
// add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Squareroots of array:" + JSON.stringify(result);
outputEl.appendChild(newEl);
