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
    User.signin(req.body)
    .then( user => {
        res.json(user);
    })
    .catch( err => {
        handleError(err, res);
    });
})
//Create user
router.post("/api/users/signup", (req, res) => {
    User.signup(req.body)
        .then( user =>{
            res.status(200).json(user);
        })
        .catch( err => {
            return handleError(err, res);
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