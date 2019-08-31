const express = require('express');
const router = express.Router();
const Persona = require('../Model/Persona');
const Persona2 = require('../Model/Persona');
const P1  = require('../Model/Persona');

//VISTA DE PRINCIPAL
router.get('/', async (req,res) =>{

  const P = await Persona.find();
  res.render('index.ejs',{P})

});

//VISTA PARA GUARDAR DATOS DE LA PERSONAS 
router.get('/Registro',(req,res) =>{
res.render('Vista_Registro.ejs');
});


//RUTA PARA ELIMINAR REGISTRO
router.get('/Delete/:Param_cedula', async (req,res) =>{
  const {Param_cedula} =   req.params;
  await P1.remove({ CEDULA: Param_cedula});
  res.redirect('/');
 });


//VISTA DE ACTUALIZAR REGISTRO
router.get( '/Persona_Upd/:cedu',async (req,res) =>{
 const {cedu} = req.params;
const pers3 =  await Persona2.find({CEDULA: cedu});
res.render('Vista_Regis_Update.ejs',{pers3});


});

//METODO  PARA ACTUALIZAR DATOS PERSONAS 
router.post('/Persona_Upd_Guard/:Param_Cedula',async (req,res) =>{
  
  const {Param_Cedula} = req.params;
  const M = req.body;
 console.log(Param_Cedula);
  let ID = await P1.find({CEDULA : Param_Cedula},{_id:1});
  let T = await Persona.updateOne({_id: ID},{NOMBRE: M.NOMBRE,APELLIDO: M.APELLIDO,CEDULA: M.CEDULA,SEXO: M.SEXO});

 res.redirect('/')

});

//METODO PARA GUARDAR DATOS DE PERSONAS
router.post('/add_datos_Personas',async (req,res) =>{


  const Persona3 = new Persona(req.body);
  await Persona3.save();
  res.render('Vista_Registro.ejs');
  
 });

   


module.exports = router;