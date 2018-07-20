class Persona {

    constructor (nombre, edad, país = España) {
        this.nombre = nombre
        this.edad = edad
    }
    mostrar () {}
    // todo lo que yo escriba como metodo se va al prototipo

    // console.log (Persona); me mostraria la funcion abstracta no su valor real, para que se muestre el objeto lo que tengo que poner es un THIS , siempre THIS apra usar las propiedades dentro del objeto

    console.log(this);
}

p1 = new Persona ('Pepe', 34)
//hemos instanciado persona en p1 a la persona que se llama pepe

p1.mostrar 

p2 = new Persona ('Rosa', 35)
// esta seria una segunda instancia, de una segunda persona

p2.mostrar()

p3 = new Persona('Francisco', 25, 'Rep. Dominicana')

p3.mostrar ()

class Estudiante extends Persona {
    constructor (nombre, edad, país, numMatricula, curso) {
        super (nombre, edad,  país='España')
        this.numMatricula = numMatricula
        this.curso = curso

    }

}

e1 = new Estudiante('Juan', 21,'España', '0034', 'Web')
e1.mostrar()

// corregido algun detalle el jercicio quedaria asi:

class Persona {
    constructor (nombre, edad, pais = 'España') {
        this.nombre = nombre
        this.edad = edad
        this.pais = pais
    }
    mostrar() {
        console.log(this);
    }
    saludar() {
        console.log( `Hola soy ${this.nombre}, de ${this.pais}, y tengo ${this.edad} años` )
    }

}

p1 = new Persona('Pepe', 34)
p1.mostrar()
p2 = new Persona('Rosa', 25)
p2.mostrar()
p3 = new Persona('Francisco', 25, 'Rep. Dominicana' )
p3.mostrar()


class Estudiante extends Persona {
    constructor (numMaricula, curso, nombre, edad, pais) {
        super(nombre, edad, pais)
        this.numMaricula = numMaricula
        this.curso = curso
    }
}

e1 = new Estudiante('0034', 'Web', 'Juan', 21)
e1.mostrar()