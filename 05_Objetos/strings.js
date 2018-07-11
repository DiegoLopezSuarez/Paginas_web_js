let cadena = 'Pepe'
let frase = 'Un anillo para todos'
console.log(cadena.length)
console.log(cadena.concat(' Peréz'));
console.log(cadena + ' Peréz');

/* aCadena = cadena.split('')
console.log(aCadena)
aFrase = frase.split(' ')
console.log(aFrase);
console.log(aFrase.join('')) *
Split convierte de cadena array, usando el separador que yo le pase
/
frase.split(' ')

console.log(frase.split(' ').join('')); con split paso de string a arrrays y con join paso de arrays a string de nuevo.*/


console.log(frase.split(' ').join('').toUpperCase());
console.log('Peréz'.toLowerCase());

function Capitalizar(cadena) {
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        const element = aTexto[i];
    }
    
    for
    return stringCap
}

console.log(frase.split(' ').join('').toUpperCase());
console.log('Peréz'.toLowerCase());


//luego...// 

console.log('ciudades'.slice(2,5));
console.log('ciudades'.substr(2,3));




function Capitalizar(cadena) {
    let aTexto = cadena.split(' ')

    for (let i = 0; i < aTexto.length; i++) {
        let palabra = aTexto[i]
        let aLetras = palabra.split('')
        aLetras[0] = aLetras[0].toUpperCase()
        palabra = aLetras.join('')
        aTexto[i] = palabra
    }

    stringCap = aTexto.join(' ')

    return stringCap
}

//luego... un poco más extenso y un poco más reducido...// 

function capitalizar(cadena) {
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        let palabra = aTexto[i]
        let aLetras = palabra.split('')
        aLetras[0] = aLetras[0].toUpperCase()
        palabra = aLetras.join('')
        aTexto[i] = palabra
    }
    let stringCap = aTexto.join(' ')
    return stringCap
}


function capitalizar2(cadena) {
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        let aLetras = aTexto[i].split('')
        aLetras[0] = aLetras[0].toUpperCase()
        aTexto[i] = aLetras.join('')
    }
    return aTexto.join(' ')
}

console.log(capitalizar('Un anillo para todos'));

