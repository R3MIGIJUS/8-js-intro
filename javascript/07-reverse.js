
/*
Duotas array su tekstinėmis reikšmėmis (string);
Reikia: sujungti juos atbulai įterpiant ", "
*/

// labas, rytas, tau, sakau ;

const d = ['sakau', 'tau', 'rytas', 'labas'];
let reverse = '';

// reverse += d[3];
// reverse += ', ';
// reverse += d[2];
// reverse += ', ';
// reverse += d[1];
// reverse += ', ';
// reverse += d[0];

// reverse = d[3] + ', ' + d[2] + ', ' + d[1] + ', ' + d[0];

// Rankinis būdas pakeisti sąrašą atbulai :

reverse = `${d[3]}, ${d[2]}, ${d[1]}, ${d[0]}`;
console.log(reverse);

// Papraščiausias būdas naudoti reverse f-ja sąrašui

console.log('----------------------------------------------------');

const sarasas = [1, 2, 3, 4, 5];
const atgal = sarasas.reverse();
console.log(atgal);

// Patikriname ar tikrai pasikeitė sąrašas

console.log(sarasas);


console.log('------------------------------------------');

// Join f-ja įterpia po kiekvieno sąrašo nario atitinkamą "" esantį simbolį

const atgal1 = sarasas.reverse().join('-');
console.log(atgal1);

