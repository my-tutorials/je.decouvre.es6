import Human from './Human';

class SuperHero extends Human {

  constructor (firstName, lastName, heroName, ability) {
    super(firstName, lastName);
    this.heroName = heroName;
    this.ability = ability;
  }
  power () {
    console.log(`I'm ${this.heroName} and I'm ${this.ability}`);
  }
}

export default SuperHero;