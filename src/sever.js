const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h3>Duong hihi</h3>');
});

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});