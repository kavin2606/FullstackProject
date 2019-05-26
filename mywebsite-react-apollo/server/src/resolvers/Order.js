function itempurchased(parent, args, context) {
  return context.prisma.order({id: parent.id}).itempurchased()
}

function orderedby(parent, args, context) {
  return context.prisma.order({id: parent.id}).orderedby()
}

module.exports = {
  itempurchased,
  orderedby,
}
