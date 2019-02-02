//Dependencies
let mysql = require("mysql");
// Create the MySQL connection object
let connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database: "burgers_DB"
    });
}

//Makes connection to the database
connection.connect(function(err) {
    if (err) {
        console.log("error connecting" + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

//Exports connection data for use with ORM
module.exports = connection;