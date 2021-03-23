// Lab 14: Ojects, Classes, and Constructors
// Author: Michael Owen <miowen@csumb.edu>
// Created: 3-23-21
// License: Public Domain


function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + "with" + this.extras;
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
