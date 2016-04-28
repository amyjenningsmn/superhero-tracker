var router = require('express').Router();
var path = require('path');

router.get('/', function(request, response){
  // response.send('Hello from the server and index.js');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

module.exports = router;
