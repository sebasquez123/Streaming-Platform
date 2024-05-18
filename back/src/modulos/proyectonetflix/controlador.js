// HACE DE PUENTE PARA CONTROLAR LOS METODOS DE LLAMADO DE LA BASE DE DATOS HACIA LAS RUTAS

const db = require('../../db/mysql');


function obtenertabla(tabla) {
    return db.obtenertabla(tabla);
}

function obteneridtabla(tabla,id) {
    return db.obteneridtabla(tabla, id);
}

function agregarfila(tabla,data) {
    return db.agregarfila(tabla, data);
}

function actualizarfila(tabla,data) {
    return db.actualizarfila(tabla, data);
}

function eliminarfila(tabla,id) {
    return db.eliminarfila(tabla, id);
}


module.exports = {
    obtenertabla,
    obteneridtabla,
    agregarfila,
    eliminarfila,
    actualizarfila
}