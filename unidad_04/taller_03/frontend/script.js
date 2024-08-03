function realizar_peticion(tipo){
    if(tipo='GET'){
        fetch('/mensaje')
        .then((response) =>{
            let container=document.getElementById('Container')
            data=response.json()
            container.innerHTML= response.text
        })
        .catch((mensaje)=> console.error())
    }else if(tipo=='POST'){

    }
}