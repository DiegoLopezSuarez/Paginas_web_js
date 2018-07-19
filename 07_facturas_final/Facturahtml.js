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
    this.pintaTabla()
}

// en lugar de seguie escribiendo codio para que no sea mas largo pongo como ultima linea pintatabla y escribo la funcion en otro lado para dividir el codigo en pequeños trozos

pintaTabla() {
    this.elementosTabla.innerHTML = 
    `                
        <tr>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>
        <tr>
            <td>******</td>
            <td>******</td>
            <td>******</td>
        </tr>
    `
// Luego de meterle los datos, el ejercicio queda:

pintarDatos(facturaDatos) {
    console.dir(facturaDatos)
    this.empresa.nombre.innerHTML = facturaDatos.empresa.nombre
    this.empresa.direccion.innerHTML = facturaDatos.empresa.direccion 
    this.empresa.telefono.innerHTML = facturaDatos.empresa.telefono
    this.empresa.nif.innerHTML = facturaDatos.empresa.nif
    this.cliente.nombre.innerHTML = facturaDatos.cliente.nombre
    this.cliente.direccion.innerHTML = facturaDatos.cliente.direccion
    this.cliente.telefono.innerHTML = facturaDatos.cliente.telefono
    this.cliente.nif.innerHTML = facturaDatos.cliente.nif
    this.importeTotal.innerHTML = facturaDatos.importeTotal
    this.tipoIVA.innerHTML = facturaDatos.tipoIVA
    this.formaPago.innerHTML = facturaDatos.formaPago
    this.pintaTabla()
}

//haciendo cambios apra que se muestre pintatabla

this.pintaTabla(facturaDatos.elementos)
    }

    pintaTabla(elementosDatos) {
        console.log(elementosDatos)
        this.elementosTabla.innerHTML += 
        `                
            <tr class="tabla-title">
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>
            <tr>
                <td>******</td>
                <td>******</td>
                <td>******</td>
            </tr>
        `

    }

}

//mas formas de verlo o escribirlo:

pintaTabla(elementosDatos) {
    console.log(elementosDatos)
    let tabla =
    `   <tr class="tabla-title">
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>`

    tabla = '<tr class="tabla-title"><th>Descripcion</th><th>Precio</th><th>Cantidad</th></tr>'


}



}

// y al final

pintaTabla(elementosDatos) {
    console.log(elementosDatos)
    let tabla =
        `<tr class="tabla-title">
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>`

        elementosDatos.forEach(item => {
            tabla +=
             `<tr>
                <td>${item.descripcion}</td>
                <td>${item.precio}</td>
                <td>${item.cantidad}</td>
            </tr>`
        });

   
    this.elementosTabla.innerHTML = tabla

}

}

