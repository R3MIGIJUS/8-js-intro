
// Darbas su duomenų masyvais (skaičiai arba tekstai);
// Map funkcija sukuria kitą masyvą su tam tikrais pakeitimais: pvz gali kiekvieną elementą padauginti iš dviejų
// ir taip padauginti visus masyvo elementus ir sukurti naują masyvą.
// Žemiau bus pateikta uždavinio pvz :


// Išspausdinti viso žodinio masyvo elementų pirmąsias raides, jos visos turi būti didžiosios :

const zodynas = ['labas', 'rytas', 'sakau', 'tau'];

const pirmosZodynoRaides = zodynas.map(word => word[0].toUpperCase());

console.log(pirmosZodynoRaides);

// Atspausdinti visus masyvo elementus padauginus 2k :

const ilgiai = [1, 2, 3, 4, 5];
const duIlgiai = ilgiai.map( item => item*2);
console.log(ilgiai);
console.log(duIlgiai);

// Atspausdinti visus masyvo elementus padauginus 3k :

const masyvas = [1, 2, 3, 4, 5];
const trysIlgiai = masyvas.map(item => item * 3);
console.log(trysIlgiai);






