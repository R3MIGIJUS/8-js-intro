// Sort f-ja išrūšiuoja informaciją esančią duomenų masyve :

const skaiciai = [10, 2, 8, 4, 6, 113, 21];
const zodynas = ['labas', 'rytas', 'sakau', 'tau', 'tau', 'Mefistofelis', 'Rimantas', 'barsukas', 'guolis', 'raguolis', 'zaliapjove'];

const minMaxSkaiciai = skaiciai.sort((a, b) => a - b);
console.log(minMaxSkaiciai);

const maxMinSkaiciai = skaiciai.sort((a, b) => b - a);
console.log(maxMinSkaiciai);


const minMaxZodynas = zodynas.sort();
console.log(minMaxZodynas);

const maxMinZodynasReverse = zodynas.sort().reverse();
console.log(maxMinZodynasReverse);

const maxMinZodynas = zodynas.sort((a, b) => a < b ? 1 : a === b ? 0 : -1);
console.log(maxMinZodynas);




