const {AppolloServer} = require('apollo-server');

const server = new AppolloServer();
server.listen(8080).then(()=>console.log('Server running on port:',8080))
console.log('Graphql server here...');