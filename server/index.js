const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = []

app.get('/data', (req,res) => {
    res.status(200).json(data)
})

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening to port ${PORT} ❄️`))