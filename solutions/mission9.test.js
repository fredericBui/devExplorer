const calulerSalaireNet = require('./mission9.js');

let salaireBrut = 1500;
let pourcentage = 20;

test('1500€ brut moins 20% de charges patronale donne 1200€', () => {
  expect(calulerSalaireNet(salaireBrut, pourcentage)).toBe(1200);
});
