var express     = require('express'),
	app         = express(), 
	fork = require('child_process').fork;

// Sets the directory path for the app, __dirname resolves to the directory where this script resides
app.use(express.static(__dirname));

// Get homepage
app.get('/', function(req,res) {
	res.sendFile('index.html');
});

// Start node app
app.listen(3000);
console.log("Personal Website listening on port 3000");

// Use node child processes to start side projects on different ports
// All we need is nginx to act as a proxy to redirect, for example, blakelockbrown.com/hackroulette to localhost:3001
// Plain and simple! :) 
var hackrouletteApp = fork('projects/hackroulette/server.js');
var onlineCompilerApp = fork('projects/Online-Compiler/server.js');
