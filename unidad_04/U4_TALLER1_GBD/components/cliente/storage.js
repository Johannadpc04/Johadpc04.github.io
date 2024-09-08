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

module.exports = {
    insertar:insertar_cliente,
    obtener:obtener_cliente
}