// Filter f-ja naudojama sukurti kitą duomenų masyvą, kuris tenkina tam tikras sąlygas
// Kitaip sakant iš duoto duomenų masyvo išfiltruoja tam tikrus duomenis ir juos pateikia naujame masyve


// Atspausdinti tik teigiamų skaičių duomenų masyvą :

const skaičiai = [8, -3, 9, -17, 0, 6, -3.14];
const rezultatas = skaičiai.filter (x1)

function x1 (skaičiai) {

    return skaičiai>=0
}

console.log (rezultatas);


// Atspausdinti skaičių masyvą, kurie didesni nei skaičius 6 :

const skaičiai1 = [8, -3, 9, -17,7, 0, 6, -3.14];
const rezultatas1 = skaičiai1.filter (item => item>6)

console.log(rezultatas1);

//  Atspausdinti naują duomenų masyvą, kurį sudaro žodžiai su 5 ir mažiau raidžių :

const zodynas = ['labas', 'rytas', 'sakau', 'tau',"aš",'Mefistofelis', 'barsukas', 'guolis', 'raguolis', 'zaliapjove'];
const rezultatas2 = zodynas.filter (item => item.length <=5);

console.log(rezultatas2);




