// const mysql = require('mysql2');

// const is_heroku = process.env.IS_HEROKU || false;

// const dbConfigHeroku = {
// 	host: "us-cdbr-east-03.cleardb.com",
// 	user: "b1ab7fb2ee03bc",
// 	password: "2a484a2d",
// 	database: "heroku_3d208ad4bd6f421",
// 	multipleStatements: false,
// 	namedPlaceholders: true
// };

// const dbConfigLocal = {
// 	host: "localhost",
// 	user: "root",
// 	password: "Password",
// 	database: "lab_example",
// 	multipleStatements: false,
// 	namedPlaceholders: true
// };

// if (is_heroku) {
// 	var database = mysql.createPool(dbConfigHeroku);
// }
// else {
// 	var database = mysql.createPool(dbConfigLocal);
// }

const MongoClient = require("mongodb").MongoClient;
const is_heroku = process.env.IS_HEROKU || false;
const herokuURI = "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.4ulcc.mongod b.net/myFirstDatabase?retryWrites=true&w=majority"
const localURI = "mongodb://localhost/?authSource=admin&retryWrites=true&w=majority;"
if (is_heroku) {
       var database = new MongoClient(herokuURI,
       {useNewUrlParser: true, useUnifiedTopology: true});
} else {
	var database = new MongoClient(localURI,
	{useNewUrlParser: true, useUnifiedTopology: true});
}


module.exports = database;
		
