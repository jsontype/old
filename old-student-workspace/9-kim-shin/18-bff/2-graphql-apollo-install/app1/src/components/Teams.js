import React from "react"
import { useQuery, gql } from "@apollo/client"

const GET_TEAMS = gql`
  query GetTeams {
    teams {
      id
      manager
      office
      extension_number
      mascot
      cleaning_duty
      project
    }
  }
`

export default function Teams() {
  const { loading, error, data } = useQuery(GET_TEAMS)

  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error :(</p>
  // GET_TEAMS 쿼리 응답을 콘솔로그에 찍는다.
  if (data) {
    console.log("GET_TEAMS 쿼리 응답: ", data)
  }

  const render = data.teams.map((team) => {
    return (
      <div key={team.id}>
        <div>팀ID: {team.id}</div>
        <div>매니져: {team.manager}</div>
        <div>office: {team.office}</div>
        <div>extension_number: {team.extension_number}</div>
        <div>mascot: {team.mascot}</div>
        <div>cleaning_duty: {team.cleaning_duty}</div>
        <div>project: {team.project}</div>
        <hr />
      </div>
    )
  })

  return <div>{render}</div>
}
