/*Arrow Functions*/

var addition = (a,b) => a+b;

var substraction = (a,b) => { return a - b; }

console.log(addition(5,4));
console.log(substraction(5,4));


var oliver = {
  name: "Oliver Queen",
  friends : ["Black Canary", "Batman", "Green Lantern"],
  helloBuddies () {
    /*
    this.friends.forEach((buddy) => {
      console.log(buddy + " is a friend of " + this.name);
    });
    */
    this.friends.forEach((buddy) => console.log(buddy + " is a friend of " + this.name));
  }
}

oliver.helloBuddies();



/* === bad side effect version ===
var oliver = {
  name: "Oliver Queen",
  friends : ["Black Canary", "Batman", "Green Lantern"],
  helloBuddies: function() {
    this.friends.forEach(function(buddy) {
      console.log(buddy + " is a friend of " + this.name);
    });
  }
}

 oliver.helloBuddies();
*/

/* === that version ===
var oliver = {
  name: "Oliver Queen",
  friends : ["Black Canary", "Batman", "Green Lantern"],
  helloBuddies: function() {
    var that = this;
    this.friends.forEach(function(buddy) {
      console.log(buddy + " is a friend of " + that.name);
    });
  }
}

 oliver.helloBuddies();
*/

/* === bind version ===
var oliver = {
  name: "Oliver Queen",
  friends : ["Black Canary", "Batman", "Green Lantern"],
  helloBuddies: function() {
    this.friends.forEach(function(buddy) {
      console.log(buddy + " is a friend of " + this.name);
    }.bind(this));
  }
}
 oliver.helloBuddies();
*/