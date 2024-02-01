var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "hadoh" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "hadooh" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "hadoooh" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
