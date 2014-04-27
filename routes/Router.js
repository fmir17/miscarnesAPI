// Se realizar para enlazar las operaciones sobre el recurso Usuario con los métodos HTTP. 
module.exports = function(app){


    var Tipocarne = require('../models/tipocarne');

    //*Metodos para Muro*
    //Crear Nuevo comentario en Muro
    tipocarne = function(req,res){
             
        var tipocarne = new Tipocarne({id: req.body.id, nombre: req.body.nombre});
        tipocarne.save();
        res.end();
    };
    
    //Buscar todos los comentarios en el muro
    listTipocarne = function(req, res){
        //Tipocarne.find({}).select('id nombre -_id').sort('-date').exec(function(err, wall) {
            Tipocarne.find({}).select('id nombre -_id').exec(function(err, tipocarne) {
            res.send(tipocarne);
        });

    };
//Redireccion para wall
    app.post('/tipocarne', tipocarne);
    app.get('/tipocarne', listTipocarne);

}
