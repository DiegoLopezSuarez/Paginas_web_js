// Declarar hay funciones que retornan y que no, las q no pintan algo
//pero no devuelven lo que han hecho
function miFuncion(x) {
    console.log(x)
}
function calcular(x) {
    return 2*x
}

// Declarar & Asignar
let x = 23

// Invocar, llamar, ejecutar
miFuncion(23)

// Asignando el resultado de invocar a la función ...
let z = calcular(12)

// OTRA FORMA DE CREAR FUNCIONES EN JS

let otraFuncion = {}

let otraFuncion = function () {} 

// function otraFuncion () {} son solo dos formas de crear una funcion
let otraFuncion = function () {} 

// OTRA FORMA DE CREAR FUNCIONES EN JS
// function otraFuncion () {}

let otraFuncion = function (x,y) {
    return x*y
} 

let r = otraFuncion(4,5)

//objetos anonimos, sin nombre

algo ({user: 'Pepe',edad: 22})

let otraFuncion = function (x,y) {
    return x*y
} 

otraFuncion(2,4)

// una funcion anonima, al ser onjetos pueden existir sin nombre
//para asignarsela a una variable

let algo = {user: 'Pepe',edad: 22}

let otraFuncion = function (x,y) {
    return x*y
} 

// lo anterior es una funcion anonima, otra forma de pasarla

// OTRA FORMA DE CREAR FUNCIONES EN JS:
// por asignacion
// equivale a function otraFuncion () {}

let otraFuncion = function (x,y) {
    return x*y
} 

// Ejempla de CALLBACK

function verCalculos(x,y, operacion) {
    console.log("El resultado es " + operacion(x,y))
}

// Callback anonimo
verCalculos(3,5, function(a,b) { return a*b})

// Callback con nombre

function sumaCuadrados(x,y) {
    return x*x + y*y
} 

verCalculos(3,5, sumaCuadrados)


