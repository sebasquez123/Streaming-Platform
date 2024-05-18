//CONFIGURA EL PUERTO DE ENTRADA PARA QUE EXPRESS ESCUCHE LAS PETICIONES HTTP Y CONFIGURA LA RUTA DEL ENRUTADOR


const express = require('express');
const config = require('./config');
const consultas = require('./modulos/proyectonetflix/consultas');

const puerto = express();


//recibir y enviar json en las peticiones
puerto.use(express.json()); 
puerto.use(express.urlencoded({extended: true}));

puerto.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

//Configuracion inicial del puerto
puerto.set('port', config.puerto.port);
//Rutas
puerto.use('/app/net', consultas);

module.exports = puerto; // Export app to use it in index.js