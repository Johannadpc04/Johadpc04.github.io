const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const ciudad_schema = new schema({
    nombre: req_string,
    pais: req_string,
    fecha_creacion: Date,
    fecha_actualizacion: Date
}, {
    timestamps: { createdAt: 'fecha_creacion', updatedAt: 'fecha_actualizacion' }
})

const model = mongoose.model('Ciudad', ciudad_schema)
module.exports = model