/*
UZDUOTIS:
- gaunam, kiek sienu turi namas ;
- gaunam, kokio plocio yra kiekviena siena (metrais);
- sienos neturi angu ir/ar skyliu ;
- gaunam sienos auksti, kuris visur yra vienodas ;
- turim plytos dydi (aukstis ir plotis) (metrais) ;
- reikia suzinoti, keliu plytu mums reikes, jei plytu skaldyti negalima ;
*/

function siena (sienuKiekis, sienuPlotis, sienosAukstis) {
    console.log("SienųKiekis :", sienuKiekis);
    console.log("SienųPlotis (cm) :", sienuPlotis);
    console.log("SienųAukštis (cm) :", sienosAukstis);

    return sienuKiekis * sienuPlotis * sienosAukstis

}

const siena1 = siena (1,200,200);
console.log(siena1);

function plytos (plytosAukštis, plytosPlotis){

    console.log("PlytosAukštis (cm):",plytosAukštis);
    console.log("PlytosPlotis (cm):", plytosPlotis);

    return plytosAukštis * plytosPlotis
}

const plyta = plytos (25, 10);
console.log(plyta);


function plytuKiekis (siena1, plyta) {
    
 return  siena1/plyta
}
 
const kiekis = plytuKiekis (siena1, plyta);
console.log(kiekis);