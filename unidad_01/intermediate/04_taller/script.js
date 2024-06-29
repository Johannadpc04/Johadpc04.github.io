//duncion declarativa
function imprimir(){
    console.log('Hola mundo.')
}

imprimir()

//funcion expresiva o tambien denominada como anonima
const suma=function(a, b){
    return(a + b)
}
console.log( suma(10,20) )

//funcion flecha
const suma2 = (a, b)=>{
    let total = a + b
    console.log(" la suma de ${a} y ${b} es ${total}.")
} 

suma2(100,200)

const suma3 = (a, b) => a + b

console.log( suma3(10000, 2000) )

