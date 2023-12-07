const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;
//const useRouters = require('./routes/v1/userRoutes');
const API_V1 = require('./routes/v1/index');

app.get('/', (req, res) => {
    res.send('<h3>Duong hihi 66</h3>');
});

//Sử dụng app.use để định nghĩa route
//app.use('/users',useRouters);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1', API_V1);



app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});