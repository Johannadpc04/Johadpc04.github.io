const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const cliente_schema = new schema({
    cedula : req_string,
    nombre : req_string,
    apellido : req_string,
    domicilio: req_string,
    ciudad: {
        type: schema.ObjectId,
        ref: 'Ciudad',
        required:true
    }
})

const model = mongoose.model('Cliente', cliente_schema)
module.exports = model