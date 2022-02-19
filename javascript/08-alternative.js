/*
Alternuojanti eilutė : Tai kai vienas elementas pridedamas, o sekantis atimamas. Ir taip per visą sąrašą.
*/

const list = [10, 2, 8, 4, 6];

let suma = 0;

suma += list[0];
suma -= list[1];
suma += list[2];
suma -= list[3];
suma += list[4];

console.log(suma);

console.log('-------------------------------------------------');

const x = [10, 2, 8, 4];
const alternuojantiSuma = x[0] - x[1] + x[2] - x[3];
console.log(alternuojantiSuma);


