const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT , ()=> {
    console.log('app listening on port '+ PORT )
});