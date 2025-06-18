const express = require("express");
const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("priv/ca.www.serveo.net.key.pem"),
    cert: fs.readFileSync("cert/ca.www.serveo.net.cert.pem"),
    ca: [
        fs.readFileSync("cert/ca.www.cert.pem")
    ]
};

const app = express();

app.get("/", (req, res) => {
    res.send("HOLA MUNDO");
});

https.createServer(options, app).listen(4433, () => {
    console.log("Server listening.");
});