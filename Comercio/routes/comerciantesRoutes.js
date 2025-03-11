const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({msg: 'Consulta comerciantes'});
});


Router.post('/', (req, res) => {
    res.json({msg: 'Ingreso de comerciantes'});
});

Router.route("/:id")
    .get((req, res) => {
        res.json({msg: 'Consulta de un comerciantes'});
    })
    .put((req, res) => {
        res.json({msg: 'Actualizacion de comerciantes'});
    })
    .delete((req, res) => {
        res.json({msg: 'Borrado de comerciantes'});
    })


module.exports = Router;
