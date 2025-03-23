const db = require('../database/conexion.js');

class ComerciantesController {
    constructor() {

    }

    consultar(req, res)  {
        try {
            db.query(`SELECT * FROM comerciantes`,
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
            db.query(`SELECT * FROM comerciantes WHERE id = ?`,[id],
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
            const { id, dni, nombre, email, departamento, telefono, productos, precios, direccion} = req.body;
            db.query(`INSERT INTO comerciantes
            (id, dni, nombre, email, departamento, telefono, productos, precios, direccion)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                    [id, dni, nombre, email, departamento, telefono, productos, precios, direccion],(err, rows) => {
                        if (err) {
                            res.staus(400).send(err);
                        }
                        else {
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
            const { dni, nombre, email, departamento, telefono, productos, precios, direccion} = req.body;
            db.query(`UPDATE comerciantes
            SET dni=?, nombre=?, email=?, departamento=?, telefono=?, productos=?, precios=?, direccion=?
            WHERE id=?;`,
            [dni, nombre, email, departamento, telefono, productos, precios, direccion, id],(err, rows) => {
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
            db.query(`DELETE FROM comerciantes WHERE id= ?;`,
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

module.exports = new ComerciantesController();