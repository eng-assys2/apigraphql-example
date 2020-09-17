import startServer from './start-server'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

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

startServer({ typeDefs, resolvers })