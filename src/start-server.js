import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

const PORT = 5000
const DB_IP = '127.0.0.1'

function startServer({ typeDefs, resolvers }) {
  mongoose.connect(
    `mongodb://test:test@${DB_IP}:27017/graphql?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  const server = new ApolloServer({ typeDefs, resolvers })
  server
    .listen({ port: PORT })
    .then(({ url }) => console.log(`🔥 Server started at ${url}`))
}

export default startServer
