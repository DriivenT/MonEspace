// Attend un submit
document.getElementById("formContact").addEventListener("submit", sendForm);

// Fonction envoi des données du formulaire sur mon adresse mail
function sendForm(e){
    e.preventDefault();

    // Valeurs d'entrée.
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let numTel = document.getElementById("numTel").value;
    let demandePerso = document.getElementById("demandePerso").value;

    document.getElementById("formContact").reset();

    Email.send({
        Host: "smtp.gmail.com",
        Username: "DriivenTOfficiel@gmail.com",
        Password: "drrcyrzgtbntlted",
        To: "DriivenTOfficiel@gmail.com",
        From: "DriivenTOfficiel@gmail.com",
        Subject: `${nom} ${prenom} à une demande. (Message depuis Mon Espace - Portfolio)`,
        Body: 
        `Nom: ${nom} <br/> Prénom: ${prenom} <br/> Email: ${email} <br/> Téléphone: ${numTel} <br/> Message: ${demandePerso}`,
    })
    .then(() => alert("Votre email à été envoyé."))
    .catch((error) => {
        console.log(error);
        alert("Votre mail n'a pas été envoyé, veuillez réessayer.");
    })
}

