const { GraphQLServer } = require('graphql-yoga')

// 1 defines your GraphQL schema
const typeDefs = `
type Query {
  info: String!
  feed: [Item!]!
}

type Item {
  id: ID!
  name: String!
  description: String!
  quantity: Int!
  comment: String!
  rating: String!
}
`

// 2  actual implementation of the GraphQL schema
// 1
let items = [{
  id: 'item-0',
  name: 'pen',
  description: 'used to write',
  quantity: 5,
  comment: 'please buy me',
  rating: 'Good'
}]

const resolvers = {
  Query: {
    info: () => `This is the API of a e-Commerce Website`,
    // 2
    feed: () => items,
  },
  // 3
  Item: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    description: (parent) => parent.description,
    quantity: (parent) => parent.quantity,
    comment: (parent) => parent.comment,
    rating: (parent) => parent.rating,
  }
}

// 3  the schema and resolvers are bundled and passed to the GraphQLServer
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
