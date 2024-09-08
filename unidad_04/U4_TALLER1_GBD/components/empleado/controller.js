const storage = require('./storage')

function insertar_empleado( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.cedula || !dato.nombre || !dato.apellido || !dato.usuario || !dato.clave ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_empleado( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

module.exports = {
    insertar_empleado,
    obtener_empleado
}