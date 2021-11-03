const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S@ntiago1224',
    database: 'basedatos_tienda'
});

conexion.connect( (err) => {
    if(err) {
        console.log('Error BD: ', err);
        return err;
    }
    console.log('conexion establecida!');
});
module.exports = conexion;