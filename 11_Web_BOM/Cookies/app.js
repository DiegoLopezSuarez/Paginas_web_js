//import * as Cookie from './node_modules/js-cookie/src/js.cookie.js'

import * as x from './node_modules/js-cookie/src/js.cookie.js'

if (Cookies.get('NumVisitas')) {
    // Existe la cookie NumVisitas
} else {
    // No existe la cookie NumVisitas
    Cookies.set('NumVisitas', 1)
}

//Para  contabilizar visitas y que se vaya incrementando:

let numVisitas =  Cookies.get('NumVisitas')
if (numVisitas) {
    // Existe la cookie NumVisitas
    Cookies.set('NumVisitas', ++numVisitas)
    console.log('Visita número', numVisitas)
} else {
    // No existe la cookie NumVisitas
    Cookies.set('NumVisitas', 1)
}
