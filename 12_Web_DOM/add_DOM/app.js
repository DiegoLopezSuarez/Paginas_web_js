class App {
    constructor () {
        setTimeout(this.addInfo,2000)
    }

    addInfo () {
        let nodoElement = document.createElement('p')
        let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
        nodoElement.appendChild(nodoTexto)
        document.body.appendChild(nodoElement)
    }
}

    // ahora si, la forma correcta, lo anterior no vale para nada:

    addInfo () {
        let nodoElement = document.createElement('p')
        let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
        nodoElement.appendChild(nodoTexto)
        document.body.appendChild(nodoElement)
    }

    addInfoModerno() {
        document.body.innerHTML += `<div class="aviso">
        <p>Este sitio utiliza cookies</p>
        <button>Aceptar</button>
        </div>`
    }

}

document.addEventListener('DOMContentLoaded', 
    () => { new App () })

    // completo:

    class App {
        constructor () {
            setTimeout(this.addInfoEnMedio.bind(this),2000)
        }
    
        addInfo () {
            let nodoElement = document.createElement('p')
            let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
            nodoElement.appendChild(nodoTexto)
    
            document.body.appendChild(nodoElement)
        }
    
        addInfoModerno() {
            document.body.innerHTML += `
            <div class="aviso">
                <p>Este sitio utiliza cookies</p>
                <button type="button" id="btnAceptar">Aceptar</button>
            </div>`
    
            this.addBoton()
        }
    
        addInfoEnMedio() {
            document.querySelector('#desaparecere').innerHTML = `
            <div class="aviso">
                <p>Este sitio utiliza cookies</p>
                <button type="button" id="btnAceptar">Aceptar</button>
            </div>`
    
            this.addBoton()
        }
    
        addBoton() {
            let btnAceptar = document.querySelector('#btnAceptar')
            btnAceptar.addEventListener('click', () => {
                btnAceptar.disabled = true
                setTimeout( () =>{
                   let nodo = document.querySelector('.aviso')
                    nodo.parentNode.removeChild(nodo) 
                }, 2000)
            })
        }
    }
    
    // finalmente con funcion independiente que se importa y exporta:

    import {addBoton } from './helpers.js'

    class App {
        constructor () {
            setTimeout(this.addInfoModerno.bind(this),2000)
        }
    
        addInfo () {
            let nodoElement = document.createElement('p')
            let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
            nodoElement.appendChild(nodoTexto)
    
            document.body.appendChild(nodoElement)
        }
    
        addInfoModerno() {
            document.body.innerHTML += `
            <div class="aviso">
                <p>Este sitio utiliza cookies</p>
                <button type="button" id="btnAceptar">Aceptar</button>
            </div>`
    
            //addBoton()
        }
    
        addInfoEnMedio() {
            document.querySelector('#desaparecere').outerHTML = `
            <div class="aviso">
                <p>Este sitio utiliza cookies</p>
                <button type="button" id="btnAceptar">Aceptar</button>
            </div>`
    
            addBoton('#btnAceptar', '.aviso')
        }
    
    
    }
    
    
    document.addEventListener('DOMContentLoaded', 
        () => { new App () })