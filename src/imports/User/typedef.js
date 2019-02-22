const { gql } = require('apollo-server');

const User = gql`
  type User {
    name: String
  }

  type UserSuccessResponse implements Response {
    ok: Boolean!
    user: User
  }

  union UserResponse = UserSuccessResponse | FailResponse 

  extend type Query {
    getUser: String
  }
  extend type Mutation {
    addUser: String
  }
  extend type Subscription {
    addedUser: String
  }
`

module.exports = User;