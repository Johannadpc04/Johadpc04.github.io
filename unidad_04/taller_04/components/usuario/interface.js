const express = require('express')

const controller =require('./controller')

const routes =express.Router()

routes.post('/', function(req.res){
    controller.insertar_usuario(req.body)
    
})