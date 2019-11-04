const express = require('express');
const router = express.Router();
const User = require("./user.model.js");

//Gets all users
router.get("/users", (req, res) => {
    User.find({}, (err, docs) => {
        if(err) return handleError(err, res);
        res.status(200).json(docs);
    });
});

router.delete("/users/purge", (req, res)=>{
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