function items(parent, args, context) {
  return context.prisma.user({ id: parent.id }).items()
}
function orderdetails(parent, args, context) {
  return context.prisma.user({id: parent.id}).orderdetails()
}

module.exports = {
  items,
  orderdetails,
}
