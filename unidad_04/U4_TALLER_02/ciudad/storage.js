const model = require('./model')

async function insertar_ciudad(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_ciudad(dato) {
        let mi_filtro = {}
     
        if (dato.nombre != null) {
           mi_filtro = { nombre: dato.nombre }
        }
   
        const resultado = await model.find( mi_filtro )
        return resultado
}
/*
async function actualizar_ciudad(dato) {
    const ciudad = await model.findOne( {ciudad:dato.nombre} )
    ciudad.pais = dato.pais
    ciudad.fecha_creacion=dato.fecha_creacion
    ciudad.fecha_actualizacion=dato.fecha_actualizacion

    const resultado = ciudad.save()
    return resultado
}*/

async function actualizar_ciudad(dato) {
    const ciudad = await model.findOne({ nombre: dato.nombre }); // Busca por el campo 'nombre'
    
    if (!ciudad) {
        throw new Error('Ciudad no encontrada.');
    }
    
    ciudad.pais = dato.pais;
    ciudad.fecha_creacion = dato.fecha_creacion;  // Aunque esto normalmente lo manejaría Mongoose con timestamps
    ciudad.fecha_actualizacion = dato.fecha_actualizacion;  // Esto también es manejado por timestamps
    
    const resultado = await ciudad.save();  // Espera el guardado de la ciudad
    return resultado;
}



async function eliminar_ciudad(dato) {
    const resultado = await model.deleteOne( {nombre: dato.nombre} )
    return resultado
}

module.exports = {
    insertar:insertar_ciudad,
    obtener:obtener_ciudad,
    actualizar: actualizar_ciudad,
    eliminar: eliminar_ciudad
}