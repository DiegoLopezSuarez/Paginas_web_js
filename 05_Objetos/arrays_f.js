let aNombres = [ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa' ]

for (let i = 0; i < aNombres.length; i++) {
    const element = aNombres[i];
    console.log(element);
}


//igual que:

let aNombres = [ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa' ]

for (let i = 0; i < aNombres.length; i++) {
    const item = aNombres[i];
    console.log(item);
}

//para hacer esto con uno de los metodos de los arrays


function procesarArray() {}

aNombres.forEach(procesarArray)

//explicado en detalle:

for (let i = 0; i < aNombres.length; i++) {
    const item = aNombres[i]
    console.log(`El usuario ${i} se llama ${item}`)
}

for (let i = 0; i < aNombres.length; i++) {
    const item = aNombres[i]
    console.log(`El usuario ${i+1} se llama ${item}`)
}

// Lo habitual es econtrarla asi: sustituye la forma antigua de hacer un bucle

aNombres.forEach(
    function(item) { console.log(item);}
)

aNombres.forEach(
    function(item, i) { console.log(`El usuario ${i+1} se llama ${item}`)}
) 

// También se podría en forma de arrow, más elegante y bonito:

aNombres.forEach(
    (item, i) => console.log(`El usuario ${i+1} se llama ${item}`)
) 

//Otro ejemplo de foreache pero con numeros:

let aNumbers = [2,5,7,8,9]
aNumbers.forEach(
    (item, i) => console.log(`El numero ${i+1} vale ${item}`)
) 

// mejor explicado:

let aNumbers = [2,5,7,8,9]
aNumbers.forEach(
    (item) => {
        let cuadrado = item*item
        console.log(`El cuadrado de  ${item} es ${cuadrado}`)
    }
) 
// crear un array de mis cuadrados:

let aCuadrados = aNumbers.map(
    (item) => {return item*item}
)

// Bien escrito:

let aCuadrados = aNumbers.map(item => item*item)

console.log(aCuadrados);

// let aCuadrados = aNumbers.map(item => item*item)

let aNumbersClon = aNumbers.map(item => item)

console.log(aCuadrados);

// let aCuadrados = aNumbers.map(item => item*item)
console.log(aCuadrados);


let aNumbersClon = aNumbers.map(item => item)
console.log(aNumbersClon)

let aNumbersClon = aNumbers.map(item => item)

aNumbersClon.pop()
console.log(aNumbers);
console.log(aNumbersClon)

//uso de filter, para filtrar

let aPares = aNumbers.filter(
    (item) => {
        if (item % 2 == 0) {
            return true 
        } else {
            return false
        }
    }
)

console.log(aPares)

aPares.map()


console.log(aPares)

// descrito competo ! es un NOT
item = 2
!(item % 2) -> 

!Boolean(item % 2)


// expresion que hace el efectro del IF

item = 2
!(item % 2) -> true
item = 5
!(item % 2) -> false

// Y ESCRITO COMPACTO:


let aPares = aNumbers.filter(item => !(item % 2))


console.log(aPares)

// fORMA DE SACAR UN BOLEANO CON UNA DOBLE NEGACION

let aImpares = aNumbers.filter(
    (item) => {return !!(item % 2)}
)


/* let aPares = aNumbers.filter(item => !(item % 2))
 */

let aImpares = aNumbers.filter(
    (item) => {return !!(item % 2)}
)


console.log(aPares)
console.log(aImpares)

let sonTodosPares = aNumbers.every(
    (item) => {return !(item % 2)}
)
console.log(sonTodosPares);

let hayAlgunPar = aNumbers.some(
    (item) => {return !(item % 2)}
)
console.log(hayAlgunPar);

//USO DE REDUCE:

let valorFinal = aNumbers.reduce((a,b) => a+b)
console.log(valorFinal);
valorFinal = aNumbers.reduceRight((a,b) => a+b)

