function seleccionar_opcion(opcion){
    var opcion_1= document.getElementById("receta_01")
    var opcion_2=document.getElementById("receta_02")

    if (opcion == 1) {
        opcion_1.style.zIndex = 2
        opcion_2.style.zIndex = 1
        
    } else if (opcion == 2) {
        opcion_1.style.zIndex = 1
        opcion_2.style.zIndex = 2
    }
    
}

function cargar_elemento() {
    var content = document.getElementById("content")
    var texto = document.getElementById("texto")
    
    var div = document.createElement("div")
    div.className="item-box"

    var texto =document.createTextNode(texto.value)
    div.appendChild(texto)

    content.appendChild(div)
}
