const { GraphQLServer } = require('graphql-yoga')

// 1 defines your GraphQL schema
const typeDefs = `
type Query {
  info: String!
}
`

// 2  actual implementation of the GraphQL schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

// 3  the schema and resolvers are bundled and passed to the GraphQLServer
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
