
/* 
for - pagrindinis ciklų tipas, dažniausiai naudojamas.
Naudojama tada, kai reikia kodą įvykdyti N kartų, panaudojant skirtingas kodo vertes.

for ciklo struktūra  : 

            for (statement 1; statement 2; statement 3) {
                    // code block to be executed
            }

            Statement 1 is executed (one time) before the execution of the code block.

            Statement 2 defines the condition for executing the code block.

            Statement 3 is executed (every time) after the code block has been executed.

pvz :

            for (let i = 0; i < 5; i++) {
            
            }

            Statement 1 sets a variable before the loop starts (let i = 0).

            Statement 2 defines the condition for the loop to run
             (i must be less than 5, if it will be more than 5, loop will stop).

            Statement 3 increases a value (i++) each time the code block in the loop has been executed.

*/

// Uždavinys : Išspausdinti skaicius intervale :

        const nuo = 5;
        const iki = 10;

        for ( let i = nuo; i <= iki; i++) {
            console.log(i);
        }

console.log('---------------------------------');


// Uždavinys : Išspausdinti skaicius intervale, bet padvigubintus :


const nuo2 = 2;
const iki2 = 7;

for (let i = nuo2; i <= iki2; i++) {
    console.log(i * 2);
}

console.log('----------------------------------');


//  Turime sąrašą (array) ir reikia isspausdinti visas jo reiksmes :


const marks = [10, 2, 8, 4, 6, 9, 1, 7, 3, 5];
console.log(marks);
console.log(marks.length);


for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}



// Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:

const string = ["a", "b", "c", "d", "e","f"];
console.log(string);
console.log(string.length);

console.log(string.reverse());


for (let i = 0; i <= string.length; i++) {
    console.log(string[i]);
}



