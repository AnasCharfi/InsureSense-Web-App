const mysql = require("mysql2");
//const mysql = require('mysql2/promise');

const dbConfig = require("../config/db.config.js");

var dbconnection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    connectionLimit: 10
});

// Attempt to catch disconnects 
dbconnection.on('connection', function(connection) {
    console.log('DB Connection established');

    connection.on('error', function(err) {
        console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function(err) {
        console.error(new Date(), 'MySQL close', err);
    });

});
/*
// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
*/

module.exports = dbconnection;