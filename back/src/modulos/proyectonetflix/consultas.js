

// SE HACE LA PETICION HTTP DEL LADO DEL CLIENTE HACIA EL SERVIDOR EN LA RAIZ DEL ARCHIVO
const express = require('express');
const controlador = require ('./controlador');
const respuesta = require('../../red/respuestas');

const router = express.Router();

router.get('/', function(req, res) {  // se hace una solicitud http a la raiz del archivo
  respuesta.success(req, res, 'Esta es una respuesta exitosa', 200);
});
// se hace una solicitud http al controlador 
router.get('/consultar/:tabla', todos); // consulta una tabla completa

router.get('/consultar/:tabla/:id', unosolo); // consulta el id de una tabla

router.post('/agregar/:tabla', agregar); // para agregar informacion nueva desde mi app

router.delete('/eliminar/:tabla', eliminar); // para eliminar una fila de una tabla

router.put('/actualizar/:tabla', actualizar);




async function todos(req, res) 
{   
  try {
    const arreglodedatos = await controlador.obtenertabla(req.params.tabla);
    respuesta.success(req, res,arreglodedatos, 200);
  } 
  catch (error) {
    respuesta.error(req, res, 'Error interno del servidor' + error, 500);
  }
}

async function unosolo(req, res) 
{
  try {
    const unosolo = await controlador.obteneridtabla(req.params.tabla,req.params.id);
    respuesta.success(req, res, unosolo, 200);
  } catch (error) {
    respuesta.error(req, res, 'Error interno del servidor' + error, 500);
  }
}

//AGREGAR
async function agregar(req, res) {
  try {
    const items = await controlador.agregarfila(req.params.tabla,req.body);
    respuesta.success(req, res, "se agrego exitosamente el registro", 201);
  } catch (error) {
    respuesta.error(req, res, 'Error interno del servidor' + error, 500);
  }
}


//ELIMINAR
async function eliminar(req, res) {
  try {
    const items = await controlador.eliminarfila(req.params.tabla,req.body.id);
    respuesta.success(req, res, "se elimino correctamente el registro", 200);
  } catch (error) {
    respuesta.error(req, res, 'Error interno del servidor' + error, 500);
  }
}

//ACTUALIZAR
async function actualizar(req, res) {
  const existe = await controlador.obteneridtabla(req.body.id);

if(existe== ''){

  respuesta.success(req, res, "registro no existe", 201);
  window.alert("El registro no existe! prueba con otro o crea uno nuevo...")
}else
{
  try {   
    const items = await controlador.actualizarfila(req.params.tabla,req.body);
    respuesta.success(req, res, "registro actualizado con exito", 200);
  } catch (error) {
    respuesta.error(req, res, 'Error interno del servidor' + error, 500);
  }
}
}

module.exports=router;