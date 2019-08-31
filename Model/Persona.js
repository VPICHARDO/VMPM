const  mongoose = require('mongoose');
const schema =  mongoose.Schema;
const ObjectId = schema.ObjectId;

    const  Pesrona_Schema  = new  schema({
    ID:    ObjectId,
    NOMBRE: String,
    APELLIDO: String,
    CEDULA: String,
    SEXO: String,
    ESTADO :{
   type : Boolean,
   default: true}})

module.exports = mongoose.model('Persona',Pesrona_Schema);