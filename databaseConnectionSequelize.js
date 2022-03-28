const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = "mongodb+srv://theMongoAdmin:<password>@cluster0.2asjl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const dbConfigLocal = "mongodb://localhost/?authSource=admin&retryWrites=true&w=majority;";

if (is_heroku) {
	var databaseConnectionString = dbConfigHeroku;
}
else {
	var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
		https://github.com/hlee443/comp2350-week11-a01048709/blob/main/databaseConnectionSequelize.js
