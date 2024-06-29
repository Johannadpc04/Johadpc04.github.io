let mi_carro={
    marca:'Mazda',
    modelo:'MZX-2000',
    anio:2024,
    detalle_auto:function(){
        console.log( 'Auto: ${this.marca}')
    }
}
console.log(mi_carro.marca)
console.log(mi_carro.detalle_auto())