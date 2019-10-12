const express = require('express');
const router = express.Router();
const DB = require("./database.js");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    imgSrc: { type: String, required: true},
    title: { type: String, required: true},
    price: { type: Number, required: true},
    category: { type: String, required: true},
    created_at: { type: Date, default: Date.now}
})

const Item = mongoose.model("Item", itemSchema);

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