const model = require('./model')

async function insertar_factura(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_factura(dato) {
     let mi_filtro = {}
     
     if (dato.codigo != null) {
        mi_filtro = { codigo: dato.codigo }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

module.exports = {
    insertar:insertar_factura,
    obtener:obtener_factura
}