import startServer from './start-server'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

startServer({ typeDefs, resolvers })
