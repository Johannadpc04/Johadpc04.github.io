const model = require('./model')

async function insertar_empleado(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_empleado(dato) {
     let mi_filtro = {}
     
     if (dato.cedula != null) {
        mi_filtro = { cedula: dato.cedula }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

module.exports = {
    insertar:insertar_empleado,
    obtener:obtener_empleado
}