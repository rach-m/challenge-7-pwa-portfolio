
var express = require('express');
var logger = require('morgan');
var app = express()
const PORT = 3000
app.use(logger('dev'));
app.use(express.static('public'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
