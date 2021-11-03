const express = require('express');
const cors = require('cors');
const db = require('./config/conexion');


const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(cors());
//insertar datos en base de datos
app.get('/repuestos', (req, res) => {
db.query('SELECT * FROM autopartes; ', (err, data) => {
    if(err){
        return err
    }
    res.json({
        mensaje: 'Resultados',
        data
    })   
        
    })
});
//insertar un registro
app.get('/repuestos/:id', (req, res) => {
    console.log(req.params.id)
    const ID = req.params.id
    const sql = "SELECT * FROM autopartes WHERE id = ?"
    db.query(sql, [ID], (err, data) => {
        if(err){
            return err
        }
        res.json({
            mensaje: 'Resultados',
            data
        })   
            
        })
    });
//actualizar registro
app.put('/repuestos', (req, res) => {
    console.log(Object.values(req.body))
    const values = Object.values(req.body);
    const sql = "UPDATE autopartes SET repuestos=?, sistema=?, linea_vehicular=?, valor_unitario=?, cantidad=? WHERE id=?"
    db.query(sql, values, (err, result) => {
        if(err){
            return err
        }
        res.json({
            mensaje: 'Producto actualizado',
            result
        })   
            
        })
});


app.post('/repuestos', (req, res) => {
    console.log(Object.values(req.body));
    const values = Object.values(req.body);
    const sql = "INSERT INTO autopartes (repuestos, sistema, linea_vehicular, valor_unitario, cantidad) VALUES(?, ?, ?, ?, ?)"
    db.query(sql, values, (err, result) => {
       if(err){
            console.log(err)
            return err;        
       }
       res.json({
            mensaje: 'Producto agregado',
            result
        })
    })

})
//Borrar registro
app.delete('/repuestos/:id', (req, res) => {
    console.log(req.params.id)
    const ID = req.params.id
    const sql = "DELETE  FROM autopartes WHERE id = ?"
    db.query(sql, [ID], (err, result) => {
        if(err){
            return err
        }
        res.json({
            mensaje: 'Repuesto eliminado',
            result
        })   
            
        })
    });







app.listen(PORT, () => {
    console.log('servidor ejecutado en puerto:'+ PORT)
});