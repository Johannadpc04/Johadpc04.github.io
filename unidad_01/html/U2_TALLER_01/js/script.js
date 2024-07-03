function cargar_elemento(){
    var content = document.getElementById("content");

    var div = document.createElement("div")
    div.className = "item-box";

    var img = document.createElement("img")
    img.src = "img/informatica.jpg"

    div.appendChild(img)
    content.appendChild(div)
}

function eliminar_elemento(){
    var content = document.getElementById("content")
    content.removeChild(content.lastElementChild)
}
