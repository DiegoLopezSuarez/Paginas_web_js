// let oDatos = {}
// let oDatos = {
//     edad: 22
// }
// let oDatos2 = new Object()
// oDatos.nombre = 'Pepe'
// oDatos['apellido'] = 'Perez'

let oDatos = {
    nombre: 'Pepe',
    apellidos: 'Pérez',
    edad: 22
}

oDatos.profesion = 'programador'

console.log(oDatos)

let x = 22
x *= 2 
//daria 44// 
console.log(oDatos *= 3)
//daria 66// 

let oVuelo = {
    airline:'Oceanic',
    number:'815',
    departure : {
            clave_IATA : 'SYD',
            time: '2004-09-22 14:55',
            ciudad: 'Sydney'
            },
    arival: {
            clave_IATA : 'LAX',
            time: '2004-09-23 10:42',
            ciudad: 'Angeles'

            // otra forma...  oVuelo.arival.ciudad = 'Los Angeles', puede ponerse esta propiedad asi escrita fuera del objeto, como función suelta...//
        },

        // lo siguiente se incluye al trabajar orientado a objetos// 

        mostrar : function () {
            console.log(`Soy un vuelo`)
    }

    oVuelo.arival.ciudad = 'Los Angeles'

console.log(oVuelo)

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
    //ASI CONFIRMO SI ALGO ES O NO UN OBJETO: //

    if (typeof oVuelo[key] === 'object') {        
    } else {
        console.log(`La propiedad ${key} vale ${oVuelo[key]}`)
    } 

    //oDatos puede ser Ovuelo o como lo quiera llamar, con esta formula se pueden llegar a niveles más profundos, es decir a objetos dentro de otros objetos...//

    function leeObjeto (oDatos) {
        for (const key in oDatos) {
    
            if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son:`)
                leeObjeto(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            } 
        }  
    }

    leeObjeto(oVuelo)

    ://y la recursividad funcionaria tambien asi: //
    
   

    oVuelo.mostrar = function (oDatos) {
        for (const key in oDatos) {
            this.calcularPasajeros()
            if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }
    
    console.log(oVuelo)
    
    function calculaPrecio(precioBase, iva = 1.21) {
        return precioBase * iva
    }
    
    let zapatillas = 300
    calculaPrecio(zapatillas)
    let libro = 250
    calculaPrecio(libro, 1.07)

    // Recursividad//

    oVuelo.mostrar = function (oDatos = this) {
        for (const key in oDatos) {
            if (typeof oDatos[key] === 'function') { 
    
            } else if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }
    }
    
     // Como quedaría de forma más profesional: dos posibles llamadas desde el exterior, y no le paso nada o 2 cuando la llamo recursivamente y le tengo que pasar el objeto, quién es odatos, los pequeños objetos contenidos dentro del objeto//

     oVuelo.mostrar = function (oDatos = this) {
        for (const key in oDatos) {
            if (typeof oDatos[key] === 'function') { 
    
            } else if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }
    }
    