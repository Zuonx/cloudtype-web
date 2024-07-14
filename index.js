const express = require('express')

const app = express();

app.listen(8080, function() {
    console.log('server start on 8080')
});

app.get('/', function(req, res) { res.send("권쌤의 암산짱!") });
