// Lab 15: Object-Oriented Design
// Author: Michael Owen <miowen@csumb.edu>
// Created: 3-24-21
// License: Public Domain

// Hang Man OOP

// controls the game play
// class HangMan
  // initialize
    // set up hang display
    //set up the players
    //assign the guessing player

  // play
    // loop 6 times for each wrong guess
      // save answer from opposing player
      // display correct letters below hang display
      // display wrong letter at top of the screen
      // player loses if they fail guessing 6 times
      // swap out players

  // check_game_over
    // check_victory

  // check_victory
    // If the player filled out the oppising player's word
      // display victory message "You got it!"

class Vehicle {
  constructor(make, model, year, color, extras) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
}
info () {
    return this.color + " " + this.year + " " + this.make + " " + this.model +
    "with" + this.extras + "called" + this.name;
  }
}
var vehicles = [];

var newVehicle = new Vehicle("Shwinn", "Letour", 1976, "gold", "Brookes Saddle");

vehicles.push(newVehicle);

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("p");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}
