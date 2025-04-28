// En cours de développement. Proposer une solution via une pull request sur le dépôt GitHub du projet.

class Hero {
    constructor(name, healPoints, attackPoints) {
        this.name = name;
        this.healPoints = healPoints;
        this.attackPoints = attackPoints;
    }

    attack(monster) {
        let damage = this.strength * 2 - monster.strength;
        if (damage < 0) damage = 0;
        console.log(`${this.name} attacks ${monster.name} for ${damage} damage!`);
    }
}

class Monster {
    constructor(name, healPoints, attackPoints) {
        this.name = name;
        this.healPoints = healPoints;
        this.attackPoints = attackPoints;
    }
}

let hero = new Hero("Superman", 10, 8);
let monster = new Monster("Godzilla", 12, 6);

console.log(`${hero.name} vs ${monster.name}`);