
/* --- Before ---
function getHuman (firstName, lastName) {
  var superheroName = "?";
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

function getHuman (firstName, lastName) {
  var superheroName = "?";
  return {
    firstName, lastName, superheroName
  }
}

var clark = getHuman("Clark", "Kent");

console.log(clark);

/* --- Before ---
function getSuperhero (
    firstName
  , lastName
  , superheroName) {

  return {
      firstName: firstName
    , lastName: lastName
    , superheroName: superheroName
    , hello: function()  {
      return
        "Je suis "+superheroName+ "aka " +firstName +" " +lastName;
    }
  }
}
 */

function getSuperhero (
    firstName
  , lastName
  , superheroName) {

  return {
      firstName
    , lastName
    , superheroName
    , hello()  {
      return `Je suis ${superheroName} aka "${firstName} ${lastName}"`;
    }
  }
}

var clarkKent = getSuperhero("Clark", "Kent", "Superman");

console.log(clarkKent.hello())

var tonyStark = {
    firstName: "Tony"
  , lastName: "Stark"
  , strength: 100
  , superheroName: "IronMan"
}

console.log(tonyStark);

var armorAbilities = {
    strength: 1000
  , flight () { console.log("Flying..."); }
}

Object.assign(tonyStark, {armorAbilities});

Object.assign(armorAbilities, {createMagneticFields () { return []}});

console.log(tonyStark);



