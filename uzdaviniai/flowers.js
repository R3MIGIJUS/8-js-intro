/*
UZDUOTIS:
- duodama, kiek turim geliu
- duodama, kiek viena gele "susilaukia" nauju gelyciu
- duodama, kiek turiu vazonu
- reikia rasti, keliu vazonu truksta?
*/

function flowers(pradinesGeles, reprodukcija, turimiVazonai) {
    const visoGeliu = (reprodukcija + 1) * pradinesGeles;
    const reikiaVazonu = visoGeliu - turimiVazonai;
    return reikiaVazonu > 0 ? reikiaVazonu : 0;
}

console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 1, 100), '->', 0);