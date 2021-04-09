require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.ip, 
    language: req.headers["accept-language"],
    software:req.headers["user-agent"]
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Started");
});