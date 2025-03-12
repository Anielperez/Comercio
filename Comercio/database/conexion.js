const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost', 
        port: 3306, 
        user: 'root',
        password: 'ajpa*1016',
        database: 'Tienda',
    }
);

db.connect((err) => {
    if (err)  {
        throw err;
    }
    console.log('Base dde datos conectada');
}); 

module.exports = db;