



//Exercice 1-Saisie
/*let prenom = prompt("Entrez un prénom (laissez vide pour arrêter):");
let compteur = 0;

while (prenom !== null && prenom.trim() !=="") 
{
   compteur++;
   prenom = prompt("Entrez un prénom (laissez vide pour arrêter):");
}
console.log("Nombre de prénoms saisis:", compteur)*/




//Exercice 2-entiers inférieurs à N

/*let N = prompt("Entrez un nombre:");
do {
   (N--);
   console.log(N--);
}while (N>0);
console.log("fin de boucle")*/
//jsp pq ça met que les nombres impairs.

//autre façon de faire 
/*let N = prompt("entrez un nombre:");

for (let i = 0; i < N; i++)
{
   console.log(i);
}*/




//Exercice 3-Moyenne
/*let N = prompt("entrez un nombre entier (pour arrêter entrez 0):");
let InitialValue = 1

while (N !== 0 && N.trim() !=="");
{
   (s = N.reduce(cancelIdleCallback, InitialValue));
}
console.log(s)*/
//bon jsp je trouve pas




//exercice 4-Multiples correction
/*let N = parseInt(prompt("Entrez un nombre :"));
let X = parseInt(prompt("Quel nombre par lequel voulez-vous multiplier le premier ?"));
let i = 1;

while (i <= N) {
    let result = X * i;
    console.log(`${X} x ${i} = ${result}`);
    i++;
}

console.log("Fin de la boucle");*/




//exercice 5- Nombre de voyelles
/*let myVar = prompt("entrez un mot de votre choix");
let c = myVar.substring(i, i+1);
let v = "aeiouy"

for (let i = 0; i < myVar.length; i++)
   {

   }*/

/*let mot = prompt("Entrez un mot :");
let voyelles = "aeiouyAEIOUY"; // On inclut aussi les majuscules si jamais
let compteur = 0;

for (let i = 0; i < mot.length; i++) {
    let lettre = mot.substring(i, i + 1);
    if (voyelles.indexOf(lettre) !== -1) {
        compteur++;
    }
}

console.log("Nombre de voyelles dans le mot :", compteur);*/


//exercice 1 chat gpt

/*let mot = prompt("entrer un mot:");
let voyelles = "aeiouyAEIOUY";
let compteur = 0;
for (let i = 0; i < mot.length; i++)
{
   let lettre = mot.substring(i, i + 1);
   if (voyelles.indexOf(lettre) !== 1)
   {
      compteur++;
   }
}
console.log("nombre de consonnes dans le mot:", compteur);*/


//exercice 2 chat gpt
/*let N = Number(prompt("entre un nombre entier positif N"));
let somme = 0;
for (i = 1; i <= N; i++)
{
   if (N <= 0 || Number.isNaN(N)){
      alert("ce nombre n'est pas valide")
   }
   somme = somme + i;
}
console.log("somme de tout les nombres:", somme);*/


//exercice 3 chat gpt

/*let x = Number(prompt("entrez un nombre entier positif:"))
let l = Number(prompt("entrez un nombre jusqu'où vous voulez le multiple du 1er:"))

for (let i = 0; i <= l; i++) 
{
   let result = x*i
   console.log(x, "*", i, "=", result)
}
console.log("fin de boucle")*/


//exercice 4 chat gpt (nombres pairs et impairs)

/*let A = Number(prompt("entrez un nombre de départ:"));
let B = Number(prompt("entrez un nombre de fin"));

for (let i = A; i <= B; i++)
{
   if (A > B){
      let temp = A;
      A = B;
      B = temp;
   }
//ca marche pas l'inversion des valeurs
   if (i%2 === 0)
      {
        console.log(i, "ce chiffre est pair");
      } 
   else {
      console.log(i, "ce chiffre est impair");
   }
}
console.log("fin de la boucle");*/

//exercice 5 chat gpt

/*let N = Number(prompt("devinez un nombre entre 1 et 100:"));
let compteur = 0
let result = Math.floor(Math.random()*100)+1
while (N !== result)
{
   if (N < result){
      console.log("nombre trop petit recommencez");
   }
   else if(N > result){
      console.log("nombre trop grand recommencez");
   }
   else {
      console.log("bravo!")
   }
}
console.log("fin de boucle")*/