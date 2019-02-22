const { pubsub } = require('../../helpers');

const ___ = {
  Query: {
    get___: async (parent, args, context, info ) => {
      return ''
    }
  },
  Mutation: {
    add___: async (parent, args, context, info ) => {
      return ''
    }
  },
  Subscription: {
    added___: {
      subscribe: (parent, args , context , info) => {
        return pubsub.asyncIterator(['ADDED_USER'])
      }
    }
  },
  ___Response: {
    __resolveType(obj, context , info) {
      if(obj.ok){
        return '___SuccessResponse'
      }
      return 'FailResponse'
    }
  }
}

module.exports = ___;