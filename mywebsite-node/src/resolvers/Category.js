function itemslist(parent, args, context) {
  return context.prisma.category({id: parent.id}).itemslist()
}

module.exports = {
  itemslist,
}
