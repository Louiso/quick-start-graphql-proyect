const mongoose = { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { populateSchema } = require('../../helpers');

const ___Schema = Schema({

});
___Schema.plugin(uniqueValidator, { message: '{PATH} se ha duplicado' });

const ___Paths = {
  path: '___',
  populate: [{
    path: '',
    populate: [{
      
    }]
  }]
}

populateSchema(___Schema, ___Paths);

const ___Model = mongoose.model('___', ___Schema);

module.exports.___Paths = ___Paths;
module.exports = ___Model;