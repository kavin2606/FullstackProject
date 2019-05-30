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
async function getCategory(parent, args, context, info) {
  const where = args.filter ?{ category :{name: args.filter },} : {}


  const items = await context.prisma.categories({
    where
  })
  return items
}

async function getCategoryItems(parent, args, context, info) {
  const where = {
    AND: [
      { title_contains: args.filter },
      { category :{name: args.filtercategory } },
    ],
  }

  const links = await context.prisma.items({
    where
  })
  return links
}
module.exports = {
  getItems,
  usersorders,
  getCategory,
  getCategoryItems,
  //userslist: (root, args, context) => context.prisma.users()
}
