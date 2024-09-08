const model = require('./model')

async function insertar_ciudad(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

/*async function obtener_ciudad(dato) {
        let mi_filtro = {}
     
        if (dato.nombre != null) {
           mi_filtro = { nombre: dato.nombre }
        }
   
        const data = await model.find( mi_filtro )
           .populate('pais')
           .exec( )

        let ciudades = []
        for (objeto of data) {
            let ciudad = {
                nombre: objeto.nombre,
                pais: objeto.pais.nombre
            }
            ciudades.push( ciudad )
        }
        return ciudades
}*/

async function obtener_ciudad(dato) {
    let mi_filtro = {}
    
    if (dato.nombre != null) {
       mi_filtro = { nombre: dato.nombre }
    }

    const resultado = await model.find( mi_filtro )
    return resultado
}

module.exports = {
    insertar:insertar_ciudad,
    obtener:obtener_ciudad
}