import "./App.css"
import Teams from "./components/Teams"
// ApolloClient 모듈 임포트
import { ApolloProvider } from "@apollo/client"
import { ApolloClient, InMemoryCache } from "@apollo/client"

// client : GraphQL 서버로와 정보를 주고받을 ApolloClient 객체
const client = new ApolloClient({
  // uri : GraphQL 서버의 주소
  uri: "http://localhost:4000",
  // cache : InMemoryCache를 통한 캐시 관리
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Teams />
      </div>
    </ApolloProvider>
  )
}

export default App
