const { pubsub } = require('../../helpers');

const User = {
  Query: {
    getUser: async (parent, args, context, info ) => {
      return ':v'
    }
  },
  Mutation: {
    addUser: async (parent, args, context, info ) => {
      pubsub.publish('ADDED_USER',{
        addedUser: ''
      })
      return ''
    }
  },
  Subscription: {
    addedUser: {
      subscribe: (parent, args , context , info) => {
        return pubsub.asyncIterator(['ADDED_USER'])
      }
    }
  },
  UserResponse: {
    __resolveType(obj, context , info) {
      if(obj.ok){
        return 'UserSuccessResponse'
      }
      return 'FailResponse'
    }
  }
}

module.exports = User;