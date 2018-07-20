function saludar() {
    console.log(`Hola Mundo`)
}

function despedir() {
    console.log(`Adiós Mundo Cruel`)
}

function main() {
    let oBtnSaludar = document.querySelector('#btnSaludar')
    let oBtnDespedir = document.querySelector('#btnDespedir')

    oBtnSaludar.addEventListener('click',saludar)
    oBtnDespedir.addEventListener('click', despedir)
}

// window.addEventListener('load', main)
document.addEventListener('DOMContentLoaded', main)

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */

// al otro dia:

class Apps{
    constructor() {
        this.oBtnSaludar = document.querySelector('#btnSaludar')
        this.oBtnDespedir = document.querySelector('#btnDespedir') 
        this.asignarHandlers()
    }

    asignarHandlers() {
        this.oBtnSaludar.addEventListener('click',saludar)
        this.oBtnDespedir.addEventListener('click', despedir) 
    }

}


function main() {
   

    


    function saludar() {
        console.log(`Hola ${amigo}`)
    }
  
    function despedir() {
        console.log(`Adios ${amigo}`)
    }
}

document.addEventListener('DOMContentLoaded', main)

// tras cambios:

class Apps{
    constructor() {
        this.amigo = 'Pepe'
        this.oBtnSaludar = document.querySelector('#btnSaludar')
        this.oBtnDespedir = document.querySelector('#btnDespedir') 
        this.asignarHandlers()
    }

    asignarHandlers() {
        this.oBtnSaludar.addEventListener('click',saludar)
        this.oBtnDespedir.addEventListener('click', despedir) 
    }

    saludar() {
        console.log(`Hola ${this.amigo}`)
    }
  
    despedir() {
        console.log(`Adios ${this.amigo}`)
    }
}


document.addEventListener('DOMContentLoaded', 
        () => new Apps())

    //variaciones de escribir

    class Apps{
        constructor() {
            this.amigo = 'Pepe'
            this.oBtnSaludar = document.querySelector('#btnSaludar')
            this.oBtnDespedir = document.querySelector('#btnDespedir') 
            this.asignarHandlers()
        }
    
        asignarHandlers() {
            this.oBtnSaludar.addEventListener('click',saludar)
            this.oBtnDespedir.addEventListener('click', despedir) 
        }
    
        saludar() {
            console.log(`Hola ${this.amigo}`)
        }
      
        despedir() {
            console.log(`Adios ${this.amigo}`)
        }
    }
    
    
    document.addEventListener('DOMContentLoaded', 
            () => new Apps())
    
    // Seria lo mismo que 
    // document.addEventListener('DOMContentLoaded', 
    //        function () {new Apps()})
    // en este estaria usando una funcion anonima
    
    
    // Seia lo mismo que 
    //function main() {
    //    new Apps()
    //}
    // document.addEventListener('DOMContentLoaded', main)
    
