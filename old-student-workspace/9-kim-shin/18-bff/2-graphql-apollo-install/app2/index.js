const database = require("./database")
const { ApolloServer, gql } = require("apollo-server")

// 타입정의
const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
`

// 리졸버
const resolvers = {
  Query: {
    teams: () => database.teams,
  },
}

// 연결
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
