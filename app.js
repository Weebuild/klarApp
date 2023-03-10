const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log('App listening on port 8080');
});