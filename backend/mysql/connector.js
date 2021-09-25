var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password:'hoon3827',
  database: 'peterpet'
});

connection.connect(function (err){
  if(err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
  else console.log("success mysql connect");
});

export {connection}