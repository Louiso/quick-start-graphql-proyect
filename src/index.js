require('./config');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');

const Models = require('./models');

const db = require('./db');
const app = require('./app');

const schema = require('./graphql');

const server = new ApolloServer({
  schema,
  context: ({req, connection }) => {
    // console.log(connection);
    if(connection){
      return {
        ...Models,
        ...connection.context
      }
    }else{
      console.log('----',req.headers.authorization);
      return {
        ...Models,
        user: 'User'
      }  
    }
  },
  uploads: {
    maxFieldSize: 10000000,
    maxFiles: 20
  },
  subscriptions: {
    onConnect: (connectionParams, webSocket) => {
      // console.log(connectionParams);
      if (connectionParams.authorizationWS) {
        return {
          currentUser: "Funciona weeeee"
        }
      }

      // throw new Error('Missing auth token!');
    },
  },
});

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);
server.applyMiddleware({ app })

db.on('open',() => {
  console.log('Base de datos conectada');
  httpServer.listen(process.env.PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${server.subscriptionsPath}`)
  })
})