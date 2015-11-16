var express     = require('express'),
	app         = express(), 
	http = require('http'),
	httpProxy = require('http-proxy');

// Sets the directory path for the app, __dirname resolves to the directory where this script resides
app.use(express.static(__dirname));

// Get homepage
app.get('/', function(req,res) {
	res.sendFile('index.html');
});

// // Get hackroulette
// app.get('/hackroulette', function(req,res) {
// 	console.log("Proxying to hackroulette");
// 	proxy.web(req, res, { target: 'http://localhost:3001' });
// });

app.listen(3000);
console.log("Listening on port 3000");