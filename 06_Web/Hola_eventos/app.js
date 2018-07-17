function app () {

    // Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector('#output')

    // Defino los manejadores de eventos de algunos nodos
    // domBtnSaludar.addEventListener('click', mostrar)
    // domBtnBorrar.addEventListener('click', borrar)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', saludar)
    
    //dos funciones por separado:
    
    function mostrar() {
        domOutput.innerHTML = ''
        if (!!domNombre.value) {
            domOutput.innerHTML = `Hola, <strong>${domNombre.value}</strong>`
        } 
    }

    function borrar () {
        domNombre.value = ''
        mostrar()
    }

    function saludar(ev) {
        console.log(ev)
    }

        //dos funciones combinadas en una sola linea, otra manera de hacerlo, un unico manejador:

        function saludar(ev) {
            if (ev.target.id === 'btnBorrar') {
                domNombre.value = '' 
            }
            domOutput.innerHTML = ''
            if (!!domNombre.value) {
                domOutput.innerHTML = `Hola, <strong>${domNombre.value}</strong>`
            } 
        }

        // otra forma mas de escribirlo usando doble click para ver que una misma funcion puede responder a varios botones o a varios eventos de un mismo botón:

        function saludar(ev) {

            if (ev.type === 'dblclick') {
                domOutput.innerHTML = "DBLCLICK no se debe usar"
                return
            }
            if (ev.target.id === 'btnBorrar') {
                domNombre.value = '' 
            }
            domOutput.innerHTML = ''
            if (!!domNombre.value) {
                domOutput.innerHTML = `Hola, <strong>${domNombre.value}</strong>`
            } 
        }



}
document.addEventListener('DOMContentLoaded', app)
