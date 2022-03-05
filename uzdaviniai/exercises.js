//Patikrinti ar duotame duomenų sąraše yra tam tikras skaičius ar bet koks kitas simbolis :

function check(a, x) {

    for (let i = 0; i < a.length; i++) {
        const item = a[i];

        if (item === x) {
            return true;
        }
    }

    return false;
}

console.log(check([66, 101], 6));
console.log(check (["labas", "kaip","tau","sekasi"], "sekasi"));


// Patikrinti ar kvadratų suma yra didesnė už kubų sumą :

function arrayMadness(a, b) {
    let kvadratai = 0;
    let kubai = 0;

    for (let i = 0; i < a.length; i++) {
        kvadratai += a[i] ** 2;
    }

    for (let i = 0; i < b.length; i++) {
        kubai += b[i] ** 3;
    }

    return kvadratai > kubai;
}

console.log(arrayMadness([1 ,2, 1], [1, 2, 3]));


// Reikia suskaičiuoti positivių skaičių sumą iš duomenų masyvo :



function positiveSum(arr) {                     // pagal nutylejima, bendra suma is pradziu lygu nuliui
    
    let bendraSuma = 0;                         // Priskiriame, kad bendra suma lygi 0

    for (let i = 0; i < arr.length; i++) {      // einam per skaičių sąrašą
      
        const skaicius = arr[i];                // pasiimu skaičių
      
        if (skaicius > 0) {                     // jeigu yra teigiamas
           
            bendraSuma += skaicius;             // tai pridedu prie bendros sumos
        }
    }

    
    return bendraSuma;                          // grąžiname bendros sumos rezultatą
}



console.log(positiveSum([]), '->', 0);
console.log(positiveSum([-2]), '->', 0);
console.log(positiveSum([-2, -7, -99]), '->', 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), '->', 0);
console.log(positiveSum([1, 2, 3, 4, 5]), '->', 15);


//  Reikia rasti duomenų masyve reikiamą raidę ir šių raidžių kiekį visame masyve :


function raidė (a,x) {

    let suma = 0;

    for (i=0; i<=a.length; i++) {
       if (a[i]===x){

      suma++;

       }
      
    }
    return suma
}

console.log(raidė(("Labaaaas"),"a"));


// Tas pats uždavinys tik šiek tiek kitaip kodas parašytas :


function strCount(str, letter) {
    // reikia kaupiamojo
    let kiekis = 0;

    // einam per teksta
    for (let i = 0; i < str.length; i++) {
        // paimama raide
        const raide = str[i];

        // jeigu raide yra ta, kuriuos ieskau
        if (raide === letter) {
            // kaupiamasis +1
            kiekis++;
        }
    }

    // grazinam kaupiamaji
    return kiekis;
}

console.log(strCount("Justina", "n"));
