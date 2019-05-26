"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Item",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/kaurManjot/mywebsite-node/dev`
});
exports.prisma = new exports.Prisma();
