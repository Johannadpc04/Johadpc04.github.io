const model = require('./model')

async function insertar_empleado(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_empleado(dato) {
     let mi_filtro = {}
     
     if (dato.cedula != null) {
        mi_filtro = { empleado: dato.cedula }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

async function actualizar_empleado(dato) {
    const empleado = await model.findOne( {empleado:dato.cedula} )
    empleado.nombre = dato.nombre
    empleado.apellido = dato.apellido
    empleado.usuario = dato.usuario
    empleado.clave = dato.clave

    const resultado = empleado.save()
    return resultado
}

async function eliminar_empleado(dato) {
    const resultado = await model.deleteOne( {empleado: dato.cedula} )
    return resultado
}

module.exports = {
    insertar:insertar_empleado,
    obtener:obtener_empleado,
    actualizar:actualizar_empleado,
    eliminar:eliminar_empleado
}