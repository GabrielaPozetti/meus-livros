const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

require('./controllers/autocontroller')(app);
require('./controllers/bookscontroller')(app);

app.listen(3000);
console.log("Api running at port 3000")