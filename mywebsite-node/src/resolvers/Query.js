function feed(parent, args, context, info) {
  return context.prisma.items()
}

module.exports = {
  feed,
}
