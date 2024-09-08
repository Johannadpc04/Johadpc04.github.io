const model = require('./model')

async function insertar_cliente(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_cliente(dato) {
     let mi_filtro = {}
     
     if (dato.cedula != null) {
        mi_filtro = { cliente: dato.cedula }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

async function actualizar_cliente(dato) {
    const empleado = await model.findOne( {cliente:dato.cedula} )
    cliente.nombre = dato.nombre
    cliente.apellido = dato.apellido
    cliente.domicilio = dato.usuario
    cliente.ciudad = dato.ciudad

    const resultado = cliente.save()
    return resultado
}


module.exports = {
    insertar:insertar_cliente,
    obtener:obtener_cliente,
    actualizar:actualizar_cliente,
}