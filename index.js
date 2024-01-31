var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Huh" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hah" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Heh" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
