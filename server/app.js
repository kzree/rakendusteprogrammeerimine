const express = require('express')
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require('dotenv').config();

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-fwj6k.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
    .then(() => {
        console.log("Database access success!");
    })
    .catch( err =>{
        console.log("Error: ", err);
    });

app.get("/api/items", (req, res)=>{
    res.json(DB.getItems());
});

app.get("/api/items/:itemId", (req,res)=>{
    res.send(DB.getItem(req.params.itemId));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

//Heroku
app.listen(PORT, ()=> {
    console.log("Server started", PORT);
});

console.log("Server running on: http://localhost:3000/");