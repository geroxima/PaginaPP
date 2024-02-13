
const NOTA = document.querySelector("#nota")
const BOTON = document.querySelector("#carga")

BOTON.addEventListener("click", () => {
    const PP = document.querySelector("#pp").value
    const PF = document.querySelector("#pf").value
    if (PP < 50) {
        NOTA.innerText = "Lo Sentimos si tu pp es Menor al 50% no puedes tener una nota final"
    }
    else if(){
        
    }
})