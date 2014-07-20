

/* #Property Initializer Shorthand */

/* --- Before ---
function getHumanBeing (firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

function getHumanBeing (firstName, lastName) {
  return {
    firstName, lastName
  }
}

var bob = getHumanBeing("Bob", "Morane");

console.log(bob);

/* #Method Initializer Shorthand */

/* --- Before ---
var john = {
  firstName: "John", lastName: "Doe",
  hello: function() {
    return "Hello, I'm " + this.firstName + " " this.lastName;
  }
}
*/

var john = {
  firstName: "John", lastName: "Doe",
  hello() {
    return `Hello, I'm ${this.firstName} ${this.lastName}`; // {raw}???
  }
}

console.log(john.hello());


/* #Mixin */

var clark = { firstName: "Clark", lastName: "Kent"};

Object.assign(clark,{
  heroName: "Super Man",
  power() { return `Hello, I'm ${this.heroName} and I'm flying`;}
});

console.log(clark, clark.power());


