const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const ciudad_schema = new schema({
    nombre: req_string,
    pais: {
        type: schema.ObjectId,
        ref: 'Pais',
        required:true
    }
})

const model = mongoose.model('Ciudades', ciudad_schema)
module.exports = model