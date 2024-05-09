let monAge = 42
let monPrenom = "Junior"
console.log(monAge)
console.log(monPrenom)

//operateurs
const entreePremiereSemaine = 1000
const entreeDeuxiemerSemaine = 1000
const totalentree = entreePremiereSemaine + entreeDeuxiemerSemaine
console.log(totalentree)
let Placevendue = 150
Placevendue += 10
console.log(Placevendue)
Placevendue -= 10
console.log(Placevendue)
Placevendue *= 10
console.log(Placevendue)
Placevendue /= 10
console.log(Placevendue)

//concatenation
let monTitre = "Le titre de mon article"
let monContenu = " Le contenu de mon article"
let punchline = monTitre + monContenu
console.log(punchline)

//Différenciez les types de données
const entrePremiereSemaine = Number("1000")
const entreDeuxiemerSemaine =Number("1000")
const totalentre = entrePremiereSemaine + entreDeuxiemerSemaine
console.log(totalentre)

//Exercice1
let totalLivres = 500
//acheter 50 livres de plus
totalLivres += 50
//en jeter 10 ;
totalLivres -= 10
//racheter 5 des livres jetés
totalLivres += 5
let affichageTotalLivres = "Notre bibliothèque possède "
affichageTotalLivres += totalLivres
affichageTotalLivres += " livres"
console.log(affichageTotalLivres)

//les objets
let ticket = {
    nomFilm: "Batman",
    prix: 10,
    numeroSalle: 3 
}

let nom = "Vigan Junior"
console.log(ticket)
console.log(nom)
//Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE

let texteAffichage = "Bonjour " + nom + ", votre film " + ticket.nomFilm +" est en salle " + ticket.numeroSalle

console.log(texteAffichage)


//Les tableaux 
////////////////////
// Copie par valeur
////////////////////
let variableSimple1 = 25
let variableSimple2 = variableSimple1

variableSimple2 = 30

// Le console.log va afficher 25, le fait d’avoir changé la valeur de variableSimple2 ne change rien pour variableSimple1
console.log("variableSimple1", variableSimple1)
console.log("variableSimple2", variableSimple2)

///////////////////////
// Copie par référence
///////////////////////
let variableComplexe1 = ['pomme', 'cerise']
let variableComplexe2 = variableComplexe1
let variableComplexe3 = [...variableComplexe1];

variableComplexe1.push('poire')

// Le console.log va afficher pomme cerise ET poire. On a modifié la seconde variable, mais le contenu de la première a été changé aussi, parce que c’est le même contenu.
console.log('variableComplexe1', variableComplexe1)
console.log('variableComplexe2', variableComplexe2)
console.log('variableComplexe3', variableComplexe3)

//Exo
const playlist = ["On en reparlera","nocif","Maman m'aime"]

let totalMorceaux = playlist.length
playlist.unshift("Mosaique solitaire","Beautifull")
playlist.pop()
console.log(playlist)

//Récupérez un élément avec getElementById
let baliseZoneProposition = document.getElementById("zoneProposition")
console.log(baliseZoneProposition)

//Heuteur d'un élément
console.log(baliseZoneProposition.clientHeight)

//Récupérez un élément avec querySelector
let baliseZonePropositionSpan = document.querySelector("#zoneProposition span")
console.log(baliseZonePropositionSpan)

//Récupérez un élément avec querySelectorAll
let listeInputRadio = document.querySelectorAll(".zoneChoix input")
console.log(listeInputRadio)

// parcourir les différents éléments de cette liste un par un pour y accéder
for(let i = 0; i < listeInputRadio.length; i++)
    console.log(listeInputRadio[i])

//Utilisez setAttribute pour modifier les attributs
let mots = document.getElementById("mots")
mots.setAttribute("value","5")

//Utilisez classList pour modifier les classes
let zoneChoix = document.querySelector(".zoneChoix")
//l’utilisation de la propriété classList et des méthodes add et remove
zoneChoix.classList.add("nouvelleClasse")
console.log(zoneChoix)
zoneChoix.classList.remove("nouvelleClasse")
console.log(zoneChoix)

//Utilisez la méthode CreateElement
let nouvelleElement = document.createElement("p")
let zoneChoixs = document.getElementById("zoneChoix")
zoneChoixs.appendChild(nouvelleElement)
let lom = nouvelleElement.classList.add("junior")
console.log(document.querySelector("p"))

//je crée deux variables qui vont contenir le texte du titre et du paragraphe 
let contenuTitre = "AzerType"
let contenuParagraphe = "L'application pour apprendre à taper plus vite"

//Utilisez l’interpolation pour générer du HTML
let div = `
            <div>
                <h1>${contenuTitre}</h1>
                <p>${contenuParagraphe}</p>
            </div>
            
                `
let body = document.querySelector("body")
body.innerHTML = div









