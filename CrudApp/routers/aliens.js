const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

//get request
router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens);
    }catch(err){
        res.send('Error ' + err)
    }
});

//post request
router.post('/',async(req,res)=>{
    const alien = new Alien({
        name:req.body.name,
        tech:req.body.tech
    });
    try{
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send("error");
    }
});

module.exports = router