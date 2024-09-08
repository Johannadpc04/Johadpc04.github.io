const empleado = require('../components/empleado/interface')
const ciudades = require('../components/ciudades/interface')
const pais = require('../components/pais/interface')
const cliente = require('../components/cliente/interface')
const producto = require('../components/producto/interface')
const facturas = require('../components/facturas/interface')

const routes = function( server ) {
    server.use('/empleado', empleado)
    server.use('/ciudades', ciudades)
    server.use('/pais', pais)
    server.use('/cliente', cliente)
    server.use('/producto', producto)
    server.use('/facturas', facturas)
}

module.exports = routes