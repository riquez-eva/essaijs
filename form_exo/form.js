function checkForm(f){
    alert("Envoyé avec succès!");
    return false ; // do not submit the form
}

//mettre le résultat de la liste déroulante dans le text area

let liste = document.getElementById('sujet');
let zoneTexte = document.getElementById('zoneTexte');

liste.addEventListener("change", function(){
    zoneTexte.value = this.options[this.selectedIndex].text;
});

//msg d'alerte 
  document.getElementById("form").addEventListener("submit", function(event) {
    const pac = document.getElementById("pac").value.trim();

    if (pac === "") {
      event.preventDefault(); // Empêche l'envoi du formulaire
      alert("Entrez le nom de la personne à contacter svp !");
    } else {
        checkForm(f);
    }
  });