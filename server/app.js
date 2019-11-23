const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Item = require("./item.model.js");
const bodyParser = require("body-parser");
const apiRouter = require("./apiRouter.js");

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-fwj6k.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

function listen(){
    app.listen(PORT, ()=> {
        console.log("Server started", PORT);
        console.log("Server running on: http://localhost:3000/");
    });
}

mongoose.connect(DB_URL)
    .then(() => {
        console.log("Database access success!");
        listen();
    })
    .catch( err =>{
        console.log("", err);
    });