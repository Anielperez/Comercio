const express = require('express');
const Router = express.Router();
const usuariosController = require('../controllers/usuariosController.js');

Router.get('/', usuariosController.consultar);


Router.post('/', usuariosController.ingresar);

Router.route("/:id")
    .get(usuariosController.consultarDetalle)
    .put(usuariosController.actualizar)
    .delete(usuariosController.borrar);


module.exports = Router;
