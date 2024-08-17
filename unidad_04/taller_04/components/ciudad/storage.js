const model= require('./model')

function insertar_usuario(dato){
    
}

function obtener_usuario(dato){
    let mi_filtro = {}
     
     if (dato.usuario != null) {
        mi_filtro = { usuario: dato.usuario }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

function actualizar_usuario(dato){
    const usuario= model.findOne( {usuario:dato.usuario})
    usuario.nombre=dato.nombre
    usuario.apellido=dato.apellido
    usuario.clave=dato.clave
    usuario.fecha_nacimiento=dato.fecha_nacimiento

    const resultado=usuario.save()
    return resultado
}

function eliminar_usuario(dato){
    const resultado=model.deleteOne({usuario: dato.usuario})
}

module.exports={
    insertar: insertar_usuario,
    obtener:obtener_usuario,
    actualizar:actualizar_usuario
}