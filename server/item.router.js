const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");

//Delete item
router.delete("/api/items/:itemId", (req, res) => {
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err) =>{
        if(err) {
            return res.send(500);
        }

        console.log("Success!");
        res.send(200);
    })
})

//New item
router.post("/api/items", (req, res) => {
    const props = {
        imgSrc: "https://www.euronics.ee/UserFiles/Products/Images/227787-312157-mediumsmall.png",
        title: "\nSülearvuti Apple MacBook Air 2019 (256 GB) SWE\n",
        price: 1367,
        category: "laptops"
    }
    const item1 = new Item(props);
    item1.save( err => {
        if(err){
            console.log("Error: ", err);
            res.send(500);
            return;
        }

        console.log("Success create!");
        res.send(201);
    })
})

router.get("/api/items/:itemId", (req, res)=>{
    Item.findById(req.params.itemId, function (err, item) {
        if(err){
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    })
});

router.get("/api/items", (req,res)=>{
    Item.find({}, function(err, items) {
        if(err){
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(items);
    })
});

module.exports = router;