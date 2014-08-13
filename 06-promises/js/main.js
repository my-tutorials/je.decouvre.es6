console.log("=== Promise ===");


var divideFourtyTwoBySomething = () => new Promise((resolve, reject) => {

  var randomnumber = Math.floor(Math.random() * 43);

  if (randomnumber > 0) {
    var result = 42 / randomnumber;
    resolve({randomnumber, result});
  } else {
    reject(new Error("Divided by 0!"));
  }

});


/* appeler divideFourtyTwoBySomething toute les secondes */
setInterval(() =>
  divideFourtyTwoBySomething().then((data) => {
    /* tout va bien */
    console.log(42,"divide by", data.randomnumber, "=", data.result);
  }).catch((err) => {
    /* tout va mal */
    console.log(err);
  })
, 1000);




