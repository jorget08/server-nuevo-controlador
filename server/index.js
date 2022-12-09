// const { ApolloServer } = require('apollo-server-express');
// const app = require('./express_server')
// const typeDefs = require('../graphql/schemas');
// const resolvers = require('../graphql/resolvers');
// const context = require('../graphql/context');
// const { createServer } = require('http');

// const apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context,
//     introspection: true,
//     playground: true
//   });

//   apolloServer.applyMiddleware({ app, path: '/graphql', cors: true });

// const server = createServer(app);
// module.exports = server;