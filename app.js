const express = require('express')
const app = express()
const path = require("path");
const PORT = 3000
const DB = require("./server/database.js");

app.get("/items", (req, res)=>{
    res.json(DB.getItems());
});

app.get("/items/:itemId", (req,res)=>{
    res.send(DB.getItem(req.params.itemId));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
})
app.use(express.static('dist'));

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Heroku
app.listen(process.env.PORT || PORT, ()=> {
    console.log("Server started", PORT);
});

console.log("Server running on: http://localhost:3000/");