/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject {
    constructor(gameProps) {
    this.createdAt = gameProps.createdAt;
    this.name = gameProps.name;
    this.dimensions = gameProps.dimensions;
  }
  
    destroy() {
      return `${this.name} was removed from the game.`;
  }
}
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
 class CharacterStats extends GameObject {
    constructor(health) {
        super(health);
        this.healthPoints = health.healthPoints;
    }
  
    takeDamage() {
      return `${this.health} took damage.`;
  }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
 class Humanoid extends CharacterStats {
    constructor(alien) {
    super(alien);
    this.team = alien.team;
    this.weapons = alien.weapons;
    this.language = alien.language;
    }
  
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
  }
}


  
  
    // function Beast(evil) {
    //   Humanoid.call(this, evil);
    // }
    // Beast.prototype = Object.create(Humanoid.prototype);
    // Beast.prototype.greet1 = function () {
    //   return `I am the all powerful ${this.name} and I will destroy you with my ${this.weapons}.`
    // }
  
    // function God(good) {
    //   Beast.call(this, good);
    // }
    // God.prototype = Object.create(Humanoid.prototype);
    // God.prototype.greet2 = function () {
    //   return `I am the all powerful ${this.name} and I will destroy you with my ${this.weapons} and my ${this.team}.`
    // }
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    // ------------------------------Added as part of the Stretch-------------------
    // const villain = new Beast({ // A new child of Humanoid
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 1,
    //     width: 2,
    //     height: 4,
    //   },
    //   healthPoints: 20,
    //   name: 'Tanith',
    //   team: 'Tanesians',
    //   weapons: [
    //     'Bomb',
    //     'Athame',
    //   ],
    //   language: 'Kur',
    // });
  
    // const hero = new God({ // A new child of Beast
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 1,
    //     width: 2,
    //     height: 4,
    //   },
    //   healthPoints: 20,
    //   name: 'Gomoth',
    //   team: 'Bothkale',
    //   weapons: [
    //     'Powerburst',
    //     "Shoth'\ku",
    //   ],
    //   language: 'Zarmonn',
    // });
  
    
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    //console.log(villain.greet1());
    //console.log(hero.greet2());
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!