function principal  () {
    let x = 25
    let verDatos = function () {}
}

principal()
verDatos()
// console.log(datos)

// escribir lo mismo de otra manera:

function principal  () {
    let x = 25
    let verDatos = function () {}

    function pintarDatos() {

    }
}

principal()
verDatos()
pintarDatos()
// console.log(datos)

function principal  () {
    let x = 25
    let verDatos = function () {
        console.log('Mostrando: ', x)
    }

    function pintarDatos() {
        console.log('Pintando: ', x)
    }

    pintarDatos()
    verDatos()
}

principal()

// console.log(datos)