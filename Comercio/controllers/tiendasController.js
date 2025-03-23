const db = require('../database/conexion.js');

class TiendaController {
    constructor() {

    }

    consultar(req, res)  {
        try {
            db.query(`SELECT * FROM negocios`,
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
            db.query(`SELECT * FROM negocios WHERE id = ?`,[id],
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
            VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?, NULL);`,
                    [id, dni, nombre, email, departamento, telefono, productos, descripcion, direccion, comerciante_id],(err, rows) => {
                        if (err) {
                            res.status(400).send(err.message);
                        } else {
                            res.status(201).json({id: rows.insertId});    
                        }
                            
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
            db.query(`DELETE FROM negocios WHERE id= ?;`,
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


        asociarUsuarios(req, res) {
            try {
                const { negocio_id, usuario_id} = req.body;
                db.query(`INSERT INTO negocios_usuarios
                (negocio_id, usuario_id)
                VALUES(?, ?);`,
                        [negocio_id, usuario_id],(err, rows) => {
                            if (err) {
                                res.status(400).send(err.message);
                            } else {
                                res.status(201).json({respuesta: 'Usuario registrado con éxito'});    
                            }
                                
                        });
            } catch(err) {
                res.status(500).send(err.message);
            }
        }
}

module.exports = new TiendaController();