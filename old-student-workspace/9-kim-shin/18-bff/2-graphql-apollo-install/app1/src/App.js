import "./App.css"
import Teams from "./components/Teams"
import { ApolloProvider } from "@apollo/client"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  // uri : GraphQL 서버의 주소
  uri: "http://localhost:4000",
  // cache : InMemoryCache를 통한 캐시 관리
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Teams />
      </ApolloProvider>
    </div>
  )
}
