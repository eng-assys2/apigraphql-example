const { ApolloServer, gql } = require('apollo-server')

// Toda request eh POST
// Toda request bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID

/**
 * query {
 *  posts {
 *    title
 *    author {
 *      name
 *      email
 *      active
 *    }
 *  }
 * }
 */

// The GraphQL schema
const typeDefs = gql`
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

const usersData = [
  { _id: String(Math.random()), name: 'Lucas', email: 'lucas@teste.com', active: true },
  { _id: String(Math.random()), name: 'Lucas2', email: 'lucas2@teste.com', active: false },
  { _id: String(Math.random()), name: 'Lucas3', email: 'lucas3@teste.com', active: true },
]

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    users: () => usersData,
    getUserByEmail: (_, args) => usersData.find(user => user.email == args.email)
  },
  Mutation: {
    createUser: (_, args) => {
      usersData.push({
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true
      })
      return usersData[usersData.length - 1]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})