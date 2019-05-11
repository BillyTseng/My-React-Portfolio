const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'reactApps/portfolio')));

app.get('/portfolio', function(req, res) {
  res.sendFile(path.join(__dirname, 'reactApps/portfolio', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'reactApps/subreddits')));

app.get('/subreddits', function(req, res) {
  res.sendFile(path.join(__dirname, 'reactApps/subreddits', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'reactApps/shotchart')));

app.get('/shotchart', function(req, res) {
  res.sendFile(path.join(__dirname, 'reactApps/shotchart', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'reactApps/scores')));

app.get('/scores', function(req, res) {
  res.sendFile(path.join(__dirname, 'reactApps/scores', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'reactApps/around')));

app.get('/around', function(req, res) {
    res.sendFile(path.join(__dirname, 'reactApps/around', 'index.html'));
});
app.get('/around/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'reactApps/around', 'index.html'));
});
app.get('/around/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'reactApps/around', 'index.html'));
});
app.get('/around/register', function(req, res) {
  res.sendFile(path.join(__dirname, 'reactApps/around', 'index.html'));
});

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/home/<username>/keys/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/<username>/keys/fullchain.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

// https, required generated certificate.
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
