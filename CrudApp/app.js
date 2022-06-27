const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/mongoosejs';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
});