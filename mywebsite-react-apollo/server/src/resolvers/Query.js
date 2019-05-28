const { APP_SECRET, getUserId } = require('../utils')
async function getItems(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { title_contains: args.filter },
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
  getItems,
  usersorders
  //userslist: (root, args, context) => context.prisma.users()
}
