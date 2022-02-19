/*
IF - salygos sakinys
PALYGINIMO OPERATORIAI:
    Visi: >, <, >=, <=, ==, !=, ===, !==
    Nenaudotini: ==, !=
    Naudotini: >, <, >=, <=, ===, !==

ŠABLONAI:

    if () {} ;
    if () {} else {} ;
    if () {} else if () {} ;
    if () {} else if () {} ...  else if () {} ;
    if () {} else if () {} ...  else if () {} else {} ;
*/

const a = 'labas';
const b = 'Labas';

if (a == b) {
    console.log('taip');
} else {
    console.log('ne');
}



const akys = 'melynos';

if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta akiu spalva... 🤔');
}


const plaukai = 'rudi';

if (plaukai === 'melyni') {
    console.log('Melynaplaukis');
}

if (plaukai === 'zali') {
    console.log('Zaliaplaukis');
}

if (plaukai === 'rudi') {
    console.log('Rudaplaukis');
} else {
    console.log('Plauku spalva nera ruda... 🤔');
}


console.log('--------------------');

const parosMetas = 'rytas';
const arLyja = false;

if (parosMetas === 'rytas') {
    if (arLyja) {
        console.log('Labas rytas, nepamirsk skecio!');
    } else {
        console.log('Labas rytas!');
    }
} else {
    if (parosMetas === 'diena') {
        if (arLyja) {
            console.log('Labas diena, nepamirsk skecio!');
        } else {
            console.log('Labas diena!');
        }
    } else {
        if (parosMetas === 'vakaras') {
            if (arLyja) {
                console.log('Labas vakaras, nepamirsk skecio!');
            } else {
                console.log('Labas vakaras!');
            }
        } else {
            console.log('Neatpazintas paros metas');
        }
    }
}


console.log("_______________________________________________");

const parosLaikas = "Diena";
const arSninga = true

if (parosLaikas === "Rytas") {
    if (arSninga ) {
        console.log("Reikia ryte nukasti sniega");
    }
    else {console.log("Sniego ryte kasti nereikia");
}
} else 
    if (parosLaikas === "Diena"){
         if (arSninga){
        console.log("Reikia diena nukasti sniega");
    }
    else {console.log("Sniego diena nukasti nereikia"); 
}

} else 
     if (parosLaikas==="Vakaras") {
         if (arSninga) {
            console.log("Reikia vakare nukasto sniega");
        }
        else {console.log("Vakare sniego kasti nereikia");
    }

} else {console.log("Netpažintas paros metas");
}


const laikas = 22;

if (laikas >= 22) {

        console.log("Nakties metas");
    }
    else {

        console.log ("Dienos metas")
    }


