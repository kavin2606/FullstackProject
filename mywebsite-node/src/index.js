const { GraphQLServer } = require('graphql-yoga')

let items = [{
  id: 'item-0',
  name: 'pen',
  description: 'used to write',
  quantity: '5',
  comment: 'please buy me',
  rating: 'Good'
}]

let idCount = items.length

const resolvers = {
  Query: {
    info: () => `This is the API of a e-Commerce Website`,
    feed: () => items,
  },
  Mutation: {
  post: (parent, args) => {
     const item = {
      id: `item-${idCount++}`,
      name: args.name,
      description: args.description,
      quantity: args.quantity,
      comment: args.comment,
      rating: args.rating,
    }
    items.push(item)
    return item
  }
},
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
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
