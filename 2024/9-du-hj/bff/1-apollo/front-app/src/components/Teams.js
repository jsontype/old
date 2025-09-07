import React from "react"
// import { useState } from "react"
import { useQuery, gql } from "@apollo/client"

// GraphQL 서버로부터 모든 컨텐츠를 표시하기 위한 쿼리
const GET_TEAMS = gql`
  query GetTeams {
    teams {
      id
      manager
    }
  }
`

export default function Teams() {
  const { loading, error, data } = useQuery(GET_TEAMS)

  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error</p>
  // GET_TEAMS 쿼리 응답을 콘솔로그에 찍는다.
  if (data) {
    console.log("GET_TEAMS 쿼리 응답: ", data)
    return <div>취득 성공</div>
  }
}
