const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Item = require('./resolvers/Item')
const Category = require('./resolvers/Category')
const Order = require('./resolvers/Order')
// var express = require('express');

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
  Query,
  Mutation,
  User,
  Item,
  Category,
  Order,
}

// 3  the schema and resolvers are bundled and passed to the GraphQLServer
const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
server.start(() => console.log(`Server is running on http://localhost:4000`))
