// En cours de développement. Proposer une solution via une pull request sur le dépôt GitHub du projet.

const prompt = require('prompt-sync')();

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Hero {
    constructor(name) {
        this.name = name;
        this.healPoints = getRandomArbitrary(50, 100);
        this.attackPoints = getRandomArbitrary(5, 20);
    }

    attack() {
        return this.attackPoints;
    }
}

class Monster {
    constructor(name) {
        this.name = name;
        this.healPoints = getRandomArbitrary(50, 100);
        this.attackPoints = getRandomArbitrary(5, 20);
    }

    attack() {
        return this.attackPoints;
    }
}

let hero = new Hero("Superman");
const monsterName = ["Godzilla", "Kong", "Mothra", "Gamera"];
let monster = new Monster(monsterName[Math.floor(Math.random() * monsterName.length)]);

console.log(`${hero.name} vs ${monster.name}`);
console.log(`Hero: ${hero.healPoints} HP, ${hero.attackPoints} ATK`);
console.log(`Monster: ${monster.healPoints} HP, ${monster.attackPoints} ATK`);
console.log("Battle begins!");
console.log("==========================");

function heroTurn() {

    console.log(`😍 - Hero's turn!`);

    let choice = prompt(`Do you want to attack (a) or heal (h)? `);
    while (choice !== "a" && choice !== "h") {
        console.log(`Invalid choice!`);
        choice = prompt(`Do you want to attack (a) or heal (h)? `);
    }
    if (choice === "h") {
        console.log(`Hero heals!`);
        let heal = getRandomArbitrary(0, 30);
        if (heal == 0) {
            console.log(`Hero's heal failed!`);
        } else {
            console.log(`Heal spell : +${heal} HP`);
            hero.healPoints += heal;
            console.log(`Hero ♡ : ${hero.healPoints} HP`);
        }
    }
    else if (choice === "a") {
        console.log(`Hero attacks!`);
        let attack = getRandomArbitrary(0, hero.attack());
        if (attack == 0) {
            console.log(`Hero's attack failed!`);
        } else {
            console.log(`Attack : +${attack}🗡️ ATK`);
            monster.healPoints -= attack;
            console.log(`Monster's remaining ♡ : ${monster.healPoints} HP`);
        }
    }
}

function monsterTurn() {
    console.log(`😈 - Monster's turn !`);
    console.log(`Monster attacks!`);
    let attack = getRandomArbitrary(0, monster.attack());
    if (attack == 0) {
        console.log(`Monster's attack failed!`);
    } else {
        console.log(`Attack : +${attack}🗡️ ATK`);
        hero.healPoints -= attack;
        console.log(`Hero's remaining ♡ : ${hero.healPoints} HP`);
    }
}

function gameOver() {
    console.log(`Game Over!`);
    if (hero.healPoints <= 0) {
        console.log(`Hero is defeated!`);
    } else if (monster.healPoints <= 0) {
        console.log(`Monster is defeated!`);
    }
}

while (hero.healPoints > 0 && monster.healPoints > 0) {
    heroTurn();
    if (monster.healPoints <= 0) {
        break;
    }
    console.log("==========================");
    monsterTurn();
    if (hero.healPoints <= 0) {
        break;
    }
    console.log("==========================");
}
gameOver();
