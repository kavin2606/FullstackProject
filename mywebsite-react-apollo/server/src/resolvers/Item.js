function postedBy(parent, args, context) {
  return context.prisma.item({ id: parent.id }).postedBy()
}

function category(parent, args, context) {
  return context.prisma.item({id: parent.id}).category()
}

function orderinfo(parent, args, context) {
  return context.prisma.item({id: parent.id}).orderinfo()
}

module.exports = {
  postedBy,
  category,
  orderinfo,
}
