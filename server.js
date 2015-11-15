var express     = require("express"),
	app         = express();

// Sets the directory path for the app, __dirname resolves to the directory where this script resides
app.use(express.static(__dirname));

// Get homepage
app.get('/', function(req,res) {
	res.sendFile('index.html');
});

app.listen(3000);
console.log("Listening on port 3000");