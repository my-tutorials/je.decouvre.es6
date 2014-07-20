import Human from './Human';
import SuperHero from './SuperHero';

export function getInstanceOfHuman (firstName, lastName) {
  return new Human(firstName, lastName);
}

export function getInstanceOfSuperHero (firstName, lastName, heroName, ability) {
  return new SuperHero(firstName, lastName, heroName, ability);
}
