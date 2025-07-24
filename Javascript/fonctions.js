

//Les fonctions

//on créé un nombre entre 1 et 10
// 3 essais pour deviner le mot
//isRight(n) 
// guess()

/*function getRandomInt(max){
   return Math.floor(Math.random()*(max + 1))
}
const solution = getRandomInt(10)
console.log(solution)

function isRight(n){
   return solution === n
}

function guess(){
   const number = Number(prompt("entrez un chiffre:"))
   return isRight(number)
}

/*for (i = 0; i < 3, i++;) 
{ 
//permet de faire l'essai 3 fois*   
 if (guess()) {
      console.log('bravo')
      break;
    } else if (i === 2) {
      console.log("vous avez perdu!")
    }
}*/
/*function boucle(x) 
{
    if (x >= 10) 
    { 
        return; //condition d'arrêt : ne peut pas aller au delà de 9
    }

    console.log("x : "+ x); //affiche la valeur actuelle de x

    boucle(x + 1); // appel récursif
}

boucle(0); // appel initial de la fonction*/

//Exercice 1 fonctions


         //calculer produit et cube
/*let a = Number(prompt("Entrez un nombre:"));
let b = Number(prompt("Entrez un deuxième nombre:"));

function produit(x, y)
{
   let a = x;
   let b = y;
    var dimensions = x*y;
    return dimensions;
}

function cube(x)
{
   let a = x;
   var cb = x*x*x;
   return cb;
}

var dim = produit(a, b);
var cb = cube(a);
console.log("le cube de", a, "=", cb);
console.log("le produit de", a, "x", b, "=", dim);

      //afficher les résultats des calculs de produit
      
document.getElementById("resultproduit").innerHTML = `Voici le résultat du produit : ${a} × ${b} = ${dim}`;

      //afficher les résultats des calculs de cube

document.getElementById("resultcube").innerHTML = `Le cube du nombre ${a} est égal à ${cb}`;

         //photo du papillon
var image = document.createElement('img');

image.src = "papillon.jpg";

document.getElementById("ZoneImage").appendChild(image);*/



// Exercice 2 - string token correction

/*function strtok(str1, str2, n){

var arrayOfStrings = str1.split(str2);

console.log(`La chaîne d'origine est : ${str1}`);
console.log(`Le délimiteur est : ${str2}`);
console.log(
   `La phrase coporte ${arrayOfStrings.length} mots :`, arrayOfStrings.join("/")
);

if (n > 0 && n <= arrayOfStrings.length) {
   return arrayOfStrings[n - 1];
} else {
   return "Mot introuvable";
}
}

let phrase = "coucou je suis dans le premier module MSDIW";
let separateur = " ";
let motNumero = 1;

let mot = strtok(phrase, separateur, motNumero);
console.log(`\nLe mot numéro ${motNumero} est : ${mot}`);*/