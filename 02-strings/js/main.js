

console.log("Quarante-deux".contains("-"));
console.log("Quarante-deux".startsWith("Q"));
console.log("Quarante-deux".endsWith("x"));

console.log("Quarante-deux".repeat(3));


var clark = {
    firstName: "Clark"
  , lastName: "Kent"
  , superheroName: "SuperMan"
}

console.log(
  `Je suis ${clark.superheroName} aka "${clark.firstName} ${clark.lastName}"`
);

console.log(
`Je suis ${clark.superheroName},
et mon identité secrète est:
"${clark.firstName} ${clark.lastName}"`
);