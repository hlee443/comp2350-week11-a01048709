const MongoClient = require("mongodb").MongoClient;
const is_heroku = process.env.IS_HEROKU || false;
const herokuURI = "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.2asjl.mongodb.net/localhost?retryWrites=true&w=majority"
const localURI = "mongodb://localhost:lab_example/?authSource=admin&retryWrites=true&w=majority;"
if (is_heroku) {
       var database = new MongoClient(herokuURI,
       {useNewUrlParser: true, useUnifiedTopology: true});
} else {
	var database = new MongoClient(localURI,
	{useNewUrlParser: true, useUnifiedTopology: true});
}


module.exports = database;
		
