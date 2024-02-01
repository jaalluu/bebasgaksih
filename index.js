var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "apaya" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "apadong" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "apasih" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
