var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Halo" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hola" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Helo" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
