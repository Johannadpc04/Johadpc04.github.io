const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const producto_schema = new schema({
    nombre: req_string,
    valor: Number
})

const model = mongoose.model('Producto', producto_schema)
module.exports = model