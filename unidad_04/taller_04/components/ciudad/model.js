const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const req_date = {
    type: Date,
    required: true
}

const pais_schema=new schema({
    nombre: req_string
})

const ciudad_schema = new schema({
    nombre: req_string,
    pais: pais_schema,
    fecha_creacion: Date,
    fecha_actualizacion: Date
}, {
    timestamps: { createdAt: 'fecha_creacion', updatedAt: 'fecha_actualizacion' }
})

const model = mongoose.model('Usuario', usuario_schema)
module.exports = model