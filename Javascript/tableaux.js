/*var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"];

for (var i = 0; i < myTableau.length; i++) 
{
   console.log("Fruit : "+myTableau[i]);
}

sup = myTableau.sort();
console.log(sup);*/

//Exercice tableaux ncode + chat gpt

/*let x = parseInt(prompt("combien de nombre veux-tu entrer?"));
let myTableau = [];

for (i = 0; i < x; i++) {
    let valeur = parseInt(prompt("entrez le nombre:" + (i + 1)));
    myTableau.push(valeur);
}

console.log(x);
console.log("Voici le tableau:", myTableau);

let max = Math.max(...myTableau);
console.log("maximum :", max);
let min = Math.min(...myTableau);
console.log("minimum:", min);

function moyenne(myTableau){
    let somme = 0;

    for (let i = 0; i< myTableau.length; i++){
        somme += myTableau[i];
    }
    return somme / myTableau.length;
}

let moy = moyenne(myTableau);
console.log("moyenne :", moy.toFixed(2));

document.getElementById("zoneMoyenne").innerHTML = `voici la moyenne de vos données : ${moy.toFixed(2)}`; 
document.getElementById("zoneTableau").innerHTML = `Voici le tableau : ${myTableau.join(' ')}`;*/

//Exercice - 2 - chat gpt

let x = parseInt(prompt("combien de nombres veux-tu rentrer dans le tableau?"));
let tab =[];
let pairs =[];
let impairs =[];

for (i = 0; i < x; i++) {
    let valeur = parseInt(prompt("entrez le nombre:" + (i + 1)));
    tab.push(valeur);

        if (valeur%2 === 0){
        pairs.push(valeur);
    } else{
        impairs.push(valeur);
    }
}

function moyenne(tab){
    let somme = 0;

    for (let i = 0; i< tab.length; i++){
        somme += tab[i];
    }
    return somme / tab.length;
}

let moy = moyenne(tab);

console.log("voici la moyenne du tableau:", tab);
console.log("voici le tableau:", tab);
console.log("nombres pairs :", pairs);
console.log("nombres impairs:", impairs);

document.getElementById("zoneTableau").innerHTML = `voici le tableau complet: ${tab}`;
document.getElementById("zonePair").innerHTML = `voici le tableau des pairs: ${pairs}`;
document.getElementById("zoneImpair").innerHTML = `voici le tableau des impairs: ${impairs}`;

