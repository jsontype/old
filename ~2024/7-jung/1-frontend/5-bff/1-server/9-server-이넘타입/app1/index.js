const { ApolloServer } = require("apollo-server")
const _ = require("lodash")

const queries = require("./typedefs-resolvers/_queries")
const mutations = require("./typedefs-resolvers/_mutations")
const enums = require("./typedefs-resolvers/_enums")
const equipments = require("./typedefs-resolvers/equipments")
const supplies = require("./typedefs-resolvers/supplies")
const softwares = require("./typedefs-resolvers/softwares")

const typeDefs = [
  queries,
  mutations,
  enums,
  equipments.typeDefs,
  supplies.typeDefs,
  softwares.typeDefs,
]

const resolvers = [
  equipments.resolvers,
  supplies.resolvers,
  softwares.resolvers,
]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
