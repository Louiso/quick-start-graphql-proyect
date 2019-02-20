const { gql } = require('apollo-server');

const ErrorResponse = require('./imports/ErrorResponse');
const File = require('./imports/File');

const typedefsBase = gql`
  scalar Upload
  type Query {
    holaMundo : String
  }
  type Mutation {
    iniciarBaseDeDatos: Boolean,
    addMessage: String
  }
  type Subscription {
    addedMessage: String
  }
`

const typedefs = [
  typedefsBase,
  ErrorResponse,
  File
];

module.exports = typedefs;