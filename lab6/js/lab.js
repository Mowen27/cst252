// lab6.js - Arrays and Ojects
// Author: Michael Owen <miowen@csumb.edu>
// Created: 2-15-21
// License: Public Domain
// Source borrowed from Wes Modes <wmodes@ucsc.edu>

// Define Variables
myTransport = ["Chevy Sonic" , "Santa Cruz Skate Board"];

myMainRide = {
    make: "Chevy",
    model : "Sonic",
    color : "White",
    year : 2014,
    age : function() {
        return 2021 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
