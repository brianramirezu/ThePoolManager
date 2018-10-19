const express = require('express');
const mysql = require('mysql');
const app = express();




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
         console.log('MySql Connected...');
   }
});

app.post('/nodemysql', function(req, res){
 var photo= req.body.photo


 if(!name){
   console.log('post request error');
   res.sendStatus(400);
 }else {
   database.insertOne( photo, (err, results) =>{
     if(err){
       console.log('error in insertOne()');
       res.sendStatus(500)
     } else {
       res.status(200).json(results)
     }
   })
 }
})

app.listen('3001', () => {
   console.log('Server started on port 3001');
});
