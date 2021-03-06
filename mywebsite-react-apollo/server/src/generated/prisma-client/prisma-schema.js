module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCategory {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  name: String!
  itemslist(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  id: ID
  name: String!
  itemslist: ItemCreateManyWithoutCategoryInput
}

input CategoryCreateOneWithoutItemslistInput {
  create: CategoryCreateWithoutItemslistInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutItemslistInput {
  id: ID
  name: String!
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateInput {
  name: String
  itemslist: ItemUpdateManyWithoutCategoryInput
}

input CategoryUpdateManyMutationInput {
  name: String
}

input CategoryUpdateOneWithoutItemslistInput {
  create: CategoryCreateWithoutItemslistInput
  update: CategoryUpdateWithoutItemslistDataInput
  upsert: CategoryUpsertWithoutItemslistInput
  delete: Boolean
  disconnect: Boolean
  connect: CategoryWhereUniqueInput
}

input CategoryUpdateWithoutItemslistDataInput {
  name: String
}

input CategoryUpsertWithoutItemslistInput {
  update: CategoryUpdateWithoutItemslistDataInput!
  create: CategoryCreateWithoutItemslistInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  itemslist_every: ItemWhereInput
  itemslist_some: ItemWhereInput
  itemslist_none: ItemWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

type Item {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
  category: Category
  quantity: String!
  comment: String!
  rating: String!
  postedBy: User
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  name: String!
  description: String!
  category: CategoryCreateOneWithoutItemslistInput
  quantity: String!
  comment: String!
  rating: String!
  postedBy: UserCreateOneWithoutItemsInput
}

input ItemCreateManyWithoutCategoryInput {
  create: [ItemCreateWithoutCategoryInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateManyWithoutPostedByInput {
  create: [ItemCreateWithoutPostedByInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutCategoryInput {
  id: ID
  name: String!
  description: String!
  quantity: String!
  comment: String!
  rating: String!
  postedBy: UserCreateOneWithoutItemsInput
}

input ItemCreateWithoutPostedByInput {
  id: ID
  name: String!
  description: String!
  category: CategoryCreateOneWithoutItemslistInput
  quantity: String!
  comment: String!
  rating: String!
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  quantity_ASC
  quantity_DESC
  comment_ASC
  comment_DESC
  rating_ASC
  rating_DESC
}

type ItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
  quantity: String!
  comment: String!
  rating: String!
}

input ItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  quantity: String
  quantity_not: String
  quantity_in: [String!]
  quantity_not_in: [String!]
  quantity_lt: String
  quantity_lte: String
  quantity_gt: String
  quantity_gte: String
  quantity_contains: String
  quantity_not_contains: String
  quantity_starts_with: String
  quantity_not_starts_with: String
  quantity_ends_with: String
  quantity_not_ends_with: String
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  rating: String
  rating_not: String
  rating_in: [String!]
  rating_not_in: [String!]
  rating_lt: String
  rating_lte: String
  rating_gt: String
  rating_gte: String
  rating_contains: String
  rating_not_contains: String
  rating_starts_with: String
  rating_not_starts_with: String
  rating_ends_with: String
  rating_not_ends_with: String
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  name: String
  description: String
  category: CategoryUpdateOneWithoutItemslistInput
  quantity: String
  comment: String
  rating: String
  postedBy: UserUpdateOneWithoutItemsInput
}

input ItemUpdateInput {
  name: String
  description: String
  category: CategoryUpdateOneWithoutItemslistInput
  quantity: String
  comment: String
  rating: String
  postedBy: UserUpdateOneWithoutItemsInput
}

input ItemUpdateManyDataInput {
  name: String
  description: String
  quantity: String
  comment: String
  rating: String
}

input ItemUpdateManyMutationInput {
  name: String
  description: String
  quantity: String
  comment: String
  rating: String
}

input ItemUpdateManyWithoutCategoryInput {
  create: [ItemCreateWithoutCategoryInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutCategoryInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyWithoutPostedByInput {
  create: [ItemCreateWithoutPostedByInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateOneRequiredInput {
  create: ItemCreateInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
  connect: ItemWhereUniqueInput
}

input ItemUpdateWithoutCategoryDataInput {
  name: String
  description: String
  quantity: String
  comment: String
  rating: String
  postedBy: UserUpdateOneWithoutItemsInput
}

input ItemUpdateWithoutPostedByDataInput {
  name: String
  description: String
  category: CategoryUpdateOneWithoutItemslistInput
  quantity: String
  comment: String
  rating: String
}

input ItemUpdateWithWhereUniqueWithoutCategoryInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutCategoryDataInput!
}

input ItemUpdateWithWhereUniqueWithoutPostedByInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutPostedByDataInput!
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueWithoutCategoryInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutCategoryDataInput!
  create: ItemCreateWithoutCategoryInput!
}

input ItemUpsertWithWhereUniqueWithoutPostedByInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutPostedByDataInput!
  create: ItemCreateWithoutPostedByInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  category: CategoryWhereInput
  quantity: String
  quantity_not: String
  quantity_in: [String!]
  quantity_not_in: [String!]
  quantity_lt: String
  quantity_lte: String
  quantity_gt: String
  quantity_gte: String
  quantity_contains: String
  quantity_not_contains: String
  quantity_starts_with: String
  quantity_not_starts_with: String
  quantity_ends_with: String
  quantity_not_ends_with: String
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  rating: String
  rating_not: String
  rating_in: [String!]
  rating_not_in: [String!]
  rating_lt: String
  rating_lte: String
  rating_gt: String
  rating_gte: String
  rating_contains: String
  rating_not_contains: String
  rating_starts_with: String
  rating_not_starts_with: String
  rating_ends_with: String
  rating_not_ends_with: String
  postedBy: UserWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  orderedby: User!
  itempurchased: Item!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  orderedby: UserCreateOneInput!
  itempurchased: ItemCreateOneInput!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
}

type OrderPreviousValues {
  id: ID!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  orderedby: UserUpdateOneRequiredInput
  itempurchased: ItemUpdateOneRequiredInput
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  orderedby: UserWhereInput
  itempurchased: ItemWhereInput
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  items: ItemCreateManyWithoutPostedByInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutItemsInput {
  id: ID
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  items: ItemUpdateManyWithoutPostedByInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  items: ItemUpdateManyWithoutPostedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  update: UserUpdateWithoutItemsDataInput
  upsert: UserUpsertWithoutItemsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutItemsDataInput {
  name: String
  email: String
  password: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput!
  create: UserCreateWithoutItemsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    