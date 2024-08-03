const express= require('express')

var app=express()
app.use(router)

router.get('/',function(req, res){

})

router.post('/mensaje', function(req, res) {
    
})

let puerto=3000
app.listen(puerto)
console.log(`La aplicacion se encuentra funcionando en http://localhost:${puerto}/`)
