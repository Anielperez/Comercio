const db = require('../database/conexion.js');

class TiendaController {
    constructor() {

    }

    consultar(req, res)  {
        try {
            db.query(`SELECT * FROM usuarios`,
            (err, rows) => {
                if (err) {
                    res.staus(400).send(err);
                }
                res.status(200).json(rows);
            });
        } catch(err) {
            res.status(500).send(err.message);
        }
        
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        try {
            db.query(`SELECT * FROM usuarios WHERE id = ?`,[id],
            (err, rows) => {
                if (err) {
                    res.staus(400).send(err);
                }
                res.status(200).json(rows[0]);
            });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        try {
            const { id, dni, nombre, email, departamento, telefono, productos, descripcion, direccion, comerciante_id} = req.body;
            db.query(`INSERT INTO negocios
            (id, dni, nombre, email, departamento, telefono, productos, descripcion, direccion, comerciante_id)
            VALUES(?, '', '', '', '', '', '', '', '', ?);`,
                    [id, dni, nombre, email, departamento, telefono, productos, descripcion, direccion, comerciante_id],(err, rows) => {
                        if (err) {
                            res.staus(400).send(err);
                        }
                        res.status(201).json(rows);
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        const { id } = req.params;
        try {
            const { dni, nombre, email, departamento, telefono, productos, descripcion, direccion, comerciante_id} = req.body;
            db.query(`UPDATE negocios
            SET dni='', nombre='', email='', departamento='', telefono='', productos='', descripcion='', direccion='', comerciante_id=?
            WHERE id=?;`,
            [dni, nombre, email, departamento, telefono, productos, descripcion, direccion, comerciante_id],(err, rows) => {
                if (err) {
                    res.staus(400).send(err);
                }
                if (rows.affectedRows == 1)
                res.status(200).json({Respuesta: 'Registro actualizado con éxito'}); 
            })
} catch(err) {
    res.status(500).send(err.message);
}
    
    }

    borrar(req, res) {
        const { id } = req.params;
        try {
            db.query(`DELETE FROM comercio WHERE id= ?;`,
            [id],(err, rows) => {
                if (err) {
                    res.staus(400).send(err);
                }
                if (rows.affectedRows == 1)
                res.status(200).json({Respuesta: 'Registro eliminado con éxito'}); 
            })
    } catch(err) {
        res.status(500).send(err.message);
    }
        }
}

module.exports = new TiendaController();