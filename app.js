var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();

//set up template engine 
app.set('view engine' ,'ejs');

//staticfiles 
app.use('/assets', express.static('assets'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('you are listening on port 3000');