/*
TERNARY OPERATOR
Jo simbolis yra '?', Jis panašiai naudojama, kaip 'if' operatorius. 
Geriausia naudoti tik trumpiem užrašymam, nes ilgom sąlygom bus sunku ir užrašyti ir skaityti,
tokiu atveju geriau 'if' operatorių naudoti.

Klausimas ? teigiama : neigiama
*/

const arLyja = false;

const sketis = arLyja ? 'pasiimk' : 'nereikia';     // Paklausiam ar lyja su ternerio operatoriumi '?' ir po parašome dvi reikšmes atskirtas ':'.
console.log(sketis);

const s1 = 4 > 2 ? 'daugiau' : 'ne daugiau';
console.log(s1);

// Lygiai tą patį galima užrašyti su 'if' operatoriumi :

if (4 < 2) {
    s2 = 'daugiau';
} else {
    s2 = 'ne daugiau';
}
console.log(s2);


console.log('-----------------------');

/*
Nestintas ternary - sudėtingesnis Ternary operatoriaus panaudojimas, tiesiog išplėčiant užduoti, tas pats kas panaudojant "else if" operatoriu.
*/

const color = 'red';


const x1 = color === 'blue' ? "Melyna" : color === 'red' ? 'Raudona' : 'Nezinoma spalva';

console.log(x1);

// Pvz užrašome red spalvą. Ir paklausę ar tai mėlyna? Ternary operatorius "?".
// Gauname atsakyma, kai ne mėlyną, ir vietoje - nemėlyna atsakymo, užrašome dar vieną Ternary eilutę
// skirta red spalvai su teigiama ir neigiama reikšme.


const arSninga = true; // Like 'if sninga?'
const pasiimkKastuva = arSninga ? "Kastuvo reikės" : "Kastuvo nereikės" // tada daryk : Katuvo reikia, else :Kastuvo nereikia;

console.log(pasiimkKastuva);


const suma = 5 > 8 ;
const x = suma ? "Daugiau " : "Mažiau"

console.log(x);