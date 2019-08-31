const path = require('path'); 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const  app = express();


//CONECTAR BD MONGO_DB
mongoose.connect('mongodb://localhost:27017/bd_vili',{useNewUrlParser: true})
// mongoose.connect('mongodb://localhost/bd_vili')
.then(db => console.log('DB CONNECT'))
.catch(err => console.log(err));



//IMPORTAR RUTAS
const Mi_Rutas = require('./ROUTES/Mi_Rutas');

//CONFIGURACIONES
app.set('port',process.env.PORT || 5000);
app.set('views',path.join(__dirname,'VIEWS'));
app.set('views egine','ejs');


//STATIC FILES
app.use(express.static(path.join(__dirname,'Public')));


// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());






//ROUTES
app.use('/',Mi_Rutas);
// app.use('/LOGIN',Mi_Rutas);
// app.use('/Vista_Registro',Mi_Rutas);
// app.use('/Login_Registro',Mi_Rutas);
// app.use('/Delete',Mi_Rutas);



//SERVIDOR
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT',app.get('port'));
    
    });
