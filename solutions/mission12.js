// En cours de développement. Proposer une solution via une pull request sur le dépôt GitHub du projet.

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

class Hero {
    constructor(name) {
        this.name = name;
        this.healPoints = getRandomArbitrary(50, 100).toFixed(0);
        this.attackPoints = getRandomArbitrary(5, 20).toFixed(0);
    }
    
    attack() {
        return this.attackPoints;
    }
}

class Monster {
    constructor(name) {
        this.name = name;
        this.healPoints = getRandomArbitrary(50, 100).toFixed(0);
        this.attackPoints = getRandomArbitrary(5, 20).toFixed(0);
    }

    attack() {
        return this.attackPoints;
    }
}

let hero = new Hero("Superman");
let monster = new Monster("Godzilla");

console.log(`${hero.name} vs ${monster.name}`);
console.log(`Hero: ${hero.healPoints} HP, ${hero.attackPoints} ATK`);
console.log(`Monster: ${monster.healPoints} HP, ${monster.attackPoints} ATK`);
console.log("Battle begins!");
console.log("==========================");

console.log(`Hero 🗡️ Monster!`);
monster.healPoints -= hero.attack();
console.log(`Monster's remaining ♡ : ${monster.healPoints} HP`);
console.log(`Monster 🗡️ Hero!`);
hero.healPoints -= monster.attack();
console.log(`Hero's remaining ♡ : ${hero.healPoints} HP`);