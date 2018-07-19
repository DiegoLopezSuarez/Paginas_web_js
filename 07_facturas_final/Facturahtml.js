export class FacturaHtml {

    constructor () {
        this.empresa = {
            nombre :  document.querySelector("#empresa-nombre"),
            direccion : document.querySelector("empresa-direccion"),
            telefono : document.querySelector("empresa-telefono"),
            nif: document.querySelector("empresa-nif"  )
        }
       
        
        
        // voy copiando todos los ids del html y los voy accediendo a estos desde js.Ej:
        //"cliente-nombre"
       // "cliente-direccion"
        //"cliente-telefono"
        //"cliente-nif"

        this.cliente = new Empresa(
            document.querySelector("#cliente-nombre"),
            document.querySelector("#cliente-direccion"),
            document.querySelector("#cliente-telefono"),
            document.querySelector("#cliente-nif")
        )
       
// voy copiando todos los ids del html y los voy accediendo a estos desde js.Ej:
        //"importeTotal"
        //"tipoIVA"
        //"formaPago"

        this.importeTotal = document.querySelector("#importeTotal")
        this.tipoIVA = document.querySelector("#tipoIVA")
        this.formaPago = document.querySelector("#formaPago")

        this.tabla = `                
            <table>
                <tr>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </table>`
    }
}

// pintar datos de cada nodo del DOM

pintarDatos() {
    this.empresa.nombre.innerHTML = '******'
    this.empresa.direccion.innerHTML = '******' 
    this.empresa.telefono.innerHTML = '******'
    this.empresa.nif.innerHTML = '******'
    this.cliente.nombre.innerHTML = '******'
    this.cliente.direccion.innerHTML = '******' 
    this.cliente.telefono.innerHTML = '******'
    this.cliente.nif.innerHTML = '******'
    this.importeTotal.innerHTML = '******'
    this.tipoIVA.innerHTML = '******'
    this.formaPago.innerHTML = '******'
}

}