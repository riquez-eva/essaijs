/*
var C 
var F
C = prompt("saisissez la température ambiante")
F = (C*9/5)+32
alert(F)
*/


/*
alert(nom)
var prenom
prenom = prompt("saisissez votre prénom")
alert(prenom)
*/

/*exercices opérateurs*/
/*var a 
var b
var c
var d

a = "100"
alert("Ceci est une chaine de caractères:" + a)
b = 100
c = 1
b = --c
alert(b)

c = c + a
alert(c)
d = Boolean
d = !d
alert(d)*/

/*var reponse = "oui"; 

if (reponse == "oui")
{    
    console.log("Bonne réponse !");    // Affichera 'Bonne réponse' dans la console
}*/

// Condition avec ET 
/*var age
var permis
age = 20
if (age > 18 && permis =="Voiture")  
{
    console.log("Vous avez plus de 18 ans ET vous avez un permis de conduire voiture, vous pouvez conduire");
}
*/
/*var reponse = "non"; 

// 1er cas
if (reponse == "oui")
{
    console.log("Bonne réponse !");
}

// 2ème cas
if (reponse == "non")
{
    console.log("Mauvaise réponse !");
}*/

/*var variable = "3"; 

switch (variable)
{   
  case "1" :
     console.log("Cas 1");  
     break; 

  case "2" :
     console.log("Cas 2");  
     break;

  case "3":
     console.log("Cas 3");
     break; 
}*/

//exercice 1 sur les conditions

/*let A = prompt("donnez un nombre")
alert(A)
B = A%2
if (B==0)
{
   alert("Votre nombre est pair")
}
else
{
   alert("votre nombre est impair")
}*/

//exercice 2 

/*let b = prompt("Donnez votre année de naissance svp:");
alert(b);

if (b<2007)
{
   alert("vous êtes majeur")
}
else{
   alert("vous êtes mineur")
}*/

//exercice 3 moi

/*let A = Number(prompt("entrez un nombre entier svp"))
let B = Number(prompt("entrez un deuxième nombre entier svp"))
let OP = prompt("entrez un opérateur : +,-,* ou / :") 
let C
switch (OP){
   case "+" :
      C = A + B;
break;
   case "-" :
      C = A - B;
break;
   case "*" :
     C = A * B;
break;
   case "/" :
     C = A / B;
break;
   if (B==0){
      alert("Erreur: division par 0 impossible")
  }
alert("résultat =", C)
}*/

// exercice 3 corrigé

//etape 1 demander les eux nombres
/*const a = Number(prompt("entrez le premier nombre entier"));
const b = Number(prompt("entrez le seconde entier"));

//vérifier la validité des nombres 
if (Number.isNaN(a) || Number.isNaN(b)){
   alert("Erreur : vous devez entrer des nombres entiers valides");
}
else
{
   //Etape 2 demander l'opérateur
   const op = prompt("entrez un opérateur (+, -, *, /) :");
   
   let result; 
   switch (op){
      case "+":
         result = a + b;
      break;
      case "-":
         result = a - b;
      break;
      case "*":
         result = a * b;
      break;
      case "/":
         if (b === 0){
            alert("erreur : division par 0 impossible!");
         }
         result = a / b;
      break;
      default:
         alert("Erreur: opérateur inconnu. Utilisez +,-,* ou /.");
         throw new Error("opérateur invalide");
   }
// Etape 3 : afficher le résultat
   alert(result);
}*/

//Les boucles

/*console.log("Table de multiplication par 5");
console.log("=============================");

for (i=0; i<=10; i++)
{
    resultat = 5 * i;

    console.log("5 * "+i+" = "+resultat);
}

// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");*/

/*var tableau = ["Paul", "Pierre", "Anne", "Sophie"];

for (var i in tableau) 
{
    console.log(tableau[i]);
}*/
