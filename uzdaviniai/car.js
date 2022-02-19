/*
    Automobilis:
    - kuro kiekis (litrai) ;
    - kuro sanaudos litrais 100-ui kilometrų ;
    - norimas nuvažiuoti atstumas (kilometrais) ;
    Ar pavyks nuvaziuoti norimą atstumą su turimu kuro kiekiu?
*/

function atstumas (a,b,c) {
    console.log("Kuro kiekis/l :", a);
    console.log("Kuro sąnaudos 100km/l :", b);
    console.log("Norimas nuvažiuoti km atstumas :", c);

    if (((a/b)*100)>=c) {

        return "Pavyks nuvažiuoti norimą atstumą"
    }

    else {

        return " Norimo atstumo nuvažiuoti nepavyks"
    }
}

const test1 = atstumas(10,10,101);
console.log(test1);