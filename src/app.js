const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const UPLOAD_DIR = path.resolve(__dirname,'..','uploads');

app.use(morgan('dev'))
app.use(express.static(UPLOAD_DIR));

module.exports = app;