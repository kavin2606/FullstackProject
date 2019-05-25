function items(parent, args, context) {
  return context.prisma.user({ id: parent.id }).items()
}
//wrong doesnt work have to fix
function orderdetails(parent, args, context) {
  return context.prisma.user({id: parent.id}).orderdetails()
}

module.exports = {
  items,
  orderdetails,
}
