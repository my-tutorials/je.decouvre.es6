console.log("=== colors ===");

/* #variables */

let color = "red";

function colors () {
  let color = "blue";

  var one = function () {
    let color = "green";
    console.log(color);
  }

  var two = function () {
    let color = "orange";
    console.log(color);

  }

  one();
  two();
  console.log(color);

}

colors();

console.log(color);


/*
green
orange
blue
red
 */


