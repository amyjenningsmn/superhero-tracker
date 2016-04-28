var express = require('express');
var index = require('./routes/index');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var heroRouter = require('./routes/heroRouter');

var app = express();

// Configs
app.use(express.static('server/public'));
app.use(bodyParser.json());

// MongoDB
var mongoURI = 'mongodb://localhost/superhero_tracker';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Error connecting to MongoDB', err);
})

MongoDB.open('start', function(){
  console.log('MongoDB started');
})

// Routes
app.use('/', index);
app.use('/hero', heroRouter);


// Server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'press ctrl-c to end');
})
