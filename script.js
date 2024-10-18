
const NOTA = document.querySelector("#nota")
const BOTON = document.querySelector("#carga")
const porcentaje = document.querySelector("#porcentaje")

BOTON.addEventListener("click", () => {
    darNota();
})

function darNota() {
    let PC = 0;
    PC = calculoNota();
    switch (PC) {
        case 0:
            NOTA.innerText = "Lo Sentimos si tu pp es Menor al 50% no puedes tener una nota final"
            break;

        case 1:
            NOTA.innerText = "Tu Nota Final es: \n 1"
            porcentaje.innerText = "Tu Porcentaje Final es: \n " + calculoPc();
            break;

        case 2:
            NOTA.innerText = "Tu Nota Final es: \n 2"
            porcentaje.innerText = "Tu Porcentaje Final es: \n " + calculoPc() + "%";

            break;

        case 3:
            NOTA.innerText = "Tu Nota Final es: \n 3"
            porcentaje.innerText = "Tu Porcentaje Final es: \n " + calculoPc() + "%";

            break;

        case 4:
            NOTA.innerText = "Tu Nota Final es: \n 4"
            porcentaje.innerText = "Tu Porcentaje Final es: \n " + calculoPc() + "%";

            break;

        case 5:
            NOTA.innerText = "Tu Nota Final es: \n 5"
            porcentaje.innerText = "Tu Porcentaje Final es: \n " + calculoPc() + "%";

            break;
    }
}

function calculoNota() {
    PC = calculoPc();
    if (PC === 0) {
        return 0
    }

    else if (PC <= 59) {
        return 1
    }

    else if (PC >= 60 && PC <= 69) {
        return 2
    }

    else if (PC >= 70 && PC <= 80) {
        return 3
    }

    else if (PC >= 81 && PC <= 89) {
        return 4
    }

    else if (PC >= 91 && PC <= 100) {
        return 5
    }
}

function calculoPc() {
    const PP = parseInt(document.querySelector("#pp").value); 
    //Chris pt
    const PF = parseInt(document.querySelector("#pf").value);
    let PC;

    //Verificamos si PP es suficiente para si quiera tomar examen final 
    if (PP < 50) {
        return 0
    }
    // Verificamos que el PF sea suficiente para realizar calculos
    else if (PF >= 60) {
        // Si el PP >= 60 entonces existen dos Casos
        if (PP >= 60) {
            // 1, Que PF>= PP 
            if (PF >= PP) {
                PC = PF;
                return PC;
            }
            // 2. Que PF<PP (Aplicamos formula)
            else {
                PC = (0.4 * PP) + (0.6 * PF)
                return PC;
            }
        }
        // Si 50<= PP <=59
        else {

            // Verificamos que se cumpla PF a formula
            let formula = (60 - (0.4 * PP)) / (0.6);

            if (PF >= formula) {
                PC = PF;
                return PC
            }
            else {
                return 1
            }
        }
    }
    // Si no tiene PP suficiente y tampoco un PF>=60
    else {
        return 1
    }

}








