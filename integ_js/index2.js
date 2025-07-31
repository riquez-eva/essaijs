//exercice évènements

let random = Math.floor(Math.random() * 10 + 1);
console.log(random);
let compteur = 0;



function verif(){
let nb1 = Number(document.getElementById("textBox1").value);
let label = document.getElementById("label1");

    if (nb1 < random){
        label.textContent = "trop petit recommence abruti";
        compteur++;
    }
    else if (nb1 > random){
        label.textContent = "trop grand orh";
        compteur++;
    }
    else{
        compteur++;
        label.textContent = "c'est ça, tu l'as trouvé en " + compteur + " essai"; 
    }
}


