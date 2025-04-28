// En cours de développement. Proposer une solution via une pull request sur le dépôt GitHub du projet.

const calculerSalaireNet = (salaireBrut, pourcentage) => {
    return salaireBrut - (salaireBrut * pourcentage / 100);
}

module.exports = calculerSalaireNet;

// Dans un autre fichier, réaliser des tests unitaires pour la fonction calculerSalaireNet.

/*
const calulerSalaireNet = require('./mission9.js');

let salaireBrut = 1500;
let pourcentage = 20;

test('1500€ brut moins 20% de charges patronale donne 1200€', () => {
  expect(calulerSalaireNet(salaireBrut, pourcentage)).toBe(1200);
});
*/