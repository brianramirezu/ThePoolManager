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
var insertBooking = function (company,name,reason,hour,date, callback) {
  connection.query("INSERT INTO booking(company,name,reason,hour,date ) VALUES (?,?,?,?,?) ",
  [company,name,reason,hour,date], (err,results)=>{
    if(err)
    callback(err,null)
  }else {
    callback(null,results)
  }
}


module.exports.insertBooking = insertBooking
module.exports.insertOne = insertOne
