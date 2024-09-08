const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const pais_schema = new schema({
    nombre: req_string
})

const model = mongoose.model('Pais', pais_schema)
module.exports = model