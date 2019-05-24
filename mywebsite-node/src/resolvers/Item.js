function postedBy(parent, args, context) {
  return context.prisma.item({ id: parent.id }).postedBy()
}

function category(parent, args, context) {
  return context.prisma.item({id: parent.id}).category()
}

module.exports = {
  postedBy,
  category,
}
