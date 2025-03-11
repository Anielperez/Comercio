const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({msg: 'Consulta usuarios'});
});


Router.post('/', (req, res) => {
    res.json({msg: 'Ingreso de usuarios'});
});

Router.route("/:id")
    .get((req, res) => {
        res.json({msg: 'Consulta de un usuario'});
    })
    .put((req, res) => {
        res.json({msg: 'Actualizacion de usuario'});
    })
    .delete((req, res) => {
        res.json({msg: 'Borrado de usuario'});
    })


module.exports = Router;
