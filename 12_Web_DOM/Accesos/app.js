class App {
    constructor() {
        let nodo1 = document.querySelector('div p')
        console.dir(nodo1)
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)

    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App()})

// otra forma, un tercer nodo, por class o por selector combinado, por id:

class App {
    constructor() {
        // por clase:
        let nodo1 = document.querySelector('div p')
        console.dir(nodo1)
        // por selector combinado:
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)
        // por id:
        let nodo3 = document.querySelector('#p1')
        console.dir(nodo3)
    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App()})

    // la version final con las otras acternativas para acceder a nodos:

    class App {
        constructor() {
            let nodo1 = document.querySelector('div p')
            console.dir(nodo1)
            let nodo2 = document.querySelector('.importante')
            console.dir(nodo2)
            let nodo3 = document.querySelector('#p1')
            console.dir(nodo3)
            let aNodos = document.querySelectorAll('p')
            console.dir(aNodos)
            /* aNodos.forEach(
                (node) => { node.innerHTML = 'Ja, Ja'}
            ) */
            console.info('getElement....')
            console.dir(document.getElementById('p1'))
            console.dir(document.getElementsByTagName('p'))
            console.dir(document.getElementsByName('nombre'))
            console.dir(document.getElementsByClassName('importante'))
            
        let nodoMenu = document.querySelector('#main-menu')
        console.dir(nodoMenu)
        console.dir(document.querySelectorAll('li'))
        console.dir(nodoMenu.querySelectorAll('li'))
        
    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App()})