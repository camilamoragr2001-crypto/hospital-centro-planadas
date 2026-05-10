let numeroGuardado = "";

function ingresar(){

    let tipo = document.getElementById("tipoDocumento").value;
    let numero = document.getElementById("numeroDocumento").value;
    let regimen = document.getElementById("regimen").value;
    let eps = document.getElementById("eps").value;

    if(tipo === "" || numero === "" || regimen === "" || eps === ""){
        alert("Complete todos los campos");
        return;
    }

    // guardar número de documento
    numeroGuardado = numero;

    document.getElementById("pantalla1").classList.add("oculto");
    document.getElementById("pantalla2").classList.remove("oculto");
}

function mostrarCitas(){

    document.getElementById("pantalla2").classList.add("oculto");
    document.getElementById("pantalla3").classList.remove("oculto");
}

function mostrarResumen(){

    let fecha = document.getElementById("fecha").value;

    let medicoSeleccionado = document.querySelector('input[name="medico"]:checked');

    if(fecha === "" || !medicoSeleccionado){
        alert("Seleccione fecha y médico");
        return;
    }

    let medico = medicoSeleccionado.value;

    document.getElementById("pantalla3").innerHTML = `
        <div style="text-align:center; padding:30px;">

            <h2 style="color:green;">
                SU CITA HA SIDO ASIGNADA CON ÉXITO
            </h2>

            <p><strong>Número de documento:</strong> ${numeroGuardado}</p>

            <p><strong>Fecha:</strong> ${fecha}</p>

            <p><strong>Médico:</strong> ${medico}</p>

            <button onclick="location.reload()">
                FINALIZAR
            </button>

        </div>
    `;
}
