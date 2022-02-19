/* 

Object.
Skirtas apibūdinti objektą, kadangi visi objektai turi tam tikras tokias pačias savybes 
(PVZ : žmogus. Jo savybės : amžius, ūgis, vardas, metai ir t.t). O savybės turi savo individulias vertes.

name - properties; "Justina" - value ;
age - properties;    33  -     value;

*/


const Justina = {name:"Justina", age: 33, lives:"Kaunas"};

console.log(Justina.name);

// tą pati galima atvaizduoti ir skirtingose eilutėse (properties su value ) :

const Remigijus = {
                name:"Remigijus", 
                age: 36, 
                lives:"Kaunas"
             };

console.log(Remigijus["age"]);

console.log("-------------------------------------------------");

const petras = {
    name: 'Petras',
    age: 99,
    color: 'blue',
    'likes banana': true
};

const maryte = {
    name: 'Matyre',
    age: 87,
    color: 'red',
    likesBanana: false
};

// Norint išvesti duomenis į consolę, value vertę galima rašyti dviem būdais :
// pvz: petras.name arba petras["name"]


console.log(petras.name, petras.age, petras.color);

console.log(petras["name"]);
console.log(petras["age"]);
console.log(petras["color"]);
console.log(petras["likes banana"]);

// Gali object su daryti keletas objektų, kaip array

const gyventojai = [petras, Remigijus];

console.log(gyventojai[0].name);
console.log(gyventojai[1].age);

// Property gali turėti ne vieną vertę, o jų keletą , pvz žemiau value - Country :LT ir Price :99

const batas = {
    name: 'Kaliosas 3000',
    color: 'red',
    pricing: [
        {
            country: 'LT',
            price: 99
        },
        {
            country: 'LV',
            price: 88
        },
        {
            country: 'EE',
            price: 140
        },
    ]
}

console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

const kepure = {
    name: 'Skribeliukas',
    color: 'white',
    pricing: {
        lt: 99,
        lv: 88,
        ee: 140
    }
}

console.log(kepure.pricing.lt);


