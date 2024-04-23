const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express(); // Create an Express application

// Database connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hematoncolinq'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('/', (_req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// Fetch health care center data
app.get('/health_care_center', (_req, res) => {
    db.query('SELECT * FROM health_care_center', (err, results) => {
        if (err) {
            // handle error
        }
        res.json(results);
    });
});