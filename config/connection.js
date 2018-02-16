var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burgers_db'

});

connection.connect(function(err) {
	if (err) {
		console.error("There was an error connecting to the MySQL Database: " + err.stack);
		return;	
	}
	console.log("You have succesfully connected to the MySQL Database as id: " + connection.threadId);
});

module.exports = connection; 