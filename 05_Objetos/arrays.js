let oDatos = {}
// oDatos = new Object()

let aDatos = [1,2]
// aDatos = new Array()

/* console.log(aDatos.length)
aDatos[10] = 4
console.log(aDatos)
console.log(typeof aDatos[7])
aDatos[7] = 'Pepe'
aDatos[5] = {} 

las nateriores con cosas raras que se pueden hacer pero no son usuales*/

console.log(aDatos + [3,4])
console.log(aDatos.concat([3,4]))



let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
// aNombresOriginal = aNombres
aNombresOriginal = aNombres.join('|').split('|')
aNombres.sort().reverse()
console.log(aNombres)
console.log(aNombresOriginal)


// uso de slice y splice

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
// aNombresOriginal = aNombres
aNombresOriginal = aNombres.join('|').split('|')
aNombres.sort().reverse()
console.log(aNombres)
console.log(aNombresOriginal)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
console.log(aNombres.slice(1,4))
console.log(aNombres)

//forma más correcta de hacer un clon:
aClon = aNombres.slice(0,aNombres.length)
console.log(object);

// para incluir nuevos elementos al arrays, push añade al final:

aClon = aNombres.slice(0,aNombres.length)
aClon.push('Juan')
console.log(aClon);

//let aElegidos = aNombres.splice(1,2)
//let aElegidos = aNombres.splice(1,2,'Carlos', 'Juan', 'Antonio')
// let aElegidos = aNombres.splice(1)
let aElegidos = aNombres.splice(0)

/* console.log("Elegidos: ")
console.log(aElegidos)
console.log("Original: ")
console.log(aNombres) */

// para añadir en posiciones concretas

aClon = aNombres.slice(0,aNombres.length)
// aClon.push('Juan')
aClon.push('Juan', 'Rosa')
console.log(aClon);

//let aElegidos = aNombres.splice(1,2)
//let aElegidos = aNombres.splice(1,2,'Carlos', 'Juan', 'Antonio')
// let aElegidos = aNombres.splice(1)
// let aElegidos = aNombres.splice(0)
// let aElegidos = aNombres.splice(2,0,'Antonio')

console.log("Elegidos: ")
console.log(aElegidos)
console.log("Original: ")
console.log(aNombres) 

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']

aNombres.push('Lorenzo', 'Herminia')
console.log(aNombres);

//una tabla se traduce en un array bidimensional ej:
let aNotas = [[10,7,8], [5,4,7], [6,3,2]]
console.log(aNotas[1][1]);

//estaria incluyendo un array de un array...que la posicion tal sea un array

aNombres.push(['Lorenzo', 'Herminia'])
console.log(aNombres);


aNombres.push(...['Lorenzo', 'Herminia'])
console.log(aNombres);