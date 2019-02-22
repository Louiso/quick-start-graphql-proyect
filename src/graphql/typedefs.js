const { gql } = require('apollo-server');

const Default = require('../imports/Default/typedef');
const File = require('../imports/File/typedef');
const User = require('../imports/User/typedef');

const typedefs = [
  Default,
  File,
  User
];

module.exports = typedefs;