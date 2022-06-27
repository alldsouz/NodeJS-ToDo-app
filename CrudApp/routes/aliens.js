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

//find by id
router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien);
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

//patch/update data by id
router.patch('/:id', async(req,res)=>{
    try{
        const alien= await Alien.findById(req.params.id);
        alien.tech = req.body.tech
        const a1 = await alien.save();
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
});

// //delete data by id
// router.patch('/:id', async(req,res)=>{
//     try{
//         const alien= await Alien.findById(req.params.id);
//         alien.tech = req.body.tech
//         const a1 = await alien.remove();
//         res.json(a1)
//     }catch(err){
//         res.send('Error')
//     }
// });

//delete try 2
router.delete('/:id', async(req,res)=>{
    try{
        const alienDelete = await Alien.deleteOne({_id:req.params.id})
        res.send('alien with id ' + req.params.id +' removed')
    }catch(e){
        res.send(e)
    }
});

module.exports = router