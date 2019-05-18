const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
// let items = [{
//   id: 'item-0',
//   name: 'pen',
//   description: 'used to write',
//   quantity: '5',
//   comment: 'please buy me',
//   rating: 'Good'
// }]
//
// let idCount = items.length

const resolvers = {
  Query: {
    info: () => `This is the API of a e-Commerce Website`,
    feed: (root, args, context, info) => {
  return context.prisma.items()
},
  },
  Mutation: {
    post: (root, args, context) => {
          return context.prisma.createItem({
            name: args.name,
            description: args.description,
            quantity: args.quantity,
            comment: args.comment,
            rating: args.rating,
          })
        },
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
  context: { prisma },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
