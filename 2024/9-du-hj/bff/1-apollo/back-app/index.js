const database = require("./database")
const { ApolloServer, gql } = require("apollo-server")

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

const resolvers = {
  // Query : 데이터를 반환하는 액션 함수들을 지정해둔 객체이다.
  Query: {
    teams: () => database.teams,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
