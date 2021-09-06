const {gql} = require('apollo-server');

const typeDefs = gql`

  type Category {
    id: ID!
    latitude: Int!
    longitude: Int!
    category: String!
    counter:Int!
  }

  type Query {
    allCategories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    increaseCounter(id: ID!): Category!
    decreaseCounter(id: ID!): Category!
  }
`


module.exports = {typeDefs};