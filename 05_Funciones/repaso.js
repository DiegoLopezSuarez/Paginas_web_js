// OBJETOS

function algo(x) {}

let o = {
    o1: {}
}

algo(o)
algo({})

// FUNCIONES

function algo(x) {
    let f = x()
}

let o = function () {
    let o1 = function () {}
}

algo(o)
algo(function () {})


// Formas de crear funciones

// Declaracion
function suma1(a,b) {
    return a+b
}

// Asignación
let suma2 = function (a,b) {
    return a+b
} 


// ES6 Funciones Arrow o Lambdas

let suma3 = function (a,b) {
    return a+b

//funtion se sustituye por arrow => La forma moderna de escribir
    
let suma3a = (a,b) => {return a+b} 
let suma3b = (a,b) => {return a+b} 

//Es igual que.... (escrito bien...)

let suma3a = (a,b) => {return a+b} 
let suma3b = (a,b) => a+b 

//Cuando solo hay un parametro, se le puede quitar los parentesis.ej:
let cuadrado = a => a*a 

let z = suma1(5,6)
console.log(suma1(5,6));
console.log(suma2(5,6));
