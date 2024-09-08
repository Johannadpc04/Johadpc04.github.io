const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const empleado_schema = new schema({
    cedula : req_string,
    nombre : req_string,
    apellido : req_string,
    usuario : req_string,
    clave : req_string
})

const model = mongoose.model('Empleado', empleado_schema)
module.exports = model