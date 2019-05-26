const { APP_SECRET, getUserId } = require('../utils')
async function feed(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { name_contains: args.filter },
    ],
  } : {}

  const items = await context.prisma.items({
    where
  })
  return items
}
function usersorders(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.user({
    id: userId,
  })
}

module.exports = {
  feed,
  usersorders
  //userslist: (root, args, context) => context.prisma.users()
}
