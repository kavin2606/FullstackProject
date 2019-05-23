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

module.exports = {
  feed,
}
