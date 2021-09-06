var ApolloServer = require('apollo-server').ApolloServer;
var typeDefs = require('./src/schema').typeDefs;
var resolvers = require('./src/resolvers').resolvers;
var port = process.env.PORT || 8080;
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen({ port: port }, function () { return console.log("Server runs at: http://localhost:" + port); });
