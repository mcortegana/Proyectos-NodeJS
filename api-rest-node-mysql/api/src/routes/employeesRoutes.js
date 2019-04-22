const express = require('express');
const router = express.Router();
const connection = require('../database/database');

router.get('/employees', (req, res) => {
    connection.query('SELECT * FROM employee', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('err');
        }
    })
});

router.get('/employees/:id', (req, res) => {
    let {id} = req.params;
    let queryString = 'select * from employee where employee_pk = ?';
    connection.query(queryString, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
          console.log(err);
        }
    });
});

module.exports = router;