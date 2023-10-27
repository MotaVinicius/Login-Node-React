const express = require("express");
const routes = require('./routes');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log('Ouvindo na porta 3000')
})
