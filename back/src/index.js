
//EMPIEZA A ESCUCHAR EL PUERTO DEFINIDO EN EL ARCHIVO APP.JS

const enrutador = require('./enrutador');   // Import the routes from enrutador.js

enrutador.listen(enrutador.get('port'), () => {
    console.log('Server on port', enrutador.get('port'));
});