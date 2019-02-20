const { gql } = require('apollo-server');

const ErrorResponse = gql`
  type Error {
    path: String
    message: String
  }
  interface Response {
    ok: Boolean!
  }
  type FailResponse implements Response{
    ok: Boolean!
    errors: [Error]
  }
`

module.exports = ErrorResponse;