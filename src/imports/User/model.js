const mongoose = { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { populateSchema } = require('../../helpers');

const UserSchema = Schema({

});
UserSchema.plugin(uniqueValidator, { message: '{PATH} se ha duplicado' });

const UserPaths = {
}

populateSchema(UserSchema, UserPaths);

const UserModel = mongoose.model('User', UserSchema);

module.exports.UserPaths = UserPaths;
module.exports = UserModel;