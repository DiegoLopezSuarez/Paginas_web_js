(function mostrar () {
    console.log('Yo soy esto que ves')
})()

// si se autoinvoca, con su nombre

function mostrar () {
    console.log('Yo soy esto que ves')
}

mostrar()

// si se autoinvoca, no necesita nombre puede ser anonima y al inovacarla se puede obviar el nombre usando patrentesis pero necesito envolverla en parentesis del todo

(function () {
    console.log('Yo soy esto que ves, aunque no tengo nombre')
})()