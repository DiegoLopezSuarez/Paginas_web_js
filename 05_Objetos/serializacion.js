let oPersona = {
    name: 'Pepe',
    edad: 33,
    saludar: function() {
        console.log(`Hola, me llamo ${this.name}`)
    }
}

oPersona.name *=2

// seria un Nam porque intenta volverlo numero, NULL algo nulo, algo sin sentido

oPersona.saludar()

let aDatos = [2,3,4,5]

console.log(typeof JSON.stringify(oPersona));
console.log('Tengo un string '+ JSON.stringify(oPersona));

console.log(typeof JSON.stringify(aDatos));
console.log('Tengo un string '+ JSON.stringify(aDatos));

let datosString = JSON.stringify(oPersona)
let oDatos = JSON.parse(datosString)
console.log(typeof oDatos);
console.log(oDatos);

//EN CONSOLA ESO DA: Hola, me llamo NaN
//string
//Tengo un string {"name":null,"edad":33}
//string
//Tengo un string [2,3,4,5]
//object
//{ name: null, edad: 33 }

datosString = "{ name: 'Pepe', edad: 33 }"
oDatos = JSON.parse(datosString)
console.log(typeof oDatos);
console.log(oDatos);




