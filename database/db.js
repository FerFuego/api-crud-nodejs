const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});

conexion.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos');
    } else {
        console.log('Conexión a la base de datos establecida');
    }
});

module.exports = conexion;
