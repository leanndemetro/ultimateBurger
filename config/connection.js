var mysql = require("mysql");
// Global for connection
var connection;
// If on Heroku use the Envirnmental Variable for JawsDB
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "f2fbe0zvg9j8p9ng.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "pf5vzq6p4r28id6d",
    password: "xck04hmcjvh5x8c7",
    database: "n69rrmvmeezq6dy8"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;