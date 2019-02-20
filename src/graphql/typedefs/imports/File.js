const { gql } = require('apollo-server');

const File = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  extend type Query {
    uploads: [File]
  }
  extend type Mutation {
    singleUpload(file: Upload): File!
  }
`;

module.exports = File;