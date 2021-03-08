// Lab 11: Conditionals
// Author: Michael Owen <miowen@csumb.edu>
// Created: 3-8-21
// License: Public Domain
//source borrowed from Wes Modes <wmodes@csumb.edu>

 housesArray = [
    {
        title: "Blue",
        text: "You must have a cool and collected energy."
    },
    {
        title: "Red",
        text: "You have a feiry passion that none can put out."
    },
    {
        title: "Green",
        text: "Thou are economically wise and fruitful."
    },
    {
        title: "Pink",
        text: "Thou values the power of love and connections."
    },
    {
        title: "Purple (Blue + Red)",
        text: "Thou have a unique aura, being both passionate yet collected."
    },
    {
        title: "Nebula Blue (Green + Blue)",
        text: "Thou are both economically savvy and have a cool energy."
    },
    {
        title: "Violet (Pink + Blue)",
        text: "Thou values love and is generally laid back."
    },
    {
        title: "Christmas Time (Green + Red)",
        text: "Merry Christmas! Thou are economically wise and are quite passionate."
    },
    {
        title: "Brown (Green + Pink)",
        text: "Thou value love and are econimically wise, one would call a unique combination."
    },
    {
        title: "Hot Pink (Red + Pink)",
        text: "Thou are passionate about love and connections."
     }
]

credit = '<div class="credits">Aura provided by <a href="https://en.wikipedia.org/wiki/Star">The Stars Above</a></div>';

// depending on length mod 4
function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Blue"
  }
  else if (mod == 1) {
    return "Green"
  }
  else if (mod == 2) {
    return "Pink"
  }
  else if (mod == 3) {
    return "Red"
  }
}

// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHatHash(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h3>The Stars show that your aura is " + houseObj.title + "</h3>" +
          "<p>" + houseObj.text + "</p>" + credit;
  document.getElementById("output").innerHTML = newText;
})
