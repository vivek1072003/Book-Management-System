var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : 'vivek'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("!! Connected to Database !! ");
});

module.exports = con
