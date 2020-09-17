const usersData = [
  { _id: String(Math.random()), name: 'Lucas', email: 'lucas@teste.com', active: true },
  { _id: String(Math.random()), name: 'Lucas2', email: 'lucas2@teste.com', active: false },
  { _id: String(Math.random()), name: 'Lucas3', email: 'lucas3@teste.com', active: true },
]
// A map of functions which return data for the schema.
export default {
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