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
        ciudad: 'Los Angeles'
    }
}

oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Propiedades de ${key}: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}

// console.log(oVuelo)
oVuelo.mostrar()

//lo que da de resultado en la consola es: airline : Oceanic
//number : 815
// Propiedades de departure: 
//clave_IATA : SYD
//time : 2004-09-22 14:55
// ciudad : Sydney
// Propiedades de arival: 
// clave_IATA : LAX
// time : 2004-09-23 10:42
// ciudad : Los Angeles

oVuelo.mostrar()
console.log(typeof oVuelo)
console.log(oVuelo instanceof Object);

aDatos = []
console.log(typeof aDatos);
console.log(aDatos instanceof Object)
console.log(aDatos instanceof Array)

Object.create()

Math.cos()
JSON.stringify()

Array.push()

// No existe como método estáticoArray.push()
aDatos.push()

let oVuelo2 = Object.create(oVueloVacio)


