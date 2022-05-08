const conexion = require('../database/db');

exports.get = (req, res) => {
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
};

exports.create = function (req, res) {
    res.render('create', {
        title: 'Nuevo usuario',
    })
};

exports.save = (req, res) => {
   const { user, rol } = req.body;
   //conexion.query = `INSERT INTO users (user, rol) VALUES ('${user}', '${rol}')`;
   conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/');
        }
   });
};

exports.edit = (req, res) => {
    conexion.query('SELECT * FROM users WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.render('edit', {
                title: 'Editar usuario',
                user: result[0]
            });
        }
    });
};

exports.update = (req, res) => {
    const { user, rol } = req.body;
    conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user, rol:rol}, req.params.id], (err, result) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/');
        }
    });
};

exports.delete = (req, res) => {
    conexion.query('DELETE FROM users WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
}