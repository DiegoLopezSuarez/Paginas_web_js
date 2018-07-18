let factura = {
    empresa : {
        nombre : '',
        direccion : '',
        telefono : '',
        nif : ''
    }, 
    cliente : {
        nombre : '',
        direccion : '',
        telefono : '',
        nif : ''
    }, 
    elementos : [
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
    ],
    importeTotal : '',
    tipoIVA: '',
    formaPago: ''
}
factura.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
}

factura.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
}

let factura1 = {
    empresa : {
        nombre : 'Boracay Ediciones',
        direccion : 'c/ Pez',
        telefono : '587 349 785',
        nif : 'Z-345123876'
    }, 
    cliente : {
        nombre : 'Libreria Tuatalug',
        direccion : 'c/ Tortuga',
        telefono : '543 987 654',
        nif : 'K-434344343'
    }, 
    elementos : [
        {descripcion : 'La Isla del Tesora',
        precio: 30,
        cantidad: 10}, 
        {descripcion : 'Dracula',
        precio: 75,
        cantidad: 5}, 
        {descripcion : 'El Señor de loas Anillos',
        precio: 50,
        cantidad: 24}, 
    ],
    importeTotal : 0,
    tipoIVA: 1.04,
    formaPago: 'Transferencia'
}
factura1.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal +=
            item.precio*item.cantidad*this.tipoIVA
        }
    )

}

factura1.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
}

// A PARTIR DE AQUI ES LA NUEVA PARTE DEL EJERCICIO, CREAR FUNCIONES CONSTRUCTORAS PARA GENERAR LAS FACTURAS DEL EJERCICIO DE ARRIBA, EL MISMO DE LA CARPETA DE 05 OBJETOS

function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre 
    this.direccion = direccion 
    this.telefono = telefono 
    this.nif = nif 
}
function Elementos(descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Factura (tipoIVA, formaPago) {
    this.empresa =''
    this.cliente = ''
    this.elementos = []
    this.importeTotal = 0
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
    }
    this.mostrar = function() {
        // muestre por pantalla el importe total 
        // de la factura en un formato HTML adecuado.
        console.log(this)
    }
}

let factura2 = new Factura(1.04, 'contado' ) 
factura2.empresa = new Empresa(
    'Boracay Ediciones',
    'c/ Pez',
    '587 349 785',
    'Z-345123876')
factura2.mostrar()


let factura1 = {
    empresa : {
       
    }, 
    cliente : {
        nombre : 'Libreria Tuatalug',
        direccion : 'c/ Tortuga',
        telefono : '543 987 654',
        nif : 'K-434344343'
    }, 
    elementos : [
        {descripcion : 'La Isla del Tesora',
        precio: 30,
        cantidad: 10}, 
        {descripcion : 'Dracula',
        precio: 75,
        cantidad: 5}, 
        {descripcion : 'El Señor de loas Anillos',
        precio: 50,
        cantidad: 24}, 
    ],
    importeTotal : 0,
    tipoIVA: 1.04,
    formaPago: 'Transferencia',   
}

factura1.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal +=
            item.precio*item.cantidad*this.tipoIVA
        }
    )
}

factura1.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                if (isNaN(key)) {
                    console.log(`Propiedades de ${key}: `)
                }
                this.pintaDatos(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}

// OTRA MANERA MAS DE ESCRIBIR LO MISMO DEL EJERCICIO DE FUNCIONES CONSTRUCTORAS Y CORREGIDO...

function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre 
    this.direccion = direccion 
    this.telefono = telefono 
    this.nif = nif 
}
function Elemento (descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Factura (empresa, tipoIVA, formaPago) {
    this.empresa = empresa
    this.cliente = 
    this.elementos = []
    this.importeTotal = 0
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
    }
    this.mostrar = function() {
        // muestre por pantalla el importe total 
        // de la factura en un formato HTML adecuado.
        console.log(this)
    }
}

let factura2 = new Factura(
    new Empresa(
        'Boracay Ediciones',
        'c/ Pez',
        '587 349 785',
        'Z-345123876'), 
    1.04, 
    'contado' ) 

factura2.cliente = 
    new Empresa(
        'Libreria Tuatalug',
        'c/ Tortuga',
        '543 987 654',
        'K-434344343')

factura2.elementos.push(
    new Elemento (
        'La Isla del Tesora',30,10)
)

factura2.elementos.push(
    new Elemento('Dracula', 75, 5)
)

factura2.elementos.push(
    new Elemento ('El Señor de loas Anillos', 50, 24)
)

factura2.mostrar()

let factura1 = {}
factura1.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal +=
            item.precio*item.cantidad*this.tipoIVA
        }
    )
}

factura1.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                if (isNaN(key)) {
                    console.log(`Propiedades de ${key}: `)
                }
                this.pintaDatos(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}
