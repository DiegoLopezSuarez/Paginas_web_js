function esPali() {

    // Array con cada palabra
    let aDatos = texto.split(' ')
    // Reconstruyo la frase 
    let frase = aDatos.join('')
    // Array con cada letra
    aDatos= frase.split('')
    // Clon del array con cada letra
    aClon = aDatos.join('|').split('|')
    // Clon del array al reves
    aClon.reverse()
    // frase invertida
    let alReves = aClon.join('')

    let result = false
    // comparacion
    if (frase === alReves) {
        result = true
    }

    console.log(frase);
    console.log(aDatos)
    console.log(aClon)
    console.log(alReves)

    return result

}

{
    // Array con cada palabra
    let aDatos = texto.split(' ')
    // Reconstruyo la frase
    let frase = aDatos.jo
    console.log(aDatos)
}


function prueba() {
    let texto = 'Hola, no soy palindromo'
    console.log(esPali(texto)) // falso
    texto = 'Amor a Roma'
    console.log(esPali(texto)) // true
}

// esPali('Hola, no soy palindromo')
prueba()

// sigue un ejemplo corregido y completado por el profe:

function esPali(texto) {

    // Array con cada palabra
    let aDatos = texto.split(' ')
    // Reconstruyo la frase 
    let frase = aDatos.join('')
    // Array con cada letra
    aDatos= frase.split('')
    // Clon del array con cada letra
    aClon = aDatos.join('|').split('|')
    // Clon del array al reves
    aClon.reverse()
    // frase invertida
    let alReves = aClon.join('')

    let result = false
    // comparacion
    if (frase.toUpperCase() === alReves.toUpperCase()) {
        result = true
    }

    //console.log(frase);
    //console.log(aDatos)
    //console.log(aClon)
    //console.log(alReves)

    return result
}

function prueba() {
    let texto = 'Hola'
    console.log(esPali(texto)) // false
    texto = 'Hola, no soy palindromo'
    console.log(esPali(texto)) // false
    texto = 'La ruta nos aporto otro paso natural'
    console.log(esPali(texto)) // true
    texto = 'Dabale arroz a la zorra el abad'
    console.log(esPali(texto)) // true
}

// esPali('Hola Amigo')
prueba()

// sigue un ejemplo reducido y mejorado por el profe, notación fluida:

function esPaliShort(texto) {
    let result = false
    // comparacion
    if (texto.split(' ').join('').toUpperCase() 
            === texto.split(' ').join('').split('').reverse().join('').toUpperCase()) {
        result = true
    }

    //console.log(frase);
    //console.log(aDatos)
    //console.log(aClon)
    //console.log(alReves)

    return result
}
