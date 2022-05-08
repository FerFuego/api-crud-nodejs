const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'X28activada',
    database: 'crud_nodejs_db'
});

conexion.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos');
    } else {
        console.log('Conexión a la base de datos establecida');
    }
});

module.exports = conexion;