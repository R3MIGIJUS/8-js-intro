
// Reduse f-ja nauodajama, kai reikia iš viso duomenų masyvo, pateikti sumažintą informacijos 
// kiekį, dažniausiai -  vieną skaičių.(Pvz visų duomenų vidurkį, max ar min reikšmę).


function skaiciuSarasoSuma(X) {
   let suma=0

    for (i=0; i<= X.length; i++) {
        suma += i;
    }

    return suma;
}

const pazymiai = [10, 2, 8, 4, 6, 10, 8, 7,8];
const pazymiuSuma = skaiciuSarasoSuma(pazymiai);
const pazymiuKiekis = pazymiai.length;

console.log(pazymiuSuma);
console.log(pazymiuKiekis);


const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis);



// Atspausdinti visų masyve esančių žodžių pirmasias raides :

 const zodynas = ['labas', 'rytas', 'sakau', 'tau'];
 const pirmosRaides = zodynas.reduce((fullText, word) => fullText + word[0], '');
 console.log(pirmosRaides);