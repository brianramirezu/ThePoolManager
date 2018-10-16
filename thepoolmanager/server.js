const express = require('express');
const mysql = require('mysql');
const insertOne = require("db/index.js")




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

const app = express();



});




// //post requests to post a message
// app.post('/sendMessage', function(req, res){
//   var name = req.body.name
//   var description =req.body.description
//   var category =req.body.category
//   var comments= req.body.comments
//   var email= req.body.email
//   var phone= req.body.phone
//   var photo= req.body.photo
//
//   if(!name){
//     console.log('post request error');
//     res.sendStatus(400);
//   }else {
//     database.insertOne(name, description, category, comments, email, phone, photo, (err, results) =>{
//       if(err){
//         console.log('error in insertOne()');
//         res.sendStatus(500)
//       } else {
//         res.status(200).json(results)
//       }
//     })
//   }
// })

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



// var runQuery = function(Query,Data,callback){
//    var connection = mysql.createConnection(dbConfig);
//    connection.connect(function(err) {
//       if (err) throw err;
//    });
//
//    connection.query(Query,Data,function(err, res){
//          if (err) throw err;
//          if (callback){
//             callback(res);
//          }
//       }
//    );
//         connection.end();
// }
//
// // module
// var DB = function(nodemysql){
//    nodemysql = config || {};
// }
//
// DB.prototype.getSingleData = function(data,callback){
//    var Query = queries.SQLGETSINGLEDATA;
//    var Data  = [data];
//    runQuery(Query,Data,function(res){
//       res = res.pop();
//       callback(res);
//    });
// }
//
// DB.prototype.saveSingleData = function(data){
//    var Query = queries.SQLSAVESINGLEDATA;
//    var Data  = data;
//    runQuery(Query,Data);
// }




app.listen('3001', () => {
   console.log('Server started on port 8000');
});