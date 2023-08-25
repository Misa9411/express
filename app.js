const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/baggage", (req,res) => {
    res.sendFile(path.join(__dirname, "/assets/babbage.html"))
})

app.get("/berners-lee", (req,res) => {
    res.sendFile(path.join(__dirname, "/assets/berners-lee.html"))
})
app.get("/clarke", (req,res) => {
    res.sendFile(path.join(__dirname, "/assets/clarke.html"))
})
app.get("/hamilton", (req,res) => {
    res.sendFile(path.join(__dirname, "/assets/hamilton.html"))
})
app.get("/hopper", (req,res) => {
    res.sendFile(path.join(__dirname, "/assets/hopper.html"))
})
app.get("/lovelace", (req,res) => {
    res.sendFile(path.join(__dirname, "/assets/lovelace.html"))
})
app.get("/turing", (req,res) => {
    res.sendFile(path.join(__dirname, "/assets/turing.html"))
})
app.use(express.static("public"));