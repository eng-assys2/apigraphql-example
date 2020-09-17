const { gql } = require('apollo-server')

// The GraphQL schema
export default gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: String!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    "A simple type for getting started!"
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`