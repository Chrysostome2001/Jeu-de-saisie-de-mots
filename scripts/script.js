//afficherResultat :cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur
function afficherResultat(score, nombreQuestions){
    let spanScore = document.querySelector(".zoneScore span")
    let resultat =`${score} / ${nombreQuestions}`
    
    spanScore.innerText = resultat
}


/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}


//Fonction ErreurMessage
function ErreurMessage(message){
    let spanErreurMessage = document.getElementById("spanErreurMessage")

    if(!spanErreurMessage){
    let popup = document.querySelector(".popup")
    let spanErreurMessage = document.createElement("span")
    spanErreurMessage.id = "spanErreurMessage"
    popup.append(spanErreurMessage)
    spanErreurMessage.innerText = message
    }

    spanErreurMessage.innerText = message
}

//Créez une fonction gererFormulaire. Cette fonction va prendre en paramètre le score à envoyer, et s’occuper de gérer le formulaire.
function gererFormulaire(scoreEmail){
    try{
        //Vérifiez un champ à l’envoi du formulaire
                let baliseNom = document.getElementById("nom")
                let nom = baliseNom.value
                validerNom(baliseNom.value)

                let baliseEmail = document.getElementById("email")
                let email = baliseEmail.value
                validerEmail(baliseEmail.value)

                ErreurMessage("")
                afficherEmail(nom, email, scoreEmail)

    }catch(erreur){
        //Gestion d'erreurs
        ErreurMessage(erreur.message)


    }
}
function validerNom(nom){
    if(nom.length < 2)
        throw new Error("Le nom est trop court. ")
}

function validerEmail(email){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if(!emailRegExp.test(email))
        throw new Error("L'email n'est pas valide. ")
}

//lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres.
function lancerJeu(){

    let score = 0
    let listePropositions = listeMots

    initAddEventListenerPopup()

//fonction afficherProposition, qui va prendre en paramètre le mot à afficher, et afficher ce mot dans la div zoneProposition
    function afficherProposition(proposition){
        let zoneProposition = document.querySelector(".zoneProposition")
        zoneProposition.innerText = proposition
    }

//Récupérez le bouton de validation et écoutez l’événement click en utilisant la méthode addEventListener.
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0

    afficherProposition(listePropositions[i])
    btnValiderMot.addEventListener("click", () => {
        // comparez ce qu’a écrit l’utilisateur et le mot proposé
        if(inputEcriture.value === listePropositions[i]){
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value = ''
        if(listePropositions[i] === undefined){
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        }else{
            afficherProposition(listePropositions[i])
        }
    //Faire un console.log avec la valeur contenue dans cette balise.
    //console.log(inputEcriture.value)  
    })


    //Écoutez l’événement “change” sur les boutons radio
let listebtnRadio = document.querySelectorAll(".optionSource input")

for(let index = 0; index < listebtnRadio.length; index++){
        listebtnRadio[index].addEventListener("change", (event) => {
            //console.log(event.target.value)

            if(event.target.value == "1"){
                listePropositions = listeMots
            }else{
                listePropositions = listePhrases
            }

            afficherProposition(listePropositions[i])
        })
}

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) =>{
        //empêchez le comportement par défaut de se produire 
        event.preventDefault()
        console.log("pas de rechargement")
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)

    })

    
    afficherResultat(score, i)
}





