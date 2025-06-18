const express = require("express");
const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("priv/ca.www.wudeyu.ip-ddns.com.key.pem"),
    cert: fs.readFileSync("certs/ca.www.wudeyu.ip-ddns.com.cert.pem"),
    ca: [
        fs.readFileSync("certs/ca.www.cert.pem")
    ]
};

const app = express();

app.get("/", (req, res) => {
    res.send("HOLA MUNDO");
});

https.createServer(options, app).listen(4433, () => {
    console.log("Server listening.");
});