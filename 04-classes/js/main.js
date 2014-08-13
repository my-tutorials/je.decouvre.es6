import Human from './Human';
import SuperHero from './SuperHero';

//module factory from './factory';

var john = new Human();
john.hello();

var tony = new Human("Tony", "Stark");
tony.hello();


var clark = new SuperHero("Clark", "Kent", "SuperMan", "flying");

clark.hello();
clark.power();




//console.log(factory.getInstanceOfHuman("Jane", "Doe"));
//console.log(factory.getInstanceOfSuperHero("Tony", "Stark", "IronMan", "flying"));


