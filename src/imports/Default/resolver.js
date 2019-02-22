const { GraphQLUpload } = require('graphql-upload');

const Default = {
  Query: {
    holaMundo: () => "Hola Mundo"
  },
  Mutation:{
    iniciarBaseDeDatos: async (parent, args , context , info ) => {
      return true;
    },
    addMessage: (parent, args, context , info) => {      
      pubsub.publish('ADDED_MESSAGE', {
        addedMessage: "Se agrego un mensaje"
      });
      return 'agregar mensaje se completo'
    }
  },
  Upload: GraphQLUpload,
  Subscription: {
    addedMessage: {
      subscribe: (parent, args , context , info) => {
        return pubsub.asyncIterator(['ADDED_MESSAGE'])
      }
    }
  },

  Response: {
    __resolveType(obj, context , info) {
      return null;
    }
  }
}

module.exports = Default;