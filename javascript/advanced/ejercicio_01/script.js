const URL="https://rickandmortyapi.com/api/character/"
var xhttp= null

function conectar(personaje){
    xhttp= new XMLHttpRequest ()
    xhttp.onreadystatechange=obtener_respuesta
    xhttp.open('GET', URL + personaje)
    xhttp.send()
}

function obtener_respuesta(){
    if(xhttp != null && xhttp.readystate==4){
        if(xhttp.status == 200){
            let dato= JSON.parse(xhttp.responseText)
            console.log(xhttp.responseText)
        }
    }
}