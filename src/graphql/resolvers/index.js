const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');

const { GraphQLUpload } = require('graphql-upload');
const { PubSub } = require('apollo-server');

const pubsub = new PubSub();

const ErrorResponse = require('./imports/ErrorResponse');
const File = require('./imports/File');


module.exports.pubsub = pubsub;

const Init = {
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
  }
}

const resolvers = _.merge(
  Init,
  ErrorResponse,
  File
);
module.exports = resolvers;