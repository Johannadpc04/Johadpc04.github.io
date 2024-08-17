function insertar_usuario(data){
    return Promise((resolve, reject) =>{
        Storage.insertar()
    })
}

function obtener_usuario(data){
    return Promise((resolve, reject)=>{
        resolve(storage.obtener())
    })
}

module.exports = {
    insertar_usuario,
    obtener_usuario
}
