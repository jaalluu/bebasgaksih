var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Huhuu" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hahaa" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Hehee" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
