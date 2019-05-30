const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function createUser(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.prisma.createUser({ ...args, password })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

function createItem(parent, args, context, info) {
  console.log("entered");
  const userId = getUserId(context)
  return context.prisma.createItem({
    title: args.title,
    description: args.description,
    quantity: args.quantity,
    postedBy: { connect: { id: userId } },
    category: {connect:{name:args.category}},
  })
}

function addcategory(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createCategory({
    name: args.name,
  })
}

function placeorder(parent,args,context,info) {
  const userId = getUserId(context)
  return context.prisma.createOrder({
  orderedby: { connect: { id: userId } },
  itempurchased: { connect: { id:args.id } },
  })

}


module.exports = {
  createUser,
  login,
  createItem,
  addcategory,
  placeorder,
}
