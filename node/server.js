const express = require('express');
const path = require('path');


const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/",(req, res)=>{
    // res.set("Content-Type", "text-html");
    res.type('html');
    res.send("<h1>Olá Mundo</h1>");
})

app.post("/",(req, res)=>{
    res.send("<h1>Olá Mundo com post</h1>");
})

app.put("/",(req, res)=>{
    res.send("<h1>Olá Mundo com put</h1>");
})

app.delete("/",(req, res)=>{
    res.send("<h1>Olá Mundo com delete</h1>");
})

const port = 5000;

app.listen(port, () =>{
    console.log(`server running on port: ${port}`)
})

