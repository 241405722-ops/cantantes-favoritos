
/* BOTÓN DE LA PÁGINA PRINCIPAL */
const botonMensaje = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

if (botonMensaje && mensaje) {
    botonMensaje.addEventListener("click", function () {
        mensaje.textContent =
            "¡Gracias por visitar mi página de artistas favoritos!";
    });
}

/* FORMULARIO DE CONTACTO */
const formulario = document.getElementById("formContacto");
const respuesta = document.getElementById("respuesta");

if (formulario && respuesta) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const artista = document.getElementById("artista").value;

        respuesta.textContent =
            "¡Gracias, " + nombre +
            "! Tu artista favorito es " + artista + ".";

        formulario.reset();
    });
}