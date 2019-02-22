const _ = require('lodash');
const bcrypt = require('bcrypt');

const Default = require('../imports/Default/resolver');
const File = require('../imports/File/resolver');
const User = require('../imports/User/resolver');

const resolvers = _.merge(
  Default,
  File,
  User
);

module.exports = resolvers;