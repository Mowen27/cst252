// Lab 9: JavaScript for the Web
// Author: Michael Owen <miowen@csumb.edu>
// Created: 3-2-21
// License: Public Domain
// Source borrowed from Wes Modes <wmodes@csumb.edu>

window.onload = function () {

   // assign it to a variable outputEl
   var outputEl = document.getElementById("output");
   console.log("outputEl: ", outputEl);
   // Create a new element with document.createElement("p") and assign it
   var new1El = document.createElement("p");
   // Change the html attribute of new1El to say "something new.""
   new1El.innerHTML = "Something new.";
   new1El.id = "new-one";
   // Create a new element with document.createElement("p") and assign it to a variable new1El
   var new2El = document.createElement("p");
   new1El.id = "new-two";
   // Change the html attribute of new1El to say "something else."
   new2El.innerHTML = "Something else.";
   // Append both new elements one at a time using appendChild()
   outputEl.appendChild(new1El);
   outputEl.appendChild(new2El);
   outputEl.className = "changed";
}
