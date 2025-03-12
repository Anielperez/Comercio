const db = require('../database/conexion.js');

class TiendaController {
    constructor() {

    }

    consultar(req, res)  {
        res.json({msg: 'Consulta de tienda desde clase'});
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        res.json({msg: `Consulta detalle tienda desde clase con id ${id}`});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresa tienda desde clase'});
    }

    actualizar(req, res) {
        res.json({msg: 'Actualiza tienda desde clase'});
    }

    borrar(req, res) {
        res.json({msg: 'Borra tienda desde clase'});
    }
}

module.exports = new TiendaController();