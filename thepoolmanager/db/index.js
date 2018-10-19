import db from "./server.js"
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode', //change password to yours
  database : 'nodemysql'
});



var insertOne= function(photo , callback){
  connection.query('INSERT INTO events (photo) VALUES (?)',
  [ photo , (err, results)=>{
    if(err){
      console.log("insert error")
      callback(err, null)
    } else{
      console.log(results);
      callback(null, results)
      console.log('done');
    }
  }
)






module.exports.insertOne = insertOne
