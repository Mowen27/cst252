// Lab 9: JavaScript for the Web
// Author: Michael Owen <miowen@csumb.edu>
// Created: 3-3-21
// License: Public Domain

var buttonEl = document.getElementById("my-button");
consol.log("Here's the button:", buttonEl);

buttonEl.addEventListener("click", function(){
  var name = prompt("What's yo name?");
  var titleEl = document.getElementById("changeme");
  console.log("Title element:", titleEl);
  title.El.innerText = "Hello, " +name;
)}
