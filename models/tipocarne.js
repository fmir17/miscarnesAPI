//Esquema para Muro Compartido
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para Muro
var tipocarneSchema = new Schema({
    id: String,
    nombre: String    
});

//Exportar esquema
module.exports = mongoose.model('Tipocarne', tipocarneSchema);
