const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;