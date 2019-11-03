const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const User = require("./user.model.js");

//Gets all users
router.get("/api/users", (req, res) => {
    User.find({}, (err, docs) => {
        if(err) return handleError(err, res);
        res.status(200).json(docs);
    });
});

router.post("/api/users/signin", (req, res) =>{
    User.findOne({email: req.body.email},(err, doc) => {
        if(err) return handleError(err, res);
        res.send(doc);
    })
})
//Create user
router.post("/api/users/signup", (req, res) => {
    const user = new User(req.body);

    user.save((err) =>{
        if(err) return handleError(err, res);
        console.log("Succ");
        res.status(200).json(user);
    })
})

router.delete("/api/users/purge", (req, res)=>{
    User.deleteMany({}, (err, docs)=>{
        if(err) return handleError(err,res);
        console.log(docs);
        res.send(204)
    })
})
function handleError(err, res){
    console.log(err);
    res.send(500);
}
module.exports = router;