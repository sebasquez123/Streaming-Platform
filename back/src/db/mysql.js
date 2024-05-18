//CONFIGURA TODA LA CONEXION A LA BASE DE DATOS Y GESTIONA SUS ERRORES 



const mysql = require('mysql');
const config = require('../config');

//Archivo de configuracion de MySQL
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

var conexion;
conexion = mysql.createConnection(dbconfig);

function conectarBD(){
    
    conexion.connect((error) => {
        if (error) {
            console.log('Error en la conexion a la base de datos' + error.message);
            setTimeout(conectarBD, 200);
            return;
        }
        else {console.log('Conexión a la base de datos establecida');}
    });
}


//verifica que tipo de error es. si es por perdida de conexion intenta volver a reconectar
conexion.on('error', (error) => {
    console.log('Error en la base de datos: ' + error.message);
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
        conectarBD();
    } else {
        throw error;//algo está mal con la BD
    }
});



//METODOS DE INTERACCION CON LA BASE DE DATOS

//Traer datos de la tabla
function obtenertabla(tabla){
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, resultado) => {
            return !error ? resolve(resultado) : reject(console.log(`Algo salio mal al realizar la consulta: ${error}`));
        });
    });

}

//Traer un registro de la tabla
function obteneridtabla(tabla,id){
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE ${tabla}id=${id}`, (error, resultado) => {
            return !error ? resolve(resultado) : reject(console.log(`Algo salio mal al realizar la consulta: ${error}`));
        });
    });
    
}


//agregar un registro
function agregarfila(tabla,data){

    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ? `,data, (error, resultado) => {
            return !error ? resolve(resultado) : reject(console.log(`Algo salio mal al realizar la consulta: ${error}`));
        });
    });

}

//actualizar un registro
function actualizarfila(tabla,data,id){

    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`,[data,id], (error, resultado) => {
            return !error ? resolve(resultado) : reject(console.log(`Algo salio mal al realizar la consulta: ${error}`));
        });
    });

}

//Elimina un registro
function eliminarfila(tabla,id){

    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id = ${id}`, (error, resultado) => {
            return !error ? resolve(resultado) : reject(console.log(`Algo salio mal al realizar la consulta: ${error}`));
        });
    });

}


module.exports = {
    obtenertabla,
    obteneridtabla,
    agregarfila,
    actualizarfila,
    eliminarfila

}