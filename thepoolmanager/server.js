const express = require('express');
const mysql = require('mysql');


import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'holacode',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.use('/static', express.static('./server/static'));

app.use(corsPrefetch);

app.post('/multiple', imagesUpload(
    './server/static/multipleFiles',
    'http://localhost:9090/static/multipleFiles',
    true
));

app.post('/notmultiple', imagesUpload(
    './server/static/files',
    'http://localhost:9090/static/files'
));


app.listen('8000', () => {
    console.log('Server started on port 3000');
});
