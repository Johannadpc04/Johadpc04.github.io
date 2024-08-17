const storage = require('./storage')

function insertar_usuario( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_usuario( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function actualizar_usuario(dato){
    return new Promise((resolve, reject)=>{

    })
}

function eliminar_usuario(dato){
    return new Promise( (resolve, reject) => {
        if(!dato.usuario){
            reject()
        }else
    })
}

module.exports = {
    insertar_usuario,
    obtener_usuario
}
