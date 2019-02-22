const { gql } = require('apollo-server');
const ___ = gql`
  type ___ {
    name: String
  }

  type ___SuccessResponse implements Response {
    ok: Boolean!
    __: ___
  }

  union ___Response = ___SuccessResponse | FailResponse 

  extend type Query {
    get___: String
  }
  extend type Mutation {
    add___: String
  }
  extend type Subscription {
    added___: String
  }
`

module.exports = ___;