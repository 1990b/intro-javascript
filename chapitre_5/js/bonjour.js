/* 
Exercice : fonction bonjour avec saisies utilisateur
*/

function bonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("Entrez votre prénom :");
var nom = prompt("Entrez votre nom :");
console.log(bonjour(prenom, nom));