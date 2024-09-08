const ciudad = require('../ciudad/interface')

const routes = function( server ) {
    server.use('/ciudad', ciudad)
}

module.exports = routes