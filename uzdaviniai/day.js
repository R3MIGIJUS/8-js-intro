/*
Parašyti f-ją, kuri parašytų koks šiuo metu yra paros metas, pagal esamą laiką :

    jeigu, dabar yra 0:00 iki 4:59 -> naktis; 
    jeigu, dabar yra 5:00 iki 10:59 -> rytas; 
    jeigu, dabar yra 11:00 iki 18:59 -> diena;
    jeigu, dabar yra 19:00 iki 23:59 -> vakaras;

*/

function parosMetas (val, min) {

    if (val<5) {
        return "Naktis"
    }

    else if (val<11) {
        return "Rytas"
    }

    else if (val<19) {
        return "Diena"
    }

    else if (val<24) {
        return "Vakaras"
    }

    else {

        return "Neatpažintas paros laikas"
    }

}

const test1 = parosMetas (5, 00);
console.log(test1);