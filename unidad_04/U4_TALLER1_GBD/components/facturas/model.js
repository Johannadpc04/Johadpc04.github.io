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

const req_num ={
    type: Number,
    required: true
}

const factura_schema = new schema({
    codigo: req_string,
    fecha_emision: req_date,
    valor_subtotal: req_num,
    valor_iva: req_num,
    valor_total: req_num,
    empleado:{
        type: schema.ObjectId,
        ref: 'Empleado',
        required: true
    },
    cliente:{
        type: schema.ObjectId,
        ref:'Cliente',
        required: true
    },
    detalles:[
        {
            product:
            {
                type: schema.ObjectId,
                ref:'Producto',
                required: true
            },
            cantidad:req_num,
            valor_x_cantidad:req_num
        }
    ]
})

const model = mongoose.model('Factura', factura_schema)
module.exports = model