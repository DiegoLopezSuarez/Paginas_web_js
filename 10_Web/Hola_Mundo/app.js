function saludar() {
    console.log(`Hola Mundo`)
}

function despedir() {
    console.log(`Adiós Mundo Cruel`)
}

function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)

    document.querySelector('#btnDespedir')
    .addEventListener('click', despedir)
}

// window.addEventListener('load', main) esta formula tarda mas porque requiere que se suba todo lo que puede parecer en ventana, incluidasa imagenes. En cambio la siguiente es ams rapida y especifica porque solo pide que se cargue el DOM para poder empezar, aunque no se haya cargado el resto:

document.addEventListener('DOMContentLoaded', main)

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */

