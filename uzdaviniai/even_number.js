/*

Even number (skaičių padalinus iš 2, gaunamas sveikas skaičius, ne dešimtainis) 
apskaičiavimo funkcija.

% - šis operatorius naudojams kaip dalybos, tik papildomai klausia apie liekaną, ar ji yra atlikus dalybą.

*/

function even (skaičius) {

    return (skaičius % 2 ===0) 

}

const test1 = even (5);
console.log(test1);



// Ta pati f-ja panaudojant "if" operatorių :


function even (skaičius) {

    if (skaičius % 2 ===0) {
            return "Sveikas skaičius"
    }
            return "Dešimtainis skaičius"
}

const test2 = even (4);
console.log(test2);
