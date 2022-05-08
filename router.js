const express = require('express');
const router = express.Router();

// Como ya pase los metodos refactorizados al controlador,
// el reuqired conexion se puede eliminar
//const conexion = require('./database/db');

// Invoco al controlador
const crud = require('./controllers/crud');

// Show all users
/* router.get('/', function (req, res) {
    conexion.query('SELECT * FROM users', (err, result) => {
        if (err) {
            //console.log(err);
            throw err;
        } else {
            //res.send(result);
            res.render('index', {
                title: 'CRUD con NodeJS y MySQL',
                users: result
            });
        }
    });
}); */

// Add new users to the database
/* router.get('/create', function (req, res) {
    res.render('create', {
        title: 'Nuevo usuario',
    })
}); */

// Show all users - refactor
router.get('/', crud.get);

// Add new users to the database - refactor
router.get('/create', crud.create);

// Save new users to the database
router.post('/save', crud.save);

// Edit users in the database
router.get('/edit/:id', crud.edit);

// Update users in the database
router.post('/update/:id', crud.update);

// Delete users in the database
router.get('/delete/:id', crud.delete);

module.exports = router;