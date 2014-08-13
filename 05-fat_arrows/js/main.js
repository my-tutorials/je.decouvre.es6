/*Arrow Functions*/

var addition = (a,b) => a+b;

var substraction = (a,b) => { return a - b; }

console.log(addition(5,4));
console.log(substraction(5,4));


var bob = {
  name: "Bob Morane",
  friends : ["Sam", "Ted", "Paul"],
  helloBuddies () {
    /*
    this.friends.forEach((buddy) => {
      console.log(buddy + " is a friend of " + this.name);
    });
    */
    this.friends.forEach((buddy) => console.log(buddy + " is a friend of " + this.name));
  }
}

bob.helloBuddies();



/* === bad side effect version ===
var bob = {
  name: "Bob Morane",
  friends : ["Sam", "Ted", "Paul"],
  helloBuddies: function() {
    this.friends.forEach(function(buddy) {
      console.log(buddy + " is a friend of " + this.name);
    });
  }
}

bob.helloBuddies();
*/

/* === that version ===
var bob = {
  name: "Bob Morane",
  friends : ["Sam", "Ted", "Paul"],
  helloBuddies: function() {
    var that = this;
    this.friends.forEach(function(buddy) {
      console.log(buddy + " is a friend of " + that.name);
    });
  }
}

bob.helloBuddies();
*/

/* === bind version ===
var bob = {
  name: "Bob Morane",
  friends : ["Sam", "Ted", "Paul"],
  helloBuddies: function() {
    this.friends.forEach(function(buddy) {
      console.log(buddy + " is a friend of " + this.name);
    }.bind(this));
  }
}
bob.helloBuddies();
*/