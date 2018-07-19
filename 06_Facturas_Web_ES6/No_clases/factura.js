function Factura (empresa, total) {
    this.empresa = empresa
    this.total = total
}

let f1 = new Factura("Boracay", 200)
f1.concepto = 'Libros'
let f2 = new Factura('Ghoogle', 3000)

console.log(f1)
console.log(f2)

let a = {}
let b = {x:23}

function Factura (empresa, total) {
    this.empresa = empresa
    this.total = total
}

Factura.prototype.mostrar = function() {
    console.log(this)
}

//this por que va a remitir al objeto directamente


let f1 = new Factura("Boracay", 200)
f1.concepto = 'Libros'
let f2 = new Factura('Ghoogle', 3000)

console.log(f1)
console.log(f2)

// tambien se puede decir

f1.mostrar()
f2.mostrar()

let a = {}
let b = {x:23}
console.log(a)

// version final de todo el ejercicio:

function Factura (empresa, total) {
    this.empresa = empresa
    this.total = total
}

Factura.prototype.mostrar = function() {
    console.log(this)
}

let f1 = new Factura("Boracay", 200)
f1.concepto = 'Libros'
let f2 = new Factura('Ghoogle', 3000)

f1.mostrar()
f2.mostrar()

let a = {}
let b = {x:23}
console.log(a)