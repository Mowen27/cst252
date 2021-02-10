// lab5.js - Working with variables
// Author: Michael Owen <miowen@csumb.edu>
// Created: 2-10-21
// License: Public Domain
// Source borrowed from Wes Modes <wmodes@ucsc.edu>


console.log("Check this out")


// Define Variables
var make = "Chevy";
var model = "Sonic";
var color = "White";
var year = 2014;
var extras = "Cool stickers";


// Declare a boolean variable ownIt for whether you own it or not.
var ownIt = true;

// Create a new variable age that subtracts the year from the current year
var age = new Date().getFullYear();

// Use document.writeln() to neatly output each of your variables, example, document.writeln("Make: " + make + "<br>");
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Extras: " + extras + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");

document.writeln("");
