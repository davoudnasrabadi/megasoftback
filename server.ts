const {ApolloServer} = require('apollo-server');
const {typeDefs} =require('./src/schema');
const {resolvers} = require('./src/resolvers');
const port = process.env.PORT || 8080
const server = new ApolloServer({typeDefs,resolvers});
server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));

