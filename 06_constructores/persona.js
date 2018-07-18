// para obligar a esribir bien se pone en 1a linea del fichero: 'use strict' si incumples al escribir una buena practica da un error, convierte la recomendacion en norma

//let pesona1 se puede quitar el let por que esta en global

let persona1 = {
    nombre: 'Pepe',
    edad: 33,
    profesion : 'Informático',
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

persona1.saludar()

//ejecutar un metodo q he inventado
persona1.saludar()

// sacar por consola la propiedad
console.log(persona1.nombre, persona1.edad)

//sacar por consola el objeto incluyendo sus propiedades
console.log(persona1)

//VOLVER A ESCRIBIR EL EJERCICIO:

// Objeto Literal
let persona1 = {
    /* nombre: 'Pepe',
    edad: 33,
    profesion : 'Informático',
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    } */
}
// Por debaja se ejecuta new Object()

// persona1.saludar()
// console.log(persona1.nombre, persona1.edad)
console.log(persona1)
console.log(persona1.constructor)

function Persona () {}
let persona2 = new Persona()
console.log(persona2)
console.log(persona2.constructor)

// otra etapa de lo mismo reescrito:

// Objeto Literal
let persona1 = {
    nombre: 'Pepe',
    edad: 33,
    profesion : 'Informático',
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
// Por debaja se ejecuta new Object()

// persona1.saludar()
// console.log(persona1.nombre, persona1.edad)
// console.log(persona1)
// console.log(persona1.constructor)

function Persona () {
    this.name = 'Pepe'
    this.edad = 22
    this.profesion = 'Informático'
    console.log(this)
}
new Persona()
//console.log(persona2)
//console.log(persona2.constructor)

// tercera copia:

// Objeto Literal
let persona1 = {
    nombre: 'Pepe',
    edad: 33,
    profesion : 'Informático',
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
// Por debaja se ejecuta new Object()

// persona1.saludar()
// console.log(persona1.nombre, persona1.edad)
console.log(persona1)
// console.log(persona1.constructor)

function Persona () {
    this.nombre = 'Pepe'
    this.edad = 33
    this.profesion = 'Informático'
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
let persona2 = new Persona()
console.log(persona2)
//console.log(persona2.constructor)

//


function Persona (x,y,z) {
    this.nombre = x
    this.edad = y
    this.profesion = z
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
let persona2 = new Persona('Pepe',23,'Informático')
console.log(persona2)
//console.log(persona2.constructor)

let persona3 = new Persona('Luis',33,'Bombero')

// esto es igual que decir:

function Persona (nombre, edad, profesion) {
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
let persona2 = new Persona('Pepe',23,'Informático')
console.log(persona2)
//console.log(persona2.constructor)

let persona3 = new Persona('Luis',33,'Bombero')

// Y ASI SE PODRIAN IR INCLUYENDO MAS PERSONAS

// y si me supiera los nombres de las variables:

function Persona (nombre, edad, profesion) {
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
    this.saludar = function() {
        console.log(`
        Hola, soy ${this.nombre} y tengo ${this.edad} años
        y soy ${this.profesion}`)
    }
}
let persona2 = new Persona('Pepe',23,'Informático')
//console.log(persona2)
//console.log(persona2.constructor)
persona2.saludar()

let persona3 = new Persona('Luis',33,'Bombero')
//console.log(persona3)
persona3.saludar()



