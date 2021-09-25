var mysql = require('mysql');

const connection = mysql.createConnection({
  host: '213.0.113.1',
  port: 3306,
  user: 'root',
  password:'0000',
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