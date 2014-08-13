
class Human {

  constructor(firstName = "John", lastName = "Doe") {
    /* Et oui les paramètres par défaut existent! */

    /* membres d'instance */
    this.firstName = firstName;
    this.lastName = lastName;
  }

  hello () {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
  }

}

export default Human;

