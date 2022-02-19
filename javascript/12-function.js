/*

Funkcijos :

Tai tam tikras duomenų kodas, atlikti tam tikras užduotis.
Duomenų sintaksė : 
funkction name ( parameter ) {return kodas kuris turi būti atliktas} return operatorius
reikalingas grąžinti atsakymą ir sustabdyti funkciją.

*/

// Reikia parašyti funkcija skaičių skaičiavimui : 

function sumavimas(pirmasSkaicius, antrasSkaicius) {
    console.log('Pirmas:', pirmasSkaicius);
    console.log('Antras:', antrasSkaicius);

    return pirmasSkaicius + antrasSkaicius;
}


const s1 = sumavimas(8, 5);
console.log(s1);

const s2 = sumavimas(99, 102);
console.log(s2);

console.log(sumavimas(77, 777));


const a = 6;
const b = 66;

const c = a + b;
console.log(c);

// Atspausdinti teksta didžiosiomis raidėmis :

function makeUpperCase(str) {
    let toUp = str.toUpperCase();
  return toUp;
  }
  
  const s1 = makeUpperCase("lietuva");
  console.log(s1);
