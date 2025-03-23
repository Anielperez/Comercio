const express = require('express');
const Router = express.Router();
const tiendasController = require('../controllers/tiendasController.js');

Router.get('/', tiendasController.consultar);


Router.post('/', tiendasController.ingresar);
Router.post('/registraUsuario', tiendasController.asociarUsuarios);

Router.route("/:id")
    .get(tiendasController.consultarDetalle)
    .put(tiendasController.actualizar)
    .delete(tiendasController.borrar);


module.exports = Router;
