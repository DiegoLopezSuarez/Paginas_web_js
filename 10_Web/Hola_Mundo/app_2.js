function saludar() {
    console.log(`Hola Mundo`)
}

function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}

(function () {
    window.addEventListener('load', main)
})()

// al final queda asi:

function app() {
    let amigo = "Pepe"
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
    document.querySelector('#btnDespedir')
    .addEventListener('click',despedir)

    saludar()

  function saludar() {
        console.log(`Hola ${amigo}`)
    }
  
    function despedir() {
        console.log(`Adios ${amigo}`)
    }

}

// si fuera para toda la ventana
//(function () {
    //window.addEventListener('load', app)
//})()

//lo correcto para hacerlo desde el documento y no desde la ventana: 

(function () {
    document.addEventListener('DOMContentLoaded', app)
})()

//  En la práctica es lo mismo que 
// document.addEventListener('DOMContentLoaded', app)



