const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/index.html"));
})

app.get("/pages/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/index.html"));
})

app.get("/pages/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/about.html"));
})

app.get("/pages/contact-me.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/contact-me.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/404.html"));
})

app.use(express.static(path.join(__dirname, "/public")));