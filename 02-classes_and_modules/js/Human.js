
class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  hello() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
  }
}

export default Human;
