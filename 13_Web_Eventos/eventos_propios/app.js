function main() {

    console.log("Main")

    document.querySelector('#btnPulsar')
        .addEventListener('click', pulsar)

    document.querySelector('#output')
        .addEventListener('escribir', escribir)

    function pulsar(oEv) {
        console.dir(oEv)
        oEv.target.dispatchEvent(
            new Event('escribir')
        )
    }

    function escribir(oEv) {
        console.dir(oEv)
        document.querySelector('#output').innerHTML = 
            "He recibido un evento 'escribir'"
    }
}


document.addEventListener('DOMCOntentLoaded', main)