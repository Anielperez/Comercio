const db = require('../database/conexion.js');

class UsuariosController {
    constructor() {

    }

    consultar(req, res)  {
        res.json({msg: 'Consulta de usuarios desde clase'});
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        res.json({msg: `Consulta detalle usuario desde clase con id ${id}`});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresa usuario desde clase'});
    }

    actualizar(req, res) {
        res.json({msg: 'Actualiza usuario desde clase'});
    }

    borrar(req, res) {
        res.json({msg: 'Borra usuario desde clase'});
    }
}

module.exports = new UsuariosController();