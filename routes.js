const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('SELECT * FROM libros', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
            });
    });
});

routes.post('/', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('INSERT INTO libros set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});

routes.delete('/:id', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('DELETE FROM libros WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});


routes.put('/:id', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('UPDATE libros set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});


module.exports = routes;