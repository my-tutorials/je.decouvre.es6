import Human from './Human';
import SuperHero from './SuperHero';
import Animal from './Animal';

module factory from './factory';
/*
#Modules

#More informations:

- [https://github.com/google/traceur-compiler/wiki/LanguageFeatures#modules](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#modules)
- [https://github.com/lukehoban/es6features#modules](https://github.com/lukehoban/es6features#modules)

 */

var john = new Human("John", "Doe");
john.hello();

var clark = new SuperHero("Clark", "Kent", "SuperMan", "flying");

clark.hello();

clark.power();


console.log(factory.getInstanceOfHuman("Jane", "Doe"));
console.log(factory.getInstanceOfSuperHero("Tony", "Stark", "IronMan", "flying"));

var baloo = new Animal({name:"Baloo", species:"bear"});
console.log(baloo);


