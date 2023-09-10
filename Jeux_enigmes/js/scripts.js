


const reponse = document.getElementById("reponse");
const submit = document.getElementById("submit")
const pageSuivante = document.getElementById("pageSuivante")
submit.addEventListener("click", EcouterReponse)

function EcouterReponse(event) 
{
    event.preventDefault();
    console.log(reponse.value);
    console.log("J'ai clické")
    if (reponse.value !== "samedi")
    {
        alert("Mauvaise réponse")
    }

    else {
        pageSuivante.classList.remove("pageSuivante")
    }
}
