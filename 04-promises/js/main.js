console.log("=== Promise ===");

function divideFiveBySomething () {

  return new Promise((resolve, reject) => {

    var randomnumber = Math.floor(Math.random() * 6);
    if (randomnumber == 0) {
      reject(new Error("Divided by 0!"));
    } else {
      resolve(5 / randomnumber);
    }

  });
}

setInterval(() => {
  return divideFiveBySomething().then((data) => {
    console.log("Result is:", data);
  }).catch((err) => {
    console.log(err);
  });
}, 1000)




