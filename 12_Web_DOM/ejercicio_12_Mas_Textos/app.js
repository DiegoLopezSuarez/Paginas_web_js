class App {
    constructor () {
        this.btnMas = document.querySelector('.responder')
        this.textoMas = document.querySelector('.hide')
    
        this.btnMas.addEventListener('click', this.mostrar.bind(this))
    }

    mostrar() {
        if(this.textoMas.classList.contains('hide')) {
            this.textoMas.classList.remove('hide')
        } else {
            this.textoMas.classList.add('hide')
        }    

        // Lo mismo pero en forma mas moderna y reducida usando toggle:
        
        //this.textoMas.classList.toggle('hide')
    }

}

// otra forma de escribir:

class App {
    constructor () {
        this.btnMas = document.querySelector('.mas').addEventListener('click', this.mostrar.bind(this))
        this.textoMas = document.querySelector('.hide')
    
        this.btnMas = addEventListener('click', this.mostrar.bind(this))
    }

    mostrar() {
    /*     if(this.textoMas.classList.contains('hide')) {
            this.textoMas.classList.remove('hide')
        } else {
            this.textoMas.classList.add('hide')
        }   */      
        this.textoMas.classList.toggle('hide')
    }

}

document.addEventListener('DOMContentLoaded',
    () => { new App()})

    // y la reducida final:

    class App {
        constructor () {
            this.btnMas = document.querySelector('.mas')
            this.textoMas = document.querySelector('.hide')
            
            this.btnMas.addEventListener('click', this.mostrar.bind(this))
        }
    
        mostrar() {      
             this.textoMas.classList.toggle('hide')  
           if(this.textoMas.classList.contains('hide')) {
               // boton = Ver mas 
               this.btnMas.textContent = "Ver más"
            } else {
                // boton = Ocultar
                this.btnMas.textContent = "Ver menos"
            }         
           
        }
    
    }
    
    document.addEventListener('DOMContentLoaded',
        () => { new App()})

        // mas variaciones

        class App {
            constructor () {
                this.aBtnMas = document.querySelectorAll('.mas')
                // this.textoMas = document.querySelector('.hide')
                this.aBtnMas.forEach(
                    (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
                )
            }
        
            mostrar(oE) {     
                // let x = oE.target x es la variable, poniendole otro nombre:

                let nodoBtn = oE.target
                 this.textoMas.classList.toggle('hide')  
               if(this.textoMas.classList.contains('hide')) {
                   // boton = Ver mas 
                   this.btnMas.textContent = "Ver más"
                } else {
                    // boton = Ocultar
                    this.btnMas.textContent = "Ver menos"
                }         
               
            }
        
        }
        
        document.addEventListener('DOMContentLoaded',
            () => { new App()})

            // una version más allá... y apra que funcione con cada parrafo ver mas:

            class App {
                constructor () {
                    this.aBtnMas = document.querySelectorAll('.mas')
                    // this.textoMas = document.querySelector('.hide')
                    this.aBtnMas.forEach(
                        (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
                    )
                }
            
                mostrar(oE) {     
                     let nodoBtn = oE.target
                     let nodoTxt = nodoBtn.previousElementSibling
                     nodoTxt.classList.toggle('hide')
            /*       
                   if(this.textoMas.classList.contains('hide')) {
                       // boton = Ver mas 
                       this.btnMas.textContent = "Ver más"
                    } else {
                        // boton = Ocultar
                        this.btnMas.textContent = "Ver menos"
                    }  */        
                   
                }
            
            }
            
            document.addEventListener('DOMContentLoaded',
                () => { new App()})

    // otra version mas:

    class App {
        constructor () {
            this.aBtnMas = document.querySelectorAll('.mas')
            this.aBtnMas.forEach(
                (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
            )
        }
    
        mostrar(oE) {     
             let nodoBtn = oE.target
             let nodoTxt = nodoBtn.previousElementSibling
             nodoTxt.classList.toggle('hide')     
           if(nodoTxt.classList.contains('hide')) {
               // boton = Ver mas 
               nodoBtn.textContent = "Ver más"
            } else {
                // boton = Ocultar
                nodoBtn.textContent = "Ver menos"
            }      
        }
    
    }
    
    document.addEventListener('DOMContentLoaded',
        () => { new App()})

        // version ultima ultima

        class App {
            constructor () {
                this.aBtnMas = document.querySelectorAll('.mas')
                this.aBtnMas.forEach(
                    (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
                )
            }
        
            mostrar(oEvt) {  
                console.log(oEvt.target)
        
        /*          let nodoBtn = oE.target
                 let nodoTxt = nodoBtn.previousElementSibling
                 nodoTxt.classList.toggle('hide')     
               if(nodoTxt.classList.contains('hide')) {
                   // boton = Ver mas 
                   nodoBtn.textContent = "Ver más"
                } else {
                    // boton = Ocultar
                    nodoBtn.textContent = "Ver menos"
                }      
         */    }
        
        }
        
        document.addEventListener('DOMContentLoaded',
            () => { new App()})