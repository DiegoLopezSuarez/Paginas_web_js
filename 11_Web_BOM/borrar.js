oPersona = {
    nombre: 'Pepe',
    edad: '23',
    profesion: 'Informatico',
    empresa: 'IBM'
}

console.log(oPersona)
oPersona.apellido = 'Perez'
Object.delete(oPersona.empresa)
console.log(oPersona)