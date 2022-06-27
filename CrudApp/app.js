const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/mongoosejs';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...');
});

app.use(express.json());

const alienRouter = require('./routers/aliens')
app.use('/aliens', alienRouter);

app.listen(9000,function(){
    console.log('server started at port 9000');
});