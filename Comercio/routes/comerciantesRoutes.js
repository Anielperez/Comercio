const express = require('express');
const Router = express.Router();
const ComerciantesController = require('../controllers/comerciantesController.js');

Router.get('/', ComerciantesController.consultar);


Router.post('/', ComerciantesController.ingresar);

Router.route("/:id")
    .get(ComerciantesController.consultarDetalle)
    .put(ComerciantesController.actualizar)
    .delete(ComerciantesController.borrar);


module.exports = Router;
