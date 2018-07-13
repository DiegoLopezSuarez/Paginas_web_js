// EN TIPESCRIPR
function verResultados(x: number,y: number,operacion: function) {
    
} 

function verResultados(x, y, operacion) {
    let r
    if (typeof operacion === 'function') {
        r = operacion(x,y)
    }
    console.log('El resultado es ' + r);
} 

verResultados(2,3)

function verResultados(x, y, operacion) {
    let r
    if (typeof operacion === 'function') {
        r = operacion(x,y)
    }
    console.log('El resultado es ' + r);
} 

function sumaCuadrados (a,b) {
    return a*a+b*b
}

function sumaCubos(a,b) {
    return a*a*a+b*b*b
}

verResultados(2,3, sumaCuadrados)
verResultados(2,3, sumaCubos)

verResultados(2,3, function(a,b) {return a*a+b*b})
verResultados(2,3, function(a,b) {return a*a*a+b*b*b})

// DECIR ESTRO ES COMO :
setTimeout(
    algo, 3000
)

// SERIA COMO DECIR:

setTimeout(
    function() {
        console.log("Han pasado 3 segundos")
    }, 3000
)

verResultados(2,3, function(a,b) {return a*a+b*b})
verResultados(2,3, function(a,b) {return a*a*a+b*b*b})

function saludar() {
    console.log('Hola');
}

setTimeout(saludar, 2000)

verResultados(2,3, function(a,b) {return a*a+b*b})
verResultados(2,3, function(a,b) {return a*a*a+b*b*b})

setInterval(saludar, 2000)

//HACE LO MISMO QUE SET INTERVAL PERO EN INTERVALOS DE TIEMPO, CREA BUCLES INFINITOS

//LA MANERA DE EVITAR O FRENAR EL BUCLE PONIENDOLE UN LIMITE SERIA LA SIGUIENTE:

function saludar() {
    console.log('Hola');
    i++
    if (i > 10) {
        clearInterval(handler)
    }
}
let i = 0
let handler = setInterval(saludar, 1000)
