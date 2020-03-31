

const express = require('express')


const routes = express.Router()



routes.get('/', function(req, res){
    return res.redirect("/seatec")
}),
routes.get('/seatec', function(req, res){
   
    return res.render("seatec/index")
}),
routes.get('/sqg', function(req, res){
    return res.render("sqg/index")
}),
routes.post('/comanda', function(req, res){
    var comandas = [];
    for(i = req.body.app_start; i <= req.body.app_end; i++) {
        comandas.push(i)
        
       }

       let pdf = []
       let acord = 2
       for (var i = 0; i < comandas.length; i = i + acord){
        pdf.push(comandas.slice(i,i+acord))
       }


    return res.render("comanda.njk", {comandas, pdf})
    
})



module.exports = routes
