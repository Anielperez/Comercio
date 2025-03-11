class ComerciantesController {
    constructor() {

    }

    consultar(req, res)  {
        res.json({msg: 'Consulta de comerciantes desde clase'});
    }

    consultarDetalle(req, res){
        res.json({msg: 'Consulta detalle comerciante desde clase'});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresa comerciante desde clase'});
    }

    actualizar(req, res) {
        res.json({msg: 'Actualiza comerciante desde clase'});
    }

    borrar(req, res) {
        res.json({msg: 'Borra comerciante desde clase'});
    }
}

module.exports = new ComerciantesController();