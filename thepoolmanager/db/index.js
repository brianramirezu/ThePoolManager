import db from "./server.js"
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode', //change password to yours
  database : 'nodemysql'
});

 //insert message
var insertOne= function(name, description, category, comments, email, phone, photo , callback){
  connection.query('INSERT INTO list (name, description, category, comments, email, phone , photo) VALUES (?,?,?,?,?,?,?)',
  [name, description, category, comments, email, phone, photo , (err, results)=>{
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
}

 var insertBooking = function (company,name,reason,hour,date, callback) {
   connection.query("INSERT INTO booking(company,name,reason,hour,date ) VALUES (?,?,?,?,?) ",
   [company,name,reason,hour,date], (err,results)=>{
     if(err)
     callback(err,null)
   }else {
     callback(null,results)
   }
}

module.exports.insertOne = insertOne
module.exports.insertBooking = insertBooking
