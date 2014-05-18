//Esquema para Muro Compartido
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para Muro
var carneSchema = new Schema({
    id:Number,
    tipocarne: String,
    cantidad: Number,
    fecha: String    

});

//Exportar esquema
module.exports = mongoose.model('Carne', carneSchema);
