// Lab 17 Advanced jQuery
// Author: Michael Owen <miowen@csumb.edu>
// Created: 4-8-21
// License: Public Domain

// add event listener to button
$("#hello1-button").click(function(){
	$("#hello2-button").toggleClass("george");
})

// add event listener to button
$("#hello2-button").click(function(){
  $("#hello1-button").toggleClass("fred");
})

$("#submit").click(function(){
	// pure JS
	//var fullname = document.getElementById("full-name").value;
