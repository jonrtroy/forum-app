const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const path = require('path');
app.use(express.static(
  path.join(__dirname, 'public')
));

app.use(require('./resources'));

app.listen(process.env.PORT || 3000);
