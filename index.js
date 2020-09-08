const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRoute = require('./routes/auth.route');
const handleError = require('./helpers/handleError.helper');

app.use('/auth', authRoute);

app.use(handleError);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});